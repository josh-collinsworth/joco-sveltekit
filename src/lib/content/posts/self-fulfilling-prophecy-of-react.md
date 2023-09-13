---
title: 'The self-fulfilling prophecy of React'
date: '2022-07-27'
updated: '2022-08-01'
categories:
  - web
  - opinion
  - popular
  - react
coverImage: 'self-fulfilling-react.png'
coverWidth: 16
coverHeight: 9
excerpt: The only thing React is better at than other front-end frameworks is being popular. So how long will that self-perpetuating cycle continue?
---

<script>
import PullQuote from '$lib/components/PullQuote.svelte'
import Callout from '$lib/components/Callout.svelte'
import SideNote from '$lib/components/SideNote.svelte'
import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

Scan a variety of front-end job postings on just about any dev job board these days, and you'll most likely find one qualification mentioned ubiquitously: [React](https://reactjs.org). (_"Or similar front-end framework," the more open-minded employers might add. They might even list a few examples. But React will definitely be there._)

However, in the year 2022, I have to wonder _why_. Because (and if you just came here for the quotable hot take, here it is, right up front):

<CalloutPlusQuote>

React isn't great at anything except being popular.

</CalloutPlusQuote>

Don't get me wrong: React _is_ good. Even I, a noted and unapologetic React non-fan, readily admit that. Give me a choice between React and no frontend framework at all, and given any project of sufficient size or complexity, I will happily take React, thank you very much.

