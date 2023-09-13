---
title: An attempt to explain my complicated feelings on Tailwind
date: 2023-08-28
updated: 2023-08-28
categories:
  - advice
coverImage: great-transitions.png
coverWidth: 320
coverHeight: 180
excerpt: 'TODO: fill this out'
draft: true
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

If you've played a Mario Kart game in recent years, you might know that the game offers a number of accessibility options that help younger and/or less skilled players enjoy the game alongside more competitive series veterans (like myself).

One such feature is called "Smart Steering," which makes sure you never go off the track. Veer too far to the side of the road or get too close to an obstacle, and the game will momentarily take over steering to autopilot you on a better course. (No more driving backwards in the grass, or off the side of Rainbow Road.)

Similarly, the game offers auto-acceleration, so that you're always moving forward, and don't need to manually hold down that button on the controller.

These "training wheels" options are wonderful additions to the game; indeed, they're what enable me and my young son to play together. If my wife were to join in, not being much of a gamer at all, I'm sure she would also appreciate these options.

However, you can disable them, and with good reason. Once you've reached a certain skill threshold, Smart Steering stops helping, and actually starts getting in the way. It'll prevent you from taking shortcuts, for one thing, and may even intervene when you didn't intend for it to, pushing you off your intended course. The same goes for auto-acceleration; there will be times you'll _want_ to take a corner by strategically letting off the accelerator, which you can't do with the assistance on.

Ok, fine. So what do assistive options in Mario Kart have to do with Tailwind?

I've been using Tailwind professionally, and even on the occasional hobby/learning project, for the better part of a year now. While I've understood why people like it, and have seen that it does indeed have its compelling upsides, I've struggled to put into words what it is about this tool that just doesn't jive with me.

Something about Tailwind just feels like cutting against the grain; like doing things the wrong way around, as my brain has come to understand it.

Noisy as the Tailwind crowd infamously may be, just about every frontend developer I know feels similarly. Given the choice, most of us would just as soon forego Tailwind altogether. (I think that's part of why the pro-Tailwind crowd seems so comparatively vocal; a great many talented frontend developer can't even speak to Tailwind, because they've never had a reason to reach for it.)

Even those frontend developers I know who _do_ use Tailwind with some degree of regularity don't seem to be fans or evangelists, and instead, just find some value in Tailwind as a basic utility library; a supplement to their existing CSS, rather than as a totalitarian methodology.

I think it's because: when your CSS skills have reached a certain level, the Smart Steering and Auto Acceleration that Tailwind offers stop being benefits, and start being liabilities instead.
