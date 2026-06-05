---
title: LLMs and performative productivity
date: '2026-06-05'
updated: '2026-06-05'
categories:
  - opinion
  - personal
  - AI
excerpt: "It's worth asking whether LLMs are actually making us more productive at all—and if so, what we might be sacrificing in return."
coverImage: "bullseye.png"
coverWidth: 1920
coverHeight: 1080
---

<script>
import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

I began to wonder exactly how productive AI<footnote>LLMs, more accurately, which are <a href="https://www.theatlantic.com/philosophy/2026/06/no-artificial-intelligence-is-not-conscious/687378/?gift=1ga2TvL-DbuHDQIcYF7oR7CsNA92bD_yo6VqlH7-uco">not any kind of intelligence, artificial or otherwise</a>. Regardless, I'll use the terms "LLM" and "AI" interchangeably here, even though LLM is the technically correct term (and I mostly am referring to using LLM agents).</footnote> is making me, personally, when I stepped back a bit from what I'd been using it for.

At first, when I began to use agents day-to-day, I was blown away by their capabilities, and by how much they elevated my own. Certainly, the floor was raised. I could do far more, much faster. That much was undeniable.

Armed with this newfound power, I accomplished a flurry of tasks I either wasn't capable of, or didn't have the time for previously:

- At work, I could get up and running in new codebases without asking for help, and could contribute to them much more easily
- I got some projects updated, moved, or refactored, all in record time (_including a particularly gnarly Nuxt upgrade I'd been putting off for years, and that would've taken me days of work, done in about an hour_)
- I added several new features to a handful of apps here and there that I wouldn't have otherwise
- I scaffolded new things and built out greenfield projects in record time
- I wrote more tests, faster than ever
- I pushed out a whole bunch of bug fixes

That all sounds fantastic, of course. It _felt_ fantastic.

But when I got done with all that, I had to wonder: **could I really call any of that _productive_**?

- At work, I didn't understand the codebases I was working in, and though I was contributing to them, I gained no real context about them. I was opening PRs, but I couldn't really defend what was in them, or say whether or not they worked with the system. I was constantly afraid I'd messed something up without realizing it
- Most of the other updates weren't really _needed_ per se, and afterwards, the apps themselves weren't any different; the changes just made me feel good, while making little to no difference on the user side of the software
- The new features I built were neat, but they weren't actually being used
- The greenfield projects were quickly abandoned
- I didn't really need the tests that bad, and I wasn't quite sure whether they were doing the anything worthwhile in the first place
- I didn't know what had caused the bugs, or what the fixes had been

<CalloutPlusQuote>

I had mainly just checked off a bunch of old to-dos, most of which hadn't gotten done previously because they never mattered that much in the first place.

</CalloutPlusQuote>

And even where they _did_ matter, I paid a cost for doing more, faster. I added a bunch of abandoned side-projects to the old pile, but unlike before, I didn't even come away with any new skills or experience.

If anything, it seemed like I knew _less_ than before.

Maybe the code improved, but I sure didn't.

And that was all in the _best-case_ scenarios, where the agent worked well. Other times, I'd spend so long prompting and re-prompting it would've just been faster to do the work myself in the first place—but by that point, of course, I was so deep in the hole it seemed easier to just keep digging.

I had to ask: when the dust had settled, was it really all a net gain?

<CalloutPlusQuote>

If I'm being honest with myself, what I was doing was often more theatrical than productive; lots of show, with not a lot to show for it.

</CalloutPlusQuote>

But being honest with myself, it turns out, was actually a lot more difficult than it should have been.

Because, despite everything above…I _loved_ it.

I loved using my agent like a guilty pleasure. I wanted to keep using it, any chance I got.

I could _see_ with my own two eyes that I was trading away something valuable for something petty, like a kid blowing their allowance at a gumball machine.

But I still _wanted_ what the machine had. It triggered something in my brain. And I believed maybe if I used this thing enough, all the tiny little meaningless tasks would eventually add up to something important.

Sometimes I'd feel a compulsion to fire up Claude Code and have it work on something, even when I had nothing in mind to accomplish.

I'm very familiar with that sort of compulsion, and I recognized it as soon as I stepped back: I wanted to _play_ AI, like a video game. If I had no reason or goal in mind, I'd try to make one up. I just wanted more of that _feeling_, like I was accomplishing something unbelievably fast. (Not unlike a video game, actually.)

