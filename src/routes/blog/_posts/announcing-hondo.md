---
title: "Announcing Hondo"
date: "2022-07-14"
updated: "2022-07-14"
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

<style>
.float-right {
  max-width: 18rem;
  display: block;
  border: 1px solid;
  margin: 2rem auto;
}

@media (min-width: 40rem) {
  .float-right {
    margin: 2rem -2rem 2rem 2rem;
    float: right;
  }
}
</style>


Earlier this year, I launched [Quina v2.0](https://quina.app), an update to my almost two-year-old word/logic game. I had a blast making the updates—so much fun that when I finally pushed v2 of Quina live, I found myself sad it was over, and not wanting to stop playing around with fresh ideas.

So, I began tinkering on a *new* project…an exploration that eventually led to the launch of a new (and slightly less ambitious) word game named [Hondo](https://playhondo.com).


## What is Hondo?

You could think of [Hondo](https://playhondo.com) as a continuous game of [Wordle](https://www.nytimes.com/games/wordle/index.html). Instead of guessing just one word, your goal is to guess a series of words, back-to-back.

The idea for the gameplay originated from Quina. Originally, I thought Hondo would be an extra “marathon mode” that I’d add to Quina. When the player guessed one word, instead of ending, the game would continue with a new word, and all the previous guesses would update to hint at the new word instead. That was the idea, anyway.

However, I felt Quina was already straining under the weight of its own options, and I worried a whole new mode might add more complexity than value. (Plus, I wasn’t sure Quina would actually lend itself well to the format, since it often takes *many* guesses to hone in on the word.)

So, I started exploring this “marathon mode” as a standalone spin-off. I had a working demo up and running within a night or two, and it didn’t take long before I was enthralled with all the possibilities of this new side project.

<img src="/images/post_images/announcing_hondo/hondo-iphone13.png" alt="Hondo gameplay shown on a small, mobile-size screen" class="float-right" />


### The rules

Hondo is admittedly very similar to Wordle. (In fact, if it had come out earlier in the year, when Wordle-like games were proliferating everywhere, it would’ve fit right in.)

However, instead of having just six tries, in Hondo, you have an energy gauge with 10 bars. Every incorrect guess costs one bar; every correct guess restores a bar, allowing you to play longer.

Rather than trying to guess just one code word, in Hondo, you score a point for each code word you successfully guess. Then a new code word is chosen, and the previous guesses on the board update to hint to the *new* word instead. (The last five guesses always stay on the board, and new guesses push off the oldest.)

That’s the basic idea, but there are a couple of extra twists as well:

1. **When you successfully guess two or more code words in a row, you get bonus points**. The longer the streak, the higher the bonus.
2. **You have two special abilities that you can play using energy**: **Shuffle** (which replaces all the words on the board with new, random guesses); and **Skip** (which, as the name implies, simply skips the current code word). While optional, when used well, these abilities help you tilt the odds in your favor.

The goal of Hondo is in the name: score a Hondo (i.e., 100 points—ideally, in as few guesses as possible).

When you first start playing Hondo, 100 points may seem well out of reach. But eventually, as you get the hang of when and how to use Shuffles and Skips to best increase your chances of survival, your scores will get higher and higher. You *might* even be able to pull off a perfect game eventually (while extremely difficult, it’s possible to Hondo in just 14 guesses).


## The architecture

Hondo is markedly less ambitious than Quina in a few ways. Most importantly, I don't plan to add it to any app stores. (This automatically cuts the complexity in at least half, and my frustration by a solid 80%, since dealing with the Google Play Store is one of the least pleasant things I've ever attempted as a developer.)

Knowing that the project's only home would be the web, I was somewhat freed with the architecture decision. That made going with [SvelteKit](https://kit.svelte.dev) an easy choice. I've [written plenty about Svelte](/blog/category/svelte) already, so it's no surprise I'd pick it for a new project. It's a simple and joyous framework to use, and I never for a second regretted the choice.

The _only_ thing SvelteKit seems to be missing that other frameworks I might have chosen has is: an easy PWA (Progressive Web App) integration. Seems Vite itself has that built-in, so I could've gone that route, but instead I used Microsoft's [PWA Builder](https://www.pwabuilder.com/) to generate the needed service worker, manifest, and other assets. (There's also a [PWA Studio extension for VS Code](https://marketplace.visualstudio.com/items?itemName=PWABuilder.pwa-studio) that's quite handy.) 

PWA Builder is a great resource for adding PWA functionality to an existing web app—and it even offers help getting your app listed on the major app stores, if you're up for that challenge. (I can't vouch for that aspect of PWA Builder personally, as, again, listing apps in the app stores is a pain I don't care to experience again.)

Other than SvelteKit, a few SvelteKit plugins (just the static adapter, and svelte-preprocess), plus the assets that PWA Builder helped to generate, everything in Hondo is hand-rolled, down to the code and design.

There are a few other ways I decided to keep Hondo more simple than Quina:

- No achievements (at least for now)
- No main menu; the game itself _is_ the homepage
- No gated content or monetization

Granted, Quina's monetization was always optional (you could unlock everything for free if you wanted to), but the gateway was still pretty front-and-center, in a way that obviously affected the experience.

Almost two years later, I don't feel monetizing a game is either valuable or necessary. I've realized that building things with code is, for me, the point in itself. I love to make things, and I love when people get some benefit out of those projects.

I kept my [Ko-Fi link](https://ko-fi.com/collinsworth) in the game, but it's really more about having a way for folks to say thanks than it is the money itself. I don't need the $3 (though I appreciate it); the meaningful part to me is that people took a moment out of their day to let me know the project meant something to them.


## Gameplay explorations

I played around with _lots_ of possible versions of Hondo over the course of many, many weeks before finally settling on this one.

From the outset, it was clear that _some_ kind of ability would be needed to help the player out; just guessing new words constantly wasn't gonna cut it (at least, not unless the difficulty was significantly lowered, which would present its own set of gameplay problems). The first iteration was an ability that would just solve the current word for you, at the cost of a temporary reduction in max energy.

At first, I thought perhaps the game would be never-ending, and the only goal would be to get your score as high as possible.

Then, I became concerned a skilled enough player could potentially play forever. So I started experimenting with ways to make the game harder the longer you played, like Tetris.

At first, I had the energy gauge shrink slowly over time, so you'd have fewer and fewer attempts as the game went on.

The more I played with that, though, the less fun it seemed. It felt like too much of a crunch, and seemed to place too much importance on luck. It _also_ meant a "perfect" score was theoretically achievable, but all but impossible in reality, which didn't seem very fun.

I toyed with making the game last exactly 100 turns, with the goal being to get your score as high as possible in that time.

This sounded good—it added the inevitable end state, which was a step in the right direction—but it had the same problem; perfection was theoretically attainable but practically impossible, and the realistic high score would be some number in the 70s or 80s. Again, not very fun.

However, I felt there was _something_ to the idea of 100 as the goal. I capped the game at 100 points, which gave me the name ("Hondo" is slang for 100), but it was still missing something.

Shuffles were introduced around this time as a replacement for the previous lifeline ability (which I'd concluded was not very useful and potentially overpowered). I liked shuffles better; they were more interesting and less hand-hold-y, but I struggled with knowing how to price them.

I initially thought shuffles should cost 3 energy bars. That seemed like a deal by some reasoning, since five new guesses would normally cost 5 energy. But I failed to account for the randomness inherent in shuffling; 3 energy was a lot for something that isn't necessarily guaranteed to help you, and that you would likely want to use frequently.

I also explored making shuffles free, but with a temporary cooldown. However, it often felt like bad luck could _really_ mess a player up with that set of constraints; you could easily use a shuffle and get nothing useful back, or get the current code word and then be stuck on the next with no help available.

I tried making the penalty a reduction in _maximum_ energy (both temporarily and permanently), but neither of these felt right to me, either. They were both a little more complex than just a straight cost, and, I worried, might not be much of a penalty at all for an advanced player. Dialing in the proper cooldown time for temporary reductions was also a challenge.

So, for the sake of simplicity, I settled on shuffles costing a flat two energy (one definitely felt too cheap), and being available to use any time the player could afford it.

I liked shuffles, but I was concerned the game was too long. 100 points was a _lot_ of words to guess. And that's when the idea of bonus points hit me.

Bonus points (gained from streaks of consecutive correct guesses) unlocked a whole new aspect of the game; now, instead of just guessing one word after another, there was a meta-goal. Getting multiple code words in a row was clearly the best path forward. As a bonus (pun intended), this gave shuffles a new purpose; they could be used to preserve streaks, for extra points.

The game was suddenly more exciting, and the stakes felt higher. Having a long streak on the line added a weight of challenge and excitement the game didn't have before. Failure meant starting your streak over, and success meant an ever-increasing stack of bonus points.

Plus, this meant the game could be much shorter, and had a secondary measure of success. Rather than taking a minimum of 100 turns, the game could theoretically be finished in as few as 14 guesses—and that perfect game, while still very difficult, was much more realistic than before. Even if that's out of reach for a player, however, they can still compete with themselves, to try scoring a Hondo in as few turns as possible.

Hondo was beginning to take shape. I had the name, and the core concept. But it still didn't quite feel complete yet.

Feeling the game was still missing something, around this time, I started exploring the idea of powerups; "equippable" items that would alter the gameplay in some core way, such as making guesses cost less, or rewarding you extra for correct guesses.

My initial idea was to have a series of unlockable powerups the user could gain access to by hitting gameplay goals, and even upgrade over time. 

I went down a deep rabbit hole on this concept, and had some version of a working prototype for weeks. But the more I played with this idea, however, the more I became concerned I was losing the key simplicity at the heart of the game. Sure, it was cool, and interesting, but it was very tough to implement in a way that seemed to make sense in "the world of the game," if you will.

For starters: one game felt like too long to stick with one specific powerup, but how would one switch them? Maybe a player could only equip one at a time, once per game? That was viable, but complex.

Then there was the added complexity of tracking all of that, allowing the player to select their powerups, _and_ notifying them properly when new unlocks were available.

All in all, it was just too much weight for the game to bear, and I ended up scrapping the whole idea. I felt I was right that the game needed _something_ more, but I was convinced I'd overshot (something I did a lot during development, actually), and whatever I was looking for was much simpler than what I'd envisioned and begun building.

The "skip" ability was the end result of that exploration. Shuffles alone were potent and useful, but they were also a tad expensive, and not always helpful.

By adding the ability to skip a word at the low cost of one energy bar, I felt I'd sufficiently expanded the gameplay strategy without over-burdening the game with complexity.

Shuffles and skips serve similar but different purposes. In fact, they seem so alike at first glance, a player might reasonably wonder why both are present.

True, the two have some overlap in usefulness, but they are primarily handy in different situations. Shuffles work best when you need to wipe the board (especially after guessing several similar words), or when you just want to gamble on getting a little more info about the current word. They also allow you keep your current knowledge about the code word and carry it forward.

By contrast, skips can often be handy when you're satisfied with the state of the board, and/or when you suspect guessing the current code word might take more guesses than you'd care to spend. (For example, if you know the current word matches `_A_ES` and just need to fill in the blanks, you might be wise to skip, as there are many, many possibilities, and you could waste lots of guesses finding the one or two missing letters.)

I felt with skips that I'd added everything the game needed and could reasonably sustain without jumping to new levels of complexity.


## Wrapup

If you're into word games, I hope you'll give [Hondo](https://playhondo.com) a try. If you like it, or have any feedback, feel free to reach out or leave me a comment.

Ultimately, I had a blast working on the project, and I hope you enjoy playing it as much as I enjoyed building it.