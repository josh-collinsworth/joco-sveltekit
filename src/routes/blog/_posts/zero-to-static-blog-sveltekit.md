---
title: "Let's learn SvelteKit by building a static Markdown blog from scratch"
date: "2021-11-24"
updated: "2021-11-24"
categories: 
  - "svelte"
  - "javascript"
  - "web"
coverImage: "sveltekit-learn.png"
coverWidth: 16
coverHeight: 9
excerpt: Learn the fundamentals of SvelteKit by building a statically generated blog from scratch, with Markdown support, Sass, an API, and an RSS feed.
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

For this example, we'll select Skeleton project. If this is your very first time using SvelteKit, feel free to choose the SvelteKit demo app option instead, and poke around a bit to get a sense of how things work. However, while the demo app is nice to get a feel for things, it comes with several files and styles that would be a lot to undo as a starter. Hence, we'll stick with the skeleton project, since it's more of a blank slate.

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


## Creating a global layout file

The first thing we'll do in our new app is make a layout that wraps all our pages.

Most sites and apps have some elements that are reused on every page (a `<header>` and `<footer>` being the most common and obvious examples). SvelteKit, like many other frameworks, conveniently lets us define one global layout file for all such repeated content.

Inside of `src/routes`, make a new file named `__layout.svelte`. Note the _two_ underscores to begin the file name; this is a SvelteKit convention. SvelteKit checks for a `__layout.svelte` file inside every `src/routes` directory, and uses it to "wrap" any content in that directory. Since our new `__layout` file will be at the top level of the `routes` folder, it will apply globally, at every route in our app. 

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


## Routing in SvelteKit

Like many frameworks, SvelteKit has a directory-based layout approach. You might have even noticed it already.

**Any file inside of `src/routes` becomes a corresponding route on the finished site:**

* The current `index.svelte` file is our homepage (`/`)

* A file named `about.svelte` would become the `/about` page

* `blog/index.svelte` would be be the `/blog` page

* `blog/some-post.svelte` becomes `/blog/some-post`


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

Inside our new `Header` component, let's place some proper (albeit basic) navigation:

```svelte
<!-- Header.svelte -->
<header>
  <a href="/">Home</a>

  <nav>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
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

(**Note:** the Blog link will currently 404 because we don't have a `blog` page or directory inside of our `routes` folder, but we'll fix that later.)

Once our new component is saved, let's go back to `__layout.svelte`, and replace our dummy `<header>` with this component.


Like most frameworks, in order to use a component, you'll need to `import` it first. So, let's create a `<script>` tag in our `__layout.svelte` file to handle that. (I personally like to put the `script` tag at the top of the file, but you don't have to; Svelte gives you the freedom to arrange your files however you prefer.)

```svelte
<!-- __layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
</script>
```

Notice that `$lib` part of the path? `$lib` is a handy shortcut for `src/lib`. This is the only alias SvelteKit ships with, but you can add your own (or replace it) if you like, in `jsconfig.json`.

Anyway, with the `import` in place, we can now replace our dummy `<header>` element with a new `<Header />` component. That done and saved, we should see something _slightly_ more user-friendly in our browser:

![Our new header shows up now in the site](/images/post_images/sveltekit-header-component.png)

The styling isn't great, of course, but it _is_ useable. You can click between pages now, if you're so inclined, which will make testing things out a bit easier. (Again, just remember the blog page is _supposed_ to 404 for the moment.)


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

* Any `.svelte` file inside of `src/routes` becomes its own page.

  * The exception is `__layout.svelte` files, which "wrap" any pages in their directory or subdirectories.

* Any _piece_ of a page or element that you might pull in and use on its own is a component, and we'll place those inside of `src/lib/components`; they don't get routes of their own.


## Global styling

There are a few ways you can add global CSS files in SvelteKit, but I find the _best_ method is to simply `import` the CSS inside a Svelte component's `<script>` tag. It's easy, for one thing, but more importantly, this _also_ puts the styles through SvelteKit's preprocessor, which we'll want when we add Sass in just a moment.

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

That's it! Save that, and you should see your styles loading on the main page, and globally applying to _all_ elements. Since SvelteKit is server-rendered, if you view the page source, you'll even see our style has been added to the HTML, rather than being client-rendered. Neat!

![Our CSS is now showing on the site and making it look (slightly) less ugly.](/images/post_images/sveltekit-css.png)

We're not limited to vanilla CSS, however. Let's see how to add Sass to our project!

### Adding Sass to SvelteKit

One of the great things about SvelteKit is how comparatively easy it makes adding whatever external processing tools you like, thanks to [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess). From the SvelteKit docs:

> `svelte-preprocess` automatically transforms the code in your Svelte templates to provide support for TypeScript, PostCSS, scss/sass, Less, and many other technologies.

Our next step is to install both `svelte-preprocess` and `sass`, which we may as well do at the same time:

```bash
npm i -D svelte-preprocess sass
```

<SideNote>
This command installs the most modern version of Sass, which isn't compatible with all versions of Node. You may need to adjust your Node version with a tool like <a href="https://github.com/nvm-sh/nvm">NVM</a> if you hit errors with this Sass package.
</SideNote>

Next, open the `svelte.config.js` file in the project root. As the name implies, this is where we can make changes to SvelteKit's options and compiler.

The change is minimal; we just need to add a little bit to tell SvelteKit how to preprocess any Sass code we throw its way. First, import `svelte-preprocess` by adding this line at the top of the file:

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

Note that you _can_ pass additional configuration options into the `preprocess()` function here, but we won't do that now. It's worth mentioning the `scss.prependData` option, however, which allows you to automatically inject code at the start of any Sass processing (such as Sass variables or an entire `@import`). You can read more about that in the [`svelte-preprocess` docs](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md#31-prepending-content); I just wanted you to know it's an option. 

We can test out Sass by opening up our `src/routes/index.svelte` file, and adding a block of Sass styles. You can use Sass inside any component's `<style>` block by adding a `lang="scss"` attribute, like so:

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

![Our new Sass is loading to make the main header on the index page large and orange.](/images/post_images/sveltekit-questionable-sass.png)

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

You can even import and use Markdown files _inside of_ other files if you want to, although I won't get into that here. (It's a handy option if you want some per-page styling for Markdown content, though.)

Let's cover a couple other nice features of MDSvex before moving on.


### Code blocks in markdown

One extremely handy feature of MDSvex is that it comes with prism.js pre-installed and ready to use. All you need to do is note in your Markdown code what language a code block is, and MDSvex will highlight it accordingly, like so:

```markdown
\```js
// JavaScript goes here
\```
```

