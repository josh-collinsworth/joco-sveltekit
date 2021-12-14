---
title: "Learn SvelteKit by building a static blog from scratch"
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

SvelteKit is an amazing and powerful tool for web development. However, because it offers so many possibilities, it doesn't make a lot of assumptions about our project for us. That means, depending on what you'd like to do with SvelteKit, it can be a little tricky to get it set up initially.

Some folks find it hard to get over this barrier of initial setup, so I'd like to walk you through how to set up SvelteKit as a static, markdown-powered blog with Sass--just like this site.


## Creating a new SvelteKit app

You can check out the SvelteKit docs for details, but I'll save you a click. If you have NPM installed already, these are the commands to generate a new SvelteKit project and get it up and running:

```bash
npm init svelte@next my-app
cd my-app
npm install
npm run dev
```

(Naturally, you can change `my-app` to whatever other title you prefer.)

When you run that first `init` command, SvelteKit will ask you some questions about your project and how you want it set up. 

![SvelteKit's setup prompt for which type of project you want to create; boilerplate, or demo](/images/post_images/sveltekit-init.png)

For this example, we'll Skeleton project. If this is your very first time using SvelteKit, it may be worth choosing the SvelteKit demo app option instead, and poking around a bit to get a feel for how things work. However, while the demo app is nice to get a feel for things, it would be a lot to delete and update as a starter. So we'll go with the Skeleton project.

The setup tool will also ask for the following preferences. Here's what I chose, though they won't matter for our purposes, and you're welcome to go with personal preference:

* No to TypeScript (just to keep things simpler)
* Yes to ESlint
* Yes to Prettier

Once you've made your choices, after a moment of installation, you should see "**Your project is ready!**" appear in your terminal, along with next steps and helpful links:

!['Your project is ready!' message appears in the terminal, along with confirmation of the options we've chosen and helpful links to get started.](/images/post_images/sveltekit-installation-confirmation.png)

You can copy and paste the directions from your terminal window, or you can find them here, too:

```bash
cd my-app # Or whatever you named your project
npm install
npm run dev -- --open
```

Complete those commands, and our new site will be running in a browser window. However, it will be a bit unexciting, since we only installed the bare-bones skeleton project. But again, that gives us the freedom to style our app however we like. without the need to remove and work around old code.

![The default welcome page for a new SvelteKit project](/images/post_images/welcome-to-sveltekit.png)

You won't find much in the project folder, either, but that's ok; this is our blank canvas, and we'll have it covered in paint soon enough.


## Adding the static adapter

**SvelteKit is server-rendered by default.** That's great, because server-side rendering is generally better for performance, accessibility, and SEO. However, that also means static prerendering (which is what we want) is opt-in.

You _can_ mark any page for static pre-generation--handy for things like an "about" or "faq" page that won't have any dynamic content. However, we want our _entire_ site to be statically pre-rendered, and marking each and every page manually would be an error-prone chore. So instead, we'll reach for SvelteKit's [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static).

SvelteKit has a number of available [adapters](https://kit.svelte.dev/docs#adapters), which shape our project's build output based on how we expect to deploy. SvelteKit comes pre-installed with an adapter that will automatically detect and build properly for Netlify, Vercel, or Cloudflare Pages, which is both handy and impressive! There are other adapters for other environments, too, like generic Node. But the one we're concerned with is called `adapter-static`.

So, our first move in our new project will be to install the adapter:

```bash
npm i -D @sveltejs/adapter-static@next
```

Once installed, open up your `svelte.config.js` file, which is located in the project's root folder, and the only thing we actually have to do is change `adapter-auto` to `adapter-static` on line 1.

```js
// Replace the original `adapter-auto` line with this.
import adapter from '@sveltejs/adapter-static';
```

You _can_ supply further customization options if you want to (as an object passed to the `adapter()` function); see the [adapter-static readme](https://github.com/sveltejs/kit/tree/master/packages/adapter-static). But the defaults are great for us currently, so you don't need to.

With that done, we're ready to move on, knowing that now every page on our site will be pre-rendered as static HTML at build time! You can even view source in the browser to confirm that everything on the page is being served as pre-rendered HTML!

**One important note:** be sure to restart your server after making changes to `svelte.config.js`. You'll likely see a warning to do so in your terminal already at this point.

<SideNote>
One of the great things about SvelteKit's static mode is that it pre-renders all your pages as static HTML, but <em>also</em> loads some client-side JavaScript to help with navigation and preloading in the background. This way, the site works just fine without JavaScript, but is progressively enhanced.
</SideNote>


## Adding a global layout file

Most sites and apps have some elements that are reused on every page (a `<header>` and `<footer>` being the most common and obvious examples). SvelteKit, like many other frameworks, conveniently lets us define one global layout file to contain any such repeated elements or data, so that we're not constantly repeating ourselves.

The trick to creating one is just a tiny bit of syntactic magic; inside of `src/routes`, create a file named `__layout.svelte` (note the _two_ underscores to begin the file name; this is a SvelteKit convention).

Open up our new `src/routes/__layout.svelte` file, and let's add a header and footer to our site, just so we can get an idea of what we're working with here:

```svelte
<!-- src/routes/__layout.svelte -->
<header>Hi, I'm a header</header>

<slot />

<footer>Hello, I'm the footer.</footer>
```

Save that, and you should now see that header text above our main index page's contents, and the footer text below. That's because Svelte (like Vue) uses the `<slot />` element to inject child components.

![The header text appears above the contents of the index.svelte file, and the footer text below.](/images/post_images/sveltekit-layout-shown.png)

This main `__layout.svelte` file is in effect the parent component to our entire app, and the current page or route is rendered in the `<slot />` as its child component.

<SideNote>
Notice that we don't need a single element or <code>&lt;template&gt;</code> tag around our HTML in Svelte, unlike other frameworks.
</SideNote>


## Routing in SvelteKit

Like many frameworks, SvelteKit has a directory-based layout approach. You might have even noticed it already. Any file inside of `src/routes` becomes a corresponding route on the finished site.

For example: the current `index.svelte` file is our homepage (`/`).

If we make a `contact.svelte` file, it will become `/contact` page.

If we make a folder called `blog` and put `some-post.svelte` inside of that, it will be on the site at `/blog/some-post`, and if we added an `index.svelte` file to the `blog` folder, it would be the base `/blog` route (the "index" page, if you prefer the Rails terminology).

### Creating new pages

Just to get the hang of it, let's create a couple of pages inside of `src/routes` at this point. (We can always delete them later.)

I'm going to create two files:

* `src/routes/about.svelte`
* `src/routes/contact.svelte`

Inside each of those files, we can just toss a quick heading, and maybe some text:

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

At this point, we can visit `/contact` and/or `/about` to see the pages we just created, though there won't be much to see. It's nice to see that they exist, however, and that they're automatically placed inside the global layout file.

![Our bare-bones contact page rendered in the browser](/images/post_images/sveltekit-contact-example.png)



## Adding navigation and creating our first component

Manually typing routes in the browser isn't much fun, so let's modify our global layout file--and in the process, we'll create our first component!

Let's create a new folder called `lib` inside of `src`, alongside our `routes` folder. (`lib` is a SvelteKit convention; more on that in a moment.)

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

And then, inside of `__layout.svelte`, let's replace our dummy `<header>` with this component.

To import a component, you'll need an `import` inside of a `<script>` tag. (I personally like to put the `script` tag at the top of the file, but you don't have to; Svelte gives you the freedom to arrange your files however you prefer.)

Add this to the top of `__layout.svelte`:

```svelte
<script>
  import Header from '$lib/components/Header.svelte'
</script>
```

Notice that `$lib` part of the path? `$lib` is a handy shortcut for `src/lib`. This is the only alias SvelteKit ships with, but you can add your own (or replace it) if you like, in `jsconfig.json`.

Anyway, with that in place, we can replace our dummy `<header>` with a new `<Header />` component. That done and saved, we should see something _slightly_ more user-friendly in our browser:

![Our new header shows up now in the site](/images/post_images/sveltekit-header-component.png)


### Component styling

In Svelte, styling in component is scoped by default. That makes it easy to write CSS without fearing it bleeding out and affecting layout or appearance anywhere else in the app.

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
  }
</style>
```


## Adding Sass to the project

One of the great things about SvelteKit is how comparatively easy it makes adding whatever external processing tools you like, thanks to [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess). From the SvelteKit docs:

> svelte-preprocess automatically transforms the code in your Svelte templates to provide support for TypeScript, PostCSS, scss/sass, Less, and many other technologies.

Our next step is to install both `svelte-preprocess` and `sass`.

```
npm i -D svelte-preprocess sass
```

Next, still in our `svelte.config.js` file, we just need to add a little bit to tell SvelteKit how to preprocess any Sass code we throw its way.

First, import `svelte-preprocess`:

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

The `preprocess` option passes any number of preprocessors to SvelteKit, to use when building the site. We'll add Markdown support here later, too.

Note that you _can_ pass additional configuration options into the `preprocess()` function here. One of the most useful is the `scss.prependData` option, which allows you to automatically inject code at the start of any Sass processing.

I personally take advantage of this option to make sure I always have access to my Sass variables. It even works in component `<style lang="scss">` tags.

```js
// svelte.config.js
preprocess({
  scss: {
    // Adds this line anywhere Sass is processed
    prependData: `@import 'src/lib/assets/scss/_vars.scss';`
  },
}),
```

That's jumping ahead a bit, though. I just wanted you to know that option exists.

We can test it out by opening up our `src/routes/index.svelte` file, and adding a block of Sass styles:

```svelte
<style lang="scss">
  $orange: #ffd100;
  $size: 8rem;

  h1 {
    font-size: $size;
    color: $orange;
  }
</style>
```

Make sure both files are saved, and you should see some _truly_ hideous styling.

In case you _aren't_ planning on using Sass exclusively in components and want some global Sass files, that's easily enough set up, but we'll actually want to set up our global layout file first. So let's do that, and then we'll come back to getting Sass files up and running.
 

## Linking to Sass files

Now that we've got a global layout file, we can add global styles there. And as a bonus, it's just as easy as importing the Sass file inside our layout file's `<script>` tag!

Let's go ahead and create a `lib` folder inside our `src` folder. (We'll see why in a minute.) Inside `src/lib`, we'll add an `scss` folder, and inside of that, we'll place a `main.scss` file. (We could place our SCSS files anywhere, of course; this just helps us keep them organized.)

So the final file path will be: `src/lib/scss/main.scss`

![Adding a main.scss file inside src/assets/scss](/images/post_images/sass-file-creation.png)

Now that we've got some Sass to actually link to, inside of `__layout.svelte`, let's add a `<script>` tag (I like mine to go before the HTML, but you can put it anywhere), and import the SCSS file.


```svelte
<!-- src/routes/__layout.svelte -->
<script>
  import '$lib/scss/main.scss';
</script>
```


If you save the `__layout.svelte` file with that script tag and import in it at this point, you should see the site update with your Sass changes. You're free to create any other global SCSS files you might like and import them into that `main.scss` file as well. Since our layout "wraps" every page on the site, any Sass in that main file will be global.


## Adding Markdown support with MDSvex

Ok, we've got some basic routing and layout, and we've got Sass set up. Next up, we're going to add the necessary bits for Markdown support in our project.

MDSvex is the package we'll be using. If you've heard of MDX, you could think of it as the Svelte equivalent. Otherwise, just know that MDSvex not only processes Markdown into static HTML for us, but it _also_ allows us to inject Svelte components in Markdown!

Here's the terminal command to install MDSvex:

```bash
npm i -D mdsvex
```

Just like `svelte-preprocess`, MDSvex will need us to add just a bit to our `svelte.config.js` file.

First, add MDSvex to the list of imports at the top of the file:

```js
// svelte.config.js
import { mdsvex } from 'mdsvex';
```

Then, inside the `preprocess` array, add an `mdsvex` function.

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

Note the new `config.extensions` property, as well as the added `mdsvex` function inside of the `config.preprocess` array. **Both of these are necessary.** By default, MDSvex only processes `.svx` files, and since our Markdown will effectively be used _inside_ of Svelte components, we'll need the preprocessor to be on the lookout for it in both Svelte files and Markdown files.

Be sure to restart your dev server after making this config change.

**At this point, we can start adding Markdown files to our project!**

If you like, you can even use Markdown for page contents; create `src/routes/markdown-page.md` and throw some Markdown into it, and you'll be able to see your content by visiting `/markdown-page`!