All the work I had AI do for me could've been a fantastic learning opportunity. Instead, I mostly just traded my own potential growth for...a pile of junk, essentially. And I did it _happily_. Enthusiastically, even.

<CalloutPlusQuote>

That's when I started to wonder if AI was doing more for my feelings than for my actual productivity.

</CalloutPlusQuote>


## An assumption worth questioning

Maybe it's never crossed your mind to question the idea that AI makes you more productive.

Maybe you've never thought to ask because you've used the technology, and you also _felt_ as though the difference was obvious and undeniable.

Or, maybe you never thought to question the assumption because it just seems to be a widely-accepted truth in this industry.<footnote>So widely accepted, in fact, that many company leaders are punishing their employees for not using AI enough—which I find to be not evidence of AI's effectiveness so much as evidence for the pervasiveness of the assumption.</footnote>

Regardless: this assumption has always surprised me a bit, because it seems to come almost entirely from either anecdotal self-reporting, or from the companies selling AI. Extremely few good-quality, quantitative studies or surveys have even attempted to check, objectively: _does AI make you more productive as a software engineer_?

Among such objective attempts to answer the question, I'm aware of none that's come back with an unqualified "yes." Whatever gains LLMs might offer, they're always situational, and always come with tradeoffs.

Muddying the waters further: the definition of "productivity" varies widely among these studies. Few take a holistic view of the idea, by examining impact on a broad scale. But the more they do, the less benefit they're able to find.

<CalloutPlusQuote>

A lot of the supposed productivity gains from LLM usage seem to rely on a questionable definition of productivity.

</CalloutPlusQuote>

The studies that report the most impressive productivity boosts _also_ tend to have the most contrived notion of what it means. Often, all they measure is how fast participants can complete a simple coding exercise, or a basic greenfield "hello world" app.

Which is a partially accurate definition, I suppose. But it's missing a great deal, including _how well_ the task was done, what might have been traded for that burst of speed, and whether the findings can actually be applied to real-world scenarios, among other things.

But before we get to all that: let's look at those studies I mentioned.

I've compiled a list of all the notable studies and surveys I'm aware of, and paraphrased their findings below.

## Studies on the impact of LLMs on developer productivity

