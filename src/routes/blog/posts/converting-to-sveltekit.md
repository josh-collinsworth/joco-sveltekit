---
title: 'Converting to SvelteKit'
date: '2021-10-01'
updated: '2021-10-01'
categories:
  - 'javascript'
  - 'svelte'
  - 'web'
coverImage: 'converting-to-sveltekit.png'
excerpt: I've been a fan of Svelte for years, but never had the opportunity to use it on a serious project before. So when I learned SvelteKit could do static rendering, it seemed like the perfect time.
---

<script>
  import CounterButton from '$lib/components/demos/CounterButton.svelte'
  import CounterButtonComparison from '$lib/components/demos/CounterButtonComparison.svelte'
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

Let's be honest: lots of things in web development are harder than they should be. Some days, it can seem as though everything in the frontend world is needlessly over-engineered and convoluted.

That's what makes [Svelte](https://svelte.dev/) seem like such a breath of fresh air.



## What is Svelte?

My favorite cheeky way to describe Svelte is: it's React, but without the bullshit.

**Svelte is a JavaScript framework akin to [React](https://reactjs.org), [Vue](https://vuejs.org), or any other component-based frontend framework**. Svelte is the newest of the big names in the space, however, and it definitely seems as though it's learned from the others, in terms of both developer experience and user optimization.

<Callout>My favorite cheeky way to describe Svelte is: it's React, but without the&nbsp;bullshit.</Callout>

As with any frontend framework, you use Svelte to build components, which are then the building blocks for your user interface (UI). As events happen and state and data change (for example: a user adding an item to the cart), the Svelte component(s) automatically update to reflect those changes in the UI.

So how is Svelte _different_? Glad you asked…


### Why Svelte?

I started playing with Svelte just after the version 3 release, about two years ago now, and I instantly loved how easy Svelte made _everything_ I wanted to do (especially compared to React). I was consistently and pleasantly surprised how _little_ code I needed to do things in Svelte—and how close it was to the JavaScript, HTML and CSS I already knew. 

<Callout>Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte just felt delightfully straightforward.</Callout>

Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte just felt delightfully straightforward.

**Svelte has always felt _way_ ahead of the game.** (Or, maybe more accurately, like it's learned from the mistakes of other frameworks). But instead of me talking about it, let's get to some comparisons.


### Comparing Svelte to React and Vue

At a basic level, Svelte is, like its contemporaries, a component-based, state-driven UI framework. They all allow you to nest components, pass props, handle events, and bring logic into your templates. Any frontend framework fits this criteria generally.

**Svelte differs mainly in its focus on build-time over run-time, and the simplicity of its syntax.**

#### Build over browser

Svelte takes a different approach from other frameworks by moving as much work as it can to the _build_ step (when the code is compiled during development and deployment), rather than running it client-side (when the user requests it). Everything possible is removed from your final browser bundle at build time, before it ships to the browser.

<Callout>All your Svelte code is compiled down to minimal vanilla JS before it ever gets to the browser.</Callout>

By contrast: **Vue and React both run _in_ the browser.** You load them, and _then_ use them to execute whatever code you write (not unlike jQuery and similar libraries).

In fairness, in most cases, you'll probably use a build tool to reduce their bundle size. But to some extent at least, with React and Vue, you're inevitably shipping the whole framework to the browser.

**With Svelte, the framework itself is removed by the compiler**. Svelte ships only the tiniest bit of runtime; all your Svelte code is compiled down to minimal vanilla JS before it ever gets to the browser. That's why Svelte has been referred to as "a framework without the framework." 

<SideNote>This approach means there's a certain tipping point at which building with frameworks is actually <em>more</em> efficient, size-wise. However, most apps are very unlikely to hit that scale; here's <a href="https://github.com/halfnelson/svelte-it-will-scale/blob/master/README.md" rel="external">a comparison of React and Svelte bundle size scaling</a>.</SideNote>

**React and Vue also both use a "[virtual DOM](https://stackoverflow.com/questions/21965738/what-is-virtual-dom)," for rendering**, which—while faster than crawling the DOM itself to make changes (a common pitfall with jQuery)—still has performance implications. You can read more about that in Rich Harris's [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).


#### Authoring components

Maybe the most contrived way to demonstrate a front-end framework's style and capabilities is a button component that counts how many times it's been clicked, and updates accordingly. It's the "hello world" of component examples. 

**Here's a demo** of what I mean:

<svelte:component this={CounterButton} />

As you click the button, the count increases, and the _display_ of the count updates accordingly.

**It's not a particularly practical example, but it _is_ a common one** (in fact, it's one of the first examples in [the official Svelte docs](https://svelte.dev/docs)), because it's an effective way to demonstrate the bread and butter of front-end frameworks: make a small component to track your state (the count), and whenever something causes the state to change (the click), automatically update the UI (the button).

**Click through the examples below to compare this component in different languages:**

<CounterButtonComparison />

<SideNote>I prefer to use arrow functions and omit semicolons, but those are just stylistic preferences, and not required.</SideNote>

There are some key differences I'd like to point out between the Svelte version and the others:

- **Svelte is reactive by default**. (_This means when a variable changes, every place it's used updates automatically, as in the button text above. Again, React and Vue both require you to explicitly initialize reactive variables_.)

- **The Svelte version is the shortest**, both in terms of line count and character count. While this isn't necessarily meaningful on its own, shorter code _does_ tend to be less error-prone and more readable.

- **Svelte doesn't require you to import or export anything.** (Some features of Svelte do, but its basic component functionality is all available out of the box.)

- **There's no framework-specific JavaScript.** While Svelte _does_ have its own syntax in some cases (like the `on:click` in the example above and some others), it stays just about as close as possible to vanilla HTML and CSS.

- **Svelte isn't picky about HTML.** React needs a `return` with a single element, and Vue needs a single `<template>` tag wrapping all the markup. Svelte can have whatever HTML, wherever (and in its original state, unlike in JSX).

##### Other reasons to love Svelte

While the above examples don't cover them, some other features of Svelte that I love include:

- **Everything lives together in one file.** Similar to `.vue` files, `.svelte` files keep all your component's logic, markup _and_ styles all together (_as opposed to React, which is aggravatingly "unopinionated" about CSS_).

- **Scoped CSS by default** (_more on Svelte CSS in the next section_).

- **[Transitions and animations baked-in](https://svelte.dev/tutorial/transition)**. A robust built-in API means there's no need to reach for an external library or hand-code visual transformations.

- **You can write logic directly in the markup** (unlike JSX), without tying logic to an HTML element (unlike Vue):

  ```svelte
  <!-- Svelte logic -->
  <p class="greeting">
    Welcome! 
    {#if age >= 21}
      Would you care for a drink?
    {/if}
  </p>
  ```

  (_And yes, you can do `else if` and `else` just as easily._)

- **Loops can be used inside markup**, without requiring any elements or maps (and without requiring you to key each item):

  ```svelte
  <!-- Svelte loops — no keys! -->
  <ul>
    {#each posts as post}
      <li>
        <a href={post.url}>
          {post.title}
        </a>
      </li>
    {/each}
  </ul>
  ```

- **Two-way data binding** (data can flow both up and down the component tree):

  ```svelte
  <!-- Whenever this input updates,
       firstName will change and vice versa. -->
  <input type="text" bind:value={firstName} />

  <!-- You can bind various attributes -->
  <input type="checkbox" bind:checked={agreesToTerms} />

  <!-- This ALSO works when passing component props! -->
  <MyComponent bind:someProp={someValue} />
  ```

- **Built-in [reusable data stores](https://svelte.dev/tutorial/writable-stores)** (think: a very light, simple version of Redux or Vuex)

- **Easy shorthands** for class binding, prop passing, and event modifiers (that I miss now when working with other frameworks):

  ```svelte
  <!-- Shorthand for class={current ? 'current' : ''} -->
  <a href="/contact" class:current>
    Contact
  </a>

  <!-- A nice shorthand for myProp={myProp} -->
  <SomeComponent {myProp} />

  <!-- No need for event.preventDefault() -->
  <!-- There are several other modifiers, too -->
  <button on:click|preventDefault={handleClick}>
    Click me!
  </button>
  ```


#### More about CSS in Svelte

Svelte's creator, Rich Harris, has been quoted as saying:

> A UI framework that doesn’t have a built-in way to add styles to your components is unfinished.

I'm inclined to agree.

To add styles to a component in Svelte, you simply add a `<style>` tag in the component's `.svelte` file. Any CSS inside it will be scoped to the component by default. If you like, you can make it SCSS with [minimal modification](https://kit.svelte.dev/docs#additional-resources-integrations).

```svelte
<style lang="scss">
  .some-class {
    /* These styles are scoped to the component */

    :global(.another-class) {
      /* These styles are global */
    }
  }
</style>
```

Or you prefer, you can make the entire tag global with the `global` attribute:

```svelte
<style lang="scss" global>
  /* All CSS here is global */
</style>
```

**One word of warning there, however:** global styles persist once loaded on the page. So if you have a `global` style tag in a component that only loads on a certain page, its styles will stick around after you've navigated to other pages.

<Callout>Even when dealing with automatically scoped styles, I've found it's a good idea to use a wrapping parent class selector anyway.</Callout>

Even when dealing with automatically scoped styles, I've found it's a good idea to use a wrapping parent class selector anyway. At worst it's redundant, and at best you've saved yourself from unintentional style leakage (either now or if you decide to un-scope the styles in the future).

---

If you'd like to read more about styling in Svelte, be sure to read [What I Like About Writing Styles with Svelte](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/) on CSS Tricks.

Personally, I could go on and on about how easy Svelte makes things, and how advanced yet simple it seems. Even [Svelte's docs and tutorial site](https://svelte.dev/tutorial/basics) is way ahead of the game; the whole thing is a live REPL (coding environment) where you can write your own Svelte code and see it running live!


### Differentiating Svelte from SvelteKit

Since frontend frameworks generally run entirely on JavaScript in the browser, they aren't ideal for much except building out pieces of interactive UIs; by nature, they're limited to the capabilities of JavaScript in the browser.

<Callout>A framework helps you build UIs; a meta-framework helps you build apps with that&nbsp;framework.</Callout>

Because of this, most popular frameworks have their own meta-framework: a tool that helps you build not just UI components, but entire _pages and apps_ with the framework in question.

React has [Next](https://nextjs.org/), Vue has [Nuxt](https://nuxtjs.org/), and Svelte has [SvelteKit](https://kit.svelte.dev/).

<SideNote>Interestingly enough, SvelteKit is the only meta-framework mentioned here developed by more or less the same maintainers of the core framework; Next and Nuxt are both built by independent enterprises.</SideNote>

Meta-frameworks bundle more tools and capabilities in with the underlying UI framework, so you can build just about anything. Most meta-frameworks include some combination of routing, data stores, layouts, image optimization, better SEO handling, data fetching, plugins—usually just about everything except a database.

A framework helps you build UIs; a meta-framework helps you build apps with that framework.

One particularly impressive meta-framework feature across the board: Next, Nuxt, and SvelteKit are _all_ capable of building your finished project as an app that utilizes server-side rendering, as a statically generated site, or as some combination of both.

In SvelteKit's case, this is accomplished through [adapters](https://kit.svelte.dev/docs#adapters), which process your code differently for whatever type of app and hosting you're targeting. SvelteKit adapters make it possible to generate your site for deployment as a traditional Node app, for serverless, or even as fully static files!


## Static SvelteKit vs. Gridsome

SvelteKit is a lot of fun to work in, but it isn't perfect. Most of what it lacks comes from its comparative youth, in my opinion, but as with anything, there were advantages and disadvantages to consider regardless.

Here's an interesting example:

The old homepage of this site (built with [Gridsome](https://gridsome.org)) was 1.9 MB transferred. By contrast, that number is only _200 kB_ on SvelteKit (most of which is font files)—a reduction of almost ***90%!***

**In fairness, however: there's a good reason the old site was that large to begin with**. Gridsome preloads all of your content as JSON data by default to make the site _feel_ faster as you navigate between pages. And I have to admit: the old version does _seem_ more snappy. Part of that is the preloading, of course, and some is because I decided to add some page transitions this time (something that didn't ever fully work well in Gridsome without a lot of fiddling).

<Callout>Any measurable metric will tell you the site is faster now, but it doesn't always <em>feel</em> faster, which makes for an interesting study in&nbsp;tradeoffs.</Callout>

It's tricky to measure the Gridsome site's weight _without_ preloading, but nearly as I can tell it's somewhere around 400 kB

This brings up some interesting questions about real vs. perceived performance. Any measurable metric will tell you the site is faster now, but it doesn't always _feel_ faster, which makes for an interesting study in tradeoffs. Navigating between pages is noticeably slower now. But on the other hand, I'm not sending the user megabytes of JavaScript they might not ever use, which users on slow connections and limited data plans likely appreciate.

Which is better? Ultimately, you'll need to evaluate your project's goals to answer that question. Personally: I feel better about shipping less JavaScript than I do reducing wait-after-click by a half second here and there. But it's an interesting question that will have different answers depending on your priorities and definition of success.

The builds with SvelteKit are also much faster: the production build of my Gridsome site ran about seven minutes, compared to about 90 seconds for the SvelteKit version (about five times faster). But again, this is misleading, for two reasons:

1. Gridsome was doing a lot of image work at build time that SvelteKit isn't by default; and

2. Gridsome uses Webpack under the hood, where SvelteKit utilizes [Vite](https://vitejs.dev/) (pronounced "veet").

One particularly nice thing about Gridsome was its built-in `<g-image>` component. Just by using it in place of the standard HTML `<img>` tag, Gridsome would compress your image, generated a resized, responsive source set, use lazy loading, ***and*** create blurred placeholder images.

By contrast, out of the box, SvelteKit does…nothing to help with images.

My website uses few enough images (which are already generally compressed) that I decided browser-native lazy loading was acceptable for now. Hopefully, SvelteKit will have a first-party image compression option in the near future. (And even if not, it's possible to rig that up directly through Vite.) But for now, the few solutions I tried didn't work particularly well, and the tradeoff didn't seem to be worthwhile.


### Why move away from Gridsome?

As you can see from just perusing the posts list on this blog, it wasn't all that long ago that I moved to Gridsome in the first place. I went to a [headless Gridsome frontend](/blog/a-new-headless-site-with-gridsome) just over a year ago, and converted the site to [fully static](/blog/goodbye-wordpress) barely seven months ago. I've already talked here about how nice its image handling is, and how fast it makes the site feel.

This naturally prompts the question: _why move in the first place_? At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.

There are a few answers to that question, but they all boil down to one phrase: Gridsome was meeting my needs, but not my wants.

I was a very early adopter of Gridsome, and at the time (in 2019), it still seemed to be regularly updated and headed towards a 1.0 release. But it's been almost exactly two years since the last minor version update of Gridsome ([version 0.7](https://gridsome.org/blog/2019/09/17/gridsome-v07/)), and at this point, it doesn't seem like it's an actively maintained project any longer. I don't know if it will ever reach 1.0 or not. I certainly wouldn't begrudge the creators for at all abandoning it during the pandemic.

<Callout>At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about&nbsp;it.</Callout>

Regardless, Gridsome didn't ever really feel _complete_ to me. It was a wonderful way to generate a speedy, static site with Vue (and GraphQL!), but its nascence showed at times. (Granted, SvelteKit is still pre-1.0 as well. But it seems to have a much bigger and more active team behind it.)

I've already mentioned [Gridsome's image handling](https://gridsome.org/docs/images/), for example, which feels absolutely _magical_—but it also only worked in certain cases unless you modified the Webpack config (no, thank you).

<Callout>Gridsome was meeting my needs, but not my wants.</Callout>

Page transitions also required enough swimming upstream as to make them not particularly worthwhile. And there was more than once that I spent a day or two fighting with NPM and the node\_modules folder, unable to even _run_ the site on my machine. (That's more to do with the packages Gridsome relies on than Gridsome itself, but still; the frustration is the same.)

Another reason: this site, like any side project, is to enjoy. This site in particular is the one little corner of the internet that's truly mine, where I can do whatever I want for whatever reason I want.

When I was writing this site in Gridsome, my list of Vue projects was fairly small, which made the appeal of having a "Vue garden," let's say, more appealing. Now I have [Quina](https://quina.app/) and several others, though, and it doesn't feel like I _need_ a site in Vue anymore—especially since my _job_ isn't in Vue anymore.

Maybe the fact that I've been working professionally with Vue for the last two years is part of it, too. I feel I've scratched that itch, for the most part, at least for right now. I still love Vue dearly and will almost certainly pick it back up to write a project in Vue 3 one day in the near future. But silly as it sounds, for right now: I want a different thing to play with. That's just how my brain works (or doesn't, depending on your point of view), and I've found there's no use fighting it.

Finally, [TypeScript](https://www.typescriptlang.org) has first-class support in SvelteKit. I'm relatively new to TypeScript and have somewhat mixed feelings on it at this scope (I think it mainly shines on larger projects with multiple contributors), but I've been working on involving it more in my workflows to get better at it. At this point, close to 100% of this site's JS is typed, so I've given it a good shot at least.


#### What other options were considered?

To some degree, I considered both [Astro](https://astro.build/) and [Eleventy](https://www.11ty.dev/) for this overhaul, and you could make reasonable arguments that either one would've been better suited for the task. If my goal had just been to build the fastest statically generated site possible with absolutely minimal JavaScript, I no doubt would've gravitated towards one of these tools.

But again: this is my personal site, and so the tool I _like_ the most is an important factor. So while SvelteKit might arguably be a little overkill, personally, I think it's the most fun.




## What to know about SvelteKit

As of this writing, SvelteKit is still in pre-1.0 status. It seems very stable to me, and Svelte itself is definitely solid. But there are still some portions of the Kit that aren't fleshed out yet. I found the static rendering to be extremely good, but as mentioned, SvelteKit can do a _lot_ more than that. Depending on what you're building and what features you're most interested in, it may be worth spending some time to make sure SvelteKit is in good shape to handle your task, and works as expected with your deploy target.


### The community argument

<Callout>When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework.</Callout>

When comparing Svelte (or any newer framework) with the larger, more established players, arguments against adoption often point to community size. Where React, Vue, Angular, etc. all have large ecosystems, Svelte can seem comparatively small. So, when you need to reach for additional packages to handle things beyond the main framework's capabilities, the argument goes, you may be left in the lurch.

I'd like to put some context around that argument:

1. **You don't often _need_ packages with Svelte.** When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework. 

  Svelte is much closer to the plain HTML, CSS and JavaScript of the web, which means it's simpler to adopt _any_ JavaScript package for use in a Svelte app. Plus, many of the features you'd need a package for in other frameworks come baked in;. (Goodbye, Styled Components and Framer Motion.)

2. **Svelte is extremely compatible with vanilla JavaScript packages.** This means that while, yes, Svelte's ecosystem of packages and plugins is comparatively small, it can often benefit from and easily use _any_ framework-agnostic package—which is a pretty massive portion of the packages out there.

3. **Even when you _do_ need to build something yourself, SvelteKit makes it comparatively simple.** One example: previously, I was using an RSS plugin with Gridsome, but no such package exists for SvelteKit.

  A quick web search, however, was all it took to find a very easy way to code my own XML feed endpoint in minutes, with no dependencies, in under 40 lines of code.


### Svelte's ecosystem can be difficult to search

One other thing to know at this point in SvelteKit's existence is that it's actually the _second_ stab at a Svelte meta-framework; [Sapper](https://sapper.svelte.dev/) was the first.

Sapper never seemed as big as SvelteKit does now, but it's been deprecated in favor of SvelteKit, and there's still some confusion that arises when searching online for code solutions in the space.

SvelteKit doesn't always work exactly the same as Svelte _or_ Sapper by default (That's because Svelte and Sapper both have a Rollup config—Rollup being the bundler that powers Svelte—where SvelteKit has its own config file). So a lot of the examples and answers you come across are likely to either need some syntax adjustment, or just not work exactly as expected.