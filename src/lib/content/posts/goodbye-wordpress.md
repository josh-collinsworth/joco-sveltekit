---
title: 'Goodbye, WordPress'
date: '2021-02-01'
updated: '2021-02-02'
categories:
  - 'wordpress'
  - 'javascript'
  - 'vue'
coverImage: 'gw.png'
coverWidth: 128
coverHeight: 72
excerpt: WordPress was potentially the most impactful and empowering technology I've yet encountered. It transformed my career path and enabled me to do anything I wanted at every point in my journey. So why leave it now?
---

<script>
  import Callout from '$lib/components/Callout.svelte'
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

<SideNote>

This post mentions Gridsome frequently, but <a href="https://joshcollinsworth.com/blog/converting-from-gridsome-to-sveltekit">this site is actually built with SvelteKit now</a>. It looks and works mostly the same, but the underlying tech is a bit different.

</SideNote>

I was first introduced to WordPress pretty early in my design career. I was a fledgling professional designer working at a small branding agency when I got my first glimpse of everything WordPress could be via the impressive [Divi theme](https://www.elegantthemes.com/gallery/divi/).

Though I knew the basics of HTML and CSS at the time (which allowed me to implement some customizations beyond what the theme provided), Divi offered to make previously impossible things achievable. The freedom was intoxicating.

<PullQuote>
WordPress empowered me to bring my ideas to life in a way no platform ever had&nbsp;before.
</PullQuote>

<Callout>
WordPress empowered me to bring my ideas to life in a way no platform ever had&nbsp;before.
</Callout>

Things like loading and scroll effects, parallax, sliders, contact forms, project galleries, and all kinds of other features that were previously locked doors as a nascent coder suddenly became as easy as configuring some options in a graphical user interface (GUI).

I got a lot of mileage out of my site while it was on WordPress. At first, it was pure Divi, but soon, I expanded into a child theme with custom PHP templates. As time went on and I grew as a developer, I needed to reach for Divi's features less and less, until eventually I abandoned Divi and build my own WordPress theme from scratch. (It's no longer live of course, but there's a [post about my theme here](/blog/new-site-new-theme-for-2018).)

Finally, last year (2020), I converted to a headless site, with WordPress on the back end and Gridsome on the front. (I wrote about that process in [this post](/blog/a-new-headless-site-with-gridsome/).)

At the time, I made the decision to go headless because I wanted to keep a foot in the WordPress world, for reasons laid out in previously mentioned post. But to summarize: I wanted the best of both worlds. I didn't want to go full static, but giving up WordPress entirely wasn't really a thought for me then, either, because having a database and all my content (especially images) still represented value.

<Callout>
Fast-forward several months, and I've come to the inevitable conclusion that, in the case of this, my personal website and (occasional) blog, WordPress does not represent value so much as tech debt.
</Callout>

## Why move? Why now?

My personal site has been on WordPress for somewhere around the last 6–7 years. Toward the beginning of that time, the cost of hosting and maintaining a WordPress site carried enough value that it was a no-brainer; the cost was trivial compared to what WordPress unlocked for me.

Later, as a Flywheel/WP Engine employee and a more seasoned professional developer, I didn't really _need_ WordPress anymore, but I had the luxury of hosting as an employee perk. WordPress was always the right price because it was free.

But now that I've moved on from that job, I'm forced to consider what it actually costs to host WordPress—not just monetarily (although that is a large factor), but in terms of maintenance, overhead, and everything else that goes along with the stack. Headless isn't simple, after all; it's a little like having two websites to worry about instead of just one, and while there are definitive advantages to that approach, everything is also a little more complicated in that world.

<PullQuote>
The answer for me is: no; WordPress isn't worth it anymore in the case of my specific needs and&nbsp;wants.
</PullQuote>

The real question at the end of that mental calculation is: does WordPress's value outweigh its cost? Is it worthwhile, just to have a headless back-end for a website that I don't update with any particular frequency?

<Callout>
The answer for me is: no; WordPress isn't worth it anymore in the case of my specific needs and wants.
</Callout>

I thought about taking the WordPress side of the site to some cheap-o $5/month hosting. I tried out [SpinupWP](https://spinupwp.com/), and liked it a lot, but not enough to justify the cost of one single site. (I'd definitely use it if I had multiple client sites to host, though.)

<Callout>
Eventually, I came to the conclusion that I just want things simple, and headless WordPress is not simple.
</Callout>

<PullQuote>
Eventually, I came to the conclusion that I just want things simple, and headless WordPress is not&nbsp;simple.
</PullQuote>

Again: that doesn't mean WordPress is bad. It's not. (And while we're near the topic: neither is PHP. That joke can just die, please.) This just means that of the zillion things WordPress is and is capable of, either I'm not doing them, or doing them WordPress's way isn't personally worth the tradeoff to me, and for my unique set of needs and goals.

### An aside on WordPress's trajectory and future

There's an interesting story here about how WordPress, in many ways, made its name—rightfully—as the democratizer of the web. Anybody could get a website and set it up to do pretty much whatever they wanted with WordPress. And if you just wanted that to be a simple blog, hey, even better! You can host it for free on WordPress.com.

But as time goes on, I've noticed that it seems like the _hosting_ story of WordPress has evolved a lot—first for the better, and now…maybe not as much.

In the early days (let's say from WordPress's origins to around the early 2010s), it could be very difficult to self-host WordPress. Setting up the requisite server software was relegated to relatively few very technical people.

Then, managed WordPress hosting blew up, and companies like WP Engine and Flywheel (RIP) made entering the WordPress space _easier_ than it had ever been before—but also arguably more expensive.

Don't get me wrong; that's fair. Managed WordPress hosting exists—and the companies selling it are succeeding despite its price tag—because it's valuable. They take care of some very difficult things for you, and that's worth the price in a lot of cases.

But the price tag of WordPress hosting generally assumes that your site is _worth_ that to you. WordPress hosting has become _costly_ because it wants your key, important businesses to run on WordPress, and in that pursuit, I worry that WordPress has begun squeezing the side projects and personal blogs out of the market.

Even GoDaddy starts at $10 per month; most other managed hosts, that would be considered a step above that, aren't selling it for less than about $15–30 per month (even WordPress.com will charge you at least $25 per month if you want SFTP access), and that price tag is _not_ cheap for a simple personal website or side project.

<PullQuote>
There's an argument to be made that Jamstack companies like Netlify and Vercel are succeeding because they're filling a gap that WordPress just&nbsp;isn't. …WordPress, for all its myriad benefits, is definitely <em>not</em> the choice if you just want a random side project to live on the web, forever, for minimal personal&nbsp;cost.
</PullQuote>

<Callout>
There's an argument to be made that Jamstack companies like Netlify and Vercel are succeeding because they're filling a gap that WordPress just&nbsp;isn't.
</Callout>

Granted, the tech hurdle is higher—not just anybody can code up a static site, and that's not to be discounted—but I can have a live Jamstack site on the web for _absolutely free_ any time I want with Netlify, et al.

<Callout>
WordPress, for all its myriad benefits, is definitely <em>not</em> the choice if you just want a random side project to live on the web, forever, for minimal personal cost.
</Callout>

As I write this, WP Engine and, no doubt, many other hosts are working on the headless WordPress story, and figuring out how to empower that tech stack and solve its problems in the same way they solved WordPress's. I have no doubt they'll come forward with something very compelling that will meet a great many customers' needs, but I also have no doubt it won't be cheap—certainly not as cheap as what the Jamstack is currently offering. And I think that will make many more people ask the same question I asked, and come to the same conclusion; WordPress just won't continue to be worth it for everyone all the time.

## So what's the alternative?

When this site was headless WordPress, the front-end was already built in [Gridsome](https://gridsome.org/), a Vue-based static site generator that could be fairly described as Vue's equivalent of [Gatsby](https://www.gatsbyjs.com/).

<SideNote>

A **static site generator** (or SSG) is a tool that takes input of some kind—maybe Markdown files, maybe JSON from an API, or maybe even a combination of different data sources—and turn it all into a traditional, static HTML website. This allows the site to be hosted cheaply and easily on a CDN-backed host for optimum performance.

</SideNote>

While it would've certainly been possible to just abandon the headless formula and go back to good ol' solo WordPress, that wasn't really an option to me. I'd lose too much work that had gone into this site already, and honestly, I wasn't interested in abandoning the modern dev experience that a JavaScript-based framework offers. I'm not making any value statements here, but to me:

<Callout>
Authoring front-end code in Markdown and Vue just feels nicer than working with the block editor and PHP templates.
</Callout>

(No knock on PHP. I still enjoy it when I get the chance to dive back into those waters, like playing an old video game I have fond memories of. But it's not my first choice anymore.)

<PullQuote>
Authoring front-end code in Markdown and Vue just feels nicer than working with the block editor and PHP&nbsp;templates.
</PullQuote>

You might ask: **so if you're cutting out WordPress, where does the content come from?**

Gridsome, along with many other static site generators, has the ability to generate content from Markdown files. Markdown is a very nice way to write, and while it certainly misses some of the conveniences of authoring posts in WordPress's block editor (AKA Gutenberg), it also comes with a lot of upside.

<SideNote>

If you're not familiar with Markdown: it's a simple way of authoring formatted text that's much closer to natural typing than HTML. There's a pretty neat [Markdown playground here](https://dillinger.io/) that covers the general syntax.

</SideNote>

The front end of this site was already using Markdown to create content with its projects; each project is a Markdown file with the project's details. Here's an example project Markdown file, just to get general the idea across on how Gridsome scrapes content from files and converts it into a content type:

```markdown
---
title: My Awesome Project
featuredMedia: projects/image.png
category: design + illustration
summary: This project was awesome
---

The project content Markdown would go here. Neato!
```

Any Markdown files in the `/projects` directory are processed into content for the [projects page](/projects), using just a bit of config setup that directs Gridsome to the folder where it can find project files, and what Vue template(s) to render them with:

```javascript
//gridsome.config.js
plugins: [
  {
    use: '@gridsome/source-filesystem',
    options: {
      // Where Gridsome looks for .md files to convert:
      path: './src/projects/*.md',
      // What we'll call this content type:
      typeName: 'project',
    },
  },
],
templates: {
  project: [
    {
      // The dynamic path for each project
      path: '/projects/:title',
      // What Vue component is used to render each project
      component: 'src/templates/single_project.vue'
    },
  ],
}
```

_The above config code tells Gridsome how to convert Markdown files to HTML content. Other SSGs, like <a rel="external" href="11ty.dev">Eleventy</a> or Gatsby, work similarly._

Finally, the template file for rendering the data collected from the Markdown files (the `single_project.vue` file seen above, simplified here just to communicate the general idea):

```html
<!-- The Vue template -->
<​template>
  <Layout>
    <h1>{{ project.title }}</h1>
    <p>{{ project.category }}</p>
    <img :src="project.featuredMedia"/>
    <div v-html="project.content" />
  </Layout>
</template>
```

_(Not pictured: there's also a GraphQL query to grab the currently viewed project. I just didn't show that for the sake of simplicity.)_

<SideNote>

This site has been updated since that version, and no longer features individual project pages or markdown files.

</SideNote>

---

So moving all my WordPress posts to Markdown files and abandoning the database altogether didn't seem like that much of a leap; the pieces were all there already. (_I was only half-right in that assessment; more on that in a bit_.) And I liked the idea of working with a purely file- and code-based site a lot.

Having all your content hosted in the repository along with your files means that search-and-replace is easy, and can be done in your text editor, rather than via MySQL or WP-CLI. It also means anybody can contribute a pull request to correct mistakes or provide context. Plus, previewing posts as they're being written was always a problem with headless. I'm sure you could do some tricky things to make it possible, but none of them were as easy as simply spinning up a local dev server and writing in a Markdown file, watching your post auto-refresh in the browser every time you save.

But most importantly for me: it means I no longer even need a database. MySQL need not be a part of the stack any longer, because everything I have on the site is in a `.md` file.

When I was initially converting this site to headless, I didn't go full static at the time for two reasons:

1. I liked having WordPress's REST API to query for searches; and
2. Exporting WordPress posts as Markdown is somewhere between not easy and painstakingly tedious.

#1 wasn't really enough value to keep WordPress around, even if there weren't other alternatives in the Jamstack world. But #2 proved to be the largest stumbling block, so to speak…

## The challenges of exporting WordPress content

<PullQuote>
This miraculous little CLI tool takes your WordPress export XML file, and not only converts each piece of content to Markdown—complete with frontmatter!—but can also scrape your site for all the images in the content and neatly download&nbsp;them.
</PullQuote>

It turns out that, while WordPress offers a content export tool by default, it's highly limited in what it can do (i.e., it spits out XML). WordPress, naturally, isn't strongly incentivized to help you move your content to non-WordPress platforms, so their exporter is only designed to work with WordPress (if at all; it's not particularly reliable in my experience).

I tried a few tools, including a seemingly abandoned Gatsby plugin, and even considered converting my posts by hand before I came across [this GitHub repo](https://github.com/lonekorean/wordpress-export-to-markdown) with a with a Node CLI tool called `wordpress-export-to-markdown`. (Thanks to the author for jumping in a Twitter thread where I was griping about how hard this whole thing is!)

This miraculous little CLI tool takes your WordPress export XML file, and not only converts each piece of content to Markdown—complete with frontmatter!—but can also scrape your site for all the images in the content and neatly download them.

<SideNote>

Frontmatter is how metadata is handled in Markdown. You might have noticed it in the project file example above. Information such as publish date, post title, categories and tags is all typed out in a comment-like block (technically YAML) at the top of the file. Frontmatter isn't part of the main post content, but its data is accessible for display or filtering purposes.

</SideNote>

While I had a few small hiccups with it (mostly not really the tool's fault), the biggest was my custom blocks. The info on what a custom block should look like is _not_ stored in the database; instead, there's just some text like this:

```
<!-- wp:block-lab/block_name_here -->
```

WordPress apparently matches that line from the database to the PHP file that renders its contents at run time, rather than having the HTML for the block stored in the database as it would with typical blocks, like headings and text. (As you can infer, I'm using the Block Lab plugin for my custom blocks here. I'm not sure if this is a Block Lab-specific problem, or if this is the case for _any_ custom block.)

So long story short: `wordpress-export-to-markdown` is a phenomenal tool that I'd highly recommend to anybody looking to export WordPress content as Markdown. But WordPress doesn't provide enough info in its XML export to know how to render a custom block, so the comment (and block, and its contents) are simply omitted from the output.

That meant I had to go through each of my posts, and manually insert every single custom block that was missing, along with its contents.

Fortunately, I only have like 20 posts on this site (over the course of like seven years—oof), so the process, while tedious, only took me an evening or two.

Also fortunately: I like my current solution to custom blocks better anyway.

## Handling images without WordPress

One of the amazing things that WordPress does for you, for free and out of the box, is generate multiple image sizes and serve your content images with responsive source sets. This means users always load the appropriate image size for their device, which is a big benefit to both user experience and performance. If you're using Jetpack, you also get your images (optionally) loaded from WordPress.com's global CDN servers for faster load times.

<PullQuote>
Gridsome ships with a <code>g-image</code> component that handles loading appropriately sized images, <em>and</em> goes a step further with automatic lazy&nbsp;loading.
</PullQuote>

Moving away from WordPress means those benefits are gone. Fortunately, Gridsome ships with a `<g-image>` component that handles loading appropriately sized images, _and_ goes a step further with automatic lazy loading. And when you're deploying on Netlify, you have a CDN already, so that's all sorted.

There _is_ the matter of getting the images you need without the ones you don't (since your `wp-content` folder will be full of extraneous resized images alongside the originals). Scraping all the original images from the WordPress site was fairly easy thanks to the `wordpress-export-to-markdown` tool mentioned above (although it _did_ miss a few for some reason. No big deal, but something to watch out for). Beyond that, a bit of RegEx in a search-and-replace over the Markdown files, and I was in business.

A couple of other considerations around images, though:

- **All your images need to live in your repo with this approach.** I don't have enough (and they aren't large enough) that it's a problem, but that might be an issue for some sites.

- **Build times balloon with lots of images.** Netlify is free to use up to a certain number of build minutes, and the only times I've gotten close were when I was doing regular updates on this site. (Thankfully, there's a [Gridsome Cache Netlify plugin](https://github.com/edm00se/netlify-plugin-gridsome-cache) to prevent unnecessary duplicate image processing.

## Building with Vue components in Markdown

Among Gridsome's library of plugins is a particularly delightful one called [Vue Remark](https://gridsome.org/plugins/@gridsome/vue-remark).

<PullQuote>
Vue Remark allows you to simply drop Vue components into Markdown files anywhere they're&nbsp;needed.
</PullQuote>

<Callout>
Vue Remark allows you to simply drop Vue components into Markdown files anywhere they're&nbsp;needed.
</Callout>

This means I can still have the functionality of all my custom blocks even while I'm writing posts in Markdown!

Vue Remark allows you to simply drop Vue components into Markdown files anywhere they're needed.

Here's an example:

```markdown
# Some generic Markdown

A paragraph _also_ using _Markdown_.

<SomeVueComponent props="whatever">
  Use components where needed!
</SomeVueComponent>

## Back to Markdown!

_Neat, huh?_
```

All the custom blocks I had on WordPress have now been faithfully recreated in simple Vue single-file components, available to import and use at will in these posts.

The authoring experience is incredibly nice, too; since Gridsome runs on a local Node dev server with auto-refresh, I can simply start the server, navigate to the post, and go to work. Every time I hit `⌘ + s` I see my updates in the browser, fully styled, in a matter of milliseconds.

<SideNote>

Nuxt has a similar feature available via installable module, but even goes so far as to allow you to edit the Markdown file by editing the text in the browser, which is a type of dark witchcraft I'm not even sure I can handle.

</SideNote>

## Other considerations

Remember that authoring content via Markdown means that handling drafts is something you need to do on your own; there isn't a "publish" button anymore. (Though you won't lose revisions as long as you keep a tidy git history.)

There are a few ways to go about drafts. The simplest is probably to add a `published` or `status` key to the frontmatter of each post, and add a conditional to your code to filter out unpublished content.

Personally, I created a `drafts` folder inside my `posts` folder, and then added it to the project's `.gitignore` file to ensure that any time I push to the main branch, the drafts stay behind. That way, nobody can snoop on my drafts in GitHub before they're actually published, either. (Not that anybody cares that much, or that it would really matter even if they did, but at least if I delete a post before I publish it, it's not anywhere in my GitHub history.)

Also note that generating taxonomy pages (categories, tags, etc.) will likely be an extra manual challenge with any static site generator. In the case of Gridsome, you can modify the `gridsome.server.js` file to add new collections. Here's how I achieved mine:

```javascript
module.exports = function (api) {
	api.loadSource((actions) => {
		//Create a new "categories" collection
		const categories = actions.addCollection({
			typeName: 'category'
		});

		//Get all the posts (which already exist from the vue-remark plugin)
		const allPosts = actions.getCollection('post')._collection.data;

		//Loop over the posts and add their categories to an array
		let allPostsCategories = [];
		allPosts.forEach((post) => allPostsCategories.push(...post.categories));

		//Filter out duplicates
		const uniqueCategories = new Set(allPostsCategories);

		//Finally, add each category as a data node, with an array of the matching posts
		uniqueCategories.forEach((category) => {
			categories.addNode({
				title: category,
				posts: allPosts.filter((post) => post.categories.includes(category))
			});
		});
	});
};
```

<SideNote>

There are more efficient ways to achieve the above; my first try used `flatMap`. But turns out: Node doesn't have the `flatMap` array method, so it wouldn't compile on Netlify's servers. So this was my slightly longer workaround.

</SideNote>

## Final thoughts

<Callout>
I still love WordPress. But I found myself wanting a site I could tinker with in my editor, all together in one place. No database; no SQL dumps; no live server at all. Just content files compiled to beautifully uncomplicated HTML.
</Callout>

This approach certainly isn't right for everyone. It works great for me because I'm the only one working on this site. But if I had co-authors, or users, or collaborators, the whole calculation might be drastically different.

<PullQuote>
I still love WordPress. But I found myself wanting a site I could tinker with in my editor, all together in one place. No database; no SQL dumps; no live server at all. Just content files compiled to beautifully uncomplicated&nbsp;HTML.
</PullQuote>

And of course, what _I_ find to be simple may be very different from what _you_ find to be simple. I love living in my code editor. You might find a visual interface easier to use. Both are just fine. It's just a matter of personal preference.

WordPress just didn't quite fit my wants and needs for this project. It might still be a great fit for you and yours. And I'm sure it will be again for me for a future project.

But right now, I like things being back together, all in one place.