React laid the groundwork for so much of what other frameworks are doing and have done. [Vue 3](https://vuejs.org/guide/introduction.html) and its composition API are clearly inspired by React hooks. Many of the conventions of [Svelte](https://svelte.dev/) come from React. [Nuxt](https://nuxtjs.org/), a Vue framework I've used and love, takes many of its ideas (and 75% of its name) from [Next](https://nextjs.org/), a React meta-framework. For that matter, the entire component-based model of frontend design and development owes much of its current state (ha) to React—though it should be noted others also helped pave the way.

But that's all kind of my point: much like a genre-defining movie, album, or video game from a previous era, React's greatness is more in what it meant at the time—and in what it _inspired_—than what it currently is _today_, absent that context (no pun intended).

---

Ok, I concede that analogy was a bit of an overreach. There's admittedly much less of a difference between React and its contemporaries than there is between, say, [_Citizen Kane_](https://en.wikipedia.org/wiki/Citizen_Kane) and a great movie from modern times, or between the original [_Legend of Zelda_ on the NES](<https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)>) and [_Breath of the Wild_ on the Switch](https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch). That said:

<CalloutPlusQuote>

React has aged. And I don't think most people—particularly those using it regularly—realize how much or how&nbsp;poorly.

</CalloutPlusQuote>

When you live only in the world of React, you likely only see the improvements. It seems like React is getting better and better all the time. In many ways, it is. But that perspective shields you from realizing React's velocity, and its ceiling, have long lagged behind that of its comparable colleagues.

React does what it does well, but it doesn't do _anything_ better than other frameworks.

## The best choice for the job

Let's say you're the CTO of a brand-new tech startup, or a solo entrepreneur starting out building some new web software product of some kind.

You've got a [greenfield project](https://en.wikipedia.org/wiki/Greenfield_project) ahead of you; you can choose whatever technology you like to build your thing. No constraints. How do you make the call on the front-end framework you'll use for the next several years, if not the entire lifespan of your product?

(_Assume here that your project is of sufficient size and complexity that going_ without _a front-end framework is simply not a good choice._)

There are lots of things to consider, _including_:

- Performance
- Learning curve
- Bundle size
- Scalability
- Community and support
- Financial backing
- Developer experience
- Hireability

I'd argue in all of those areas except maybe one (emphasis on _maybe_), React would actually be a _bad_ call.

Let's go through the list.

### Performance

There are [many different metrics by which you can measure performance](https://stefankrause.net/js-frameworks-benchmark8/table.html), but regardless of what your specific focus is, React is not in the top tier. Vue, Svelte, [Solid](https://www.solidjs.com/), [Inferno](https://www.infernojs.org/) and a host of others generally provide markedly better performance than React. Depending on your needs, you could go even more minimal with something like [Alpine](https://alpinejs.dev/) or [Petite Vue](https://github.com/vuejs/petite-vue) (_though I don't think they quite deserve to be lumped in the same classification as the others_).

React's performance relative to the field is pretty well-documented, so I don't feel we need to go into it here. But suffice to say: if your goal is to build the most performant thing you can, React isn't what you're considering.

<SideNote>

[Preact](https://preactjs.com/), a minimal version of React, is worthy of consideration in this case, but it's [different enough from React](https://preactjs.com/guide/v8/differences-to-react/) that it may or may not be a 1:1 drop-in replacement, so I don't count it as the same thing. Also: while Preact's performance is significantly better than React's, it's not necessarily better than some of the other contenders in the field mentioned above.

</SideNote>

### Learning curve

Assuming you know nothing about any front-end framework, React is definitely not the easiest to learn or to use.

<CalloutPlusQuote>

JSX is a gotcha-riddled kludge to clumsily shoehorn HTML into a JavaScript function return. The only thing worse than using JSX with React is _not_ using JSX with React.

</CalloutPlusQuote>

Besides [JSX](https://reactjs.org/docs/introducing-jsx.html), React itself has its own bevy of unique conventions and trip-ups (not to mention two completely different syntaxes that are _not_ fully interoperable).

In React, many things other front-end frameworks handle for you or make trivially easy require manual intervention or significant boilerplate (or both).

Just about every framework was originally built for the general population—except React, which was originally built for Facebook engineers. (_In fairness, React has evolved to a general market product since then, but its origins still have a strong effect on it even today; many of its early decisions and optimizations are still unavoidably in place._)

I'm sure I don't need to bring up `useEffect` here. Or how you can't use some standard HTML attributes in JSX (because JSX doesn't know the difference between a React prop and an HTML attribute). Or memoization. Or how there aren't _real_ conditionals, so you have to rely on short-circuit operators. Or how preventing infinite loops is _your_ responsibility—even though there aren't really loops, so you have to use array methods…you know what, let's just move on.

### Bundle size

This is similar to speed, but I felt it was worth distinguishing between the two. It would be one thing if a large bundle sent over the wire translated to better performance once downloaded, but that's not the case here.

React definitely won't lead the pack when it comes to small bundles. Again, much has already been written on this point, so I won't harp on it.

I _will_ mention, however: some used to argue React would load from the cache most of the time, so its bundle size was irrelevant. That was always a spurious claim to begin with, but to whatever extent it _was_ true, it is no longer the case in modern browsers, due to security upgrades that prevent cache sharing between domains.

<SideNote>

Here it also bears mentioning that Preact is a possibility, but again: Preact is different enough that it's not guaranteed to be a seamless drop-in, and also not dramatically different, size-wise, from other options.

</SideNote>

### Scalability

While React certainly has the _most_ companies and apps demonstrating its ability to perform at scale, I don't think it's fair to say quantity equals quality.

_Every_ major front-end framework, from Vue and Svelte to [Angular](https://angular.io/) and [Ember](https://emberjs.com/) and beyond, has demonstrated ability to perform at large scale. They _all_ have an impressive Nascar-like array of corporate logos on their homepage.

React doesn't have anything special here; it just has the most examples.

If that's your idea of safety, so be it. But it's not fair to say that React _really_ demonstrates better ability here. It's just been given more opportunities.

### Community and support

<PullQuote>

Every major front-end framework has demonstrated ability to perform at large scale. React doesn't have anything special here; it just has the most examples.

</PullQuote>

I touch on this (albeit specifically to Svelte) in [another post](/blog/introducing-svelte-comparing-with-react-vue#debunking-the-small-community-argument), but to summarize: the idea that React has the largest community—while technically true—doesn't necessarily make it a better choice.

A big community can be a downside, too, especially in the case of a so-called "unopinionated" framework such as React. It can mean too many packages to choose from, and too many different, competing opinions that you'll have to decide between and take a stance on.

But even besides that, bigger does not necessarily mean better. There's a point where the community is _big enough_, and the product doesn't necessarily continue to get better beyond that.

In the beginning, more participation builds better things. But there's a point of diminishing returns (and a point where communication cost starts to _slow down_ the project rather than speed it up). Beyond that point, there's no proportional relationship between the number of people participating in a community, and the quality of it.

It can be very comforting to be a part of the biggest community, because it seems like extra security. The more people there are in the boat, the less likely they'll allow it to sink, or something along those lines.

But at some point, there's not _really_ a difference. Beyond a certain size, an even bigger ship with even more people on it doesn't really change anything.

You don't need to be in the biggest boat. You just need to be in one that's big enough to weather the storms, and there are _plenty_ of those available.

### Financial backing

Some people are very concerned (perhaps for good reason) that their framework of choice could vanish one day, if it stops being supported and/or maintained. React's Facebook connection is considered a sign of trust to those with this viewpoint, but at what point does a project have _enough_ backing that you can stop worrying?

Angular is backed by Google. Vue is one of the most successful and well-funded open-source projects in history. Vercel is currently employing at least two Svelte maintainers (including Svelte's creator) to work on the project full-time. Solid has over 100 contributors and at least six major corporate sponsors.

Clearly, backing is not an issue among major front-end frameworks. So this isn't really any point in React's favor, either.

### Developer experience

While being easily the most-used front-end framework, and the one with the most awareness, React placed behind both Solid and Svelte in terms of satisfaction in this year's [State of JS Survey results](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/). React also placed behind Svelte, Solid and Vue in terms of interest (which, for React, was _below 50%_).

<CalloutPlusQuote>

React's satisfaction and interest have been declining steadily for years, while its usage has flatlined.

</CalloutPlusQuote>

State of JS is just one survey, of course, and you get different answers depending on how you word the questions. But other, comparable surveys tell a similar story. React came in far behind Svelte and only slightly ahead of Vue in the <a href="https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies">StackOverflow survey</a> as well, for example.

Anecdotally: [Scott Tolinski](https://scotttolinski.com/) mentioned on a recent episode of [Syntax](https://syntax.fm/) how one of his developers left for a React job that paid almost double—but that it was _still a tough decision_, because this developer loved working in Tolinski's [SvelteKit](https://kit.svelte.dev/) codebase so much.

So while developers are clearly both aware of and using React, it doesn't seem fair to say it's the thing they're most interested in or satisfied with.

### Hireability

This is the _one_ area where React definitively comes out ahead. If you need to hire a dev who knows your thing already, React is clearly the choice.

I argue, however, this is not a great reason to choose a framework.

<PullQuote>

Choosing React just for the sake of getting new devs up and running faster is short-term gain for long-term loss. (Tech debt, in other words.)

</PullQuote>

Given that your app will have larger bundles, lower speed, and higher complexity, as we've discussed—all for little to no benefit in other areas—choosing React just for the sake of getting new devs up and running faster is short-term gain for long-term loss. (Tech debt, in other words.)

Those gambles _can_ pay off, but they might not. They often give you a few weeks now at the cost of many months down the road. So while this is indeed a real benefit, and an area where React inarguably comes out ahead, it's not necessarily a good thing to prioritize.

Plus, if you know React already, learning another front-end framework shouldn't be hard for you. They all have their own nuances and quirks, but they all use roughly the same mental model. Any good developer who knows React can and will be productive with _any_ framework.

---

I understand in the business world, tradeoffs need to be weighed. Dev velocity is an important consideration. All of the items above are. And you might decide the option with lower speed, larger bundles, and higher complexity is still worthwhile for other good reasons and advantages.

But bear in mind that choice _also_ gives you absolutely no tech advantage over your competitors. They're all (mostly) using React, too.

Safe bets don't pay off big.

## So why does React stay on top?

Because we don't always value the _strongest_ choice as much as we value _consensus_. (In fact, you could make an argument that consensus _is_ the strongest choice, in many ways.)

React keeps getting picked…because React keeps getting picked.

There was a time before React was the default, when people chose it for other reasons. It solved problems they had, or it was new and interesting, or whatever else the reason might have been. But nobody was choosing it, in those early days, with any real inkling that it might help them break into the job market, or because it would be the safe bet.

That time is gone. Now, mostly, people choose React purely for familiarity and safety.

Companies keep choosing React because they know there's a massive pool of candidates who know it; candidates keep learning React because they know companies are hiring for it. It's a self-sustaining cycle.

React is the default, and absent a strong reason to choose otherwise, people usually just stick with the default.

```js
while (reactIsPopular) {
	reactIsPopular = true;
}
```

"Nobody ever got fired for choosing React" is not how the original saying goes, but it might as well be at this point. It's the safe option. It might not be everybody's favorite, but it doesn't have to be. It probably won't be anybody's least favorite either. It'll get the job done.

Absent a strong business need, both sides of the market—those hiring and those trying to get hired—are incentivized to coalesce. React, for better or worse, is the common ground they've landed on.

## When and how does this change?

This is the part I'm really interested in, having watched the last several years of development (pun intended).

I don't have an answer. As I mentioned before, React has flatlined in terms of usage, according to State of JS. (This likely means it's actually _growing_, since it's the same slice out of an ever-expanding pie. But it's remained a consistent 80% of the pack for three years now, which doesn't seem like a strong sign of continued adoption.)

At some point, though, the cycle breaks. And I don't know what catalyzes that.

It _could_ be a long, slow chipping away at the mountain. Trends can often look sudden in retrospect, but they usually shift gradually over time. Maybe as other frameworks prove themselves more and more (_and, for that matter, as the differences between them matter less and less from an onboarding standpoint_), companies begin to choose other options where they have the luxury.

While I don't think _most_ companies will do this, there will undoubtedly be _some_ that hit a performance ceiling with React, and migrate to a more performant option based on business need. If your company lives and dies by mobile usage, for example—especially in places with comparatively low-powered devices or networks—you might (literally) not be able to afford React's performance tradeoffs.

That won't be true for most companies, though. It doesn't make sense to migrate most old projects. The majority won't have performance issues strong enough to outweigh the cost of a major refactor. That's fine and perfectly understandable. I wouldn't recommend most businesses migrate away from React, given that it's working well enough for them. The cost doesn't pay off.

So it could also be that the winner has been crowned, and there will be no successor. In this scenario, either React will continue to evolve as needed to stay on top of the heap; or by the time React is dethroned, we will have moved _past_ front-end frameworks entirely (perhaps because browsers in general or JavaScript in particular have expanded to the point that we don't need them). Or, at least, into some new post-framework era.

One other thought here: it's possible we're _already_ moving past React, but we just can't see it at a high level yet. Companies hiring now are most likely to be the companies that made their choice on framework already, a long time ago. Just as Covid testing tends to lag behind actual, current levels by a few weeks, so current hiring trends could be lagging behind adoption benchmarks.

---

I don't know what the future of front-end looks like. Nobody really does. But it's a very safe bet that React will continue to be _the thing_ for a very long time.

If you're learning front-end development in the hopes of getting a job, or trying to level up your career, and React is a knowledge gap for you, it seems like the safest bet you could make. React isn't going anywhere anytime soon.

That said, however: I _hope_ more and more developers will explore other options. I hope companies consider other candidates for new greenfield projects. Much of the joy I've discovered in front-end in recent years has been thanks to Vue and Svelte. In my personal opinion and experience, React gets the job done, but it doesn't make the work fun.

I _do_ see some of this happening, as more developers begin to wonder what all the hype is with other frameworks, and realize exactly how obtuse React has actually been this entire time. I hope more will continue to explore the other options out there, if for no other reason than better diversity of possibilities for front-end developers in the future.
