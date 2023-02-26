---
title: The science of easing curves, and the art of CSS animation
date: 2023-02-22
updated: 2023-02-26
categories:
  - css
  - design
  - web
coverImage: easing/cubic-bezier.png
coverWidth: 16
coverHeight: 9
excerpt: The easing curve can make or break any animation on the web. Let's look at the science of CSS cubic-bezier curves, and the art of using them to make the best web animations possible.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
  import ExampleCurve from '$lib/components/demos/ExampleCurve.svelte'
</script>


Part of my son's evening routine is picking up the various toys he's gotten out and played with that day (or gotten out, at least), and putting those items all back into the toy basket.

Usually, my four-year-old casually places the toys into the basket at a steady pace, so we can get on with the more fun parts of bedtime, like reading books.

Other times, when he feels like stalling, the toys casually float along as slowly as possible; others, they arc playfully in the air, as an ad hoc game forms around the process.

Sometimes, it's a race, and the toys fly rapidly into the basket. Sometimes they zing by in frustration. And, of course, sometimes there are slow, melancholy theatrics to go along with a day of fun coming to an end. (I get it; I hate when play time is over, too.)

---

In all the above cases, the toys do exactly the same thing; they travel along a more-or-less predefined route to a set destination. But even though it's the same action every time, the _way_ the toys travel is meaningful.

<CalloutPlusQuote>

There's a story in the way things move, both in the real world and in user interfaces.

</CalloutPlusQuote>

Artfully crafted, smooth transitions and animations are one of the most important details that help set excellent user interfaces apart from the rest. Well-designed movement makes a UI both more engaging _and_ more intuitive.

Bad transitions and animations, however, can make the same UI feel mediocre, cheap, confusing, or even broken. Poorly implemented movement could even be worse than no movement at all.

At the center of any movement on the web is what's called an easing curve. This curve is the "rhythm" of the movement, and understanding it well--with the aim of improving our own animations and UIs--is the goal of this post.


## What's the difference between a transition and an animation?

Before we get started, I'd like to clarify this point: _I'll use the words "transition" and "animation" mostly interchangeably in this post, even though the two concepts are distinct in CSS_.

I'll also assume you have a decent understanding of the CSS principles behind the two already, but as a refresher/clarifier:

**Transition:**

- Uses the `transition` property
- Transitions an element between exactly two states
- Usually the result of a trigger event, like hovering over an element, or clicking on something
- Plays once; stays in end state as long as the trigger condition is true, then reverts

An example might be a button that changes color when it has hover or focus:

```css
.btn {
  background: lightblue;
  transition: background .2s ease;
}

.btn:is(:hover, :focus) {
  background: yellow;
}
```

**Animation:**

- Uses `@keyframes` animations, and applies them with the `animation` property (or properties)
- Animates an element between _any number_ of states
- The animation may start because of a trigger event, but is usually either always on, or plays immediately once the element enters the DOM
- Can repeat any number of times. May stay in end state, or revert to beginning state. May also alternate directions. Elements could also have multiple animations applied at once.

A basic example might be a loading spinner that rotates indefinitely:

```css
.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
```

So yes, as far as CSS is concerned, those are technically two different things.  However, I'll mostly use the words interchangeably in this post, because good fundamentals (and `cubic-bezier` curves) apply in both cases. Which one you use will mostly just depend on the situation.

<SideNote>

If you do apply any type of easing on a CSS `animation`, just note it will apply to _each step_ in the animation individually.

For example: if an animation has five steps and uses `ease-out`, each _step_ will ease out, for five total easings, rather than the entire animation having one overall easing applied.

</SideNote>


## What's an easing curve, and how does it work?

The easing of any web-based movement is what's called a [cubic bézier curve](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#cubic_b%C3%A9zier_easing_function). That might sound fancy or intimidating (_diacritics_!), but all it means is: a line, usually curved, defined by four numeric values.

As our example, let's look at this curve from the top of the article once again:

