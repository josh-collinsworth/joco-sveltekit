---
title: Things you forgot (or never knew) because of React
date: 2023-07-31
updated: 2023-07-31
categories:
  - advice
coverImage: because-of-react.png
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

## A lengthy introduction, ostensibly about music

Like a lot of people (or a lot of people over about 30, anyway; if you're younger than that, just stick with me for a minute), there was a time when the only music I listened to was whatever was played on my local radio station. For a pretty big chunk of my life, I probably hadn't even heard of any artists who didn't make the top 40.

At the time, I thought I was happy with that arrangement. I liked it. It was working for me. Why change anything?

<CalloutPlusQuote>

Looking back, I realize: I naively trusted that anything good inevitably became popular.

</CalloutPlusQuote>

Eventually, though, _other_ music began to take root in my life. Through new friends and the internet, I became acquainted with wider and wider ranges of music, further and further from the things I'd known before. And much to my surprise: the deeper I got, the more I realized how _shallow_ I'd been content to be up until that point.

_That_ music was different. I wasn't in love with it one week and sick of it the next. Listening to it wasn't part of an endless cycle.

If anything, it was the _opposite_; it was music I actually liked and appreciated _more_ the more I listened to it. There was depth beneath the surface. Sure, it might not have had the loud distorted guitars, punch-line lyrics, or earworm melodies I'd enjoyed up until that point. But to my surprise, that actually somehow made it _better_, not worse.

<CalloutPlusQuote>

I discovered there was a whole better, deeper, more interesting world beyond the popular defaults I'd been content to live with up to that point.

</CalloutPlusQuote>

I figured out: it's amazing what you find when you go and _look_, instead of just accepting what naturally comes to you.

### Finding richness beyond the defaults

I suspect you can probably relate to that experience, even if it's not with music.

Maybe you loved chain restaurants until you discovered more interesting local places. Maybe you had a favorite drink for years that you gave up when you unexpectedly liked a new thing better.

Maybe your favorite movies, books, games, podcasts, influencers, or hobbies unexpectedly expanded and shifted when you tried something previously out of character.

The details aren't important; all I'm getting at is:

<CalloutPlusQuote>

You've probably experienced finding something _great_ beyond the periphery of _popular_ things.

</CalloutPlusQuote>

Not to sound like a frontend version of a snobby hipster. That's not my intention. If your idea of a good time is Bud Lites at Olive Garden, then hey, pass the breadsticks.

But what I _am_ trying to do is: gently share the idea that _maybe_ you're shutting yourself off to something great, without even realizing it.

Maybe this whole concept--finding better things beyond familiar boundaries--applies to our tools and workflows just as much as it does any other area of life.

Maybe your current satisfaction comes, at least a little bit, from simply not having any idea what you're missing, because _you haven't ever looked beyond what's popular_.

### Completing the analogy, and acknowledging its shortcomings

I've written before about how [React](https://reactjs.org) is [the new default](/blog/self-fulfilling-prophecy-of-react) frontend framework. And just like I didn't know what I was missing, I don't think most people using React on a regular basis realize exactly how much it's fallen behind.

And on that note, this is where the analogy falls apart just a bit:

<CalloutPlusQuote>

Unlike music quality—which is purely subjective—there are real, empirical, measurable ways in which React is demonstrably a worse choice.

</CalloutPlusQuote>

I'd never write a blog post arguing your favorite thing is bad, or trying to change your mind purely over personal preference. (Not at this age, anyway.) Who cares? If you like it, have fun.

But when we choose the tools we use to build things people will interact with, that decision carries a real responsibility to others. When it comes to development—unless we're building things purely for ourselves, anyway—our enjoyment is secondary; the user's experience is what matters most.

If you love your tools, that's wonderful. I hope you do. But that's not the goal, and developer experience (DX) shouldn't ever supersede user experience (UX).

So unlike with music—or any of those other examples mentioned above—we have very valid and important reasons outside our own tastes and preferences to push beyond the comfort of our existing preferences.

### The React bubble

The idea that React lags behind its peers might be new to you. Like many, you might still consider React the "modern" standard in frontend. So let's quickly examine that, before diving into the titular list.

One of the things that inspired me to begin writing this post was this quote from [Alex Russell, via Mastodon](https://toot.cafe/@slightlyoff):

> Someone asked me today if there was a case for using React in a new app that doesn't need to support IE.
>
> I could not come up with a single reason…
>
> It's astonishing how antiquated React is.

Alex mentions a lack of web component interoperability being one of the biggest drawbacks for this particular team; that's been a glaringly missing feature from React for years. And yes, it's "on the roadmap." As of this writing, though, there's no firm commitment to either an implementation or an expected ship date.

Meanwhile, pretty much all of React's contemporaries—anything you might choose instead of React—already have that story shipped and in production.

Alex [goes on to say](https://toot.cafe/@slightlyoff/110512849934452558):

> React is '13 tech designed to '08 constraints. Nothing about it is innovative in 2023; in fact, it's the slowest way to get functional-reactive frontend programming in the modern era…

I've written before on how [React has aged, and how I don’t think most people realize how much or how poorly](/blog/self-fulfilling-prophecy-of-react). So to put the quote above another way (and tie it back to our intro about music):

<CalloutPlusQuote>

React was designed seven Taylor Swift albums ago, for a world where John Mayer and Jennifer Aniston were still dating.

</CalloutPlusQuote>

(_Seven_ new _Taylor Swift albums ago, that is. That doesn't even count the_ Taylor's Version _releases_.)

So if you're one of the many developers whose whole world has been React for the past few years, there might be things you've forgotten—or never knew at all—because you've been using React for so long.

As fast as modern front-end seems to move, we appear to be very slow in realizing the world which crowned React king of modern frontend no longer exists. (_If it ever did; not many organizations had anything resembling Facebook's specific set of problems to begin with_.)

<PullQuote>

There might be things you've forgotten—or never knew at all—because you've been using React for so&nbsp;long.

</PullQuote>

Browsers have seen _wild_ growth in new feature adoption, in both JavaScript and CSS. Technology and user expectations have evolved, and the current ecosystem of tools has done a _lot_ more than you might think to iterate and adapt past React, in ways such legacy software can't. (_I realize calling React "legacy software" is controversial, but I think it's fair; it's complicated, it's old, it's got a lot of rules and gotchas, beginners are afraid of it, and the architectural decisions it's built on top of have long since become an impediment to its future growth and iteration_.)

---

If I haven't completely alienated you yet by this point (with some combination of quasi-elitism, rambling preamble, and overuse of parenthetical interjections), I'd like to share my thoughts on that topic, in the hopes of introducing you to some tunes you might be surprised to find are better than what's on your current playlist.

Let's get to the list: **things you forgot (or never knew) because of React**.

## Your frontend framework doesn't need a big ecosystem anymore

I've touched on this in [other posts](http://localhost:1027/blog/self-fulfilling-prophecy-of-react#community-and-support), but any time an "unproven" framework's name comes up as a potential tool for a dev project, the first question anybody seems to care about is: how big is the ecosystem? You might have even had that thought as soon as you read the premise of this post. _Move from React to another framework? Is the new one big enough yet?_

Why do we have this obsession with ecosystem size? Sure, we want to be certain this framework won't just vanish on us in a few years, but Vue, Svelte, Preact, Solid, Astro, and others are all _well_ past that point. So it isn't that.

I think the reason is: modules that need to be built _specifically for frameworks_. You could argue it started with jQuery, but I think React really accelerated it.

With React, any time we needed a module or a widget or a library to do something specific (a carousel, a map, an accordion, or whatever else), _it had to be a React thing_; a plain web thing or a vanilla JavaScript thing just wouldn't do. All of React's rules and handling of state and quirks of component lifecycles meant that any available package or library which _wasn't_ explicitly written for React probably wasn't going to work.

We shouldn't need to do that—especially for a framework that so often claims it's "just JavaScript."

If it's _just JavaScript_, then it should _just work_ with anything that's _actually just JavaScript_.

<CalloutPlusQuote>

React trained us that things needed to be built _specifically for our framework_, but that's not very true anymore, and it arguably never should have been.

</CalloutPlusQuote>

React's made us forget that not all frameworks behave this way.

Sure, other front-end frameworks have their own rules and conventions about state and architecture. You can step on rakes in their yards, too. But crucially--and I want to emphasize this as strongly as possible:

<CalloutPlusQuote>

No other modern frontend framework is as stubbornly incompatible with the platform as React is.

</CalloutPlusQuote>

If you're building using other modern tools and frameworks, it's _far_ more likely that the vanilla JavaScript packages available will work just fine for you. Web components, too. You often don't _need_ a specialized package or library tailor-built for your thing—whatever that thing is—because your thing probably already works with the platform, and therefore, everything else that's already out there.

[Preact Signals](https://preactjs.com/guide/v10/signals/) is a phenomenal example: although built for use with Preact, it can be imported and used in _any_ framework, or even in vanilla JavaScript. Web components, too, are compatible with just about any modern non-React framework.

Where the frameworks fall short, it's likely the platform already has the thing you need. (Form submission, for example; always a pain point in React, now made infinitely easier by two-way data binding and just using the conventions browsers give to us.)

And worst-case, it's probably a lot _easier_ to build whatever thing you need than it was in React. (It shouldn't take very much comparing of `useState` with other frameworks' versions to see that.)

## Frameworks aren't hard to learn anymore

I theorize developers mainly trained on React think back to how difficult it was to learn, and assess the learning curve of other frameworks similarly. And that's probably part of what keeps us from trying new things; it seems really hard.

All the ins and outs of state management, props, nesting, component lifecycles, and of course, how to write JSX…it's a lot. Even the most ardent React fans would likely concede it's not the easiest thing for beginners to pick up quickly. (Anyone who says otherwise has probably forgotten what it was like to be a beginner.)

If you can relate, I have good news:

<CalloutPlusQuote>

There's no comparable tool as difficult to learn as React is. But once you know one framework, you have a huge head start on all the others.

</CalloutPlusQuote>

I compare this to learning your _second_ musical instrument (not just to tie this back to music again). The _first_ time you learn to play, you're learning _everything about music_, on top of learning your specific instrument, and how to get it to make the sounds you want. But when you learn your _second_ instrument, you get to skip so much. All the concepts are familiar. You understand music. All you need to do is transfer your existing knowledge and muscle memory into a slightly different shape.

Frontend is similar: every frontend framework has components; they're all compatible with TypeScript; they all have the concept of props, children, and reactive state. These are things we've generally agreed we like and are good. They just have different takes on implementation.

And speaking of which: while React undoubtedly helped to proliferate these ideas, it would be silly to consider React the ideal implementation of them.

Great things are created through iteration, and for the most part, other choices in the front-end space that came later have the distinct advantage of iterating on top of the core ideas of React.

This means React is a bit like a git branch that's fallen well behind `main`. You might not realize it, if React is the star your galaxy orbits around, but…well, frontend has moved on. The ecosystem has taken those ideas and run with them to make things that are even better.

We have no shortage of more performant, less complex, less difficult-to-learn options available to us now. And if you know React already, none of them will be very hard to learn as well.

## You don't need to micro-manage rendering anymore

I have a confession to make: I'm still not exactly sure what the difference between `useMemo` and `useCallback` is—or when you should and shouldn't use them—even though I _literally read multiple articles on that exact topic earlier today_. (No joke.)

I have a second confession: it's still not intuitive to me what should and shouldn't go into the `useEffect` dependency array, or why. I feel like every time I write a `useEffect` call, I spend like 15 minutes refactoring my code to be in a shape the linter likes, even when _I'm 99% certain it's actually fine_ and it's not going to suck my app into an infinite abyss.

I'm betting if you use React, you can probably relate to those confessions. And maybe you've even just accepted that confusion and ambiguity as normal. But if so, you should know:

We haven't had to do this kind of rendering cycle micromanagement in other frameworks for _years_.

These days, frameworks are smart enough to handle this kind of thing without you needing to hold their hand and explain what they should do in almost every circumstance.

They know that they don't need to waste precious resources re-rendering when there's no real need. They're intelligent enough to only update values, and not constantly reevaluate things that don't need evaluation.

…Most of the time, anyway. They're not perfect. But they _are_ much better than React at knowing what to do, and doing it in a performant way by default. (Even Preact, if you're using Signals.)

You _might_ need to optimize some things in other frameworks, too. But by the time you do, you're well past the point where you would've needed to in React.

## React hooks are actually kind of outdated

Hooks are the newest evolution of React, replacing class components.

Credit where it's due: hooks _were_ a massive shift in the frontend space. They revolutionized how we composed logic and state in our applications. Hooks are undeniably great, and pretty much every framework has coalesced around a hooks-like model for managing state.

But React hooks aren't new anymore. (In fact, they're almost exactly the same age as my kid, and he's starting pre-k in the fall.)

Hooks are no longer a competitive advantage, or even a notable feature; they're the baseline. They're just the way we do things.

<CalloutPlusQuote>

Every other framework not only has its own implementation of hooks, but notably: every one of them is faster, smarter, easier to write, or a combination of all three.

</CalloutPlusQuote>

Preact's Signals warrant mention here; so do Svelte's dead-simple stores. Even Vue 3's composition API, which is pretty directly inspired by hooks, has some key advantages over the React implementation.

Hooks are an excellent pattern, and React deserves credit for popularizing them. But pretty much every other framework does them better and/or with fewer rules around them.

## Nobody else is afraid of their framework's version of `useEffect`

When you want a component to just do something when it enters the DOM—and/or when you want it to recalculate something dynamically, based on some other data or variable(s)—just about every other framework has a better way than `useEffect`.

I don't think I need to harp too much on this here, because even within React communities, `useEffect` is considered notoriously hazardous, and often even avoided altogether. But trust me: no other non-React-based frontend framework has people so afraid to use such a normal, useful feature, and nowhere else are there such obtuse rules around it.

### Other options besides React

For the sake of thoroughness, I should name the "other options" I've been going on about.

- **[Vue](https://vuejs.org) is possibly the closest option to React, and likely has the next-biggest ecosystem. It's significantly more performant than React, however, and a bit more UI-focused**. Vue uses a templating language closer to default HTML than to JSX, which makes it much easier to write conditionals and loops in template files. It has a similar new-ish hooks concept, and a similar meta-framework in [Nuxt](https://nuxtjs.org). It's also a bit more batteries-included, coming with things like scoped CSS handling and easy transitions/animations out of the box.
- **[Svelte](https://svelte.dev/) is comparable to Vue in terms of performance and power, but arguably even more elegantly minimalist**. (It's also been my personal favorite for the last few years now.) Svelte hews as closely to the web platform as possible, so even though it's incredibly powerful, it's also very easy to learn. Svelte includes transitions, easings, (scoped) CSS handling and more niceties, but it uses a compiler to help ship the smallest bundles possible, with a delightfully dead-simple syntax. Its own meta-framework, [SvelteKit](https://kit.svelte.dev/), is highly versatile and powerful, and hit version 1.0 at the end of 2022.
- **[Astro](https://astro.build/) is a next-gen, highly performant static site generator that does much more than static**. Astro is one of the newest options on this list, but it's already at a very stable 1.0 release and has garnered widespread praise and adoption. Built mainly to be a new generation of SSG (hey, React fans: it supports JSX and MDX), Astro now also features dynamic, server-side capabilities as well. I'd definitely recommend it over, say, Gatsby, or for content-heavy sites.
- **[Solid](https://www.solidjs.com/) is a maximally performant view library with an absolute minimal footprint**. If what you're looking for is minimal like React core, but blazingly fast, you would do well to check out Solid. (Solid also offers its own meta-framework in [SolidStart](https://start.solidjs.com/getting-started/what-is-solidstart), though that is currently in beta. Solid itself is plenty mature enough to use, though.)
- **[Qwik] server-renders React-like code (JSX) with a new approach to hydration and performance**. It takes a new approach to
- Deno / Fresh
- Angular and Ember
- Stencil and Lit
- Alpine and Petite Vue

## All frameworks scale now

It's worth remembering the world that gave us React had a different set of problems.

In that world, most frontend UIs were built either with vanilla JavaScript, or with jQuery (or similar alternatives). And that method of building apps didn't scale well.

That's because you had to write your own selectors, and you had to come up with your own manual way of tracking and syncing state. That usually involved writing to and retrieving from the DOM, which was messy, error-prone, and not especially great for performance. Writing modular code was difficult; JS files often ballooned to hundreds of lines or more. And the bigger or more complex your app, the worse the problem was.

React solved many of these problems, yes, but it didn't do so by being a marvel of modern engineering, as much as simply coming up with a good way to manage and share state, and to make data reactive. React isn't so much the best way to solve scalability, as it is one of many possible versions of the same paradigm.

<CalloutPlusQuote>

The worry that a frontend framework might not scale is as old as jQuery, and should be considered just as antiquated in relation to modern web development.

</CalloutPlusQuote>

How do I know this? Because a plethora of studies and experiments have been done comparing the performance of React to the performance of every other frontend framework at scale. And pretty much every one of them does as well or better. Many of them do _much_ better.

<SideNote>

Here I'm referring to scaling in the general sense; making sure complexity stays minimal, and doesn't grow linearly as the app increases in size. Certainly, some frameworks will scale much better or worse than others in terms of, say, building static HTML from Markdown files, or other more specialized tasks.

</SideNote>

Being newer is sometimes considered a disadvantage by conservative-minded developers who are wary to test the waters with something that hasn't been thoroughly tested every which way possible. But it's important to remember that being new is _also_ an advantage, because there's less tech debt and old browser support to worry about.

## You don't need to wait for somebody else to build it first anymore

## Server-rendering isn't special anymore

Several years ago, when React introduced the concept of server components, they were a vision of the future. They weren't actually released yet (and weren't even close, it turned out), but people were still rightly excited for the idea that React could be rendered on a server as HTML, instead of on the client as a Single-Page App. The speed and SEO gains were impossible to ignore.

Server Components finally shipped in React 18, only a few months ago as of this writing(!). But while we were waiting, pretty much every other framework got server rendering figured out.

Remix can do server rendering, and so can Next and Gatsby, of course—and those are all still React under the hood. But so can SvelteKit (it's server-rendered by default, in fact).

Astro, and Fresh (Deno's frontend framework) both have server-side rendering, and they both use Preact, which is even faster than React, and which has [Signals](https://preactjs.com/guide/v10/signals/), a much more ergonomic version of `useState`.

Solid Start has server rendering. Even some older frameworks like Ember and Angular have a story here; I'm sure I'm leaving out others, too.

Point is: way back when React introduced the concept of Server Components, they were special, and React was the only framework that had them. Now, server rendering is table stakes. A lot of newer frameworks don't just have the _option_ to render on the server; they do it _by default_.

PHP is back, baby.

## Two-way data binding isn't hard and it isn't a bad idea

I think it's important to remember that React was created by Facebook, in order to solve Facebook's unique set of problems.

The strong opinion on one-way data flow is a good example of how the engineering challenges of Facebook in the early 2010s shaped React's architecture.

For some time, it seemed like one-way data flow was considered a best practice. These days, though, we've mostly figured out solutions to the problems of two-way data binding, and found that in many cases, it's actually much more convenient.

Working with forms in React is notoriously cumbersome because every user keystroke is a two-step process: get the value from the input; then set the state to match it.

Svelte, Vue, and many others don't have this issue. You can just bind state in such a way that it updates automatically. If the state changes, the DOM updates; if the DOM changes, the state updates.
