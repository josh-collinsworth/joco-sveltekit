---
title: "Learn SvelteKit by building a statically generated blog from scratch"
date: "2021-11-24"
updated: "2021-11-24"
categories: 
  - "svelte"
  - "javascript"
  - "web"
coverImage: "seesaw.png"
coverWidth: 16
coverHeight: 9
excerpt: TODO fill this in later
---
<script>
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>


I have been gushing about SvelteKit ever since I rebuilt my site with it earlier this year. So when I found out a respected web dev colleague of mine had tried out the framework, I was delighted--for a moment. Then I saw this message:

> man I just tried to hello world SvelteKit and it is NOT for me

I've had _so_ much fun with SvelteKit, my first reaction was to type "wait, no! Let me help!" in a mild frenzy.

I paused, though, because I know it can be annoying to over-sell something, no matter how good that thing might actually be. (I'm sure we can all think of something ruined for us by its audience.)

But also: because once I thought about it, I realized getting started with SvelteKit _is_ actually a bit more involved than some other frameworks--_especially_ if all you're trying to do is make a simple static blog, which is _not_ the default behavior of SvelteKit. (Its default is server-side rendering, not prerendered HTML files.)

In an effort to prevent others from being stopped by this initial barrier, I'd like to walk you through how to set up SvelteKit as a static, markdown-powered blog with Sass--just like this site.

---

**This guide is intended to be both an intro to SvelteKit itself, and a guide to creating a static blog on SvelteKit.** I aim to cover all the high-level concepts of SvelteKit on the way to setting up a statically prerendered blog, complete with Sass and Markdown.

**However, this will _not_ be an intro to Svelte itself.** While you can probably still follow along and complete this even if you don't know anything about Svelte, I'd recommend learning the basics first. The [Svelte tutorial](https://svelte.dev/tutorial/basics) is an excellent place to start. (It's maybe the best tutorial site in front-end, honestly.)

All that said, let's get started!

## Creating a new SvelteKit app

You could check out the [SvelteKit docs](https://kit.svelte.dev/docs) for directions on getting up and running, but I'll save you a click. If you have NPM installed already (and I'll assume you do), these are the commands to generate a new SvelteKit project and get it up and running:

```bash
npm init svelte@next my-app
cd my-app
npm install
npm run dev
```

(Naturally, you can change `my-app` to whatever other title you prefer.)

When you run that first `init` command, SvelteKit will ask you some questions about your project and how you want it set up: 

![SvelteKit's setup prompt for which type of project you want to create; boilerplate, or demo](/images/post_images/sveltekit-init.png)

For this example, we'll select Skeleton project. If this is your very first time using SvelteKit, feel free to choose the SvelteKit demo app option instead, and poke around a bit to get a feel for how things work. However, while the demo app is nice to get a feel for things, it comes with several files and styles that would be a lot to undo as a starter. Hence, we'll stick with the skeleton project, since it's more of a blank slate.

The setup tool will also ask for the following preferences. Here's what I chose, though they won't matter for our purposes, and you're welcome to go with personal preference:

* No to TypeScript (just to keep things simpler)
* Yes to ESlint
* Yes to Prettier

Once you've made your choices, after a moment of installation, you should see “**Your project is ready!**” appear in your terminal, along with next steps and helpful links:

!['Your project is ready!' message appears in the terminal, along with confirmation of the options we've chosen and helpful links to get started.](/images/post_images/sveltekit-installation-confirmation.png)

You can copy and paste the directions from your terminal window, or you can find them here, too:

```bash
cd my-app # Or whatever you named your project
npm install
npm run dev -- --open
```

Complete those commands, and our new site will be running in a browser window! Yay, I can't wait to set it--oh. 

![The default welcome page for a new SvelteKit project](/images/post_images/welcome-to-sveltekit.png)

It's a bit unexciting, since we only installed the bare-bones skeleton project. There isn't even any CSS yet. But again, that gives us the freedom to style our app however we like, without the need to remove and work around old code.

You won't find much in the project folder, either, but that's ok; this is our blank canvas, and we'll get some paint on it soon enough.


## Adding the static adapter

**SvelteKit is server-rendered by default.** That's great, because server-side rendering is generally better for performance, accessibility, and SEO. However, that also means static prerendering (which is what we want) is opt-in.

You _can_ mark any page for static pre-generation--handy for things like an "about" or "faq" page that won't have any dynamic content. However, we want our _entire_ site to be statically pre-rendered, and marking each and every page manually would be an error-prone chore. So instead, we'll reach for SvelteKit's [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static).

SvelteKit has a number of available [adapters](https://kit.svelte.dev/docs#adapters), which shape our project's build output based on how we want to deploy. SvelteKit comes pre-installed with an adapter that will automatically detect and build properly for Netlify, Vercel, or Cloudflare Pages, which is both handy and impressive! There are other adapters for other environments, too, like generic Node. But the one we're concerned with is called `adapter-static`.

So, while we _could_ wait for later for this step, our first move in our new project will be to install the adapter:

```bash
npm i -D @sveltejs/adapter-static@next
```

Once installed, we have to make a very small change to our `svelte.config.js` file to use the static adapter.

`svelte.config.js` is the home of our app's configuration details. When we add packages or want to change how SvelteKit works, this is the file we'll use to make sure SvelteKit knows about it.

Go ahead and open up your `svelte.config.js` file, which is located in the project's root folder. At this point, the only thing we actually have to do is change `adapter-auto` to `adapter-static` on line 1.

```js
// Replace the original `adapter-auto` line with this.
import adapter from '@sveltejs/adapter-static';
```

You _can_ supply further customization options if you want to (as an object passed to the `adapter()` function), but the defaults are great for us, so there's no need to. You can check out the [adapter-static readme](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) for info on that if you want to.

---

With our adapter installed and in use in our config file, we're ready to move on, knowing that now every page on our site will be pre-rendered as static HTML at build time! You can even view source in the browser to confirm that the site is now served as pre-rendered HTML.

**One important note:** be sure to restart your server after making changes to `svelte.config.js`. You'll likely see a warning to do so in your terminal already at this point.

<SideNote>
One of the great things about SvelteKit's static mode is that it pre-renders all your pages as static HTML, but <em>also</em> loads some client-side JavaScript to help with navigation and preloading in the background. This way, the site works just fine without JavaScript, but is progressively enhanced.
</SideNote>


## Adding a global layout file

Most sites and apps have some elements that are reused on every page (a `<header>` and `<footer>` being the most common and obvious examples). SvelteKit, like many other frameworks, conveniently lets us define one global layout file for all such repeated content.

To create a global layout file, inside of `src/routes`, make a new file named `__layout.svelte`. **Note the _two_ underscores to begin the file name**; this is a SvelteKit convention. SvelteKit checks for a `__layout.svelte` file inside every `src/routes` directory, and uses it to "wrap" the page content if found. 

Open up our new `src/routes/__layout.svelte` file, and let's add a placeholder header and footer to our site, just so we can get a look at the layout file in action:

```svelte
<!-- __layout.svelte -->
<header>Hi, I'm a header</header>

<main>
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>
```

Save that, and you should now see that header text above our main index page's contents, and the footer text below. That's because Svelte (like Vue) uses the `<slot />` element to inject child components.

![The header text appears above the contents of the index.svelte file, and the footer text below.](/images/post_images/sveltekit-layout-shown.png)

This main `__layout.svelte` file is in effect the parent component to our entire app, and the current page or route is rendered in the `<slot />` as its child component.

<SideNote>
Notice that we don't need a single element or <code>&lt;template&gt;</code> tag around our HTML in Svelte, unlike other frameworks.
</SideNote>


## Routing in SvelteKit

Like many frameworks, SvelteKit has a directory-based layout approach. You might have even noticed it already.

**Any file inside of `src/routes` becomes a corresponding route on the finished site:**

* The current `index.svelte` file is our homepage (`/`)

* A file named `about.svelte` would become the `/about` page

* `blog/some-post.svelte` would become a page at `/blog/some-post`

* `blog/index.svelte` would simply be the `/blog` page


### Creating new pages

Just to get the hang of it, let's create a couple of pages inside of `src/routes` at this point. (We can always delete them later.)

I'm going to create two files:

* `src/routes/about.svelte`
* `src/routes/contact.svelte`

Inside each of those files, we can just toss a quick heading, and maybe some text, just to make things a little more interesting:

```svelte
<!-- about.svelte -->
<h1>Hi, I'm Josh!</h1>

<p>This is my about page.</p>
```

```svelte
<!-- contact.svelte -->
<h1>Get in touch</h1>

<p><a href="mailto:someone@yoursite.com">Email me!</a></p>
```

Now we should have three pages; our `index.svelte` file, plus the two we created (as well as our global layout file) inside of `src/routes`:

![The src/routes folder now contains Svelte files for __layout, about, contact, and index.](/images/post_images/sveltekit-about-page-created.png)

At this point, we can visit `/contact` and/or `/about` to see the pages we just created. There isn't much to see, of course, but it's nice to see the routing in action, and how these new pages are automatically placed inside the global layout file.

![Our bare-bones contact page rendered in the browser](/images/post_images/sveltekit-contact-example.png)


## Adding navigation and creating our first component

Manually typing routes in the browser isn't great, so let's modify our global layout file--and in the process, we'll create our first component!

Let's create a new folder called `lib` inside of `src`. (`lib` is a SvelteKit convention; more on that in a moment.)

Inside of `src/lib`, we'll create a folder named `components`, just for organizational purposes.

And finally, we'll create a new component inside of `src/lib/components` named `Header.svelte`.

<SideNote>
You don't have to capitalize component names, but doing so to distinguish components from HTML elements is generally accepted convention.
</SideNote>

Inside our new Header component, let's place some proper (albeit basic) navigation:

```svelte
<!-- Header.svelte -->
<header>
  <a href="/">Home</a>

  <nav>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>
```

Once our new component is saved, let's go back to `__layout.svelte`, and replace our dummy `<header>` with this component.

Like most frameworks, in order to use a component, you'll need to `import` it first. So, let's create a `<script>` tag in our `__layout.svelte` file. (I personally like to put the `script` tag at the top of the file, but you don't have to; Svelte gives you the freedom to arrange your files however you prefer.)

```svelte
<!-- __layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
</script>
```

Notice that `$lib` part of the path? `$lib` is a handy shortcut for `src/lib`. This is the only alias SvelteKit ships with, but you can add your own (or replace it) if you like, in `jsconfig.json`.

Anyway, with the `import` in place, we can now replace our dummy `<header>` element with a new `<Header />` component. That done and saved, we should see something _slightly_ more user-friendly in our browser:

![Our new header shows up now in the site](/images/post_images/sveltekit-header-component.png)

The styling isn't great, of course, but it _is_ useable. You can click between pages now, if you're so inclined, which will make testing things out a bit easier.


### Component styling

In Svelte, a component's styles are scoped by default. That makes it easy to write CSS without fearing it bleeding out and affecting layout or appearance anywhere else in the app.

To get an idea, let's open `Header.svelte` and add a `<style>` tag. (It could go anywhere, but I prefer to put it at the end.)

```svelte
<!-- Header.svelte -->
<header>
  <!-- ... HTML content here -->
</header>

<style>
  header {
    padding: 1rem;
    background: lightskyblue;
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
```

If you save and take a look at the site now, you should see your header looking a little more header-like. You might _also_ notice that the `a` rule doesn't affect any of the links in our main page content. That's the power of scoping!

![The links in our Header component are not underlined or blue, but links outside the component remain with the default styling.](/images/post_images/sveltekit-scoped.png)

If you want to, you could repeat this process with a `<Footer />` component at this point, too. That's probably a good idea to do at some point, but I won't go into it here.

#### When is it a component and when is it a page?

It might be a little confusing that we're jumping in and out of several `.svelte` files now, each with different roles. So just to be sure to clarify before moving on:

* Any `.svelte` file inside of `src/routes` becomes its own page

  * The exception is `__layout.svelte` files, which "wrap" any pages in their directory or subdirectories

* Any _piece_ of a page or element that you might pull in and use on its own is a component, and we'll place those inside of `src/lib/components`; they don't get routes


## Global styling

There are a few ways you can add global CSS files in Svelte. You _could_ open up `app.html` and add the link inside the `<head>` element there. You could _also_ use the `<svelte:head>` tag inside a component to do the same thing, or even use `@import` inside a component's `<style>` tag.

All of those would work, but I find the _best_ method is to simply `import` the CSS inside a Svelte component's `<script>` tag. It's easy, for one thing, but more importantly, this _also_ puts the styles through SvelteKit's preprocessor, which we'll want when we add Sass.

Create a new folder inside of `src/lib` for your styles (the name is not important in this case; it's just for organizational purposes), and add a `style.css` file inside it. You can add whatever CSS you like, if you need a suggestion, here's a little bit of boilerplate that should get things looking slightly nicer:

```css
/* style.css */
body {
  margin: 0;
  background: #eee;
  color: #333;
  font-family: sans-serif;
}

main {
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
```

Once we've got a CSS file with some styles in it, adding it to our global `__layout.svelte` component is as easy as adding an `import` to the `<script>` tag:

```svelte
<!-- __layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/style.css'
</script>

<!-- HTML here -->
```

That's it! Save that, and you should see your styles loading on the main page, and globally applying to _all_ elements. Thanks to the static adapter, if you view the page source, you'll even see our style has been added to the HTML, rather than being client-rendered. Neat!

We're not limited to vanilla CSS, however. Let's see how to add Sass to our project!

### Adding Sass to SvelteKit

One of the great things about SvelteKit is how comparatively easy it makes adding whatever external processing tools you like, thanks to [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess). From the SvelteKit docs:

> `svelte-preprocess` automatically transforms the code in your Svelte templates to provide support for TypeScript, PostCSS, scss/sass, Less, and many other technologies.

Our next step is to install both `svelte-preprocess` and `sass`, which we may as well do at the same time:

```bash
npm i -D svelte-preprocess sass
```

<SideNote>
This command installs the most modern version of Sass, which isn't compatible with all versions of Node. You may need to adjust your Node version with a tool like NVM if you hit errors with this Sass package.
</SideNote>

Next, still in our `svelte.config.js` file, we just need to add a little bit to tell SvelteKit how to preprocess any Sass code we throw its way.

First, import `svelte-preprocess` by adding this line at the top of the file:

```js
// svelte.config.js
import preprocess from 'svelte-preprocess';
```

Then, add a `preprocess` property to the `config` object.

```js
// svelte.config.js
const config = {
  kit: { 
    //...other config options here already
  },

  preprocess: [
    preprocess(),
  ],
}
```

The `preprocess` option passes any number of preprocessors to SvelteKit, to use when building the site. We'll add Markdown support here later, too (which is why we're using an array).

Note that you _can_ pass additional configuration options into the `preprocess()` function here. One of the most useful is the `scss.prependData` option, which allows you to automatically inject code at the start of any Sass processing.

I personally take advantage of this option to make sure I always have access to my Sass variables. It even works in component `<style lang="scss">` tags!

```js
// svelte.config.js
preprocess({
  scss: {
    // Adds this line anywhere Sass is processed
    prependData: `@import 'src/lib/assets/scss/_vars.scss';`
  },
}),
```

That's jumping ahead a bit, though; don't add that now. I just wanted you to know that option exists because it's very nice.

Anyway: we can test out Sass by opening up our `src/routes/index.svelte` file, and adding a block of Sass styles. You can use Sass inside any component's `<style>` block by adding a `lang="scss"` attribute, like so:

```svelte
<style lang="scss">
  $orange: #ff6a13;
  $size: 4rem;

  h1 {
    font-size: $size;
    color: $orange;
  }
</style>
```

Make sure both files are saved, and you should see some…well, questionable styling. But it works!

Feel free to delete those styles if you like; that was just an example to demonstrate how we can use Sass in components. Next, let's look at using global `.scss` files.
 

### Linking to Sass files

Linking to Sass files is actually exactly the same as linking to CSS files, like we've already covered. So this will be short!

In fact, at this point, we can just rename our existing `style.css` file to `style.scss`. (We'll need to update the `import` in our layout file, too.)

Or, if you prefer, you can create a new `.scss` file.

Either way, you'll just `import` it to use it:

```svelte
<!-- __layout.svelte -->
<script>
  import '$lib/styles/style.scss';
  // Other imports, etc.
</script>
```

Inside that main `.scss` file, you're free to `@import` any other SCSS files you like, as you might when using Sass. Since our layout "wraps" every page on the site, any Sass that passes through it will be compiled as a global style.

---

Ok, we've gotten a pretty good idea of project structure and styling at this point. Let's move on to the last big missing piece: support for Markdown, via a Svelte package called MDSvex.


## Adding Markdown support with MDSvex

If you've heard of MDX (generally used in React-based projects), you could think of the curiously named MDSvex as the Svelte equivalent. Otherwise, just know that MDSvex not only processes Markdown into static HTML for us, but it _also_ allows us to inject Svelte into Markdown--handy for adding functional components to our content where needed!

Here's the terminal command to install MDSvex:

```bash
npm i -D mdsvex
```

Just like `svelte-preprocess`, once we've installed MDSvex, we'll need to let SvelteKit know how to use it, in our `svelte.config.js` file.

First, add MDSvex to the list of imports at the top of the file (notice the named import `{}` syntax):

```js
// svelte.config.js
import { mdsvex } from 'mdsvex';
```

Then, inside of the `config` object, we'll need to add two things:

1. Add a `config.extensions` property, to tell SvelteKit what kind of files will be preprocessed with MDSvex;

2. Add the `mdsvex()` function to the `config.preprocess` array.

```js
// svelte.config.js
const config = {
  kit: { /* Config options here */ },

  extensions: ['.svelte', '.md'],

  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ]
}
```

Note that we have `extensions` properties in two places; **both of these are necessary!**

`config.extensions` tells SvelteKit what types of files may have transformations _in_ them, and since most things in SvelteKit go through a Svelte component in some way or another, we'll need to include both `.svelte` and `.md` file types.

The preprocessor option tells MDSvex what file types to _apply_ the transformation to. (The default is `.svx`, which is why this option is necessary.)

Be sure to restart your dev server after making this config change.

---

At this point, if we've saved our config file and restarted our server successfully, we're ready to start adding Markdown files to our project! (If you're running into errors, double-check to be sure that everything installed properly, that all the necessary imports are present in your config file, and that there are no syntax errors in the config file.)

If you like, you can even use Markdown for page contents; create `src/routes/markdown-page.md` and throw some Markdown into it, and you'll be able to see your content by visiting `/markdown-page`!

![Adding a bit of markdown inside of src/routes/markdown-page.md](/images/post_images/sveltekit-markdown-page.png)

![Our markdown file rendered out as a page on our website](/images/post_images/sveltekit-markdown-page-rendered.png)

Markdown is a handy option if you've got pages on your website that are mainly text-based, and that you don't want to hand-code the HTML for. (My [`/uses`](/uses) page is a Markdown file.)

You can even import and use Markdown files _inside of_ other files if you want to, although I won't get into that here.

Instead, I think we should talk a little more about how to set up our blog.


## Setting up the blog

By now you may be able to predict the next step. If we want our blog posts available at the `/blog` route, then we'll want to create a `blog` folder inside of `src/routes`.

From there, let's create a couple of dummy posts inside of `src/routes/blog`. No need for anything particularly fancy; just a couple of `.md` files (ideally with names that are easy to type), and a bit of Markdown content inside them.

I've decided to just create `1.md` and `2.md` inside my `src/routes/blog` folder, and place a littel content like this inside of them:

```markdown
---
title: Post One
date: 12/14/2021
---

Hello, I am _Post One._

**Nice to meet you!**
```

You can now visit `/blog/1` in your browser, and see the content of that post--although not the frontmatter (the bit at the top with the post metadata).

For _that_, we'll need a **nested layout**.


### Nested layouts

We already saw that a `__layout.svelte` component would be a global layout file, when placed inside of `src/routes`. But you can also _nest_ layouts!

In our case, we'll add a _second_ `__layout.svelte` file inside `src/routes/blog`. This will wrap our blog posts in the inner blog layout, which in turn will be wrapped by the outer, global layout file.

Create a new `__layout.svelte` file inside of `src/routes/blog` if you haven't already, and this is where things start to get really interesting.


### Server-side loading

All right, this is where things are going to start getting a little complicated, and where we begin diving into some of the more complex features of SvelteKit. We'll take our time, so we cover the concepts well.

Right now, we have a new, nested layout file for the `/blog` route. It will render any and all blog pages we visit. But currently, it's not showing any frontmatter.

In order to pull in the current post's frontmatter data, we'll need to import the current posts's Markdown file inside of our layout file. And _that's_ something we'll need to do server side.

<SideNote>
When using the static adapter, as we are in this case, anything that would happen server-side on our deployed site actually happens at build time instead.
</SideNote>

We already know that by default, Svelte has you put all your dynamic JavaScript inside a `<script>` tag; any state, props, methods, etc. that the component may have or rely on.

SvelteKit goes one step further than this; Svelte files in SvelteKit can also have a _second_ `<script>` tag for anything that needs to run server side. The second is differentiated using a `context="module"` attribute, and--importantly--can pass props to the "normal" client side.

(Note that this is only true for routes, however, not for component files.)

You could think of the `<script context="module">` element as a sort of mini companion component, that runs server-side (or at build time, in our case), and passes props to our component.

So, knowing this, in our nested `src/routes/blog/__layout.svelte` file, we'll add a module script to the top.

```svelte
<!-- src/routes/blog/__layout.svelte -->
<script context="module">
  // Code here will be executed server side,
  // to generate props used by the component
</script>
```

There's a particular convention that SvelteKit expects and uses here:

- Our module script have a function export named `load`;
- The exported `load` function should return an object with a `props` property, which gets passed to the component on the client side;
- This function has access to a few special arguments, including `{page}`, which contains info about the current route.

Let's start comparatively simple by just grabbing the content of the Markdown page that matches the current path, then passing it back to the client side. The client side can then render it as a component.

```svelte
<!-- src/routes/blog/__layout.svelte -->
<script context="module">
  export async function load({ page }) {
    // Import the markdown file that matches the current route
    const file = await import(`..${page.path}.md`)

    // .default is the actual content of the file
    const Content = await file.default
    
    // Props to be exported to our "normal" script and template
    return {
      props: {
        Content,
      }
    }
  }
</script>


<script>
  // Expects and accepts a `Content` prop from the server
  export let Content
</script>


<article>
  <!-- Render the content (note: must be uppercase) -->
  <Content />
</article>
```

<SideNote>
The <code>page.path</code> variable used in the snippet above starts with <code>/blog</code>. Since this file is already inside the <code>/blog</code> folder, we don't want that; <code>/blog/blog</code> isn't a valid path. 
<br /><br />
We <em>could</em> add some string manipulation to remove that first bit, but I prefer to just add <code>..</code> to the beginning. This simple fix causes the import function to go up out of the folder, and then right back down in harmlessly, with no string management required.
</SideNote>

If you visit one of your blog post routes at this point, you'll see the result isn't exactly pretty, but it _does_ work! You should be able to toggle between your post URLs to see the page content update at this point.

![The content of the markdown file rendered inside the blog layout](/images/post_images/sveltekit-min-blog-post-render.png)

That's not really any better than what we had before, though, so let's add just a bit more to get to the interesting part.

Just as `file.default` is the imported Markdown file's contents in the module above, `file.metadata` will be its frontmatter contents. So we can add a second prop to pass back to our script and template pretty easily at this point:

```svelte
<script context="module">
  export async function load({ page }) {
    const file = await import(`..${page.path}.md`)

    const Content = await file.default
    const meta = await file.metadata
    
    return {
      props: {
        Content, meta
      }
    }
  }
</script>


<script>
  export let Content, meta
</script>


<article>
  <h1>{meta.title}</h1>
  <p>Published: {meta.date}</p>

  <Content />
</article>
```

Now _that's_ a bit better!

![Our blog post page is now rendering with a title and a date.](/images/post_images/sveltekit-rendered-md-post-with-meta.png)

Note that you may want to include a `try`/`catch` block inside of your module script. We didn't do that in the example above just for simplicity's sake, but in the event of an error, you may want to return a specific status code and/or message.

```svelte
<script context="module">
  export async function load({ page }) {
    try {
      // Successful code here
    } catch(error) {
      return {
        status: 500,
        error: 'NOT GONNA WORK, BUDDY! ' + error.message
      }
    }
  }
</script>
```

Hit an error now, and we'll see something like this:

![The custom error message defined above](/images/post_images/sveltekit-custom-500.png)

Worth knowing: what we're looking at is SvelteKit's built-in error component. But just like we can provide our own `__layout.svelte` file, we can _also_ provide an `__error.svelte` file to process any errors in our application. I won't go into that here, but you can check the official [Svelte docs error pages](https://kit.svelte.dev/docs#layouts-error-pages) entry for full info.

---

All right, now that we've got our server-side module script working, everything's looking pretty good for individual posts at this point…but how do we handle the `/blog` path itself? We'll probably want an index page that lists out _all_ of our posts, so let's talk about how to achieve that--and the trap that we just created for ourselves.


### Adding a blog index

You might have already thought ahead at this point, and realized we'll need an `index.svelte` file inside of `src/routes/blog`, to become the `/blog` page.

If you try that out right now, though, you're going to run into a problem…

![A 500 error greets us at our new index route](/images/post_images/sveltekit-500.png)