![Illustration of a cubic bezier curve, showing a steep hill at the bottom left gradually becoming a shallow slope in the middle, and then rapidly accelerating upwards toward the end](/images/post_images/easing/curve-solo.png)

That might look like something from an algebra textbook (or maybe a vector software demo), but we need not do any math, and it's not nearly as complex as it might seem.

- **The curve is shaped by the two circular handles** originating from the ends of the line--just like the pen tool in design software. (_In fact, you could create this exact curve with these same handle positions in your vector editing software of choice_.)

- **The horizontal _x_ axis represents the duration of the transition**. You could think of the _x_ axis as the timeline of the transition, kind of like the playback bar on an audio or video file: the transition starts at the far left, and moves to the right at a consistent pace.

![A video playback bar superimposed over the cubic bézier curve, showing playback begins at the far left of the graph and ends at the far right.](/images/post_images/easing/curve-playback.png)

	If your transition lasts one second, for example, the left side is the very beginning of the animation, and the far right is the end state, one second in.

- **The vertical _y_ axis is the speed of the change**. The more vertical the line is at that point during playback, the more the change accelerates at that point in the transition. (So in this example, the transition will start fast, ease to a slower pace in the middle, and then gradually pick up speed to end fasr.)

	![The curve accelerating and decelerating as described above](/images/post_images/easing/curve-illustrated.png)

- For the purposes of defining curves, the _x_ and _y_ axes are both measured from 0 to 1. The bottom-left corner is `0, 0`; the top-right is `1, 1`.

	![](/images/post_images/easing/axes.png)

**This is why CSS easing functions are written as four numeric values**. You could quite literally think of `cubic-bezier` as a function that accepts exactly four arguments: the _x_ and _y_ coordinates of the start handle, and the _x_ and _y_ of the end handle, in that order.

The curve above would be represented in CSS as:

```css
cubic-bezier(0.12, 0.57, 0.63, 0.21);
```

Or, if you prefer leaving off the leading zeroes, that's valid, too:

```css
cubic-bezier(.12, .57, .63, .21);
```

<SideNote>

