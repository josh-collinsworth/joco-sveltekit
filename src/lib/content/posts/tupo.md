---
title: 'Introducing Tupo: a new daily logic puzzle'
date: '2026-09-21'
updated: '2026-09-21'
categories:
  - personal
  - design
  - web
coverImage: '/tupo/tupo-share-image.webp'
coverWidth: 1200
coverHeight: 630
excerpt: "Tupo is my first new game in four years, and I'm superlatively excited to share it with the world."
draft: true
published: false
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

I am highly excited to share a project I've been working on for the last few weeks. It's called **Tupo**, and it's a daily logic puzzle in the sudoku genre. (In fact, it would be fair to call Tupo a two-in-one Sudoku puzzle, although there's slightly more to it than that.)

I've already announced Tupo on socials, so I imagine most people who follow me online probably already know about it. But I'd like to take some time here to dig deeper into the process behind the game, and talk about some of the decisions and behind-the-scenes events that led to this.

## The rules

As most of you probably already know, in a traditional sudoku puzzle, you fill the grid with digits, such that every row and column contains the numbers 1–9 with no repeats.

Tupo adds a twist: you're actually putting _two_ things into each cell; a number and a color. (By the way: I call them "tiles" rather than "cells" in Tupo, just because of the design, but potāto, potǎto.) The same rules apply to both dimensions; every row and column must have each number ***and*** each color exactly *once*.

If the rules stopped there, that might be fine enough. But you'd really just be playing two overlapping yet unrelated puzzles; you could slap any color layer together with any number layer. There would be _more_ game, but it wouldn't really be much different.

That's why Tupo has one more key rule, which is arguably the most important: no ***combination*** of number and color can repeat anywhere on the board; every possible combination (red 1, blue 2, etc.) will occur exactly *once*.

That third rule, it turns out, is the heart of the game; it's what ties the numbers and colors together, and it creates the most interesting and challenging deductions.

Now: if you're envisioning all of this on a regular 9×9 sudoku grid, it might seem overwhelming, and for good reason. That would be a _lot_ to keep track of (not to mention more colors than the rainbow). That's why Tupo shrinks the idea down to either a 4×4 or a 5×5 grid, depending on the day and difficulty level; it keeps the board digestible, and the colors down to a manageable contrasting selection.

That smaller grid size would make a traditional sudoku-like puzzle too easy, but with two interwoven dimensions, the smaller size makes the game approachable, yet still healthily challenging.

In my personal testing, I found the idea takes some time to get used to. It's got a noticeable learning curve, as your brain adjusts to thinking about both dimensions of the puzzle at once. (It's pretty common for new players to try completing one whole side first, then the other, and the game is purposefully designed not to work that way.) But it's rewarding to see your times drop when the game starts to click (at least, in my unbiased opinion).


## How Tupo came to be

Maybe weirdly, Tupo came from a period of pretty strong burnout in my life.

I found myself in a rut where nothing I was working on was exciting or interesting to me. Days became mostly about, well, getting through the day. I spent every evening with a TV show I didn't care about playing in the background, as I halfheartedly played a video game I also wasn't that interested in. (I finished 100%-ing Balatro for the _second_ time in this time period; that's how burned out I was.)

At some point, I realized I couldn't necessarily control the source of the burnout, but I *could* control what I was doing about it.

These things are unique to everyone, of course, but for me, I've always had a need to _make_ things, and burnout tends to visit me extra hard when I'm doing too much consuming and not enough building.

Sometimes, when you don't care about anything, the solution is just to find something worth caring about. So I sat down with a vague idea in my mind, and set about prototyping.

As you may or may not know: I've published a couple of game apps before (although both are word games and Tupo is the first pure logic puzzle); I first released <a href="https://quina.app">Quina</a> in 2020, and <a href="https://playhondo.com">Hondo</a> in 2022. So that makes it over four years since my last release.

It hadn't been entirely for lack of interest, or effort; I've tried ideas on and off. My projects folder is littered with repos that each only had a handful of commits before being abandoned; concepts I chased just long enough to realize they didn't work as well as I'd hoped in reality.

This is partly because, up until recently, shifting directions with a prototype—or spinning up a new one entirely—had a pretty significant cost. I might have spent an entire evening or more wiring up an idea, and if it didn't work like I hoped, I'd have to spend another entire evening changing course.

If you know my writing at all, you know I'm not exactly an AI enthusiast. But I have to admit: LLMs have made prototyping exponentially more manageable. Now that a failed idea doesn't mean losing a whole day of work, and a pivot has very little penalty, I could feel free to explore in any direction my ideas might take me.

I bring this up because my original idea for the game had virtually nothing in common with where the game eventually ended up.

At first, I wanted to combine <a href="https://cluesbysam.com">Clues by Sam</a> with <a href="https://store.steampowered.com/app/1299400/Understand/">Understand</a>, and have some kind of logical deduction game where you had to infer the rules yourself. It seemed like a cool idea in my head, but nothing I tried in that vein was actually fun or interesting in practice; it was either too derivative, or too obtuse.

Before LLMs, that would've been the end of the exploration. (Actually, I probably wouldn't have even gotten that far; making a puzzle generator alone might have been too much of a roadblock.) But thankfully, the idea didn't have to end at the first iteration.

