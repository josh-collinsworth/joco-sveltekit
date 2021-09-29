---
title: 'Converting to SvelteKit'
date: '2021-10-01'
updated: '2021-10-01'
categories:
  - 'javascript'
  - 'svelte'
  - 'web'
coverImage: 'converting-to-sveltekit.png'
coverRatio: '821 / 334'
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

**Svelte is a JavaScript framework akin to [React](https://reactjs.org), [Vue](https://vuejs.org), or any other component-based frontend framework**. Svelte is the newest of the big names in the space, however, and it definitely seems as though it's learned from the others, in terms of both developer experience and user optimization.

Or, if you prefer, this was my (admittedly cheeky) take on it when I first learned it:

{@html `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My elevator pitch for <a href="https://twitter.com/sveltejs?ref_src=twsrc%5Etfw">@sveltejs</a> :<br><br>Svelte is React without all the bullshit.</p>&mdash; Josh Collinsworth (@jjcollinsworth) <a href="https://twitter.com/jjcollinsworth/status/1155265498675929088?ref_src=twsrc%5Etfw">July 27, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}

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

In fairness, in most cases, you'll probably use a build tool to reduce their bundle size. But to some extent at least, with React and Vue, you're inevitably shipping the framework to the browser.

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

- **Svelte is reactive by default**. This means when a variable is reassigned, every place it's used or referenced also updates automatically. (_React and Vue both require you to explicitly initialize reactive variables_.)

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
  <!-- If `enabled` is a boolean, then this works: -->
  <input class={enabled ? 'enabled' : ''} />

  <!-- ...but it can be shortened to this... -->
  <input class:enabled={enabled} />

  <!-- ...which can just be shortened to: -->
  <input class:enabled />

 
  <!-- A nice shorthand for myProp={myProp} -->
  <SomeComponent {myProp} />

 
  <!-- Define event modifiers inline: -->
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


### Ok, so that's Svelte; what's SvelteKit?

Since frontend frameworks run entirely on JavaScript, they aren't ideal for much except building out pieces of interactive UIs on a single page; by nature, they're limited to the capabilities of JavaScript in the browser. (Because of this, sites built with a framework are sometimes called "single-page applications," or SPAs.)

<Callout>A framework helps you build an interactive UI on a single page; an app framework helps you build full-fledged sites and apps in that&nbsp;framework.</Callout>

To overcome this limitation, most popular frameworks have their own "app framework," or: a tool that helps you build not just pieces of a UI or a single page, but entire _pages and apps_ with the framework in question.

[Next](https://nextjs.org/) is a React framework; [Nuxt](https://nuxtjs.org/) is a Vue framework; [SvelteKit](https://kit.svelte.dev/) is a Svelte framework.

App frameworks are bigger toolboxes with wider capabilities, to help you build just about anything. Most app frameworks include some combination of pages and routing, data stores, layouts, image optimization, better SEO and full-page control, data fetching, and/or plugins—usually just about everything except a database.

A framework helps you build an interactive UI on a single page; an app framework helps you build full-fledged sites and apps in that framework.


#### Routing in SvelteKit

By default, a new SvelteKit project has a `src/routes` directory. Anything inside of `src/routes` compiles to a page at that relative root.

For example:

- `routes/index.svelte` ➡️ `/` (homepage)
- `routes/about.svelte` ➡️ `/about`
- `routes/blog/index.svelte` ➡️ `/blog`
- `routes/blog/some-post.md` ➡️ `/blog/some-post`

And so on. (_Markdown files do require a small bit of extra config, but yes, you can have Markdown files as pages, or just import Markdown to inject into pages or components._)

You can even have _dynamic_ routes. For example, `/blog/[post].svelte` would be a single component that would render _any_ `/blog/*` slug. You can read more about [SvelteKit Pages here](https://kit.svelte.dev/docs#routing-pages).

The _really_ magical part, though, is that you can have server-side routes, too.

For example: if you want your app to have a `/posts` endpoint that returns JSON, you just create `src/routes/posts.json.js`. This will become a `/posts.json` route in the finished application.

From there, you just define a `get()` function that retrieves the desired data and returns it (along with a status code). This is made easier by the fact that SvelteKit has top-level `await` and `fetch` available by default.

Your app can of course query its own internal routes, so you can just have one `/posts` endpoint, for example, that's used by multiple pages and components.

Here's a somewhat simplified example of how you might create an endpoint to return all your Markdown posts as JSON:

```js
// posts.json.js

// The `get` function responts to GET requests
export const get = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('/blog/posts/*.md'))
    .map(async ([path, page]) => {
      const { metadata } = await page()
      const slug = path.split('/').pop().split('.').shift()
      return { ...metadata, slug }
    })
  )

  return {
    status: 200,
    body: {
      posts //Automatically converted to JSON ✨
    }
  }
}
```

Once you've retrieved the post data as JSON, you can display it in a Svelte page or component; here's a short example:

```svelte
{#each posts as post}
  <article>
    <img src="/images/{post.coverImage}" alt="" />

    <h3>
      <a href={post.slug}>
        {post.title}
      </a>
    </h3>
    
    <p class="excerpt">
      {post.excerpt}

      <a href={post.slug}>
        Read more…
      </a>
    </p>
  </article>
{/each}
```

<SideNote>You <em>do</em> also need an adapter to convert Markdown. That isn't included by default in SvelteKit, but it <em>does</em> have the fairly easy-to-install <a href="https://mdsvex.com/" rel="external">MDSvex</a> for that (the Svelte version of MDX, if you're familiar).</SideNote>


#### Going static

One particularly impressive app framework feature across the board: Next, Nuxt, and SvelteKit are _all_ capable of building your finished project as a server-side rendered app, as a static site, or as some combination of both.

In SvelteKit's case, this is accomplished through [adapters](https://kit.svelte.dev/docs#adapters), which process your code differently for whatever type of app and hosting you're targeting.

Currently, SvelteKit offers adapters to run your project as serverless functions on Netlify, Vercel, and Cloudflare Workers. It also offers two platform-agnostic adapter options:

- Node (to deploy your code as a standard Node app)
- Static (to deploy as pre-generated HTML files)

There are several [community-created adapters](https://sveltesociety.dev/components/#category-SvelteKit%20Adapters) available as well, or you can even [write your own](https://kit.svelte.dev/docs#writing-an-adapter).

This site uses the static adapter, which means the SvelteKit pages and components are pre-rendered as plain ol' HTML files. They can still benefit from "hydration"—JavaScript running once the page has loaded—but they don't have to. Thanks to the static adapter, most of this site runs just fine even with JavaScript disabled entirely.

With the static adapter, any internal endpoint query or `fetch` call is run at build time, rather than run time, and whatever the result, it will be output as plain static files.

Worth noting, however: by default, after the first page load, SvelteKit's router hydrates and takes over page loading, to make transitions as smooth and fast as possible. You can even designate routes to preload in the background, so that by the time the user clicks, the load is nearly instantaneous.

<SideNote>You don't have to go entirely one way or the other; even if you're deploying your project as a Node app or with serverless functions, you can still mark specific pages to be prerendered as static HTML.</SideNote>


## Static SvelteKit vs. Gridsome

Before we dive into comparisons, it's worth mentioning that SvelteKit and Gridsome are _not_ really the same type of thing. SvelteKit is an app framework capable of generating many different kinds of sites and apps, where Gridsome is just a fairly straightforward static site generator.

Still, if we're scoping the discussion to _just_ SvelteKit's static adapter, I think it's a fair, if not exact, comparison.

As always, there were advantages and disadvantages to consider when making the switch. Here's an interesting example:

The old homepage of this site (built with [Gridsome](https://gridsome.org)) was 1.9 MB transferred. By contrast, that number is only _200 kB_ on SvelteKit (most of which is font files)—a reduction of almost ***90%!***

**In fairness, however: there's a good reason the old site was that large to begin with**. Gridsome preloads all of your content as JSON data by default to make the site _feel_ faster as you navigate between pages. And I have to admit: the old version does _seem_ more snappy. Part of that is the preloading, of course, and some is because I decided to add some page transitions this time (something that didn't ever fully work well in Gridsome without a lot of fiddling).

<Callout>Any measurable metric will tell you the site is faster now, but it doesn't always <em>feel</em> faster, which makes for an interesting study in&nbsp;tradeoffs.</Callout>

It's tricky to measure the Gridsome site's weight _without_ preloading, but nearly as I can tell SvelteKit still saves me at least around 100kb. So it still seems like a win, even if it's one that comes with tradeoffs.

This brings up some interesting questions about real vs. perceived performance. Any measurable metric will tell you the site is faster now, but it doesn't always _feel_ faster. Navigating between pages is noticeably slower now. But on the other hand, I'm not sending the user megabytes of JavaScript they might not ever use, which users on slow connections and limited data plans likely appreciate.

Which is better? Ultimately, that depends on what you're optimizing for. Personally: I feel better about shipping less JavaScript than I do reducing wait-after-click by a half second here and there. But it's an interesting question that will have different answers depending on your project's priorities and definition of success.

**The builds with SvelteKit are also much faster**: the production build of my Gridsome site ran about seven minutes, compared to about 90 seconds for the SvelteKit version (about five times faster). But again, this is misleading, for two reasons:

1. Gridsome was doing a lot of image work at build time that SvelteKit isn't by default; and

2. Gridsome uses Webpack under the hood, where SvelteKit utilizes [Vite](https://vitejs.dev/) (pronounced "veet").

One particularly nice thing about Gridsome was its built-in `<g-image>` component. Just by using it in place of the standard HTML `<img>` tag, Gridsome would compress your images, generate a resized, responsive source set, use lazy loading, ***and*** create blurred placeholder images.

By contrast, out of the box, SvelteKit does…nothing to help with images.

My website uses few enough images (which are already generally compressed) that I decided browser-native lazy loading was acceptable for now. Hopefully, SvelteKit will have a first-party image compression option in the near future. (And even if not, it's possible to rig that up directly through Vite, though that's its own rabbit hole. Or, I could even use a service like [Cloudinary](https://cloudinary.com/) if image size became an issue.) But for now, the few Svelte-focused solutions I tried didn't work particularly well for my use case, and the tradeoff didn't seem to be worthwhile.


### Why move away from Gridsome?

As you can see from just perusing the posts list on this blog, it wasn't all that long ago that I moved to Gridsome in the first place. I went to a [headless Gridsome frontend](/blog/a-new-headless-site-with-gridsome) just over a year ago, and converted the site to [fully static](/blog/goodbye-wordpress) barely seven months ago. I've already talked here about how nice Gridsome's image handling is, and how fast it makes the site feel.

This naturally prompts the question: _why move in the first place_? At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.

<Callout>At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about&nbsp;it.</Callout>

I was a very early adopter of Gridsome, and at the time (in 2019), it still seemed to be regularly updated and headed towards a 1.0 release. But it's been almost exactly two years since the last minor version update of Gridsome ([0.7](https://gridsome.org/blog/2019/09/17/gridsome-v07/)), and at this point, it doesn't seem like it's an actively maintained project any longer.

Gridsome didn't ever really feel _complete_ to me, and that was fine when updates were still rolling out. I knew what I was in for going with a pre-1.0 technology, but the stagnation was hard to ignore. It was really good at what it did well—generating a speedy, static site with Vue and GraphQL—but the more you wanted to tweak things or leave the happy path, the more you ran into its rough edges.

<Callout>SvelteKit sparked joy in a way that Gridsome didn't anymore.</Callout>

More than once, I spent a day or two fighting with NPM, unable to even _run_ Gridsome on my machine. (That's more to do with the packages Gridsome relies on than Gridsome itself, but still; the frustration is the same.)

But moreover: SvelteKit sparked joy in a way that Gridsome didn't anymore. This site, like any side project, is at least partially for me to enjoy. This is the one little corner of the internet that's 100% mine, where I can do anything I want for whatever reason.

When I was writing this site in Gridsome, my list of Vue projects was fairly small, which made the appeal of having a Vue outlet more appealing. Now, though, it doesn't feel like I _need_ a site in Vue anymore—especially since my day job isn't Vue-focused anymore.

Maybe the fact that I've been working professionally with Vue for the last two years (and released [Quina](https://quina.app) late last year) is part of it, too. I still love Vue dearly, and will almost certainly pick it back up to write a project in Vue 3 one day in the near future. But silly as it sounds, for right now: that itch is scratched, and I want a different thing to play with.

Finally, [TypeScript](https://www.typescriptlang.org/) has first-class support in SvelteKit. I'm relatively new to TypeScript and have somewhat mixed feelings on it at this scope (I think it mainly shines on larger projects with multiple contributors), but I've been working on involving it more in my workflows to get better at it. At this point, close to 100% of this site's JS is typed, so I've given it a good shot at least.


#### What other options were considered?

To some degree, I considered both [Astro](https://astro.build/) and [Eleventy](https://www.11ty.dev/) for this overhaul, and you could make reasonable arguments that either one would've been better suited for the task. If my primary goal had been to build the fastest statically generated site possible with absolutely minimal JavaScript, I no doubt would've gravitated towards one of these tools.

But again: this is my personal site, and so the tool I _like_ the most is an important factor. So while SvelteKit might arguably be a little overkill, personally, I think it's the most fun.


#### How does the code compare?

You might wonder: how does the old Vue code compare to the newer Svelte code? Is it shorter, better, and/or more readable?

Turns out: that's actually a really tricky question to answer.

I originally thought I'd show side-by-side comparisons to demonstrate Vue vs. Svelte, but there's been enough change at this point that most of the differences are either trivial or not really comparable.

Most of the site's code isn't directly analogous anymore; it's got TypeScript added, it works differently, and even what's similar in functionality has largely been refactored.

The one non-trivial component that's mostly the same between the two versions is the font tester (seen on the [`/uses` page](/uses)). But it's actually about the same size, both in terms of line count and disk size. The Svelte version actually is a tiny bit bigger, but by a thoroughly negligible amount (a fraction of a kB), and almost certainly just because of the addition of TypeScript.

Most of the rest just isn't comparable anymore. The colorful square grid in the header and footer work completely differently for better performance now; layouts have changed; new pieces have been added and old removed. Code was refactored. I relied more on global CSS previously, and have moved more towards component-based CSS this time around.

**While the site _looks_ mostly the same as before, it's _very_ different behind the scenes.**

That all makes the question of "is it better?" really hard to answer (even without getting into the highly subjective topic of what "better" even means). But I _like_ it better (even the parts that are more verbose), and I think that's the most important part. I even enjoyed the relatively rote process of moving Vue components over to Svelte.


## What to know about SvelteKit

As of this writing, SvelteKit is still in pre-1.0 status. It seems very stable to me, and Svelte itself is definitely solid. But there are still some portions of the Kit that aren't fleshed out yet. I found the static rendering to be extremely good, but as mentioned, SvelteKit can do a _lot_ more than that. Depending on what you're building and what features you're most interested in, it may be worth spending some time to make sure SvelteKit is in good shape to handle your task, and works as expected with your deploy target.


### Debunking the community argument

When comparing Svelte (or any newer technology, for that matter) with the larger, more established players, arguments against adoption often point to community size. Where React, Vue, Angular, etc. all have large ecosystems full of resources for you to take advantage of, Svelte can seem comparatively small. The fear, then, is that when or if you need to reach for additional packages to handle things beyond the main framework's capabilities, you may be left in the lurch.

<Callout>When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself.</Callout>

I'd like to put some context around that argument:

1. **You don't often _need_ packages with Svelte.** When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself. 

  Svelte is much closer to the beautifully uncomplicated HTML, CSS and JavaScript of the web, which means you don't often _need_ to go looking for a package that, say, plays nice with your framework's hooks or lifecycle methods. Plus, many of the features you'd need a package for in other frameworks come baked in (motion, scoped CSS, and state management being the biggest examples).

2. **Svelte is extremely compatible with vanilla JavaScript packages.** This means that while, yes, Svelte's ecosystem of packages and plugins is comparatively small, it can often benefit from and easily use _any_ framework-agnostic package—which is a pretty massive portion of the packages out there.

3. **Even when you _do_ need to build something yourself, SvelteKit makes it comparatively simple.** One example: previously, I was using an RSS plugin with Gridsome, but no such package exists for SvelteKit.

  A quick web search, however, was all it took to find a very easy way to code my own XML feed endpoint in minutes, with no dependencies, in under 40 lines of code.


### Svelte's ecosystem is in a tricky place

One other thing to know at this point in SvelteKit's existence is that it's actually the _second_ stab at a Svelte app framework; [Sapper](https://sapper.svelte.dev/) was the first.

Sapper never seemed as big as SvelteKit does now, but it's been deprecated in favor of SvelteKit, and there's still some confusion that arises when searching online for code solutions in the space.

SvelteKit doesn't always work exactly the same as Svelte _or_ Sapper by default (largely because Svelte and Sapper both have a Rollup config—Rollup being the bundler that powers Svelte—where SvelteKit has its own config file). So a lot of the examples and answers you come across related to setting up configuration are likely to either need some syntax adjustment, or just not work exactly as expected. (This doesn't apply to Svelte itself so much as to SvelteKit and its unique configurations.)


## Wrapup: would I use SvelteKit again?

For just about any project, **yes**, I would use SvelteKit again in a heartbeat.

Even though it's still technically pre-1.0, SvelteKit feels very solid—much more so than other pre-1.0 frameworks I've tried—_and_ it's a delight to work with. The adapters allow you to tailor your input to any output you like, and the scope of things you can build with it is impressively vast. Plus, it's likely to be smaller and faster than whatever else you might have chosen, and with even betted developer experience.

As mentioned, it's still early days for SvelteKit, so there are still some areas where its established solutions may not be as robust as with other frameworks. So I'll say that if I were starting up a new project today and _knew_ for sure right off the bat that I'd need a wide range of third-party plugins or packages, I _might_ lean more towards Nuxt for that at this specific point in time.

It's hard to imagine SvelteKit _not_ becoming the #1 go-to in all cases in the near future, however—especially knowing it only came out of closed beta a matter of months ago.