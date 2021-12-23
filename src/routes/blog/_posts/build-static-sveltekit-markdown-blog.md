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
  import Important from '$lib/components/Important.svelte'
  import SpoilerAlert from '$lib/components/demos/SpoilerAlert.svelte'
</script>


I love [Svelte](https://svelte.dev), and I've talked plenty about how much I've enjoyed [rewriting this site with it](/blog/converting-from-gridsome-to-sveltekit). But as delightful as Svelte is, there's still a bit of a learning curve when it comes to [SvelteKit](https://kit.svelte.dev) (Svelte's app framework, or "meta framework").

That's ok; it's just the tradeoff for SvelteKit's power and flexibility. By nature, it's not the simplest thing you could use as a static site generator (SSG). Other, more focused tools ([Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), [Gatsby](https://www.gatsbyjs.com/), etc.) will likely get you up and running faster and easier if that's your main focus.

<Callout>
As delightful as Svelte is, there's still a bit of a learning curve when it comes to&nbsp;SvelteKit.
</Callout>

However, those tools may _also_ trade that initial acceleration for less flexibility later on. And, of course, there are plenty of things to love about Svelte itself that we don't get with those SSGs.

So, in an effort to lower that barrier to entry, I'd like to walk you through how to set up SvelteKit as a static, Markdown-powered blog with Sass--just like this site--and share what I've learned, so that you can enjoy it like I do.

Along the way, we'll learn all the fundamentals of SvelteKit, and get some opportunities to try out its features.


## What we'll cover, and what to know first

**This is both an intro to SvelteKit, and a guide to creating a static blog with it.** We'll cover all the high-level concepts of SvelteKit on the way to setting up a statically prerendered blog, complete with Sass and Markdown.

**This is _not_ an intro to Svelte itself.** While you can probably still follow along even if you don't know much about Svelte, I'd recommend learning the basics first. The [Svelte tutorial](https://svelte.dev/tutorial/basics) is an excellent place for that.

Finally, this won't be super advanced, but you should still know at least the basics of front-end development, JavaScript, and installing packages using [npm](https://www.npmjs.com/). (You should also have npm installed already.)

All that said, let's get started!


## Creating a new SvelteKit app

To generate a new SvelteKit project, run this command in your terminal (naturally, you can change `my-app` to whatever other title you prefer):

```bash
npm init svelte@next my-app
```

When you run that `init` command, SvelteKit will ask you some questions about your project and how you want it set up: 

![SvelteKit's setup prompt for which type of project you want to create; boilerplate, or demo](/images/post_images/sveltekit-init.png)

For this example, we'll select "Skeleton project. "

<SideNote>
If this is your very first time using SvelteKit, feel free to choose the SvelteKit demo app option instead, and poke around a bit to get a sense of how things work. It's a good intro, but it comes with several files and styles that would be a lot to undo as a starter.
</SideNote>

The setup tool will also ask for your preferences on TypeScript, ESlint, and Prettier. For simplicity's sake, I won't use TypeScript in this post, but you're welcome to if you prefer.

Once you've made your choices, after a moment of installation, you should see `Your project is ready!` appear in your terminal, along with next steps and helpful links:

!['Your project is ready!' message appears in the terminal, along with confirmation of the options we've chosen and helpful links to get started.](/images/post_images/sveltekit-installation-confirmation.png)

You can copy and paste the directions from your terminal window, or you can find them here, too:

```bash
cd my-app # Or whatever you named your project
npm install
npm run dev -- --open
```

Complete those commands, and our new site will be running in a browser window!

![The default welcome page for a new SvelteKit project](/images/post_images/welcome-to-sveltekit.png)

It's definitely a bit unexciting, since we only installed the bare-bones skeleton project. There isn't even any CSS yet. But that's ok; it gives us the freedom to style our app however we like, without the need to remove or work around any existing code.

This is our blank canvas, and we'll get some paint on it soon enough.


## Creating a global layout

Most sites and apps have some elements that are reused on every page (a `<header>` and `<footer>` being the most common and obvious examples). SvelteKit, like many other frameworks, conveniently lets us define one global [layout](https://kit.svelte.dev/docs#layouts) for all such repeated content.

Inside of `src/routes`, make a new file named `__layout.svelte`. (If you haven't already done so, this is a good point to open the project in [VS Code](https://code.visualstudio.com/), or your text editor of choice.)

```fs
📂 src
┗ 📂 routes
  ┣ 📜 __layout.svelte
  ┗ 📜 index.svelte
```

Note the _two_ underscores in the file name; this is a SvelteKit convention. SvelteKit checks for a `__layout.svelte` file inside `routes` (and in all of its subdirectories), and if found, uses it to "wrap" content anywhere inside that directory (even subdirectories). A layout at the top level of the `routes` folder will apply globally, on every page in the app. Layouts in subfolders will only be applied from that route on down.

<Callout>
A layout at the top level of the <code>routes</code> folder will apply globally, on every page in the&nbsp;app. Layouts in subfolders will only be applied from that route on down.
</Callout>

Open up our new `__layout.svelte` file, and let's add a placeholder header and footer to our site, just so we can get a look at the layout in action:

```svelte
<!-- __layout.svelte -->
<header>Hi, I'm a header</header>

<main>
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>
```

Save that, and you should now see that header text above our main index page's contents, and the footer text below. That's because Svelte (like [Vue](https://vuejs.org)) uses the `<slot />` element to inject child components--in this case, the page content. The layout, fairly literally, lays out our content.

![The header text appears above the contents of the index.svelte file, and the footer text below.](/images/post_images/sveltekit-layout-shown.png)


## Routing in SvelteKit

<Callout>
Any Svelte file inside <code>src/routes</code> becomes a page on the site, at that same&nbsp;route.
</Callout>

As you might have noticed, SvelteKit has a directory-based approach to routing and pages. Any Svelte file inside `src/routes` becomes a page on the site, at that same route.

- The current `index.svelte` file is our homepage (`/`)
- A file named `about.svelte` would become the `/about` page
- `blog/index.svelte` would be be the `/blog` page
- `blog/some-post.svelte` becomes `/blog/some-post`



### Setting up our site's pages

Next, just to get some pages on our site, let's create `about.svelte` and `contact.svelte` files inside of `src/routes`. (We can always delete or modify them later.) We'll also create a `blog` folder, with an `index.svelte` inside.

Inside each of those files, we can just toss a quick heading, and maybe some text, just so we can see a little content.

<SideNote>
Svelte files can be just plain HTML; they don't need to have JavaScript.
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

Our `routes` folder should now look like this:

```fs
📂 src
┗ 📂 routes
  ┣ 📂 blog
  ┃ ┗ 📜 index.svelte
  ┣ 📜 __layout.svelte
  ┣ 📜 about.svelte
  ┣ 📜 contact.svelte
  ┗ 📜 index.svelte
```

At this point, we can visit `/contact`, `/about`, and/or `/blog` to see the pages we just created:

![Our bare-bones contact page rendered in the browser](/images/post_images/sveltekit-contact-example.png)

There's not much there, of course, but it's nice to see the routing and layout in action.


## Adding navigation and creating our first component

Manually typing routes in the browser isn't great, so let's add some navigation. And in the process, we'll create our first component!

Let's create a new folder called `lib` inside of `src`. (`lib` is a SvelteKit convention; more on that in a moment.)

Inside that, we'll create a folder named `components`, just for organizational purposes, and inside of _that_, we'll create a new component named `Header.svelte`:

```fs
📂 src
┣ 📁 routes
┗ 📂 lib
  ┗ 📂 components
    ┗ 📜 Header.svelte
```

<SideNote>
You don't have to capitalize component names, but doing so to distinguish components from HTML elements is generally preferred convention.
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

Once our new component is saved, let's go back to `__layout.svelte` and use it!

As with most frameworks, you'll need to `import` any component you want to use. So let's create a `<script>` tag in our `__layout.svelte` file to handle that. (I personally prefer it at the top of the file, but you don't have to; Svelte gives you the freedom to arrange your files however you like.)

```svelte
<!-- __layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
</script>

<Header />
<!-- The rest of the HTML here -->
```

Notice that `$lib` part of the import path? `$lib` is a handy alias that goes directly to `src/lib`, saving you from typing tedious relative paths. 

<SideNote>
<code>$lib</code> is the only alias SvelteKit ships with, but you can add your own (or replace it) if you like, from <code>jsconfig.json</code>.
</SideNote>

Anyway, now we should see something _slightly_ more user-friendly in our browser:

![Our new header shows up now in the site](/images/post_images/sveltekit-header-component.png)

The styling isn't great, of course, but it _is_ useable. You can click between pages now, if you're so inclined, which will make testing things out a bit easier.


### Component styling

In Svelte, a component's styles are scoped by default. That makes it easy to write CSS without fear of it bleeding out and affecting layout or appearance anywhere else in our site or app.

To try it out, let's open `Header.svelte` and add a `<style>` tag. (It could go anywhere, but I prefer to put it at the end.)

```svelte
<!-- Header.svelte -->

<!-- ... The rest of the file's contents here -->

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

If you save and take a look at the site now, you should see your header looking a little more header-like. You might _also_ notice that the styling doesn't affect anything in our main page content. That's the power of scoping!

![The links in our Header component are not underlined or blue, but links outside the component remain with the default styling.](/images/post_images/sveltekit-scoped.png)

If you want to, you could repeat this process with a `<Footer />` component now, too. That's probably a good idea, but I'll skip over it, since it's just the same thing over again.


#### When is it a component and when is it a page?

It might be a little confusing that we're jumping in and out of several `.svelte` files now, each with different roles. So just to be sure to clarify before moving on:

* Any `.svelte` file inside of `src/routes` becomes its own page (unless its name starts with an underscore, and then it's ignored);

* Any _piece_ of a page or element that you might pull in and use on its own is a component, and we'll place those inside of `src/lib/components`; they don't get routes of their own.


## Global styling

<Callout>
Svelte allows you to simply import CSS or Sass files directly into components—including pages or layouts.
</Callout>

There are a few ways you can add global CSS files in SvelteKit, but I find the _best_ method is to simply `import` it; Svelte allows you to simply import CSS (or Sass) files directly into components--including pages or layouts. It's easy, for one thing, but more importantly, it _also_ handles preprocessing automatically, which we'll want when we add Sass here in a moment.

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
There are no rules about how you structure things inside of <code>lib</code>. Feel free to organize your folders however you like.
</SideNote>

You can add whatever CSS you like, but if you need a suggestion, here's a little bit of boilerplate that should begin to get things looking slightly nicer:

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

Once we've got a CSS file with some styles in it, adding it globally is as easy as importing the file in our layout:

```svelte
<!-- __layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/style.css'
</script>

<!-- ...HTML here -->
```

**That's it!** Save that, and you should see your styles applied globally. Since SvelteKit is server-rendered, if you view the page source, you'll even see our style has been added to the HTML, rather than being client-rendered. Neat!

<SideNote>
Importing CSS files into JavaScript files is not a web standard; it's just supported by some bundlers and frameworks, including Svelte.
</SideNote>

![Our CSS is now showing on the site and making it look (slightly) less ugly.](/images/post_images/sveltekit-css.png)

We're not limited to vanilla CSS, however. Let's see how to add Sass to our project!


### Adding Sass to SvelteKit

One of the great things about SvelteKit is how comparatively easy it makes adding whatever external processing tools you like, thanks to [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess). While we'll use `svelte-preprocess` for Sass, that's far from the only thing it can do:

> `svelte-preprocess` automatically transforms the code in your Svelte templates to provide support for TypeScript, PostCSS, scss/sass, Less, and many other technologies.

Our next step is to install both `svelte-preprocess` and `sass`, which we may as well do at the same time:

```bash
npm i -D svelte-preprocess sass
```

<SideNote>
This command installs the most modern version of Sass, which isn't compatible with all versions of Node. You may need to adjust your Node version with a tool like <a href="https://github.com/nvm-sh/nvm">NVM</a> if you hit errors.
</SideNote>

Next, open the `svelte.config.js` file, found in the project root.

As the name implies, `svelte.config.js` is the home for, well, configuration. It's where we will make any needed changes to SvelteKit's options and compiler to modify its default behavior.

This change is minimal; we just need to import `svelte-preprocess`, and then add it to SvelteKit's list of preprocessors.

```js
// svelte.config.js
import sveltePreprocess from 'svelte-preprocess'

const config = {
  kit: { 
    //...other config options here already
  },

  preprocess: [
    sveltePreprocess(),
  ],
}
```

Note that you'll need to create the `preprocess` option; it's not there by default. We'll add Markdown processing here later, too.

Also note that you _can_ pass an object with more granular options into the `sveltePreprocess()` function, but we won't for now. Since it knows what to do with Sass by default, no further customization is necessary.

<SideNote>
It's worth mentioning the <code>scss.prependData</code> option, which allows you to automatically inject code at the start of any Sass processing (such as Sass variables or an <code>@import</code>). You can read more in the <a href="https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md#31-prepending-content"><code>svelte-preprocess</code> docs</a>; I just wanted you to know about it. 
</SideNote>

**One more quick, important thing to know:** you'll want to stop and restart your dev server any time you make a config change.


### Adding Sass to component styles

Now that we've got both Sass and our preprocessor installed, you can use Sass inside any component's `<style>` block just by adding a `lang="scss"` attribute, like so:

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
 

### Adding global Sass files

Linking to Sass files is actually exactly the same as linking to CSS files, like we've already covered, so this will be short! In fact, at this point, you can just rename the existing `style.css` file to `style.scss`, if you want. (You'll need to update the `import` in our layout file, too, but that's it.)

```svelte
<script>
  import '$lib/styles/style.scss'
</script>
```

---

Ok, we've gotten a pretty good idea of project structure and styling at this point. Let's move on to the last big missing piece: support for Markdown.


## Adding Markdown support with mdsvex

<Callout>
mdsvex converts Markdown to HTML, lets you import and use Markdown files as components, and even allows you to use Svelte components inside of&nbsp;Markdown.
</Callout>

If you've heard of MDX (generally used in React-based projects), you could think of the curiously named [mdsvex](https://mdsvex.pngwn.io/) as the Svelte equivalent. 

Otherwise, just know that it powers everything we might want to do with Markdown; mdsvex converts Markdown to HTML, lets you import and use Markdown files as components, and even allows you to use Svelte components inside of Markdown--handy for adding interactive components wherever needed!

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

We're doing three crucial things here:

1. Importing `mdsvex`, naturally;
2. Adding an `extensions` property, which tells Svelte what types of files to treat as components that can be imported and used; and
3. Calling `mdsvex()` during preprocessing, so `.md` files are actually compiled to HTML. 

<SideNote>
The default extension for mdsvex is <code>.svx</code>, which is why we need to specify <code>.md</code> as an argument. If your Markdown was in <code>.svx</code> files, you could run <code>mdsvex()</code> without any arguments.
</SideNote>

**Reminder:** be sure to restart your dev server after making config changes. And if you're running into errors, double-check to be sure that everything installed properly, that all the necessary imports are present in your config file, and that there are no syntax errors in the config file.)

<Callout>
Thanks to mdsvex, you can use a Markdown file as a page if you like!
</Callout>

At this point, we're ready to start adding Markdown files to our project. And now that our config treats `.md` files as components, thanks to mdsvex, you can use a Markdown file as a page if you like!

Just to try it out, create `src/routes/uses.md` and throw some Markdown into it. You'll be able to see your content by visiting `/uses`!

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

Markdown pages are a handy option for text-based pages, since Markdown is generally easier to author than HTML. (My [`/uses`](/uses) page is a Markdown file, for example.)

And since our app now treats `.md` files like components, you can even import and use Markdown content _inside of_ other files, if you want to--for example, to import as _part_ of the page's content.

Let's cover a couple other nice features of mdsvex before moving on.


### Code blocks in markdown

Another very handy feature: mdsvex comes with [prism.js](https://prismjs.com/) pre-installed for code syntax highlighting. All you need to do is note code blocks with a language (by adding it to the opening triple backticks), and mdsvex will process it appropriately.

<Callout>
mdsvex comes with prism.js pre-installed for code syntax highlighting.
</Callout>

```markdown
\```js
// JavaScript goes here,
// And will be syntax-highlighted!
\```
```

All the code blocks on this website are made using this technique. And as a bonus: mdsvex even has `svelte` available as a highlighting option!

Just note that you'll need some CSS to handle the coloring, but [many themes are available](https://github.com/PrismJS/prism-themes).


### Using Svelte components in Markdown

Like I mentioned before: mdsvex allows you to use Svelte components _inside_ of Markdown!

We can create a new component in our `src/lib/components` folder, just to use as an example. As something moderately practical, how about a "spoiler alert" component, that warns users of spoiler content, and provides a button to reveal it. 

Here it is in action:

<SpoilerAlert>
React is overrated.
</SpoilerAlert>

And here's the code I used to generate that component:

```svelte
<!-- SpoilerAlert.svelte -->
<script>
  let isSpoiled = false

  const toggleIsSpoiled = () => {
    isSpoiled = !isSpoiled
  }
</script>

<div class="spoiler">
  <div class="spoiler__controls">
    ⚠️ SPOILER ALERT
    <button on:click={toggleIsSpoiled} aria-pressed={isSpoiled}>
      {isSpoiled ? 'Hide' : 'Reveal'}
    </button>
  </div>

  {#if isSpoiled}
    <slot />
  {/if}
</div>

<style lang="scss">
  .spoiler {
    border: 2px solid red;
    padding: 1rem;
    margin: 2rem 0;

    &__controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
    }
  }
</style>
```

<SideNote>
This component works ok, but could be better. Always do your usability and accessibility research when it comes to interactive components. I recommend <a href="https://inclusive-components.design/toggle-button/">inclusive toggle buttons</a> for more on this type of component.
</SideNote>

To import a component in a Markdown file, you just drop in a `script` tag in the content (after the frontmatter). You can then add the component to your Markdown just like you would anywhere else:

```markdown
---
# frontmatter goes here
---
<script>
  import SpoilerAlert from '$lib/components/SpoilerAlert.svelte'
</script>

# Hey there

**I'm a markdown page!**

<SpoilerAlert>React is overrated.</SpoilerAlert>
```

This example might be a little contrived, but hopefully it's easy to imagine the power of being able to drop arbitrary interactive Svelte components into post content anywhere you like!


## Setting up the blog

Now it's time to get into the real meat of this tutorial: setting up our actual blog to automatically handle Markdown posts!


### Choosing the best route forward

At this point, as you might have already figured out that we _could_ simply toss all our Markdown posts inside of `src/routes/blog`, like this:

```fs
One option:

📂 src
┗ 📂 routes
  ┗ 📂 blog
    ┣ 📜 a-post.md
    ┣ 📜 another-post.md
    ┗ 📜 etc.md
```

That would work. Each post would have its own route that way; it's a simple solution. But we'll actually take a _different_ route forward (pun fully intended).

Why? Well, the main reason is: you can't actually access the frontmatter of a Markdown post when it's being its own page component; you can only get the content. That's a problem because we can't show the title, date, cover image, etc.

There are ways around that, but they involve a nested layout--and _that_ would get in our way as much as it would help, since it would apply to more routes than just our individual post pages. We'd be working against ourselves, and having one file try to do too many things.

Instead, I think we'll be much better off utilizing two very handy features of SvelteKit: [dynamic pages](https://kit.svelte.dev/docs#routing-pages), and [private modules](https://kit.svelte.dev/docs#routing-private-modules).


### Private routes

Going forward, it will be handy to have at least a couple of posts to work with, so let's create some. Inside `src/routes/blog`, create a folder named `_posts`.

<Callout>
Any route that begins with an underscore is private; it can be loaded by other pages and components, but it won't get a public&nbsp;route.
</Callout>

```fs
📂 src
┗ 📂 routes
  ┗ 📂 blog
    ┗ 📂 _posts
```

Note the underscore; any route that begins with an underscore is private. That means it (and its contents) can be loaded by _other_ pages and components, but it won't get a public route. No matter what we put inside the `_posts` folder, we can't visit or load it in the browser.

<SideNote>
We could achieve the same thing by just putting our folder full of posts <em>outside</em> of <code>routes</code>, too. That would also be fine, if you prefer. I just like it here for tighter coupling with blog routes.
</SideNote>

Next let's create a couple of dummy posts inside our new folder. (Or, if you already have some Markdown files, you're welcome to just copy those into `_posts`.) No need for anything fancy; just at least two `.md` files, with a tiny bit of Markdown in them; something like this:

```fs
📂 src
┗ 📂 routes
  ┗ 📂 blog
    ┗ 📂 _posts
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

The names and content aren't important, but I _will_ be using the `title` and `date` frontmatter properties, so if you don't have them, just be prepared.

If you want, you can try to load `/blog/_posts/whatever`, just to confirm that nothing is showing. Private routes, doing their thing. (Good, because we don't want duplicate content on our site.)

So how _do_ we load our posts? Well, now that we have some files to work with, we'll want to make a dynamic page.


### Dynamic pages

A dynamic page handles _multiple_ routes. You could think of it as a wildcard page. 

Dynamic pages are useful because we might want one template file to handle any number of potential routes. In our case, we'll have one file to handle _any_ `/blog/*` route, no matter what the `*` might be.

<Callout>
A dynamic page handles <strong>multiple</strong> routes. You could think of it as a wildcard&nbsp;page.
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

The trick now is just to get this dynamic page to take the route being visited, and load the appropriate post based on that.


### Server-side loading

All right, this is where things start getting a _little_ more complex, as we begin diving into some of the more advanced features of SvelteKit. We'll take our time, so we cover the concepts well.

We need to load Markdown files at this point, but we can't do that in a browser; this part needs to be handled server-side.

Luckily, pages and layouts in SvelteKit can have a [`load` function](https://kit.svelte.dev/docs#loading), which runs _before_ the component is created--both server-side _and_ client-side. So we can use `load` to handle server-side tasks.

<Callout>
Pages and layouts in SvelteKit can export a <code>load</code> function, which runs <em>before</em> the component is created—both server-side <em>and</em> client-side.
</Callout>

This `load` function must go inside a _second_ `<script>` tag, differentiated using a `context="module"` attribute:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export function load() {
    // Code here will be executed server side
  }
</script>

<script>
  // This is the "normal" script tag for client side
</script>
```

Aside from the separate module script, there are a few things to know about the `load` function:

- **It has access to a few special arguments**, including `page`, which contains contextual info about the current route.
- **It should return an object**. Among other things, this can include a status code, and props for the component to use.
- **It runs both server- and client-side.** That's mostly unimportant when prerendering to static files, as we are. Still, `load` shouldn't reference environment-specific code, like `window` or `process`.

Just to get an idea of what we're working with, let's start with any JavaScript developer's best friend: `console.log`.

```svelte
<!-- [slug].svelte -->
<script context="module">
  export function load({ page }) {
    console.log(page)
    return {
      status: 200
    }
  }
</script>
```

Notice if you load a blog route now, you can see `page` in the terminal where your local dev server is running, as well as in the browser console:

![The 'page' object, containing the host, path, query, and params. The params object contains the current slug.](/images/post_images/sveltekit-console-slug.png)

This confirms our `load` function is running both server- and client-side.

<SideNote>You won't see what you logged in the browser console if you hit an error; that's why we added the explicit 200 status, just for demo purposes.</SideNote>

Whatever route you just loaded will be shown as `params.slug`, because `slug` is what we named our dynamic page. If you changed `[slug]`, the property would be whatever the new name is. And when you're visiting a `/blog/*` route, the `*` will be the value. (You can try loading some `/blog/*` routes in your browser right now, if you want to see.)

<SideNote>
There are other properties available to the <code>load</code> function besides <code>page</code>, but we won't use them just yet. You can peek at the <a href="https://kit.svelte.dev/docs#loading">loading docs</a> if you'd like to learn more, though.
</SideNote>

Knowing that the current `/blog` slug will be available as `page.params.slug`, we can get to work. We'll use that to grab the content of matching Markdown file, then pass it back to the client side. The client side can then render it as a component, like so:

```svelte
<!-- [slug].svelte -->
<script context="module">
  export async function load({ page }) {
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
  <Content /> <!-- Render the content (note: must be uppercase) -->
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
We could <em>also</em> just return the whole import as one prop, and extract <code>default</code> and <code>metadata</code> from it on the client side. Both would work. I just prefer to pass only what's needed as a prop.
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

All right, now everything's looking pretty good for individual posts at this point. Next, let's cover the index page, which will handle displaying a list of _all_ blog posts.


### Adding a blog index

At this point, we _could_ use the blog index page's `load` function to create a list of all the posts on the site. However, I don't think this page is the right place to do that.

**Why?** Because odds are, we'll eventually want to retrieve lists of posts in other places, too. Just a few examples:

- A list of posts in a sidebar;
- An XML feed;
- A list of recent posts;
- Category pages, where only posts fitting particular categories are shown.

You might not have _all_ of those, but even if you just had one, you'd be repeating the same code to go fetch Markdown posts over and over in each place--and while that's not _too_ difficult, it's worth avoiding.

Plus, the more places we repeat the code, the more opportunities we have for slight deviations, which could make maintainability a chore.

There's a much better way: [SvelteKit endpoints](https://kit.svelte.dev/docs#routing-endpoints).


## SvelteKit endpoints

Up until now, every route we've created has been a page. But SvelteKit offers _another_ type of route, too: [endpoints](https://kit.svelte.dev/docs#routing-endpoints).

Endpoints work the same way as pages, as far as routing goes; just drop a file into `src/routes`, and a route is created automatically. The main difference is: where pages return components and/or HTML by default, an endpoint returns _data_. If you've ever worked with a site that had an API (like WordPress's REST API, for example), it's the same idea.

Endpoint data is _usually_ JSON, but it doesn't have to be. It could be XML, or anything else you can send and retrieve in a browser.

There are just three important conventions to follow when creating an endpoint:

1. **An endpoint's route should include the data type it returns.** For example, `src/routes/stuff.json.js` would be a route at `/stuff.json`.
2. **Endpoint functions should return a `status` and `body`.** (Status is 200 by default, and returning nothing is a 404 by default.)
3. **An endpoint should export a function matching each HTTP verb it accepts.** If you just want to return data from an endpoint, you'll do so with a `get()` function. If supported, post requests should be handled with a `post()` function, and so on. (The one exception is `del()`, since `delete` is a reserved keyword in JavaScript.)


### Creating an endpoint for our posts

**Enough talk; let's build!**

Since we might decide to add more endpoints later, let's create a `src/routes/api` folder, and inside it, a new file named `posts.json.js`.


```fs
📂 src
┗ 📂 routes
  ┗ 📂 routes
    ┗ 📜 posts.json.js
```

<SideNote>
You <em>can</em> have private API routes, if you like, by prefixing the file or directory with an underscore. I think we'll find there are many advantages to a public posts API, however, and there isn't really any need to protect content that's already public anyway.
</SideNote>

Inside our new `posts.json.js` file, we'll need to export a `get` method. We'll make the function `async`, since it will `await` files. But before that, let's just do a quick test to see it in action:

```js
// posts.json.js
export async function get() {

  return {
    status: 200,
    body: JSON.stringify('We got here!')
  }
}
```

With that in place, we should be able to visit `/api/posts.json` and see the following (unimpressive, but neat!) JSON loaded in the browser:

!['We got here!'](/images/post_images/sveltekit-dummy-json.png)

I just want to call out how _cool_ it is that we've got an actual API route on our site now! It doesn't return anything useful just yet, but knowing it's _that easy_ to set up an API that can be used both internally and externally is pretty awesome.

<SideNote>
While we won't do it here, you can pass an argument to your <code>get</code> function, which will give you all the headers, query parameters, and lots of other info about the request.
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
  const allPostFiles = import.meta.glob('../blog/_posts/*.md')
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

- `import.meta.glob` is a Vite function. It imports any files that match the glob (wildcard string) we give it--in this case, all `.md` files inside of the `_posts` folder.
- `import.meta.glob` returns an object where each file's relative path is the key, and the value is a "resolver" function (my term; not official) that loads the file contents as a JavaScript promise. 
- The `map` method is there to get the data we want from each file, and reshape it how we want, so it's easier to work with on the front end.
- Once that's all done, we sort the posts by descending date (since this is a blog, of course, and we'll want our newest posts showing first).
- Finally, we convert the finished product to JSON and `return` it as the `body` of our API response. (The 200 status code is implicit here.)

<SideNote>
Ideally, we should probably have a try/catch block here, too.
</SideNote>

**Let's try it out!** Refresh your `/api/posts.json` path now, and you should see some _real_ data!

![The data from our posts is now coming through as JSON!](/images/post_images/sveltekit-posts-json.png)

Even cooler: this route will update automatically with each Markdown post we add to the `_posts` folder!


#### Other considerations and improvements

There's plenty to improve here. For starters, this function does a lot, and coule be a bit refactored. (Sorting the dates, for example, could probably be extracted to its own utility function.)

Functionally, we'll probably want to add some other extra features to this API route eventually. We'll probably want pagination features, since depending on the number of posts, returning _all_ of them might get prohibitively time-intensive.

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

Go ahead and open up your `svelte.config.js` file, which is located in the project's root folder. At this point, the only thing we actually have to do is change `adapter-auto` to `adapter-static` on line 1.

```js
// Replace the original `adapter-auto` line with this.
import adapter from '@sveltejs/adapter-static'
```

You _can_ supply further customization options if you want to (as an object passed to the `adapter()` function), but the defaults are great for us, so there's no need to. You can check out the [adapter-static readme](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) for info on that if you want to.

---

With our adapter installed and in use in our config file, every page on our site will be pre-rendered as static HTML at build time! You can even view source in the browser to confirm that the site is now served as pre-rendered HTML.

<SideNote>
One of the great things about SvelteKit's static mode is that it pre-renders all your pages as static HTML, but <em>also</em> loads some client-side JavaScript to help with navigation and preloading in the background. This way, the site works just fine without JavaScript, but is progressively enhanced.
</SideNote>


## Finishing touches

While the site is pretty much ready at this point, there are a few small things we may want to do to really take our site to the next level. Let's get into those here.


### Adding an RSS feed

Remember, data routes don't have to return JSON; they can return XML, too. This handy fact makes it dead simple to implement an RSS feed on our blog!

To start, create an `rss.xml.js` file in your `routes` folder:

```fs

📂 src
┗ 📂 routes
  ┗ 📜 rss.xml.js
```

Inside that file, we'll query our existing API endpoint, and convert the result to XML:

```svelte
export async function get({ fetch }) => {
  const posts = await fetch('/api/posts.json')

  const body = render(posts)
  const headers = {
    'Cache-Control': `max-age=0, s-maxage=3600`,
    'Content-Type': 'application/xml',
  };

  return {
    body,
    headers,
  };
};

const render = (posts) =>
`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Your title</title>
<description>Your description here</description>
<link>https://your-site-url.tld</link>
<atom:link href="https://your-site-url/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">https://your-site-url/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://your-site-url/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`
```

That will make the RSS feed available at the route `/rss.xml`.

<Important>
<strong>Please note that the above code block will need a lot of modification!</strong> The example above is straight from this blog, and may not be the right shape for your needs. At the very least, you'll need to replace the URL and text placeholders, but you may also need to update the routes and the post frontmatter properties being referenced.
</Important>

I pulled my example from [this guide](https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit) and [this one](https://scottspence.com/posts/make-an-rss-feed-with-sveltekit), if some more info would help. And if you want to make sure you've done it correctly, here's an [online XML validator](https://codebeautify.org/xmlviewer).


### Adding heading links with rehype

It's nice to let users link directly to a section of a post. Manually adding links to all our headings would be tedious, however, and goes against the point of writing in Markdown.

Luckily, mdsvex allows us to use [rehype](https://github.com/rehypejs/rehype) plugins to add extra features to markdown processing, and so we can make this all happen automatically with just a bit of config adjustment.

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

**Important note: the plugins _must_ go in that order!** `rehypeSlug` adds IDs to our headings, and `rehypeAutolinkHeadings` only works on headings that have IDs.

(Fun fact: I discovered these two were in the wrong order on _this_ site while writing this, when I suddenly realized it was only half working.)

With that in place, once again, we'll need to restart our dev server.

We won't see this working until later, when we actually _have_ Markdown content with subheadings (`h2` through `h6`).

When we do, we won't notice anything different in our blog pages, even if we _do_ add some additional headings. Pop open the inspector, however, and we'll see our processed Markdown has some added new features:

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

That CSS will make a pound sign (or hash, or "octothorpe," if you're fancy) appear whenever the user hovers on a heading with a link in it:

![A pound symbol appears to the left of a hovered heading.](/images/post_images/sveltekit-rehype-css.png)

Thanks to how CSS treats pseudo elements, that icon is fully clickable as part of the link, to navigate directly to the heading in question.

You could _also_ add some JavaScript to handle automatically copying the link to the clipboard (potentially using the Svelte `onMount` function), but I'll leave that detail up to you. For now, our links are at least present and working, even if they're not quite ideal yet.


### Handling page head meta tags

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