My next idea was a logic puzzle where a set of clues was given up front, and you used those clues to put shapes into a grid. (For example: "no triangle is adjacent to a circle," or "there are no stars in column B.") Again: this sounded like it might be interesting, but in practice, it was just way too much information for a player to hold in their head at once. In order for the game to be challenging, there had to be lots of clues—but the more clues there were, the more tedious the game became.

At that point, though, I had a loose logic-puzzle-with-shapes generator working, and so I thought: what about sudoku, but with two dimensions instead of one?

That's how the basics of Tupo came to be. At first, I used shapes and colors, but I soon realized keeping one dimension familiar by using numbers instead was the better move for helping new players understand the game. (Plus, this meant I could combine shapes and colors for the colorblind assist mode.)

At the time, I thought two-parameter Sudoku was an original idea, but I soon came to suspect I must not be the first to stumble on the concept. Boy, was I right; not only are there already number + color sudoku games already in circulation, but the entire format is called a Graeco-Latin square, and mathematicians have been studying them for hundreds of years. (Guess it was a little silly to ever think I might have been the first.)

That's not to say Tupo is unoriginal, though; like I mentioned, shrinking the whole board down to a smaller grid to make it approachable in a daily format, and leaning on the uniqueness rule as the unifying deduction driver, is where the game gets its distinct identity. Once I landed on that idea, it felt like everything clicked into place.

I suddenly had something I cared about. I had a game I actually wanted to play, wanted to work on, and wanted to share.

I went two full weeks without so much as touching a video game.

Was everything fixed? No. But for the first time in a long time, I was _excited_.


## The architecture

If you know me, you know I love [SvelteKit](https://svelte.dev/docs/kit/introduction). I never seriously considered any other possibility. Even during prototyping, before I had any idea what shape the game would eventually take, I knew SvelteKit would make the work easy while providing anything I might need, simply and performantly.

For this project, I opted for Tailwind for styling, which is a little off-brand for me. It's got a learning curve, but once you get the muscle memory for styling components on the fly, and being able to make just about any CSS change you want instantly and without leaving where your cursor already is, it's admittedly hard to go back. (I could've been happy using either vanilla CSS and/or scoped Svelte style blocks, too, but I've built up so much muscle memory for Tailwind at this point, it was the natural path.)

The app is hosted on <a href="https://netlify.com">Netlify</a>, and the puzzles are pre-generated using a GitHub workflow that runs weekly and keeps a healthy buffer built up. (The server's set up to disallow access before the date rolls over, though, to keep anyone from playing ahead.)

Tupo is built as a progressive web app (PWA), so it can be installed on any device (even Apple devices, despite the company's best efforts to kneecap this particular ability). I loosely considered porting Tupo to the app stores, like I did with Quina and Hondo, but it's honestly just too much bullshit to deal with for little to no reward. (As I write this, Google is threatening to deactivate my account because I don't publish enough, which is only the latest in a very, very long line of hostile notifications from them, and I pay more per year for the privilege of having _free_ apps on the App Store than I do for my entire collection of domains put together.)

It's a daily game. None of the daily games I play and love are "real" apps, and they don't have to be.

Long live the web.

(And Apple, knock off the bullshit. We can all see what you're doing.)
