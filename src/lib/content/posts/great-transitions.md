---
title: Ten tips for excellent CSS transitions and animations
date: 2023-02-28
updated: 2023-02-28
categories:
  - css
  - design
  - web
  - advice
coverImage: great-transitions.png
coverWidth: 16
coverHeight: 9
excerpt: Creating high-quality, polished web animations is both a science and an art. This post covers the best things I've learned over the last decade of crafting web UIs.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>


<Note>

This is a followup to the post [Understanding easing and cubic bezier curves in CSS](/blog/easing-curves). (This is also the original URL of that post.)

If you came here looking for that--or if you don't already have a solid grasp on CSS `cubic-bezier` curves--I suggest [reading that post now](/blog/easing-curves).

</Note>


There are certain things you just know when you experience them, even if you don't know where the intuition comes from, or can't quite put into words what it is you recognize, exactly.

You might not know anything about interiors, but you feel it when you're in a well-designed space.

Even if you don't know the first thing about design, you can likely distinguish a good design from a bad one. You might not have any idea _why_ this one is better, or what specific details make that one worse, but you know it for sure, intuitively and without question.

In just that same way: users may not realize what it is _about_ the transitions or animations on our websites and apps, but they can keenly spot the difference between good and bad. They intuitively know when an app's movement _feels_ good, and when the impression is instead generic or unpolished--even if they can't explain how or why.

So to hopefully get a better understanding of what's giving off those vibes--and how to sidestep the bad ones when building your own UIs--I've assembled this collection  of things I've learned about crafting transitions and animations on the web over the last decade or so.

<SideNote>

While "transition" and "animation" are distinct concepts in CSS, I'll continue to use the words interchangeably here, to mean "any kind of movement or change."

</SideNote>


## 1. Make it shorter than you think it should be

I get it; if you just poured your time and effort into creating a great transition, you want to _enjoy_ it. If you're like me (and most other developers), you might even just sit there admiring your fanciful animation, watching it transition back and forth in delight. But here's the thing:

<CalloutPlusQuote>

The absolute #1 dead giveaway of poorly designed movement is that it lasts _way_ too long.

</CalloutPlusQuote>

Your users aren't as enamored—and therefore, not as patient—as you are. They came here to get something done, and they aren't interested in waiting longer than they need to for anything, regardless of how cool it may be.