All the code blocks on this website are made just like that. And as a bonus: MDSvex even has `svelte` available as a highlighting option!


### Using Svelte components in Markdown

Let's create a new component in our `src/lib/components` folder. It doesn't need to be anything fancy; just something you might want to use in a blog post.

You might have noticed my little side notes throughout this post; they make a perfect example!

```svelte
<!-- SideNote.svelte -->
<div class="side-note">
  <slot />
</div>


<style global lang="scss">
  .side-note {
    width: calc(100% + 2rem);
    margin-left: -1rem;
    padding: 1rem;
    font-style: italic;
    font-size: 0.9rem;

    &::before {
      content: 'Side note:';
      display: block;
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-style: normal;
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
</style>
```

To import a component in a Markdown file, you just drop in a `script` tag and import the component there. You can then add it to your Markdown just like you would add it in a Svelte file:

```markdown
<script>
  import SideNote from '$lib/components/SideNote.svelte'
</script>

# Hey there

**I'm a markdown page!**

<SideNote>
Markdown is rad!
</SideNote>
```

This example is arguably a little bit contrived. Some possibly more useful examples: you could have a `<RelatedPosts>` component that loads previews of other posts similar to the current one. Or, maybe you'd like to let the user compare two images by swiping between the two; that would be a great component use case.

Hopefully, it's easy to imagine the power of being able to drop arbitrary Svelte components into post content.


## Setting up the blog routes

Now it's time to get into the real meat of this tutorial: setting up our actual blog.

At this point, one viable route forward would be to create a `src/routes/blog` folder, and simply toss all our Markdown posts inside of it. That would work. They'd each have their own route that way; it's a simple solution.

But I'm actually going to advocate for a _different_ route forward (pun fully intended).

If we were to drop all our markdown files directly into the `src/routes/blog` folder, we would need a nested layout file in order to pull frontmatter from the posts into our templates. And if we did _that_, we'd be getting in our own way when setting up the `/blog` index route, since our layout would be trying to do two very different things at once. It would be in charge of rendering both a single post, _and_ rendering the list of _all_ our posts. And having one layout in charge of two different things probably isn't ideal.

