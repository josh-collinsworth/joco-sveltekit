---
title: Classic rock, Mario Kart, and why we can't agree on Tailwind
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

When my brother and I were younger, our tastes in music could hardly have been more different. I was a total hipster (though I didn't describe myself that way at the time), and valued what I saw as artistic integrity and intellectual lyrics. I likely would've judged you if you hadn't heard of my favorite new underground indie band (even though I took a lot of misplaced pride in making sure you hadn't. I've grown up a bit since then, thankfully).

Conversely, my brother's taste was pretty eclectic, but centered on classic rock of the '70s and '80s. Like any good elitist snob, I hated popular things. So, naturally, my brother's kind of music—arguably the most popular kind ever—was anathema to me at the time.

My brother never really understood what it was I seemed to dislike so strongly about the music that he (and lots of other people) enjoyed. So finally, one day, he asked me.

I thought about the question for a minute, and then summarized: "it's all style and no substance."

My brother laughed out loud, as though I had just given him a more ridiculous answer than he ever expected. "That's the _best_ thing about it!" he said with a grin.

It might seem like an obvious, even banal realization that two people can individually love and hate the exact same thing _for the exact same reasons_.

Neither of us were wrong; we were just coming to the table with completely different contexts. And if I took a moment to break out of my narrow way of looking at what "good" was, maybe I could see things his way, too.

## Ending the Tailwind fight once and for all (haha)

Tailwind is a nearly ubiquitous CSS framework these days. It seems to be at once the most beloved and most reviled tool in modern web development; it's so polarizing that merely _mentioning_ it on social media (let alone writing a whole blog post about it) feels risky. Asserting any opinion at all on it—positive _or_ negative—is sure to invite derision. (_Nevertheless, he blogged_.)

Proponents show a near cult-like devotion to Tailwind, some even going so far as to claim it's "fixed CSS," (or at the very least, made it manageable and predictable in a way it wasn't for them before). I've heard more than one Tailwind enthusiast say they never want to style anything without it again.

Detractors, on the other hand, claim it's messy, gets in the way, violates core fundamentals of web development, or even that it does the _opposite_ of what it's supposed to, adding complexity and making projects even _harder_ to maintain.

After using Tailwind professionally—and even on a few small personal projects—over the last year, I'm prepared to finally declare a winner in this years-long debate.

Are you ready? Ok, here we go:

**Both sides are right.**

Mission accomplished. No further discussion needed. Close as resolved. You're welcome.

No, but really. I think I've realized the reason we haven't ever gotten anywhere debating the merits or drawbacks of Tailwind itself (and never will) is: _this dispute isn't actually about the tooling_.

My brother and I disagreed entirely about music, and we both had persuasive arguments why our point of view was the right one. But there was a reason debating the music itself never went anywhere: we didn't fundamentally agree on the criteria to begin with.

Because we were each listening for _completely different reasons_, our contention really began before we'd ever even pressed the play button.

Similarly, I don't think developers on either side of the Tailwind debate will ever make headway in either direction, because the very core of this debate isn't so much about the visible, factual details of the technology in front of us; it's about the intangible context each one of us is bringing to the table.

<CalloutPlusQuote>

When we're doing the same thing, but approaching it with entirely different sets of priorities, values, and desired outcomes, how _could_ we possibly agree?

</CalloutPlusQuote>

Tailwind _is_ good.

It's also bad.

And it is both, for exactly the same reasons.

## The user defines the tool until the tool defines the user

If you've played [Mario Kart 8](https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/) on Switch, you might know the game offers a feature called [Smart Steering](https://www.nintendolife.com/guides/mario-kart-8-deluxe-smart-steering-how-to-turn-auto-steering-on-and-off).

Aimed mainly (but not only) at newer or less skilled players, Smart Steering is basically an AI autopilot that makes sure you never go off the track. You control your racer as normal, but if you veer too far to the side of the road or get too close to an obstacle, the game will automatically take the wheel and guide you away from disaster. No more driving backwards in the grass, or plummeting off the side of the track.

This option (and others, like auto-acceleration) are wonderful additions to the game; indeed, these options are what enable me and my family to play together, and can help to even the playing field among any mixed group. Even skilled, experienced players might elect to use Smart Steering for any number of reasons.

Once you've reached a certain threshold in skill and competitiveness, however, Smart Steering stops helping, and actually starts getting in the way.

Smart Steering will prevent you from taking shortcuts, for one thing; it can't tell _why_ you're going off the main road, but it jumps in the way and prevents you from doing so regardless. It may even intervene when you didn't intend for it to, pushing you off your intended course at inopportune moments when assistance was unwanted. Maybe you had a strategic reason in mind for a collision, or decided that going off road was preferable to steering into an obstacle; Smart Steering won't allow it to happen regardless.

<CalloutPlusQuote>

This option to lower the challenge, at a certain point, starts making the game harder. But whether you think it does the former or the latter will depend entirely on you, and where you are on that curve.

</CalloutPlusQuote>

The more you know the tracks, and know where all the shortcuts are; the more you can map out all the pitfalls, and understand not only how to get around them quickly and easily, but how to use them to your _advantage_; the more a feature designed to augment your skills instead begins to inhibit them.

I'm a very good Mario Kart player (I spent 20-some years of my life playing Mario Kart games before Smart Steering came along), and so I hate Smart Steering. I can't stand it. I might not notice it a lot of the time—it might even occasionally help me—but what stands out to me are the times it jumps in my way at the worst possible moments, turning what should've been an opportunity to put my skills to good use when needed the most, into a bland, generic outcome where my input barely even mattered.

