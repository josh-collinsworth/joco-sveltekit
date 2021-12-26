---
title: "Let's learn SvelteKit by building a static Markdown blog from scratch"
date: "2021-12-24"
updated: "2021-12-24"
categories: 
  - "svelte"
  - "javascript"
  - "web"
  - "sass"
coverImage: "sveltekit-learn.png"
coverWidth: 16
coverHeight: 9
excerpt: Learn the fundamentals of SvelteKit by building a statically generated blog from scratch, with Markdown support, Sass, an API, and an RSS feed.
---
<script>
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

If you've ever recommended a favorite book, movie, or TV show to a friend who didn't enjoy it at all, you know exactly how I felt after a I saw this message from a buddy:

> man I just tried to hello world SvelteKit and it is NOT for me

I love [Svelte](https://svelte.dev), and I've talked plenty about how much I've enjoyed [rewriting this site](/blog/converting-from-gridsome-to-sveltekit) using [SvelteKit](https://kit.svelte.dev). So my first reaction, of course, was disappointment. What went wrong?

But as I considered their reaction, I realized: it was valid. I overlooked SvelteKit's learning curve.

Amazing though it is, SvelteKit isn't the simplest thing you could use as a static site generator (SSG); other tools like [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), or [Gatsby](https://www.gatsbyjs.com/) will likely get you up and running faster if that's your main focus. [Even the SvelteKit docs make this point](https://kit.svelte.dev/docs#appendix-ssg). However, SvelteKit's capabilities are much broader and more flexible--and there's lots to love about the developer experience of Svelte itself.

<Callout>
Amazing though it is, SvelteKit isn't the simplest thing you could use as a static site&nbsp;generator.
</Callout>

So, in an effort to help smooth out that learning curve, I'd like to walk through how to set up SvelteKit as a static, Markdown blog with Sass and an API--just like this site--and share what I've learned, so that you can (hopefully) enjoy it like I do.

Along the way, we'll learn the fundamentals of SvelteKit, and get some opportunities to try out many of its features.


## What we'll cover, and what to know first

**This is both an intro to SvelteKit, and a guide to setting up a blog with it.** We'll cover all the high-level concepts of SvelteKit as we build our project. When we're done, you should have a good understanding of SvelteKit itself, and how to build _any_ project with it.

**This is _not_ an intro to Svelte itself.** We'll naturally cover some Svelte concepts here and there, and you can probably still follow along even if you don't know much about Svelte. But I'd recommend learning the basics first. The [Svelte tutorial](https://svelte.dev/tutorial/basics) is an excellent place for that.

Finally, while you won't need deep knowledge of any of the following topics, you should have at least a basic familiarity with front-end development itself (including JavaScript), [Markdown](https://www.markdowntutorial.com/), [Sass](https://sass-lang.com/), and installing packages using [npm](https://www.npmjs.com/). You should also have npm installed already.

All that said, let's get started!


## Creating a new SvelteKit app

To generate a new SvelteKit project, run this in your terminal (naturally, you can change `my-app` to whatever other title you prefer):

```bash
npm init svelte@next my-app
```

When you run that `init` command, SvelteKit will ask you some questions about your project and how you want it set up: 

![SvelteKit's setup prompt for which type of project you want to create; boilerplate, or demo](/images/post_images/sveltekit-init.png)

We'll select the "Skeleton project" option.

<SideNote>
If this is your very first time using SvelteKit, feel free to choose the "SvelteKit demo app" option instead, poke around a bit to get a sense of how things work, then come back. It's a good intro, but it comes with several files and styles that would be a lot to undo as a starter.
</SideNote>

The setup tool will also ask for your preferences on TypeScript, ESlint, and Prettier. For simplicity's sake, I won't use TypeScript, but you're welcome to if you like. (Svelte works quite well with it.)

Once you've made your choices, after a moment of installation, you should see `Your project is ready!` appear in your terminal, along with next steps and helpful links:

!['Your project is ready!' message appears in the terminal, along with confirmation of the options we've chosen and helpful links to get started.](/images/post_images/sveltekit-installation-confirmation.png)

At this point, let's open up the project in [VS Code](https://code.visualstudio.com/) (or your text editor of choice). Then in the terminal, install the dependencies, and then run the dev server:

```bash
npm install
npm run dev -- --open
```

Complete those commands, and our new site will be running in a browser window!

![The default welcome page for a new SvelteKit project](/images/post_images/welcome-to-sveltekit.png)

The skeleton project is definitely unexciting. There isn't even any CSS yet. But that's ok; it gives us the freedom to style our app however we like, without the need to remove or work around any existing code.

This is our blank canvas, and we'll get some paint on it soon enough.


## Routing in SvelteKit

<Callout>
Any component inside <code>src/routes</code> becomes a page at that same relative&nbsp;route.
</Callout>

Like many frameworks (and for that matter, PHP), SvelteKit has a directory-based approach to routing and pages. Any component inside `src/routes` becomes a page at that same relative route:

- `index.svelte` is the homepage (`/`)
- A file named `about.svelte` would become the `/about` page
- `blog/index.svelte` would be be the `/blog` page
- `blog/some-post.svelte` becomes `/blog/some-post`


### Adding pages

For starters, just to get some pages on our site, let's create `about.svelte` and `contact.svelte` files inside of `src/routes`. (We can always delete or modify them later.) We'll also create a `blog` folder, with an `index.svelte` file inside.

Within each of those files, let's toss a quick heading, and maybe some text, just so we can see a little content.

<SideNote>
Svelte files can just contain plain HTML.
</SideNote>

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

```svelte
<!-- blog/index.svelte -->
<h1>Blog</h1>

<p>My blog posts will go here eventually…</p>
```

Our `src/routes` folder should now look like this:

```fs
📂 src
┗ 📂 routes
  ┣ 📂 blog
  ┃ ┗ 📜 index.svelte
  ┣ 📜 about.svelte
  ┣ 📜 contact.svelte
  ┗ 📜 index.svelte
```

At this point, you could visit `/contact`, `/about`, and/or `/blog` to see the pages we just created. There's not much there yet, of course, but it's nice to at least see that routing is taken care of for us automatically, just by placing the files in the `routes` folder.


### Adding a layout

Most sites and apps have some elements that are reused on every page (a `<header>` and `<footer>` being the most common and obvious examples). Since adding those to every page would be tedious and error-prone, SvelteKit (like many other frameworks) conveniently lets us define [layouts](https://kit.svelte.dev/docs#layouts).

Inside of `src/routes`, make a new file named `__layout.svelte`.

```fs
📂 src
┗ 📂 routes
  ┗ 📜 __layout.svelte
```

**This name is a SvelteKit convention.** SvelteKit automatically checks `routes` (and all its subdirectories) for a `__layout.svelte` file.

That layout will "wrap" all the content loaded from that route and its sub-routes. (Technically: a layout becomes a parent component, and the current page will be slotted in as its child component.) So a layout at the top level of the `routes` folder will apply globally, on every page.

<Callout>
A layout becomes a parent component, and the current page will be slotted in as its child component.
</Callout>

It's easier to show than tell, so open up our new `__layout.svelte` file, and let's add a placeholder header and footer:

```svelte
<!-- __layout.svelte -->
<header>Hi, I'm a header</header>

<main>
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>
```

Save that, and you should now see that header text above the page's contents, and the footer text below.

![The header text appears above the contents of the index.svelte file, and the footer text below.](/images/post_images/sveltekit-layout-shown.png)


## Creating components

Manually typing routes in the browser isn't great, so let's add some navigation. In the process, we'll create our first component.

First, create a new folder called `lib` inside of `src`. (`lib` is another SvelteKit convention; more on that in a moment.)

Inside `src/lib`, we'll create a folder named `components`, just for organizational purposes. And inside of _that_, we'll create a new component named `Header.svelte`:

```fs
📂 src
┣ 📁 routes
┗ 📂 lib
  ┗ 📂 components
    ┗ 📜 Header.svelte
```

<SideNote>
You don't have to capitalize component names, or keep components in their own folder, but both are generally preferred conventions.
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

Save that, and let's go back to `__layout.svelte` to use it!

To use a component, we first need to `import` it, which means we'll need to add a `<script>` tag to our layout. (I personally prefer it at the top of the file, but Svelte gives you the freedom to arrange components however you like.) Once imported, we can replace our placeholder header with the component:

```svelte
<!-- __layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
</script>

<Header />
<!-- The rest of the HTML here -->
```

**Notice the import path.** `$lib` is a handy alias that goes directly to `src/lib`, saving you from typing tedious relative paths. (`$lib` is the only alias SvelteKit ships with, but you can add your own, from `jsconfig.json`.)

Anyway, now we should see something _slightly_ more user-friendly in our browser:

![Our new header shows up now in the site](/images/post_images/sveltekit-header-component.png)

The styling still isn't great, but it's usable. We can click between pages now, which will make testing things out a lot easier.


### Component styling

**Svelte component styles are scoped by default.** That makes it easy to write CSS without fear of it bleeding out and having side effects anywhere outside the component.

To try it out, in `Header.svelte`, add a `<style>` tag. (It could go anywhere, but I prefer to put it at the end.)

```svelte
<!-- Header.svelte -->

<!-- ... The rest of the file's contents here -->

<style>
  header {
    padding: 1rem;
    background: lightskyblue;
    display: flex;
    flex-wrap: wrap;
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

If you save and take a look at the site now, you should see your Header component looking a little more header-like. You might _also_ notice that the styling doesn't affect anything in our main page content. That's the power of scoping!

![The links in our Header component are not underlined or blue, but links outside the component remain with the default styling.](/images/post_images/sveltekit-scoped.png)

If you want to, you could repeat this process with a `<Footer />` component now, too. I'll skip over it, since it's just the same thing over again, but it's a good thing to do at some point.


### The difference between components and pages

It might be a little confusing that we're jumping in and out of several `.svelte` files now, each with different roles. So just to clarify before moving on:

* Any component inside of `src/routes` becomes its own page (unless its name starts with an underscore);

* Any component that _isn't_ its own page or layout goes inside of `src/lib/components`. They can be used independently, and don't get routes of their own.


## Stylesheets in SvelteKit

Svelte lets you import stylesheets directly into components--including pages and layouts. There are other ways to load stylesheets, but I find that's the best. It's easy, for one thing, but more importantly, it _also_ preprocesses them automatically, which we'll want when we add Sass shortly.

<Callout>
Svelte lets you import stylesheets directly into components—including pages and&nbsp;layouts.
</Callout>

Create a new folder inside of `src/lib` for your styles, and add a `style.css` file inside it. 

```fs
📂 src
┣ 📁 routes
┗ 📂 lib
  ┣ 📁 components
  ┗ 📂 styles
    ┗ 📜 style.css 
```

<SideNote>
There are no rules about how you structure things inside of <code>src/lib</code>. Feel free to organize your folders however you like.
</SideNote>

You can add whatever CSS you prefer, but if you need a suggestion, here's a little bit of boilerplate that should begin to get things looking _slightly_ better:

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

Once we've got a stylesheet with some CSS in it, loading it globally is as easy as importing the file in our layout:

```svelte
<!-- __layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/style.css'
</script>

<!-- ...HTML here -->
```

![Our CSS is now showing on the site and making it look (slightly) less ugly.](/images/post_images/sveltekit-css.png)

Since SvelteKit is server-rendered, if you view the page source, you'll even see our style has been added to the HTML, rather than being client-rendered. Neat!

<SideNote>
Importing stylesheets in JavaScript files is not a web standard; it's just supported by some bundlers and build tools, popularized by React and Webpack.
</SideNote>


### Adding Sass to SvelteKit

One of the great things about Svelte is how comparatively easy it is to add external processors, thanks to [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess).

> `svelte-preprocess` automatically transforms the code in your Svelte templates to provide support for TypeScript, PostCSS, scss/sass, Less, and many other technologies.

Our next step is to install both `svelte-preprocess` and `sass`, which we may as well do at the same time:

```bash
npm i -D svelte-preprocess sass
```

<SideNote>
This command installs the most modern version of Sass, which isn't compatible with all versions of Node. If you hit errors, you may need to upgrade your Node version, or install the older <code>node-sass</code> instead.
</SideNote>


#### Modifying the SvelteKit config

Next, open the `svelte.config.js` file, found in the project root.

As the name implies, `svelte.config.js` is the home for, well, configuration. It's where we'll make any needed changes to SvelteKit's options and compiler.

This change is minimal; we just need to import `svelte-preprocess`, and then add it to SvelteKit's list of preprocessors.

```js
// svelte.config.js
import sveltePreprocess from 'svelte-preprocess'

const config = {
  kit: { /* ...other config options here already */ },

  preprocess: [
    sveltePreprocess(),
  ],
}
```

Note that you'll need to create the `preprocess` option; it's not there by default. (We'll add Markdown processing here later, too.)

Also note that you _can_ pass an object with more granular options into the `sveltePreprocess()` function, but we won't for now. It knows what to do with Sass by default, so no further customization is needed.

<SideNote>
It's worth mentioning the <code>scss.prependData</code> option, which allows you to automatically inject code at the start of any Sass processing (such as Sass variables or an <code>@import</code>). You can read more in the <a href="https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md#31-prepending-content"><code>svelte-preprocess</code> docs</a>; I just wanted to mention it since it's quite handy. 
</SideNote>

**One more quick, important thing to know:** you'll want to stop and restart your dev server any time you make a config change.


### Adding SCSS to component styles

Now that we've got both Sass and our preprocessor installed, you can use Sass inside any component's `<style>` block just by adding a `lang` attribute, like so:

```svelte
<style lang="scss">
  // We can write SCSS here!
</style>
```
 

### Using global SCSS files

Linking to Sass files is actually exactly the same as linking to CSS files, like we've already covered. In fact, at this point, you could just rename the existing `style.css` file to `style.scss`. (You'll need to update the `import` in our layout, too, but that's it.)

```svelte
<!-- __layout.svelte -->
<script>
  import '$lib/styles/style.scss'
</script>
```

Ok, we've gotten a pretty good idea of project structure and styling at this point. Let's move on to the last big missing piece: support for Markdown.

<Callout>
mdsvex converts Markdown to HTML, allows Markdown files to be used as components, and even enables Svelte components inside of&nbsp;Markdown.
</Callout>



## Adding Markdown to SvelteKit with mdsvex

If you've heard of MDX (generally used in React-based projects), you could think of the curiously named [mdsvex](https://mdsvex.pngwn.io/) as the Svelte equivalent. (The word "svelte" does not make for smooth portmanteaus, but that doesn't slow the Svelte community down much.)

<Callout>
The word "svelte" does not make for smooth portmanteaus, but that doesn't slow the Svelte community down much.
</Callout>

Anyway, mdsvex powers everything we might want to do with Markdown: mdsvex converts Markdown to HTML, allows Markdown files to be used as components, and even enables Svelte components inside of Markdown--handy for adding interactive components wherever needed!

First, install mdsvex:

```bash
npm i -D mdsvex
```

Next, we'll need to add mdsvex to our config. Open `svelte.config.js`, and modify the code like so:

```js
// svelte.config.js
/* Other imports here */
import { mdsvex } from 'mdsvex'

const config = {
  kit: { /* Kit options here */ },
  
  extensions: ['.svelte', '.md'],

  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ]
}
```

If you'd like to get into the details of that config:

- The `extensions` config property tells Svelte what types of files to treat as components (allowing them to be imported and used in the same way Svelte components are);
- The `mdsvex()` function preprocesses Markdown to HTML--but it only targets `.svx` files by default, so we modify that as an argument.

**Reminder:** be sure to restart your dev server after making config changes. 

_If you're running into errors, double-check that everything installed properly, all the necessary imports are present in your config file, and there are no syntax errors in the config file._


### Markdown pages

Because of the config changes we just made, Markdown files are now treated as components--which means thanks to mdsvex, you can use Markdown files as pages!

<Callout>
Thanks to mdsvex, you can use Markdown files as pages!
</Callout>

Just to try it out, create `src/routes/uses.md` and throw some Markdown into it. You'll be able to see your content by visiting `/uses`:

```fs
📂 src
┗ 📂 routes
  ┗  📜 uses.md
```

```markdown
# Uses

**Here's some stuff I use**

- SvelteKit
- VS Code
- Emojis 😎
```

![Our markdown file rendered out as a page on our website](/images/post_images/sveltekit-uses-rendered.png)

Markdown pages are a handy option for text-based content, since Markdown is generally easier to author than HTML.

You can even import and use Markdown content _inside of_ other files, if you want to--for example, if part of the page needed to be Svelte components, but part could just be Markdown text.

<Callout>
Markdown pages are a handy option for text-based content, since Markdown is generally easier to author than HTML.
</Callout>

This `/uses` page doesn't have to be permanent, but keep it around for now; we'll use it again in a little bit. But first, let's cover a couple other nice features of mdsvex.


### Code blocks in markdown

Handily, mdsvex comes with [prism.js](https://prismjs.com/) pre-installed for code syntax highlighting. All you need to do is note the language (by adding it to the opening triple backticks), and mdsvex will process it appropriately.

```markdown
\```js
// JavaScript goes here,
// And will be syntax-highlighted!
\```
```

All the code blocks on this website are made using this technique. And as a bonus: mdsvex even has `svelte` available as a language option!

<Callout>
mdsvex comes with prism.js pre-installed for code syntax highlighting.
</Callout>

Just note that you'll need some CSS to handle the coloring, but [many themes are available](https://github.com/PrismJS/prism-themes) to either use as-is, or as a base for your own styles.


### Using Svelte components in Markdown

As mentioned before: mdsvex allows you to use Svelte components _inside_ of Markdown!

To do so, just drop in a `script` tag at the start of the content (after the frontmatter), and import the component within. You can then add the component to your Markdown just like you would anywhere else:

```markdown
---
# frontmatter goes here
---
<script>
  import SomeComponent from '$lib/components/SomeComponent.svelte'
</script>

# Markdown content here

<SomeComponent />
```

<SideNote>
As you might have already realized: this means you can even import Markdown files into <em>other</em> Markdown files!
</SideNote>


## Setting up the blog

Now that we have Markdown processing all set up, it's time to get into the real meat of this tutorial, and begin setting up the blog.

Thanks to SvelteKit's flexibility, there are actually a few ways to do this, each with their own tradeoffs. But ultimately, they all work well (especially when pre-rendering), so I've chosen the simplest.


### Adding some Markdown posts

Going forward, it will be handy to have at least a couple of posts to work with, so let's create some inside of `src/routes/blog`. (If you already have some Markdown post files, feel free to just copy those over instead.)

No need for anything fancy; just at least a couple of `.md` files, with a tiny bit of Markdown in them for us to see. Something like this will work just fine:

```fs
📂 src
┗ 📂 routes
  ┗ 📂 blog
    ┣ 📜 1.md
    ┗ 📜 2.md
```

```markdown
---
title: Post One
date: 2021-12-14
---

Hello, I am _Post One._

**Nice to meet you!**
```

The names and content aren't important, but we _will_ be using the `title` and `date` frontmatter properties later, so be prepared.

You can now visit `/blog/x` (where `x` is the slug of a blog post file) to see the post content live on the site:

![The content of the markdown file rendered inside the blog layout](/images/post_images/sveltekit-min-blog-post-render.png)

Well that was easy!

However, what we're seeing above is only the content. We _also_ want to display the post's frontmatter properties. And for that, we'll need an [mdsvex layout](https://mdsvex.pngwn.io/docs#layouts).


### Adding a mdsvex layout

mdsvex lets us designate a layout--that is, a Svelte component--to render Markdown files, much the same way that SvelteKit layouts render pages.

The two are similar, but not to be confused. Unlike SvelteKit layouts, there's no convention to follow with the naming or placement of mdsvex layouts; it's all explicit config.

We'll name our layout `_post.svelte`, and put it in `src/routes/blog`, just to keep related things close together.

```fs
📂 src
┗ 📂 routes
  ┗ 📂 blog
    ┗ 📜 _post.svelte
```

**Why the underscore?** Anything in `src/routes` that begins with an underscore is a [private module](https://kit.svelte.dev/docs#routing-private-modules), i.e., excluded from the router. Since this layout file will just serve as a template and won't have content of its own, we don't want it to have its own route or be directly visited.

Once the file is created, head back to `svelte.config.js` and add a `layout` property to the `mdsvex` function options. (_Note that the path must be relative_.) And as always, be sure to restart the dev server after making the change.

```js
// svelte.config.js

/* Imports here */

const config = {
  /* ...Other config properties here */

  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: 'src/routes/blog/_post.svelte'
    })
  ]
}
```

Now, inside the file we designated as our mdsvex layout, all frontmatter properties are available as component props. We just need to name and call them, like so:

```svelte
<!-- _post.svelte -->
<script>
  export let title
  export let date
</script>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
```

<SideNote>
It might be a good idea to set defaults for each prop, in case it's missing from the frontmatter. Also, be sure the layout has a <code>&lt;slot /&gt;</code>, or the file's contents won't be shown.
</SideNote>

That in place, now when we load a blog post, we should see the layout pulling the frontmatter properties in:

![Our blog post page is now rendering with a title and a date.](/images/post_images/sveltekit-rendered-md-post-with-meta.png)

That's perfect for our `/blog` routes, but remember, this layout will apply to ***all*** Markdown files!

Remember how we created a `uses.md` page? Let's load that again…

![The mdsvex template file applies to all markdown files, even including unrelated pages](/images/post_images/sveltekit-md-oops.png)

***Oops***! Fortunately, mdsvex gives us a couple options on how to handle this.

1. **Opt out of the layout per-page.** To do this, add a `layout: false` frontmatter property to any Markdown file that _shouldn't_ use the default:

  ```markdown
  ---
  layout: false
  ---
  ```

2. **Opt in to a different layout per-page.** You can have [multiple different mdsvex layouts](https://mdsvex.pngwn.io/docs#named-layouts) available, with only a minor config adjustment.

3. **Don't set a default layout**, and instead, specify a layout for each file. (_Still requires the config setup in #2._)

Which you should choose depends on your site and its needs. In this specific case, opting one page out is easy enough, and that's what I'll recommend. But if you've got dozens or hundreds of markdown files, specifying a template in each of them could become too much. (It _is_ nice that we have so much granular control over the layout of our Markdown pages and posts, however.)

---

All right, at this point, we've got a good handle on individual posts. Now, it's time to build out the blog index page, where we'll list _all_ our posts. To do that--because we'll likely want to list posts in multiple ways in various places--we'll build out an API endpoint for posts.


## SvelteKit endpoints

Up until now, every route we've created has been a page. But SvelteKit offers _another_ type of route, too: [endpoints](https://kit.svelte.dev/docs#routing-endpoints).

Endpoints work the same way as pages, as far as routing. The main difference is: where pages return HTML, an endpoint returns _data_.

<Callout>
Endpoints work the same way as pages, as far as routing. But where pages return HTML, an endpoint returns data.
</Callout>

There are just three important conventions to follow when creating an endpoint with SvelteKit:

1. **An endpoint's route should include the data type it returns.** For example, `/api/posts.json`. (Endpoint data is usually JSON, but it doesn't have to be.)
2. **An endpoint should export a function for each [HTTP verb](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) it accepts.** This will often just be a `get` function, but you can also use `post`, etc.
3. **Endpoint functions should return an object with `status` and `body`.** (Returning nothing is a 404 by default.)

There's more detail in the [endpoint docs](https://kit.svelte.dev/docs#routing-endpoints), but it's less complicated than it sounds, so let's dive in.


### Creating an endpoint for our posts

Since we might decide to add more endpoints later, let's create a `src/routes/api` folder, and inside it, a new file named `posts.json.js`.

```fs
📂 src
┗ 📂 routes
  ┗ 📂 api
    ┗ 📜 posts.json.js
```

<SideNote>
The file extension is removed from the end of all routes, so this endpoint will just be <code>/api/posts.json</code>.
</SideNote>

Inside this new file, we'll need to export a `get` method (since "get" is the HTTP verb we'll accept; this endpoint will only return data, not accept it).

Let's do a quick test, just to see it in action:

```js
// posts.json.js
export const get = () => {
  return {
    status: 200,
    body: JSON.stringify('We got here!')
  }
}
```

With that in place, we should be able to visit `/api/posts.json` and see the following (unimpressive, but neat!) JSON loaded in the browser:

!['We got here!'](/images/post_images/sveltekit-dummy-json.png)

How _cool_ is it that!? Our API route doesn't return anything useful just yet, obviously, but it's still pretty awesome to have it up and running that easily!

<SideNote>
While we won't add it here, you can add an argument to <code>get</code>, which will pass in all the headers, query parameters, and lots of other info about the request.
</SideNote>


### Returning posts from an endpoint

The next step is to actually get data from Markdown files, and return it in the API endpoint. We'll be leaning directly on [Vite](https://vitejs.dev/) for that (the build tool that powers SvelteKit under the hood).

This is going to be a lot, but we'll break it down in a second.

Inside our `posts.json.js` file, we'll put the following code:

```js
// posts.json.js
export const get = async () => {
  const allPostFiles = import.meta.glob('../blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(2, -3)

      return {
        meta: metadata,
        path: postPath,
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

**Whoa!** Again, that might look like a lot, but when you consider it's actually _everything_ we need to create an API endpoint to return _all_ our site's posts, it's kind of remarkable how few lines that is.

**Let's go over what's happening in that code:**

- `import.meta.glob` is a Vite function. It imports any files that match the glob (wildcard string) provided--in this case, all `.md` files inside `src/routes/blog`.
  - That function returns an object where each file's relative path is the key, and the value is a "resolver" function (my term; not official) that loads the file contents as a JavaScript promise. 
- The `map` method is there to shape the file data, so it's easier to work with on the front end. (And since each item waits for a promise, we wrap it in an `await Promise.all`.)
  - Since we know the path will begin with `..` and end with `.md`, we can safely use `.slice(2, -3)` to remove those characters and end up with the route.
- Next, we sort the posts by descending date (since this is a blog, of course, and we'll want our newest posts showing first).
  - Note that your posts will need a validly formatted `date` frontmatter property for this to work.
- Finally, we convert the finished product to JSON and `return` it as the `body` of our API response. (The 200 status code is implicit here, since we're successfully returning a `body`.)

**Let's try it out!** Refresh your `/api/posts.json` path now, and you should see some _real_ data!

![The data from our posts is now coming through as JSON!](/images/post_images/sveltekit-posts-json.png)

<SideNote>
Notice the <code>layout</code> property is being automatically injected into file's metadata, because of our mdsvex config.
</SideNote>

Even cooler: this route will update automatically with each Markdown post we add!


## Finishing the blog index page

Now that we have an endpoint for all our posts, building out our blog index page will be a piece of cake!

We _could_ do the loading client-side, with a `fetch` call in an `onMount` function. That would work. But it would _also_ result in a loading state with no visible content, which isn't a great user experience. So instead, let's use SvelteKit's built-in server-side rendering.


### Using SvelteKit's `load` function for server-side rendering

Page and layout components can have a [`load` function](https://kit.svelte.dev/docs#loading), which runs _before_ the component is created--making it perfect for fetching API data, such as our blog posts.

<Callout>
Page and layout components can have a <code>load</code> function, which runs <em>before</em> the component is created.
</Callout>

Because it runs on the server, the `load` function is called from its own distinct `<script>` tag, differentiated with a `context="module"` attribute:

```svelte
<script context="module">
  export const load = () => {
    // Runs before the component is created
  }
</script>

<script>
  // This is the "normal" client-side script
</script>
```

Other important things to know about the `load` function:

- **It has access to a few special arguments** (including `page`, which contains contextual info about the current route).
- **It should return an object**. Among other things, this can include a status code, and props for the  component to use.
- **It runs both server- and client-side.** That's mostly unimportant when prerendering to static files, as we are. Still, `load` shouldn't reference environment-specific things, like `window` or `process`.

I already mentioned `page`, but one other argument the `load` function has access to is `fetch`, which allows the browser's `fetch` function to be used on the server. (Ordinarily, `fetch` is browser-only.)

```svelte
<!-- src/routes/blog/index.svelte -->
<script context="module">
export const load = ({ fetch }) => {
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

That bit of server-side loading handles everything we need! Now we've got a `posts` prop being passed to the component, and we can use it to loop over and render posts on our blog index page.

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

The HTML in the above example is a bit simple, but hopefully you get the gist. You may want to add other code, based on the frontmatter in your own blog posts. (One thing definitely missing is a featured image/image URL, but you could also have excerpts or other content as well.)

![A list of our posts, each linked, on our /blog route.](/images/post_images/sveltekit-posts-list.png)


## Prerendering with the static adapter

**SvelteKit is server-rendered by default.** That's great, because server-side rendering is generally better for performance, accessibility, and SEO. However, that also means static prerendering (which is what we want) is opt-in.

You _can_ [manually make any page pre-rendered](https://kit.svelte.dev/docs#ssr-and-javascript-prerender)--handy for things like an "about" or "faq" page that won't have any dynamic content. However, if we want our _entire_ site to be statically pre-rendered, marking each and every page by hand would be an error-prone chore. So instead, we'll reach for SvelteKit's [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static).

<Callout>
It's awesome that SvelteKit can completely transform from one thing to another simply by swapping out the adapter.
</Callout>

SvelteKit has a number of available [adapters](https://kit.svelte.dev/docs#adapters), which shape our project's build output based on how we'd like to deploy. SvelteKit comes pre-installed with an adapter that will automatically detect and build properly for Netlify, Vercel, or Cloudflare Pages--which is both handy and impressive! There are other adapters for other environments, too, like generic Node. But the one we're concerned with is called `adapter-static`.

```bash
npm i -D @sveltejs/adapter-static@next
```

Once installed, we have to make a very small change to our `svelte.config.js` file to use the static adapter.

Go ahead and open up your `svelte.config.js` file, which is located in the project's root folder. At this point, the only thing we actually have to do is change `adapter-auto` to `adapter-static` on line 1.

```js
// Replace the original `adapter-auto` line with this.
import adapter from '@sveltejs/adapter-static'
```

You _can_ supply further customization options if you want to (as an object passed to the `adapter()` function further down in the file), but the defaults are great for us, so there's no need to. You can check out the [adapter-static readme](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) for more if you like.

---

With our adapter installed and in use in our config file, every page on our site will be pre-rendered as static HTML at build time! You can even view source in the browser to confirm that the site is now served as pre-rendered HTML.

<SideNote>
One of the great things about SvelteKit's static mode is that it pre-renders all your pages as static HTML, but <em>also</em> loads some client-side JavaScript to help with navigation and preloading in the background. This way, the site works just fine without JavaScript, but is progressively enhanced.
</SideNote>

One final note: **you wouldn't _have_ to use the static adapter at this point.** You could just skip that part and go with the default adapter. That would allow you to deploy the site to Netlify, Vercel, or Cloudflare Pages, and the site would be server-rendered using serverless functions, instead of statically pre-generated.

Both would work great, and which to go with depends mainly on your site and its needs. I just bring it up because it's awesome that SvelteKit can completely transform from one thing to another simply by swapping out the adapter.


## Finishing touches

While the site is in a fairly servicable shape at this point, there some extra things we may want to do to take it to the next level.


### Adding an RSS feed

Remember, endpoints don't have to return JSON; they can return XML, too. This handy fact makes it dead simple to implement an RSS feed on our blog!

To start, create an `rss.xml.js` file in your `routes` folder, to make the RSS feed available at the route `/rss.xml`.

```fs
📂 src
┗ 📂 routes
  ┗ 📜 rss.xml.js
```

Inside that file, we'll query our existing API endpoint, and convert the result to XML:

```js
const siteURL = 'https://your-domain.tld'
const siteTitle = 'Your site title here'
const siteDescription = 'Your site description here'
  
export const get = async ({ fetch }) => {
  const posts = await fetch('/api/posts.json')

  const body = render(posts)
  const headers = {
    'Cache-Control': `max-age=0, s-maxage=3600`,
    'Content-Type': 'application/xml',
  };

  return {
    body,
    headers,
  }
}

const render = (posts) =>
`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>${siteURL}/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`
```

**Please note that the above code block will need some modification!** The example above is more or less straigh from this site, and may not be the right shape for your needs. At the very least, you'll need to replace the URL and text placeholders, but you may also need to update the routes and the post frontmatter properties being referenced.

I pulled my example from [this guide](https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit) and [this one](https://scottspence.com/posts/make-an-rss-feed-with-sveltekit), for reference. And if you want to make sure you've done it correctly, here's an [online XML validator](https://codebeautify.org/xmlviewer).


### Adding heading links with rehype

It's nice to let users link directly to a section of a post. Manually adding links to all our headings would be tedious, however, and goes against the point of writing in Markdown.

Luckily, mdsvex allows us to use many [rehype](https://github.com/rehypejs/rehype) plugins to add extra features to markdown processing, and so we can make this all happen automatically with just a bit of config adjustment.

<SideNote>
Rehype is an HTML parser, and not specific to Svelte or mdsvex; it's commonly used in a wide range of projects.
</SideNote>

There are two rehype plugins we'll want specifically:

- `rehype-slug`, which automatically adds IDs to headings;
- `rehype-autolink-headings`, which (as you can guess from the name), automatically adds links to our headings.

Install them both like so:

```bash
npm i rehype-slug rehype-autolink-headings
```

Then we'll pop open our `svelte.config.js` file, import our two new rehype plugins, and add them to the `mdsvex` config options object, like so:

```js
// svelte.config.js
/* Other imports here */
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const config = {
  /* Other config properties here */

  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]
    }),
  ],
};

export default config;
```

**Important note: the plugins _must_ go in that order!** `rehypeSlug` adds IDs to our headings, and `rehypeAutolinkHeadings` only works on headings that have IDs. (Fun fact: I discovered these two were in the wrong order on _this_ site while writing this, when I suddenly realized it was only half working.)

With that in place, restart the dev server. Now pop open the inspector and check out an `h2` through `h6` generated from Markdown, and we'll see some additions:

![The headings in our blog posts now have links to them, with icon elements inside.](/images/post_images/sveltekit-rehype.png)

However, we'll need to add a bit of styling to make the links show up properly.

<SideNote>
The <code>.icon.icon-link</code> class is a <a href="https://fontawesome.com/">Font Awesome</a> convention, so it doesn't mean or do anything in our project by default.
</SideNote>

How you choose to handle this is personal preference, but this block of Sass should basically do the trick:

```scss
:where(h2, h3, h4, h5, h6) {
  .icon-link {
    position: relative;
    
    &::before {
      content: '#';
      position: absolute;
      left: -1ch;
      top: 0;
      line-height: 1;
      opacity: 0;
      text-decoration: underline;
    }
  }

  &:hover .icon-link::before {
    opacity: 1;
  }
}
```

That CSS will make a pound sign (or hash, or "octothorpe," if you're fancy) appear whenever the user hovers on a heading with a `.icon-link` in it:

![A pound symbol appears to the left of a hovered heading.](/images/post_images/sveltekit-rehype-css.png)

Thanks to how CSS treats pseudo elements, that icon is fully clickable as part of the link, to navigate directly to the heading in question.

You could _also_ add some JavaScript to handle automatically copying the link to the clipboard (probably with some JavaScript inside a Svelte component's `onMount` function), but I'll leave that detail up to you. For now, our links are at least present and working, even if they might not be ideal yet.


### Add page head meta tags

Ideally, we'll probably want to set up some stuff for the `<head>` on our various pages. For pages in general, but posts especially, it's important to have the right `title` attributes, Open Graph info, share images, etc.

SvelteKit makes this trivial, with the `<svelte:head>` component.

Add one somewhere in `_post.svelte` (I like to put it just before the HTML, personally), and let's add a title inside.

```svelte
<!-- _post.svelte -->
<svelte:head>
  <title>My blog - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>
```

You should now see the title showing up properly in the browser bar.

**There are many other properties you might want to add here**, _especially_ if you're trying to optimize your posts for share-ability. I won't go into any more detail here, but it's worth verifying all your pages and posts look good when shared with Open Graph checker tools (many are available online).

At this point, we should probably go through our pages and add `<title>` tags, etc. to them as well. For example:

```svelte
<!-- about.svelte -->
<svelte:head>
  <title>About - Josh Collinsworth</title>
</svelte:head>

<!-- ...HTML here -->
```

Note also that SvelteKit offers several other similar elements, like `<svelte:window>` and `<svelte:body>`, where we need to tap into parts of our site or app normally outside the boundaries of our components.


#### Improve the posts API endpoint

The posts API is functional, but it can be improved in several ways.

For starters, we'll definitely want to put the code we just wrote into a `try`/`catch` block that returns the proper status code when things go wrong.

This function also does a lot, and could be refactored a bit. (Sorting the dates, for example, could probably be extracted to its own utility function. So could the string manipulation.)

We'll also probably want to add some other extra features to this API route eventually. We might want pagination features, for example, since depending on the number of posts, returning _all_ of them might get prohibitively time-intensive.

Another possible future enhancement would be adding the post's content to the returned JSON, which we don't do currently. The "resolver" function offers a `default.render.html` method for that, if you so choose.

Finally, you could build in some post filtering, but it might be better to build out a dynamic endpoint for that. The [SvelteKit docs section on Rest parameters](https://kit.svelte.dev/docs#routing-advanced-rest-parameters) is worth a look as far as that goes.

Anyway, we'll worry about all that later (if at all). For now, it's working great, and we can use our new endpoint to finish our blog index page!


### Customize the error page

What you're looking at when you hit an error is SvelteKit's built-in error component. 

However, just like we can provide our own `__layout.svelte` file, we can _also_ provide an `__error.svelte` file, to template and format any errors our users might run into. 

I won't go into detail here, but you can check the official [Svelte docs error pages entry](https://kit.svelte.dev/docs#layouts-error-pages) for more info.


### Preload routes

SvelteKit is already fast, and when we pre-render our HTML like we are via the static adapter, it's going to be blazing. But we can actually push the performance _even further_ with SvelteKit's built-in preloading.

SvelteKit ships with _two_ functions for preloading data in the background: `prefetch`, and `prefetchRoutes`.

To use them, just import them in a page or layout (our global layout file might be a good choice):

```svelte
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
</script>
```

<SideNote>
<code>$app</code> contains several modules available in SvelteKit for things you might need in an app, like <code>env</code> and <code>paths</code>, along with <code>navigation</code>. See the <a href="https://kit.svelte.dev/docs#modules">modules docs</a> for full details.
</SideNote>

The difference between the two is:

- `prefetch` preloads a single route;
- `prefetchRoutes` preloads _all_ routes.

```svelte
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'

  prefetch('/blog') // Loads the blog page in the background

  prefetchRoutes() // Loads ALL routes in the background
</script>
```

Because `prefetchRoutes` grabs _all_ the site's data behind the scenes, we should use it cautiously and judiciously. We don't want to force users to download megabytes of data presumptively. That could very well cost them real money, for pages they might not even look at.


### Add anchor options

Speaking of preloading: SvelteKit offers a slightly less greedy version of it, as one of its [anchor options](https://kit.svelte.dev/docs#anchor-options).

Anchor options are special, SvelteKit-specific attributes you can add to `<a>` anchor tags. There are three:

- `<a sveltekit:prefetch>` causes the link to begin preloading as soon as the user _hovers_, rather than waiting for a click, saving some milliseconds.
- `<a rel="external">` signals to SvelteKit that the link in question is _not_ part of our SvelteKit app, and the router shouldn't try to handle it.
- `<a sveltekit:noscroll`> prevents SvelteKit from resetting the scroll position to the top of the new page. This is usually undesirable on websites, but may be more intuitive in some app situations.


### Implement page transitions

If you want to get fancy, adding a page transition in SvelteKit is pretty simple! Let's look at the code, then we'll go over each part of it.

```svelte
<!-- __layout.svelte -->
<script context="module">
  export const load = ({ page }) => {
    const currentRoute = page.path

    return {
      props: {
        currentRoute
      }
    }
  }
</script>

<script>
  // ...Other imports here
  import { fade } from 'svelte/transition'

  export let currentRoute
</script>

<!-- Other HTML here -->

{#key currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}
```

- To start, in our layout, we'll need  `load` to grab the current route. We'll pass that as a prop named `currentRoute`, to be used by the component.
- We'll use `fade` from the [Svelte transition](https://svelte.dev/tutorial/transition) library as our transition, though you could choose another if you like. The main thing is just to add `delay` to the `in` transition, so it doesn't start before the old page is done transitioning out.
- Finally, we'll wrap the page contents in a [`#key` block](https://svelte.dev/tutorial/key-blocks).

A `#key` block takes an expression, and automatically re-renders its contents whenever that expression changes. In this case, that will be the current page route, so that we can re-render the page itself every time the route changes.

<Callout>
A <code>#key</code> block takes an expression, and automatically re-renders its contents whenever that expression changes.
</Callout>

**That's all it takes!** Transitions are an incredibly powerful part of Svelte, and the `svelte/transition` library offers several options besides `fade`. Feel free to play around with them.



---
---
---

TODO: re-add dynamic pages and private modules stuff...maybe as category handling??





### Dynamic pages

A dynamic page handles _multiple_ routes. You could think of it as a wildcard page. 

Dynamic pages are useful because we might want one template file to handle any number of potential routes. In our case, we'll have one file to handle _any_ `/blog/*` route, no matter what the `*` might be.

<Callout>
A dynamic page handles multiple routes. You could think of it as a wildcard&nbsp;page.
</Callout>

**To make a page dynamic, all we have to do is wrap its title in brackets**. So, our next step is to create a file inside `src/routes/blog` named `[slug].svelte`. 

```fs
📂 src
┗ 📂 routes
  ┗ 📂 blog
    ┣ 📁 _posts
    ┗ 📜 [slug].svelte
```

<SideNote>
The word <code>slug</code> isn't important; it's just a variable, and could be anything. But as with any variable, it's good to name it semantically.
</SideNote>

Once you've created that file, you can actually visit `/blog/anything-here`, and you won't get a 404. Our dynamic page is handling _all_ unmatched `/blog/` routes for us.

The trick now is just to load the right Markdown content based on the current route.



---

Just to get an idea of what we're working with, let's start with any JavaScript developer's best friend: `console.log`.

```svelte
<!-- [slug].svelte -->
<script context="module">
  export const load({ page }) {
    console.log(page)
    return {
      status: 200
    }
  }
</script>
```

Notice if you load a blog page now, you can see `page` in the browser console, as well as in the terminal where your local dev server is running:

![The 'page' object, containing the host, path, query, and params. The params object contains the current slug.](/images/post_images/sveltekit-console-slug.png)

This confirms our `load` function is running both server- and client-side.

The route is called `params.slug`, because `slug` is what we named our dynamic page, and whatever route we're visiting will be its value.

<SideNote>You won't see what you logged in the browser console if you hit an error; that's why we added the explicit 200 status, just for demo purposes.</SideNote>

Knowing that the current `/blog/*` route will be available as `page.params.slug`, we can get to work. We'll use that to import the matching Markdown file, then pass it as a prop. The client side can then render it as a component, like so:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export const load = ({ page }) => {
    const file = await import(`./_posts/${page.params.slug}.md`)

    const Content = await file.default // .default is the actual content of the file

    return {
      props: {
        Content // Shorthand for `Content: Content`
      }
    }
  }
</script>

<script>
  export let Content // Expects and accepts a `Content` prop from the server
</script>

<article>
  <Content /> <!-- Place the content as a component (note: must be uppercase) -->
</article>
```

If you save that and visit one of your blog post routes, you'll now see the page content!

![The content of the markdown file rendered inside the blog layout](/images/post_images/sveltekit-min-blog-post-render.png)

Content is good, but we _also_ want to use the post's frontmatter properties. Fortunately, that's just as easy at this point as fetching another prop!

Just as `file.default` is the imported file's contents, `file.metadata` will be its frontmatter. So we can add a second prop pretty easily, and then use it in our HTML:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export const load = ({ page }) => {
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

This looks great, but there _is_ one small problem: when we visit a URL that doesn't match one of our Markdown files, we get a 500 error.

That's technically accurate, because our `[slug].svelte` file is trying to load a file that doesn't exist. However, this is an error we created and should avoid; really, the result of trying to access a route that doesn't exist should be a 404.

To solve this, we'll wrap our `import` in `try`/`catch` block:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export const load = ({ page }) => {
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

All right, now everything's looking pretty good for individual posts at this point. Next, let's cover the blog index page, which and displaying a list of _all_ our posts.


---

### Listing posts

At this point, we _could_ use the blog index page's `load` function to import all our posts. However, I don't think that's the right approach.

**Why?** Because odds are, we'll eventually want to retrieve lists of posts in other places, too. Just a few examples:

- A list of posts in a sidebar;
- An XML feed;
- A list of recent posts;
- Category pages, where only posts fitting particular categories are shown.

You might not want _all_ of those, but even if you just used one, you'd be repeating the same code to go fetch Markdown posts over and over each time, which is enough hassle to avoid.

Plus, the more we repeat the code, the more we might have slight deviations, which could make maintainability a chore.

There's a much better way: [SvelteKit endpoints](https://kit.svelte.dev/docs#routing-endpoints).


---