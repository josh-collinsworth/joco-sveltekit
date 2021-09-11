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

Let's be honest: lots of things in development—perhaps _especially_ front-end development—are harder than they should be. Some days, it can seem as though everything in frontend development is needlessly over-engineered and convoluted.

That's what makes [Svelte](https://svelte.dev/) seem like such a breath of fresh air.

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

As a comparison: the old homepage of this site (built with Gridsome) was 1.6 MB transferred, compared with only _183 KB_ on this site—a reduction of almost ***90%!***

Now, in fairness, there's a good reason the old site was that large to begin with; Gridsome preloads all of your content as JSON data by default to make the site _feel_ faster as you navigate between pages. And I have to admit: the old version does _seem_ more snappy. Part of that is the preloading, of course, and some is because I decided to add some page transitions this time (something that didn't ever fully work well in Gridsome without a lot of fiddling).

That brings up some interesting questions about real performance vs. perceived performance. Any measurable metric will tell you the site is faster now, but it doesn't _feel_ faster. Navigating between pages has a noticeable lag now in some cases. But on the other hand, I'm not sending the user JavaScript they might not ever need, either.

It's an interesting consideration.