- Early this year, [a study by Anthropic itself](https://www.anthropic.com/research/AI-assistance-coding-skills) found AI usage offered statistically insignificant benefits, in exchange for _significant_ tradeoff in skills built on the job.<footnote>Interesting to note: careful LLM usage was able to offset both impacts…meaning that the best-case scenario was, simply, no impact at all.</footnote> [Similar studies in other areas, like this one](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) have noted the same effect; whatever speed LLMs might provide comes with a toll on cognition.

- In a survey also from earlier this year, [CEOs overwhelmingly admitted little to no correlation between AI adoption and company-wide productivity gains](https://fortune.com/article/why-do-thousands-of-ceos-believe-ai-not-having-impact-productivity-employment-study/).

- [A 2025 study](https://arxiv.org/abs/2507.09089) found that using AI made developers _feel_ 24% faster—but in reality, actually made them 19% _slower_.<footnote>An updated study was attempted this year, with potentially different results, but the researchers have thus far been unable to get quality data.</footnote> Several smaller, unrelated follow-up experiments have produced similar findings.

- [A late 2025 study (summarized here)](https://proxify.io/articles/stanford-study-of-100000-developers-on-engineering-productivity) found up to 40% gains—but only in low-complexity greenfield projects (and in exchange for less maintainable code). The gains shrunk, vanished, or even went negative in existing codebases and/or higher complexity tasks, _particularly_ when accounting for the need to rework previously shipped LLM code.

- [A 2024–2025 study](https://dora.dev/research/2024/dora-report/) found gains in individual productivity, but also found that they came with a shipping bottleneck, and a reduction in the stability of shipped code.

- An [MIT study from 2024](https://mit-genai.pubpub.org/pub/v5iixksv/release/2) proclaimed a 10–20% boost, but only by defining productivity in terms of the absolute number of pull requests (PRs) opened—a metric that perhaps _can_ be a signal of productivity, but which can also indicate an entirely _counterproductive_ bottleneck. (Even so, the study admits its findings were difficult to measure properly, and barely reached statistical significance.)<footnote>Not strictly related to dev work, but perhaps worth noting: MIT released a separate study that same year, which claimed to find that LLM usage helped scientists make more discoveries. However, MIT ended up redacting that study once [its data was exposed as unverifiable and, quite possibly, completely fraudulent](https://thebsdetector.substack.com/p/ai-materials-and-fraud-oh-my). That study is still often cited, however, making it a poignant lesson in the difficulty of dispelling disinformation.</footnote>

- [Microsoft's 2023 study](https://www.microsoft.com/en-us/research/wp-content/uploads/2023/12/AI-and-Productivity-Report-First-Edition.pdf) touting "meaningful boosts to productivity" actually only tested building an extremely simple "hello, world" boilerplate app, nothing like real-world dev work. There are also several caveats about the quality of the work dropping as a side effect.

- The last few Stack Overflow developer surveys have shown AI usage increasing among developers, while trust in AI is actually going _down_. (In fact: more developers _distrust_ AI now than trust it.) AI solutions that are "almost right, but not quite" was the #1 frustration cited by developers in [the most recent survey](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/), with a full two-thirds of developers saying they are spending _more_ time fixing AI-generated code now than ever before.


### The major takeaways

All of those studies take different approaches, but there are a few common threads in their findings I'd like to point out:

- **LLM productivity benefits are highly situational**. LLMs excel at straightforward, time-consuming tasks. They're great at boilerplate and greenfield projects. And, they help less-experienced coders a lot more than experienced ones. The more you go outside that sweet spot, the less benefit there is.
- **There's a pronounced gap between perception and reality**. This reaffirms my experience. LLM users _feel_ like the tool is doing much more for them than it actually is when measured objectively.
- **Even where the gains are real, they come at a cost**. Several of the studies above (and others, in other fields) have confirmed LLM output is generally lower quality, in various ways. While it may be reasonable to think that particular gap is closing, there's another, even more concerning penalty:
- **LLM usage inhibits cognition and understanding**. Which makes sense, of course; you can't expect to be ready for the game if you skip practice every day. Your comprehension of the system comes mainly from all those small, everyday touchpoints. If you outsource those, you quickly lose context and develop [cognitive debt](https://www.media.mit.edu/publications/your-brain-on-chatgpt/).<footnote>Since gains are most pronounced among novice developers, this creates a concerning catch-22: juniors have the most to gain from LLM usage, but those gains threaten to keep them reliant on the technology.</footnote>
- **Most studies so far have only measured productivity at the individual level, and in a vacuum**. Measurement tends to begin at authoring code and end at merging a PR. Rarely is a broader view, where impact is measured across an organization and over time, even attempted. But where it is, positive impacts tend to evaporate.

This last point might be the biggest takeaway, in my mind.

<CalloutPlusQuote>

The more you take a big-picture, holistic view of productivity, the more gains from LLM usage shrink, or even go negative.

</CalloutPlusQuote>

Now, in fairness: many of those studies took place prior to 2026, and there may be some reason to believe that LLMs have progressed enough now that some of the results might have changed.

Even if that's the case, however: we need to be very careful how we're defining productivity, and how we're measuring it. Because I feel like we've accepted an incomplete, inadequate definition of the word, in order to fit LLMs inside it.


## Defining productivity

For any purpose where measuring productivity matters, you can't just look at speed or volume. These are short-term metrics, and good work is often done slowly, and in small increments, in order to last long-term.<footnote>Conversely, I've watched plenty of contractors do a terrible job at impressive scale in record time. Predictably, their work tends to fall apart almost as quickly.</footnote>

But it seems like we don't care anymore.

In fact, it feels like we're actively being told to _stop_ caring about any idea of productivity we might have agreed on prior to the advent of LLMs—or at least, to adjust it.

We're told to stop writing code by hand, not because our code wasn't good enough, or because we were doing something wrong, but simply because…it isn't as fast.

Whether LLM code is as good as human code is partially load-bearing here. After all, if the machine _can_ write code as well as humans (or even close), why _not_ do it faster?

But that's actually only a small part of the overall question. There's much more to _actual productivity_ that we're (perhaps deliberately) overlooking right now.


### Productivity only starts with "PR"

Obviously, LLMs can write code extremely quickly; nobody denies that. If sheer volume of code is how you measure productivity, the LLM wins hands-down.

But I don't think anybody who's ever worked in any real production context would agree absolute lines of code is a useful proxy for productivity. (In fact, not so long ago, we mostly agreed the opposite was often true, and _fewer_ lines of code was often the superior signal.)

Similarly: it doesn't really matter _how many_ PRs you're opening or merging, if you're not taking into account the _quality_ of the code they contain—as any Open Source maintainer will tell you. There have probably never been more PRs opened, and yet, the average quality has likely never been lower.

I think it's fair to say LLM-produced code is _not_ always as good as human code, for a few reasons:

- For one: the studies above confirm it; they overwhelmingly point to a reduction in the quality and reliability of the code LLMs generate, relative to human control groups. Maybe that changes in the future, but it seems to be the truth for now, at least.<footnote>I have yet to encounter anyone who says LLM code is as good as human code, *and who also* reads all the code their LLM produces. Seems like mostly the people who believe it are taking it on faith.</footnote>

- For another: LLMs were trained on average code, and thus generally have average outputs.

- For a third: LLM output is non-deterministic, and while that may not matter in many cases, it means any given implementation may be different every time. You either believe all implementations are essentially equal (which seems unreasonable), or you believe that matters.

- But mostly: a human will inevitably have a more comprehensive understanding of the organization, the team, the problem space, the history, the users, and so on. An LLM's context window is only so wide, and it's unlikely to reliably account for all of those things that may exist entirely _outside_ the codebase and in the real world. Best-case: a human will need to actively provide all that context, and that's not a scalable approach.

At this point, LLM enthusiasts might argue that humans make mistakes, too. It's not as though we've ever been perfect, either.

And that's fair. We've all messed up. Most of us have taken prod down at one point or another.

But I have two responses to that:

1. **Nobody treats human code with such indifference**. I've never once, in all the hundreds and hundreds of PRs I've opened, had anyone express such low expectations of me, or had my mistakes with such blasé detachment. So this is an obvious double standard.<footnote>Very similar to how companies will not tolerate a human support agent lying to customers in the slightest, but will happily ignore an LLM chatbot that does the same thing.</footnote>

2. **Mistakes are how humans learn**. When something goes wrong in our code, that we wrote, there's a benefit; we discovered something about our codebase that made us wiser. We gained resilience. We leveled up. We probably helped other people learn along with us, too.

<CalloutPlusQuote>

A junior who made a mistake is one step closer to being a senior; a junior who let an LLM make a mistake (and had the LLM fix it for them) has probably learned nothing.

</CalloutPlusQuote>

Some might also argue the reduction in quality is worth the bump in speed, which I suppose may be reasonable in some cases (but not all).

But never mind that; let's set aside code quality for a minute.

Let's ignore all the points above, and assume code written by an LLM is always at least as good as human-authored code, if not better.

Even in that scenario, we still have a whole bunch of problems.


### Code has never been the bottleneck

Writing code generally isn't what slows teams down, and has never really been the hard part of software engineering at all. I've never, in over a decade in tech, heard even the most jaded CTO cite "typing speed" as a major blocker for their organization.

**The job is so much more than that**. There's endless judgment, communication, and discernment that goes into the work. (And it feels like we all knew that, not so long ago.)

It's evaluating different approaches and weighing tradeoffs. It's talking to the right people on five different teams to make everyone's in alignment. It's figuring out if what you're building is actually the right implementation of the right solution. And no matter how fast you can churn out code, _you can't skip past that part_.

Besides: PRs need to be reviewed, don't they? (Please say they need to be reviewed.)

<CalloutPlusQuote>

If you're opening PRs faster than anyone can review them, you're not increasing productivity; you're clogging the bottleneck. That's closer to sabotage than it is to productivity.

</CalloutPlusQuote>

Maybe your company's also given up on PR reviews (_he said with a shudder_). But just for the sake of argument, let's say all your PRs are full of great code, they all coast through review quickly and seamlessly, and they all get merged into prod without issue (even though none of that sounds realistic to me).

Even then—even after you've closed the PR and shipped to production—the measure of your productivity can't be taken yet. In fact, it's really only beginning.

You still have to maintain the code, fix any bugs that might pop up, manage updates, and all the other stuff that comes with ownership.

**The more you push out, the more you have to maintain**. The more you add, the more complicated your software becomes (which in turn, remember, lowers the effectiveness of LLMs). And inevitably, this means more and more of your time is spent working on code you've already "finished," as it boomerangs its way back to you.

Sure, you can use AI to speed through the work this time, too. But there's no guarantee this time goes any differently than the first time. You _still_ might not be done, and this one thing you were working on might still continue to leech away your time and energy.

This effect isn't unique to LLM usage, of course, but it's more acute in both frequency and likelihood. The more you use AI to push out code, the more little zombie tickets start punching their way out of the ground to shamble back for another bite of your brain—and the less you'll actually understand what's going wrong and why, if you outsourced your thinking, and with it, your mental grasp of the system.

And remember: this happens more with bad code, but it still happens _even if the code is great_. Even excellent code needs maintenance. So shipping out amazing PRs at record pace, even in a best-case scenario, offers only diminishing returns on overall productivity, because the more work you do, the more work you have to _keep doing_.

Maybe the ceiling was raised along with the floor, but it didn't disappear.

<CalloutPlusQuote>

No matter how fast you can build something, maintaining it is still an ongoing cost.

</CalloutPlusQuote>

This is probably why so many vibe-coded apps are abandoned or left to rot nearly as soon as they're built: building is fun, and practically free; maintenance is a slog, even with agents doing it.

It's probably also why, even though it's trivial to [slop-fork](https://www.slopfork.dev/) any software you want, most people don't seem to be doing it: because the moment you do, the maintenance and updates become _your_ problem.

Is _your_ team prepared to shepherd the code, when it proliferates beyond human scale? Are you planning for the maintenance to increase in proportion with the throughput?

What bugs and unforeseen side effects are hiding in the code that you haven't found yet? What happens if and when _those_ grow exponentially along with output?

You likely don't know the answer to any of those questions yet, because they can often take weeks, months, or even years to be revealed. You don't fully know how well the work will hold up over time until it's actually, well, _held up over time_. (Or not).

Before that point, you have only a limited idea of how truly productive your work actually was.



### 10x faster in the wrong direction

We're a few layers deep down our little theoretical rabbit hole at this point, so why not go one more?

Let's say your LLM authored great code, super fast. Let's say it went through review without issue. It was merged into prod successfully. It's out there in the wild, and it's so good, you don't even have to touch it. It's bug-free and pristine.

Great! You still might have built the wrong thing.

No matter how fast you're able to ship code, it doesn't make what you build intuitive, cohesive, or even _useful_ in the first place. It could still be wrong for your organization, or your software, or your users. It could still be just another idea that might have looked great on paper, but fell apart in the real world. Or, it could even be a good core idea, with a bad implementation.

<CalloutPlusQuote>

When you're headed in the wrong direction, speed isn't an asset; it's a liability.

</CalloutPlusQuote>

We've seen an exponential explosion in the amount of software created over the past couple of years, but outside of AI itself, there doesn't really seem to be much change in what people are using and relying on day-to-day. Disregard the AI industry—which is largely circular, and propped up almost entirely by venture capital—and I don't really see much that's changed in software in general in the last few years.

It appears we're building more than ever, but that doesn't seem to correlate with any noticeable uptick in meaningful metrics like adoption, as far as I can tell. I have a theory why this might be:

<CalloutPlusQuote>

Building things got cheap, but building *the right thing* didn't get any easier.

</CalloutPlusQuote>

Even perfect code can still make bad products.

Does anybody _want_ it? Does anybody _care_?

And if they don't—if you built the wrong thing entirely—could you really call that being "productive?"

_Maybe_. Maybe if you're just using AI to launch things at the wall as fast as possible to see what sticks, you could potentially call failure a step in the right direction. But even then, it's worth asking: is this approach actually a net gain?

There's a finite limit to how often you can do the bad job quickly before it starts costing more than doing a good job slowly. How many fast, cheap iteration cycles will you burn through before it would've been more efficient to just do it slowly and methodically in the first place?

All of this is why shipping some code is only the beginning of the impact of your work. It's just barely entering the crucible. It's untested. So gauging your productivity at that point is at best premature, and at worst, an entirely inaccurate measure.


## How do you know you can trust yourself?

Remember the study above, where engineers said using AI made them 24% faster, when in reality, it made them 19% _slower_?

Here's what I need everyone reading this to internalize: _you're not any different from those engineers_. I'm not either. None of us are. (That's why I still felt a compulsion to keep using AI, even when I didn't have a reason, and even when I could see I was trading something valuable for something mostly pointless.)

None of those engineers knew there was a 43-percentage-point gap between their perception and actual reality. They all sincerely believed AI was helping them, not hurting.

And if you haven't actually measured, quantitatively and objectively, _you_ don't know what _your_ gap is, either—no matter how much your brain firmly insists you do. (And your brain is, most likely, insisting very hard right now.)

Here's another statistic: [in the 2026 State of AI survey](https://2026.stateofai.dev/en-US/opinions/), 64% of developers said AI tools have made them significantly more productive.

However, in that _same survey_, 68% of developers said AI reliance makes developers _less skilled_.

It's easy for us to see the negative effects of something when we're looking at other people. It's much harder to see them when we're evaluating ourselves.

<CalloutPlusQuote>

LLMs are made by for-profit companies to be addicting.

One of the most effective ways they do this is by making you *feel* productive, even when you're not.

</CalloutPlusQuote>

Crucially: consciously knowing this does *not* change your susceptibility, any more than knowing you're a heroin addict makes you immune to opioids. That's why objective, quantitative measurement, with a holistic definition, is so important.

You probably won't even notice all the creeping technical and cognitive debt as it weighs you down, because by that point, you're most likely not thinking of it in those terms.

It's so difficult to spot the downsides of LLM usage, because we're psychologically inclined to _feel_ that initial positive burst, and to ignore the dozens of tiny paper cuts that follow—even when they've bled the original gains away, drip by drip.

But even if you _do_ see it happening, notice **your incentives are all pointing in the wrong direction by that point**. Now that parsing the code is much harder than it would've been before (because you wrote none of it), sunk cost pushes you further down the path of least resistance.

Faced with the decision to start all over and do things a better way, or just press the button one more time to apply another layer of patch code you never read and don't understand, while staring down an ever-increasing backlog, all the inertia is pushing you further down the same path that got you here.

Worse still: the less you actually take the time to read what the LLM is producing, the more you'll be tempted to trust it unquestioningly—and the less you'll be able to detect when it's doing something wrong.

<CalloutPlusQuote>

The less you understand, the more you trust AI. But the more you trust AI, the less you understand.

</CalloutPlusQuote>

Throughout this whole process, however, you'll probably still _feel_ incredibly productive—even when the data would suggest you're lying to yourself.

But you probably don't measure, if you're in this deep. Because you probably trust how you _feel_ too much to believe reality could possibly contradict you.

It's much easier to just fudge the definition a little bit.

I still believe AI agents can be massively useful tools for software development—_productive_, even—when wielded carefully, in appropriate situations.

The problem is: they're not shaped for judicious application (and they're most _certainly_ not marketed that way); they're shaped to maximize your usage. And they work exceptionally well.


## Productive for whom?

There's one more aspect to productivity I've alluded to throughout this post, but have yet to address directly: what about the parts of the work that are productive _for you, personally_?

Sure, shipping things for your company is well and good. That's what they pay you for, after all. But there's an implicit (if not explicit) part of the deal where _you_ get knowledge and skills, too.

You're meant to learn from your work. The company is supposed to be training you and helping you grow, just as you're supposed to be training those below you and helping the company grow.

Once you've been a junior long enough, if things are working the way they should, you'll have built up enough skill and knowledge to jump to the next level, where you'll once again start low with the expectation of further growth and development.

That's why many developers take on side projects that aren't strictly work-related, profitable, or even practical; _to learn_! There's massive intrinsic value in doing the work, even when nothing otherwise meaningful comes of it. (In fact, _doing_ is one of the only ways it's even possible for humans to learn and grow.)

**You're supposed to get more than just pay from your job**. It's supposed to come with the promise of growth and potential advancement.

What happens to that system, when nobody's actually gaining understanding from their work anymore? When there's nobody in the building who actually _knows_ how it all works, and everyone's just trusting whatever an agent says?

What happens when nobody can tell whether the agent's right?

Where will senior engineers come from, when juniors haven't learned a single thing on the job in the last three years?

Sure, making juniors better and raising the overall average is great—on paper, at least—but we still want _more_ than average, don't we?

For whom is this all productive, exactly?

Not for me, if I'm not advancing and honing my skills.

Not for your company, if it's severing its own developer pipeline, and all its engineering output is essentially a regression to the mean.

If all the engineering we're doing is just using the same AI tools every other company's also using, our software is nothing special under the hood. In that case, we'd need to lean heavily on other differentiators—marketing, design, customer service, etc.

But we're not; we're outsourcing all of those to AI, too.

Why is anybody going to care about your company when everything about it is exactly the same homogenous AI output every other company has?

The main winners in a gold rush are the ones selling pickaxes, and it sure seems to me like the token vendors are about the only ones who really stand to gain from most of this, by any coherent, holistic definition of productivity.

But if (when) this whole bubble comes crashing down and token costs skyrocket: will you still have any idea what's going on in your codebase?

Will you still be valuable, if and when agents cost 20 times what they do now?

I've strayed into prediction. But no matter what the future holds: be careful how you measure your own productivity—and be sure you _are_ measuring it. You can't trust yourself if you don't.

Most of all, though: be careful what you're trading for it.
