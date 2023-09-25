---
title: Classic rock, Mario Kart, and why we can't agree on Tailwind
date: 2023-09-25
updated: 2023-09-25
categories:
  - advice
  - css
  - personal
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

When my brother and I were younger, our tastes in music were nearly polar opposites. I was an obnoxious hipster, and valued what I saw as artistic integrity and creative innovation. I was almost entirely into new and active artists.

In contrast, my brother made virtually no judgments at all. He was open to anything and everything, but his mainstays centered on classic rock of the '70s and '80s. He loved rediscovering decades-old albums by many of the most well-known artists of their time.

Like any good elitist snob, I hated anything popular. So naturally, my brother's kind of music was anathema to me at the time.

My brother never really understood what it was I seemed to dislike so strongly. So finally, one day, he asked me.

I thought about the question for a minute, and then summarized: "it's all style and no substance."

My brother burst out in laughter.

"That's the _best_ thing about it!" he laughed. "That's the whole point!"

I knew we looked at the same things in opposite ways. But I had never realized before then that, wildly enough, we had _all the exact same reasons_ for it.

## Why we can't agree on Tailwind

Tailwind is nearly as ubiquitous as it is polarizing these days. (I trust if you've been interested enough to read this far, I don't need to cite any sources on that score.)

Proponents show a near cult-like devotion to Tailwind, some even going so far as to claim it's "fixed" CSS—or at the very least, made it manageable and predictable in a way it wasn't for them before. Most frontend frameworks and products feature a first-class Tailwind integration, due to its popularity.

Detractors, on the other hand, claim Tailwind is messy; it gets in the way; it violates core fundamentals of web development; it diminishes the power of CSS; and/or that it does the _opposite_ of what it's supposed to, adding complexity and making projects even _harder_ to maintain.

Many who use Tailwind never want to go back; many who _don't_ never want to.

How could we possibly disagree so sharply?

After using Tailwind for the last year—both professionally and on a few small personal projects—I've come to what might just be the most unpopular opinion of all, in regards to that question:

**Both sides are right.**

…Ok, ok, I can hear the boos. Nobody likes a centrist. But hear me out.

We won't ever get anywhere debating the merits or flaws of Tailwind, for the same reason my brother and I never persuaded each other on music.

<CalloutPlusQuote>

We could've dissected Billy Joel and Sufjan Stevens all we wanted. But it didn't matter, because our disagreement ultimately started before either one of us ever pressed the play button.

</CalloutPlusQuote>

It turns out, he and I actually saw every artist and album in pretty much exactly the same way.

We just never agreed on what was a feature, and what was a bug.

Likewise, I suspect most people on opposing sides of the Tailwind debate actually see Tailwind quite similarly.

Our contention isn't with Tailwind; it's with the valuations we made long before we ever chose our tools. Where one of us sees a selling point, the other sees a flaw.

Tailwind _is_ great.

Tailwind is _also_ a bad idea.

And it is both, at the same time, for exactly the same reasons.

## The user defines the tool

If you've played [Mario Kart 8 Deluxe](https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/) on Switch, you might know the game offers a feature called [Smart Steering](https://mariokart.fandom.com/wiki/Smart_Steering).

(_Yes, this is still about Tailwind. Bear with me here_.)

Smart Steering is essentially an AI copilot. When enabled, you control your racer as normal, except that if you start to go off the road, the game will automatically take the wheel and steer you back on course. No more slogging through the grass, or plummeting off the side of the track.

Smart Steering can help even the playing field among any mixed group (particularly on higher engine classes, where even very good players may find themselves hurling off the track).

But as you get better and better at the game, Smart Steering begins to help less and less…until eventually, it starts getting in the way instead.

![A chart demonstrating the above paragraph; as skill level increases, the impact of usage goes from entirely positive to entirely negative.](/images/post_images/impact.png)

Smart Steering will prevent you from taking shortcuts, for one thing; it can't tell _why_ you're going off the main road, but it jumps in the way and prevents you from doing so regardless. It may even intervene unexpectedly, pushing you off your intended course at inopportune moments.

You might have a strategic reason in mind for going off the road (maybe you were avoiding a ruinous obstacle, for example), but Smart Steering won't allow it regardless.

Plus, as a balancing feature, the game's strongest speed boosts are disabled for players utilizing Smart Steering.

<CalloutPlusQuote>

The better are, the more a feature designed to augment your skills instead begins to inhibit them. But whether it makes you better or worse--and to what degree--will depend entirely on where you're coming from.

</CalloutPlusQuote>

