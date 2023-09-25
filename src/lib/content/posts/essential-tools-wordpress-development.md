---
title: 'My Essential Tools for WordPress Development'
date: '2016-06-25'
updated: '2020-06-14'
categories:
  - 'opinion'
  - 'web'
  - 'wordpress'
coverImage: 'Screenshot-2016-06-24-20_45_21.png'
coverWidth: 1381
coverHeight: 609
excerpt: Some of these apps, resources and tools aren’t directly WordPress-related, or even necessarily development-related; some have to do with productivity or just make life a little easier. That’s by design. Part of being a developer is learning to work and use your tools as efficiently and with as little wasted time and mental energy as possible.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

What follows is a list of software, in some form, that I feel is useful, recommendable or indispensable when developing WordPress sites.

Some of these apps, resources and tools aren't directly WordPress-related, or even necessarily development-related; some have to do with productivity or just make life a little easier. That's by design. Part of being a developer is learning to work and use your tools as efficiently and with as little wasted time and mental energy as possible.

This is a list of the things that help me toward that goal. If you handed me a brand new MacBook and told me to get to work on building your WordPress site, everything on this list would most likely be in my dock, browser history and/or plugins list by the end of the day.

<SideNote>

This post hasn’t been updated for a while; Wunderlist isn’t a thing anymore, and neither is Spectacle (it’s a new app called Rectangle now, which honestly is better). Some of the pricing has changed; neither LastPass nor Chrome are my first choices in their category anymore; and in this moment at least, I’d definitely add Block Lab to the list. Still, I leave the post as-is both in the interest of not rewriting history, and because I still think the list is mostly helpful. You can check my /uses page for more.

</SideNote>

![Dropbox Logo](/images/post_images/Dropbox.svg)

### [Dropbox](https://www.dropbox.com)

