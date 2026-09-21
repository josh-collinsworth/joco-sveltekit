---
title: 'Introducing Tupo: a new daily logic puzzle game'
date: '2026-09-21'
updated: '2026-09-21'
categories:
  - personal
  - design
  - web
coverImage: 'zen.jpg'
coverWidth: 1920
coverHeight: 1080
excerpt: "Tupo is my first new game in almost four years, and I'm superlatively excited to share it with the world."
draft: true
published: false
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

I'm excited to share a project I've been working on recently. It's called **Tupo**, and it's a daily logic puzzle in the sudoku genre. (In fact, it would be fair to call Tupo a two-in-one Sudoku puzzle, although there's slightly more to it than that.)

## The rules

As most of you probably already know, in a traditional sudoku puzzle, you fill the grid with numbers 1–9, such that no number is repeated in any given row or column.

Tupo adds a twist: you're actually putting a number ***and*** a color into each cell. Neither one can repeat in any given row or column.

That alone might be interesting enough, but you'd effectively be playing two overlapping yet unrelated puzzles if that's all there was to the rules. But it's not, and there's one more key constraint: no ***combination*** of number and color can repeat anywhere on the board. (That is: there will be exactly one red 1, one red 2, etc. Every possible combination will occur exactly once.)

Now: if you're envisioning all of this on a regular 9×9 sudoku grid, it might seem overwhelming. That would be a _lot_ to keep track of (not to mention more colors than the rainbow). That's why Tupo shrinks the idea down to either a 4×4 or a 5×5 grid, depending on the day/difficulty level.

This smaller grid would make a classic numbers-only puzzle too easy, but with two interwoven dimensions, the smaller size makes the game approachable while still challenging.

In testing, I found the idea takes a little time to get used to. It's highly challenging at first, as your brain learns to think about both dimensions of the puzzle at once. (It's pretty common for new players to try completing one whole side first, then the other, and the game is purposefully designed not to work that way.) But as you adjust to the new way of thinking about an old pattern, you'll find your times dropping.


## The story behind Tupo

Maybe weirdly, Tupo came from a period of strong burnout in my life.

Nothing I was working on was exciting or interesting to me. I spent every evening with a TV show that I didn't care about playing in the background, as I played a video game I also wasn't that interested in. (I finished 100%-ing Balatro for the _second_ time in this period; that's how burned out I was.)

At some point, I realized I couldn't necessarily control the source of the burnout, but I *could* control what I was doing about it. These things are unique to everyone, of course, but for me, I've always had a need to _make_ things, and burnout tends to visit me when I'm doing too much consuming and not enough building.

So I sat down with a vague idea in my mind, and set about prototyping.

As I mentioned, it's been several years since my last word game, but I've tried ideas on and off ever since. My projects folder is littered with repos that each only had a handful of commits before being abandoned; ideas I chased just long enough to figure out they didn't work as well as I'd hoped in reality.

This is partly because, Uup until recently, shifting directions with a prototype—or spinning up a new one entirely—had a pretty significant cost. I might spend an entire evening wiring up an idea, and if it doesn't work like I hoped it would, it might cost me another entire evening to change direction.

But now that we have LLMs to do the quick-and-dirty work for us, the hurdle became much more manageable, and a failed idea didn't seem to mean the same thing as a failed project. A pivot wasn't as debilitating, and exploration didn't come with such a cost.

I bring this up because my original idea for the game had virtually nothing in common with where it ended up. At first, I wanted to combine Clues by Sam with Understand, and have some kind of logical deduction game where you had to infer the rules yourself. It seemed like a cool idea in my head, but nothing I tried in that vein was actually fun or interesting in practice.

My next idea was a logic puzzle where a set of clues was given up front, and you used those clues to put shapes into a grid. (For example: "no triangle is adjacent to a circle," or "there are no stars in column B.")

Again: this sounded like it might be interesting, but in practice, it was just way too much for a player to hold in their head at once. In order for the game to be challenging, there had to be lots of clues, and that made the experience more tedious than fun.

At that point, though, I had a loose logic-puzzle-with-shapes generator working, and so I thought: what about a two-dimensional sudoku?

That's how the basics of Tupo came to be. At first, I used shapes instead of numbers, but I soon realized keeping one dimension familiar was the better move for helping new players understand the game. (Plus, this meant I could combine shape and color for the colorblind assist.)

At the time, I thought two-parameter Sudoku was an original idea, but I soon came to suspect I must not be the first to stumble on the idea. Boy, was I right; not only are there already number + color sudoku games already in circulation, but the entire format is called a Graeco-Latin square, and mathematicians have been studying them for hundreds of years.

That's not to say Tupo is unoriginal, however; like I mentioned, shrinking the whole thing down to a smaller grid to make it approachable in a daily format is the real invention here.


## The architecture

If you know me, you know I love SvelteKit. I barely considered any other possibility for this app. Even when I was still prototyping and wasn't sure of the eventual shape the game would take, I knew SvelteKit would make the work easy, while still providing everything I might need, simply and performantly.

I opted for Tailwind styling, mostly because it's just the way I've gotten used to working over the last several years. It's a tough learning curve, but once you get the muscle memory for styling components on the fly as you're authoring them, it's hard to go back.

The app is hosted on Netlify, and the puzzles are pre-generated ahead of time using a GitHub workflow that runs weekly.
