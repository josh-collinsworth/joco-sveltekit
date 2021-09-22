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
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

Let's be honest: lots of things in web development are harder than they should be. Some days, it can seem as though everything in the frontend world is needlessly over-engineered and convoluted.

That's what makes [Svelte](https://svelte.dev/) seem like such a breath of fresh air.



## What is Svelte?

**Svelte is a JavaScript framework akin to [React](https://reactjs.org), [Vue](https://vuejs.org), or any other component-based frontend framework**. Svelte is the newest of the big names in the space, however, and it definitely seems as though it's learned from the others, both on the dev side and the user side. (More on that in a bit.)

As in any of these frameworks, you use Svelte to build components, which are then the building blocks for your user interface (UI). As events happen and state and data change, the Svelte component(s) automatically update to reflect the changes in the UI.

My favorite cheeky way to describe Svelte is: it's React, but without the bullshit.

---

Front-end frameworks are in demand for their ability to keep data in sync. Since they run entirely on JavaScript in the browser, however, they aren't ideal for much except single-page applications on their own. Front-end frameworks alone can't do things like persist data between pages or run server-side tasks like fetching files, for example.

**To bridge that gap, Svelte has [SvelteKit](https://kit.svelte.dev/).**

<Callout>My favorite cheeky way to describe Svelte is: it's React, but without the&nbsp;bullshit.</Callout>

You could think of SvelteKit as the [Next](https://nextjs.org/) (or [Nuxt](https://nuxtjs.org/)) of Svelte. If you're not familiar: those are examples of what are sometimes caled "meta-frameworks." Where React is a framework that helps you build with JavaScript, Next is a framework that helps you build with React.

Meta frameworks are larger toolboxes for building full-fledged apps and sites, and include many of the pieces you'd need for a non-trivial project missing in front-end frameworks, like page routing, data stores, better control over SEO, and in some cases, image handling and APIs—usually just about everything except the database.

So as you'd use a front-end framework like Svelte to build a small user interface or a single-page application, you can use a meta-framework like SvelteKit to build just about anything.

**One particularly nice thing about SvelteKit is that its output can be whatever you want.** It can function as a static site generator (as it does in my case), but it's also capable of generating apps with server-side rendering, a mixture of server-side and static, or even full-fledged Node apps.

This is possible because SvelteKit offers several [adapters](https://kit.svelte.dev/docs#adapters) to process your input differently, depending on what your end goal is. Same input; whatever output you like!



## Why Svelte, specifically?

There's been a lot of buzz about Svelte lately, but I'd like to think I was a _little_ early to board the hype train. I first started exploring Svelte a couple of years ago, just after version 3 was released. (Ok, that's not exactly _early_, but it's a long time ago in web land.)

I instantly loved how easy Svelte made _everything_ I wanted to do (especially compared to React). I was consistently and pleasantly surprised how _little_ code I needed to do things in Svelte—and how close it was to the JavaScript, HTML and CSS I already knew. 

Just about everywhere I'd normally be reaching for a workaround or stumbling into a gotcha when using another framework, Svelte just felt delightfully straightforward.

<Callout>Just about everywhere I'd normally be reaching for a workaround or stumbling into a gotcha when using another framework, Svelte just felt delightfully&nbsp;straightforward.</Callout>

**Svelte has always felt _way_ ahead of the game.** (Or, maybe more accurately, like it's learned from the mistakes of other frameworks). Reactivity is built-in. There's no virtual DOM. It has (scoped) component CSS built-in. Writing it is simple, and—maybe best of all—the eventual finished product will almost certainly be _far smaller_ than the same thing built with a different framework (often by orders of magnitude.)



### Comparing Svelte to React and Vue

At a basic level, Svelte is extremely similar to React, Vue, and other front-end frameworks; they're, component-based, state-driven JavaScript frameworks. (Or libraries, if you want to split that particular hair.) They all allow you to nest components, pass props, and handle events. All three (and more) are fully capable of doing the same jobs.

#### Build vs. Browser

The _main_ difference between Svelte and the others is that Svelte moves as much work as it can to the _build_ step, when the code is compiled, rather than running client-side. That's why Svelte has been referred to as "a framework without the framework."

<Callout>To make a site using a framework, you need to load and run that framework in the browser. Not so with Svelte.</Callout>

To elaborate: Vue and React both run _in_ the browser. They're frameworks that you can load like any other external script (e.g., jQuery) and then use to execute whatever code you write. (You'll probably use a build tool to reduce their bundle size to a certain point, but to some extent at least, you're shipping the framework.)

To make a site using a framework, you need to load and run that framework in the browser. Not so with Svelte.

With Svelte, by the time you get to the browser, the framework itself has been removed by the compiler. Svelte ships only the tiniest bit of runtime; all your framework code has been transformed into minimal vanilla JavaScript before a user ever sees it.

<SideNote>This approach means there's a certain tipping point at which building with frameworks is actually <em>more</em> efficient, size-wise. However, most apps are very unlikely to hit that scale; here's <a href="https://github.com/halfnelson/svelte-it-will-scale/blob/master/README.md" rel="external">a comparison of React and Svelte bundle size scaling</a>.</SideNote>


#### Authoring Components

Maybe the most contrived way to demonstrate a front-end framework's style and capabilities is a button component that counts how many times it's been clicked, and updates accordingly. It's the "hello world" of component examples. 

**Here's a demo** of what I mean:

<CounterButton />

As you click the button, the count increases, and the _display_ of the count updates accordingly.

**It's not a particularly practical example, but it _is_ a common one** (in fact, it's one of the first examples in [the official Svelte docs](https://svelte.dev/docs)), because it's an effective way to demonstrate the bread and butter of front-end frameworks: make a small component to track your state (the count), and whenever something causes the state to change (the click), automatically update the UI (the button).

Let's start with how to do this simple example in React, where you'd put the button in its own `.jsx` file:

<SideNote>I'll be using arrow functions in the examples below just because I like them, but they aren't required.</SideNote>

```jsx
// CounterButton.jsx
import React, { useState } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={incrementCount}>
      This button's been clicked {count} times.
    </button>
  )
}
```

As you can see even if you aren't familiar with React, it requires you to import its `useState` function and create some new values from it in order to set and update a reactive `count` variable. It's not a _lot_, but it isn't exactly simple, either.

<SideNote>You could also do this same thing with React's old class-based syntax, but it's not used much anymore, so I won't go into that here.</SideNote>

For contrast, here's the same thing in Vue 2, in a `.vue` component file:

```vue
<!-- CounterButton.vue -->
<script>
  export default {
    data: () => ({
      count: 0
    }),

    methods: {
      incrementCount() {
        this.count += 1
      }
    }
  }
</script>

<​template>
  <button @click="incrementCount">
    This button's been clicked {{ count }} times.
  </button>
</template>
```

Or, if you prefer, here's the Vue 3 composition API version (using the new `setup` script syntactic sugar from Vue 3.2+):

```vue
<!-- CounterButton.vue -->
<script setup>
  import { ref } from 'vue'

  const count = ref(0)

  const incrementCount = () => {
    count.value += 1
  }
</script>

<​template>
  <button @click="incrementCount">
    This button's been clicked {{ count }} times.
  </button>
</template>
```

Which flavor of Vue you like is mainly down to personal preference, but in both cases, similarly to React: there are framework-specific conventions around how you must set and update reactive values.

Now that we've gotten a glimpse of how the established players approach this comparatively simple component, let's look at how to do the same thing in a Svelte component file:

```svelte
<!-- CounterButton.svelte -->
<script>
	let count = 0

	const incrementCount = () => {
		count += 1
	}
</script>

<button on:click={incrementCount}>
  This button's been clicked {count} times.
</button>
```

There are some key differences I'd like to point out between the Svelte version and the others:

- **Svelte is reactive by default**. (_This means when a variable changes, every place it's used updates automatically, as in the button text above. Again, React and Vue both require you to explicitly initialize reactive variables_.)

- **The Svelte version is the shortest**, both in terms of line count and character count. While this isn't necessarily meaningful on its own, shorter code _does_ tend to be less error-prone and more readable.

- **Svelte doesn't require you to import or export anything.** (Some features of Svelte do, but its basic component functionality is all available out of the box.)

- **There's no framework-specific JavaScript.** While Svelte _does_ have its own syntax in some cases (like the `on:click` in the example above and some others), it stays just about as close as possible to vanilla HTML and CSS.

- **Svelte isn't picky about HTML.** React needs a `return` with a single element, and Vue needs a single `<template>` tag wrapping all the markup. Svelte can have whatever HTML, wherever (and in its original state, unlike in JSX).

##### Other Reasons to Love Svelte

While the above examples don't cover them, some other features of Svelte that I love include:

- **Everything lives together in one file.** Similar to `.vue` files, `.svelte` files keep all your component's logic, markup _and_ styles all together (_as opposed to React, which is aggravatingly "unopinionated" about CSS_).

- **Scoped CSS by default** (_more on Svelte CSS in the next section_).

- **[Transitions and animations baked-in](https://svelte.dev/tutorial/transition)**. A robust built-in API means there's no need to reach for an external library or hand-code visual transformations.

- **You can write logic directly in the markup** (unlike JSX), without tying logic to an HTML element (unlike Vue):

  ```svelte
  <!-- Svelte logic -->
  <p class="greeting">
    {#if age >= 21}
      Welcome! Would you care for a drink?
    {:else if age > 8}
      Welcome! How about some lemonade?
    {:else}
      Would you like to see the kid's menu?
    {/if}
  </p>
  ```

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


#### More About CSS in Svelte

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

---

I could go on and on about how easy Svelte makes things, and how advanced yet simple it seems. Even [Svelte's docs and tutorial site](https://svelte.dev/tutorial/basics) is way ahead of the game; the whole thing is a live REPL (coding environment) where you can write your own Svelte code and see it running live!



## Static SvelteKit vs. Gridsome

Svelte(Kit) is a _ton_ of fun to work in, but it isn't perfect. Most of what it lacks comes from its comparative youth, in my opinion, but as with anything, there were advantages and disadvantages to consider when making the switch from Gridsome to SvelteKit.


### Tradeoffs

As mentioned, the bundle that Svelte ships to the browser will generally be significantly smaller than that of other frameworks—often by orders of magnitude.

As a comparison: the old homepage of this site (built with [Gridsome](https://gridsome.org)) was 1.6 MB transferred, compared with only _183 KB_ on this site—a reduction of almost ***90%!***

**In fairness, however: there's a good reason the old site was that large to begin with**. Gridsome preloads all of your content as JSON data by default to make the site _feel_ faster as you navigate between pages. And I have to admit: the old version does _seem_ more snappy. Part of that is the preloading, of course, and some is because I decided to add some page transitions this time (something that didn't ever fully work well in Gridsome without a lot of fiddling).

<Callout>Any measurable metric will tell you the site is faster now, but it doesn't always <em>feel</em> faster, which makes for an interesting study in&nbsp;tradeoffs.</Callout>

That brings up some interesting questions about real vs. perceived performance. Any measurable metric will tell you the site is faster now, but it doesn't always _feel_ faster, which makes for an interesting study in tradeoffs. Navigating between pages is noticeably slower now. But on the other hand, I'm not sending the user megabytes of JavaScript they might not ever use, which users on slow connections and limited data plans likely appreciate.

Ultimately, I feel better about shipping less JavaScript than I do reducing wait-after-click by a half second here and there. But it's an interesting question that will have different answers depending on the project.


#### Images

The builds with SvelteKit are also much faster (the production build of my Gridsome site ran about seven minutes, compared to about 90 seconds for the SvelteKit version), but again, this is misleading; Gridsome was doing a lot of image work at build time that SvelteKit isn't by default.

One particularly nice thing about Gridsome is how it compressed image files, generated resized images for responsive source sets, used lazy loading, created placeholder images, and adjusted your markup to take advantage of all of those features—all pretty much automatically.

By contrast, out of the box, SvelteKit doesn't do anything to help with images.

My website uses few enough images (which are already generally compressed) that I decided browser-native lazy loading was acceptable for now. Hopefully, SvelteKit will have a first-party image compression option in the near future, but for now, the few I tried didn't work particularly well, and the tradeoff didn't seem to be worthwhile.


#### Plugins

One other interesting tradeoff at this point in SvelteKit's existence is the confusion between Svelte, [Sapper](https://sapper.svelte.dev/), and SvelteKit.

Sapper was essentially the first iteration of SvelteKit. The team felt they could build a better product from scratch, and so they did, and Sapper was deprecated.

Sapper never seemed as big as SvelteKit does now, but there's still some confusion that arises when searching for code solutions; SvelteKit doesn't work exactly the same as Svelte _or_ Sapper by default (because Svelte/Sapper have a Rollup config, where SvelteKit wraps that in a kit config file). So a lot of the examples and answers you come across are likely to either need some syntax adjustment, or just not work exactly as expected.


### Why move away from Gridsome?

As you can see from just perusing the posts list on this blog, it wasn't all that long ago that I moved to Gridsome in the first place. I went to a [headless Gridsome frontend](/blog/a-new-headless-site-with-gridsome) just over a year ago, and converted the site to [fully static](/blog/goodbye-wordpress) barely seven months ago. I've already talked here about how nice its image handling is, and how fast it makes the site (seem, at least).

This naturally prompts the question: _why move in the first place_? At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.

**The tl;dr is: Gridsome stopped progressing.**

I was a very early adopter of Gridsome, and at the time (in 2019), it still seemed to be regularly updated and headed towards a 1.0 release. But it's been almost exactly two years since the last minor version update of Gridsome ([version 0.7](https://gridsome.org/blog/2019/09/17/gridsome-v07/)), and at this point, it doesn't seem like it's an actively maintained project any longer. I don't know if it will ever reach 1.0 or not. I certainly wouldn't begrudge the creators for at all abandoning it during the pandemic.

<Callout>At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about&nbsp;it.</Callout>

Regardless, Gridsome didn't ever really feel _complete_ to me. It was a wonderful way to generate a speedy, static site with Vue (and GraphQL!), but its nascence showed at times. (Granted, SvelteKit is still pre-1.0 as well. But it seems to have a much bigger and more active team behind it.)

[Gridsome's image handling](https://gridsome.org/docs/images/), for example, was absolutely _magical_, but it also only worked in certain cases unless you modified the Webpack config (no, thank you). Page transitions also required enough swimming upstream as to make them not particularly worthwhile. And there was more than once that I spent a day or two fighting with NPM and the node\_modules folder, unable to even _run_ the site on my machine. (That's more to do with the packages Gridsome relies on than Gridsome itself, but still; the frustration is the same.)

Speaking of which: running Gridsome locally wasn't slow exactly, but it wasn't fast, either. Getting the dev server up and running took about 20–30 seconds. By contrast, SvelteKit—which is built on top of the much speedier Vite—is ready about as fast as I can click over to my browser. Vite's boot-up time is seriously near instantaneous.

Another reason (while probably a silly one): a big part of the reason I maintain side projects is for my own enjoyment. I like tinkering with them. When I was writing this site in Gridsome, my list of Vue side projects was fairly small. Now I have [Quina](https://quina.app/) and a whole bunch of others, and it doesn't feel like I _need_ a site in Vue anymore—especially since my _job_ isn't in Vue anymore. It feels like I've had all the Vue I need right now. I'm ready to play with the next thing. That's probably silly, but it's how my brain works, and I've found there's no use fighting it.

Finally, [TypeScript](https://www.typescriptlang.org) has first-class support in SvelteKit. I'm relatively new to TypeScript and have somewhat mixed feelings on it at this scope (I think it mainly shines on larger projects with multiple contributors), but I've been working on involving it more in my workflows to get better at it.



### Other options besides SvelteKit

There were three other options I considered to some degree: [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), and [Gatsby](https://www.gatsbyjs.com/).


#### Astro
I had just used Astro for another WordPress-to-static migration project, and while it worked well, it's also _very_ early days for the framework. I loved how easy Astro made working with Markdown files, and how it defaulted to zero JS builds. But I also ran into some pretty unexpected issues with Astro and wound up filing some bug reports. I think it needs to mature a bit, but I'll definitely keep it on my radar, especially for projects that need to ship absolutely minimal JS and/or that just need Markdown support, as Astro's flexibility is very nice.


#### Eleventy
I tinkered with Eleventy on that same project, and have given it a shot a few times before, but ultimately, Eleventy is just a bit more minimalist than I prefer. I see the benefit; you never have to fight the framework or deal with surprises when you're configuring everything yourself from the get-go. But that's more than I wanted to do in this case, and I'm generally not a fan of, say, bringing my own CSS processing to the party.

I definitely get why some people love Eleventy (and am generally a fan of [Zach Leatherman](https://www.zachleat.com/), Eleventy creator and good human). I may come back to it one day, when the project is right and/or when my project configuration preferences are particular enough to tip the balance in Eleventy's favor. But for right now, it was just a little too much of an uphill climb to start with for me.


#### Gatsby
Gatsby was the last consideration, but also the least serious. The only real reason it even made the list was that I'm working for a React shop for the first time now, and while I do _know_ React, it's been a good two or three years since I used it on any serious projects. 

I thought it might be valuable to get hands-on with React again via Gatsby, but after a little consideration I decided:

1. The _only_ reason I would be using Gatsby was for React experience;
2. Gatsby !== React; and
3. Since this is my personal project, I should enjoy it. And honestly, I don't enjoy React as much as other frameworks (I think largely because of the JSX dependency).


## What to Know About SvelteKit

As of this writing, SvelteKit is still in pre-1.0 status. It seems very stable to me, and Svelte itself is definitely solid. But there are still some portions of the Kit that aren't fleshed out yet. I found the static rendering to be extremely good, but as mentioned, SvelteKit can do a _lot_ more than that. Depending on what you're building and what features you're most interested in, it may be worth spending some time to make sure SvelteKit is in good shape to handle your task, and works as expected with your deploy target.


### The Community Argument

<Callout>When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework.</Callout>

When comparing Svelte (or any newer framework) with the larger, more established players, arguments against adoption often point to community size. Where React, Vue, Angular, etc. all have large ecosystems, Svelte can seem comparatively small. So, when you need to reach for additional packages to handle things beyond the main framework's capabilities, the argument goes, you may be left in the lurch.

I'd like to put some context around that argument:

1. **You don't often _need_ packages with Svelte.** When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework. 

  Svelte is much closer to the plain HTML, CSS and JavaScript of the web, which means it's simpler to adopt _any_ JavaScript package for use in a Svelte app. Plus, many of the features you'd need a package for in other frameworks come baked in;. (Goodbye, Styled Components and Framer Motion.)

2. **Svelte is extremely compatible with vanilla JavaScript packages.** This means that while, yes, Svelte's ecosystem of packages and plugins is comparatively small, it can often benefit from and easily use _any_ framework-agnostic package—which is a pretty massive portion of the packages out there.

3. **Even when you _do_ need to build something yourself, SvelteKit makes it comparatively simple.** One example: previously, I was using an RSS plugin with Gridsome, but no such package exists for SvelteKit.

  A quick web search, however, was all it took to find a very easy way to code my own XML feed endpoint in minutes, with no dependencies, in under 40 lines of code.