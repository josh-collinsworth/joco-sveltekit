---
title: 'Introducing Svelte, and Comparing Svelte with React and Vue'
date: '2021-10-1'
updated: '2022-01-18'
categories:
  - javascript
  - svelte
  - vue
  - react
  - web
coverImage: 'introducing_svelte.png'
coverWidth: 16
coverHeight: 9
excerpt: Svelte is a new style of framework for building sites and apps. Let's dive into what makes it different, why it's so enjoyable, and how it's able to ship such tiny, fast apps.
---

<script>
  import Callout from '$lib/components/Callout.svelte'
  import PullQuote from '$lib/components/PullQuote.svelte'
  import Highlight from '$lib/components/Highlight.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CounterButton from '$lib/components/demos/CounterButton.svelte'
  import ToggleButton from '$lib/components/demos/ToggleButton.svelte'
  import VolumeControl from '$lib/components/demos/VolumeControl.svelte'
  import CodeComparison from '$lib/components/demos/CodeComparison.svelte'
</script>

Let's be honest: lots of things in web development are harder than they should be. Some days, it can seem as though everything in the frontend world is needlessly over-engineered and convoluted.

That's what makes [Svelte](https://svelte.dev/) seem like such a breath of fresh air.

## What is Svelte?

At a basic level, you could think of Svelte as a frontend user interface (UI) framework akin to [React](https://reactjs.org), [Vue](https://vuejs.org), etc. Svelte is the newest of the big names in the space, however, and it definitely seems as though it's learned from the others, in terms of both developer experience and optimization.

As with any frontend framework, you use Svelte to build components, which are then the building blocks for your user interface (UI). As events happen and state and data change (for example: a user adding an item to the cart), the components automatically update to reflect those changes in the UI. (More on that in a bit.)

So how is Svelte _different_? Glad you asked…

### How is Svelte different?

Svelte was created by [Rich Harris](https://twitter.com/rich_harris), a developer and graphics editor for the [New York Times](https://www.nytimes.com/). (**Edit:** Harris has since been [hired by Vercel](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte) to work on Svelte full-time!)

The news world moves fast, so the interactive UIs and visualizations Harris was creating for the _Times_ needed to be built as quickly as possible. But since it's critical for the news to be accessible to _everyone_, those bits of interactivity _also_ had to be as small and performant as possible.

Harris needed a solution that was extremely quick and easy to build with, yet that would be fast and smooth for any reader on any device or network, no matter how limited. In many cases, the bloated JavaScript bundles that are the byproducts of many other frameworks disqualified them from consideration. So Harris set out to build his own solution, and that's how Svelte was born.

While relatively new and small compared to the other frameworks on the list, Svelte is uniquely battle-tested: the [New York Times Covid map](https://www.nytimes.com/interactive/2021/us/covid-cases.html) is a Svelte app. (Harris's former employer is far from the only large company utilizing the tech, however; IBM, Square, Philips, 1Password, and Spotify number among its growing list of adopters.)

---

The attention to developer experience (DX) is obvious in Svelte. I instantly loved how easy it made _everything_ I wanted to do--especially compared to React, as I cheekily tweeted at the time:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My elevator pitch for <a href="https://twitter.com/sveltejs">@sveltejs</a> :<br><br>Svelte is React without all the bullshit.</p>&mdash; Josh Collinsworth (@jjcollinsworth) <a href="https://twitter.com/jjcollinsworth/status/1155265498675929088">July 27, 2019</a></blockquote>

From the start, I was consistently and pleasantly surprised how _little_ code I needed to do things in Svelte--and how close it was to the JavaScript, HTML and CSS I already knew.

<PullQuote>
Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.
</PullQuote>

In fact, I found myself having to _unlearn_ many of the more convoluted solutions common in other frameworks (a common refrain from Svelte adopters).

<Callout>
Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.
</Callout>

But instead of me talking about it, let's get to some comparisons. (Since this isn't intended to be a code-along, we'll cover actually _installing_ Svelte at the end.)

<img src="/images/post_images/svelte-react-vue.png" alt="" class="section-heading-image" />

## Comparing Svelte to React and Vue

As mentioned, at a basic level, Svelte is similar to other frontend frameworks. So let's look a little closer at the details of how Svelte differs: its focus on build-time over run-time, and the simplicity of its syntax.

### Build over browser

I already mentioned how performant Svelte apps are. That's possible because Svelte takes a different approach from other frontend frameworks by doing as much as it can at the _build_ step--when the code is initially compiled--rather than running client-side.

<PullQuote>
If you want to get technical, Svelte isn't really a JavaScript framework at all, as much as it&nbsp;is&nbsp;a&nbsp;compiler.
</PullQuote>

<Callout>
If you want to get technical, Svelte isn't really a JavaScript framework at all, as much as it&nbsp;is&nbsp;a&nbsp;compiler.
</Callout>

To elaborate: React, Vue, and most other frameworks run _in_ the browser. You load them first, and then _use_ them by calling their methods to execute whatever code you write (not unlike jQuery and countless similar libraries). You can load React, Vue, etc. in a script tag, in a [CodePen](https://codepen.io), or otherwise drop them into whatever environment you want. Granted, there's probably a build tool involved to reduce the bundle size when you work with these frameworks in a production environment. But to some extent at least, you're inevitably shipping the framework itself to the browser, and loading it there.

**Svelte doesn't work like that**; you can't "load Svelte" in the browser, or play with it on CodePen (though the [Svelte REPL](https://svelte.dev/repl/hello-world) works well instead). Svelte isn't a script.

Instead, to create a Svelte app, you [install the Svelte repo](https://svelte.dev/blog/the-easiest-way-to-get-started) on your machine, and write Svelte code--which, technically speaking, is a small superset of HTML. The compiler does the rest:

<Callout>
All your Svelte code is compiled down to minimal, self-contained JavaScript before it ever gets to the browser.
</Callout>

It's not unlike how [Sass](https://sass-lang.com/) is compiled to plain CSS. That's why Svelte has been referred to as "a framework without the framework." (The [REPL](https://svelte.dev/repl/hello-world) offers a direct peek into the compiled JavaScript, if you're interested.)

This approach allows for extremely small bundle sizes, which in turn translates to better loading speed and performance. A smaller bundle can be shipped to the browser faster _and_ parsed by the browser more quickly.

<PullQuote>
All your Svelte code is compiled down to minimal, self-contained JavaScript before it ever gets to the&nbsp;browser.
</PullQuote>

React and Vue both use a "[virtual DOM](https://stackoverflow.com/questions/21965738/what-is-virtual-dom)," for rendering, which--while faster than crawling the DOM itself to make changes--still has its own performance implications. Thanks to the Svelte compiler, however, we don't have to worry about that; components are tied directly to their DOM nodes. You can read more about that in Rich Harris's [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).

<SideNote>

There's a little more nuance than this when discussing Svelte's performance relative to the field, but we'll get into that in the last section.

</SideNote>

### Authoring Svelte components

One of the things I like most about Svelte is its HTML-first philosophy. With few exceptions, Svelte code is entirely browser-readable HTML and JavaScript. In fact, technically, you could call Svelte a small superset of HTML.

But enough telling; let's show.

Just as you write `.jsx` component files in React and `.vue` files in Vue, Svelte has `.svelte` component files. A Svelte component might look like this (though you can order the pieces any way you like):

```svelte
<script>
	// Component logic goes here
</script>

<!-- HTML goes here -->
<style>
	/* CSS goes here (scoped by default!) */
</style>
```

Let's see a real example.

Maybe the most contrived way to demonstrate a frontend framework is a button component that counts how many times it's been clicked. It's the "hello world" of component examples:

<svelte:component this={CounterButton} />

It's not a particularly practical example, but it _is_ a common one because it's an effective way to demonstrate the bread and butter of frontend frameworks: make a small component to track your state (the count), and whenever something causes the state to change (the click), automatically update the UI (the button).

Click through the examples below to compare this component in different frameworks:

<CodeComparison dir="counter-button" includeBothVues={true} />

<SideNote>

I use arrow functions and omit semicolons in these examples, but that's just personal stylistic preference.

</SideNote>

There are some key differences I'd like to point out between the Svelte version and the others:

- **Svelte is reactive by default**. This means when a variable is reassigned, every place it's used or referenced also updates automatically. (_React and Vue both require you to explicitly initialize reactive variables_.)

  - React in particular does this because of an insistence on "immutability." Its philosophy dictates that you _shouldn't_ be able to change a variable's value without calling a function that's "authorized" to do so.

    In theory this prevents unwanted mutations (changes), but in practice, 99% of the time it's unnecessary boilerplate.

- **The Svelte version is the shortest**, both in terms of line count and character count. While this isn't necessarily meaningful on its own, shorter code _does_ tend to be less error-prone, as long as it's readable (which I would argue it definitely is).

- **Svelte isn't picky about HTML.** React needs a `return` with a single element, and Vue needs a single `<template>` tag wrapping all the markup. (Vue 2 _also_ requires a single element inside _that_.) Svelte can have whatever HTML, wherever--and with all its attributes intact, unlike in JSX, React's de facto templating language.

#### A more practical toggle button example

Showing the user how many times they've clicked on a button isn't particularly practical, so let's look at something _slightly_ more realistic; a button that toggles some hidden content:

<ToggleButton />

This example is at least _close_ to real-world functionality; it's hopefully not too hard to imagine how something similar to this would be useful in a production scenario.

I like this example because it introduces two key framework concepts:

1. **Conditional rendering** – `if` statements inside the markup; and
2. **Computed values** – dynamic variables that change depending on the situation (in this case, the button text).

Let's compare how Svelte, React, and Vue each handle these concepts:

<CodeComparison dir="toggle-button" includeBothVues={true} />

Svelte's way of handling computed values is that `$:` operator you see above; prepend any variable name with that, and it will be reevaluated every time anything it depends on changes. (In this case, `buttonText` is reevaluated each time `isTextShown` changes.)

React lets you do something similar, but Vue moves these to `computed` functions.

Other differences worth noting:

- Svelte and Vue 3 do not require you to "wrap" your markup in a single element. React and Vue 2 do. (I wouldn't be surprised if React figures out a way to do away with this requirement soon, however.)

- In React and Vue, you need to wrap conditional elements in HTML and/or stringify them. Svelte lets you put whatever otherwise valid markup you want inside of `#if` blocks, and doesn't require you to tie them to an element, either.

<SideNote>

The accessibility of this toggle button example is questionable, for the sake of brevity. I recommend Heydon Pickering's [Building Inclusive Toggle Buttons](https://inclusive-components.design/toggle-button) for more info.

</SideNote>

#### Comparing form bindings

Here's one last quick _and_ practical example, to compare form bindings between frameworks: a volume slider. Try it out:

<VolumeControl />

<CodeComparison dir="volume-control" includeBothVues={true} />

Notice especially how React's data flow is one-way; it needs you to explicitly update the `volume` variable any time its corresponding input changes. In other words: you need to make the input both _read_ the volume setting _and update_ the volume setting, as two different steps.

By contrast, both Svelte and Vue offer two-way data binding; you just tell the framework that whenever either the input _or_ the value changes, the other should update to reflect that.

It should also be noted that you can add two-way data binding to component props in Svelte as well:

```svelte
<ChildComponent bind:someProp={someValue} />
```

This would allow the `ChildComponent` to pass changes to the parent component and vice versa. React is firmly against this idea because, again, it highly values immutability and one-way data flow. In practice, I personally find that dogma more inhibiting than helpful.

#### Comparing logic

Though we've seen it already, I think it's worth glancing once more at how each of the three frameworks handles conditional rendering. Here's how you'd show a `<Hello />` component conditionally:

<CodeComparison dir="conditionals" />

<SideNote>

I'm not distinguishing between Vue 2 and 3 in these examples because their templating syntax is identical.

</SideNote>

You can of course do `else` as well (and `else if` for that matter, though I won't demo that just because writing the React expression would be a little bit of a nightmare).

Here's an example where we show a `<WelcomeBanner />` component if the user is logged in, and a login form component otherwise:

<CodeComparison dir="complex-conditionals" />

#### Loops

I appreciate how Svelte allows loops inside of markup, without requiring you to tie the loop to any elements or map over an array (and in most cases, without requiring you to `key` each item, either).

Here, assume we have an array called `posts`, full of objects containing post info:

<CodeComparison dir="loops" />

It's also nice that you can put any markup you like inside Svelte's `each` block; it doesn't need to be a single element.

### Other reasons to love Svelte

While the above examples don't cover them, some other features of Svelte that I love include:

- **Everything lives together in one file**. Similar to single-file `.vue` components, `.svelte` files keep your component's logic, markup _and_ styles all together. (More on that in the next section.)

- **Scoped CSS by default**. (More on Svelte CSS in the next section, too).

- **[Transitions and animations baked-in](https://svelte.dev/tutorial/transition)**. A robust built-in API means there's no need to reach for an external library or hand-code visual transformations.

- **Built-in [reusable data stores](https://svelte.dev/tutorial/writable-stores)** (think: a very light, simple version of Redux or Vuex)

- **Easy shorthands** for class binding, prop passing, and event modifiers (that I miss now when working with other frameworks)

I could go on and on about how easy Svelte makes things, and how advanced yet simple it seems. Even [Svelte's docs and tutorial site](https://svelte.dev/tutorial/basics) is way ahead of the game; the whole thing is a live REPL (coding environment) where you can write your own Svelte code and see it running live!

### CSS in Svelte

<Callout>
One of my favorite parts about Svelte is how fun and easy it makes styling.
</Callout>

To add styles to a component in Svelte, you simply create a `<style>` tag in the component's `.svelte` file. Any CSS inside it will be scoped to the component by default.

<PullQuote>
One of my favorite parts about Svelte is how fun and easy it makes styling.
</PullQuote>

If you prefer, you can use Sass in your components with minimal modification, and by adding `lang="scss"` to the `<style>` tag. This is possible thanks to [Svelte Preprocess](https://github.com/sveltejs/svelte-preprocess).

Svelte Preprocess is an Svelte add-on, with support for several "languages" (incluing Sass, PostCSS and TypeScript) built-in. On top of that, Svelte Preprocess adds an extremely nice Sass feature: you can [specify content to prepend when loading your component's Sass](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md#31-prepending-content).

This way, if you have all of your Sass variables in an external `_vars.scss` file like me, you can just have the processer auto-import that into every component. This saves you the trouble of manually `@import`ing the SCSS file with a bunch of `../../../` file system traversal every time you want to use a variable in a component.

##### Conditional styling

Conditional styling is a _breeze_ in Svelte thanks to its simple shorthands. Let's look a little closer at how you might apply a `.enabled` class to a component, based on a boolean value:

```svelte
<script>
	let enabled = false;
</script>

<input class={enabled ? 'enabled' : ''} />
```

That works, and if you've used conditional styling in other frameworks, you might have resorted to something similar. But ternaries can be a little wordy and tough to read, especially when one side isn't even doing anything.

Like in React, you _could_ shorten this to a "short-circuit" conditional:

```svelte
<script>
	let enabled = false;
</script>

<input class={enabled && 'enabled'} />
```

This also works, but isn't quite as idiomatic as I'd like, personally; unless you're already familiar with React, you might not realize what the `&&` operator is doing in this situation.

As an alternative, in Svelte, we can just do this instead:

```svelte
<script>
	let enabled = false;
</script>

<input class:enabled />
```

That's pretty cool! It's easier to read, too; you can simply see what class will apply, based on what JS value.

**We can go one step further, though**: if the class name and property name are identical, you can just do this:

```svelte
<script>
	let enabled = false;
</script>

<input class:enabled />
```

**Whoa!** That's rad. It's basically [ES6 object property value shorthand](https://alligator.io/js/object-property-shorthand-es6/) for conditional classes.

Also worth mentioning: you can have as many `class` attributes as you want (dynamic or otherwise) on a single element:

```svelte
<div class="layout" class:logged-in={isLoggedIn} class:darkMode class:reduceMotion>
	<!-- ...Content here -->
</div>
```

##### Scoped vs. global styling

If you'd like to make a component's CSS global, you can do that on a per-rule basis with the `:global()` function:

```svelte
<style>
	ul {
		/* This CSS applies ONLY to the component */

		:global(li) {
			/* These styles are global */
		}
	}
</style>
```

**_Or_** if you prefer, you can make the entire tag global with the `global` attribute:

```svelte
<style global>
	/* All CSS here is global */
</style>
```

**One word of warning there, however:** global styles can persist once loaded on the page, since Svelte outputs your component's styles as a standalone CSS file. So if you have a `global` style tag in a component that only loads conditionally, its styles can stick around even after that component is removed from that page, potentially applying to elements on new pages as well.

<PullQuote>
I've found it's a good idea to always use a wrapping parent class selector, even when dealing with scoped styles.
</PullQuote>

This could lead to some confusion, since "global" only means global _once loaded_; the component has to be mounted once first before those styles are actually available.

<Callout>
Because of this, I've found it's a good idea to always use a wrapping parent class selector, even when dealing with scoped styles.
</Callout>

At worst, it's redundant, and at best you've saved yourself from unintentional style leakage (either now or if you decide to un-scope the styles in the future).

If you'd like to read more about styling in Svelte, be sure to read [What I Like About Writing Styles with Svelte](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/) on CSS Tricks.

### Props and component communication

I appreciate the flexibility that's baked into Svelte. This is evident in the way it allows you to pass data and events between components.

If you like the way React handles things, you can pass methods to your child components, and keep the one-way flow intact.

If you like Vue's `$emit`, you can [dispatch custom events](https://svelte.dev/tutorial/component-events) from child components and listen for them on the parent.

As mentioned above, you can also `bind` props to enable two-way data flow, or just have both components subscribed to the same Svelte store--or even mix and match. The choice is yours.

---

To create a prop in a Svelte component, you simply create a variable using the `export` keyword:

```svelte
<script>
	export let propToBePassedIn;
</script>
```

The above indicates a _required_ prop; if you want to create an optional prop, just give it a default:

```svelte
<script>
	export let propToBePassedIn = false;
</script>
```

This syntax may seem a little odd at first, since we're generally used to exports as a way to pass things _out_. It's admittedly one of Svelte's quirks, but it becomes familiar fairly quickly. Think of it as a component _exporting_ the responsibility for a value to a parent component.

Let's have one last comparison, just to look at how it's done in other frameworks:

<CodeComparison dir="props" includeBothVues={true} />

In any of the above cases (since both props are just strings), you'd use the component just like so:

```html
<PageHeading pageTitle="The big page title text…" pageSubtitle="…and a little subheading" />
```

A couple of things to point out:

- Note that React does _not_ have any prop typing, or any way to require a prop. You'd need to import a library for that, probably [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html). (You could of course hand-write the logic in the component, but that doesn't scale well.)

- While Svelte _does_ allow you to set required props, it doesn't have prop typing built-in, as Vue does. That's largely because Svelte is fully TypeScript compatible, however. The expectation seems to be: if you want prop typing, you can just go with TypeScript for that.

## What to know about Svelte

I'll be honest: to me, any arguments against adopting Svelte grow fewer and thinner all the time. But I'll mention some things you should know and some of the arguments for and against Svelte here, just for perspective if nothing else.

### Debunking the "small community" argument

When comparing Svelte (or any newer technology, for that matter) with the larger, more established players, arguments against adoption often point to community size. Where React, Vue, Angular, etc. all have large ecosystems full of resources for you to take advantage of, Svelte can seem comparatively small.

<PullQuote>
When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself.
</PullQuote>

The fear, then, is that when or if you need to reach for additional packages to handle things beyond the main framework's capabilities, you may be left in the lurch.

I'd like to put some context around that argument:

1. **You don't often _need_ packages with Svelte.** When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself.

Svelte is much closer to the HTML, CSS and JavaScript of the web, which means you don't often _need_ to go looking for a package that, say, plays nice with your framework's hooks or lifecycle methods. Plus, many of the features you'd need a package for in other frameworks come baked in with Svelte (motion, scoped CSS, and state management being the biggest examples).

2. **Svelte is extremely compatible with vanilla JavaScript packages.** This means that while, yes, the ecosystem of _dedicated_ Svelte packages and plugins is comparatively small, it can often benefit from and easily use _any_ framework-agnostic package--which is a pretty massive portion of the packages out there.

3. **Even when you _do_ need to build something yourself, SvelteKit makes it comparatively simple.** One example: previously, I was using an RSS plugin with Gridsome, but no such package exists for SvelteKit.

A quick web search, however, was all it took to find a very easy way to [Create an RSS feed in SvelteKit](https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit), with no dependencies, in under 40 lines of code.

### Yes, Svelte scales

We've talked about how SvelteKit's components compile and ship as minimal, self-contained JavaScript, which means there's no overhead of a framework. This approach leads to smaller bundles, but the downside is: there's also less shared code, so each individual component will inevitably contain repeated code.

<PullQuote>
The scale at which Svelte's advantages disappear is actually unrealistically high for just about any&nbsp;application.
</PullQuote>

Loading a framework script upfront adds to the _initial_ load, but the more its code is reused, the the more it pays off--which means that above a certain scale, the advantage of Svelte's approach is neutralized, and it's actually _more_ efficient to build with another framework.

This causes some people to claim that Svelte doesn't scale, but that's premature.

The _real_ question that matters is: _where is that point_? Clearly, nobody's worried about whether React scales, so when does Svelte lose its advantage over React?

<Callout>
Turns out: the scale at which Svelte's advantages disappear is actually unrealistically high for just about any application.
</Callout>

If you'd like more detail, you can read this [comparison of React and Svelte bundle scaling](https://github.com/halfnelson/svelte-it-will-scale/blob/master/README.md), or [this similar comparison](https://svelte-scaling.acmion.com/). But to summarize both: Svelte's advantage disappears somewhere around 150 kB of components loaded onto the page. That doesn't _sound_ like a lot, but components are tiny; it would actually take a pretty massive number (or extremely high complexity) to get to that point. Many components aren't even 1 kB. (In fact, speed tests have dinged me for not g-zipping components, since Netlify doesn't automatically gzip any components that are less than 1 kB in size, as the gains are too tiny to bother with.)

For comparison's sake: [I recently rewrote this site in SvelteKit](/blog/converting-from-gridsome-to-sveltekit/). Granted, it's still a small personal site and not a production app, but I'm _barely_ 20% of the way to that scale at any given route. My largest and most complex component--the `__layout.svelte` file, which has 17 imports--is only 12 kB. None of my other components are even 3 kB. So it's tough to fathom how I'd make a page large and complex enough to approach the ~150 kB vertex, given I'm orders of magnitude below that right now. (And just to emphasize/clarify: this is _per route_, not the app as a whole.)

Plus let's not forget: that's the scale at which you're on _even ground_ with React. You'd _still_ have to go significantly larger than _that_ before there would be any meaningful difference between the two.

_Plus_, this whole discussion focuses on how things are right now, in this moment, and not on future upside. Will React get smaller and faster in the future? Probably; it's supported by a large and talented team. But it's also benefitted from nearly a decade of optimization already; there may not be a lot left to squeeze out of it at this point.

On the other hand, Svelte is comparably young. If I'm betting on which framework will improve more in the future _relative to its current position_, I'm backing Svelte, no question.

<SideNote>

It's worth mentioning that since Svelte started becoming popular, other frameworks have learned from it and closed the performance gap a bit. React is still generally significantly heavier, but Vue 3 is fairly comparable to Svelte performance-wise in many cases.

</SideNote>

### Svelte doesn't support Internet Explorer by default

Svelte requires polyfills to run properly in Internet Explorer (and even then, support for any version of IE below 11 is not guaranteed).

If you need to support IE 11, you can read the [Svelte/IE11 GitHub issue](https://github.com/Shopify/payment-service/issues/6667), which lists some possible workarounds and polyfills. Or, this may be one case where a choice of another framework is necessitated.

However, if you're starting a new project today: note that Internet Explorer is not long for this world. [Google search recently dropped support for IE 11](https://www.searchenginejournal.com/google-search-ends-support-for-internet-explorer-11/421726/), citing its tiny and shrinking market share (only around 1% of all browsers). WordPress, which powers about 40% of the web at this point, dropped support for IE 11 in [WordPress version 5.8 earlier this year](https://wordpress.org/news/2021/05/dropping-support-for-internet-explorer-11/). And even [Microsoft itself will be putting the final nail in IE 11's coffin in July 2022](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/).

### What are your goals?

The answer to the question of whether you should use Svelte _right now_ is a classic: "it depends."

Are you learning your _first_ framework? If so, what's your goal? If you're looking for an easy tool to learn, for something that will empower you to build interactive UIs, or just for some additional knowledge and experience, I'd recommend Svelte wholeheartedly.

<Callout>
There's no wrong choice when it comes to developing your own skills—particularly because having one framework down makes it much easier to learn a new one, like moving from instrument to&nbsp;instrument.
</Callout>

<PullQuote>
There's no wrong choice when it comes to developing your own skills and knowledge.
</PullQuote>

On the other hand, if you're learning in the hopes of getting a job with your newfound skills, it would be hard to recommend anything other than React for that pursuit--simply because it's the _largest_ framework by far in terms of market share and jobs available. I wish that weren't the case, but tech as a whole (in the U.S., at least), went in heavily on React and I don't see that changing any time soon. Still, though: if you already know React, I think it's still worth learning Svelte just for the perspective, if nothing else.

Alternately: are you choosing a technology for a relatively new startup or project? Svelte will likely enable you to move more quickly and build something that's more performant, but hiring or collaborating may be a challenge, given the relatively small pool of Svelte devs. That said, though: knowing one JS framework tends to make learning a new one easier, and Svelte is in my opinion the easiest to start with. I think any developer who's already familiar with another frontend framework should be able to pick up Svelte pretty quickly (and vice versa).

### Svelte shines in limited environments

I touched on this in the intro, but one of Svelte's biggest strengths is its minimal JavaScript bundle sizes. This makes it ideal for any code that will be executed by low-power devices that can't parse JavaScript quickly (smart TVs, watches, and other IoT devices for example, or older smartphones that might be more common in less economically advantaged markets). It _also_ means Svelte shines where bandwidth is limited, which again makes it a perfect fit for older devices and users who might be on poor internet connections.

### Reactivity with arrays and objects

Svelte's one notable "gotcha" is in how it handles automatic reactivity with arrays and objects. You can read more about it in the [Svelte tutorial on arrays and objects](https://svelte.dev/tutorial/updating-arrays-and-objects), but to summarize: _modifying_ an array or object won't register with Svelte as an update, and therefore, won't cause a re-render. You need to _re-assign_ the variable to force Svelte to recognize the change.

```svelte
<script>
	let colors = ['red', 'orange', 'yellow'];

	colors.push('green');
	// ❌ Updates the array, but doesn't cause a re-render

	colors = [...colors, 'blue'];
	// ✅ Reassigning causes a re-render
</script>
```

The same principle works with objects, as well:

```svelte
<script>
	let me = {
		firstName: 'Josh'
	};

	me.lastName = 'Collinsworth';
	// ❌ Updates the object, but doesn't cause a re-render

	me = { ...me, lastName: 'Collinsworth' };
	// ✅ Reassigning causes a re-render
</script>
```

If for some reason you _had_ to use `.push()`, you could just assign the array to itself afterwards. This would work:

```js
myArray.push(newThing);
myArray = myArray;
```

But I think this is a little nicer (and works the exact same way):

```js
myArray = [...myArray, newThing];
```

If you want to get nerdy for a second: **this is actually a quirk of JavaScript itself**, rather than of Svelte. JavaScript still considers the array or object as the same unique thing until and unless it's reassigned. (This is why you can use `const` to declare an array or object and still modify its properties; the variable itself hasn't been mutated, even though its contents have.)

## How to get started with Svelte

If you'd like to dive in and get some hands-on experience with Svelte (and I recommend you do!), there are two main ways forward at this point.

### The Svelte REPL

Clearly I'm a big fan, so I could be biased, but I honestly think Svelte might have the best tutorial and documentation of any framework out there.

There's a wonderful introduction in the [Svelte Tutorial](https://svelte.dev/tutorial/basics), which functions as a live coding environment where you're taught Svelte bit by bit, and try to finish incomplete Svelte code challenges along the way. (Or, if you like, you can just click "show me" to see the complete lesson.) It's fun and engaging, and covers all of Svelte's concepts from simple to complex extremely well. In fact, I find myself going back to it over and over. I highly recommend it both for learning and for reference.

### Starting your own Svelte project

Alternatively, there's a [Svelte quickstart guide](https://svelte.dev/blog/the-easiest-way-to-get-started) that walks you through installing Svelte on your machine. I'll post the directions here, too; it's suprisingly quick, assuming you already have NPM installed:

> ```bash
> npx degit sveltejs/template my-svelte-project
> cd my-svelte-project
> # to use TypeScript run:
> # node scripts/setupTypeScript.js
>
> npm install
> npm run dev
> ```

If you're not familiar with those commands:

- `npx` allows you to run something from NPM, but _without actually installing it on your machine_. In this case, we just want to run `degit` once; we don't need to keep it around for anything afterward.

- `degit` clones a repo (in this case, the `template` project from `sveltejs`), but _without_ its git history; it'll be as though you're starting up a fresh new project.

Naturally, you can replace `my-svelte-project` with whatever name you'd like for your local project. Once you `npm install`, `npm run dev` will start a dev server that will show you your project and automatically refresh as you save your changes.

## Conclusion

I hope you're now as excited about Svelte as I am! I encourage you to try it out on your own, even if it's just playing around in the [Svelte tutorial](https://svelte.dev/tutorial/basics). If you haven't tried it before, I think you'll be pleasantly surprised how comparatively straightforward it is.

And if you're looking to dive deeper, there's also SvelteKit, a Svelte app framework for larger/more complex projects. I've written a post on [converting this site to SvelteKit from Gridsome](/blog/converting-from-gridsome-to-sveltekit), if you'd like to check it out as well.

In any case, thanks for reading, and if you have any questions or thoughts, [reach out](/contact?from_page=svelte_comparison) or leave a comment below!
