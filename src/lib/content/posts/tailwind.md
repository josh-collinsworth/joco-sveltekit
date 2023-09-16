---
title: Tailwind might be good for you, but it's bad for me
date: 2023-08-28
updated: 2023-08-28
categories:
  - advice
coverImage: great-transitions.png
coverWidth: 320
coverHeight: 180
excerpt: 'TODO: fill this out'
draft: true
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

If you've played [Mario Kart 8](https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/) on Switch, you might know the game offers a number of accessibility options to help younger and/or less skilled players enjoy the game alongside more competitive series veterans (such as myself).

One of those features is called [Smart Steering](https://www.nintendolife.com/guides/mario-kart-8-deluxe-smart-steering-how-to-turn-auto-steering-on-and-off), and it's a little like an AI autopilot that makes sure you never go off the track. Veer too far to the side of the road or get too close to an obstacle, and the game will momentarily and automatically take the wheel and steer you away from disaster. No more driving backwards in the grass, or off the side of Rainbow Road.

This accessibility option (and others, like auto-acceleration) are wonderful additions to the game; indeed, they're what enable me and my young son to play together, and can help to even the playing field among any mixed group.

Once you've reached a certain skill threshold, however, Smart Steering stops helping, and actually starts getting in the way.

Smart Steering will prevent you from taking shortcuts, for one thing; it can't tell _why_ you're going off the main road, but it jumps in the way and prevents you from doing so regardless. It may even intervene when you didn't intend for it to, pushing you off your intended course at inopportune moments when assistance wasn't needed. Maybe you decided going off road was preferable to colliding with an obstacle, or had a strategic reason in mind for a collision; Smart Steering won't allow it to happen regardless.

<CalloutPlusQuote>

These options to _remove_ challenge, at a certain point, start _adding it in again_, and prevent you from going above a certain threshold.

</CalloutPlusQuote>

<hr />

I've been using Tailwind professionally, and even on the occasional hobby/learning project, for the better part of a year now. While I've understood why lots of developers seem to like it, and have seen that it does indeed have its compelling upsides, I've struggled for most of the last year to put into words what it is about this tool that just doesn't jive with me.

Something about Tailwind just feels like cutting against the grain; like doing things the wrong way around, at least as my brain has come to understand it.

<CalloutPlusQuote>

If you're sufficiently skilled, Tailwind feels like being forced to write CSS with Smart Steering on.

</CalloutPlusQuote>

The more you know the tracks, and know where all the shortcuts are; the more you can map out all the pitfalls, and understand not only how to get around them quickly and easily, but how to use them to your _advantage_; the more a feature designed to augment your skills instead begins to inhibit them.

<hr />

I should explain that I mean neither to brag on myself, nor to insult anyone else.

Insinuating that my own skills with CSS are at such an expert level that helpful tooling is only a hindrance to me, admittedly, sounds _very_ cocky. I understand that, and I don't mean to brag or sing my own praises in any way. I don't know everything—not by a long shot—but I do very much know my way around CSS and am quite good at using it. I think (and hope) my work speaks to that being an honest enough assessment.

On the other side: I _also_ understand that taking a tool many thousands of developers find useful, helpful, and even enjoyable, and then comparing that tool to, essentially, digital training wheels, is rather insulting.

This, also, is not my intention, though I certainly understand why it sounds that way. After all, plenty of very good developers who themselves are probably just as good at CSS as I am (if not better) use Tailwind and like it just fine.

If you feel that way, then I let me say: maybe you and I have different goals and intentions in our projects, and that's why we don't see this tool in the same way.

To continue with the analogy: any given Mario Kart player might decide to use Smart Steering for any number of reasons. _One_ of those many possible reasons is that they haven't developed their skills beyond the need for it yet. But that's just one.

Maybe they have plenty of skill to finish the race, but they're just looking for the easiest path there. Maybe they find the game more enjoyable without that aspect to worry about. Maybe they're plenty competitive even with it on. Maybe they just want to get to the finish line, and being the first one there isn't their highest priority. Maybe they just find their focus is better applied to other aspects of the game.

Hell, maybe they just _like_ it.

Those are all fine reasons to use any tool. I'm not trying to say you suck if you use Tailwind. Your probably don't. But your goals _are_ probably different than mine. Maybe building things as fast as possible is more important to you than it is to me; maybe you find the guardrails useful, even if you don't actually need them. Maybe you're not looking for the pure ideal "best" route, and you're just looking for the one with the least friction. Maybe your projects look different enough from mine that you aren't hitting the same downsides that I am. Maybe you iterate less than I do, or reach for weird/new/tricky CSS things on a regular basis than I do.

None of that is bad, and moreover, none of that means _you_ are bad. It just means we are bound to have different points of view on what constitutes the ideal work environment.

But whatever the reason, I'm glad Tailwind helps _you_ do the things you want to do.

But it doesn't help _me_ do the things _I_ want to do; like Smart Steering, it mainly tends to get in my way.

<CalloutPlusQuote>

When you force strong CSS developer to use Tailwind, _you are making them worse_. They are slower, they can do less, and they lose access to many of their most powerful techniques.

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

Even those frontend developers I know who _do_ use Tailwind with some degree of regularity don't seem to be fans or evangelists, and instead, just find some value in Tailwind as a basic utility library; a supplement to their existing CSS, rather than as a totalitarian methodology.

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
