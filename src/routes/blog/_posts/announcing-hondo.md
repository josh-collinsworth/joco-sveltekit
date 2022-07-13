---
title: "Announcing Hondo"
date: "2022-07-13"
updated: "2022-07-13"
categories:
  - "javascript"
  - "design"
  - "svelte"
  - "web"
coverImage: "announcing_hondo/share-image.png"
coverWidth: 16
coverHeight: 9
excerpt: "Oops, I did it again (where “it” is: release a word game as a side project)."
---
<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>


Earlier this year, I launched Quina v2.0, an update to my almost two-year-old word/logic game. I had a blast making the updates—so much fun that when I finally pushed v2 of Quina live, I found myself sad it was over, and not wanting to stop playing around with fresh ideas.

So, I began tinkering on a *new* project…an exploration that eventually led to the launch of a new (and slightly less ambitious) word game named Hondo.

## What is Hondo?

You could think of Hondo as a continuous game of Wordle. Instead of guessing just one word, your goal is to guess a series of words, back-to-back.

The idea for the gameplay originated from Quina. Originally, I thought Hondo would be an extra “marathon mode” that I’d add to Quina. When the player guessed one word, instead of ending, the game would continue with a new word, and all the previous guesses would update to hint at the new word instead. That was the idea, anyway.

However, I felt Quina was already straining under the weight of its own options, and I worried a whole new mode might add more complexity than value. (Plus, I wasn’t sure Quina would actually lend itself well to the format, since it often takes *many* guesses to hone in on the word.)

So, I started exploring this “marathon mode” as a standalone spin-off. I had a working demo up and running within a night or two, and it didn’t take long before I was enthralled with all the possibilities of this new side project.

<img src="/images/post_images/announcing_hondo/hondo-iphone13.png" alt="Hondo gameplay shown on a small, mobile-size screen" style="max-width: 20rem; margin: 2rem auto; display: block" />

### The rules

Hondo is admittedly very similar to Wordle. (In fact, if it had come out earlier in the year when Wordle-like games were proliferating everywhere, it would’ve fit right in.) However, instead of having just six tries, in Hondo, you have an energy gauge with 10 bars. Every incorrect guess costs one bar; every correct guess restores a bar, allowing you to play longer.

Rather than trying to guess just one code word, in Hondo, you score a point for each code word you successfully guess. Then a new code word is chosen, and the previous guesses on the board update to hint to the *new* word instead. (The last five guesses always stay on the board, and new guesses push off the oldest.)

That’s the basic idea, but there are a couple of extra twists as well:

1. **When you successfully guess two or more code words in a row, you get bonus points**. The longer the streak, the higher the bonus.
2. **You have two special abilities that you can play using energy**: **Shuffle** (which replaces all the words on the board with new, random guesses); and **Skip** (which, as the name implies, simply skips the current code word). While optional, when used well, these abilities help you tilt the odds in your favor.

The goal of Hondo is in the name: score a Hondo (i.e., 100 points—ideally, in as few guesses as possible).

When you first start playing Hondo, 100 points may seem well out of reach, but eventually, as you get the hang of when to use Shuffles and Skips, your scores will get higher and higher. You *might* even be able to pull off a perfect game eventually (while extremely difficult, it’s possible to Hondo in just 14 guesses).

## The architecture

Hondo is markedly less ambitious than Quina in a few ways.