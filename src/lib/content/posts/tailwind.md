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

When my younger brother and I were younger, our tastes in music were pretty close to polar opposites. He loved classic rock and took great joy in rediscovering bands from the '70s and '80s; I was a hipster who valued what I saw as artistic integrity and intellectual lyrics, and who judged you if you hadn't heard of my favorite new underground indie band (even though I took a lot of misplaced pride in making sure you hadn't. I've grown up since then, thankfully).

Like any good elitist snob, I hated popular things. So, naturally, my brother's brand of music—arguably the most popular kind ever—was anathema to me at the time.

My brother, to his credit, always seemed willing to at least give my music a shot, and even liked some of it. But he never really understood what it was I seemed to dislike so strongly about his preferences. So finally, one day, he asked me.

I thought about the question for a minute, and then summarized: "it's all style and no substance."

My brother laughed out loud. "That's the _best_ thing about it!"

It might seem like an obvious, even banal realization that two people can individually love and hate the exact same thing _for the exact same reasons_. But that interaction opened my eyes.

Neither of us was wrong; we were just coming to the table with completely different contexts.

---

Tailwind is a nearly ubiquitous CSS framework these days, and it's so polarizing that merely _mentioning_ it on social media feels risky. It seems to be at once the most beloved and most reviled tool in modern web development.

Proponents show a near cult-like devotion to Tailwind, some even going so far as to claim it's "fixed CSS," (or at the very least, made it manageable and predictable in a way it wasn't before). I've heard more than one Tailwind enthusiast say that they never want to style an element without it again.

Detractors, on the other hand, claim it's messy, gets in the way, violates core fundamentals of web development, or even that it does the _opposite_ of what it's supposed to, adding complexity and making projects even _harder_ to maintain.

After using Tailwind professionally—and even on a few small personal projects—over the last year, I'm prepared to finally declare a winner in this years-long debate:

Both sides are right.

Tailwind _is_ great. It's _also_ terrible. But we won't ever get anywhere debating the merits or drawbacks of Tailwind itself, because I've come to believe this dispute isn't actually about the tooling.

My brother and I disagreed entirely about music, and we both had persuasive arguments why our point of view was the right one. But there was a reason debating the music itself never went anywhere: _it was never about the music itself_.

Because we were each listening for _completely different reasons_, our contention really began before we'd ever even pressed the play button.

Similarly, I don't think developers on either side of the Tailwind debate will ever make headway in either direction, because the very core of this debate isn't so much about the visible, factual details of the technology in front of us; it's about the intangible context each one of us is bringing to the table.

<CalloutPlusQuote>

When we're doing the same thing, but approaching it with entirely different sets of priorities, values, and desired outcomes, how _could_ we possibly agree?

</CalloutPlusQuote>

## The tool you like depends on who you are: a Mario Kart analogy

If you've played [Mario Kart 8](https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/) on Switch, you might know the game offers a number of accessibility options.

One of those features is called [Smart Steering](https://www.nintendolife.com/guides/mario-kart-8-deluxe-smart-steering-how-to-turn-auto-steering-on-and-off), and it's a little like an AI autopilot that makes sure you never go off the track. Veer too far to the side of the road or get too close to an obstacle, and the game will momentarily and automatically take the wheel and steer you away from disaster. No more driving backwards in the grass, or off the side of Rainbow Road.

This accessibility option (and others, like auto-acceleration) are wonderful additions to the game; indeed, these options are what enable me and my young son to play together, and can help to even the playing field among any mixed group. Even skilled, experienced players might elect to use Smart Steering for any number of their own reasons.

Once you've reached a certain threshold in skill and competitiveness, however, Smart Steering stops helping, and actually starts getting in the way.

Smart Steering will prevent you from taking shortcuts, for one thing; it can't tell _why_ you're going off the main road, but it jumps in the way and prevents you from doing so regardless. It may even intervene when you didn't intend for it to, pushing you off your intended course at inopportune moments when assistance wasn't needed. Maybe you had a strategic reason in mind for a collision, or decided going off road was preferable to steering into an obstacle; Smart Steering won't allow it to happen regardless.

The option to _lower_ the challenge, at a certain point, starts _making the game harder_. But whether you think it does the former or the latter will depend entirely on _you_ and where you are on that curve.

The more you know the tracks, and know where all the shortcuts are; the more you can map out all the pitfalls, and understand not only how to get around them quickly and easily, but how to use them to your _advantage_; the more a feature designed to augment your skills instead begins to inhibit them.

I'm a very good Mario Kart player (I spent 20-some years of my life playing Mario Kart games before Smart Steering came along), and so I hate Smart Steering. I can't stand it. I might not notice it a lot of the time—it might even occasionally help me—but what stands out to me are the times it jumps in my way at the worst possible moments, turning what should've been an opportunity to put my skills to good use when needed most into a bland, generic outcome where my input barely even mattered.

<CalloutPlusQuote>

If you're sufficiently skilled, Tailwind feels like being forced to write CSS with Smart Steering on.

</CalloutPlusQuote>

<hr />

I should explain that I mean neither to brag on myself, nor to insult anyone else.

Insinuating that my own skills with CSS are at such an expert level that helpful tooling is only a hindrance to me, admittedly, sounds _very_ cocky. I understand that, and I don't mean to brag or sing my own praises in any way. I don't know everything—not by a long shot—but I do very much know my way around CSS and am quite good at using it. I think (and hope) my work speaks to that being an honest enough assessment.

On the other side: I _also_ understand that taking a tool many thousands of developers find useful, helpful, and even enjoyable, and then comparing that tool to, essentially, digital training wheels, is rather insulting.

This, also, is not my intention, though I certainly understand why it sounds that way. After all, plenty of very good developers who themselves are probably just as good at CSS as I am (if not better) use Tailwind and like it just fine.

If you feel that way, then I let me say: maybe you and I have different goals and intentions in our projects, and that's why we don't see this tool in the same way.

To continue with the analogy: any given Mario Kart player might decide to use Smart Steering for any number of reasons. _One_ of those many possible reasons is that they haven't developed their skills beyond the need for it yet. But that's just one.

Maybe they have plenty of skill to finish the race, but they're just looking for the easiest path there. Maybe they find the game more enjoyable without that aspect to worry about. Maybe they're plenty competitive even with it on. Maybe they just want to get to the finish line, and being the first one there isn't their highest priority. Maybe they just find their focus is better applied to other aspects of the game.

Hell, maybe they just _like_ it.

Those are all fine reasons to use any tool. I'm not trying to say you suck if you wind. Your probably don't. But your goals _are_ probably different than mine. Maybe building things as fast as possible is more important to you than it is to me; maybe you find the guardrails useful, even if you don't actually need them. Maybe you're not looking for the pure ideal "best" route, and you're just looking for the one with the least friction. Maybe your projects look different enough from mine that you aren't hitting the same downsides that I am. Maybe you iterate less than I do, or reach for weird/new/tricky CSS things on a regular basis than I do.

None of that is bad, and moreover, none of that means _you_ are bad. It just means we are bound to have different points of view on what constitutes the ideal work environment.

But whatever the reason, I'm glad Tailwind helps _you_ do the things you want to do.

But it doesn't help _me_ do the things _I_ want to do; like Smart Steering, it mainly tends to get in my way.

<CalloutPlusQuote>

When you force strong CSS developer to wind, _you are making them worse_. They are slower, they can do less, and they lose access to many of their most powerful techniques.

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
