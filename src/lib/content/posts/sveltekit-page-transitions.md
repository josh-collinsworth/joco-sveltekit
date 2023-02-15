---
title: 'Page transitions in SvelteKit'
date: '2023-02-02'
updated: '2023-02-02'
categories:
  - 'javascript'
  - 'design'
  - 'web'
  - 'svelte'
coverImage: 'sveltekit-page-transitions.png'
coverWidth: 120
coverHeight: 63
excerpt: 'Transitions, easing, and routing are all baked into SvelteKit, making adding page transitions as easy as pie.'
draft: true
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
	import Easings from '$lib/components/demos/Easing.svelte'
</script>

One of the biggest things that helps set more impressively designed user interfaces apart from ordinary websites is page transitions. 

No, they're not by any means necessary, but (like so many other totally unnecessary things), they _are_ very cool and fun.

SvelteKit makes adding transitions (of any kind) just about as easy as adding an attribute to the page. But before we get into how, let's first cover what a page transition actually is, and why you might--or might not--want to implement them on your own project.


## What is a page transition?

Simply put, a page transition is an effect that happens when the user clicks to navigate to a new page. Rather than the old page instantly disappearing, a page transition uses animation to illustrate the old page being replaced by the new one.

For example, the old page might fade away as the new page appears. Or, the old might slide off to the left as the new one enters from the right. You could even combine these effects, or do anything else you could possibly dream of with CSS and/or JavaScript.

This type of transition is common on mobile apps, as well as in slide shows. And just like in Keynote or PowerPoint, while high quality transitions can add an impressive sheen, they can also be very easy to overdo.


## Page transitions: why or why not?

You might choose to implement page transitions (or not) based on a variety of factors. Let's look at some pros and cons.

### Benefits of page transitions

Again, fancy transitions are typically the domain of native apps, which means they can add some unexpected "delight" (to borrow the painfully overworked term) to a website or web app.

Page transitions aren't _just_ a nifty effect, however; illustrating a change with animation is generally good UX (as long as it's not overdone or intrusive, at least), since it's more natural to perceive an object moving into or out of place, rather than see something appear or disappear.

Virtually nothing in nature happens instantaneously, and so our brains process movement better than immediate changes with no visible intermediary states.

Granted, an internet user is not likely to be surprised if, upon clicking a link, the old page is instantly replaced by the new. That's just how the web works by default, and it's a perfectly fine option in most cases. But generally speaking, our brains process change more intuitively when there's some kind of animation to demonstrate it--and if that animation happens to look impressive, all the better.

Page transitions _may_ also increase perceived performance (i.e., how fast a site or app _feels_). This is a double-edged sword, as transitions can also easily have the opposite effect. But the potential is there, since transitions give users a distraction during page loads, and may give elements that need it a little extra time to load in more slowly undetected.


### Drawbacks of page transitions

Benefits aside, there _are_ a few important drawbacks of page transitions that we should consider.

First of all, page transitions require JavaScript--for now, at least. The [view transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) is on the horizon, and it's quite possible that within a year or two of this writing, we could have this type of transition available (and progressively enhanced!) in modern browsers.

For now, however, page transitions unavoidably require JavaScript. That's not necessarily a bad thing per se, but it does unavoidably add a bit to your bundle size.

Another drawback: page transitions can be difficult to implement accessibly. This is more of a concern when rolling your own page transition from scratch than it is when using the built-in SvelteKit transitions, but it's still something to be aware of. You don't want to, for example, make the browser's back and forward buttons work unexpectedly, or place cursor focus in an unexpected location (things SvelteKit's transitions take into account and handle automatically).

