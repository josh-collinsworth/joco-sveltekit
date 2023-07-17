---
title: Things you forgot or never knew because of React
date: 2023-06-06
updated: 2023-06-06
categories:
  - advice
coverImage: great-transitions.png
coverWidth: 320
coverHeight: 180
excerpt: "TODO: fill this out"
draft: true
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

<Note>

I like to open posts with long, rambling anecdotes sometimes. This is one of those times. Skip down to the part about React if you don't care.

</Note>

I remember the first time I heard a song that deeply resonated with me, and perfectly encapsulated my feelings. I was barely 22 (_it may help to keep in mind that my brain was not yet fully formed_). It was Christmas, and my life had completely fallen apart by that December.

Earlier that year, I'd moved into my first apartment, gotten a fresh new job with a major tech company, and dove head-first into a new relationship. Both the job and the relationship were the best I'd ever had, and I spent much of that year convinced both represented my future. I genuinely thought I was with the person I was going to marry, head-over-heels in love, and already starting my long-term career with a well-known company. My life was decided; now all I had to do was sit back and enjoy it.

Long story short: both the job and the relationship quickly imploded. (_The company was toxic, and arguably, so was I at the time. At the very least, I was wildly immature and fully unprepared for anything resembling a stable long-term relationship_.)

I'd gone from having a tech career and being madly in love, to being single, unemployed, adrift, and basically homeless. (I didn't realize it then, but there was a healthy dose of depression in the mix, too.) I would crash on some friends' couches in a new city in another state for the next two months before saving up enough tip money from a new restaurant job to rent my own room again.

I felt pretty alone back then, not really understanding how my life had fallen apart so easily, what it meant, or what was next.

Most of the music in my life up to that point was pretty generic; just whatever pop/rock was on the radio. Pretty much every song stuck firmly to one of the following topics:

1. _I want to be with you_
2. _I'm glad I'm with you_
3. _I'm not with you anymore but I wish I was_
4. _I'm not with you anymore and I'm glad I'm not_
5. _You suck_

So in the middle of all that, hearing somebody who _wasn't_ writing and singing entirely about those things, and who instead, went through something of a similar experience and put words to that, in a way I'd been struggling to…

It might not make sense to you. Maybe it can't. It's probably super cringe. But being 22, having just unwrapped John Mayer's [_Room for Squares_](https://en.wikipedia.org/wiki/Room_for_Squares), and hearing somebody else earnestly wondering about their own "still verdict-less" life, asking how and why they ended up where they were and whether they were making the right decisions at all…it _clicked_ with me. It was _meaningful_.

Again, I don't think I can explain this in a way that makes sense (_though it may help to remember there was a time when John Mayer was a genuinely talented songwriter and new artist, and not a face from gossip mags. Also, again: I was 22, your honor_). 

<CalloutPlusQuote>

Art affects us in unexpected ways. Hearing that song, somehow, I just felt like my experience was valid, and maybe it was all going to be ok.

</CalloutPlusQuote>

Like all the things I'd been experiencing weren't just mine to bear alone, but something that somebody else had been through and come out the other side of all right after all; like maybe other people were asking the same questions I was.

I _also_ felt like maybe I'd been missing something in my music all this time.

Cheesy though it may sound, that was when my music tastes significantly changed for the better. I widened my scope beyond hit radio, and searched out music with authenticity; songs with lyrics that weren't just about (not) wanting to be with somebody—or at least, that explored those topics in deeper, more complex, interesting ways. ("Artistically," I think is the word I'm looking for.)

The bands with the loud guitars were replaced by indie bands, singer/songwriters, and lyricists with something _real_ to say. I stopped caring whether the crunchy overdrive hit me in the face, and started caring whether the _story_ did.

In the process, I found out there was an ocean of depth beyond the music and artists I could count on being played on every radio station and present on every juke box.

<CalloutPlusQuote>

I discovered there was a whole better, deeper, more interesting world beyond the popular defaults I'd been content to live with up to that point.

</CalloutPlusQuote>

---

I've written before about how [React](https://reactjs.org) is [the new default](/blog/self-fulfilling-prophecy-of-react) frontend framework. So, naturally, I felt very much the same way—seen, validated, not alone in my questioning—reading this anecdote from [Alex Russell, via Mastodon](https://toot.cafe/@slightlyoff):

> Someone asked me today if there was a case for using React in a new app that doesn't need to support IE.
>
> I could not come up with a single reason to prefer it over Preact or (better yet) any of the modern reactive Web Components systems (FAST, Lit, Stencil, etc.).
>
> One of the constraints is that the team wanted to use an existing library of Web Components, but React made it hard. …
>
> It's astonishing how antiquated React is.

That whole post hits hard, but it's that last line that really punches it home for me. That's the chorus. A single sentence, perfectly encapsulating years of thoughts and feelings I'd been struggling with mostly on my own.

_It's astonishing how antiquated React is._