I'm a very good Mario Kart player (I spent some thirty years of my life playing Mario Kart games before Smart Steering came along, after all), and so I can't stand Smart Steering. I never use it. I might not notice it a lot of the time—it might even occasionally help me—but what stands out to me are the times it jumps in my way at the worst possible moments.

Smart Steering might keep me on the track, but it _also_ suppresses my fullest abilities. It thwarts the best outcomes just as commonly as it averts the worst disasters.

<CalloutPlusQuote>

To those sufficiently skilled with CSS, Tailwind feels like being forced to code with Smart Steering on.

</CalloutPlusQuote>

That's why any conversation I have with somebody who likes Tailwind will probably be like trying to explain why I don't like Smart Steering to a Mario Kart player who relies on it.

> "I don't like that it keeps me from driving off the track."
>
> "What!? Why would you ever want to do that!?"
>
> "You can actually skip ahead if you use this trick right here..."
>
> "Ugh, what a hacky workaround. It's really best practice to stay on the track, you know."
>
> "Look, I understand why you're saying that, but I've been doing this for a long time, and I know what I'm doing."
>
> "I just don't know why you'd make things harder on yourself, just to do something you're not supposed to do anyway."

<SideNote>

I realize I might sound rather arrogant in choosing this comparison. Mario Kart is a racing game, after all, which might seem to imply that I think of myself as a winner, and people who don't do things my way as inferior.

That's not at all my intent; I only mean to point out that if Tailwind is your thing, it's probably because we're coming from different places and value different things.

Whether Tailwind helps you do the things you want to do, or whether you (like me) feel that it just grabs the steering wheel away from you, that doesn't inherently mean anything good, or bad, about either one of us. It just means we have two different approaches.

</SideNote>

## There are no benefits without tradeoffs

For the most part, it's perfectly fine if we see the same thing in two different, even opposite ways. However, there's one universal truth I think it's important we agree on as common ground, namely: _benefits always come with tradeoffs_.

<CalloutPlusQuote>

That is: complexity always exists, even if it's remanded to a place you don't regularly experience it.

</CalloutPlusQuote>

When things seem to get better and simpler, we're actually just experiencing the _upside_ of some architectural decision. That decision, whatever it was, has downsides elsewhere; some other part of the chain, further away from our view, is now also more complex than it used to be.

Don't get me wrong; that's still usually a good thing. The new set of tradeoffs is often (though not always) preferable to the old set. A mess in the basement is better than a mess in the living room.

Regardless, though: we should be incredibly skeptical of any product that claims it's eliminated the complexity—destroyed it, removed it, turned it into nothing—without acknowledging it had to go _somewhere_, and that other drawbacks are created by shifting it to that new location.

Problems in tech don't _vanish_; they just _move_.

An example from the world of frontend might be: our build tools. Before the likes of Vite and Webpack (and before them, Grunt, Gulp, Browserify, and others), coercing our frontend code into a minimal bundle that worked cross-browser and -device was a painstaking task we dealt with on a regular basis.

Now, however, we've _moved_ that complexity into a little Pandora's box called `node_modules`. Most of us probably don't even think of the complexity day-to-day. But it's still very much there—only now, when something goes wrong, it goes _extremely_ wrong, as an inscrutable failure somewhere in the opaque toolchain can render our work inoperable for hours or possibly even days at a time.

<CalloutPlusQuote>

The complexity never dies; we just trade frequent inconvenience for sporadic agony.

</CalloutPlusQuote>

Ok, fine. Why is this all important?

Because Tailwind is generally marketed (and spoken of by many of its proponents) as a framework that's achieved this impossible task of obliterating complexity in CSS from existence.

If you would make this argument, I would dissent. But I also think you're probably right _in your case_. You likely don't work in the areas where the tradeoffs exist, so they don't exist to you.

If you're a Tailwind fan, you probably see it the thing that finally rid of the hard parts, curbed the complexity, and made styling manageable for you.

On the other side, if you're a seasoned frontend dev with a strong mastery of CSS, you probably see Tailwind as a brutal instrument that dismantled the best parts of CSS, diluted its power, and muzzled your abilities with it.

Both of those are fully valid points of view. The question is really just in where you spend your time.

The only _invalid_ point of view is that one or the other of these is fully, completely correct.

CSS _does_ have myriad complexities and pitfalls, and Tailwind smooths those rough edges.

But CSS is _also_ an incredibly powerful programming language, which Tailwind dilutes and diminishes.

You don't get to change one without changing the other.

## Conclusion?

I acknowledge that Tailwind might solve _your_ problems, and I'm happy for you. Really, I am. But to me, Tailwind _is_ a problem.

Where you see a helpful copilot that saves you from disaster, I see a meddling nuisance that thwarts me at the worst possible moments.