Rather than go into that, I think we'll be much better off utilizing two very handy features of SvelteKit: [dynamic pages](https://kit.svelte.dev/docs#routing-pages), and [private modules](https://kit.svelte.dev/docs#routing-private-modules).


### Adding posts, and private routes

To start, if you don't already have a `src/routes/blog` folder, make one now.

Next, it will be handy to have at least a couple of Markdown post files to work with, so let's create some dummy posts.

Inside of `src/routes/blog`, create _another_ folder, named `_posts`.

Note the underscore; **any route that begins with a single underscore is private.** That means it (and its contents) can be loaded by _other_ pages and components, but it won't have its own route. No matter what we put inside of the `_posts` folder, we won't be able to actually visit it directly in the browser. (This may seem like more work than just plopping the posts right into our `blog` folder, and it is. But it's with good reason. Bear with me.)

Now let's create a couple of dummy posts inside our new folder. No need for anything lengthy or fancy; just a couple of `.md` files (ideally with names that are easy to type), and a bit of Markdown content inside them. (Alternatively, if you already have some `.md` files, you're welcome to just grab those.)

I've decided to just create `1.md` and `2.md` inside my `_posts` folder for simplicity's sake, and to place a little content like this inside of them:

```markdown
---
title: Post One
date: 2021-12-14
---

Hello, I am _Post One._

**Nice to meet you!**
```

You don't need to copy that directly; you're welcome to put whatever content you like in your Markdown posts, and to name them however you prefer. But I _will_ be using those two frontmatter properties in the examples (especially `date`), so if you don't have them, just be prepared.

