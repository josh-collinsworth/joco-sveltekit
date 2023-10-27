---
title: Things you forgot (or never knew) because of React
date: 2023-08-04
updated: 2023-10-27
categories:
  - opinion
  - web
  - react
  - popular
coverImage: because-of-react.png
coverWidth: 320
coverHeight: 180
excerpt: If you don't often look beyond established comfortable defaults, you might be surprised to learn just how far the world of frontend has moved away from React, and how big that gap continues to grow.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

<style lang="scss">
h4 {
	margin-top: var(--dottedQuarterNote);
	margin-bottom: var(--eighthNote);
}

.toc-wrap {
	background: linear-gradient(to bottom right, var(--lightGray), var(--yellow));
	background: linear-gradient(to bottom right, #a7a8aa, #92abb2, #5eca78, #b6ec1f, #ffd100);
	padding: 2px;
	margin: 3rem 0;
}

.toc {
	background: var(--paper);
	padding: 1rem 1.5rem 1.5rem;
	line-height: 1.6;
	width: 100%;
	position: relative;
	z-index: 2;
	font-family: var(--headingFont);

	h2 {
		font-weight: bold;
		font-family: var(--headingFont);
		font-size: 0.8rem;
		margin: 0;
		background: var(--paper);
		position: relative;
		padding: 0;
		top: calc(-1rem - 0.6em);
		left: 0;
		text-transform: uppercase;
		color: var(--lightGray);
		display: flex;
		width: 14em;
		justify-content: space-between;
		align-items: center;
		line-height: 1;

		.opening-bracket,
		.closing-bracket {
			display: block;
			position: relative;
			z-index: 2;
			left: -1px;
			bottom: 0.05em;
		}

		.closing-bracket {
			left: unset;
			right: -1px;
		}

		&::before {
			display: none;
		}
	}

	.toc-list {
		list-style-type: decimal;
		font-size: 0.85rem;
		margin: 0;

		li::marker {
			color: var(--ink);
			content: unset;
			font-weight: normal;
		}

		> li {
			font-weight: bold;

			&::marker {
				font-weight: bold;
			}

			ul {
				font-weight: normal;
			}
		}

		ul {
			list-style-type: lower-alpha;
			margin: 0.25em 0 0;

			ul {
				list-style-type: decimal;
			}
		}

		li {
			list-style-type: inherit;
			margin: 0 0 0.25em;

			::marker {
				content: '- ';
			}

			a {
				text-decoration: none;
			}
		}
	}
}
</style>

<!-- This markup was generated using the deprecated TableOfContents component. -->
<div class="toc-wrap s-QxGJVNas-JkL"><aside class="toc s-QxGJVNas-JkL"><h2 class="s-QxGJVNas-JkL"><span class="opening-bracket s-QxGJVNas-JkL" aria-hidden="true">[</span>Table of contents<span class="closing-bracket s-QxGJVNas-JkL" aria-hidden="true">]</span></h2> <ul class="toc-list s-QxGJVNas-JkL"><li><a href="#part-1-an-intro-about-music-defaults-and-bubbles">Part 1: an intro about music, defaults, and bubbles</a><ul><li><a href="#finding-richness-beyond-the-defaults">Finding richness beyond the defaults</a></li><li><a href="#completing-the-analogy-and-acknowledging-its-shortcomings">Completing the analogy, and acknowledging its shortcomings</a></li><li><a href="#the-react-bubble">The React bubble</a></li></ul></li><li><a href="#part-2-things-you-forgot-or-never-knew-because-of-react">Part 2: Things you forgot (or never knew) because of React</a><ul><li><a href="#your-ecosystem-doesnt-need-to-be-massive-anymore-because-it-can-share-now">Your ecosystem doesn’t need to be massive anymore (because it can share now)</a></li><li><a href="#react-hooks-are-actually-kind-of-outdated">React hooks are actually kind of outdated</a></li><li><a href="#you-dont-need-to-micro-manage-rendering-anymore">You don’t need to micro-manage rendering anymore</a></li><li><a href="#nobody-else-is-afraid-of-their-frameworks-version-of-useeffect">Nobody else is afraid of their framework’s version of useEffect</a></li><li><a href="#scaling-isnt-really-a-frontend-concern-anymore">Scaling isn’t really a frontend concern anymore</a></li><li><a href="#server-side-rendering-isnt-special-anymore">Server-side rendering isn’t special anymore</a></li><li><a href="#two-way-data-binding-isnt-hard-and-it-isnt-a-bad-idea">Two-way data binding isn’t hard and it isn’t a bad idea</a></li><li><a href="#styling-is-easy-actually">Styling is easy, actually</a></li><li><a href="#frameworks-arent-as-hard-to-learn-anymore">Frameworks aren’t as hard to learn anymore</a></li><li><a href="#other-options-arent-just-new-and-shiny-and-nobody-cares-about-that-anyway">Other options aren't just "new and shiny" (and nobody cares about that anyway)</a></li><li><a href="#react-is-way-behind-in-performance">React is WAY behind in performance</a></li></ul></li><li><a href="#part-3-the-other-stuff-you-should-try">Part 3: the other stuff you should try</a><ul><li><a href="#svelte-my-personal-pick">Svelte (my personal pick)</a></li><li><a href="#vue">Vue</a></li><li><a href="#solid">Solid</a></li><li><a href="#fresh">Fresh</a></li><li><a href="#astro">Astro</a></li><li><a href="#preact">Preact</a></li><li><a href="#qwik">Qwik</a></li><li><a href="#web-component-libraries">Web component libraries</a></li></ul></li><li><a href="#epilogue">Epilogue</a></li></ul></aside></div>

## Part 1: an intro about music, defaults, and bubbles

Like a lot of people, there was a time when the only music I listened to was whatever was played on my local radio station. (_A lot of people over 30 or so, anyway. If this doesn't sound familiar to you yet, just stick with me for a minute here_.) At the time, I was happy with that. It seemed like all I needed.

<CalloutPlusQuote>

Looking back, I realize: I naively trusted that anything good inevitably became popular—and therefore, anything worth knowing would eventually come my way on its own.

</CalloutPlusQuote>

Eventually, though, _other_ music began to take root in my life. Through new friends and the internet, I became acquainted with new artists, further and further from the things I liked before—or, at least, _thought_ I liked.

_This_ music was different. I wasn't in love with it one week and sick of it the next. Listening to it wasn't part of an endless cycle.

If anything, it was the _opposite_; it was music I actually liked and appreciated _more_ the more I listened to it. There was depth to it. Sure, it didn't have the loud distorted guitars, punch-line lyrics, or sugar-coated melodies I'd enjoyed up until that point. But to my surprise, that actually somehow made it _better_, not worse.

That's when I began to realize: maybe I was never really as satisfied as I thought I was.

Maybe my bliss was, in fact, predicated on ignorance.

### Finding richness beyond the defaults

I suspect you can probably relate to that story, even if it's not with music specifically.

Most likely, you now count a food or drink you didn't once like among your favorites. Or, maybe you were surprised to find a movie, book, game, podcast, influencer, or hobby you didn't expect to like resonated with you.

The details aren't important; all I'm getting at is:

<CalloutPlusQuote>

You've probably experienced finding something great beyond the periphery of popular defaults.

</CalloutPlusQuote>

Not to sound like a frontend version of a snobby hipster. That's not my intention. If your idea of a good time is Bud Lites at Olive Garden: cool, pass the breadsticks.

But what I _am_ trying to do is: gently share the idea that _maybe_ you're shutting yourself off to something great, without even realizing it.

Maybe this whole concept--finding better things beyond familiar boundaries--applies to our tools and workflows just as much as it does any other area of life.

And maybe—just _maybe_— your current satisfaction comes, at least a little bit, from simply _not knowing what you're missing_.

### Completing the analogy, and acknowledging its shortcomings

I've written before about how [React](https://reactjs.org) is [the new default](/blog/self-fulfilling-prophecy-of-react) frontend framework, and how I don't think most people using React on a regular basis realize quite how much it's fallen behind.

And on that note, this is where our analogy begins to fall short.

Assuming we were only talking about personal preferences, I'd never write a blog post arguing about what you like, or trying to change your mind. (Not at this age, anyway.) Who cares? If you enjoy it, have fun.

<CalloutPlusQuote>

But unlike music or other subjective things meant for our own enjoyment, our choice of frontend tools has empirical, measurable effects on others.

</CalloutPlusQuote>

That decision carries a real responsibility. It's not just about what we like. When it comes to development—unless we're building things purely for ourselves, anyway—our enjoyment is secondary; the user's experience is what matters most.

If you love your tools, that's wonderful. I hope you do. But that's a side quest at best, and a potentially harmful distraction at worst. Developer experience (DX) shouldn't ever supersede user experience (UX).

So forgive me for choosing a flimsy metaphor. You can keep listening to the same music for the rest of your life, if you want to. I support that. But we have very valid and important reasons to push beyond the comfort of our existing preferences when it comes to the tools we use.

### The React bubble

The idea that React lags behind its peers might be new to you. Like many, you might still consider React the modern standard in frontend. So let's quickly poke at that bubble, in this one last section before we get into the titular list.

This, from [Alex Russell, via Mastodon](https://toot.cafe/@slightlyoff), is what started me writing this post:

> Someone asked me today if there was a case for using React in a new app that doesn't need to support IE.
>
> I could not come up with a single reason…
>
> It's astonishing how antiquated React is.

Alex mentions React's lack of support for web components in that thread. That feature has been glaringly missing from React for years. And yes, it's "on the roadmap." As of this writing, though, there's no firm commitment to either an implementation or an expected ship date.

<CalloutPlusQuote>

Meanwhile, pretty much all of React's contemporaries—any framework or technology you might choose instead of React—already have that story shipped and in production.

</CalloutPlusQuote>

Web components are one thing. But they're far from the only item on the list of "stuff everything else does already and/or better." (We'll cover several others below.)

React benefitted mightily from being early to the framework game; it set the standard. But that's come with severe drawbacks in agility and adaptability. Every decision React's made since its inception circa 2013 is another layer of tech debt—one that its newer contemporaries aren't constrained by.

To [quote Alex once more](https://toot.cafe/@slightlyoff/110512849934452558):

> React is '13 tech designed to '08 constraints. Nothing about it is innovative in 2023; in fact, it's the slowest way to get functional-reactive frontend programming in the modern era…

[React has aged, and how I don’t think most people realize how much or how poorly](/blog/self-fulfilling-prophecy-of-react). So to put the quote above another way (and tie it back to our intro about music):

<CalloutPlusQuote>

React was designed seven Taylor Swift albums ago, for a world where John Mayer and Jennifer Aniston were still dating.

</CalloutPlusQuote>

(_Seven_ new _Taylor Swift albums ago, that is. That doesn't even count the_ Taylor's Version _releases_.)

So if you're one of the many developers whose whole world has been React for the past few years, there might be things you've forgotten—or never knew at all—because you've been using React for so long.

As fast as modern frontend moves, we seem to be very slow in realizing the world which crowned React king, in many ways, no longer exists. (_If it ever did; not many organizations had anything resembling Facebook's specific set of problems to begin with_.)

Browsers have seen _wild_ growth in new feature adoption in the last ten years, in both JavaScript and CSS. Technology and user expectations have evolved, and the current ecosystem of tools has done a _lot_ more than you might think to iterate and adapt past React, in ways such legacy software can't.

<SideNote>

I realize calling React "legacy software" is controversial, but I think it's fair; it's comparatively complicated, relatively old, contains a lot of rules and gotchas, beginners are often afraid of it, and the architectural decisions it's built on top of have long since become an impediment to its ability to iterate.

</SideNote>

---

If I haven't completely alienated you yet by this point (_with some combination of quasi-elitism, rambling preamble, and overuse of parenthetical interjections_), I'd like to share some things you might have missed if your head's been entirely in the React world for a while, in the hopes of introducing you to some tunes you might be surprised to find are better than what's on your current playlist.

## Part 2: things you forgot (or never knew) because of React

### Your ecosystem doesn't need to be massive anymore (because it can share now)

I've touched on this in [other posts](/blog/self-fulfilling-prophecy-of-react#community-and-support), but any time an "unproven" framework's name comes up as a potential tool for a dev project, the first question anybody seems to care about is: _how big is the ecosystem_?

You might have even had that thought as soon as you read the premise of this post. _Move from React to another framework? Are any of them big enough yet?_

Why do we have this obsession with ecosystem size?

Sure, we want to be certain this framework won't just vanish on us, or stop being maintained in a few years. That's perfectly valid. And yes, we wouldn't bet the farm on something _too_ new or unproven. But [Vue](https://vuejs.org), [Svelte](https://svelte.dev), [Preact](https://preactjs.com), [Solid](https://www.solidjs.com/), [Astro](https://astro.build/), and others are all _far_ past that point, well-supported and well-maintained. So it clearly isn't just that.

So what _is_ the sticking point? I have a theory:

We've been trained that packages need to be built _specifically for our framework_.

You could reasonably argue that mindset started with jQuery, but I think React accelerated it.

With React, any time we needed a module or a widget or a library to do something specific (a carousel, a map, an accordion, or whatever else), _it had to be a React thing_; a plain web thing or a vanilla JavaScript thing just wouldn't do. All of React's rules and handling of state and quirks of component lifecycles meant that any available package or library which _wasn't_ explicitly written for React probably wasn't going to work.

<CalloutPlusQuote>

React trained us that things need to be built _specifically for a certain framework_. But that's not very true anymore, and it arguably never should have been.

</CalloutPlusQuote>

We shouldn't _need_ to do that—especially for a framework that so often claims it's "just JavaScript." If it's _just JavaScript_, then it should _just work_ with anything that's _actually just JavaScript_.

Sure, other frontend frameworks have their own rules and conventions about state and architecture. You can step on figurative rakes in their yards, too. And yes, there will always be things that are, and need to be, built specifically to work with Svelte or Vue or whatever else.

But crucially--and I want to emphasize this as strongly as possible:

<CalloutPlusQuote>

No other modern frontend framework is as stubbornly incompatible with the platform as React is.

</CalloutPlusQuote>

If you're building using other modern tools and frameworks, it's _far_ more likely that the vanilla JavaScript packages available will work just fine for you—and there are _thousands_ of them. They're far less likely to cause issues with render cycles, or other framework-specific issues. Not to mention: they all have the option of using web components, too.

You often don't _need_ a specialized package or library tailor-built for your thing, because your thing probably already works with the platform, and therefore, everything else that's already out there.

[Preact Signals](https://preactjs.com/guide/v10/signals/) is a phenomenal example: although built for use with Preact, it can be imported and used in _any_ framework, or even in vanilla JavaScript. Web components, too, are compatible with just about any modern non-React framework.

Where the frameworks fall short, it's likely the platform already has the thing you need. (Form submission, for example; always a pain point in React, now made infinitely easier by two-way data binding and just using the conventions browsers give to us.)

And worst-case, it's probably a lot _easier_ to build whatever thing you need than it was in React. (It shouldn't take very much comparing of `useState` with other frameworks' versions to see that.)

Being newer is often considered a disadvantage by conservative-minded developers who are wary to test the waters with something that hasn't been thoroughly vetted in every which way possible. But it's important to remember that being new is _also_ an advantage, because there's less tech debt and old browser support to worry about—_and_ new things are free to iterate further on existing good ideas and more modern browser features.

### React hooks are actually kind of outdated

Hooks are the newest evolution of React, replacing class components.

Credit where it's due: hooks _were_ a massive shift in the frontend space. They revolutionized how we composed logic and state in our applications. Hooks are undeniably great, and pretty much every framework has coalesced around a hooks-like model for managing state.

But React hooks aren't new anymore. (In fact, stable React with hooks is almost exactly the same age as my kid, and he's starting pre-k in a couple of weeks.)

Hooks are no longer a competitive advantage, or even a notable feature; they're the baseline. They're just the way we do things.

<CalloutPlusQuote>

Every other framework not only has its own implementation of hooks, but notably: every one of them is faster, smarter, easier to write, or a combination of all three.

</CalloutPlusQuote>

Preact's Signals warrant mention here; so do Svelte's dead-simple stores. Solid, too, has Signals. Even Vue 3's composition API, which is pretty directly inspired by hooks, has some key advantages over the React implementation.

Hooks are an excellent pattern, and React deserves credit for popularizing it. But pretty much every other framework does hooks better, with fewer rules, and with less boilerplate.

<SideNote>

If you're unfamiliar with the concept of Signals: it's a crude oversimplification, but you could think of them as the next, better evolution of reactive state; an update to hooks, with better defaults around what causes re-renders, to only re-render the nodes that need to be re-rendered, instead of entire components.

</SideNote>

### You don't need to micro-manage rendering anymore

I have a confession to make: I'm still not exactly sure what the difference between `useMemo` and `useCallback` is—or when you should and shouldn't use them—even though I _literally read multiple articles on that exact topic earlier today_. (No joke.)

I have a second confession: it's still not intuitive to me what should and shouldn't go into the `useEffect` dependency array, or why. I feel like every time I write a `useEffect` call, I spend like 15 minutes refactoring my code to be in a shape the linter likes, even when _I'm 99% certain it's actually fine_ and it's not going to suck my app into an infinite abyss.

I'm betting if you use React, you can probably relate to those confessions. And maybe you've even just accepted that confusion and ambiguity as normal. But if so, you should know:

We haven't had to do this kind of rendering cycle micromanagement in other frameworks for _years_.

<CalloutPlusQuote>

These days, frameworks are smart enough to handle this kind of thing without you needing to hold their hand and explain what they should do.

</CalloutPlusQuote>

They already know not to waste precious resources re-rendering when there's no real need. They're intelligent enough to only update values, and not constantly reevaluate things that don't need it.

…Most of the time, anyway. They're not perfect. But they _are_ much better than React at knowing what to do, and doing it in a performant way by default.

You _might_ need to optimize some things in other frameworks, too. They're not perfect. But by the time you do, you're way, _way_ past the point where you would've needed to in React.

### Nobody else is afraid of their framework's version of `useEffect`

When you want a component to just do something when it enters the DOM—and/or when you want it to recalculate something dynamically, based on some other data or variable(s)—just about every other framework has a better way than `useEffect`.

I don't think I need to harp too much on this here, because even within React communities, `useEffect` is considered notoriously hazardous, and often even avoided altogether. But trust me: no other non-React-based frontend framework has people so afraid to use such a normal, useful feature, and nowhere else are there such obtuse rules around it.

Nobody else is looking at third-party packages just to do something when a component is mounted without shooting themselves in the foot.

### Scaling isn't really a frontend concern anymore

This is the _other_ question people immediately ask when a new(er than React) framework comes up: _does it scale_? But I believe that question might be a bit outdated.

It's worth remembering: the world that gave us React had a different set of problems.

In that world, most frontend UIs were built either with vanilla JavaScript, or with jQuery (or similar alternatives). And that method of building apps, as we now know, didn't scale well beyond a certain limit.

That's because you had to write your own selectors for each and every element and DOM node you might want to interact with, and you had to come up with your own manual way of tracking and syncing state. That usually involved writing to and retrieving from the DOM, which was messy, error-prone, and most importantly, slow. (That's where the virtual DOM came in, but even _that_ has been [pretty thoroughly outdated for years](https://svelte.dev/blog/virtual-dom-is-pure-overhead).)

Writing modular code back then was difficult to impossible, and JS files often ballooned to hundreds of lines, if not thousands. If multiple authors were working on the same project, they'd often reinvent, repeat, or even override each other's code (partly because code often went into a shared global namespace, which made collisions even more likely). And the bigger or more complex your app (_Facebook_), the worse the problem was.

It's important to remember: that's our baseline for "does it scale?" as it relates to frontend. Does it stay reasonably maintainable even if my app grows exponentially?

<CalloutPlusQuote>

The worry that a frontend framework might not scale is as old as jQuery, and should be considered just as antiquated in relation to modern web development.

</CalloutPlusQuote>

React solved many of these problems, yes. But it didn't do so by being a marvel of modern engineering, so much as simply coming up with a good way to manage and share state, make data reactive, abstract complexity, and enable developers to share the same programming patterns without conflicts, namespace collisions, or overrides.

React wasn't the best, only, or even _first_ solution to frontend scalability; it's just one of many possible versions of the same paradigm.

(It also happens to be among the oldest.)

How do I know this? Because a plethora of benchmark tests have been run, with publicly available results, comparing the performance of React to every other frontend framework at scale. (I'm not linking to any here, because they're readily available online.) They all confirm that just about every other option in the frontend space does as well or better than React—and in many cases, _dramatically_ better.

<SideNote>

Here I'm referring to scaling in the general sense; making sure complexity stays minimal, and doesn't grow linearly as the app increases in size. Certainly, some frameworks will scale much better or worse than others in terms of, say, building static HTML from Markdown files, or other more specialized tasks.

</SideNote>

### Server-side rendering isn't special anymore

There was a time, several years ago, when React was pretty much the only game in town when it came to server-rendered content (mainly via Next JS). People were rightly excited for the idea that React could be rendered on a server as HTML, instead of on the client as a Single-Page App (SPA). The speed and SEO gains were impossible to ignore, and initially, it took other frameworks a bit to catch up.

However, as is a theme with these things in general, and with this post in particular: the first to iterate is rarely the best.

[SvelteKit](https://kit.svelte.dev/) is server-rendered by default, without you needing to do anything, and offers fine-grained control over its rendering patterns. [Nuxt](https://nuxt.com/), Vue's meta-framework, was earlier to the game (being obviously inspired by Next).

[Fresh](https://fresh.deno.dev/) (Deno's frontend framework) is entirely server-rendered, except for what you designate as an "island" (client-rendered); anything else just ships as static HTML. Fresh also uses Preact (which, again, is even faster than React, and which has [Signals](https://preactjs.com/guide/v10/signals/), a much more performant and ergonomic version of `useState` and the reactivity model).

Astro has server-rendering, and just lets you server-render whatever flavor of components you want. It can render other frameworks' components just fine, and has even been noted as a major performance upgrade from Next, in some cases.

[SolidStart](https://start.solidjs.com/getting-started/what-is-solidstart) (Solid's meta-framework) has server rendering. Qwik is entirely built around it. Even some older frameworks like [Ember](https://emberjs.com/) and [Angular](https://angularjs.org/) have a story here; I'm sure I'm leaving out others, too.

Point is: way back when, React was one of few frameworks that had the concept of rendering client view framework components on a server. But now, server rendering is table stakes. A lot of newer frameworks don't just have the _option_ to render on the server; they do it _by default_.

PHP is back, baby.

### Two-way data binding isn't hard and it isn't a bad idea

Or, a better title for this section might be: <strong>forms just aren't supposed to be that hard</strong>.

I think it's important to remember that React was created by Facebook, in order to solve Facebook's unique set of problems.

One of React's strongest opinions—that data should flow only one way (top down)—is a good example of how the engineering challenges of Facebook in the early 2010s indelibly shaped React's architecture.

For some time, it seemed like one-way data flow was considered a best practice. These days, though, we've mostly figured out solutions to the pitfalls of two-way data binding, and found that in many cases, it's actually much more convenient.

Working with forms in React is notoriously cumbersome because every user keystroke is a two-step process: get the value from the input; then set the state to match it (which in turn needlessly re-renders the input, to contain the exact value it already did, but synced up with React state). Sure, it's usually too fast to notice, but it's a lot of extra work.

This is why there's a proliferation of form libraries for React; making a form in React is notoriously one of the most difficult things to do with the framework. In fact, I can genuinely say I have no knowledge of any other tool that makes working with forms so infamously unwieldy.

<CalloutPlusQuote>

Forms are a standard web platform feature, and many frameworks that have come since have opted to trust and use the platform, rather than push so obstinately against it.

</CalloutPlusQuote>

Even if you forget about the server side of things, though, and deal with forms purely on the frontend: Svelte, Vue, and many others, don't have the same data binding and syncing issues. You can just bind state in such a way that it updates automatically from both ends. If the state changes, the DOM updates; if the DOM changes, the state updates.

This way, you don't have to do the multi-step dance. If you just want to capture, say, the value of a text box, you do two-way data binding. Then, when the user types into the field, the data updates automatically, and you can get it whenever the time is right with no further steps. If in the meantime you need to do something like set a value or clear the field, that's also a simple one-liner.

Two-way data binding lets you keep data and the DOM in sync without the need to constantly make sure one is keeping up with the other.

Could you get in trouble using these? For sure. But I find that dogmatic ideals of best practices get in the way as much or more than they help. One-way data flow is a prime example.

### Styling is easy, actually

If you work mostly in React, it's quite possible you've gone through two, three, or more iterations of handling styles in your frontend components.

You might have imported .css files straight into JSX components, or used CSS Modules, Styled Components, and/or Tailwind (probably with either the `classnames` or `tailwind-merge` packages—or maybe even both, plus some extra Tailwind add-ons). And those are just the most popular options.

Tailwind is its own rabbit hole (and its own frontend framework I'm not particularly a fan of; I consider it cutting against the grain of the platform in exchange for short-term gains that eventually compound into long-term losses). But in any case, these styling solutions exist and see significant adoption at least partly because React's had a vacuum in place of first-party styling options for as long as it's been around.

<CalloutPlusQuote>

You might not realize styling is a solved problem in several other frameworks.

</CalloutPlusQuote>

In particular, Vue and Svelte both have their own component styling story. They both have component-level scoping (Vue's is opt-in; Svelte's is opt-out). They both work wonderfully with vanilla CSS, if that's the way you want to go. But both of them—along with every other frontend framework—are still compatible with CSS modules, Tailwind, Sass, or whatever else you like to use.

But most importantly: all the supposed problems with CSS—whether you actually consider them problems or not—are fully addressed by the built-in style handling. You don't need a mess of packages and configs nearly as much anywhere else, because scoped CSS solves just about every issue you could possibly imagine.

Seriously; read through any list of reasons CSS is supposedly bad (it's not, but people who are bad at it like to say that). Just about any critique you could possibly have of CSS is solved by scoped styling, and multiple non-React frameworks just come with it already built in.

### Frameworks aren't as hard to learn anymore

I theorize developers mainly trained on React think back to how difficult it was to learn, and assess the learning curve of other frameworks similarly. And that's probably part of what keeps us from trying new things; it seems really hard, because it sure was the first time.

All the ins and outs of state management, props, nesting, component lifecycles, hooks, and of course, how to write JSX…it's a lot. Even the most ardent React fans would likely concede it's not the easiest thing for beginners to pick up quickly. (Anyone who says otherwise has probably forgotten what it was like to be a beginner.)

If you can relate, I have good news:

<CalloutPlusQuote>

There's no comparable tool as difficult to learn as React is. But once you know one framework, you have a huge head start on all the others.

</CalloutPlusQuote>

I compare this to learning your _second_ musical instrument (not just to tie this back to music again). The _first_ time you learn to play, you're learning _everything about music_, on top of learning your specific instrument, and how to get it to make the sounds you want. But when you learn your _second_ instrument, you get to skip so much. All the concepts are familiar. You understand music. All you need to do is transfer your existing knowledge and muscle memory into a slightly different shape.

Frontend is similar: every frontend framework has components; they're all compatible with TypeScript; they all have the concept of props, children, and reactive state. These are things we've generally agreed we like and are good. They just have different takes on implementation.

And speaking of which: while React undoubtedly helped to proliferate these ideas, it would be silly to consider React the ideal implementation of them.

Great things are created through iteration, and for the most part, other choices in the frontend space that came later have the distinct advantage of iterating on top of the core ideas of React.

This means React is a bit like a git branch that's fallen well behind `main`. You might not realize it, if React is the star your galaxy orbits around, but…well, frontend has moved on. The ecosystem has taken those ideas and run with them to make things that are even better.

We have no shortage of more performant, less complex, less difficult-to-learn options available to us now. And if you know React already, none of them will be very hard to learn as well.

<Note>

The following two sections were not included in the original draft of this post, and were added on August 15th, 2023, to address feedback from the original version.

</Note>

### Other options aren't just "new and shiny" (and nobody cares about that anyway)

A common refrain I hear when discussing pieces such as this one goes something like this:

_Those silly JavaScript developers, always chasing the shiny new thing! They don't care about maintaining their projects long-term. The hot new framework will be forgotten tomorrow and their code won't even run!_

There's an inkling of truth there. True, JavaScript developers (dare I say frontend developers in general) seem to be attracted to new things in a way that other programming specialists tend to be a bit more wary of.

…But how true is that, actually? Are we sure every JS dev in the world is rushing out to rewrite their entire tech stack the moment something new arrives? Or is that just what it _feels_ like, fed by an endless online hype cycle?

I think it seems a lot more true than it is in reality, because early adopters of any given technology tend to be the ones getting all the attention; they're the ones writing all the blog posts and making all the videos, which in turn get shared and talked about in a way that makes it _seem_ like there's a lot more of this kind of behavior going on than there actually is. (After all, if it was even _half_ true, React's market share would be a fraction of what it is currently.)

Most of the frontend devs I've met stick with what they know, just like any other kind of developer. I think it's just a little less costly for us to dabble in new things, and so we do.

That's all beside the point, though: this view underestimates the maturity of the other options available in the field.

Vue has been around as long as React, and its current version (v3) launched almost three years ago. The modern version of Svelte was launched only _two months_ after React hooks did (_did you think React hooks was new and shiny two months ago_?), and SvelteKit hit 1.0 almost a full year ago. Preact is on version 10. Solid's been 1.0+ for over two years. Astro hit 1.0 a year ago. Qwik and Fresh are the newest entries I'll mention here, but they're both at 1.0 as of earlier this year.

So if _some_ of those entries are still a little too new for you, that's fine. I get that. But reducing any consideration of React alternatives to a short attention span is a fallacious glossing-over of the maturity and depth available in the field.

### React is WAY behind in performance

I won't harp too much on this here, because much has already been written on the topic (some in [this other post](/blog/self-fulfilling-prophecy-of-react) I wrote, much in other places easily discoverable online). But suffice to say: where React is slower, it may _seem_ like it's by a negligible amount (especially if you're privileged enough to be using very new/premium hardware, on a very fast internet connection). But the difference is far from trivial.

React falls behind in terms of performance (and here I mean both bundle size and execution speed) by factors of 2 or more in many cases. (The bundle itself can be by 10x or more.) The latest run of the [JS web frameworks benchmark](https://github.com/krausest/js-framework-benchmark) places React's performance, on average, at almost 50% slower than Solid, 25% slower than Vue, 40% slower than Svelte, and 35% slower than Preact. (Other frameworks weren't available in this particular test.)

<SideNote>

That comparison was using _only_ React hooks; no `useTransition` hook, and no additional libraries like Redux.

</SideNote>

There are other studies, too. I'm sure the numbers are a bit different everywhere, and I'm sure there's always nuance to their findings. But:

<CalloutPlusQuote>

Pretty much no matter what results you consult, React will be larger and slower than just about anything that's come since.

</CalloutPlusQuote>

Anecdotally: I can _tell_, as a user, when the form I'm filling out on my Android uses React. There's a slowness to it, and its loop of updating the DOM to match the state to match the DOM, that I don't notice _unless_ it's React.

But forget anecdotes; we just saw data. And I know those numbers might not _sound_ big, and that performance is one of many considerations when choosing your tech stack. "It all depends."

But let's realize that a 25–50% improvement is _massive_ in terms of performance gains. Making the frontend load up to twice as fast for users is far, far beyond the boundaries of a marginal nice-to-have; we're talking numbers that add up to a _colossal_ difference at scale.

I'm sure I don't need to quote the myriad studies available to demonstrate how valuable every tenth of a second is, when loading a website or waiting for an operation to complete. I hope I _also_ don't need to tell you how important it is to consider users who might not have the bandwidth to download huge JavaScript bundles, and/or the computing power to wait up to two times longer for every change the framework might make on the page.

Any engineer who eliminates a chunk of loading or processing _that_ sizable has it in a prominent place on their résumé. It's a big deal.

The performance difference between React and the rest of the field isn't _minimal_; it's _minimized_.

## Part 3: the other stuff you should try

You probably started wondering a few dozen paragraphs ago: if React is so antiquated, what's the alternative?

I'm going to cover several here, and mention their use cases as well. One of the issues with React is that it's long tried to be everything for everyone, and useful though a React-shaped tool might be, I think maybe two or three different tools could be better than one Swiss army knife.

Two quick notes before we dive in, though:

1. I list several options here, for the sake of covering all the other modern frameworks I mentioned above. **I don't expect anyone to learn about—let alone _use_—all of them**. If you have to pick one, go with Svelte, or maybe Vue. But in any case, know that I'm only listing them all for the sake of thoroughness.

2. I didn't list _all_ the options here. There are others.

   I omitted Ember and Angular, for example, because they're both older than React, and don't generally tend to outperform React significantly, if at all, in benchmark tests (sorry, Mel).

   I also omitted the lightweight options like [Alpine](https://alpinejs.dev/) and [Petite Vue](https://github.com/vuejs/petite-vue), since those are more replacements for jQuery than React, and shine where you might not need something as heavy-handed as a framework.

   Finally, I also omitted exceptionally good tools in and around this category, like [Eleventy](https://www.11ty.dev/), since it's more of a pure static site generator than a framework. (Still worth a look if you're using Gatsby, however.)

All that said: here's your Discover Weekly.

### [Svelte](https://svelte.dev/) (my personal pick)

> _ Ladies and gentlemen of the class of 2023: use Svelte._
>
> _If I could offer you only one tip for the future, Svelte would be it._

Joking aside: if I were to pick one thing from this list to recommend over React, it would be [Svelte](https://svelte.dev). I've long maintained that "Svelte is React, but without the bullshit," as I originally quipped on Twitter back in 2019 (RIP), and if anything, that's only grown truer over time.

Svelte is delightfully simple to use, comparatively easy to learn (especially if you're coming from the React world already; even the syntax is often similar), much, much more performant in just about all cases, and capable of anything React is and more. This site, and all my own side projects these days, are written in [SvelteKit](https://kit.svelte.dev/).

Svelte is fast; it's comparable to the fastest options available. Its DX is phenomenal; it regularly appears at or near the top of most-loved frameworks in developer surveys.

Svelte hews as closely to the web platform as possible, so even though it's incredibly powerful, its concepts will be largely familiar. Svelte also includes transitions, easings, CSS handling, component-scoped styles, and more niceties out of the box.

That might make you wonder about framework size, but where Svelte differs is: instead of being a JavaScript runtime, it's a compiler. Anything you don't use is stripped away at build time, and your code is transpiled into tiny bits of vanilla JavaScript. That means Svelte's bundles are generally a fraction the size of React's.

<CalloutPlusQuote>

Although it feels and works like a framework, Svelte is, essentially, a small, elegant superset of HTML, with a delightfully simple syntax, which compiles to fast, minimal bundles.

</CalloutPlusQuote>

Svelte's own meta-framework, [SvelteKit](https://kit.svelte.dev/), is highly versatile and powerful, capable of static, server-rendered, deployment to the edge, and even mixing per-route. It hit version 1.0 at the end of 2022 and is very ready for production. (It's also supported by Vercel, who make Next.js as well.)

#### Svelte is recommended if:

You want to rediscover the joy of frontend with (what I consider to be) the best all-around option, for the reasons above.

#### Svelte replaces:

Anything you're doing with React. Svelte can replace React itself, or SvelteKit is versatile enough to sub in for Next, Gatsby, and/or Remix (or even all at once).

### [Vue](https://vuejs.org)

[Vue](https://vuejs.org) is possibly the closest option to React, and likely has the next-biggest ecosystem. It's significantly more performant than React, however, and a bit more UI-focused.

In some ways, Vue is the smallest leap from React, especially now that it has a similar hooks-based approach in Vue 3. But Vue uses a templating language closer to default HTML than to JSX, which makes it much easier to write conditionals and loops in template files, without having to reach for workarounds like `map` and ternaries.

Vue has a similar meta-framework to Next in [Nuxt](https://nuxtjs.org), which is well maintained and adding powerful new features all the time. Vue is also a bit more batteries-included than React, coming with things like scoped CSS handling and easy transitions/animations out of the box.

#### Vue is recommended if:

Community size/overall framework popularity is an important factor for you; you want something like React, but more batteries-included or HTML-like; you prefer your framework to be independent and _not_ be owned by a large corporation.

#### Vue replaces:

React itself, or [Nuxt](https://nuxt.com/) can replace anything you might be using Next for.

### [Solid](https://www.solidjs.com/)

[Solid](https://www.solidjs.com/) is what I would call React, but better. It looks almost (if not entirely) identical to React in many cases, but Solid is far, far more performant. It's one of the fastest options available, in fact.

Solid essentially starts with React, and then rethinks it to eliminate complexity, performance issues, and a lot of boilerplate. Signals appear as a concept in Solid, which eliminate a great deal of the confusion and footguns around component rendering and lifecycles. It might even be fair to say Solid is React, if React was built in the modern era, on top of all the lessons we've learned since 2013.

Solid also offers its own meta-framework in [SolidStart](https://start.solidjs.com/getting-started/what-is-solidstart), though that is currently in beta. Solid itself is plenty mature enough to use, though, and boasts an impressive gallery of sponsors.

#### Solid is recommended if:

You generally like React (and JSX), but you just wish it was more modern, faster and/or easier; performance is an absolute top priority.

#### Solid replaces:

React and React DOM. SolidStart will likely be capable of replacing Next one day, but it's still in beta as of this writing.

### [Fresh](https://fresh.deno.dev/)

[Fresh](https://fresh.deno.dev/) is a server-rendered frontend framework with islands architecture, built on Deno. It's a bit younger than most of the rest of the items on this list, but it's full of promise as a minimal-JS, island-based framework that can run on the edge—powered by Deno, no less, which means your server code is faster, more secure, TypeScript by default, and all the other benefits Deno brings over traditional Node (such as easier, first-party linting, testing, and code formatting settings).

Every Fresh component is either static-rendered and served at response time as HTML, with no JavaScript, or an "island," which means it renders only on the client. You can mix and match as needed. Because it runs on Deno, this opens the gate for extremely fast, dynamic content that loads as quickly as possible on any device anywhere in the world.

Fresh uses Preact, so you know it's fast, and won't be difficult to pick up if you're coming from React, either. And again: building on Deno feels great.

#### Fresh is recommended if:

You like the idea of a server-side app globally available in the cloud, shipping absolutely minimal JavaScript, and/or building on the latest technology.

#### Fresh replaces:

Remix is probably the closest thing to Fresh in React-land.

### [Astro](https://astro.build/)

[Astro](https://astro.build/) is a next-gen, highly performant static site generator that does more than static. Astro is one of the newest options on this list, but it's already at a very stable 1.0 release and has garnered widespread praise and adoption.

Built mainly to be a new generation of SSG (hey, React fans: it supports JSX and MDX), Astro now also features dynamic, server-side capabilities as well. I'd definitely recommend it over, say, Gatsby, or for any content-heavy or static sites.

The real killer feature is: Astro ships zero JavaScript by default. You opt in to only what you want to use.

Astro is also compatible with whatever frontend framework you want to use, so if you prefer to template in React, Vue, Svelte, or others, you can!

#### Astro is recommended if:

You're building a largely static, or content/Markdown-based site (even if you may need some server-side rendering or logic); you want to ship minimal JavaScript; you want to bring your own frontend framework.

#### Astro replaces:

Gatsby, or similar React-based content tools.

### [Preact](https://preactjs.com/)

You probably already know about [Preact](https://preactjs.com/) if you live in React land, but it warrants mention here. It's a much slimmer, much faster version of React. Although it began more-or-less as a drop-in replacement for React, it's beginning to gain some superior features React doesn't have (like _Signals_, which we've already mentioned).

#### Preact is recommended if:

You want to stick with React, essentially, but you just want it to be faster.

#### Preact replaces:

React. (Actually, it just adds a P to the beginning. The P stands for performance. I made all that up; don't blame the Preact team for that.)

### [Qwik](https://qwik.builder.io/)

[Qwik](https://qwik.builder.io/) server-renders React-like code (JSX) with a new approach to hydration and performance. In fact, what it does can't really be called "hydration" at all; instead, it serializes JavaScript into the DOM, and loads it in tiny bits only when it's needed. Qwik is one of the deeper cuts on this list, but if you have a _lot_ of interactivity that you need to run as fast as possible, it's well worth a look.

#### Qwik is recommended if:

You're shipping _lots_ of JavaScript to the browser, and you want a way to make that more performant.

#### Qwik replaces:

React itself, allowing it to run very efficiently on the edge.

### Web component libraries

I won't go very deep on this one, because frankly, I'm not the guy for that. I don't have the experience with either [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) on their own, or web component frameworks, to speak well on the topic.

That said, there _is_ a certain class of projects that could benefit from a [web component framework/library](https://www.webcomponents.org/libraries) like [Lit](https://lit.dev/), [Stencil](https://stenciljs.com/), [Polymer](https://www.polymer-project.org/), or others. Rather than generating "proprietary" components in a specific frontend framework, these libraries help you write actual web components, which are then portable to any web project.

In my opinion, most projects still benefit from using a frontend framework over pure web components—or, at the very least, both together. Maybe that will change in the future, but for now, I think the tradeoffs still tilt away from a pure web component approach in most cases.

Still, there are certainly use cases for which a purely web component-based approach ought to be considered. And for _those_ projects, React is definitely overkill. The web component libraries mentioned above would be a much better fit.

#### Web component libraries are recommended if:

You need to reuse the same components in multiple environments; want to future-proof yourself against framework changes; or just prefer using the platform, and are prepared to deal with the tradeoffs of web component authoring.

#### Web components replace:

React, but maybe only partially, depending on your use case

## Epilogue

This post is, admittedly, a lot like my post from last year, [_The self-fulfilling prophecy of React_](/blog/self-fulfilling-prophecy-of-react). It treads some of the same territory, and makes some of the same arguments (albeit hopefully in new ways or from new perspectives).

I didn't set out to repeat myself, but clearly, I think about this stuff a lot—spurred no doubt by my professional shift to working with React full time around the time that post was published, by coincidence.

I've come to believe React's popularity is, in no small part, because folks don't look beyond it. It's not the greatest, but most people aren't looking for the greatest; they're just looking for good enough. (We're humans. There are a lot of personal, emotional, irrational reasons for our decisions, all of us, and that's fine. We're busy.)

It seems like we adopt technologies in leaps, rather than in a linear motion, at least in the world of frontend. Part of what caused everyone to jump on the React bandwagon was that _everyone_ at the time was stuck on antiquated technology, and was looking for something better. We didn't gradually advance to the new thing, in small steps (maybe because that wasn't really an option to begin with); we took a giant _leap_ from where we were to the next thing.

![A linear line with an arrow pointing forward, labeled 'progress.' There are a few arced leaps of progress on top of the line, jumping from left to right, labeled 'adoption.' The final leap, however, lands well short of the furthest edge of the straight 'progress' line.](/images/post_images/tech-adoption.png)

But the thing is: we've been sitting there, in mostly that same spot, since we took that leap all those years ago.

My sense is: we're beginning to near another leap.

I don't know what it will be, or why. But I think we're starting to feel all the problems React actually _doesn't_ solve for us, like we felt with jQuery back in those days. And I think eventually, it will be clear that it's time to advance.

What will that new thing be? I don't know. Maybe it'll just be the web platform. Maybe we won't even need frameworks. Maybe it'll be a framework above; maybe it'll be something we haven't even seen yet. Maybe it won't even be _a thing_; maybe there will be more diversity of tooling and less coalescing around one single accepted standard (though of all the above options, I'd say that seems the least likely, because again: humans. We're busy little monkeys and so we like defaults.)

I think, though, that the delta between React and that thing, whatever it is, will continue to grow larger and larger over time.

So every new day is an even better day than the one before it to explore what you've been missing.

Happy listening.
