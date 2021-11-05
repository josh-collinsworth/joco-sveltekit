---
title: "Adding comments to a static blog with utterances"
date: "2021-11-05"
updated: "2021-11-05"
categories:
  - "web"
  - "svelte"
  - "javascript"
coverImage: "utterances.png"
coverWidth: 16
coverHeight: 9
excerpt: The best of the CMS world, without the CMS.
---
<script>
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

The web world is full of tradeoffs. As I wrote in my post about [moving away from WordPress](/blog/goodbye-wordpress), going from a CMS to a static site keeps things simple. That simplicity, however, comes with costs—one of which is comments. On a static site, there's no good way for a user to add comments to your posts.

Lots of software has aimed to solve this issue, but I've recently settled on a nifty little GitHub-based library called [utterances](https://utteranc.es).


## What is utterances, and what does it do?

The utterances [documentation and demo](https://utteranc.es/) covers this pretty well, so I won't dwell too much on it here. To summarize: utterances enables comments on your static blog by using GitHub issues. A tiny script runs on the page to display a comments form, and to retrieve any that have been made already.

Again, this is all powered by GitHub comments under the hood, which is the one real downside of the approach. In order to comment, a user needs a GitHub login. I decided that was a fine tradeoff in my case since this blog is increasingly development-focused, but your needs and audience may vary.

---

##TODO:

- Walk through setup; I found it placing the comments in the proper location slightly confusing
- Give credit to the tweeters who brought this to my attention