Anyway, if you want, you can visit `/blog/_posts/1` (or whatever your markdown post is named, if not `1`), just to confirm that nothing is showing. Private routes, doing their thing. (Good, because we don't want duplicate content on our site.)

So how _do_ we load our posts? Well, now that we have some files to work with, we'll want to make a **dynamic page**.


### Dynamic pages

Because we might want to have have one template file to handle any number of potential routes or pages--for example, category listings, or in our case, one template file to render all blog posts--SvelteKit offers us _dynamic pages_.

**A dynamic page handles _any_ unmatched route in the given directory.** Think of it as a wildcard page.

To make a page dynamic, all we have to do is wrap its title in brackets (`[]`). So, our next step is to create a file inside `src/routes/blog` named `[slug].svelte`. 

<SideNote>
The word <code>slug</code> isn't important; it's just a variable, and could be anything. But as with any variable, it's good to name it semantically.
</SideNote>

Once you've created that file, you can actually visit `/blog` or `/blog/anything-here`, and you won't get a 404. Our dynamic page is handling _all_ unmatched the routes inside of the `/blog` folder for us. (And since we don't have an index file or any other sub-pages, _all_ `/blog` routes are currently unmatched.)

We'll load our actual post content in this file. It will _work_ basically like a nested layout file, but since it only matches specific post slugs, it won't interfere with the index route we'll create in a bit.


### Server-side loading

All right, this is where things are going to start getting a little complex, as we begin diving into some of the more advanced features of SvelteKit. We'll take our time, so we cover the concepts well.

Right now, we have a new `[slug].svelte` file for the `/blog` route. It will be responsible for rendering any and all blog pages we visit, by looking at the current page slug, and grabbing the matching Markdown file from the `_posts` folder.

As you may have already realized, this isn't something we can handle at run time; we can't load Markdown files in a browser. This needs to be done server-side.

<SideNote>
When pre-generating static files, as we will be, anything that would happen server-side on our deployed site actually happens at build time instead.
</SideNote>

We already know that by default, Svelte has you put all your dynamic JavaScript inside a `<script>` tag; any state, props, methods, etc. that the component may have or rely on.

SvelteKit goes one step further; Svelte files in SvelteKit can also have a _second_ `<script>` tag for anything that needs to run server-side.

This server `script` is differentiated using a `context="module"` attribute. It handles anything that might need to be done on the server (during pre-rendering and/or loading), and--importantly--can also pass props to the "normal" component `script` tag to use.

<SideNote>
Only components that are routes or layouts can have server scripts; regular, reusable Svelte components cannot.
</SideNote>

For us, the first step is to add a server script to our `[slug].svelte` file:

```svelte
<!-- [slug].svelte -->
<script context="module">
  // Code here will be executed server side,
  // to generate props used by the component
</script>
```

**Ok, so now how do we do stuff on the server?**

There's a convention to follow in SvelteKit for server-side loading:

- This module script should export a function named `load`;
- The `load` function has access to a few special arguments, including `page`, which contains info about the current route;
- The function can pass data to the main `script` to use as props.

Just to get an idea of what we're working with, let's start with any front-end developer's best friend: `console.log`.

```svelte
<!-- [slug].svelte -->
<script context="module">
  export function load({ page }) {
    console.log(page)
  }
</script>
```

If you load a `/blog/something` route at this point, you won't see anything in the browser. You _also_ won't find anything in the browser console.

Instead, look in your terminal, where your local dev server is running:

![The 'page' object, containing the host, path, query, and params. The params object contains the current slug.](/images/post_images/sveltekit-console-slug.png)

Whatever your current route is, it will be identified as `slug` in the `params` object, because our file is named `[slug].svelte`. If you renamed the file, the property would be whatever the new name is. And when you're visiting a `/blog/*` route, the `*` will be the value. (You can try loading some `/blog/*` routes in your browser right now, if you want to see.)

<SideNote>
There are other properties available to the <code>load</code> function besides <code>page</code>, but we won't use them just yet. You can peek at the <a href="https://kit.svelte.dev/docs#loading">loading section in the docs</a> if you'd like to learn more, though.
</SideNote>

Knowing that the current `/blog` slug will be available using `page.params.slug`, we can get to work. We'll use that to grab the content of matching Markdown file, then pass it back to the client side. The client side can then render it as a component, like so:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export async function load({ page }) {
    // Import the Markdown file that matches the current route
    const file = await import(`./_posts/${page.params.slug}.md`)

    // .default is the actual content of the file
    const Content = await file.default
    
    // Props to be exported to our "normal" script and template
    return {
      props: {
        Content // Shorthand for `Content: Content`
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

If you save that and visit one of your blog post routes, you'll see the result isn't exactly pretty, but it _does_ work! You should be able to toggle between your post URLs to see the page content update at this point:

![The content of the markdown file rendered inside the blog layout](/images/post_images/sveltekit-min-blog-post-render.png)

That's the content taken care of, but we _also_ want to use the post's frontmatter properties. Fortunately, that's just as easy at this point as fetching another prop!

Just as `file.default` is the imported Markdown file's contents in the module above, `file.metadata` will be its frontmatter contents. So we can add a second prop to pass back to our script and template pretty easily, and then add the properties to our HTML template like so:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export async function load({ page }) {
    const file = await import(`./_posts/${page.params.slug}.md`)

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

<SideNote>
We could <em>also</em> just return the whole file from the server as one prop, and extract <code>default</code> and <code>metadata</code> from it on the client side. Both would work. I just prefer to give the template only what it needs.
</SideNote>

This looks great, but there _is_ one small problem: when we visit a URL that doesn't match one of our Markdown files, we get a 500 error.

That's because our `[slug].svelte` file is trying to load a file that doesn't exist on the server-side. When the server can't complete its task, that's a 500 error.

However, this is an error we created and should avoid; really, the result of trying to access a route that doesn't exist should be a 404.

To solve this, we'll wrap our `import` in `try`/`catch` block:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export async function load({ page }) {
    try {
      // Successful code here
    } catch(error) {
      return {
        status: 404,
        error: 'Sorry, no post found with that slug. ' + error.message
      }
    }
  }
</script>
```

Visit a non-existent `/blog` route now, and you should see a 404.

<SideNote>
What you're looking at when you hit an error is SvelteKit's built-in error component. But just like we can provide our own <code>__layout.svelte</code> file, we can <em>also</em> provide an <code>__error.svelte</code> file to template and format any errors in our app. I won't go into that here, but you can check the official <a href="https://kit.svelte.dev/docs#layouts-error-pages">Svelte docs error pages entry</a> for full info.
</SideNote>


### Handling stuff for head

Ideally, we'll probably want to set up some stuff for the `<head>` on our various pages. For blog posts specifically, it's important to have the right `title` attributes, Open Graph info, share images, etc.

SvelteKit makes this trivial, with the `<svelte:head>` component.

Add one to your `[slug].svelte` file (it can go wherever, but I like to put it just before the HTML, personally), and let's put a title there.

```svelte
<!-- [slug].svelte -->
<svelte:head>
  <title>My blog - {meta.title}</title>
  <meta property="og:title" content={meta.title} />
</svelte:head>
```

You should now see the title showing up properly in the browser bar.

**There are many other properties you might want to add here**, _especially_ if you're trying to optimize your posts for share-ability. I won't go into any more detail here, but it's worth verifying all your pages and posts look good when shared with Open Graph checker tools (many are available online).

---

All right, now everything's looking pretty good for individual posts at this point…but how do we handle the `/blog` path itself? We'll probably want an index page that lists out _all_ of our posts, so let's talk about how to achieve that.


### Adding a blog index

You might have already thought ahead at this point, and realized we'll need an `index.svelte` file inside of `src/routes/blog`, to become the `/blog` page. If so, you're right! Go ahead and create that now.

We'll add a server-side module script to this file as well, to handle loading _all_ the Markdown files we have.

However, I want to advocate for _not_ doing that all right here, inside our blog index page.

**Why?** Because odds are, we'll eventually want to retrieve lists of our posts in other places, too. Just a few possibilities:

-You might want a list of posts in a sidebar
-You may want to list all your posts in an XML feed
-You might decide to put a list of (recent) posts on your homepage
-You could choose to have category pages, where just posts fitting particular categories are shown

You might not do _all_ of those, but even if you just do one, you'll be repeating the same code to go fetch your Markdown posts over and over in each place--and while that's not _too_ difficult, as we'll see, it's verbose enough that you'll definitely feel it.

Plus, the more places you rewrite the fetcher, the more you might introduce unique variations on the code, which could make maintainability a chore.

Wouldn't it be nice if, instead, you could just hit an API endpoint and get a list of your posts to use however and wherever you wanted?

Ok, you probably saw this coming, but good news: **you can!**


## SvelteKit endpoints

Up until now, every route we've created has been a page. But SvelteKit offers _another_ type of route, too: [endpoints](https://kit.svelte.dev/docs#routing-endpoints).

Endpoints work the same way, as far a routing goes; drop a file into `src/routes/`, and it becomes an endpoint automatically. The only difference is: where pages return components and HTML by default, an endpoint returns _data_. If you've ever worked with a site that had an API (like WordPress's REST API, for example), it's the same idea.

Endpoint data is _usually_ JSON, but it doesn't have to be. It could be XML, or anything else you can send and retrieve in a browser.

Aside from dropping a file into `src/routes`, there are just three important conventions to follow when creating an endpoint:

1. **An endpoint's file name should include the type of data it returns.** The file itself doesn't have to be that type, however. For example, `src/routes/stuff.json.js` would be a JavaScript file that returns JSON. The route would just become `/stuff.json`.

2. **An endpoint must export a function named for each HTTP verb it accepts.** If you just want to return data from an endpoint, you'll do so inside of a `get()` function. If supported, post requests should be handled with a `post()` function, and so on. (The one exception is `del()`, since `delete` is a reserved keyword in JavaScript.)

3. **Endpoint functions should return a `status` and `body`.** (Status is 200 by default, and returning nothing is a 404 by default.)


### Creating an endpoint for our posts

**Enough talk; let's build!**

If you anticipated building out several different API routes for your project, you might create a dedicated `/src/routes/api` folder. I think this is a good pattern to follow, even if we only have this one API route. So create that new `api` folder, and inside it, create a new file named `posts.json.js`.

<SideNote>
You <em>can</em> have private API routes, if you like, by prefixing the file or directory with an underscore. I think we'll find there are many advantages to a public posts API, however, and there isn't really any need to protect content that's already public anyway.
</SideNote>

Inside our new `posts.json.js` file, we need to `export` a `get` method. We'll make the function `async`, since it will eventually be `await`ing data from the file system. But before that, let's just do a quick test to see it in action:

```js
// posts.json.js
export async function get() {

  return {
    status: 200,
    body: JSON.stringify("We got here!")
  }
}
```

With that in place, we should be able to visit `/api/posts.json` and see the following (unimpressive, but neat!) JSON loaded in the browser:

!['We got here!'](/images/post_images/sveltekit-dummy-json.png)

I just want to call out how _cool_ it is that we've got an actual API route on our site now! It doesn't return anything useful just yet, but knowing it's _that easy_ to set up an API that can be used both internally and externally is exciting!

<SideNote>
While we won't do it here, you can pass an argument to your <code>get</code> function, which will give you all the headers of the request, along with query parameters, and lots of other info about the request.
</SideNote>


### Returning Markdown posts from our endpoint

Things are going to get a little bit tricky here, just because we'll be leaning directly into [Vite](https://vitejs.dev/) and its functionality in order to grab data from our Markdown posts. So this will be a little lower-level than the Svelte and SvelteKit stuff we've used so far, but that's ok. Just another reason to be glad we'll only need it once.

<SideNote>
If you didn't know, Vite is the speedy build tool that powers SvelteKit.
</SideNote>

Inside our `posts.json.js` file, we'll put the following code:

```js
// posts.json.js
export async function get() {
  const allPostFiles = import.meta.glob('../blog/_posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postSlug = path.split('/').pop().split('.').shift()
      const postPath = `/blog/${postSlug}`

      return {
        meta: metadata,
        path: postPath
      }
    })
  )

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return {
    body: JSON.stringify(sortedPosts)
  }
}
```

**Whoa!** That might look like a lot, but when you consider it's actually _everything_ we need for our API route, it's kind of impressive how few lines that is!

Let's go over what's happening in that above snippet.

- `import.meta.glob` is not Svelte or SvelteKit; it's a Vite function. It imports any files that match the string we give it (in this case, all `.md` files inside of the `_posts` folder).
- `import.meta.glob` returns an object where each file's relative path is the key, and the value is a "resolver" function (my term; not official) that loads the file contents as a JavaScript promise. So the next step is to call all of those resolvers, and wait for the promises to, uh, resolve.

  (_Since `Promise.all` requires an iterable, we convert the original object to an array, using `Object.entries`. We could do this inline, but I like each step to be its own line, generally._)
- The `map` method is there to get the data we want from each file, and reshape it how we want, so it's easier to work with on the front end.
- Once that's all done, we sort the posts by descending date (since this is a blog, of course, and we'll want our newest posts showing first).
- Finally, we convert the finished product to JSON and `return` it as the `body` of our API response. (The 200 status code is implicit here.)

<SideNote>
Ideally, we should probably have a try/catch block here, too.
</SideNote>

**Let's try it out!** Refresh your `/api/posts.json` path now, and you should see some _real_ data!

![The data from our posts is now coming through as JSON!](/images/post_images/sveltekit-posts-json.png)

Plus, it should feel good to know that now, this route will update automatically with each Markdown post we add to the `_posts` folder!


#### Other considerations and improvements

There's plenty to improve here. For starters, this function does a lot, and coule be a bit refactored. (Sorting the dates, for example, could probably be extracted to its own utility function.)

Functionally, we'll probably want to add some other extra features to this API route eventually. For example, we might not want the server to return _every_ post on the site. Depending on the number of posts, that might get prohibitively time-intensive. We may also want to add pagination, which would require having controls for how many posts are returned, and offsetting the returned posts. (Easily enough accomplished with JavaScript array methods like `slice`, but not worth going into in depth here.)

Another possible future enhancement would be adding the post's content to the returned JSON, which we don't do currently. The "resolver" function offers a `default.render.html` method for that, if you so choose.

You could also build in some filtering, but remember that this site won't actually have a live server. The API route is going to be statically pre-generated, so it might be better to either have the dynamic parts client-side, _or_ build out some dynamic API routes to handle parameters. The [SvelteKit docs section on Rest parameters](https://kit.svelte.dev/docs#routing-advanced-rest-parameters) is worth a look.

Anyway, we'll worry about all that later (if at all). For now, it's working great, and we can use our new API route in our blog index page!



## Finishing our blog index page

Now that we have an API route to fetch all our posts, building out our blog index page will be a piece of cake!

We _could_ do the loading client-side, with a `fetch` call in an `onMount` function. That would work. But it would _also_ result in a loading state after the page itself has loaded, which isn't a great user experience. So instead, let's fetch the posts server side. We'll use the `load` function just like before.

Remember earlier when I mentioned the `load` function has access to multiple special arguments? Well, one of those is `fetch`, which allows us to use the browser's `fetch` function on the server, just like in a browser. (Ordinarily, `fetch` is not available in server-side Node JavaScript.)

```svelte
<!-- src/routes/blog/index.svelte -->
<script context="module">
export async function load({ fetch }) {
  const posts = await fetch('/api/posts.json')
  const allPosts = await posts.json()

  return {
    props: {
      posts: allPosts
    }
  }
}
</script>
```

That bit of server-side loading handles everything we need! Now we've got a `posts` prop being passed to the component, and we can use it to loop over posts.

```svelte
<!-- src/routes/blog/index.svelte -->
<script context="module">
  // Our `load` function here
</script>


<script>
  export let posts
</script>


<ul>
  {#each posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>
```

The HTML in that above example is a bit simple, but hopefully you get the gist. You may want to add other code, based on the frontmatter in your own blog posts. (One thing definitely missing is post images, but you could also have excerpts or other content as well.)

![A list of our posts, each linked, on our /blog route.](/images/post_images/sveltekit-posts-list.png)


## Adding the static adapter

**SvelteKit is server-rendered by default.** That's great, because server-side rendering is generally better for performance, accessibility, and SEO. However, that also means static prerendering (which is what we want) is opt-in.

You _can_ [manually make any page pre-rendered](https://kit.svelte.dev/docs#ssr-and-javascript-prerender)--handy for things like an "about" or "faq" page that won't have any dynamic content. However, we want our _entire_ site to be statically pre-rendered, and marking each and every page by hand would be an error-prone chore. So instead, we'll reach for SvelteKit's [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static).

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

With our adapter installed and in use in our config file, every page on our site will be pre-rendered as static HTML at build time! You can even view source in the browser to confirm that the site is now served as pre-rendered HTML.

<SideNote>
One of the great things about SvelteKit's static mode is that it pre-renders all your pages as static HTML, but <em>also</em> loads some client-side JavaScript to help with navigation and preloading in the background. This way, the site works just fine without JavaScript, but is progressively enhanced.
</SideNote>

## Final features worth covering

**At this point, our blog is pretty much done!** We talked about a lot of things we _could_ do next, but let's take a bit before closing to talk about a few features we _didn't_ cover.

### Preloading routes

SvelteKit is already fast, and when we pre-render our HTML like we are via the static adapter, it's going to be blazing. But we can actually push the performance _even further_ with SvelteKit's built-in preloading.

SvelteKit ships with _two_ functions for preloading data in the background: `prefetch`, and `prefetchRoutes`.

To use them, just import them in a page or layout (our global layout file might be a good choice):

```svelte
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
</script>
```

<SideNote>
<code>$app</code> contains several modules available in SvelteKit for things you might need in an app, like <code>env</code> and <code>paths</code>, along with <code>navigation</code>. <a href="https://kit.svelte.dev/docs#modules">See the docs for full details</a>.
</SideNote>

The difference between the two is:

- `prefetch` is for a single route. 
- `prefetchRoutes` preloads _all_ routes.

```svelte
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'

  prefetch('/blog') // Loads the blog page in the background

  prefetchRoutes() // Loads ALL routes in the background
</script>
```

Because `prefetchRoutes` grabs _all_ the site's data behind the scenes, we should use it cautiously and judiciously. We don't want to force users to download megabytes of data presumptively. That could very well cost them real money, for pages they might not even look at.


### Anchor options

Speaking of preloading: SvelteKit offers a slightly less greedy version of it, as one of its [anchor options](https://kit.svelte.dev/docs#anchor-options).

Anchor options are special, SvelteKit-specific attributes you can add to `<a>` anchor tags. There are three:

- `<a sveltekit:prefetch>` causes the link to begin preloading as soon as the user _hovers_, rather than waiting for a click, saving some milliseconds.
- `<a rel="external">` signals to SvelteKit that the link in question is _not_ part of our SvelteKit app, and the router shouldn't try to handle it.
- `<a sveltekit:noscroll`> prevents SvelteKit from resetting the scroll position to the top of the new page. This is usually undesirable on websites, but may be more intuitive in some app situations.

---
---
---
---
## TODO: 

- Talk about RSS feed
- Talk about next steps with blog sidebar, maybe?
- Talk about svelte:head
- Page transitions?
---

You can now visit `/blog/1` in your browser, and see the content of that post--although not the frontmatter (the bit at the top with the post metadata).

For _that_, we'll need a **nested layout**.


### Nested layouts

We already saw that a `__layout.svelte` component would be a global layout file, when placed inside of `src/routes`. But you can also _nest_ layouts!

In our case, we'll add a _second_ `__layout.svelte` file inside `src/routes/blog`. This will wrap our blog posts in the inner blog layout, which in turn will be wrapped by the outer, global layout file.

Create a new `__layout.svelte` file inside of `src/routes/blog` if you haven't already, and this is where things start to get really interesting.




