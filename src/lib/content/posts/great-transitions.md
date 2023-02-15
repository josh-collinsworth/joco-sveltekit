---
title: Understanding easing curves for better transitions and animations
date: 2023-02-02
updated: 2023-02-02
categories:
  - javascript
  - css
  - design
  - web
coverImage: cubic-bezier.png
coverWidth: 16
coverHeight: 9
excerpt: The difference between a ho-hum animation and one that feels smooth and sleek is often just in the easing curve. Let's look at what easing curves are and how to use them take transitions to the next level.
draft: true
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>


Part of my son's evening routine is picking up the various toys he's gotten out and played with that day (or gotten out, at least), and putting them all back in the toy basket.

Usually, he casually places the toys into the basket at a steady pace, so we can get on with the more fun parts of bedtime, like reading books. But sometimes, if his mood is affected by tiredness or frustration, the toys might make their way into the basket with a little extra velocity.

Other times, when he feels like stalling, the toys casually float along as slowly as possible; still others, they arc playfully in the air, as an ad hoc game forms around the process.

Sometimes, it's a race, and the toys fly rapidly into the basket. And, of course, sometimes there are slow, melancholy theatrics to go along with the mournful premise of a day of fun coming to an end. (It's hard being a kid.)

In all of the above cases, the toys do exactly the same thing; they travel along a more-or-less predefined route to a set destination. But yet, even though it's the same action every time, the _way_ the toys travel is meaningful. Even if my son were invisible and silent, I could still tell his mood by watching the speed and arc of the toys.

This is a perfect way to illustrate the importance of easings in transitions and animations.

Carefully crafted, smooth transitions and animations are one of the biggest things that help set an excellent user interface apart from the rest. Well-designed movement, where called for, makes a UI both more fun and more intuitive to use. And, just as with my child's toy routine, they can _also_ help to communicate a specific vibe.

Poor movement, however, can make the same UI feel mediocre, cheap, or even confusing or broken--and can even be worse than having no movement at all.

At the center of any movement on the web is what's called an easing curve. This curve is the "rhythm" of the transition, and understanding it well--towards the goal of improving our own UIs--is the aim of this post.


## What is an easing curve, and how do they work?

The easing curve of any web-based movement is what's called a cubic bézier curve. That might sound fancy or intimidating, but all it means is: a line, usually curved, traveling from the bottom left to the top right of a graph.

To illustrate: here's the image from the top of this article once again:

![Illustration of a cubic bezier curve, showing both the Y and X axes increasing from 0 at the lower left, to 1 at the upper-right.](/images/post_images/cubic-bezier.png)

That might look like an illustration from a math textbook, but math need not be involved, and it's not nearly as complex as it might seem. Let's examine the pieces:

- **The horizontal _x_ axis represents the duration of the transition**. You could think of the _x_ axis as the timeline of the transition, kind of like the playback bar on an audio or video file: the transition starts at the far left, and moves to the right at a consistent pace.

	If your transition lasts for 0.5 seconds, for example, the left side is 0 seconds, and the far right is 0.5 seconds.