Values are allowed to go out of bounds vertically on the _y_ axis, but _not_ on the _x_ axis (since animation can go backwards, but time can't).

So the first and third arguments (start x, end x) must be within the range of 0–1; but the second and fourth (start y, end y) can go beyond, in either direction--handy when you want to create an "overshoot" effect, where the transition goes beyond the start or end state and then comes back.

</SideNote>

Here's that full illustration one more time:

![The easing curve above, with the handles controlling the curve shown. Their x and y coordinates are highlighted as in the CSS above, each of the four values a decimal between 0 and 1.](/images/post_images/easing/cubic-bezier.png)

And here's that curve in action, in a real animation. The circles follow the easing curve (visually, and in movement speed) from bottom left to top right (via CSS `transform`):

<p class="codepen" data-height="650" data-default-tab="result" data-slug-hash="qBMqZjO" data-user="collinsworth" style="height: 650px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/collinsworth/pen/qBMqZjO">
  Untitled</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Naturally, an element's position is just one of many possible attributes you could animate, but it works well to demonstrate the point.

**If you'd like to play around with other types of easing curves, I made an [interactive easing playground here](/demos/easing)** (also shown below). Feel free to try it out, and then hop back in here when you're ready.

<figure>
	<iframe src="/demos/easing" width="100%" height="600px" style="margin-bottom: var(--quarterNote)" />
	<figcaption>
		<a href="https://joshcollinsworth.com/demos/easing" target="_blank">Click here to open the easing playground in a new tab</a>
	</figcaption>
</figure>

I'd also like to give a shout-out here to [easings.co](https://easings.co), which lets you test out various easing curves with a number of common UI elements, to see how they work visually in a realistic scenario. It's well worth a look if you're trying to settle on the right feel for your own UI.


## Why does easing matter?

While the workings of bézier curves make for interesting trivia, you might reasonably ask: why does this matter? Why is it important to use one easing curve over another--or for that matter, any curve at all?

True, transitions and animations are cool. They're fun. They're interesting. (The good ones, anyway.) But beyond that, well-implemented transitions can also be _intuitive_.

<CalloutPlusQuote>

In the real world, there's little such thing as instant. Nothing just appears or disappears. Things move into or out of place, and our brains perceive the changed state of things by observing that movement.

</CalloutPlusQuote>

Similarly, when things move, _how_ they move is key in understanding the movement. Think of a simple motion, like waving your hand. Vary the speed of the wave, and notice how the "feel" and perceived meaning of the gesture varies. A slow wave seems hesitant; a fast wave seems enthusiastic. One that starts fast then slows down (or vice versa) seems to indicate your feelings might be changing in real time. "_Oh, hey! I know you! …Oh wait…no I don't_." (Not that I've ever done anything like that.)

Again: movement tells a story. The transition itself is the verb; the easing curve is the adverb.


## Tips for great animations

Let's wrap up this post by covering a few ways to improve your CSS transitions and animations on the web, and take them to the next level.


### Pick the right curve

Now that we understand how easing curves work, you might be asking: "ok, great, but how do I actually know which kind of easing to use?"

The answer may be unsatisfying, but: I'm afraid trial and error (otherwise known as "experience") is the best teacher here.

However, as you experiment, I would encourage you to think of movement in the real world, and compare it to the movement you're working with in your app. Is this transition a positive confirmation, appearing and sliding into place? That might call for a speedy intro with a smooth but quick easing out, like an eager helper running up to report their task is done.

How about an error message popping up on the screen? That might call for a slower easing curve, to indicate a slight reluctance. If it's something important that should be known about immediately, speed would be a priority. If it's _highly_ critical, it might even call for "louder," more aggressive movement, to convey the severity of the situation.

<CalloutPlusQuote>

Movement is as subjective as color, but it's also as important. It's a key part of the feel and branding of your website or web&nbsp;app.

</CalloutPlusQuote>

So my best recommendation is: invest the time, and ask whether the movement conveys the appropriate feeling.

And as a loose rule of thumb: things should generally not start or end instantly. In the real world, we almost never see anything jump immediately to max speed, or come to a full and complete stop instantaneously. So our UIs will seem a little more "real" and intuitive if we avoid showing users curves that create that kind of movement, too.


### Avoid the defaults

You may already know the browser has some built-in easing curves available to use: `linear`, `ease`, `ease-in`, `ease-out`, and `ease-in-out`.

However, while these named timing functions are convenient, they're also very generic. (Many of the animations built into tools and libraries online fall prey to the same homogeny, even if they do offer a wider range of movement.)

If you want to get the most out of movement, you should reach beyond the most common off-the-shelf named options.

<CalloutPlusQuote>

Just as a site built with [Bootstrap](https://getbootstrap.com/) or [Tailwind](https://tailwindcss.com/) defaults risks looking generic, off-the-shelf easing curves can often make our UIs seem bland and homogeneous.

</CalloutPlusQuote>

As an alternative, [VS Code](https://code.visualstudio.com/b) has an amazing autocomplete for `cubic-bezier` curves with a wide range of options:

![VS Code auto-completing cubic-bezier with a variety of options in a pop-up UI](/images/post_images/easing/vs-code.png)

All of those options are covered in [my easing playground](/demos/easing), if you'd like to [take a look and play with the presets](/demos/easing).

Another excellent option: open your browser's dev tools and play with the easing curves in there. Firefox, for example, offers an interactive easing playground with the same kinds of presets to use as starting points.

![Firefox dev tools, with a wide array of easing types and options](/images/post_images/easing/firefox.png)

But however you choose to define your easing curves, I recommend you take some time to make them more unique than the default named functions. Use `cubic-bezier`, and while the extra options listed above are highly serviceable, don't be afraid to tinker if they aren't quite what you're looking for. 

You probably wouldn't limit your color palette to only predefined CSS named colors, so you probably shouldn't limit your movements to a small handful of preset curves, either.


### Make it shorter than you think it should be

I get it; if you just poured your time and effort into creating a great transition, you want to _enjoy_ it. If you're like me (and many other developers), you might even just sit there admiring your fanciful animation, watching it transition back and forth in delight. But here's the thing:

<CalloutPlusQuote>

The absolute #1 dead giveaway of poorly designed movement is that it lasts _way_ too long.

</CalloutPlusQuote>

Your users aren't as enamored—and therefore, not as patient—as you are. Your users came to this site to get something done, and they aren't interested in waiting longer than they need to for anything, regardless of how cool it may be.

My advice is: try to make your transitions as quick as possible, without being so short that the user might miss them. As a rule of thumb, I find that most single transitions work best somewhere in the 150–400 millisecond range (0.15 to 0.4 seconds). If you have back-to-back transitions--as one element moves out then another moves in, for example--you can double that. (You wouldn't want the whiplash of _two_ separate animations rushing by.)

<CalloutPlusQuote>

Keep making it faster until it feels _too_ fast, then back it off just a little.

</CalloutPlusQuote>

If you find yourself setting a duration of anywhere _near_ a full second, I'd recommend seriously considering whether it's adding to the user experience, or detracting from it.

That said, however: there are always exceptions, and the bigger the change is on the page, the more noticeable the transition should probably be. There's a big difference between, say, a nice little accent animation for the number of items in your cart updating, and an entire page transitioning out. Don't let big changes go by _too_ fast.

Also worth noting: an animation might not always _feel_ as long as it is. A transition with a very slow ease-in might seem like it doesn't start right away; conversely, a transition with a long tail might _seem_ finished before it technically is.

That's a great segue into the next section…


### Ins go out, outs go in

If you've taken the time to look at easing types, you may have noticed that there are three versions of each kind of curve: "in," "out," and "in-out" (i.e., both).

![Many different types of curves, including sine, circular, quadratic, cubic, and others, each with an in, out, and combination option.](/images/post_images/easing/curve-types.png)

As a quick aside: the names of most of these kinds of curves (cubic, quintic, etc.) represents the mathematical power used in generating the curves. The higher the number, the sharper the curve.

- Quadratic: power of 2 (_squared_)
- Cubic: power of 3 (_cubed_)
- Quartic: power of 4
- Quintic: power of 5
- Exponential: power of 10

Sine is its own mathematic thing (that I have neither the offhand knowledge nor the desire to get into); circular is based on square roots; and the "back" options just overshoot and then come back.

You may also see other options, like "bounce" or "elastic" (Svelte ships with those, as do many easing and animation libraries), but often they require JavaScript—or at least, a fairly complex `@keyframes` animation—as a pure CSS bézier curve isn't quite capable of that number of steps.

---

Anyway—that's all interesting to know (depending on your point of view), but beside the point.

More importantly: the "in" or "out" in the name represents whether the curve eases _in_ (starts slower), eases _out_ (ends slower), or _both_.

<CalloutPlusQuote>

The tricky thing with transitions is: you often want your transition _in_ to be an _ease-out_, and your transition _out_ to be an _ease-in_.

</CalloutPlusQuote>

Ok, that was probably as confusing for you to read as it was for me to write. Let's back up.

Say you've got a transition where one element leaves the page as another one appears to take its place, like a page transition, or sliding between two images in a lightbox.

Typically, you want a UI transition to start slow, and end slow. (That's usually how things move in the real world; they accelerate and decelerate.)

However, even though the user perceives this replacement as one smooth UI transition, under the hood, this is actually _two_ transitions: the old element leaving, followed by the new element entering.

So that means if you're transitioning an element _out_, and you want it to start slowly, you need an _ease in_.

Conversely, when an element is transitioning _in_, it should usually come to a gradual stop. That calls for an _ease out_.

Those two would come together to create a smooth start, and a smooth end to the overall stitched-together UI change.


### Lean on hardware acceleration

Not all CSS properties can be animated or transitioned smoothly across all devices and browsers. In fact, there are only a handful of properties that are capable of tapping into a device's hardware acceleration for the smoothest, highest-framerate transitions possible.

<SideNote>

It's not important to understand what "hardware acceleration" is in order to take advantage of it. But if you're curious, it means that the browser can enlist the help of the device's graphics processing unit (GPU) to help make rendering significantly faster and smoother—but only under certain conditions.

</SideNote>

Properties that can always be hardware-accelerated:

- `transform` (including every form of `translate`, `scale`, and `rotate`, plus all their `3d` counterparts)
- `opacity`

Properties that can _sometimes_ be hardware-accelerated:

- Certain SVG properties
- `filter`, depending on the browser and the filter

<SideNote>

Some other non-CSS things, like canvas and WebGL, tap into hardware acceleration too. I won't go into those here, however.

</SideNote>

The tl;dr of all the above is:

<CalloutPlusQuote>

If you want to move, scale, or rotate an element, always use the CSS `transform` property.

</CalloutPlusQuote>

Because `transform` doesn't affect layout, applying or modifying a transformation won't cause any reflow or repaint, which minimizes recalculations and keeps the browser humming along smoothly. Handily, many of the most common animations and transitions you might use on the web can be achieved using some combination of `transform` and `opacity`.

But whatever you do, _avoid changing the size or placement of an element directly_. If you change a property like `height`, `width`, `border`, `margin` or `padding`--anything that could potentially affect the layout of the elements on the page--you risk noticeably slowing down the browser with the calculations involved to make that change.

If you ever need to animate other properties for whatever reason, be sure to test in every possible device and browser. In my experience, Safari in particular is very bad about processing animations in a performant way by default, especially on iOS. Firefox isn't far behind, but you might not realize it if you're only testing on high-powered devices. A lot of the world lives on budget Androids; don't leave those out of your testing.

And speaking of making exceptions…


### Use `will-change` as needed

If you _do_ run into issues with animations that should be smooth and performant in theory, but that seem choppy or stilted in practice (again: this is usually in Safari for me), make use of [the `will-change` property](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change).

I won't go too far into the technical details, but `will-change` essentially gives the browser a heads-up on...well, on what _will change_. (Some things just have perfect names.)

For example: if you know for sure the _only_ thing that's going to change with an element is its `transform` property, and can confidently let the browser know ahead of time via `will-change: transform`, it can safely skip all the other steps it might otherwise go through to re-render that element when something changes on the page.

Best-case scenario: when used with properties that don't affect layout, this lets the browser offload the computation entirely to the GPU for the highest framerate, and smoothest performance.

However, `will-change` is not a silver bullet. In fact, if over-used, it can actually _harm_ performance.

That's because the browser creates a new layer (kind of like a new `z-index` level) for every element that has `will-change` applied to it. Used judiciously, this exchange is worth the price. Used carelessly, however, it could create even _more_ work for the browser. From MDN:

> Warning: will-change is intended to be used as a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems.

Some sources even go so far as to recommend applying `will-change` prior to an animation or transition, and then removing it afterwards.

So here, again, the best advice is: test thoroughly.


### Hardware acceleration caveats

The last couple of sections covered performance optimization via hardware acceleration (with and without `will-change`). There are a couple of rules to be aware of in this area, however:

- You can't mix properties that can be hardware accelerated with those that can't and expect a performant result.

	For example, if a transition animates both `transform` (perfectly fine for hardware acceleration) and `width` (not fine; causes reflow), then we can't expect that transition to be as fluid as if we _only_ animated `transform`. Changing properties that cause layout changes will throw a wrench in the whole works. (You _may_ be able to get around this with `will-change` in some situations, but results will probably vary from browser to browser, and will also depend on the properties in question.)

- Just because animation _can_ be hardware-accelerated doesn't mean it _will_ be. The browser makes the final call.

	One potential reason the browser may opt _not_ to use the GPU: while it's much faster than the default hardware, it also takes more power. So if the device is low on power, or in battery-saving mode, the browser may choose battery over graphical performance.


## Wrapup

Thanks for reading! I hope you've come away with a better understanding of CSS `cubic-bezier` easing curves and how to create the best possible transitions and animations in your own web UI.