Also: if poorly implemented, page transitions can have the opposite of the desired effect. Rather than looking impressive, a poorly implemented page transition risks seeming amateurish, or over the top. At the end of the day, it's easier to go wrong with a page transition than without. So if you choose to add transitions, be sure you know what you're doing, and seek out feedback. Or, at the very least, compare your transitions with those on other similar sites or apps. (Unless, of course, this is a personal project where it doesn't matter.)

Page transitions may also have the effect of making your site _feel_ a little slower than it might otherwise, since animating between two pages takes longer than an instant load. However, this will depend both on the transition and on the experience without. (It may even be the opposite; transitions may give your app a tiny bit of extra time to load things in the background, or may keep the user's attention during loads, resulting in a perceived performance _boost_. So this one could go either way.)

Finally, page transitions are naturally a bit of code overhead. Implementing them in SvelteKit is fairly minimal, but it's still extra. If you want the simplest or most minimal thing, page transitions aren't it.


## How to add page transitions in SvelteKit

For starters, let's look at the three key (ha) components that make up SvelteKit's native page transitions, and how to implement them.


### Built-in transitions

While you can certainly hand-roll your own transitions, SvelteKit includes a number of transition types that you can import and use as needed.

<SideNote>

The SvelteKit compiler removes any unused parts of Svelte at build time, meaning nice things such as transitions and easing curves can be included in the base framework without bloating your final production bundle.

</SideNote>

To start, import the type of transition you want to use from `svelte/transition`. For now, let's use `fade`, since it's nice and simple. But there's also `crossfade`, `fly`, `slide`, `scale`, `blur`, and `draw` (the last of which is specifically for SVG strokes), all available to use.

Since this transition will apply at the page level, in our case, we'll want to use it in our global `+layout.svelte` file (i.e., the one at the top level of `src/routes`).

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import { fade } from 'svelte/transition'
</script>
```

Once imported, we'll need to use the transition on an element.

You _might_ think that we could just plop the transition on the `<slot />` and be done with it, but unfortunately, slots can't accept attributes. You should see an error in your code editor if you try it.

```svelte
<!-- ⚠️ This creates an error -->
<slot transition:fade>
```

That's because the `slot` element is a stand-in; a placeholder for a different and as-of-yet unknown component (in this case, a page).

We _could_ theoretically get around this by including the `transition` attribute on every single page in our app, but that would be tedious, difficult to maintain, and error-prone.

Instead, it's much simpler to _wrap_ the slot element inside another element (or component), and apply the transition to _that_.

```svelte
<!-- ✅ Better -->
<div transition:fade>
  <slot />
</div>
```

Keep in mind: this wrapper element will appear on _every page_ of our site/app. It will transition out with the old page, and then back in with the new one, every time the user navigates.

Now we have a wrapper element, primed to transition. However, this won't do anything on its own, because that `div` itself is not being created or destroyed; so far, it's just a normal element, existing in the layout markup. So it stays in place on every page.

That's where `key` blocks come in…


### A `key` block

A `key` block is a block of markup that reacts to a variable. Whenever that variable changes, the block will re-render.

You could think of this as forced reactivity; we want to _watch_ a variable, and react to it in some _other_ piece of content. "Hey, when this thing over here changes, then I want you to re-render that completely _separate_ chunk of code over _there_."

That's where `key` blocks come in; give a `key` block the name of a variable, and the _entire block_ will re-render any time that variable changes.

```svelte
{#key variableName}
  <!-- All elements in this block will re-render 
       whenever variableName changes -->
{/key}
```

_Ok_, you might be thinking. _Sounds good so far. But…what variable actually contains the name of the current page_?

Smart question!

We've gotten ahead of ourselves just a little bit here. We'll need to create a variable that changes whenever the user navigates to a new page. And for that, we'll need to rely on data from the page `load` function.


### The `load` function

As you may already know if you've worked with SvelteKit before, every route can have a `load` function that runs prior to the page loading, which returns data for the page to use. Typically, this is handy for things like checking to see whether the current user is logged in, or for fetching data the page might need in order to render, as examples.

Usually, this `load` function goes in a `+page.js` (or `.ts`) file alongside the `+page.svelte` route.

However, we can _also_ use a `+layout.js` file--alongside our `+layout.svelte`--if we want the `load` function to run on _every_ page. (Which we do, because we always want to know what the current page is and when it changes.)

At a minimum, that might look like this:

```js
// src/routes/+layout.js
export const load = ({ url }) => {
  const { pathname } = url

  return {
    pathname
  }
}
```

There's a bit of destructuring going on there, so it may be a little difficult to read that code if you're not familiar. Let's break it down:

- The `load` function--which, again, runs before the page renders--has access to a number of arguments, including `url`, which contains information about (what else?) the current page URL.
- The `url` object has several properties, but `url.pathname` is the current path (e.g., `/blog` or `/contact`), so it's the one we want.
- Finally, we return an object with the name of the current page, using `{ pathname }` as a shorthand for `{ pathname: pathname }`.

We could, of course, just return `url` as-is, and handle getting the property we need in the template instead. That could even make our `+layout.js` file a one-liner.

However, I personally prefer to keep the `.svelte` file as clean as possible. I'd rather do as much dirty work inside the `load` function as I can, and let the mess exist out of sight. (Besides: there's no point in having extra properties flying around inside the template if we're not going to use them.)


#### Accessing data returned from the `load` function

As you also may already know if you've worked with SvelteKit, the object returned from the `load` function is available as the `data` prop. We just have to declare it.

So, heading back to `+layout.svelte`, we can declare our prop and access it, before finally using the `pathname` property in our `key` block from before.

There's just one gotcha to watch out for: **the `pathname` variable will need to be a reactive declaration**!

In other words, this won't work:

```svelte
<script>
  export let data

  const { pathname } = data // ⚠️ This won't work as desired
</script>
```

That's because the value will be **set once**, on page load, but will then never change on further page loads. Once a `var`/`let`/`const` exists, its value won't change unless explicitly reassigned. (This is how variables work in vanilla JavaScript by default, and it's not what we want in this case.)

Instead, we need `pathname` to be a **reactive variable**, using Svelte's `$:` operator (which, if you're not familiar, continuously re-evaluates, similar to Vue computed properties, or `useEffect` in React):

```svelte
<script>  
  export let data

  $: pathname = data.pathname // 👍 This works!
</script>
```

Alternatively, you could use this shorthand, if you prefer destructuring:

```svelte
<script>
  export let data

  $: ({pathname} = data) // 😎 This shorthand works, too
</script>
```

Either way will work just the same. It's just a matter of preference.


## Putting all the pieces together

All right, now that we know how to access `data` returned from our `load` function and use it properly, we're ready to put all the pieces together!

Here's the final, minimal version of `+layout.svelte`:

```svelte
<script>
  import { fade } from 'svelte/transition'

  export let data
  $: ({ pathname } = data)
</script>

{#key pathname}
  <div transition:fade>
    <slot />
  </div>
{/key}
```

If you try this out now, you'll see a fade effect, but it will only appear to be a fade _out_; the new page will still appear instantaneously.

Why? Because **both the "in" and "out" transitions are happening at the same time**. By default, neither is delayed, and they both have the same duration.

Here's the timeline, in blogged slow motion:

1. The user clicks;
2. Both the fade in and the fade out begin _simultaneously_. (Depending on page size and scroll position, you may even see them both temporarily appear onscreen together);
3. Both the fade in and fade out _end at the same time_. This will likely create the impression that the new page has instantly appeared.

To solve this, we need to add some delay, in order to allow the fade out to complete before the fade in begins.

This means instead of a single `transition` attribute, we'll split it up and use both an `in` and an `out` attribute. We'll add a `delay` to the `in` transition, and a `duration` to both, just to be sure we know exactly how long the fade is actually taking (and so we can shorten or lengthen it as we like).

```svelte
{#key pathname}
  <div 
    in:fade={{ duration: 300, delay: 400 }}
    out:fade={{ duration: 300 }}
  >
    <slot />
  </div>
{/key}
```

<SideNote>

All transition timing properties are in milliseconds.

</SideNote>

You may notice the `delay` is slightly longer than the duration. That's mainly just because I think it creates a nice effect when there's a very short pause of "blankness" between transitions, rather than rapidly jumping between the two.

But also: JavaScript timing is not always precise, and so if the delay is equal to the duration, it can sometimes create some undesired effects as things fire slightly before or after they should. A slight pause between the in and out transitions also acts as a buffer, to ensure a late ending or early start doesn't create jank.

---

That's all there is to creating basic page transitions in SvelteKit! However, while what we have works perfectly fine, there are some extra points we should cover to take our transitions from just OK to great.