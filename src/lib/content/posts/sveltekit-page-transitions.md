---
title: 'Page transitions in SvelteKit'
date: '2023-02-24'
updated: '2023-02-24'
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
  import Callout from '$lib/components/Callout.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
	import Easings from '$lib/components/demos/Easing.svelte'
	import FloatedImage from '$lib/components/FloatedImage.svelte'
</script>


If you've navigated the web before (and if not, I'm impressed you're reading this right now), you know the default behavior when you click a link is rather unimpressive: the page we were just looking at is unceremoniously replaced, more or less immediately. (_Let's be honest: you'll probably be staring at dimly pulsing skeleton UI elements for several seconds after that, because React, but you get the point_.)

This is in stark contrast to the world of so-called "native" apps, and more recently, single-page applications (SPAs) on the web. SPAs use JavaScript to--among other things--fluidly animate between UI states.

<SideNote>

You can pronounce each letter in SPA, as an acronym, or the same as the word "spa."

</SideNote>

Recently, though, SPAs have come under heavy criticism. I won't link to the `#hotdrama` here, but suffice to say: some in the web community feel the benefits of SPAs (mobile app-like transitions; arguably better user experience) were heavily oversold, as their drawbacks (accessibility and performance issues) were downplayed.

While there's merit to that position, I'm not here to weigh in on the benefits of traditional "multi-page" apps vs. SPAs. Because luckily, SvelteKit makes it very easy to ask: _porque no los dos_?

<FloatedImage alt="The 'why not both?' meme, asking why don't we have both?" path="/images/post_images/porque.png" />