<CalloutPlusQuote>

If you're sufficiently skilled, Tailwind feels like being forced to write CSS with Smart Steering on.

</CalloutPlusQuote>

That's why any conversation I have with somebody who likes Tailwind will probably be like trying to explain why I don't like Smart Steering to a Mario Kart player who likes it and/or relies on it.

_"I don't like that it keeps me from driving off the track. Also, sometimes I have valid reasons for wanting to crash into things."_

_"What!? Why would you want to do that!?"_

### These analogies are not value statements

I should explain that I mean neither to brag on myself, nor to insult anyone who likes Tailwind. That's not at all my intention. There are plenty of shots already fired in that bitter rivalry, and I'm not here to contribute.

On its own, the "I'm so good I don't need this" angle, I know, sounds _extremely_ cocky. I get that, and I don't mean to sing my own praises in any way. I'm no so-called 10x developer. (I don't think such a thing exists anyway, but that's beside the point.) I'm not above anything, and I certainly don't know everything. But I do know CSS very well, and I am good at what I do. I hope my work speaks to that being an honest enough assessment.

On the other side: I _also_ understand that comparing Tailwind to a video game feature largely used by unskilled players might come off as insulting. That's also not my intention; please consider it a shortcoming of this rather imperfect analogy. It's obvious that plenty of very good developers (some undoubtedly better than I) use Tailwind and like it just fine.

I mean it more in the sense that: any given Mario Kart player might decide to use Smart Steering for any number of reasons. _One_ of those many possible reasons is that they haven't developed their skills beyond the need for it yet. But that's just one.

Maybe they have plenty of skill to finish the race, but they're just looking for the easiest path there. Maybe they find the game more enjoyable without that aspect to worry about. Maybe they're plenty competitive even with it on. Maybe they just want to get to the finish line, and being the first one there isn't their highest priority. Maybe they just find their focus is better applied to other aspects of the game.

Hell, maybe they just _like_ it.

Those are all fine reasons to use any tool. I'm not saying you suck if you like it. You probably don't.

But I _am_ saying: your goals are probably different than mine.

Maybe building things as fast as possible is more important to you than it is to me; maybe you find the guardrails useful, even if you don't actually need them. Maybe you're not looking for the pure ideal "best" route, and you're just looking for the one with the least friction. Maybe your projects look different enough from mine that you aren't hitting the same downsides that I am. Maybe you iterate less than I do, or reach for weird/new/tricky CSS things on a regular basis than I do.

None of that is bad, and moreover, none of that means _you_ are bad. It just means we are bound to have different points of view on what constitutes the ideal working environment.

Regardless, whatever your reasons may be: I'm glad Tailwind helps _you_ do the things you want to do.

But it doesn't always help _me_ do the things _I_ want to do; oftentimes, it just gets in my way.

## There are no benefits without tradeoffs

I usually try to avoid broad, sweeping generalizations in areas where point of view and context matter as much as they do here. But I'll allow myself one here, because I think it's true and we would do well to realize it: _benefits always come with tradeoffs_.

I've heard the the [law of conservation of energy](https://en.wikipedia.org/wiki/Conservation_of_energy#:~:text=Energy%20can%20neither%20be%20created,one%20form%20to%20another.) adapted to software, and I find it fitting:

> Complexity can neither be created nor destroyed; rather, it can only be transformed or transferred from one form to another.

This is broadly true, from my perspective; complexity in software exists, even if it's remanded to a place you don't experience it. If something seems easier than it used to be—or like all the hard parts were removed—I assure you those hard things didn't just disappear; they were _moved_.

For example: I might have a difficult task that I can have a language model like ChatGPT do for me. To my limited perspective, it might seem like that task just got much easier, more or less magically.

But the difficulty didn't disappear in the literal sense; it isn't gone from the universe. Instead, it disappeared more like something disappears in a magic trick; it was just shifted off somewhere else. (In this case, to an incredibly complex statistical language model, which was extremely resource-intensive to build, and is probably highly energy-intensive to run. It might have also cost me money, and, depending on the task and the model, might have ethical implications as well.)

Point is: it _looks_ easier, but the difficulty didn't just vanish. It merely moved to somewhere with a different set of tradeoffs.

<CalloutPlusQuote>

Any time something seems to get easier, it's just because the complexity moved somewhere else.

</CalloutPlusQuote>

Don't get me wrong; that's still usually a good thing. I don't think, for example, that most farmers would argue shifting the difficulty of watering crops to complex and sophisticated irrigation systems was a bad move in any way.

But it means we should be wary of any product that claims it's eliminated the complexity—destroyed it, removed it, turned it into nothing—without acknowledging that it had to go _somewhere_. Watering crops at scale is a hard problem, but so is creating (or fixing) a technologically sophisticated irrigation system.

The problems didn't vanish; they just moved.

Tailwind, generally speaking, is marketed (and spoken of by its proponents) as though it's achieved the impossible task of obliterating complexity from existence.

If you would make this argument, I would dissent. But I also think you're probably right _in your case_.

That's really the whole point I'm trying to get at; if you and I can't agree on Tailwind, it's probably virtually nothing to do with that specific piece of software. It's probably much more to do with the specific context, goals, and valuation of tradeoffs that we both bring to the table.

Where you see style, I see a lack of substance.

Where you see a helpful copilot that saves you from disaster, I see a meddling nuisance that thwarts me at the worst possible moments.

Where you see a solved problem, I see tech debt that simply hasn't come due yet.

We're both just observing the same truths from different points of view.

We're both wrong. We're both right.

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
