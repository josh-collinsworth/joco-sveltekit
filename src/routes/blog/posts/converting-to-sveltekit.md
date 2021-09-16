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
  
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

Let's be honest: lots of things in web development are harder than they should be. Some days, it can seem as though everything in the frontend world is needlessly over-engineered and convoluted.

That's what makes [Svelte](https://svelte.dev/) seem like such a breath of fresh air.


## What is Svelte?

**Svelte is JavaScript framework akin to [React](https://reactjs.org), [Vue](https://vuejs.org), or any other component-based frontend framework**. Svelte is the newest of the big names in the space, however, and it definitely seems as though it's learned from the others, both on the dev side and the user side. (More on that in a bit.)

As in any of these frameworks, you use Svelte to build components, which are then the building blocks for your user interface (UI). As events happen and state and data change, the Svelte component(s) automatically update to reflect the changes in the UI.

Front-end frameworks are in demand for their ability to keep data in sync. Since they run entirely on JavaScript in the browser, however, they aren't ideal for much except single-page applications on their own. Front-end frameworks alone can't do things like persist data between pages or run server-side tasks like fetching files, for example.

**To bridge that gap, Svelte has [SvelteKit](https://kit.svelte.dev/).**

<Callout>Svelte is React, but without the bullshit.</Callout>

You could think of SvelteKit as the [Next](https://nextjs.org/) (or [Nuxt](https://nuxtjs.org/)) of Svelte. If you're not familiar: those are examples of what are sometimes caled "meta-frameworks." Where React is a framework that helps you build with JavaScript, Next is a framework that helps you build with React.

Meta frameworks are larger toolboxes for building full-fledged apps and sites, and include many of the pieces you'd need for a non-trivial project missing in front-end frameworks, like page routing, data stores, better control over SEO, and in some cases, image handling and APIs—usually just about everything except the database.

So as you'd use a front-end framework like Svelte to build a small user interface or a single-page application, you can use a meta-framework like SvelteKit to build just about anything.

<Callout class="former-highlight">So as you'd use a front-end framework like Svelte to build a small user interface or a single-page application, you can use a meta-framework like SvelteKit to build just about anything.</Callout>

**One particularly nice thing about SvelteKit is that its output can be whatever you want.** It can function as a static site generator (as it does in my case), but it's also capable of generating apps with server-side rendering, or a mixture of server-side and static, or even full-fledged Node apps.

This is possible because SvelteKit offers several [adapters](https://kit.svelte.dev/docs#adapters) to process your input differently, depending on what your end goal is. Same input; whatever output you like!


## Why Svelte, specifically?

There's been a lot of buzz about Svelte lately, but I'd like to think I was a _little_ early to board the hype train. I first started exploring Svelte a couple of years ago, just after version 3 was released. (Ok, that's not exactly _early_, but it's a long time ago in web land.)

I instantly loved how easy Svelte made _everything_ I wanted to do (especially compared to React). I was consistently and pleasantly surprised how _little_ code I needed to do things in Svelte—and how close it was to the JavaScript, HTML and CSS I already knew. 

Just about everywhere I'd normally be reaching for a workaround or stumbling into a gotcha when using another framework, Svelte just felt delightfully straightforward.

<Callout class="former-highlight">Just about everywhere I'd normally be reaching for a workaround or stumbling into a gotcha when using another framework, Svelte just felt delightfully straightforward.</Callout>

<Callout>Svelte has always felt <em>way</em> ahead of&nbsp;the&nbsp;game.</Callout>

Svelte has always felt _way_ ahead of the game. (Or, maybe more accurately, like it's learned from the mistakes of other frameworks). Reactivity is built-in. There's no virtual DOM. It has (scoped) component CSS built-in. Writing it is simple, and—maybe best of all—the eventual finished product will almost certainly be _far smaller_ than the same thing built with a different framework (often by orders of magnitude.)


### Comparing Svelte to React and Vue

At a basic level, Svelte is extremely similar to React, Vue, and other front-end frameworks; they're, component-based, state-driven JavaScript frameworks. (Or libraries, if you want to split that particular hair.) They all allow you to nest components, pass props, and handle events. All three (and more) are fully capable of doing the same jobs.

Maybe the most contrived way to demonstrate a front-end framework's style and capabilities is a button component that counts how many times it's been clicked, and updates accordingly. It's the "hello world" of component examples:

![Demonstrating a button that increments when clicked](/images/post_images/hello-world-button.gif)

**It's not a particularly practical example, but it _is_ a common one** (in fact, it's one of the first examples in [the official Svelte docs](https://svelte.dev/docs)), because it's an effective way to demonstrate the bread and butter of front-end frameworks: make a small component to track your state (the count), and whenever something causes the state to change (the click), update the UI (the button) automatically.

Let's start with how to do this simple example in React, where you'd put the button in its own `.jsx` file:

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
      Button has been clicked {count} times.
    </button>
  )
}
```

<SideNote>You could also do this same thing with React's old class-based syntax, but it's being more or less phased out, so it doesn't seem worth going into here.</SideNote>

Here's the same thing in Vue 2, in a `.vue` component file:

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
    Button has been clicked {{ count }} times.
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
    Button has been clicked {{ count }} times.
  </button>
</template>
```

Now that we've gotten a glimpse of how the established players approach this comparatively simple component, let's look at how to do the same thing in a `.svelte` component file:

```svelte
<!-- CounterButton.svelte -->
<script>
	let count = 0

	const incrementCount = () => {
		count += 1
	}
</script>

<button on:click={incrementCount}>
  Button has been clicked {count} times.
</button>
```

Some key differences to point out between the Svelte version and the others:

- **Svelte is reactive by default.** React and Vue both require you to do something special to initialize and update reactive variables.
- **The Svelte version is the shortest**, both in terms of line count and character count. While this isn't necessarily meaningful on its own, shorter code _does_ tend to be less error-prone and more readable.
- **Svelte doesn't require you to import or export anything.** (Some features of Svelte do, but its basic component functionality is all available out of the box.)
- **There's no framework-specific JavaScript.** While Svelte _does_ have its own syntax in some cases (like the `on:click` in the example above and some others), it stays just about as close as possible to vanilla HTML and CSS.
- **Svelte isn't picky about HTML.** React needs a `return` with a single element, and Vue needs a single `<template>` tag wrapping all the markup. Svelte can have whatever HTML, wherever (and in its original state, unlike in JSX).

While the above examples don't cover them, some other features of Svelte that I love include:

- Scoped CSS by default;
- Logic and loops available inside of markup (unlike JSX), without requiring an element (unlike Vue);
- Two-way binding
- Built-in reusable data stores

I could go on and on about how easy Svelte makes things, and how advanced yet simple it seems. [Svelte's docs and tutorial](https://svelte.dev/tutorial/basics) is way ahead of the game; the whole thing is a live REPL (coding environment) where you can write your own Svelte code and see it running live!


### Svelte performance

Svelte is a _ton_ of fun to work in, but developer experience isn't everything (and no, developer experience does _not_ translate directly into user experience). Fortunately, though, Svelte's UX _is_ top-notch because the code it actually ships to the browser is _miniscule_ compared with other frameworks.

This is because Svelte does as much as possible _during the build step_, rather than on the client. Parts of the framework that are not used are stripped out at build time, and only the minimal JS needed to make your site and its components work is bundled. (Compared to other frameworks, which ship an entire library as a runtime, no matter how much of it you're actually using.)

As a comparison: the old homepage of this site (built with [Gridsome](https://gridsome.org)) was 1.6 MB transferred, compared with only _183 KB_ on this site—a reduction of almost ***90%!***


#### Tradeoffs

In fairness, **there's a good reason the old site was that large to begin with**: Gridsome preloads all of your content as JSON data by default to make the site _feel_ faster as you navigate between pages. And I have to admit: the old version does _seem_ more snappy. Part of that is the preloading, of course, and some is because I decided to add some page transitions this time (something that didn't ever fully work well in Gridsome without a lot of fiddling).

<Callout>Any measurable metric will tell you the site is faster now, but it doesn't always <em>feel</em> faster, which makes for an study in tradeoffs.</Callout>

That brings up some interesting questions about real performance vs. perceived performance. Any measurable metric will tell you the site is faster now, but it doesn't always _feel_ faster, which makes for an study in tradeoffs. Navigating between pages has a noticeable lag now in some cases. But on the other hand, I'm not sending the user megabytes of JavaScript they might not ever use, which users on slow connections and limited data plans likely appreciate.

The builds with SvelteKit are also much faster (the production build of my Gridsome site ran about seven minutes, compared to about 90 seconds for the SvelteKit version), but again, this is misleading; SvelteKit is simply doing less with images.

Where Gridsome compressed image files, generated resized images for responsive source sets, and lazy loaded using placeholder images, SvelteKit is doing…nothing.

My website uses few enough images (which are already generally compressed) that I decided browser-native lazy loading was acceptable for now. Hopefully, SvelteKit will have a first-party image compression option in the near future, but for now, the few I tried didn't work particularly well, and the tradeoff didn't seem to be worthwhile.

Ultimately, I feel better about shipping less JavaScript than I do reducing wait-after-click by a half second here and there. But it's an interesting question that will have different answers depending on the circumstance.


## Why move away from Gridsome?

As you can see from just perusing the posts list on this blog, it wasn't all that long ago that I moved to Gridsome in the first place. I went to a [headless Gridsome frontend](/blog/a-new-headless-site-with-gridsome) just over a year ago, and converted the site to [fully static](/blog/goodbye-wordpress) barely seven months ago.

This naturally prompts the question: _why move in the first place_?

At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.

<Callout class="former-highlight">At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.</Callout>

I was a very early adopter of Gridsome, and at the time (in 2019), it still seemed to be regularly updated and headed towards a 1.0 release. But it's been almost exactly two years since the last minor version update of Gridsome (0.7), and at this point, it doesn't seem like it's an actively maintained project any longer. I don't know if it will ever reach 1.0 or not. I certainly wouldn't begrudge the creators for at all abandoning it during the pandemic.

Regardless, Gridsome didn't ever really feel _complete_ to me. It was a wonderful way to generate a speedy, static site with Vue (and GraphQL!), but its nascence showed at times.

[Gridsome's image handling](https://gridsome.org/docs/images/), for example, was absolutely _magical_, but it also only worked in certain cases unless you modified the Webpack config (no, thank you). Page transitions also required enough swimming upstream as to make them not particularly worthwhile. And there was more than once that I spent a day or two fighting with NPM and the node\_modules folder, unable to even _run_ the site on my machine.

On top of all this, I stopped using Vue in my day job in July, which (for some reason) made it feel less important to keep a foot in the Vue world.

Long story short: I wasn't feeling the love I had for Gridsome reciprocated after two years without an update, and I was ready to try something new.

Granted, SvelteKit is still pre-1.0 as well. But it seems to have a much bigger and more active team behind it, and the hype is there for good reason.

Also, [TypeScript](https://www.typescriptlang.org) has first-class support in SvelteKit. I'm relatively new to TypeScript and have somewhat mixed feelings on it at this scope (I think it mainly shines on larger projects with multiple contributors), but I've been working on involving it more in my workflows to get better at it.


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