One of the many things I love about [SvelteKit](https://kit.svelte.dev/) is its router, which manages changes from page to page, and even preloads content for faster navigation--all in a way that plays friendly with accessibility and browser controls. (The back button works like it should, for example.)

However, if SvelteKit's router isn't available—if the user has JavaScript disabled, say—SvelteKit will simply fall back to the browser default behavior of loading the page as usual.

<PullQuote>

With SvelteKit, we can implement progressively enhanced page transitions with very little penalty.

</PullQuote>


<Callout>

This means with SvelteKit, we can implement [progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement) page transitions with very little penalty (just a little JavaScript). Until the [view transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) actually lands in every modern browser—which could still be years away—that seems like a great tradeoff to me.

</Callout>

And as a bonus: implementing page transitions in SvelteKit is incredibly easy.

But before we get into the _how_, let's spend a little time on _what_ page transitions are, and _why_ you might want them.


## What is a page transition?

A page transition is an effect that happens when the user clicks to navigate to a new page. Rather than making an instant swap, a page transition takes a little time to animate the old page being replaced by the new one.

For example, the old page might gradually fade away into the background as the new page appears. Or, the old might slide off to the left as the new one enters from the right. You could even combine these effects, or do anything else you could possibly dream of that's possible in CSS and/or JavaScript. 

<p id="back-from-example">(This site uses page transitions; <a href="/blog/page-transition-example">follow this link for a firsthand example.)</a></p>

<CalloutPlusQuote>

This type of transition is common in mobile apps, as well as in slide presentations. However, just as in Keynote or PowerPoint, while high quality transitions can add an impressive sheen, they can also be very easy to overdo.

</CalloutPlusQuote>

However, with great power comes great responsibility; we want to make sure we're not giving our users vertigo, making them wait on lengthy transitions, or confusing them with an overwhelming flurry of movement. 

Don't get me wrong; page transitions are undeniably nifty. (Source: me. I use them and I like them.) But a little goes a long way.



## Page transitions: why or why not?

You might choose to implement page transitions (or not) based on a variety of factors. Let's look at some pros and cons.


### Benefits of page transitions

Again, fancy transitions are typically the domain of native apps, which means they can add some unexpected "delight" (to borrow the painfully overworked term) to a website or web app.

<Callout>

Page transitions aren't just a nifty effect, however; illustrating a change with animation is generally good UX, since it's more natural to perceive an object moving into or out of place gradually, rather than an instant appearance or disappearance.

</Callout>

(_I go deeper into that point in [my post on making better transitions](/blog/great-transitions), if you'd like some further reading on the topic_.)

<PullQuote>

Change is more intuitive when there's some kind of animation to demonstrate it--and if that animation happens to look impressive, all the&nbsp;better.

</PullQuote>

Granted, an internet user is not at all likely to be surprised if, upon clicking a link, they see the default page swap behavior. That's a perfectly fine default in most cases. But generally speaking, change is more intuitive when there's some kind of animation to demonstrate it--and if that animation happens to look impressive, all the better.

Page transitions _may_ also increase perceived performance (i.e., how fast a site or app _feels_) since transitions give users a distraction during page loads, and may give elements that need it a little extra time to load in more slowly undetected. This is a double-edged sword, though, as poor transitions can also easily have the opposite effect.

That brings us to…


### Drawbacks of page transitions

Benefits aside, there _are_ a few important drawbacks of page transitions that we should consider.

First of all, **page transitions require JavaScript**--for now, at least. The [view transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) is on the horizon, and it's quite possible that within a year or two of this writing, we could have this type of transition available (and progressively enhanced!) in all modern browsers.

For now, however, page transitions unavoidably require extra JavaScript. That's not necessarily a bad thing per se, but it does add a bit to your bundle size.

Another drawback: **page transitions can be difficult to implement accessibly**. This is more of a concern when rolling your own page transition from scratch than it is when working with SvelteKit, but it's still something to be aware of. You don't want to, for example, make the browser's back and forward buttons work unexpectedly, or place cursor focus in an unexpected location--things SvelteKit's transitions take into account and handle automatically.

<PullQuote>

Rather than looking impressive, a poorly implemented page transition risks seeming amateurish or over-the-top.

</PullQuote>

Also: if poorly implemented, **page transitions can have the opposite of the desired effect**. Rather than looking impressive, a poorly implemented page transition risks seeming amateurish or over-the-top. At the end of the day, it's easier to go wrong with a page transition than without. So if you choose to add transitions, be sure you know what you're doing, and seek out feedback. Or, at the very least, compare your transitions with those on other similar sites or apps. (Unless, of course, this is a personal project where it doesn't matter.)

Page transitions may also make your site _feel_ a little slower than it might otherwise, since animating between two pages takes longer than an instant load. However, this will depend both on the transition and on the experience without. (It may even be the opposite; transitions may give your app a tiny bit of extra time to load things in the background, or may keep the user's attention during loads, resulting in a perceived performance _boost_. So this one could go either way.)

Finally, page transitions are naturally a bit of code overhead. Implementing them in SvelteKit is fairly minimal, but it's still extra. If you want the simplest or most minimal thing, page transitions aren't it.


## How to add page transitions in SvelteKit

For starters, let's look at the three key (ha) components (ha again) that make up SvelteKit's native page transitions, and how to implement them.


### Built-in transitions

While you can certainly [hand-roll your own transitions](https://svelte.dev/tutorial/custom-css-transitions), there are a number of [Svelte transitions](https://svelte.dev/tutorial/transition) that you can import and use as needed.

<SideNote>

The SvelteKit compiler removes any unused parts of Svelte at build time, meaning nice things such as transitions and easing curves can be included in the base framework without bloating your final production bundle.

</SideNote>

To start, import the type of transition you want to use from `svelte/transition`. For now, let's use `fade`, since it's nice and simple. But there's also `crossfade`, `fly`, `slide`, `scale`, `blur`, and `draw` (the last of which is specifically for SVG strokes), all available out of the box.

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
<!-- ✅ Better, but we need more -->
<div transition:fade>
  <slot />
</div>
```

Keep in mind: this wrapper element will appear on _every page_ of our site/app. It will transition out with the old page, and then back in with the new one, every time the user navigates.

Now we have a wrapper element, primed to transition. However, **this won't do much on its own**, because that `div` itself doesn't leave the page when the user navigates. Since it's in the layout file, it continues existing on every page in the app, just like a header or footer might.

Instead, we need this `div` to re-render every time the URL changes—and _that's_ where `key` blocks come in…


### A `key` block

<CalloutPlusQuote>

A `key` block is markup that reacts to state. Whenever that state changes, the block will re-render.

</CalloutPlusQuote>

You could think of this as forced reactivity; we want to _watch_ a variable (or expression), and when it changes, re-render the markup in the block.

In simpler terms: a `key` block lets you say, "hey, whenever this thing here changes, I want you to re-render this chunk of code."

Give a `key` block the name of whatever variable or expression you're interested in, and the _entire block_ will re-render any time that variable or expression changes.

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

As you may already know if you've worked with SvelteKit, every route can have a `load` function that runs prior to the page loading, which returns data for the page to use.

Typically, this is handy for things like checking to see whether the current user is logged in, or for fetching data the page might need in order to render, as examples.

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


### Accessing data returned from `load`

The object returned from the `load` function is available in the template as the `data` prop. We just have to declare it as an export.

So, heading back to `+layout.svelte`, we can declare our prop and access it, before finally using the `pathname` property in our `key` block from before.

```svelte
<script>
  import { fade } from 'svelte/transition'

  export let data
</script>

{#key data.pathname}
  <div transition:fade>
    <slot />
  </div>
{/key}
```

That's the simplest way to it; just use `data.pathname` right in the template. But if you're like me, and like to destructure variables, there's a gotcha to be aware of.


#### Gotcha: destructuring from `data`

While the `data` object we get from the `load` function is, itself reactive, remember that any variables declared from it will ***not*** be.

In other words, this won't work:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  export let data

  let pathname = data.pathname // ⚠️ This won't work as desired
</script>

{#key pathname}
  <!-- Contents aren't re-rendered -->
{/key}
```

That's because the value of `pathname` will be **set once**, on initialization, but will then never change on further page loads. 

That might seem confusing, because it appears to go against how Svelte works. Aren't variables supposed to be reactive by default?

Yes. In fact, that variable _is_ reactive already. The problem is: it's not _tied_ to anything. When a variable relies on _another_ value, we need to explicitly make it a **reactive declaration**, in order to keep the two in sync.

So instead of the above, we'd need `pathname` to be a **reactive variable**, using Svelte's `$:` operator (which, if you're not familiar, continuously re-evaluates, similar to Vue computed properties, or `useEffect` in React):

```svelte
<!-- src/routes/+layout.svelte -->
<script>  
  export let data

  $: pathname = data.pathname // 👍 This works!
</script>

{#key pathname}
  <!-- All good -->
{/key}
```

Alternatively, you could use this shorthand, if you prefer destructuring:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  export let data

  $: ({pathname} = data) // 😎 This shorthand works, too
</script>

{#key pathname}
  <!-- Still good -->
{/key}
```

Either way will work just the same. It's just a matter of preference. The important part is making `pathname` a reactive declaration.

Or, skip it and just use `data` directly, without declaring a new variable at all. Totally up to you.


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