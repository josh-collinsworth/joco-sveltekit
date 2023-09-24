---
title: Classic rock, Mario Kart, and why we can't agree on Tailwind
date: 2023-08-28
updated: 2023-08-28
categories:
  - advice
coverImage: tailwind.svg
coverWidth: 1920
coverHeight: 1080
excerpt: It's popular to say we can’t agree on Tailwind, but I posit we actually already do. I think what we actually disagree on isn’t the details of this (or any) specific software; it's how we define assets and liabilities.
draft: true
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

When my brother and I were younger, our tastes in music were nearly polar opposites. I was an obnoxious hipster, and valued what I saw as artistic integrity and creative innovation. I probably would've judged you if our music tastes didn't align. (I've grown up a bit since then, thankfully).

In contrast, my brother's taste was pretty eclectic, but centered on classic rock of the '70s and '80s. He loved rediscovering decades-old albums by many of the most well-known artists of their time.

Like any good elitist snob, I hated popular things. So, naturally, my brother's kind of music was anathema to me at the time.

He never really understood what it was I seemed to dislike so strongly. So finally, one day, he asked me.

I thought about the question for a minute, and then summarized:

"It's all style and no substance."

My brother burst out in laughter.

"That's the _best_ thing about it!" he said with an amused grin. "That's the whole point!"

In that moment I realized: not only did we love and hate the exact same thing; we both had _the exact same reasons_ for it.

## Why we can't agree on Tailwind

Tailwind is nearly as ubiquitous as it is polarizing these days. (I trust if you've been interested enough to read this far, I don't need to cite any sources here.)

Proponents show a near cult-like devotion to Tailwind, some even going so far as to claim it's "fixed" CSS—or at the very least, made it manageable and predictable in a way it wasn't for them before. More than one Tailwind enthusiast has proclaimed they never want to style anything without it again.

Detractors, on the other hand, claim it's messy, gets in the way, violates core fundamentals of web development, does nothing, or even that it does the _opposite_ of what it's supposed to, adding complexity and making projects even _harder_ to maintain.

How could we disagree so sharply?

After using Tailwind for the last year—both professionally and on a few small personal projects—I've come to what might just be the most unpopular opinion of all:

**Both sides are right.**

We won't ever get anywhere debating the merits or flaws of Tailwind, for the same reason my brother and I never persuaded each other on music: it turns out, he and I actually saw every artist and album in pretty much exactly the same way; we just didn't agree on what was a feature, and what was a bug.

Likewise, I suspect most people on opposing sides of the Tailwind debate actually see Tailwind quite similarly. I've come to believe the core of the debate isn't so much about the factual details of the thing in front of us (and so debating those is useless; where you see a selling point, I see a flaw); it's about the intangible personal context each one of us is bringing to the table.

Tailwind _is_ great.

Tailwind is also terrible.

And it is both, at the same time, for exactly the same reasons.

## What a tool does depends on who's using it

If you've played [Mario Kart 8](https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/) on Switch, you might know the game offers a feature called [Smart Steering](https://mariokart.fandom.com/wiki/Smart_Steering).

(_Yes, this is still about Tailwind. Bear with me here_.)

Smart Steering is essentially an AI copilot. When enabled, you control your racer as normal, except that if you veer too close to the side of the road, the game will automatically take the wheel and steer you away from disaster. No more slogging through the grass, or plummeting off the side of the track.

This option (and other similar features, like auto-acceleration) are wonderful additions to the game; indeed, these options are what enable me and my family to play together, and can help to even the playing field among any mixed group (particularly on higher engine classes, where racers' speed is much higher and even very good players may find themselves hurling off the track).

But if you play Mario Kart long enough, and become competitive enough, Smart Steering begins to help less and less, until eventually, it starts getting in the way instead.

Smart Steering will prevent you from taking shortcuts, for one thing; it can't tell _why_ you're going off the main road, but it jumps in the way and prevents you from doing so regardless. It may even intervene unexpectedly, pushing you off your intended course at inopportune moments. You might have a strategic reason in mind for going off the road (maybe you're trying to dodge an obstacle, or taking an opportunity to slow down an opponent, for example), but Smart Steering won't allow it regardless. Plus, as a balancing feature, the game's strongest speed boosts are disabled for players utilizing Smart Steering.

<CalloutPlusQuote>

The better you know the terrain, the more a feature designed to augment your skills instead begins to inhibit them.

</CalloutPlusQuote>

But whether it makes you better or worse, and to what degree, will depend entirely on where you're coming from.

I'm a very good Mario Kart player (I spent 20-some years of my life playing Mario Kart games before Smart Steering came along, after all), and so I can't stand Smart Steering. I never use it. I might not notice it a lot of the time—it might even occasionally help me—but what stands out to me are the times it jumps in my way at the worst possible moments.

Smart Steering might keep me on the track, but it _also_ suppresses the best of my abilities. It thwarts the best outcomes just as commonly as it averts the worst disasters.

<CalloutPlusQuote>

If you're sufficiently skilled, Tailwind feels like being forced to write CSS with Smart Steering on.

</CalloutPlusQuote>

That's why any conversation I have with somebody who likes Tailwind will probably be like trying to explain why I don't like Smart Steering to a Mario Kart player who likes it and/or relies on it.

_"I don't like that it keeps me from driving off the track."_

_"What!? Why would you ever want to do that!?"_

### These analogies are not value statements

I realize I probably sound rather arrogant choosing this particular comparison. I don't mean to come across that way, and I think (and hope) it's at least partly a shortcoming of the analogy.

Mario Kart is, of course, a racing game, which means there's only one winner. That might imply I think my way wins, and yours loses. That's not at all my intent; I only mean to say we're playing the game differently.

Maybe it helps if, instead of the traditional race (i.e., first to the finish line wins), we apply this analogy to a time trial, where the goal is merely to reach the finish line within a given time limit—likely self-imposed—rather than outracing your competitors.

After all, that's much closer to what web development is really like most of the time. We're generally just trying to achieve our own measure of success in whatever way works best for us, according to our own timelines and constraints (all while avoiding the obstacles and pitfalls along the way).

Our routes to the finish line aren't necessarily better or worse. We probably just have different goals, different values, and/or different obstacles we wish to avoid.

Regardless, whatever your reasons may be: I'm glad Tailwind helps _you_ do the things you want to do.

But it doesn't always help _me_ do the things _I_ want to do; oftentimes, it just gets in my way.

## There are no benefits without tradeoffs

For the most part, it's perfectly fine if we see the same thing in two different, even opposite ways. However, there's one universal truth I think it's important that we agree to as common ground before proceeding: _benefits always come with tradeoffs_.

That is: complexity always exists, even if it's remanded to a place you don't regularly experience it.

<CalloutPlusQuote>

Any time something seems to get better and easier, it's almost certainly because the complexity moved somewhere else, with a new and different set of tradeoffs.

</CalloutPlusQuote>

Don't get me wrong; that's still usually a good thing. The new set is generally preferable to the old set.

Regardless, though: we should be incredibly wary of any product that claims it's eliminated the complexity—destroyed it, removed it, turned it into nothing—without acknowledging that action brings its own downsides.

A frontend-focused example might be code tooling. In the days before the bundlers and compilers we have now (Webpack, Vite, etc.), shipping a minimal code bundle that worked well across all browsers and platforms was wildly complex. These days, it's close to trivial. But the complexity isn't gone; it's just usually locked inside a little Pandora's box called `node_modules`, and you know well that it still very much exists if you've ever suddenly found your project completely unworkable by some failing somewhere in the toolchain.

As a more real-world example: watering crops at scale is a hard problem, and I don't think any modern farmer would want to go back to the way things used to be done a century or two ago. Still, though: implementing and maintaining a technologically sophisticated irrigation system comes with its own set of hard problems. The complexity is not less (if anything, it's more), but it's shifted to a new area. The farmer doesn't feel it every day, as they would if they were trying to water their crops manualy. But when they do, they feel it much more acutely.

<CalloutPlusQuote>

Problems in tech don't _vanish_; they just _move_.

</CalloutPlusQuote>

Ok, fine. Why is this all important?

Because Tailwind is generally marketed (and spoken of by many of its proponents) as a framework that's achieved this impossible task of obliterating complexity in CSS from existence.

If you would make this argument, I would dissent. But I also think you're probably right _in your case_.

Going back to the central thesis of this post: if you and I can't agree on Tailwind, it's probably got nothing to do with the specific piece of software we're both looking at. It's much more likely about the differing goals and valuation of tradeoffs that we both bring to the table.

Where you see style, I see a lack of substance.

Where you see a helpful copilot that saves you from disaster, I see a meddling nuisance that thwarts me at the worst possible moments.

Where you see a solved problem, I see tech debt that simply hasn't come due yet.

We're both just observing the same truths from different points of view.

We're both wrong. We're both right.

## Style and substance

I've spent a good while now asserting that our collective differences regarding Tailwind center around an inversion of opinion on benefits and drawbacks. So, I think there's value in examining some of those specifics, so we can understand what it is that brings us both to view the same thing so very differently.

## Forcing Tailwind is a mistake

Now that we've established that Tailwind isn't really either good or bad, objectively speaking, but rather, a better or worse fit depending on your specific combination of values and desired outcomes, let's take things a step further.

I think it's a mistake to force an entire team to use Tailwind, _unless_ both of of the following criteria are true:

1. Every developer on the team wants to use Tailwind; and
2. Any current or future developers who wish to write their own CSS have reasonable license to do so, at their discretion, where the conventions of Tailwind don't fit with the optimal practices to achieve desired outcomes.

<CalloutPlusQuote>

When you force strong CSS developer to use Tailwind, you run the risk of making them worse. They will likely be slower, capable of less, unable to utilize many of their most powerful techniques.

</CalloutPlusQuote>

Tailwind proponents would undoubtedly point out that you can (and probably _should_) write CSS whenever you feel like it when using Tailwind. It doesn't prevent you from doing that, and maybe even expects it.

There are two main ways to do this:

1. Modify the Tailwind config file to insert your own utility classes and definitions into Tailwind; or
2. Just write CSS in its own file and link it up like you normally would.

That's fine enough, I suppose, but it breaks you out of _the system_. And if a system is so constricting that it not only regularly needs to be broken out of, but touts the ease with which you can work outside its boundaries as a feature, then maybe it's not the ideal system to use in the first place.

I don't think we'd be so forgiving if, for example, our frontend frameworks like Svelte and React regularly asked us to eject entirely from the framework for things that were common use cases, but impossible within the constraints of the framework. Plenty such things exist in Tailwind.

In these situations, you're not _really_ using the system anymore. You've ejected; you have some mix of approaches. And maybe (hopefully) you only eject when you really have to and your list of overrides and exceptions is small. But even then, to some extent, you've lost the ostensible predictability and consistency you started using Tailwind for in the first place. There's at least one stylesheet somewhere, with at least one or two rogue selectors in it, that don't fit with the rest of your app and which might leak or cause overrides.

There's another and more important danger here, however, to using Tailwind as your guiding, unified approach to all styling:

<CalloutPlusQuote>

Forcing your entire team to adopt Tailwind brings the entire team's skill down to an average.

</CalloutPlusQuote>

Let's go back to the Mario Kart analogy.

the problem is: Tailwind isn't presented in this way; it's presented as _The Solution_ to CSS.

That's a bold claim, and so it begs a bold rebuttal: Tailwind isn't the solution to CSS any more than training wheels are the solution to bicycling. (Also: CSS doesn't _need_ a solution; it just needs careful, thoughtful architecture. Other programming languages require this as well, but for some reason, CSS is the only one that gets blamed for it.)

Noisy as the Tailwind crowd infamously may be, just about every frontend developer I know feels similarly—and I'm privileged to know a great many exceptionally talented frontend developers.

Given the choice, most of us would just as soon forego Tailwind altogether. (I think that's part of why the pro-Tailwind crowd seems so comparatively vocal; lots and lots of frontend developers can't even speak to Tailwind, because they've never had a compelling reason to even reach for it in the first place.)

Even those frontend developers I know who _do_ wind with some degree of regularity don't seem to be fans or evangelists, and instead, just find some value in Tailwind as a basic utility library; a supplement to their existing CSS, rather than as a totalitarian methodology.

I think it's because: when your CSS skills have reached a certain level, the Smart Steering and Auto Acceleration that Tailwind offers stop being benefits, and start being liabilities instead.

## What's good about Tailwind?

From what I've seen in working on various Tailwind projects over the last year or so (many of which at very large scale), the main appeal of Tailwind is: it unifies your team's approach to CSS. If anything is styled, you know how and where to find those styles. If you need to change something, you know where and how. Conflicts and side effects are minimized because there's (usually) little or no global styling; all of an elements styles are right there with the element markup.

That's a nice thing about Tailwind, I concede, but I've come to believe neither this nor any of Tailwind's benefits are actually unique to Tailwind itself.

Or, to put it another way:

<CalloutPlusQuote>

The good things about Tailwind aren't actually things about just Tailwind.

</CalloutPlusQuote>

Having a framework is nice, but Tailwind isn't the only one; it just happens to be the most popular one right now. I think large companies especially are drawn to it for its semi-totalitarian opinions. Teams need to be on the same page, all working within the same system, and Tailwind is most certainly a system you could choose, with a happy path that's not exactly frictionless to leave.

So there's that; it helps unify teams. This, I think, is Tailwind's draw more than anything. Still, I also admit its utility classes are nice; I enjoy that I can quickly and easily add the basic margin, padding, border, color, etc. that I need to a basic element without jumping over to a CSS file to do it (though I _also_ think the benefit of reducing context switching is pretty dramatically overstated; more on that later).

In that same vein: theoretically, Tailwind speeds up prototyping by enabling you to style elements quickly. Even setting aside the upfront cost of _learning_ Tailwind to begin with, I find this assertion questionable (again: more on that later). Still, I can't deny that Tailwind _does_ have the power to speed up .

## Over-indexing on components

## Making rewrites harder

## The learning curve

## Not everything is possible

## Over-verbosity

## Inconsistent syntax

## It might feel good, but is it actually? (Or: was context switching really that much of a problem to begin with?)

<!-- Maybe this can go back in to a section somewhere, or be its own kinda section? -->