My advice is: try to make your transitions as quick as possible, without being so short that a user might miss them. As a rule of thumb, I find that most single transitions work best somewhere in the 150–400 millisecond range (0.15 to 0.4 seconds). If you have back-to-back transitions--as one element moves out then another moves in, for example--you can double that, and add a little time between them, too. (You wouldn't want the whiplash of _two_ separate animations rushing by.)

<CalloutPlusQuote>

Keep making it faster until it feels _too_ fast, then back it off just a little.

</CalloutPlusQuote>

That said, however: there are always exceptions, and the bigger the change is on the page, the more noticeable the transition should probably be. There's a big difference between, say, a nice little accent animation for the number of items in your cart updating, and an entire page transitioning out. 

It feels normal when a fly zips by you, but it feels unnerving when a bus does. Don't let big changes go by _too_ fast.

One final point worth noting: **an animation might not always _feel_ as long as it actually is**. A transition with a very slow ease-in might seem like it doesn't start right away; conversely, a transition with a long tail might _seem_ finished before it technically is. Keep that in mind. Perception is reality, so how the change _feels_ is more important than what the duration technically is in the code.


## 2. Match the curve to the action

Admittedly, this is easier said than done. You might be saying "ok, great, but how do I actually _know_ which kind of cubic bézier curve to use in any given situation?"

The unsatisfying answer is: trial-and-error (otherwise known as experience) is the best teacher here.

<CalloutPlusQuote>

Movement is as subjective as color, but it's also as important. It's a key part of the feel and branding of your website or web&nbsp;app.

</CalloutPlusQuote>

That said, there's a trick to keep in mind: as you experiment, think of movement in the real world, and compare it to the movement you're working with in your app. Is this transition a positive confirmation, appearing and sliding into place? That might call for a speedy intro with a smooth but quick easing out, like an eager helper running up to report their task is done.

How about a failure message appearing on the screen? That might call for a slightly slower easing curve, to indicate a slight reluctance.

If it's something important that should be known about immediately, speed and apparency would be a priority. If it's _highly_ critical, it might even call for a more aggressive movement (like shaking), to convey the severity and draw attention where needed.

So my best recommendation is: invest the time, and ask whether the movement conveys the appropriate _feeling_. Does this movement seem consistent with the brand of the product or page?

If Pixar animated a robot that did the thing your UI is doing, how would it&nbsp;move?


## 3. Always accelerate and decelerate

In the real world, we pretty much never see any type of movement jump immediately to max speed, or come to a full and complete stop instantaneously. So our UIs will seem a little more "real" and intuitive if we avoid showing users curves that create that kind of movement, too.

<CalloutPlusQuote>

When something seems off about an animation, odds are it's because it either starts or ends with unnatural suddenness.

</CalloutPlusQuote>

Even if it's slight, I'd still recommend adding a bit of easing in and out to your `cubic-bezier` curves. That small but detectable bit of acceleration and/or deceleration could be the difference between a transition that feels smooth, and one that seems just a little off.

Take a look at this demo, where all four squares rotate a full turn, but with different easings applied:

<p class="codepen" data-height="626" data-default-tab="result" data-slug-hash="poORdVo" data-user="collinsworth" data-token="6a29e9ec4ceb068892a7b77211864139" style="height: 696px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/collinsworth/pen/poORdVo/6a29e9ec4ceb068892a7b77211864139">
  Untitled</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Notice how the first and second squares above seem to start or end much too abruptly.

The third "smooth" option works much better, as its custom curve eases in and out for a more graceful movement that accelerates and decelerates.

If you want to go even further toward animation that feels like it has real-world physics applied, the fourth "inertia" option works well, too; it "winds up" and overshoots, as though powered by a spring. (Just bear in mind: a little goes a long way with this type of animation.)

One important note on sudden starts and stops, though: **it's fine if the user can't see it**. If the object in question fades in, then a sudden start might be fine (since the beginning of the animation won't be perceptible in the first place).

The same goes in reverse; if an element is fading to `opacity: 0`, then it may not matter exactly how the transition curve ends, since it won't be visible at the end anyway.


## 4. Avoid browser defaults

You may already know the browser has some built-in easing curves available to use: `linear`, `ease`, `ease-in`, `ease-out`, and `ease-in-out`.

However, while these five named timing functions are convenient, they're also very generic. (Many of the animations built into tools and libraries online fall prey to the same homogeny, even if they do offer a wider range of options.)

If you want to get the most out of movement, you should reach beyond the most common off-the-shelf named options.

<CalloutPlusQuote>

Just as a site built with [Bootstrap](https://getbootstrap.com/) or [Tailwind](https://tailwindcss.com/) defaults risks looking generic, off-the-shelf easing curves can often make UIs seem bland and homogeneous.

</CalloutPlusQuote>

As an alternative, [VS Code](https://code.visualstudio.com/b) has an amazing autocomplete for `cubic-bezier` curves with a wide range of options:

![VS Code auto-completing cubic-bezier with a variety of options in a pop-up UI](/images/post_images/easing/vs-code.png)

All of those options are covered in [my easing playground](/demos/easing), if you'd like to [take a look and play with the presets](/demos/easing).

Another excellent option: open your browser's dev tools and play with the easing curves in there.

Every major browser has an easing panel available as a sandbox to try different options and make adjustments. To access it, open dev tools, and click the curve icon next to a `cubic-bezier` value in the CSS styles panel. (The icon varies, but the workflow is basically identical across all browsers.)

![Firefox dev tools, with a wide array of easing types and options](/images/post_images/easing/firefox.png)

However you choose to define your easing curves, though: I recommend you take some time to make subtle tweaks. Use `cubic-bezier`, and don't be afraid to tinker. 

You can certainly get by with the presets in the browser, or in VS Code. And if you're using `cubic-bezier` over keyword values, you're ahead of the game already.

That said, though: you probably wouldn't limit your color palette to only predefined CSS named colors. So you might not want to limit your transitions to a small handful of preset curves, either.


## 5. Less is more

Words I've often needed to hear: _not everything needs a transition_.

It's easy to get carried away and make every single thing on the page animate in. (I've certainly been guilty of that.) But unless this is your personal website and you just feel like going a little crazy, too much movement can easily do more harm than good.

It's easy to go overboard as you're laser-focused on making an animation as impressive as possible. However, when it comes to transitioning things with CSS, understated is usually better than overstated.

<CalloutPlusQuote>

The more an element changes during an animation, the more the transition risks seeming overdone.

</CalloutPlusQuote>

If you're animating `opacity` from 0 to 1, maybe try a smaller range, like 0.4 to 1 instead. If your element grows larger on hover, a slight increase in size might seem more controlled, where a huge jump could feel clunky.

Does an element slide into place? I find that in most cases, movement like that should be in the range of about 5–40 pixels. Any less, and the movement may be too subtle to even notice; much more, and a deft slide may become a clumsy crash.

Doing too much can be worse than doing nothing at all. So find the point where the transition is just enough to be effective, and if you go further, do so cautiously.



## 6. Play with delay

When transitioning multiple elements (or one element with many parts), don't underestimate the effect `animation-delay` or `transition-delay` can have--particularly when staggered.

Take a look at this CodePen example; each line uses a new kind of animation delay to create a different effect:

<p class="codepen" data-height="654" data-default-tab="js,result" data-slug-hash="yLxVZMx" data-user="collinsworth" style="height: 654px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/collinsworth/pen/yLxVZMx">
  Untitled</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

In the pen above, the first line just transitions all at once. Fine, but not particularly sharp.

In each line following, however, varying degrees of delay are applied to each letter, to create a playful "bounce-in" effect. There's even one that goes backwards, and one that causes the line to appear from the middle out.

All this said: there's a reason I put _less is more_ before this point. It's very easy to overdo animations like this, especially when there are _lots_ of elements transitioning, as in the example. I used lots of letters and much more overstated movement than I normally would, just to illustrate the technique. In practice, an animation exactly like this would probably be too over-the-top for most UI work.

However, there are opportunities to apply this effect on a more subtle scale. Loading dots, maybe? Perhaps when a drawer or hamburger menu is opened, each item might appear on a slight delay?

Again, keep it short and subtle. But where applied well, delays can help take web transitions to the next level.


## 7. Ins go out, outs go in

If you've looked at various kinds of easing curves, you may have noticed they tend to come in three varieties: an ease _in_ (starts slower), ease _out_ (ends slower), and in-out (which is essentially both; faster in the middle and slower at the beginning and the end).

<CalloutPlusQuote>

The tricky thing with transitions is: you often want your transition _in_ to be an _ease-out_, and your transition _out_ to be an _ease-in_.

</CalloutPlusQuote>

Ok, that was probably as confusing for you to read as it was for me to write. Let's back up.

Say you've got an animation where one element leaves the page as another one appears to take its place, like a page transition, or sliding between two images in a lightbox.

The user perceives this as one UI transition. But under the hood, it's actually _two_ transitions: the old element leaving, followed by the new element entering.

So that means if you're transitioning an element _out_, and you want it to start slowly, you need an _ease in_.

Conversely, when an element is transitioning _in_, it should usually come to a gradual stop. That calls for an _ease out_.

Those two would come together to create the effect of one seamless movement.


## 8. Lean on hardware acceleration

Not all CSS properties can be animated or transitioned smoothly across all devices and browsers. In fact, there are only a handful of properties that are capable of tapping into a device's hardware acceleration for the smoothest, highest-framerate transitions possible.

<SideNote>

It's not important to understand what hardware acceleration is in order to take advantage of it. But if you're curious: it means the browser can enlist the help of the device's graphics processing unit (GPU) to help make rendering significantly faster and smoother—but only under certain conditions.

</SideNote>

Properties that can always be hardware-accelerated:

- `transform` (including every form of `translate`, `scale`, and `rotate`, plus all their `3d` counterparts)
- `opacity`

Properties that can _sometimes_ be hardware-accelerated:

- Certain SVG properties
- `filter`, depending on the browser and the filter

Some other non-CSS things, like canvas and WebGL, can tap into hardware acceleration, too. I won't go into those here, however.

The tl;dr of all the above is:

<CalloutPlusQuote>

If you want to move, scale, or rotate an element, always use the CSS `transform` property.

</CalloutPlusQuote>

Because `transform` doesn't affect layout, applying or modifying a transformation won't cause any reflow or repaint, which minimizes recalculations and keeps the browser humming along smoothly. Handily, many of the most common animations and transitions you might use on the web can be achieved using some combination of `transform` and `opacity`.

But whatever you do, _avoid changing the size or placement of an element directly_. If you change a property like `height`, `width`, `border`, `margin` or `padding`--anything that could potentially affect the layout of the elements on the page--you risk noticeably slowing down the browser with the calculations involved to make that change.

If you ever need to animate other properties for whatever reason, be sure to test in every possible device and browser. In my experience, Safari in particular is very bad about processing animations in a performant way by default, especially on iOS. Firefox isn't far behind, but you might not realize it if you're only testing on high-powered devices. A lot of the world lives on budget Androids; don't leave those out of your testing.

<SideNote>

Just because something _can_ be hardware-accelerated doesn't mean it _will_ be. The browser makes the final call.

One potential reason it may opt out: the GPU is faster, but it also consumes more energy. So if the device is low on power, or in battery-saving mode, the browser may choose battery over graphical performance.

</SideNote>


## 9. Use `will-change` as needed

If you _do_ run into issues with animations that should be smooth and performant in theory, but that seem choppy or stilted in practice (again: this is usually in Safari for me, but your mileage may vary), make use of [the `will-change` property](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change).

I won't go too far into the technical details, but `will-change` essentially gives the browser a heads-up on...well, on what _will change_. (Some things just have perfect names.)

For example: if you know for sure the _only_ thing that's going to change with an element is its `transform` property, and can confidently let the browser know ahead of time via `will-change: transform`, it can safely skip all the other steps it might otherwise go through to re-render that element when something changes on the page.

Best-case scenario: when used with properties that don't affect layout, this lets the browser offload the computation entirely to the GPU for the highest framerate, and smoothest performance.

However, `will-change` is not a silver bullet. In fact, if over-used, it can actually _harm_ performance.

That's because the browser creates a new layer (kind of like a new `z-index` level) for every element that has `will-change` applied to it, making things a bit more complex to composite. Used judiciously, this exchange is worth the price. Used carelessly, however, it could create even _more_ work for the browser. From MDN:

> Warning: will-change is intended to be used as a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems.

Some sources even go so far as to recommend applying `will-change` prior to an animation or transition, and then removing it afterwards.

So here again, the best advice is: test thoroughly.


## 10. Respect the user's preferences

Users can indicate via their device settings whether they prefer reduced motion.

The reasons a user may do so are many and varied. There's a range of medical reasons, for starters: a user may experience vertigo, nausea, or even seizures when exposed to excessive movement. Or, a user may just find too much movement distracting or obnoxious.

It doesn't really matter why, though; it's our job as developers to accommodate the user's preferences regardless.

We can either do this in CSS, using a media query (like this, [from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)):

```css
@media (prefers-reduced-motion) {
  /* styles to apply if the user's settings
     are set to reduced motion */
}
```

_Or_ we can use JavaScript. In this example, we'll check for a reduced-motion preference, and add a class to the `<html>` tag if found:

```js
const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReducedMotion) {
  document.documentElement.classList.add('reduce-motion')
}
```

Following that JavaScript example, we could then add CSS to target elements on the page to set overrides:

```css
.reduce-motion {
  /* Select stuff here and reduce motion */
}
```

Just note that when using JavaScript, we'd want the page to be progressively enhanced, in order to ensure there was no flash of motion before the script ran, and no excluding users who have JavaScript disabled. So a mix of _both_ techniques is probably ideal.

As far as _what_, exactly, we should do with our CSS in these cases: remember that **reduced motion doesn't mean _no_ motion**, or even no animation at all.

One technique I often use is: change up keyframe animations to only use opacity where a reduced motion preference is detected:

```css
@keyframes slide_in {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
}

@keyframes slide_in_reduced {
 from {
    opacity: 0;
  }
}

.animated-thing {
  animation-name: slide_in;
}

@media (prefers-reduced-motion) {
  .animated-thing {
    animation-name: slide_in_reduced;
  }
}
```

Just because a user prefers minimal motion doesn't mean they don't value transitions.

Plus, there are some situations where it may be better to keep movement intact. For example, if you show a progress bar as something loads in the background--or a playback indicator on an audio or video file--that's a key piece of information in the UI. Rather than eliminating that indicator altogether, consider finding a way to make the movement subtle and unobtrusive. Potentially, allow the user to hide the movement. Or, representing the info differently may be the way to go (a numerical percentage counter instead of an animated bar, as an example).

At the _very_ least, users should be able to pause all continuous animations, including videos and gifs. However, ideally, we should be anticipating their needs based on their device preferences, instead of forcing them to deal with something they've already indicated they'd rather not see.

I refer you to [this piece by Val Head for Smashing Magazine](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/), for a deeper dive on the topic of designing with reduced motion. It's a big topic in its own right, but hopefully this tip provides some general guidance.


## Wrap-up

I hope this collection of tips helps you craft the best web animations possible.

As always, feel free to send feedback or questions below, and thanks for reading!