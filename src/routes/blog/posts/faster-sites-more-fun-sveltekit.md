---
title: 'Faster Sites and More Fun with SvelteKit'
date: '2021-10-01'
updated: '2021-10-02'
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

At a basic level, you could think of Svelte as a frontend framework akin to [React](https://reactjs.org), [Vue](https://vuejs.org), etc. Svelte is the newest of the big names in the space, however, and it definitely seems as though it's learned from the others, in terms of both developer experience and optimization.

As with any frontend framework, you use Svelte to build components, which are then the building blocks for your user interface (UI). As events happen and state and data change (for example: a user adding an item to the cart), the Svelte component(s) automatically update to reflect those changes in the UI. (We'll cover that more in a bit.)

So how is Svelte _different_? Glad you asked…


### How is Svelte different?

Svelte was created by [Rich Harris](https://twitter.com/rich_harris), a developer and graphics editor for the [New York Times](https://www.nytimes.com/).

The news world moves fast, so the interactive UIs and visualizations Harris was creating for the Times needed to be built as quickly as possible. But since it's critical for the news to be accessible to _everyone_, those bits of interactivity _also_ had to be as small and performant as possible.

Harris needed a solution that was extremely quick and easy to build with, yet that would be fast and smooth for any reader on any device or network, no matter how limited. In many cases, the bloated JavaScript bundles that are the byproducts of many other frameworks disqualified them from consideration. So Harris set out to build his own solution, and that's how Svelte was born.

While relatively new and small compared to the other frameworks on the list, Svelte is uniquely battle-tested: the [New York Times Covid map](https://www.nytimes.com/interactive/2021/us/covid-cases.html) is a Svelte app. (Harris's employer is far from the only large company employing the tech, however; IBM, Square, Philips, 1Password, and Spotify number among its growing list of adopters.)

---

The attention to developer experience (DX) is obvious in Svelte. I instantly loved how easy it made _everything_ I wanted to do--especially compared to React, as I cheekily tweeted at the time:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My elevator pitch for <a href="https://twitter.com/sveltejs">@sveltejs</a> :<br><br>Svelte is React without all the bullshit.</p>&mdash; Josh Collinsworth (@jjcollinsworth) <a href="https://twitter.com/jjcollinsworth/status/1155265498675929088">July 27, 2019</a></blockquote>

From the start, I was consistently and pleasantly surprised how _little_ code I needed to do things in Svelte--and how close it was to the JavaScript, HTML and CSS I already knew

<Callout>
Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.
</Callout>

In fact, I found myself having to _unlearn_ many of the more convoluted solutions common in other frameworks (a common refrain from Svelte adopters).

Just about everywhere I'd normally be reaching for a workaround or tripping over a gotcha when using another framework, Svelte was delightfully straightforward.

But instead of me talking about it, let's get to some comparisons.


### Comparing Svelte to React and Vue

As mentioned, at a basic level, Svelte is similar to other frontend frameworks. So let's look a little closer at the details of how Svelte differs: its focus on build-time over run-time, and the simplicity of its syntax.


#### Build over browser

I already mentioned how performant Svelte apps are. That's possible because Svelte takes a different approach from other frontend frameworks by doing as much as it can at the _build_ step--when the code is initially compiled--rather than running client-side. In fact, if you want to get technical, Svelte isn't really a JavaScript framework at all, as much as it is a compiler.

<Callout>
If you want to get technical, Svelte isn't really a JavaScript framework at all, as much as it&nbsp;is&nbsp;a&nbsp;compiler.
</Callout>

To elaborate: React and Vue both run _in_ the browser. You load them, and then _use_ them to execute whatever code you write (not unlike jQuery and countless similar libraries). You can load React, Vue, etc. in a script tag, then use them however you like. You can load them in a [CodePen](https://codepen.io), or similar environments. Though there's probably a build tool involved to reduce the bundle size when you work with these frameworks in a production environment, to some extent at least, you're inevitably shipping the framework itself to the browser, and loading it there.

Svelte doesn't work like that; you can't "load Svelte" in the browser, or play with it on CodePen (though the [Svelte REPL](https://svelte.dev/repl/hello-world) works well instead). Svelte isn't a script.

Instead, to create a Svelte app, you [install the Svelte repo](https://svelte.dev/blog/the-easiest-way-to-get-started) on your machine, and write your Svelte code. The Svelte compiler then processes what you write, and all that code is compiled down to minimal, self-contained JavaScript before it ever gets to the browser. That's why Svelte has been referred to as "a framework without the framework." (The REPL mentioned above offers a direct peek into the compiled JavaScript, if you're interested.)

<Callout>
All your Svelte code is compiled down to minimal, self-contained JavaScript before it ever gets to the&nbsp;browser.
</Callout>

This approach allows for extremely small bundle sizes compared to other frameworks (which in turn often translates to better loading speed and performance), since the bulk of the work is already done by the time the user loads the page.

React and Vue also both use a "[virtual DOM](https://stackoverflow.com/questions/21965738/what-is-virtual-dom)," for rendering, which--while faster than crawling the DOM itself to make changes (a common pitfall with jQuery)--still has its own performance implications. Thanks to the Svelte compiler, however, we don't have to worry about either approach; components are tied directly to their DOM nodes. You can read more about that in Rich Harris's [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).


#### Authoring components

Maybe the most contrived way to demonstrate a frontend framework is a button component that counts how many times it's been clicked. It's the "hello world" of component examples. 

Here's a demo of what I mean (**click the button**):

<svelte:component this={CounterButton} />

As you click the button above, the count increases, both behind the scenes and in the UI.

It's not a particularly practical example, but it _is_ a common one (in fact, it's one of the first examples in [the official Svelte docs](https://svelte.dev/docs)), because it's an effective way to demonstrate the bread and butter of frontend frameworks: make a small component to track your state (the count), and whenever something causes the state to change (the click), automatically update the UI (the button).

**Click through the examples below to compare this component in different frameworks:**

<CounterButtonComparison />

<SideNote>
I prefer to use arrow functions and omit semicolons, but those are just stylistic preferences, and not required by any framework.
</SideNote>

There are some key differences I'd like to point out between the Svelte version and the others:

- **Svelte is reactive by default**. This means when a variable is reassigned, every place it's used or referenced also updates automatically. (_React and Vue both require you to explicitly initialize reactive variables_.)

- **The Svelte version is the shortest**, both in terms of line count and character count. While this isn't necessarily meaningful on its own, shorter code _does_ tend to be less error-prone and more readable.

- **Svelte isn't picky about HTML.** React needs a `return` with a single element, and Vue needs a single `<template>` tag wrapping all the markup (and maybe more, depending on version). Svelte can have whatever HTML, wherever (and with all its attributes intact, unlike in JSX).


#### Other reasons to love Svelte

While the above examples don't cover them, some other features of Svelte that I love include:

- **Everything lives together in one file.** Similar to single-file `.vue` components, `.svelte` files keep your component's logic, markup _and_ styles all together. (More on that in the next section.)

- **Scoped CSS by default** (More on Svelte CSS in the next section, too).

- **[Transitions and animations baked-in](https://svelte.dev/tutorial/transition)**. A robust built-in API means there's no need to reach for an external library or hand-code visual transformations.

- **You can write logic directly in the markup**:

  ```svelte
  <!-- Svelte logic -->
  {#if isUserLoggedIn}
    <button on:click={logOut}>
      Log out
    </button>
  {:else}
    <a href="/login">
      Log in
    </a>
  {/if}
  ```

- **Loops can be used inside markup**, without requiring any elements or maps (and without requiring you to key each item):

  ```svelte
  <!-- Svelte loops -- no keys! -->
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

- **Two-way data binding** (both the data and the template can update each other; data can flow both up and down the component tree):

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

- **Easy shorthands** for class binding, prop passing, and event modifiers (that I miss now when working with other frameworks)

I could go on and on about how easy Svelte makes things, and how advanced yet simple it seems. Even [Svelte's docs and tutorial site](https://svelte.dev/tutorial/basics) is way ahead of the game; the whole thing is a live REPL (coding environment) where you can write your own Svelte code and see it running live!

One of my favorite parts about Svelte is how fun and easy it makes styling…


#### CSS in Svelte

<blockquote>
<p>A UI framework that doesn’t have a built-in way to add styles to your components is unfinished.</p>
<br/>
<cite>—Rich Harris</cite>
</blockquote>

I'm inclined to agree.

To add styles to a component in Svelte, you simply create a `<style>` tag in the component's `.svelte` file. Any CSS inside it will be scoped to the component by default.

A typical `.svelte` component might look like this (though again, you can order the pieces any way you like):

```svelte
<script>
  // Component logic goes here
</script>

<!-- HTML goes here -->

<style>
  /* Scoped CSS goes here! */
</style>
```

If you prefer, you can use SCSS in your components with [minimal modification](https://kit.svelte.dev/docs#additional-resources-integrations), and by adding `lang="scss"` to the `<style>` tag.

And if you prefer, you can easily just use plain ol' `.css` (or `.scss`) files, too. Adding them to your project in SvelteKit is as easy as importing them in your main layout file (more on that in a bit).


##### Conditional styling

Conditional styling is a _breeze_ in Svelte thanks to easy shorthands. For example, here are three ways you could conditionally add a class to an element, based on a boolean value (the class is automatically added when the value is `true`, and removed otherwise):

```svelte
<!-- Toggle CSS class based on a boolean prop -->
<script>
  let enabled = false
  // Assume this value will change
</script> 

<!-- This works… -->
<input class={enabled ? 'enabled' : ''} />

<!-- ...but it can be shortened to this... -->
<input class:enabled={enabled} />

<!-- ...which can just become this: -->
<input class:enabled />
```

Note that the last example only works if the class name and property name are identical (similar to [ES6 object property value shorthand](https://alligator.io/js/object-property-shorthand-es6/)).

Also: you can have as many `class` attributes as you need (dynamic or otherwise) on a single element:

```svelte
<div
  class="layout"
  class:logged-in={isLoggedIn}
  class:dark-mode
  class:reduce-motion
>
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

***Or*** if you prefer, you can make the entire tag global with the `global` attribute:

```svelte
<style global>
  /* All CSS here is global */
</style>
```

**One word of warning there, however:** global styles persist once loaded on the page. So if you have a `global` style tag in a component that only loads on a certain page, its styles will stick around after you've navigated to other pages, potentially applying to elements there as well.

<Callout>
I've found it's a good idea to always use a wrapping parent class selector, even when dealing with scoped styles.
</Callout>

This leads to some weirdness, since "global" only means global _once loaded_; the component has to be mounted once first before those styles are actually available.

Because of this, I've found it's a good idea to always use a wrapping parent class selector, even when dealing with scoped styles. At worst it's redundant, and at best you've saved yourself from unintentional style leakage (either now or if you decide to un-scope the styles in the future).

If you'd like to read more about styling in Svelte, be sure to read [What I Like About Writing Styles with Svelte](https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/) on CSS Tricks. 


## Ok, so that's Svelte. What's SvelteKit?

Since frontend frameworks run entirely on JavaScript, they aren't ideal for much except building out pieces of interactive UIs on a single page; by nature, they're limited to the capabilities of the browser page they're loaded on. (Because of this, sites built just with a frontend framework are sometimes called "single-page applications," or SPAs.)

<Callout>
If a frontend framework is a toolbox, an app framework is a complete workshop.
</Callout>

To overcome this limitation, most popular frameworks have their own "app framework," or: a tool that helps you build not just pieces of a UI or a single page, but entire _pages and apps_ with the framework in question.

[Next](https://nextjs.org/) is a React app framework; [Nuxt](https://nuxtjs.org/) is a Vue app framework; and [SvelteKit](https://kit.svelte.dev/) is a Svelte app framework.

You could think of app frameworks as a level _above_ frontend frameworks; if a frontend framework is a toolbox, an app framework is a complete workshop.

Most app frameworks include some combination of: pages and routing; data stores; layouts; image optimization; better SEO and full-page control; data fetching; and/or plugins--usually just about everything except a database to help you build a full-fledged site or app.


### Going static

Next, Nuxt, and SvelteKit are _all_ capable of building your finished project as a server-side rendered app, as a static site, or as some combination of both.

<Callout>
This site uses SvelteKit's static adapter, which means the pages and components are pre-rendered as plain ol' HTML&nbsp;files.
</Callout>

SvelteKit is even _more_ adaptable than that, thanks to its aptly named [adapters](https://kit.svelte.dev/docs#adapters), which process your code differently for whatever type of output and hosting you're targeting.

Currently, SvelteKit offers adapters to run your project as a Node app; as static, pre-generated HTML files; or as serverless functions (there are adapters specifically targeted for Netlify, Vercel, and Cloudflare Workers). There are several [community-created adapters](https://sveltesociety.dev/components/#category-SvelteKit%20Adapters) available as well, or you can even [write your own](https://kit.svelte.dev/docs#writing-an-adapter).

<Callout>
Thanks to the static adapter, most of this site runs just fine even with JavaScript disabled&nbsp;entirely.
</Callout>

This site uses SvelteKit's static adapter, which means the pages and components are pre-rendered as plain ol' HTML files. They can still benefit from "hydration"--JavaScript running once the page has loaded--but they don't have to. Thanks to the static adapter, most of this site runs just fine even with JavaScript disabled entirely.

Worth noting, however: by default, after the first page load, SvelteKit's router hydrates and takes over page loading, to make transitions as smooth and fast as possible. You can even designate routes to preload in the background, so that by the time the user clicks, the load is nearly instantaneous.

<SideNote>
You don't have to go entirely one way or the other; even if you're deploying your project as a Node app or with serverless functions, you can still mark specific pages to be prerendered as static HTML--handy for things like an "about" page that don't need dynamic content.
</SideNote>


### SvelteKit layouts

SvelteKit follows the convention of [layout files](https://kit.svelte.dev/docs#layouts), which are: files that "wrap" the content of any given page in additional markup, such as a header and footer.

Your base layout file renders every route in your site or app, so you'll most commonly use it as a base template that includes everything that would appear on every page of the site. The layout includes a `<slot />` for the page's main content to go inside, whatever that page or content might be, and SvelteKit renders the content in that slot.

Here's what this site's main layout file's markup looks like (slightly simplified for readability):

```svelte
<div
  id="app"
  class:reduce-motion={$prefersReducedMotion}
  class:prefers-dark={$prefersDarkMode}
  class:sidebar={pageHasSidebar}
>
  <Loader loading={$isLoading}/>

  <Header /> 

  <div class="layout"> 
    <main id="#main" tabindex="-1">
      <PageHeading />

      <PageTransition>
        <slot />
      </PageTransition>
    </main>
    
    {#if pageHasSidebar}
      <Sidebar />
    {/if}
  </div>

  <Footer />
</div>
```

That's pretty much it! This way, every page includes the header and footer, and sometimes the sidebar. Some states and preferences are passed in from the global store (those prefixed with a `$`) so that conditional classes can be applied as needed. And the `<slot />` where the page content goes is wrapped in a custom `<PageTransition>` component that (predictably) just adds the fancy transitions between pages.

It _is_ possible to have nested layouts, or layouts that apply on a per-route basis. You can also reset the layout, if you have a deeply nested route that needs its own setup.

And speaking of routing…


### Routing in SvelteKit

By default, a new SvelteKit project has a `src/routes` directory. Anything inside `src/routes` compiles to a page at that relative root.

For example:

| File:                          | Becomes route:    |
|--------------------------------|-------------------|
| `src/routes/index.svelte`      | `/` (_homepage_)  |
| `src/routes/about.svelte`      | `/about`          |
| `src/routes/blog/index.svelte` | `/blog`           |
| `src/routes/blog/some-post.md` | `/blog/some-post` |

And so on. (_Markdown files do require a small bit of extra config, but yes, you can have Markdown files as pages, or just import Markdown to inject into pages or components._)

SvelteKit can _also_ have _dynamic_ routes. For example, `/blog/[post].svelte` would be a single component that would render _any_ `/blog/*` slug. You can read more about [SvelteKit Pages here](https://kit.svelte.dev/docs#routing-pages).

The _really_ magical part, though, is that you can have server-side routes, too!

For example: lots of places in a typical blog need access to the list of your posts. You might want to put your most recent posts on your hompage, have some posts in the sidebar, and of course, they should all be listed the `/blog` page itself. You might even want category or tag pages.

That's a lot of fetching posts to redo over and over. So it's a perfect use case for a server-side route!

If you want your app to have a `/posts` endpoint that returns JSON, you just create `src/routes/posts.json.js`. This will become a `/posts.json` route in the finished application.

From there, you just define a `get()` JavaScript function that retrieves the desired data and returns it (along with a status code). This is made easier by the fact that SvelteKit has top-level `await` and `fetch` available by default.

Here's a somewhat simplified example of how you might create an endpoint to return all your Markdown posts as JSON:

```js
// posts.json.js

// The `get` function responds to GET requests
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

I won't get too much into it here, but SvelteKit also offers a way to [pre-load data server-side](https://kit.svelte.dev/docs#loading) from routes like this, or from external sources.

**Worth noting:** when using the static adapter, there of course isn't any server to query at run time. So in that case, any internal endpoint query or `fetch` call like this is run at build time, and whatever the result at that point, it will be output as plain static files.

<SideNote>
The ability to read Markdown files isn't included by default in SvelteKit, but it <em>does</em> have the fairly easy-to-install <a href="https://mdsvex.com/" rel="external">MDSvex</a> for that (the Svelte version of MDX, if you're familiar).
</SideNote>



## Static SvelteKit vs. Gridsome

Before we dive into comparisons, it's worth mentioning that SvelteKit and Gridsome aren't exactly the same type of thing. SvelteKit is an app framework capable of generating many different kinds of sites and apps, where Gridsome is just a fairly straightforward static site generator.

Still, if we're scoping the discussion to _just_ SvelteKit's static adapter, I think it's a fair, if not exact, comparison.


### Real vs. perceived performance

To compare Gridsome with SvelteKit, we need to do a bit of configuration. Gridsome pre-loads all of its routes in the background, so that they're already loaded up and ready to go instantly the moment the user clicks. So unless we're doing the same thing with SvelteKit, we're comparing apples to oranges.

Luckily, SvelteKit _does_ offer `prefetch` and `prefetchRoutes` functions (the former to prefetch only specified routes, and the latter to just prefetch _all_ routes). So I threw prefetching on _all_ the routes on the site, just to see how it would stack up against the Gridsome version.

**Even when preloading all the site's content, the SvelteKit build is dramatically smaller.**

| Framework     | Full size | Size when compressed  |
|---------------|-----------|-----------------------|
| **Gridsome**  | 3.09 MB   | 1.74 MB               |
| **SvelteKit** | 1.49 MB   | 490 kB                |

As you can see from the table above, the SvelteKit version is _half_ the size of the Gridsome build, and _less than a third_ when compressed. The SvelteKit site _at full size_ is still less than the Gridsome site was when _compressed!_

If you're curious, by the way: _without_ preloading or analytics, the SvelteKit homepage clocks in at somewhere around 141 kB transferred, and 240 kB unpacked (nearly half of which is just for the webfonts). You can load it without JavaScript to shave off about 40% of those numbers (but it naturally won't seem as fast if you do, and will be missing some of the niceness).

---

Builds and dev start times with SvelteKit are also much faster: the production build of my Gridsome site ran about seven minutes, compared to about 90 seconds for the SvelteKit version (about five times faster). The dev startup times have similar gains. But again, this is misleading, for two reasons:

1. Gridsome was doing a lot of image work at build time that SvelteKit isn't by default; and

2. Gridsome uses Webpack under the hood, where SvelteKit utilizes the much faster and more modern [Vite](https://vitejs.dev/) (pronounced "veet").

One particularly nice thing about Gridsome was its built-in `<g-image>` component. Just by using it in place of the standard HTML `<img>` tag, Gridsome would compress your images, generate a resized, responsive source set, use lazy loading, ***and*** create blurred placeholder images.

By contrast, out of the box, SvelteKit does…nothing to help with images.

My website uses few enough images (which are already generally compressed) that I decided browser-native lazy loading (combined with `aspect-ratio`) was acceptable for now. Hopefully, SvelteKit will have a first-party image compression option in the near future. (And even if not, it's possible to rig that up directly through Vite, though that's its own rabbit hole. Or, I could even use a service like [Cloudinary](https://cloudinary.com/) if image size became an issue.) But for now, the few Svelte-focused solutions I tried didn't work particularly well for my use case, and the tradeoff didn't seem to be worthwhile.


### Why move away from Gridsome?

As you can see from just perusing the posts list on this blog, it wasn't all that long ago that I moved to Gridsome in the first place. I went to a [headless Gridsome frontend](/blog/a-new-headless-site-with-gridsome) just over a year ago, and converted the site to [fully static](/blog/goodbye-wordpress) barely seven months ago. I've already talked here about how nice Gridsome's image handling is, and how fast it makes the site feel.

This naturally prompts the question: _why move in the first place_? At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about it.

<Callout>
At this point it almost seems like the only reason this site exists is so that I can rebuild it, then write a post about&nbsp;it.
</Callout>

I was a very early adopter of Gridsome, and at the time (in 2019), it still seemed to be regularly updated and headed towards a 1.0 release. But it's been almost exactly two years since the last minor version update of Gridsome ([0.7](https://gridsome.org/blog/2019/09/17/gridsome-v07/)), and at this point, it doesn't seem like it's an actively maintained project any longer.

Gridsome didn't ever really feel _complete_ to me, and that was fine when updates were still rolling out. I knew what I was in for going with a pre-1.0 technology, but the stagnation was hard to ignore. It was really good at what it did well--generating a speedy, static site with Vue and GraphQL--but the more you wanted to tweak things or leave the happy path, the more you ran into its rough edges.

More than once, I spent a day or two fighting with NPM, unable to even _run_ Gridsome on my machine. (That's more to do with the packages Gridsome relies on than Gridsome itself, but still; the frustration is the same.) The last two times I've set up new machines, I've had to spend significant time trying to get Gridsome running on them. I had to explicitly set Netlify to an older version of Node to even get it to deploy.

But moreover: SvelteKit sparks joy in a way that Gridsome doesn't anymore. This site, like any side project, is at least partially for me to enjoy. This is the one little corner of the internet that's 100% mine, where I can do anything I want for whatever reason.

When I was writing this site in Gridsome, my list of Vue projects was fairly small, which made the appeal of having a Vue outlet more appealing. Now, though, it doesn't feel like I _need_ a site in Vue anymore--especially since my day job isn't Vue-focused anymore.

<Callout>
SvelteKit sparks joy in a way that Gridsome doesn't anymore.
</Callout>

Maybe the fact that I've been working professionally with Vue for the last two years (and released [Quina](https://quina.app) late last year) is part of it, too. I still love Vue dearly, and will almost certainly pick it back up to write a project in Vue 3 one day in the near future. But silly as it sounds, for right now: that itch is scratched, and I want a different thing to play with.

Finally, [TypeScript](https://www.typescriptlang.org/) has first-class support in SvelteKit. I'm relatively new to TypeScript and have somewhat mixed feelings on it at this scope (I think it mainly shines on larger projects with multiple contributors), but I've been working on involving it more in my workflows to get better at it. At this point, close to 100% of this site's JS is typed, so I've given it a good shot at least.


#### What other options were considered?

To some degree, I considered both [Astro](https://astro.build/) and [Eleventy](https://www.11ty.dev/) for this overhaul, and you could make reasonable arguments that either one would've been better suited for the task. If my primary goal had been to build the fastest statically generated site possible with absolutely minimal JavaScript client-side, I no doubt would've gravitated towards one of these tools.

In the end, however, Eleventy is still too unopinionated for my personal tastes, and Astro is still a bit too new. (Yes, SvelteKit is new, too, but it seems to have much more of a foundation beneath it.)

And again: this is my personal site, and so the tool I _like_ the most is an important factor. So while SvelteKit might arguably be a little overkill, personally, I think it's the most fun.


### How does the code compare?

You might wonder: how does the old Vue code compare to the newer Svelte code? Is it shorter, better, and/or more readable?

Turns out: that's actually a really tricky question to answer.

I originally thought I'd show side-by-side comparisons to demonstrate Vue vs. Svelte, but there's been enough change at this point that most of the differences are either trivial, or so far apart they don't even make sense to compare anymore.

The site's changed quite a bit, even if it doesn't necessarily look like it.

The one non-trivial component that's mostly the same between the two versions is the font tester (seen on the [`/uses` page](/uses)). But it's actually about the same size, both in terms of line count and disk size. The Svelte version is negligibly larger (only by a fraction of a kB), and almost certainly just because of the addition of TypeScript.

<Callout>
“Is it better?” is a really hard question to answer, even without getting into the highly subjective topic of what "better" even means. But I <em>like</em>&nbsp;it&nbsp;better.
</Callout>

Most of the rest just isn't comparable anymore. The colorful square grid in the header and footer has been completely refactored for better performance. TypeScript is everywhere; layouts have changed; new pieces have been added and old removed. MDSvex came with PrismJS built in, which let me delete both the a full component and an external library. [Storybook](https://storybook.js.org/) and my tests are both removed for now. Lots was refactored. I relied more on global CSS previously, and have moved more towards component-based CSS this time around.

"Is it better?" is a really hard question to answer, even without getting into the highly subjective topic of what "better" even means. But I _like_ it better (even the parts that are more verbose), and I think that's the most important part. I even enjoyed the relatively rote process of moving Vue components over to Svelte.

By the way: I kept an [archival copy of the old site](https://joco-gridsome-archive.netlify.app/) live for myself to look back on, just in case you'd like to compare the two for yourself.

And while we're on the topic: here's the link to [my site's new SvelteKit repo](https://github.com/josh-collinsworth/joco-sveltekit), if you'd like to take a firsthand look behind the scenes. A lot still needs to be refactored and cleaned up (I keep a list), but you're welcome to poke around, or even clone the repo as a starter for your own blog if you like.


## What to know about SvelteKit

As of this writing, SvelteKit is still in pre-1.0 status. It seems very stable to me, and Svelte itself is definitely solid. But there are still some portions of the Kit that aren't fleshed out yet. I found the static rendering to be extremely good, but as mentioned, SvelteKit can do a _lot_ more than that. Depending on what you're building and what features you're most interested in, it may be worth spending some time to make sure SvelteKit is in good shape to handle your task, and works as expected with your deploy target.


### Debunking the small community argument

<Callout>
When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself.
</Callout>

When comparing Svelte (or any newer technology, for that matter) with the larger, more established players, arguments against adoption often point to community size. Where React, Vue, Angular, etc. all have large ecosystems full of resources for you to take advantage of, Svelte can seem comparatively small. The fear, then, is that when or if you need to reach for additional packages to handle things beyond the main framework's capabilities, you may be left in the lurch.

I'd like to put some context around that argument:

1. **You don't often _need_ packages with Svelte.** When you've been living in framework land long enough, it's easy to forget the reason you need a package in the first place is often compatibility with (or the need to work around) the framework itself. 

  Svelte is much closer to the beautifully uncomplicated HTML, CSS and JavaScript of the web, which means you don't often _need_ to go looking for a package that, say, plays nice with your framework's hooks or lifecycle methods. Plus, many of the features you'd need a package for in other frameworks come baked in (motion, scoped CSS, and state management being the biggest examples).

2. **Svelte is extremely compatible with vanilla JavaScript packages.** This means that while, yes, Svelte's ecosystem of packages and plugins is comparatively small, it can often benefit from and easily use _any_ framework-agnostic package--which is a pretty massive portion of the packages out there.

3. **Even when you _do_ need to build something yourself, SvelteKit makes it comparatively simple.** One example: previously, I was using an RSS plugin with Gridsome, but no such package exists for SvelteKit.

  A quick web search, however, was all it took to find a very easy way to [Create an RSS feed in SvelteKit](https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit), with no dependencies, in under 40 lines of code.


### Yes, Svelte scales

We've talked about how SvelteKit's components compile and ship as minimal, self-contained JavaScript, which means there's no overhead of a framework. This approach leads to smaller bundles, but the downside is: there's also less shared code, so each individual component will inevitably contain repeated code.

<Callout>
The scale at which Svelte's advantages disappear is actually unrealistically high for just about any&nbsp;application.
</Callout>

Loading a framework script upfront adds to the _initial_ load, but the more its code is reused, the the more it pays off--which means that above a certain scale, the advantage of Svelte's approach is neutralized, and it's actually _more_ efficient to build with another framework.

This causes some people to claim that Svelte doesn't scale, but that's premature.

The _real_ question that matters is: _where is that point_?

Turns out: the scale at which Svelte's advantages disappear is actually unrealistically high for just about any application. 

If you'd like more detail, you can read this [comparison of React and Svelte bundle scaling](https://github.com/halfnelson/svelte-it-will-scale/blob/master/README.md), or [this similar comparison](https://svelte-scaling.acmion.com/). But to summarize both: Svelte's advantage disappears somewhere around 150 kB of components loaded onto the page. That _sounds_ small, but components are tiny; it would actually take a pretty massive number (or extremely high complexity) to get to that point. Many components aren't even 1 kB.

Granted, this is a small personal site and not a production app, but I'm barely 20% of the way to that scale. I can't even fathom how I'd make a page large and complex enough to approach that number.

And let's not forget: that's the scale at which you're on _even ground_ with React. You'd _still_ have to go significantly larger than _that_ before there would be any meaningful difference between the two.

_Plus_, this whole discussion focuses on how things are in this moment, not on future upside. Will React get smaller and faster in the future? Probably; it's supported by a large and talented team. But it's also benefitted from nearly a decade of optimization already; there may not be a lot left to squeeze out of it at this point.

On the other hand, Svelte is comparably young. If I'm betting on which framework will improve more in the future _relative to its current position_, I'm backing Svelte, no question.


### Svelte doesn't support Internet Explorer by default

Svelte requires polyfills to run properly in Internet Explorer (and even then, support for any version of IE below 11 is not guaranteed).

If you need to support IE 11, you can read the [Svelte/IE11 GitHub issue](https://github.com/Shopify/payment-service/issues/6667), which lists some possible workarounds and polyfills. Or, this may be one case where a choice of another framework is necessitated.

However, if you're starting a new project today: note that Internet Explorer is not long for this world. [Google search recently dropped support for IE 11](https://www.searchenginejournal.com/google-search-ends-support-for-internet-explorer-11/421726/), citing its tiny and shrinking market share (only around 1% of all browsers). WordPress, which powers about 40% of the web at this point, dropped support for IE 11 in [WordPress version 5.8 earlier this year](https://wordpress.org/news/2021/05/dropping-support-for-internet-explorer-11/). And even [Microsoft itself will be putting the final nail in IE 11's coffin in July 2022](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/).


### Svelte's ecosystem is in a tricky place right now

One other thing to know at this point in SvelteKit's existence is that it's actually the _second_ stab at a Svelte app framework; [Sapper](https://sapper.svelte.dev/) was the first.

Sapper never seemed as big as SvelteKit does now, but it's been deprecated in favor of SvelteKit, and there's still some confusion that arises when searching online for code solutions in the space.

SvelteKit doesn't always work exactly the same as Svelte _or_ Sapper by default (largely because Svelte and Sapper both have a Rollup config--Rollup being the bundler that powers Svelte--where SvelteKit has its own config file). So a lot of the examples and answers you come across related to setting up configuration are likely to either need some syntax adjustment, or just not work exactly as expected. (This doesn't apply to Svelte itself so much as to SvelteKit and its unique configurations.)


## Wrapup: would I use SvelteKit again?

For just about any project, **yes**, I would use SvelteKit again in a heartbeat.

Even though it's still technically pre-1.0, SvelteKit feels very solid--much more so than other pre-1.0 frameworks I've tried--_and_ it's a delight to work with. The adapters allow you to tailor your input to any output you like, and the scope of things you can build with it is impressively vast. Plus, it's likely to be smaller and faster than whatever else you might have chosen, and with even better developer experience.

<Callout>
The Svelte rocketship is a wonderful place to be. I encourage you to step aboard.
</Callout>

As mentioned, it's still early days for SvelteKit, so there are still some areas where its established solutions may not be as robust as with other frameworks. I can understand hesitance to bet the farm on something a little newer, but I don't think I'd have any real hesitation at this point. An established solution with a rich ecosystem like Nuxt might have more to offer in this moment, but I'm confident both that I could do anything I needed to do in SvelteKit, and that it won't be long before SvelteKit fills the gaps. It's hard to imagine SvelteKit _not_ becoming the #1 go-to in all cases in the near future--especially knowing it only came out of closed beta a matter of months ago.

The Svelte rocketship is a wonderful place to be. I encourage you to step aboard.