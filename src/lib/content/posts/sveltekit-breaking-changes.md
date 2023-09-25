---
title: 'Breaking changes in SvelteKit, August 2022'
date: '2022-08-17'
updated: '2022-08-19'
categories:
  - 'svelte'
  - 'javascript'
  - 'web'
coverImage: 'sveltekit-breaking-changes.png'
coverWidth: 16
coverHeight: 9
excerpt: SvelteKit introduced breaking changes to its routing and data loading in August 2022. Learn how to convert from the old way of doing things to the new.
---

<script>
  import Warning from '$lib/components/Warning.svelte'
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import PullQuote from '$lib/components/PullQuote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

SvelteKit introduced a new syntax for its routing, as well as for its data loading, in the newest pre-1.0 release. It's a complete overhaul of how `src/routes` works (from pages to endpoints), as well as a significant change to how and where you can use SvelteKit's powerful `load` function.

If you were on an older version of SvelteKit prior to the new release (August 16, 2022), you'll probably need to make some serious changes to your file structure and code before you can update your version of SvelteKit.

[This guide](https://github.com/sveltejs/kit/discussions/5774) will walk you through the technical steps you need to go through in order to make the changes. It contains a handy `npx` script you can run that will make many of the necessary changes for you, and will highlight _in your code_ where you need to make further updates manually.

<CalloutPlusQuote>

The migration tool is very nice. However, it likely can't fix everything for you automatically; you'll probably be left with a list of to-dos after running&nbsp;it.

</CalloutPlusQuote>

This post will help cover what's changed, and how to convert the syntax and structure from the old to the new.

Let's dig in.

## Routing syntax

Previously, SvelteKit routes could be either files or folders. For example, this would be how you'd structure a site with `/about`, `/blog`, and `/blog/post-title` pages:

```fs
-- Old routing structure:

📂 src
┗ 📂 routes
  ┣ 📜 index.svelte
  ┣ 📜 about.svelte
  ┗ 📂 blog
    ┣ 📜 index.svelte
    ┗ 📜 post-title.md
```

<SideNote>

`.md` files won't work in SvelteKit out of the box; it requires some setup. This is just to show an example of how you might structure a blog.

</SideNote>

In the latest update, **every route must be inside a folder**; no more `index` files or files named for the page they represent.

Instead, the route will take the folder's name, and a new `+page.svelte` component is the contents of the page:

```fs
-- New routing structure:

📂 src
┗ 📂 routes
  ┣ 📜 +page.svelte
  ┣ 📂 about
  ┃ ┗ 📜 +page.svelte
  ┗ 📂 blog
    ┣ 📜 +page.svelte
    ┗ 📂 post-title
      ┗ 📜 +page.md
```

If you think that looks worse: I agree with you. It's much messier, and further away from the routing structure we've come to know from PHP, and other meta frameworks.

However, give it a chance; there's good reason for the changes. `+page` isn't the only new file in this system. In fact, there are a handful of `+` files that have special meaning in the new routing system.

Plus, this makes page creation much more explicit. No route or page will exist unless there's a corresponding `+` file. There are advantages to this we'll cover later.

<SideNote>

In fact, you actually _can't_ prefix a file or folder inside of `src/routes` with a `+`, as it's now a special, reserved symbol.

</SideNote>

### Converting to the new routing syntax

Again, [the migration guide](https://github.com/sveltejs/kit/discussions/5774) and migration tool in it can do much of the work of converting for you. This is just to help understand the changes (in case you have to do anything manually).

- Any `index.*` file becomes `+page.*` instead
- Any named page goes inside a folder named for the page slug, and the file gets renamed to `+page.svelte`.

**Example:**

- `src/routes/index.svelte` now becomes `src/routes/+page.svelte`
- `src/routes/about.svelte` now becomes `src/routes/about/+page.svelte`

If you were previously plopping a bunch of Markdown files together in the same folder--or using a _lot_ of named page files--this probably sounds _incredibly_ daunting.

For pages, you may have to just bite the bullet and tuck all those files into their own folders.

For posts, however, rather than changing all of their names and nesting them in their own individual folders, you can convert to a dynamic route, and load the files indirectly. That requires some setup in the site's code, but it saves renaming and relocating all your Markdown files.

A dynamic route is wrapped in braces (`[]`), and uses its `+page.svelte` file (and probably a `load` function) to dynamically load the proper post. That would look something like this:

```fs
📂 src
┗ 📂 routes
  ┗ 📂 blog
    ┣ 📜 (a bunch of markdown files here)
    ┗ 📂 [slug]
      ┗ +page.svelte
```

Within the dynamic `[slug]/+page.svelte` file, you can grab whichever markdown file corresponds with `slug`, and render its contents.

It's a little weird to explain, but there's more on that in my [SvelteKit Markdown Blog post](/blog/build-static-sveltekit-markdown-blog). Also, see the [routing docs](https://kit.svelte.dev/docs/routing#page). I only mention it here so you know you have options that _don't_ require creating specially named folders for each of your individual posts.

## Layouts

Layouts fortunately haven't changed much. The only real difference is that now, instead of beginning with `__`, layout files _also_ begin with `+`.

```fs
-- Old layout naming:

📂 src
┗ 📂 routes
  ┗ 📜 __layout.svelte
```

```fs
-- New layout naming:

📂 src
┗ 📂 routes
  ┗ 📜 +layout.svelte
```

That means the conversion is pretty much as simple as changing the name of the file from `__layout.svelte` to `+layout.svelte`--although depending on what you were doing _inside_ the layout, there may be more to it. More on that in a bit.

Also worth noting: the same applies to `__error.svelte`; it can simply be changed to `+error.svelte` instead.

## Hidden files and folders in `src/routes`

Previously, any file or folder inside of `src/routes` could be "hidden" from the router by prefixing its name with an underscore (`_`). For example, a folder full of Markdown posts you intended to load with a dynamic route, or perhaps a component you only intended to `import`:

```fs
-- Old hidden file/folder structure:

📂 src
┗ 📂 routes
  ┣ 📁 _hidden-folder
  ┗ 📜 _hidden-component.svelte
```

One big benefit of the new `+` file system is that **we no longer need to explicitly hide files and folders from the router**. This lets us colocate files related to a specific route within that route's folder, without worrying about inadvertently creating new routes.

<CalloutPlusQuote>

In the new routing system, we _opt in_ to routes, rather than selectively opting files and folders&nbsp;out.

</CalloutPlusQuote>

Want a page there? Put a `+page.svelte` component in.

Want an endpoint? Make that a `+server.js` file instead. (_More on those in a bit._)

In all other cases: that thing won't get a route, even though it's inside the `routes` folder, like it would have before. If it ain't a `+` file, it ain't gonna show up.

This means you don't actually _need_ to do any conversion here; a `_hidden` folder is still hidden. You just don't _need_ the underscore in front of its name anymore.

## The `load` function

This is the other really big part of the newest breaking changes.

**Previously**, a `load` function went inside a second `<script>` tag in a page's Svelte file, with a `context="module"` attribute separating that tag from the normal Svelte component `<script>` tag:

```svelte
<!-- Old load function -->
<script context="module">
	export const load = () => {
		// Do stuff here
		return {
			props: {
				// The stuff to return
			}
		};
	};
</script>

<script>
	// Normal Svelte component stuff here
</script>
```

**In the new system**, there's no more `<script context="module">`. In fact, the `load` function now lives in a file all its own, named either `+page.js` or `+page.server.js`. We'll cover the difference between the two in a moment.

Either way, the file is colocated with a corresponding `+page.svelte` file, like so:

```fs
📂 src
┗ 📂 routes
  ┣ 📜 +page.svelte
  ┗ 📜 +page.js
       (or +page.server.js)
```

**Before rendering the page**, SvelteKit will run the `load` function found in `+page.js` (or `+page.server.js`) automatically, and pass whatever that function returns to the page component as a `data` prop.

<SideNote>

Any `.js` files mentioned could also be `.ts` files instead, if using TypeScript.

</SideNote>

Beyond that, everything is the same as before with the `load` function:

- The `load` function must be exported;
- `load` has access to parameters like `url` and `params`; and
- `load` must `return` an object (which, again, is passed to the page as a prop, to be used in the template). (_It does **not** need to pass the data using a `prop` property anymore, however_.)

**One other thing:** to execute a `load` function on _all_ pages, you'll do so in a `+layout.js` file, which lives alongside the `+layout.svelte` file.

### Converting from the old `load` function to the new

Depending on what your `load` function is doing, this may be a simple conversion, or it may require some finessing. But for starters:

1. Anywhere you have a `<script context="module">` tag in a Svelte page component, copy its contents into a `+page.js` (or `+page.server.js`) file, and place that file alongside the one you copied the function out of.

2. Be sure your `load` function `return`s data. Previously, you needed to do so inside a `props` object; now you no longer need to. Whatever _was_ inside of `props` can now just _be_ the returned object.

3. Modify your template files accordingly. Wherever the `load` function's data was being consumed, you'll probably need to update the variable names.

Data returned from the `load` function is available in the template as the `data` prop. So you now only export one prop, named `data`, and use it from there.

```svelte
<script>
	// Data returned from `load` is automatically available as `data`
	export let data;
</script>

<article>
	<h1>{data.title}</h1>

	<p>{data.date}</p>
</article>
```

### Differences between `+page.js` and `+page.server.js`

The main differences between the two are:

- `+page.js` **runs on both the server and the client** (_as the load function did previously_).
- `+page.server.js` **runs on the _server only_**. It can also respond to HTTP verbs.

Which to use will depend mainly on your use case. There's one key thing to remember though, which is: **fetch works differently in the two files!**

- In `+page.js`, you'll pass `fetch` as a parameter, like this:

  ```js
  // +page.js only
  import { json } from '@sveltejs/kit';

  export const load = ({ fetch }) => {
  	const myData = fetch('/relative/path/here');
  	return json(myData);
  };
  ```

That's because **the client and server have different versions of fetch**; the Node version and the browser `fetch` API are _not_ identical. So when you pass `fetch` as a parameter to a `load` function, SvelteKit does a bit of magic (and adds some niceties) to make sure your fetch call works, and works well, on both the server and client.

This is unnecessary when using `+page.server.js`, however, for obvious reasons; code that only runs on the server only needs the server version of `fetch`. (In fact, if you _try_ to pass `fetch` as a parameter inside `+page.server.js`, you'll get an error.)

This also means when using `fetch` on the server only, you'll need to be explicit about the domain of the request; no relative paths. (Easy enough, with `url.origin`.) But you can use relative routes with the `fetch` helper in `+page.js`.

```js
// +page.server only
import { json } from '@sveltejs/kit';

export const load = ({ url }) => {
	const myData = fetch(`${url.origin}/my/api/path`);
	return json(myData);
};
```

## Server routes (API endpoints)

Previously, to create an endpoint, you would drop a `.js` (or `.ts` file) somewhere into `src/routes`, and include the data type it was meant to return as part of the name of that file.

For example: if you wanted to return a list of posts as JSON at the path `/api/posts.json`, this would be your folder structure:

```fs
-- Old endpoint structure:

📂 src
┗ 📂 routes
  ┗ 📂 api
    ┗ 📜 posts.json.js
```

The new structure is similar. By now, you've probably guessed the file we need begins with a `+`. In this case, it's `+server.js`, and while we _can_ have `.json` be a part of the path name, we don't actually have to.

```fs
-- New endpoint structure:

📂 src
┗ 📂 routes
  ┗ 📂 api
    ┗ 📂 posts
      ┗ 📜 +server.js
```

Again, the `posts` folder _could_ be named `posts.json`, if you wanted to keep the path the same. It really just depends what you want the route to look like when visited in the browser; there's no practical difference. (_In the new example above, the route would be `/api/posts`, with no filetype suffix; renaming the folder to `posts.json` would make the route `/api/posts.json`._)

Another change to be aware of: previously, SvelteKit handled setting the proper headers for our endpoint responses, as well as converting the data to the proper format. (_It could do all this easily, since we were required to put the data type in the file name._)

```js
// Previously:
export const get = () => {
	const message = 'Hello!';

	return {
		status: 200,
		body: {
			message
		}
	};
};
```

_Now_, however, **server routes _must_ return a proper [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response)**.

That would be a pain to do on our own, but fortunately, SvelteKit ships with a `json` function available to do all the conversion and everything for us. We just need to import it, then wrap whatever data we return in that function call.

```js
// The new way:
import { json } from '@sveltejs/kit';

export const GET = () => {
	const message = 'Hello!';
	return json(message);
};
```

Even if you use the conversion script mentioned above, you'll still need to adjust your endpoints' responses; adjust relative file paths (since SvelteKit's new routing syntax often requires nesting files a level deeper); and handle implementing the `json()` responses.

The only other big difference to be aware of--which you may have noticed already--is that the HTTP verb functions accepted by a server route (endpoint) now must be capitalized.

```js
// Old:
export const get = () => {
	// Do the thing
};

// New:
export const GET = () => {
	// Do the thing
};
```

Oh, and one last thing: since we're not returning an object with a `status` and a `body` anymore, we'll want to import SvelteKit's `error` function wherever we need to return a non-200 status.

```js
// Old:
return {
	status: 400,
	body: new Error('not found')
};

// New:
import { error } from '@sveltejs/kit';

try {
	//return something here
} catch ({ message }) {
	throw error(400, message);
}
```

### Converting server routes

As with pages, you may need to create new named folders for any server routes (API endpoints).

- Any `index` files should be renamed to `+server.js` files;
- Any named endpoint file should be put in a folder, named for the endpoint path, and be renamed to `+server.js`.

**Example:**

- `src/routes/api/index.json.js` becomes `src/routes/api/+server.js`
- `src/routes/api/posts.json.js` becomes `src/routes/api/post/+server.js`

You'll also need to convert any HTTP verb function names to all-uppercase (`get` becomes `GET`, `post` becomes `POST`, etc.)

And rather than `return` a JavaScript object with a `status` and `body`, you'll need to either use SvelteKit's `json` helper (if returning JSON); or, return a `new Response()` constructor, which takes two arguments: body, and options.

## Wrapup

That's it for the major changes. Best of luck converting your SvelteKit sites!

Once more, be sure to check out [the official migration guide](https://github.com/sveltejs/kit/discussions/5774) for more details on converting your existing site. It's got an excellent migration tool that will help do much of the hard work for you. It goes into much more detail than I have here on many things (especially including TypeScript and typing your code).

If I've left anything out, or made any mistakes, feel free to let me know in the comments.