Alex [goes on to say](https://toot.cafe/@slightlyoff/110512849934452558):

> React is '13 tech designed to '08 constraints. Nothing about it is innovative in 2023; in fact, it's the slowest way to get functional-reactive frontend programming in the modern era, and I'm agog that the folks pitching it as "the future" seem to have no shame.

If those were song lyrics, I'd be buying concert tickets.

I've written before on how [React has aged, and how I don’t think most people realize how much or how poorly](/blog/self-fulfilling-prophecy-of-react). So to put the quote above another way:

<CalloutPlusQuote>

React came out seven Taylor Swift albums ago, and was designed for a world where John Mayer and Jennifer Aniston were still dating.

</CalloutPlusQuote>

I don't say any of this just to dunk on React, though. I get that I'm yucking some peoples' yum by doing that. There are folks who genuinely _like_ React, and that's perfectly fine.

What I'm very much here to communicate, however is: like me, you've been sticking to the radio hits. You've been going with the popular defaults, and there's a whole world beyond what you've known in that insular world.

<CalloutPlusQuote>

There might be things you've forgotten—or never knew at all—because you've been using React for so&nbsp;long.

</CalloutPlusQuote>

As fast as modern front-end seems to move, we appear to be very slow in realizing the world which crowned React king of modern frontend no longer exists. Browsers are different, projects are different, backends are often different, user expectations are different, and the existing ecosystem of tools is _extremely_ different.

So I'd like to take the opportunity to share my thoughts on that topic, in the hopes of introducing you to some tunes you might be surprised to discover you actually enjoy more than what's on your current playlist.


## Your frontend framework doesn't need a big ecosystem anymore

I've touched on this in other posts, but any time any framework's name comes up as a potential tool for a dev project, the first question anybody seems to care about is: how big is the ecosystem?

That's because React trained us that things needed to be built _specifically for our framework_. Any time we needed a module or a widget or a library that could handle _x_, it _had_ to be a React thing; a plain web thing or a vanilla JavaScript thing just wouldn't do. All of React's rules and handling of state and quirks of component lifecycles meant that any available package or library that _wasn't_ explicitly written for React probably wasn't going to work.

React proponents would likely be quick to play the "it's just JavaScript" card here, but I feel that's a bit disingenuous. The truth is, for as much as React gets the reputation for being "unopinionated," it actually has _extremely_ strong opinions about what code is allowed to go where, how state is tracked, what happens when, what will cause a re-render, and so on. (This is to say nothing of React's lacking interoperability with [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), which is still a work in progress, at best.)

The truth is: you often cannot simply import existing code into a React application and expect it to work--and that's made us forget that not all frameworks behave this way.

Sure, other front-end frameworks have their own rules and conventions about state and architecture. But crucially--and I want to emphasize this as strongly as possible:

<CalloutPlusQuote>

No other modern frontend framework is as stubbornly incompatible with the platform as React is.

</CalloutPlusQuote>

We've forgotten that the reason we needed strong framework ecosystems in the first place is because React is, frankly, obtuse. It makes you play by a rigid set of rules.

If you're building using other modern tools and frameworks, it's _far_ more likely that the vanilla JavaScript packages available will work just fine for you. Web components, too. You often don't _need_ a specialized package or library tailor-build for your thing because your thing probably already works with the platform, and therefore, everything else that's already out there.


## Frameworks aren't hard to learn anymore

I think there's a psychological fallacy that occurs when developers mainly trained on React think back to how difficult React was to learn. All the ins and outs of state management, props, nesting, lifecycle, and of course, how to write JSX…it's a lot. Even the most ardent React fans would likely concede it's not the easiest thing to pick up quickly.

That's not necessarily a bad thing per se. But it _is_ worth calling this out:

<CalloutPlusQuote>

There's no comparable tool as difficult to learn as React is (and many of React's core concepts are shared between frameworks anyway).

</CalloutPlusQuote>

Every front-end framework has components. They're all compatible with TypeScript. They all have the concept of props, and children, and reactive state. These are things we've generally agreed we like and are good. But while React undoubtedly helped to proliferate these ideas, React is _not_ the perfect, ideal implementation of them.

Great things are created through iteration, and for the most part, other choices in the front-end space are iterations on the core ideas of React.

This means React is a bit like a git branch that's far behind `main`. You might not realize it, if React the star your galaxy orbits around, but we've moved on. We've taken those ideas and ran with them to make things that are even better.

We have no shortage of more performant, less complex, less difficult-to-learn options available to us now. And if you know React already, none of them will be hard to learn as well.


## You don't need to micro-manage re-renders anymore


## Nobody else is afraid of their framework's version of useEffect


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

jQuery didn't scale. Vanilla JavaScript didn't scale. They didn't scale because you had to write selectors, and you had to come up with your own way of tracking state, and that usually involved the DOM, which was messy and error-prone and of linear complexity.

<CalloutPlusQuote>

The argument that a frontend framework might not scale is as old as jQuery, and should be considered just as antiquated in relation to modern web development.

</CalloutPlusQuote>

How do I know this? Because a plethora of studies and experiments have been done comparing the performance of React to the performance of every other frontend framework at scale.

## You don't need to wait for somebody else to build it first anymore

## Server-rendering isn't special anymore