**[dropbox.com](http://www.dropbox.com)** | _Up to 2 GB free; 1 TB $9.99 per month._

You're going to need somewhere to store your files, and [Dropbox](https://www.dropbox.com) syncs beautifully with all your devices. You can also set up synced folders, so that anything you save in a particular folder on your machine is available on any machine, thus creating both a local and cloud copy. It can also automatically save screenshots, upload pics from your smartphone's camera for safe storage, and send/receive client files easily.

![LastPass logo](/images/post_images/LastPass-Logo-Color.svg)

### [LastPass/1Password](http://www.lastpass.com)

**[lastpass.com](http://www.lastpass.com)** | _free to start; $12 per year_
**[1password.com](http://1password.com)** | _$5 per month for families or $64.99 one-time fee for a single user_

I don't have a strong preference between the two, but there's no excuse for not using a password manager in this day and age. Odds are good you'll have at least two usernames and passwords to remember for every single site you work on—maybe more—and repeating the same one or making it easy to type and remember is an awful idea when you're using the world's most popular CMS. Saving brain power is making your life better and your workflow more efficient. And besides, these are extremely affordable apps; LastPass is only $12 per year. Make like Nike and just do it.

![VS Code logo](/images/post_images/32078472-5053adea-baa7-11e7-9034-519002f12ac7.png)

### [Visual Studio Code](https://code.visualstudio.com/)

**[code.visualstudio.com](https://code.visualstudio.com/)** | _Free_

Honestly, it doesn't matter all that much which text editor you use, as long as you know how to use it well. But I love [VS Code](https://code.visualstudio.com/) because it _just works_.

I used to be on the Sublime Text bandwagon, and I won't deny that Sublime runs slightly faster in some cases. But unlike Sublime, VS Code _just works_ in the ways you want it to out of the box. Emmet comes pre-installed, as does git. There's also no package manager to install; extensions are native, and easily available. VS Code comes pre-configured and you can customize from there in some amazing ways.

I highly recommend the following extensions, but you can mix and match your own as well (and by the way, this list used to be several entries longer; VS Code just automatically handles a lot of the things I was installing packages for in Sublime Text):

- [**Close XML/HTML tag**](https://packagecontrol.io/packages/CSS%20Extended%20Completions) (for quickly adding closing tags; a feature of Sublime Text this package adds)
- **highlight-matching-tag** (Shows where the closing tag is for a selected opening tag and vice versa)
- **WordPress Toolbox** (for auto-completion of many WordPress PHP functions; a real life-saver)

![GenerateWP logo](/images/post_images/GenerateWP.png)

### [GenerateWP.com](http://generatewp.com/)

**[generatewp.com](http://generatewp.com/)** | _Free unlimited basic generators; premium starts at $7 per month_

There's a _ton_ of PHP to remember in WordPress, the difficulty of which is compounded by the fact that many of the functions WordPress provides us are either confusingly or extremely similarly named. (Somehow `wp_enqueue_script` and `wp_enqueue_script_s_` are totally different things.)

GenerateWP does the work for you in generating blocks of code. You just fill out some fields telling the site what you're after and it will spit out the code for you to copy and paste in the appropriate PHP file. Everything from custom `WP_Query` loops to defining custom post types and much, much more can now be handled by checking some boxes and filling out a few fields instead of peering through the WordPress Codex trying to remember the difference between `get_header()` and `wp_head()`.

![Local logo](/images/post_images/Local-Logo.svg)

### Local by Flywheel

[**local.getflywheel.com**](http://local.getflywheel.com/) | _Free; paid pro version upcoming_

Developing locally is always preferable to developing on a live server, for lots of reasons that I won't go into here. There are a lot of programs and processes available for that; I used to use [MAMP](http://mamp.info) to make that possible. But ever since its release, [Local](http://local.getflywheel.com/) has blown the other tools out of the water in my mind. It's a phenomenal tool for WordPress development, allowing you to spin up and run sites locally. It also couples with CodeKit (below), which makes it even more awesome. Cowboy-coding—i.e., altering the code on a live site—is a bad habit; break it with Local (and save yourself a lot of FTP upload/download time in the process).

The most amazing thing about Local, though: you can actually give a link to your local development site to your client, and as long as Local is running on your machine—_no matter where they are_—they can see the site. That's a total game-changer.

Quick disclaimer: I do work for Flywheel, but I'd be writing this even if I didn't. With MAMP, I had to actually download WordPress, spin up a database, configure and run the install manually. Local does all of that automatically with a click of a button. (Plus the links thing above.)

![CodeKit logo](/images/post_images/CodeKit.png)

### [CodeKit](http://incident57.com/codekit)

**[incident57.com/codekit](http://incident57.com/codekit)** | _Free limited trial; one-time $32 licensing fee_

It's very hard to explain what [CodeKit](http://incident57.com/codekit) does in a way that makes it sound as indispensable as it actually is. Maybe that's just because it has so many features it's easy to drown the message. But even if you don't use it for anything else, it's capable of auto-refreshing the site you're working on every time you save your code, seamlessly compiling your SASS files every time you save them, checking files for errors and allowing you to watch your site on multiple devices at the same time. (Yes—you can browse the site on your desktop and watch the exact same interactions happen on your smartphone _at the same time_, and vice versa!)

That alone, to me, is well worth the low $32 price tag, but that's really only scratching the surface. It can grab external libraries for you, plus concatenate and minify your files so you're ready to go to production with a lean, efficient set of CSS and JS files, and so much more. I promise you that if you give CodeKit a real shot, it will become an indispensable part of your workflow.

![Advanced Custom Fields PRO logo](/images/post_images/acf-pro-dev-launch.png)

### [Advanced Custom Fields (PRO)](https://www.advancedcustomfields.com/)

**[advancedcustomfields.com](https://www.advancedcustomfields.com/)** | _Basic version free; PRO $25 per site or $100 lifetime_

There may be no better way to spend $100 in the WordPress development world than on a developer license for [ACF](https://www.advancedcustomfields.com/). It's quite possibly my favorite plugin of all.

Sure, the free version of the plugin is still amazing, but its most lacking exemption is the repeater field. You won't be developing sites for too long before you run up against a client variable: a situation in which you're not exactly sure how many fields they might need. And allowing the client to account for that contingency on their own is well worth $100 in saved headaches. But even if a Benjamin is enough to make you balk, ACF has a wonderfully user-friendly pricing structure: you can buy a single-site license for $25 instead, and have that $25 apply to your $100 purchase later if you decide you're ready for the developer license.

Aside from that though, ACF is perhaps the single most important piece of making WordPress sites ready for any client to use. Most clients can't (and shouldn't) be trusted with the full WordPress editor window, particularly where layout and media may vary. ACF allows you to build a fluid, automatic machine that takes care of all of that for you and your client when they simply fill out the fields and checking the boxes you've provided.

In short, ACF makes the experience of using the WordPress site you've built for them less like trying to cobble a page design together in a word processor, and more like using an elegant custom app constructed exclusively for the user. (And it has the bonus effect of preventing the client from screwing things up too badly, too.)

![Google Chrome browser logo](/images/post_images/Chrome.png)

### [Google Chrome](https://www.google.com/chrome/browser/desktop/)

**[google.com/chrome/browser](http://www.google.com/chrome/browser)** | _Free_

Your choice of browser is less and less relevant these days, but Chrome is still the industry standard for both its robust dev tools and the ability to add extensions to make your development life easier. I personally am a huge fan of:

- [**Snatchr**](http://getsnatchrr.com/) – allows you to see the type and color styles in CSS of the page you're viewing neatly and easily
- [**Pocket**](https://getpocket.com/) – saves pages and articles to read later (even saves them offline)! This is honestly a tool so handy it probably deserves its own entry
- [**Web Developer**](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en-US) – Does _tons_ of useful things, like show the current page in several device sizes
- [**Website IP**](https://chrome.google.com/webstore/detail/website-ip/ghbmhlgniedlklkpimlibbaoomlpacmk?hl=en) – View the IP address of the site you're viewing. Helpful when dealing with DNS changes and site migrations
- [**Type Sample**](https://www.typesample.com/) – Hover over text in the browser to see its font-family and -size, and click to type your own phrase in the selected typeface. Neat!

![GitHub](/images/post_images/github_desktop.png)

### [GitHub Desktop](https://desktop.github.com/)

**[desktop.github.com](https://desktop.github.com/)** | _Free_

I like version control and having a repository of my code changes, but I really dislike using git from the command line. GitHub Desktop is a nice, app that gives you a more straightforward (for git, at least) experience with updating your code and pushing/pulling from GitHub.

Git and version control can be a bit intimidating, but GitHub Desktop does a nice job of abstracting the fear about as much as possible and making it simple.

![Transmit FTP client logo](/images/post_images/Transmit.png)

### [Transmit](https://panic.com/transmit/)

**[panic.com/transmit](https://panic.com/transmit/)** | _Limited free trial; $34 one-time licensing fee_

If I'm being honest here, I couldn't give you much of an elevator speech on why Transmit is that much better than its free alternatives like Cyberduck or FileZilla. A little more polish and maybe a better user interface, but we're still talking about moving FTP files around here, so there isn't a whole lot of room for distinction.

Still, Transmit is the industry gold standard in FTP clients, so there must be some reason for that (and the $34 price tag). I guess I just haven't used other FTP clients enough to really know the difference, so if you're into cutting cost, this might be a good place.

![Alfred app logo](/images/post_images/Alfred.png)

### [Alfred](https://www.alfredapp.com/)

**[alfredapp.com](https://www.alfredapp.com/)** | _Free; Powerpack for extended functionality £17.00_

[Alfred](https://www.alfredapp.com/) is Mac software that doesn't have anything directly to do with development, really; it's just an incredibly handy little piece of software that can do lots of things to make your life in OSX just a little easier.

The "spotlight" feature (see what I did there?) is that Alfred can search for and open files and folders for you with a very quick and efficient search, so you don't need to waste time digging through files structures or trying to remember where you put a particular document. You can configure this search to be very specific and to include/exclude whatever you like. Plus it does math, opens programs, defines words, runs system commands, opens browsers, and can be configured to do powerful things like keep clipboard history, run workflows, expand snippets and even open Terminal to run commands there.

It's one of those tools that you won't realize you ever wanted until you try it and realize you can't live without it anymore. In fact, there's a very good chance it would be the very first thing I installed on a new computer.

![Spectacle app logo](/images/post_images/Spectacle-Logo.jpg)

### [Spectacle](https://www.spectacleapp.com/)

**[spectacleapp.com](https://www.spectacleapp.com/)** | _Free (open source; donations accepted)_

Even if you're good at using workspaces and key commands, you probably spend more time than you realize in your day moving windows around your desktop: get the browser out of the way to use FTP, change the Finder window to be smaller so you can drag something from it to another window (which you also had to move), set the browser back to fullscreen, then move it again so you can see the desktop and open another window to copy some text before moving that window back out of the way—

Sound familiar?

[Spectacle](https://www.spectacleapp.com/) is a delightfully simple little app that allows you to assign keyboard shortcuts to resize and move windows for you. No more dragging; just hit the command you've defined and poof—your window is now on the left half of the screen. Or the upper-right quarter. Or the lower third. Or on the next workspace. Or fullscreen. Hit the shortcut again to put it back, if you need to.

Gallons of wasted time and effort are accumulated a drip at a time. Spectacle is one of those apps that helps stop the drip.

![Tiny PNG Logo](/images/post_images/Image-2017-01-24-at-9.45.27-AM-1024x359.png)

### [TinyPNG](https://tinypng.com/)

**[tinypng.com](https://tinypng.com/)** | _Free unlimited use_
**[wordpress.org/plugins/tiny-compress-images](https://wordpress.org/plugins/tiny-compress-images/)** | _Free for first 500 compressions per month; extra start at 9¢ per compression_

Amazingly, I just learned that TinyPNG is not only [a website](https://tinypng.com/) where you can compress the fatty megabytes out of your image files for free (often at gigantic reductions in both size and page loading time); it's also a [WordPress plugin](https://wordpress.org/plugins/tiny-compress-images/)! Install it and follow the steps in the plugin settings to get set up with an API key you can use to compress either new uploaded images, existing images, or both.

Like every compression plugin that I've found, at a certain threshold, TinyPNG does start charging by the image. That threshold in this case is 500 images per month, which may sound like a lot, but remember that every image file you upload to WordPress may get converted to any number of differently sized individual files, depending on your media settings. So one image upload may mean many compressions, and they can go fast.

The good news, though, is that the overage fee is 9¢ per image (which, again can stack up), although you don't necessarily have to input a payment method to use the plugin, which will just cap you at your allotted 500 compressions until the next month. Neato!

Of course, if cost and limits are a factor, you can always manually drop your images into TinyPNG.com before uploading them to WordPress as much as you like for free.

![ClipMenu Mac app logo](/images/post_images/ClipMenu.png)

### [ClipMenu](http://www.clipmenu.com/)

**[clipmenu.com](http://www.clipmenu.com/)** | _Free_

\[**EDIT:** _While ClipMenu is still a wonderful tool, Alfred includes clipboard history as well, in case you're an app minimalist like me. I've switched to Alfred for this particular functionality, but left this here in case you like the idea of keeping clipboard history but don't need everything Alfred offers._\]

You might not find this as handy as I do, but how many times have you copied something, and before you can paste it where it needs to go, accidentally copied something else?

Or how about this: how many times have you gone through the tedious process of changing back and forth between windows copying and pasting one thing at a time into place?

[ClipMenu](http://www.clipmenu.com/) stores a history of your clipboard so that you can paste from dozens of the last things you've copied. No more going back and forth or accidentally copying something new, and no more worrying that you accidentally got rid of something you meant to keep on your clipboard. ClipMenu can be configured to store anywhere from a small number to dozens and dozens of the things you've hit command + c on.

![Wunderlist app logo](/images/post_images/Wunderlist_Logo.png)

### [Wunderlist](https://www.wunderlist.com/)

**[wunderlist.com](https://www.wunderlist.com/)** | _Free for basic use; Pro $4.99 per month_

It doesn't take very long in development before you're trying to keep track of lots and lots of tasks that need to get done. You might have a project manager who's monitoring all of that for you, and they might be doing so through an app like Asana or Trello. That's cool. But you also have personal to-dos, and shopping lists, and ideas to remember, and so on. That's where [Wunderlist](https://www.wunderlist.com/) is great.

Wunderlist is really just a simple list-making app, and that's about it. But its elegance is in its simplicity and its ability to seamlessly permeate your life where needed and slide away into the background until then.

It's a desktop app, a smartphone app and a browser extension, so you can make lists, add to them and check items off from anywhere and have the changes sync everywhere. Plus, you can set due dates and reminders for individual tasks, and you can share lists with other users. If you're at all like me, you'll see your productivity and reliability jump when you start making lists in Wunderlist.

And, of course, there's that whole conserving mental energy thing I'm a big fan of.

![WordPress.com plus Jetpack logos](/images/post_images/WP-plus-Jetpack.png)

### [Calypso/Jetpack](https://developer.wordpress.com/calypso/)

**[developer.wordpress.com/calypso](https://developer.wordpress.com/calypso/)** | _Free_
**[jetpack.com](https://jetpack.com/)** | _Free; premium add-ons starting at $99 per year_

You might know it as Calypso, the new WordPress.com, the WordPress.com app, Jetpack, or maybe even something else, but the (amazing) combination is just the same: manage all your WordPress sites together, in one tool, for free.

Let's backtrack: in 2016, WordPress.com announced an all-new dashboard interface, codenamed "Calypso." This new, elegantly simple JavaScript-based app could be used to manage the main features of all of a user's WordPress.com sites—posts, plugins, themes, etc. This was fantastic news for owners of sites hosted on WordPress.com, but for the rest of the world, self-hosting their own WordPress sites, [Automattic](https://automattic.com/) (the company behind WordPress, run by WordPress co-creator [Matt Mullenweg](https://en.wikipedia.org/wiki/Matt_Mullenweg)) offered a way to connect as well: through their already mega-popular plugin, Jetpack.

![Managing plugins with Jetpack, using auto update](/images/post_images/Jetpack_plugins.png)

So in short, Calypso—AKA the WordPress.com app—allows you to connect all your sites together to manage them in one simple dashboard. To do this, you'll just need to sign up for a free account on WordPress.com, if you don't have one already (and odds are good if you've been using WordPress for any length of time that you already do). Then you just install the Jetpack plugin (which has many of its own excellent features already, including a mini image CDN) and enter your WordPress.com credentials.

You'll have access to one app dashboard to manage all your sites. The major key feature for me: you can update plugins and themes remotely, so you don't have to sign in to each site individually. On its own, that's fantastic, but the icing on the cake is: you can even set plugins and themes to update _automatically_. (Or should I say: automattically?) It's a beautiful thing, and we haven't even scratched the surface of all the other cool things Jetpack can do on its own.

![CodePen.io logo](/images/post_images/codepen.svg)

### [CodePen](http://codepen.io)

**[codepen.io](http://codepen.io)** | _Free; Pro starts at $9 / month_

It may seem completely unrelated, but I can't tell you how handy it is to have an open playground for HTML, CSS and JS available at your fingertips at any time. I've learned lots of tricks, skills and shortcuts from trying things out in [CodePen](http://codepen.io) or looking at other users' code to see how they built their neat-o creation. It's also handy, when in lack of another solution, as a JavaScript linter and a debugging tool, or as a place to save code snippets for work or demo later. But more than anything, it's a sandbox. And you can learn a lot by building things in it.

<!-- svelte-ignore a11y-img-redundant-alt -->

![Affinity Photo logo](/images/post_images/affinity-photo-available-on-the-mac-app-store.png)

### [Affinity Photo](https://affinity.serif.com/photo/)

**[affinity.serif.com/photo](https://affinity.serif.com/en-gb/photo/)** | _Free trial; $49.99 one-time fee_

Photoshop also works, if you have access to it. So do the wide range of free or cheap Photoshop replacements. But at some point when you're doing development work, you're going to need to crop, scale or alter an image, so you'll need some kind of photo manipulation software for that. I chose Affinity Photo as my recommendation because next to Photoshop (the general industry standard) it's comparably robust but at a shrinking fraction of the price: at $49.99, Affinity Photo will cost you once what a Creative Cloud subscription will cost you every single month.

It may not quite have all the features of Photoshop (though it's pretty close) or be quite the photo editing ninja that Lightroom is (though it's no slouch), but to replace the two apps together for a comparably low price tag, I feel the tradeoff is more than worth it.

![Elegant Themes logo](/images/post_images/elegant-themes-logo.svg)

### A Great Premium Theme

(If you're not developing your own, anyway.)

Let me get this out of the way right away: many premium themes are bloated and inefficient, at best. Ideally, you're building a custom theme for each client. But the world of ideals and the world of client work only have so much overlap.

Obviously building a client something personalized from the ground up is the ideal goal. It will likely run faster and almost certainly be more idealized for their purposes—those two go hand-in-hand. But ideal goals often conflict with the reality of deadlines and budgets, and in that situation, you need a lot of power that you know how to wield quickly and efficiently. That's where a robust premium theme comes into play. Much like a framework, a great premium theme will allow you to get up and running in record time.

Personally, I'm a big fan of [Divi by Elegant Themes](http://www.elegantthemes.com/gallery/divi/) (though I should mention it requires a vigilant eye, as it updates frequently and vulnerabilities have been discovered in older versions). But there are lots of other premium themes out there—Genesis, X, and many more—that will give you all the tools you need to get a site working quickly and easily.

On projects with lean budgets, I often implement custom developed pages and templates where needed—usually for the crucial and unique areas of a site—and then (with a child theme, of course), use a premium theme's built-in tools to quickly assemble lesser static pages and content that don't need any custom fields, one-off template files or other special treatment.

In short: when you need to build quickly and on a budget, you need a framework to reach for. Maybe that's in theme form; maybe not. But having one that you know handy is essential for client work.

![Flywheel logo](/images/post_images/Flywheel-Logo.svg)

### [Flywheel](https://getflywheel.com/)

**[getflywheel.com](https://getflywheel.com)** | _Single-site subscriptions start at $15 per month; bulk subscriptions (10+ sites) start at $100 per month._

Full disclosure: I work for Flywheel. But I still wouldn't have another host even if I had the choice. The collaboration and client handoff tools are top-notch, the dashboard features (like a development mode, logs access, staging sites, cloned sites and others) are amazingly handy, and the performance is solid. Plus there are no headaches with things like keeping backups or restoring; it's all handled. The support's not too shabby, either. ;)

### Other plugins:

Just a few of the modestly handy plugins I find myself using frequently:

- [**WP Rocket**](https://wp-rocket.me/)
  Concatenating and minifying your CSS and JS files is essential to optimizing page speed. There are free plugins to do this (like W3 Total Cache and Better WP Minify), but WP Rocket is worth the premium price tag to make the process simpler and easier. Ideally, you'd be handling all of that manually at the development level, but if that's not an option, WP Rocket gets my vote for the best post-development fix.
- [**Ninja Forms**](https://wordpress.org/plugins/ninja-forms/)
  Gravity Forms and Caldera Forms are also both fine choices, and I have no doubt there are others, too. I just like how easy it is to get Ninja Forms up and running for free.
- [**WPS Hide Login**](https://wordpress.org/plugins/wps-hide-login/)
  The internet is full of bots looking for your WordPress login screen, but they can only find it if you keep it at the same URI as everybody else (/wp-admin). Change it.
- [**Custom Post Types UI**](https://wordpress.org/plugins/custom-post-type-ui/)
  Although I do enjoy defining custom post types on my own, CPT UI is admittedly the easier way to do it. Just make sure you don't have a client who likes to go poking around where they don't belong when you turn the site over to them.
- [**Essential Grid**](http://codecanyon.net/item/essential-grid-wordpress-plugin/7563340)I'm usually not much of a fan of Envato Market and its ilk because I disagree with some of their business practices and have had bad experiences with some of their plugins, but this particular paid plugin, at $26, offers the ability to get any kind of gallery up and running very quickly and easily on any site or page.
- [**Yoast SEO**](https://wordpress.org/plugins/wordpress-seo/)
  I'm not a big SEO guy, but this plugin will help you write better content so that your viewers can find it when it's relevant to them.
- [**Enable Media Replace**](https://wordpress.org/plugins/enable-media-replace/)
  Super simple, but allows you to replace a media file and keep its metadata (URI, alt, title, etc.) intact rather than having to delete it and upload a new file every time there's a change.
- [**Show Current Template**](https://wordpress.org/plugins/show-current-template/)
  More of a debugging tool than anything, but it's extremely helpful to be able to tell whether you're bucking the WordPress template hierarchy successfully, and which PHP template files aside from the main one are being loaded on the page.
- [**Insert PHP**](https://wordpress.org/plugins/insert-php/)
  Handy if you need to run some PHP code from a WordPress content field. (Most developers will of course have ways around this, and it's presented here as more of a hack than a recommended way to do things. But in a pinch it works remarkably well.)
- [**Force Regenerate Thumbnails**](https://wordpress.org/plugins/force-regenerate-thumbnails/)
  If you change your media upload size after you've already uploaded some images, you'll want to run this.
- **Captcha**
  There are many kinds (with many levels of intrusiveness), but since Captcha secures all forms, it helps keep bots out of your comments, contact forms, and your login screen. Those are all really good things.
- [**Akismet**](https://akismet.com/)
  It's almost not worth mentioning because of its ubiquity and the fact that many WordPress users don't even allow comments on their site to begin with. But if you do allow comments, activate Akismet, get an API key, and and put the API key in place.

That's it! I hope you've found something useful here. Happy developing, WordPressers.