- **The vertical _y_ axis is the speed of the animation at that point in the transition**. The more vertical the line is at that point, the faster the animation moves. Conversely, the flatter the curve is at that point in the transition, the slower the transition will move. (So in the example above, the animation will start fast, ease to a slower pace in the middle, and then gradually pick up speed to end.)
- For the purposes of defining curves, the _x_ and _y_ axes are both measured from 0 to 1. The bottom-left corner is `0, 0`; the top-right is `1, 1`.

	Values are allowed to go out of bounds vertically on the _y_ axis (creating an "overshoot" effect), but _not_ on the _x_ axis (since animation can go backwards, but time doesn't).
- The curve is shaped by the two circular handles (much like the pen tool in design software) originating from the ends of the curve. The coordinates of the handles are shown as _x_ and _y_.

This is why, when you write an easing function in CSS, you write it as four numeric values from 0 to 1. The curve above would be represented in CSS as:

```css
cubic-bezier(0.12, 0.57, 0.63, 0.21)
```

<SideNote>

The zeroes are optional in the CSS above.

</SideNote>

The first two values of the `cubic-bezier` function are the _x_ and _y_ coordinates of the lower-left handle; the last two, the _x_ and _y_ of the upper-right handle.

Here's the curve in action; click to see the box move from right to left, and back, along the easing curve.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="XWBGVRm" data-user="collinsworth" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/collinsworth/pen/XWBGVRm">
  Untitled</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Naturally, an element's position isn't the only thing you can change with animation, but it works well to illustrate the point.

By the way: if you'd like to play with curves, I made an [interactive easings playground here](/demos/easing). Feel free to check it out, and then hop back when you're ready. (Or, just bookmark it for when you want to play with some easing curves of your own.)

<iframe src="/demos/easing#demo-curve" width="100%" height="600px" />

I'd also like to give a shout-out here to [easings.co](https://easings.co), which lets you test out easing curves with a number of common UI transitions to see how they work firsthand visually.


## Why does easing matter?

While the workings of bézier curves make for interesting trivia, a reasonable question you might have at this point is: why does this matter? Or, why is it important to use one easing curve over another--or for that matter, any curve at all?

True, transitions and animations (good ones, anyway) are cool. They're fun. They're interesting. But beyond that, well-implemented transitions can also be _intuitive_.

In the real world, there little such thing as "instant." Nothing just appears or disappears. Things move into or out of place, and our brains perceive the changed state of things by observing that movement.

Similarly, when things move, _how_ they move is key in understanding the movement. Think of a simple motion, like waving your hand. Vary the speed of the wave, and notice how the "feel" and perceived meaning of the gesture varies. A slow wave seems unsure; a fast wave seems enthusiastic. One that starts fast then slows down—or vice versa—seems to indicate your feelings might have changed.



### Make it shorter than you think it should be

The absolute #1 dead giveaway of an amateurish transition is that it lasts too long.

I get it; if you just poured your time and effort into creating a great transition, you want to _enjoy_ it. If you're like me (and many other developers), you might even just sit there admiring your fanciful animation, watching it transition back and forth in delight.

The thing is: your users aren't as enamored—and therefore, not as patient—as you are. Your users came to this site to get something done, and they aren't interested in waiting longer than they need to for _anything_, regardless of how cool it may be.

My advice is: try to make your transitions as quick as possible, without being so short that the user might miss them. As a rule of thumb, I find that 200–400 milliseconds is the cap for most UI transition durations—although I'd say that stacks, so an out-then-in transition could go up to double that in most cases. (You wouldn't want the whiplash of _two_ separate animations crashing through as fast as possible.)

In any case, though: if you find yourself creating transitions anywhere near a full second or more, I'd seriously consider whether it's adding to the user experience, or detracting from it, as objectively as possible.


### Get the most out of easing curves

An easing curve is the speed at which a transition runs at various points in the animation. It might start slow, or end slow, or both. It might remain a continuous speed, or wildly change speed throughout.

If you've ever used CSS keywords like `linear` or `ease-in-out`, you probably know the basics here. But if not—or if you'd just like a visual—the website [easings.co](https://easings.co/) illustrates the concept quite well. Take a little time to play with the easing curves and see how they all look and feel.

Remember how our brains perceive change better when there's movement? In that same vein, movement looks more natural when it has an appropriate easing curve. Most of the movement that occurs in the real world doesn't remain a continuous speed; it starts fast, or ends fast, or is fast in the middle and slow on the ends. You probably open a door quickly, then slow it down once it's open wide enough. When you walk, you might be moving at a continuous speed, but each of your arms and legs moves quickly in the middle of the stride, then slows down and reverses course.

Think of a simple gesture, like raising your hand to ask a question. Do it at various speeds. Slow down and speed up, and as you do so, notice how _the meaning of the movement changes_.

Take this video as an example of the power of easing. Notice how this machine is doing (mostly) the exact same movement every single time, but the _easing_ of the movement changes the entire "personality" behind it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kproPsch7i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

It's pretty easy for me to spot a stock easing curve at this point.

Not only does Svelte ship with 


## TODO: talk about hardware accellerated transitions