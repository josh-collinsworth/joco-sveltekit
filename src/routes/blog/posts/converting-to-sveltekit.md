---
title: 'Converting to SvelteKit'
date: '2021-10-01'
updated: '2021-10-01'
categories:
  - 'javascript'
  - 'svelte'
  - 'web'
coverImage: 'EQ0-F2nXUAEpgCx.jpeg'
excerpt: I've been a fan of Svelte for years, but never had the opportunity to use it on a serious project before. So when I learned SvelteKit could do static rendering, it seemed like the perfect time.
---

<script>
  import Highlight from '$lib/components/Highlight.svelte'
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

Let's be honest: lots of things in web development are harder than they should be. Some days, it can seem as though everything in the frontend world is needlessly over-engineered and convoluted.

That's what makes [Svelte](https://svelte.dev/) seem like such a breath of fresh air.


## What is Svelte?

Svelte could be considered a JavaScript framework akin to React, Vue, Ember or Angular. It's the newest of the bunch, however, and it seems as though it's definitely learned from the others; its code tends to be the least verbose, and its output tends to be the smallest (which is good for performance; more on that in a bit).

Svelte itself, much like the other frameworks above, is mostly just a view library, not ideal for much except single-page applications on its own. But just as React has Next and Vue has Nuxt, however, Svelte has [SvelteKit](https://kit.svelte.dev/). 

SvelteKit, Next, etc., are what's often called a "meta-framework." They take the underlying framework (Svelte, React, etc.) and add many of the other pieces you'd need for a website or app, like pages and routing, data stores, better control over SEO, and in some cases, image handling.


## Why Svelte?

There's been a lot of buzz about Svelte lately, but I'd like to think I was a _little_ early to board the Svelte hype train. I first started exploring it a couple of years ago, just after version 3 was released. (Ok, that's not exactly _early_.)

I was surprised from the get-go how easy Svelte made _everything_ I wanted to do (especially compared to React). I was working in both React and Vue at the time, and I was consistently and pleasantly surprised how _little_ code I needed to do things in Svelte—and how close it was to the JavaScript, HTML and CSS I already knew. All the things other frameworks needed workarounds for, Svelte just had available and delightfully simple right out of the box.

It felt like Svelte was _way_ ahead of the game (or, perhaps more accurately, had learned from the mistakes of other frameworks). Reactivity was built-in. There was no virtual DOM. It had (scoped) component CSS built-in. Writing it was easy, and—maybe best of all—the eventual finished product would almost certainly be _way smaller_ than the same thing built with a different framework (often by orders of magnitude.)

Take the standard counter example, for instance:

```svelte
<!-- Counter.svelte -->
<script>
	let count = 0;

	const incrementCount = () => {
		count += 1;
	};
</script>

<button on:click={incrementCount}>
  Button has been clicked {count} times.
</button>
```

This tends to be a common example for frameworks (in fact, it's one of the first examples in [the official Svelte docs](https://svelte.dev/docs)), so you may have seen this same thing before. But for comparison, here's how you'd do the same thing in React:

```jsx
// Button.jsx
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

And here it is in Vue:

```html
<!-- Button.vue -->
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

<SideNote>The Vue version above is Vue 2; the Vue 3 composition API with a setup script would make the Vue example quite a bit shorter, and closer to the Svelte version.</SideNote>

So there we have it; three ways to make a button that increments a number by 1 every time it's clicked. And not only is the Svelte version _shorter_ (both in line count and total characters); it's _also_ the closest to plain ol' JavaScript, HTML and CSS, with minimal modification or proprietary things to know.

As you might have inferred from the Svelte example above, **variables are reactive by default in Svelte.** (That means any time they change, they'll update everywhere they're used.) No need for React's `useState` or Vue's `data` property; just declare a variable like you always would and it'll be reactive automatically.

```js
let myReactiveVar = 'Some value'
// It's reactive by default!
```

And when we want to change it, we just change it. No need to call a special method or reference `this`; Svelte just handles everything for you.

```js
myReactiveVar = 'A new value'
// As simple as that!
```

<SideNote>There's a small gotcha with Svelte reactivity when the value in question is an array or object, just due to how JavaScript itself tracks changes. Luckily, it's very easy to work around; check out <a href="https://svelte.dev/tutorial/updating-arrays-and-objects">Updating arrays and objects</a> in the Svelte tutorial.</SideNote>

I could go on and on about how easy Svelte makes things, from loops and conditionals, to computed values and sharing component data.

Even [Svelte's docs and tutorial](https://svelte.dev/tutorial/basics) is way ahead of the game; the whole thing is a live REPL (coding environment) where you can write your own Svelte code and see it running live!


### Svelte performance

Svelte is a _ton_ of fun to work in, but developer experience isn't everything (and no, developer experience does _not_ translate directly into user experience). Fortunately, though, Svelte's UX _is_ top-notch because the code it actually ships to the browser is _miniscule_ compared with other frameworks.

This is because Svelte does as much as possible _during the build step_, rather than on the client. Parts of the framework that are not used are stripped out at build time, and only the minimal JS needed to make your site and its components work is bundled. (Compared to other frameworks, which ship an entire library as a runtime, no matter how much of it you're actually using.)

As a comparison: the old homepage of this site (built with [Gridsome](https://gridsome.org)) was 1.6 MB transferred, compared with only _183 KB_ on this site—a reduction of almost ***90%!***

Now, in fairness, there's a good reason the old site was that large to begin with; Gridsome preloads all of your content as JSON data by default to make the site _feel_ faster as you navigate between pages. And I have to admit: the old version does _seem_ more snappy. Part of that is the preloading, of course, and some is because I decided to add some page transitions this time (something that didn't ever fully work well in Gridsome without a lot of fiddling).

That brings up some interesting questions about real performance vs. perceived performance. Any measurable metric will tell you the site is faster now, but it doesn't _feel_ faster. Navigating between pages has a noticeable lag now in some cases. But on the other hand, I'm not sending the user JavaScript they might not ever need, either.

It's an interesting consideration.


## Why move away from Gridsome?

As you can see from just perusing the posts list on this blog, it wasn't all that long ago that I moved to Gridsome in the first place. I went to a [headless Gridsome frontend](/blog/a-new-headless-site-with-gridsome) just over a year ago, and converted the site to [fully static](/blog/goodbye-wordpress) barely seven months ago.

<Highlight>At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.</Highlight>

This naturally prompts the question: _why move in the first place_?

I was a very early adopter of Gridsome, and at the time (in 2019), it still seemed actively maintained and was receiving somewhat regular (if slow) updates. But it's been almost exactly two years since the last minor version update of Gridsome, and at this point, it doesn't seem like it's actively maintained. I don't know if more updates will come someday or not. I certainly wouldn't begrudge the creators for at all abandoning it during the pandemic.

Regardless, Gridsome didn't ever really feel _complete_ to me. It was a great way to generate a speedy, static site with Vue, but it also felt very much pre-1.0 at times.

[Gridsome's image handling](https://gridsome.org/docs/images/), for example, was absolutely _magical_, but it also only worked in certain cases unless you modified the Webpack config (no, thank you). Page transitions also required enough swimming upstream as to make them not particularly worthwhile. And there was more than once that I spent a day or two fighting with NPM and the node\_modules folder, unable to even _run_ the site on my machine.

On top of all this, I stopped using Vue in my day job in July, which (for some reason) made it feel less important to keep a foot in the Vue world.

Long story short: I wasn't feeling the love I had for Gridsome reciprocated after two years without an update, and I was ready to try something new.

Granted, SvelteKit is still pre-1.0 as well. But it seems to have a much bigger and more active team behind it, and the hype is there for good reason.

Also, TypeScript has first-class support in SvelteKit. I'm relatively new to TypeScript and have somewhat mixed feelings on it at this scope, but I've been working on involving it more in my workflows to get better at it.


### Other options besides SvelteKit

There were three other options I considered to some degree: [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), and [Gatsby](https://www.gatsbyjs.com/).

#### Astro
I had just used Astro for another WordPress-to-static migration project, and while it worked well, it also felt _very_ early days. I loved how easy Astro made working with Markdown files, but I also ran into some pretty unexpected issues with it (most notably, the inability to reference the same post twice in the same template file). I think it needs to mature a bit, but I'll definitely keep it on my radar, especially for projects that need to ship absolutely minimal JS and/or that just need Markdown support, as Astro's flexibility is nice.

#### Eleventy
I tinkered with Eleventy on that same project, and have given it a shot a few times before, but ultimately, I've just never been a fan of tools as minimalist as Eleventy. I see the benefit; you never have to fight the framework or deal with surprises when you're configuring everything yourself from the get-go. But that's more than I wanted to do in this case, and I'm generally not a fan of, say, bringing my own CSS processing to the party.

I definitely get why some people love Eleventy (and am generally a fan of [Zach Leatherman](https://www.zachleat.com/), Eleventy creator and good human). I may come back to it one day, when the project is right and/or when my project configuration preferences are particular enough to tip the balance in Eleventy's favor. But for right now, it's less than I wanted.

#### Gatsby
Gatsby was the last consideration, but also the least serious. The only real reason it even made the list was that I'm working for a React shop for the first time now, and while I do _know_ React, I don't know it on the same level as Vue. I thought it might be valuable to get hands-on with it, but ultimately I decided that:

1. The _only_ reason I would be using Gatsby was for React experience;
2. Gatsby !== React; and
3. Since this is my personal project, I should enjoy it. And honestly, I don't enjoy React as much as other frameworks (I think largely because of the JSX dependency).