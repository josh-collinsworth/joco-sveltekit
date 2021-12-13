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

When you run that first `init` command, SvelteKit will ask you some questions about your project and how you want it set up. For this example, I chose:

* Boilerplate project
* No TypeScript (but it won't affect things if you do want it)
* ESlint
* Prettier

Once you've got the project set up, you can use `npm run dev` to get a look at your new site. It will be a bit unexciting, since we only installed the bare-bones boilerplate, but that gives us the freedom to style our app however we like (without the need to remove old CSS or components).

![The default welcome page for a new SvelteKit project](/images/post_images/welcome-to-sveltekit.png)

You won't find much in the project folder, either, but that's ok; this is our canvas.


## Adding the static adapter

SvelteKit's versatility comes largely by way of adapters, which shape our project based on how we expect to deploy. SvelteKit comes pre-installed with an adapter that can automatically detect a project launched on Netlify, Vercel, or Cloudflare Pages, which is pretty impressive and handy!

No matter how your site is deployed or what adapter it uses, you can mark any page you like for static generation--handy for things like an "about" or "faq" page that won't have any dynamic content.

However, we'll want our entire site to be static, so we'll reach for SvelteKit's [`adapter-static`](https://github.com/sveltejs/kit/tree/master/packages/adapter-static).

So, our first move in our new project will be to install the adapter:

```bash
npm i -D @sveltejs/adapter-static@next
```

Once installed, open up your `svelte.config.js` file, which is located in the project's root folder, and the only thing we actually have to do is change `adapter-auto` to `adapter-static` on line 1.

```js
// Replace the original `adapter-auto` line with this.
import adapter from '@sveltejs/adapter-static';
```

You _can_ supply further customization options (as an object passed to the `adapter()` function) if you want to; see the [adapter-static readme](https://github.com/sveltejs/kit/tree/master/packages/adapter-static). But you don't need to. The defaults are suitable, so with that done, we're ready to move on, knowing that now every page on our site will be pre-rendered as static HTML at build time!


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


## Adding a global layout file

Most sites have some elements that are reused on every page, with a header and footer being the most common and obvious examples. SvelteKit, like many other frameworks, lets us define one global layout file to contain any such repeated elements or data.

The trick to creating one is just a tiny bit of syntactic magic; inside of `src/routes`, create a file named `__layout.svelte` (note the _two_ underscores).

Let's add a header and footer to our site, just so we can get an idea of what we're working with:

```svelte
<!-- src/routes/__layout.svelte -->
<header>Hi, I'm a header</header>

<slot />

<footer>Hello, I'm the footer.</footer>
```

Save that, and you should now see that header text above our main index page's contents, and the footer text below.

<SideNote>
Notice that we don't need a single element or <code>&lt;template&gt;</code> tag around our HTML in Svelte, unlike other frameworks.
</SideNote>


### Routing in SvelteKit

Like many frameworks, SvelteKit has a directory-based layout approach. You might have even noticed it already. Any file inside of `src/routes` becomes a corresponding route on the finished site.

For example: the current `index.svelte` file is our homepage (`/`).

If we make a `contact.svelte` file, it will become `/contact` page.

If we make a folder called `blog` and put `some-post.svelte` inside of that, it will be on the site at `/blog/some-post`, and if we added an `index.svelte` file to the `blog` folder, it would be the base `/blog` route (the "index" page, if you prefer the Rails terminology).

I would encourage you to create one or two pages inside `src/routes` at this point, and link to them (and to the homepage) inside the `<header>` we just created, just to get the hang of how the routing works. It should be fairly intuitive if you've used file-based routing in frameworks before. (I wouldn't create the blog paths just yet, though, as we'll want to set up Markdown first.)
 

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

You may notice that `$lib` is a handy alias shortcut for `src/lib`. This is the only alias SvelteKit ships with, but you can add your own if you like, in `jsconfig.json`.

Anyway, if you save the `__layout.svelte` file with that script tag and import in it at this point, you should see the site update with your Sass changes. You're free to create any other global SCSS files you might like and import them into that `main.scss` file as well. Since our layout "wraps" every page on the site, any Sass in that main file will be global.


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