Where you see a solved problem, I see tech debt that simply hasn't come due yet.

Where Tailwind ostensibly saves you from context switching, it keeps me away from the places where I do my best work.

Where you see complexity simplified, I see a once-powerful tool, dulled beyond recognition.

Where you see protective walls, I see a constricting cage.

We're both just observing the same truths from different points of view.

We're both wrong. We're both right.

## Style and substance

I've spent a good while now asserting that our collective differences regarding Tailwind center around an inversion of opinion on benefits and drawbacks. So, I think there's value in examining some of those specifics, so we can understand what it is that brings us both to view the same thing so very differently.

## The divide: factory workers vs. artisans

### Are you more productive, or do you just feel like you are?

One of the benefits Tailwind brings to authors who overcome its initial learning curve is the ability to rapidly style components without leaving the markup.

For example, instead of switching away from a template file (JSX, Vue, HTML, whatever) in order to write this:

```css
.my-element {
	display: block;
	border: 1px solid;
	margin: 1rem;
	padding-top: 1rem;
}
```

I can simply add the corresponding classes to the markup:

```html
<div class="block border m-4 pt-4"></div>
```

Tailwind proponents see this as a benefit; not only did we avoid jumping between files (the greatly reviled "context switching"), we didn't have to come up with a class name on our own. It's also, of course, less to type, which means you get done faster.

Most of the time, though, you aren't writing quite such simple components. More often than not, your elements will require classes for several properties, plus responsive classes and maybe even classes to handle dark mode. That might lead to something like this:

```html
<div
	class="grid grid-cols-1 bg-stone-100
  text-stone-950 w-full max-w-5xl items-center
  mx-0 my-4 p-2 gap-2 sm:grid-cols-2
  sm:justify-between md:grid-cols-3 md:gap-4
  md:mx-4 md:p-4 lg:my-8 lg:gap-6 lg:grid-cols-4
  dark:text-stone-100 dark:text-stone-950"
>
	<!-- ...Contents here -->
</div>
```

(And that's before we've even added any styling for focus, hover, or pseudo elements.)

Some people don't ever get past that above messiness. I've personally gotten used to it, but I still don't think it's optimal.

After all, we often go out of our way to abstract logic out of the template, in order to make reading the markup easier. Let's take a JSX example:

```jsx
const myComponent = () => {
	return (
		<div>
			{(someCondition || (anotherCondition && aThirdCondition)) && !fourthCondition && (
				<ConditionalComponent />
			)}
		</div>
	);
};
```

You would very likely abstract that logic, to avoid polluting the template.

```jsx
const myComponent = () => {
  // Abstract the logic
  const showComponent = () => {
    if (fourthCondition) return false;
    return someCondition || (anotherCondition && aThirdCondition);
  };

  // Now the template is much cleaner
  return (
    <div>
      {showComponent() && <ConditionalComponent />}
    </div>;
  )
};
```

I don't feel we should apply a different standard to classes than we apply to anything else that pollutes markup, personally. Still, Tailwind enthusiasts argue this messiness is worth the tradeoff for the enhanced productivity.

<CalloutPlusQuote>

To this assertion, I mainly argue that Tailwind's approach does more to generate _feelings_ of productivity than to actually cut time spent on the project.

</CalloutPlusQuote>

For one thing, you still context-switched. You stopped thinking about the markup and logic of the component, and you started thinking about its presentation. _Maybe_ you can argue that jumping into a CSS file (or a style block) exacerbates that switch, but I would ask whether that's _really_ such a problem. I think it's not; it just makes for convenient marketing. Developers hop between files all the time. Everything is a component these days, and every component probably gets and/or passes props to another one. Every one probably has its own tests, and its own types on top of that. Strange that this "context switching" only seems to get called a problem when one of the files is a CSS file.

But even setting that aside, I think proponents of this technique overlook its downsides when assessing its ostensible productivity gains. (Remember: no upsides without downsides.)

To whatever degree you just saved yourself time right now, in this moment, you _also_ made this code a bit more difficult to refactor in the future.

Let's make the (more than reasonable) assumption that this markup will be revisited and re-styled in the future, probably more than once.

Hooray for you not having to come up with a class name, or type out styles. But every developer who touches that code after you now has the problem that for _every single change_ they want to make, they've got to make it _everywhere it exists in the markup_. They don't get the benefit of merely adjusting the styles in that CSS block and watching the changes cascade to every desired location in one single swoop.

The complexity of CSS didn't vanish; it was just moved.

One might reasonably argue this can be worked around by componentizing any reused element, but this railroads you into making architecture decisions that might not make sense otherwise—not to mention that it creates _another_ supposed context switch.

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
