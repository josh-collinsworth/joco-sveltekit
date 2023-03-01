---
title: Adding page transitions in SvelteKit
date: 2023-03-01
updated: 2023-03-01
categories:
  - javascript
  - design
  - web
  - svelte
coverImage: sveltekit-page-transitions.png
coverWidth: 120
coverHeight: 63
excerpt: Transitions, easing, and routing are all baked into SvelteKit. This makes utilizing page transitions effects as easy as adding a few lines of layout code.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Callout from '$lib/components/Callout.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
	import Note from '$lib/components/Note.svelte'
	import FloatedImage from '$lib/components/FloatedImage.svelte'
</script>


<Note>

If you're just here for the code (I get it), [here's the link to skip to that part](#the-final-code).

</Note>


If you've navigated the web before (and if not, I'm impressed you're reading this right now), you know the default behavior when you click a link is rather unimpressive: the page we were just looking at is unceremoniously replaced, more or less immediately.

(_Let's be honest: you'll probably be staring at dimly pulsing skeleton UI elements for several seconds after that, because React, but you get the point_.)

This is in stark contrast to the world of so-called "native" apps, and more recently, single-page applications (SPAs) on the web. SPAs use JavaScript to--among other things--fluidly animate between UI states.

<SideNote>

You can pronounce each letter in SPA, as an acronym, or say it like the word "spa." Surprisingly, unlike most things in tech, nobody seems to care that much about this particular [bike shed](https://en.wiktionary.org/wiki/bikeshedding).

</SideNote>

Recently, though, SPAs have come under heavy criticism. I won't link to the `#hotdrama` here, but suffice to say: some in the web community feel the benefits of SPAs (mobile app-like transitions; arguably better user experience) were heavily oversold, as their drawbacks (accessibility and performance issues) were downplayed.

While there's merit to that position, I'm not here to weigh in on the benefits of traditional "multi-page" apps (we used to just call them websites) vs. SPAs. Because luckily, SvelteKit makes it very easy to ask: _porque no los dos_?

<FloatedImage alt="The 'why not both?' meme, asking why don't we have both?" path="/images/post_images/porque.png" />

One of the many things I love about [SvelteKit](https://kit.svelte.dev/) is its router, which automatically manages changes from page to page, and even preloads content for faster navigation--all in a way that plays friendly with accessibility and browser controls. (The back button works like it should, for example.)

Happily, if the router isn't available—if the user has JavaScript disabled, for instance—SvelteKit will simply fall back to the browser default behavior of loading the page as usual, '90s-style.

<PullQuote>

With SvelteKit, we can implement progressively enhanced page transitions with very little penalty.

</PullQuote>


<Callout>

This means with SvelteKit, we can implement [progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement) page transitions with very little penalty (just a little extra JavaScript).

</Callout>

And as a bonus: implementing page transitions in SvelteKit requires very little code to implement.

But before we get into the _how_, let's spend a little time on _what_ page transitions are, and _why_ you might want them.


## What is a page transition?

A page transition is an effect that happens when the user clicks to navigate to a new page. Rather than the default page load, a page transition takes over, and animates the old page being replaced by the new one.

For example, the old page might fade away as the new page materializes. Or, the old might slide off to the left as the new one enters from the right. You could even combine these effects, or do anything else you could possibly dream of that's possible in CSS and/or JavaScript.

(This site uses page transitions; [here's a quick example](/blog/page-transition-example).)

<CalloutPlusQuote>

This type of transition is common in mobile apps, as well as in slide presentations. However, just as in Keynote or PowerPoint, while high quality transitions can add an impressive sheen, they're also easily overdone.

</CalloutPlusQuote>

With great power comes great responsibility; we want to make sure we're not giving our users vertigo, making them wait too long, or confusing them with an overwhelming flurry of movement. 

Don't get me wrong; page transitions are undeniably nifty. (Source: me.) But [a little goes a long way](/blog/great-transitions).



## Page transitions: why or why not?

You might choose to implement page transitions (or not) based on a variety of factors. Let's look at some pros and cons.


### Benefits of page transitions

Again, fancy transitions are typically the domain of native apps, which means they can add some unexpected "delight" (to borrow the painfully overworked term) to a website or web app.

<Callout>

Page transitions aren't just a nifty effect, however; illustrating a change with animation is generally good UX, since it's more natural to perceive an object moving into or out of place gradually, rather than instantly.

</Callout>

<PullQuote>

Change is more intuitive when there's some kind of animation to demonstrate it--and if that animation happens to look impressive, all the&nbsp;better.

</PullQuote>

Granted, an internet user is not at all likely to be surprised if, upon clicking a link, they see the default behavior. That's perfectly fine in most cases. But generally speaking, change is more intuitive when there's some kind of animation to demonstrate it--and if that animation happens to look impressive, all the better.

Page transitions _may_ also increase perceived performance (i.e., how fast a site or app _feels_) since transitions give users a distraction during page loads, and may also give data a little extra time to load in undetected. This is a double-edged sword, though, as poor transitions can also easily have the opposite effect.

That brings us to…


### Drawbacks of page transitions

Benefits aside, there _are_ a few important drawbacks of page transitions that we should consider.

First of all, **page transitions require JavaScript**--for now, at least. The [view transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) is on the horizon, and it's quite possible that within a year or two of this writing, we could have this type of transition available (and progressively enhanced!) in all modern browsers.

For now, however, page transitions unavoidably require extra JavaScript. That's not necessarily a bad thing per se, but it does add a bit to your bundle size.

Another drawback: **page transitions can be difficult to implement accessibly**. This is more of a concern when rolling your own page transition from scratch than it is when working with SvelteKit--which generally handles things like setting focus properly and making sure the back button works--but it's still something to be aware of.

<PullQuote>

Rather than looking impressive, a poorly implemented page transition risks seeming amateurish or over-the-top.

</PullQuote>

Also: if poorly implemented, **page transitions can have the opposite of the desired effect**. Rather than looking impressive, a bad page transition risks seeming amateurish or over-the-top. It's easier to have too much than too little. So if you choose to add transitions, don't go too wild. (Unless, of course, this is a purely personal project where it doesn't matter, in which case: [GLHF](https://en.wiktionary.org/wiki/glhf).)

Finally, page transitions risk making your site _feel_ a little slower than it might otherwise, since animating between two pages naturally takes time.

However, as mentioned in the above section, this could go the opposite way, too. It just depends. You might nail an impressive bullseye, or you might shoot yourself in the foot. It's all in the execution.


## How page transitions are built in SvelteKit

For starters, let's look at the three _key components_ (ha, ha) that make up SvelteKit's native page transitions, and how to implement them.


### Built-in transitions

While you can certainly [hand-roll your own transitions](https://svelte.dev/tutorial/custom-css-transitions), there are a number of [transition effects in Svelte](https://svelte.dev/tutorial/transition) you can import and use as needed.

<SideNote>

The Svelte compiler removes any unused parts of Svelte at build time--meaning nice things like transitions and easing curves can be included in the base framework without  unnecessary bloat in the final production bundle.

</SideNote>

To start, import the type of transition you want to use from `svelte/transition`. For now, let's use `fade`, since it's nice and simple. But there's also `crossfade`, `fly`, `slide`, `scale`, `blur`, and `draw` (the last of which is specifically for SVG strokes), all available out of the box.

Since this transition will apply at the page level, in our case, we'll want to use it in our global `+layout.svelte` file (i.e., the one at the top level of `src/routes`). So let's import it there:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import { fade } from 'svelte/transition'
</script>
```

Once imported, we'll need to _apply_ the transition on an element, via the `transition` attribute.

You _might_ think that we could just plop the transition on the `<slot />` and be done with it, but unfortunately, slots can't accept attributes. You should see an error in your code editor if you try it.

```svelte
<!-- ⚠️ This creates an error -->
<slot transition:fade>
```

That's because the `slot` element is just stand-in; a placeholder for a different and as-of-yet unknown component (in this case, a page), whose attributes and properties are defined elsewhere. We can't just smash the two together like that.

We _could_ theoretically get around this by including the `transition` attribute on the topmost element of every single page in our app, but that would be tedious, difficult to maintain, and error-prone. (AKA: gross.)

Instead, it's much simpler to _wrap_ the slot element inside another element (or component), and apply the transition to _that_.

```svelte
<!-- ✅ Better, but won't do much yet... -->
<div transition:fade>
  <slot />
</div>
```

Keep in mind: this wrapper element will appear on _every page_ of our site/app. It will transition out with the old page, and then back in with the new one, every time the user navigates--

--_Eventually_, that is. **This won't do much on its own yet**.

Why? Because at this point, that `div` doesn't change or leave the page when the user navigates. Since it's in `+layout.svelte`, it's global, just like a header or footer.

That's normal; that's how stuff in the layout file _should_ work. But it's not what we want in this case.

We need this `div` to re-render every time the URL changes—and _that's_ where `key` blocks come in…


### A `key` block

<CalloutPlusQuote>

A `key` block is markup that reacts to state. Whenever that state changes, the block will re-render.

</CalloutPlusQuote>

You could think of this as injected reactivity; we want to _watch_ an expression (just a variable, in this case), and when that changes, re-render the markup in the block.

In more casual terms: a `key` block lets you say, "hey, Svelte: whenever that thing over there changes, I want you to re-render this chunk of code."

("Sure thing!" Svelte replies, in Rich Harris's charming British accent. But I digress.)

```svelte
{#key variableName}
  <!-- All elements in this block will re-render 
       whenever variableName changes -->
{/key}
```

_Ok_, you might be thinking. _Sounds good so far. But…how do we actually_ get _the current page URL_?

Smart question!

We'll need a variable that holds the current path, and updates on navigation. And for that, we'll need to rely on data from the page `load` function.


### The `load` function

As you may already know if you've worked with SvelteKit, every route can have a `load` function, in a `+page.js` file alongside the route's `+page.svelte` file.

<CalloutPlusQuote>

The `load` function runs before the page is loaded, and returns data for the page to use.

</CalloutPlusQuote>

Typically, this is handy for things like checking to see whether the current user is logged in, or for fetching data the page might need in order to render, as examples.

And again: usually, this `load` function goes in a `+page.js` file alongside the `+page.svelte` route.

However, we can _also_ use a `+layout.js` file--alongside our `+layout.svelte`--if we want a _global_ `load` function, that runs on _every_ page load. (Which we do, because we always want to know what the current route is and when it changes, site-wide.)

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

There's a bit of destructuring going on there, so let's break it down:

- The `load` function has access to a number of named arguments, including `url`, which contains information about (what else?) the current page URL.
- The `url` object has several properties, but `url.pathname` is the current path (e.g., `/blog` or `/contact`), so it's the one we want.
- `load` functions must return an object, so we return `pathname`, using the `{ pathname }` shorthand.

We could, of course, just return `url` as-is, and handle getting the property we need from it in the template instead. That could even make our `+layout.js` file a one-liner.

However, I personally prefer to keep the `.svelte` file as clean as possible. I'd rather do as much dirty work inside the `load` function as I can, and let the mess exist out of sight. (Besides: there's no point in having extra properties flying around inside the template if we're not going to use them.)


### Accessing data returned from `load`

The object returned from the `load` function is available in the corresponding `.svelte` file as the `data` prop. It's passed in automatically; we just have to declare it.

So, heading back to `+layout.svelte`, we can declare and access the `data` prop, before finally using the `pathname` property in our `key` block from before.

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


#### Gotcha: destructuring the data object

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

Yes. In fact, that variable _is_ reactive already. The problem is: it's not _tied_ to the original object. When a variable relies on _another_ value, we need to explicitly make it a **reactive declaration**, in order to keep the two in sync.

This works instead:

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

Either way will work just the same. It's just a matter of preference. The important part is making `pathname` a reactive declaration, if you choose to destructure that property.

Or, skip it and just use `data.pathname` like that, without declaring a new variable at all. Totally up to you.


## Assembling the pieces

All right, now that we know how to access `data` returned from our `load` function and use it properly, we're ready to put all the pieces together!

Here's where we should be now with `+layout.svelte`:

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

This _kind of_ works. If you try it now, you'll see a fade effect, but it will only appear to be a fade _out_; the new page will still seem to appear instantaneously.

Why? Because **both the "in" and "out" transitions are happening at the same time**:

1. The user clicks;
2. Both the fade in and the fade out begin _simultaneously_. (Depending on page size and scroll position, you may even see them both temporarily appear onscreen together);
3. Both the fade in and fade out _end at the same time_. This will likely create the impression that the new page has instantly appeared, as the old leaves and the new jumps up to take its place.

<CalloutPlusQuote>

To create a smooth transition effect, we'll need to use separate `in` and `out` attributes, and add delay to stagger the two.

</CalloutPlusQuote>

We'll start by removing `transition:fade`, and replacing it with separate `in:fade` and `out:fade` attributes.

Next, we'll supply each of those two attributes with an object of configuration options.

And finally, we'll set a `delay` to the `in` transition, and set a `duration` on both, just to be sure we know exactly how long the fade is actually taking (and so we can shorten or lengthen it as we like).

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

But also: JavaScript timing is not always precise. A slight pause between the in and out transitions also acts as a buffer against jank.

## The final code

Here's the final code, if you'd like to see all the changes in one place together:

```js
// src/routes/+layout.js
export const load = ({ url }) => {
  const { pathname } = url

  return {
    pathname
  }
}
```

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import { fade } from 'svelte/transition'

  export let data
</script>


{#key data.pathname}
  <div
    in:fade={{ duration: 300, delay: 400 }}
    out:fade={{ duration: 300 }}
  >
    <slot />
  </div>
{/key}
```

That's all there is to creating basic page transitions in SvelteKit!

However, there are some other options that are worth exploring…


## Optional: add easing

Depending on what kind of page transition you're using, you might want to tap into Svelte's `easing` library.

[Svelte ships with a wide range of easing curves](https://svelte.dev/examples/easing) available to import and use in your applications. I won't go into them all here, but all the typical mathematical curves you might expect are present, plus some fancy ones to mimic real-world physics, like `elastic` and `bounce`.

To use one, import it from `svelte/easing`. Then, you can apply it in the options object supplied to the `in` and/or `out` attributes.

```svelte
<script>
  import { fade } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'

  export let data
</script>


{#key data.pathname}
  <div
    in:fade={{ easing: cubicOut, duration: 300, delay: 400 }}
    out:fade={{ easing: cubicIn, duration: 300 }}
  >
    <slot />
  </div>
{/key}
```

<SideNote>

You might have noticed the "in" transition is an easing **out**, and vice versa. [That's intentional](/blog/great-transitions#8-ins-go-out-outs-go-in). The naming is just a little confusing.

</SideNote>


## Optional: add movement

Using easing curves one a pure `fade` transition probably won't make much of a discernible difference. Easing curves have a _much_ bigger impact when actual _movement_ is involved.

Plus, arguably, a fade alone isn't really that cool anyway. When it comes to Svelte transitions, I'm like Sugar Ray; I just want to `fly`.

```svelte
<script>
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'

  export let data
</script>


{#key data.pathname}
  <div
    in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
    out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
  >
    <slot />
  </div>
{/key}
```

The `fly` transition combines movement with fading. You can supply it with `x` and/or `y` options to control the movement--though I wouldn't recommend using both together, unless you're just going for a really wild effect, and, of course, [respecting the user's motion preferences](/blog/great-transitions#bonus-respect-the-users-preferences). (You can also specify `opacity`, but the default is generally what you want.)

The above transition is actually nearly identical to the transitions used on this website.


## Try it out

If you'd like to try some transitions out for yourself, my [SvelteKit Static Blog Starter](https://github.com/josh-collinsworth/sveltekit-blog-starter) may be a good playground (and easier than setting things up from scratch).

You can clone [the repo](https://github.com/josh-collinsworth/sveltekit-blog-starter), get it up and running (see the readme file), then open `+layout.svelte` to start making adjustments. The starter already has a basic `fade` transition applied, so it should require minimal modification to change the transition to match your own preferences.

By the way: you don't _have_ to use the same type of transition for both the `in` and `out` changes. It's probably a good idea in most cases, but you may be able to create some interesting effects by mixing.


## Further reading

This post is one in a series of posts on transitions, easing, and animation on the web. (Truth be told: I only set out to write _this_ one, but then I started exploring so many rabbit holes it eventually spun off into two posts, and then three.)

If you'd like to take a deeper dive on what easing curves are and how they work--or on how to make the best web animations possible--I hope you'll check out the posts below.

- [Understanding easing and cubic-bezier curves in CSS](/blog/easing-curves)
- [Ten tips for better CSS transitions and animations](/blog/great-transitions)

In any case, however: thanks for reading, and I hope this post has given you some insight into how comparatively simple it can be to implement page transitions in SvelteKit.