---
title: Classic rock, Mario Kart, and why we can't agree on Tailwind
date: 2023-09-25
updated: 2023-09-25
categories:
  - css
  - personal
  - opinion
  - web
coverImage: tailwind.png
coverWidth: 1920
coverHeight: 1080
excerpt: It's popular to say we can’t agree on Tailwind, but I posit we actually already do. I think what we actually disagree on isn’t the details of this (or any) specific software; it's how we define assets and liabilities.
draft: true
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

When my brother and I were younger, our tastes in music were nearly polar opposites. I was a total hipster, and valued what I saw as artistic integrity and creative innovation. I was almost entirely into new and active, of-the-moment artists.

In contrast, my brother made virtually no judgments at all. He was open to anything and everything, but his mainstays centered on classic rock of the '70s and '80s. He loved rediscovering decades-old albums by many of the most well-known artists of their time.

Like any good elitist snob, I hated anything popular. So naturally, my brother's kind of music was anathema to me at the time.

My brother never really understood what it was I seemed to dislike so strongly. So finally, one day, he asked me.

I thought about the question for a minute, and then summarized: "it's all style and no substance."

He burst out in laughter.

"That's the _best_ thing about it!" he said with a huge grin. "That's the whole point!"

I knew we looked at the same things in opposite ways. But I had never realized before then that, wildly enough, we had _all the exact same reasons_ for it.

## Why we can't agree on Tailwind

Tailwind is nearly as ubiquitous as it is polarizing these days. (I trust if you've been interested enough to read this far, I don't need to cite any sources there.)

Proponents show a near cult-like devotion to Tailwind, some even going so far as to claim it's "fixed" CSS—or at the very least, made it manageable and predictable in a way it wasn't for them before. Most frontend frameworks and products feature a first-class Tailwind integration, due to its soaring popularity.

Detractors, on the other hand, claim Tailwind is messy; it gets in the way; it violates core fundamentals of web development; it cuts against the grain; it diminishes the power of CSS; and/or that it does the _opposite_ of what it's supposed to, adding complexity and making projects even _harder_ to maintain.

Many who use Tailwind never want to go back; many who _don't_ never want to.

How could we possibly disagree so sharply?

After using Tailwind for a good while now—both professionally and on a few small personal projects—I've come to what might just be the most unpopular opinion of all, in regards to that question:

**Both sides are right.**

…Ok, ok, I can hear the boos. Nobody likes a centrist. But hear me out.

We won't ever get anywhere debating the merits or flaws of Tailwind, for the same reason my brother and I never persuaded each other on music.

<CalloutPlusQuote>

We could've dissected Billy Joel and Sufjan Stevens all we wanted. But it didn't matter, because our disagreement ultimately started before either one of us ever pressed the play&nbsp;button.

</CalloutPlusQuote>

It turns out, he and I actually saw every artist and album in pretty much exactly the same way.

We just never agreed on what was a feature, and what was a bug.

Likewise, I suspect most people on opposing sides of the Tailwind debate actually complete agree on Tailwind itself. I don't think we disagree on atomic CSS, or utility classes; I think our contention comes from the valuations we made long before we ever chose our tools. Where one of us sees a selling point, the other sees a flaw.

Tailwind _is_ great.

Tailwind is _also_ a bad idea.

And it is both, at the same time, for exactly the same reasons.

## The user defines the tool

If you've played [Mario Kart 8 Deluxe](https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/) on Switch, you might know the game offers a feature called [Smart Steering](https://mariokart.fandom.com/wiki/Smart_Steering).

(_Yes, this is still about Tailwind. Bear with me here_.)

Smart Steering is essentially an AI copilot. When enabled, you control your racer as normal, except that if you start to go off the road, the game will automatically take the wheel and steer you back on course. No more slogging through the grass, or plummeting off the side of the track.

Smart Steering can help even the playing field among any mixed group (particularly on higher engine classes, where even very good players may find themselves hurling off the track).

But as you get better and better at the game, Smart Steering begins to help less and less…until eventually, it starts getting in the way instead.

![A chart demonstrating the above paragraph; as skill level increases, the impact of usage goes from entirely positive to entirely negative.](/images/post_images/impact.png)

Smart Steering will prevent you from taking shortcuts, for one thing; it can't tell _why_ you're going off the main road, but it jumps in the way and prevents you from doing so regardless. It may even intervene unexpectedly, pushing you off your intended course at inopportune moments.

You might have a strategic reason in mind for going off the road (maybe you were avoiding a ruinous obstacle, for example), but Smart Steering won't allow it regardless.

Plus, as a balancing feature, the game's strongest speed boosts are disabled for players utilizing Smart Steering.

<CalloutPlusQuote>

The better you are, the more this feature designed to augment your skills instead begins to inhibit them. But whether it makes you better or worse--and to what degree--will depend entirely on where you're coming from.

</CalloutPlusQuote>

I'm a very good Mario Kart player (I spent some thirty years of my life playing Mario Kart games before Smart Steering came along, after all), and so I can't stand Smart Steering. I never use it. I might not notice it a lot of the time—it might even occasionally help me—but what stands out to me are the times it jumps in my way at the worst possible moments.

Smart Steering might keep me on the track, but it _also_ suppresses my fullest abilities. It thwarts the best outcomes just as commonly as it averts the worst disasters.

<CalloutPlusQuote>

To those sufficiently skilled with CSS, Tailwind feels like being forced to code with Smart Steering on.

</CalloutPlusQuote>

That's why any conversation I have with somebody who likes Tailwind will probably be like trying to explain why I don't like Smart Steering to a Mario Kart player who relies on it.

> "I don't like that it keeps me from driving off the track."
>
> "What!? Why would you ever want to do that!?"
>
> "You can actually skip ahead if you use this trick right here..."
>
> "Ugh, what a hacky workaround. It's really best practice to stay on the track, you know."
>
> "Look, I understand why you're saying that, but I've been doing this for a long time, and I know what I'm doing."
>
> "I just don't know why you'd make things harder on yourself, just to do something you're not supposed to do anyway."

<SideNote>

I realize I might sound rather arrogant in choosing this comparison. Mario Kart is a racing game, after all, which might seem to imply that I think of myself as a winner, and people who don't do things my way as inferior.

That's not at all my intent; I only mean to point out that if Tailwind is your thing, it's probably because we're coming from different places, value different things, and ultimately, like to play the game differently. Web development isn't a race; we're all just trying to finish in whatever way works best for us. Tailwind just isn't a vehicle that works well for me.

</SideNote>

## There are no benefits without tradeoffs

For the most part, it's perfectly fine if we see the same thing in two different, even opposite ways. However, there's one universal truth I think it's important we agree on as common ground, namely: _benefits always come with tradeoffs_ (and vice versa).

When it comes to frameworks, at least (CSS or otherwise), any place things seem simpler, we're actually just experiencing the _upside_ of some architectural decision. That decision, whatever it was, has downsides elsewhere; some other part of the chain, further away from our view, is now also _more_ complex or difficult than it used to be.

Don't get me wrong; that's still usually a good thing. The new set of tradeoffs is often preferable to the old set; we wouldn't use frameworks if that weren't the case.

<CalloutPlusQuote>

But complexity always exists, even if it's remanded to a place you don't regularly experience&nbsp;it.

</CalloutPlusQuote>

Problems in tech don't _vanish_; they simply get reconfigured into new shapes with new .

So we should be incredibly skeptical of any framework (any _product_, really) that claims to have eliminated complexity—destroyed it, turned it into nothing—without being honest about the downsides that come along with .

Ok, fine. Why is this all important?

Because Tailwind is often marketed (and spoken of by many of its proponents) as a framework that's achieved this impossible task of obliterating CSS's complexity from existence.

If you would make this argument, I would firmly dissent. But I would also think you're probably right _in your case_. You likely don't work in the areas where the tradeoffs are, so they might seem like they don't exist to you.

Boring and lazily centrist as it may sound: I think we have to agree that Tailwind and vanilla CSS are both unique sets of tradeoffs. Whether we consider one better than the other will depend very much on where we spend our time, and what we consider to be _the point_ of all of this.

Let's be fair: CSS _does_ have myriad complexities and pitfalls, and Tailwind admittedly smooths out many of those rough edges, in various ways.

But CSS is _also_ an incredibly powerful programming language, which Tailwind diminishes, creating liabilities of its own along the way.

The only _invalid_ point of view is that you can have all benefits and no downsides. It just doesn't work that way.

It all depends.

It all _always_ depends.

## Where do you want to be?

<Note>

Heads up: this section will be full of broad, coarse generalizations, and anecdotes. You've been warned.

</Note>

The divide I tend to notice between Tailwind fans and critics hinges on what part of the job they enjoy, and would prefer to focus on.

Tailwind enthusiasts tend to tout it as the thing that got rid of the hard parts of CSS. It makes the work easy and fast, and they generally like that. There seem to be other parts of development they'd rather focus on.

Conversely, the people who aren't fans of Tailwind, in my (purely subjective) experience, tend to be seasoned veterans of frontend development, and almost always enjoy the part of the work that Tailwind is supposed to make easier. These folks generally aren't concerned with speed; they're more concerned with the craftsmanship of their product. They're already where they want to be.

The thing I'd like to point out is: a person who is excited to complete their work as quickly and easily as possible is probably not somebody who _enjoys_ the work they do, or takes particular pride in it.

Sure, we all just want to get things done. No shade for that. But if you're a person who's saying "wow, food was always so hard for me before I bought my microwave, and now it's so easy," I _might_ think that microwave is pretty great. But I'll _definitely_ think you're probably not the person I want in the kitchen.

They often see Tailwind as a clumsy, blunt instrument that, at best, dampens their abilities, and at worst, locks off the best parts of both CSS and of their jobs. Speed isn't an issue for these folks (or at least, not a priority); they are more concerned with the craftsmanship of their product. Styling is exactly where they want to be.

Both of those are fully valid points of view. And, in fairness, there exists a rich gradient of options between the two. You can balance speed and craft. You can use Tailwind only as much as you choose, and opt to reach for hand-authored CSS the rest of the time. The question is really just what you value, and where you want to spend your time.

<CalloutPlusQuote>

The more you optimize for building quickly and easily, the more you're probably just making the same thing everybody else&nbsp;is.

</CalloutPlusQuote>

I acknowledge that Tailwind might be a great solution, if that's not an issue for you. If it solves your problems, by all means, disregard my qualms as the ramblings of an old man yelling at a Tailwind-shaped cloud. It's only a tool, after all. It shouldn't be something we have to agree on if we're not working together, let alone a pillar of anyone's identity.

But to me, Tailwind _is_ a problem in and of itself. The tradeoffs may be a net benefit for your use cases, and if so, that's great. I've tested Tailwind pretty thoroughly, however, and I've concluded that it is _not_ a net positive in my case.

I do not care how fast I build, or how easily I prototype, so much as I care that I am building something uniquely good, and building it the right way.

## Conclusion: my story with Tailwind

There was a time in my career when I, along with the rest of the frontend engineers I worked with, were _forced_ to write absolutely _everything_ in Tailwind. There literally wasn't a stylesheet to even put CSS into; it was forbidden. We couldn't even edit the Tailwind config file for most of the time I was there. The powers at that company decided that was the best way to keep us all consistent. If it wasn't Tailwind, it didn't ship.

(I have yet to find a developer from outside that company who _doesn't_ consider this bafflingly ridiculous. Even the most ardent Tailwind fans cite the ability to simply break out of it and write CSS any time as a necessary and beneficial feature.)

Clearly, there was a sharp lack of representation in the room when that decision was made.

We tried reasoning with the devs in charge; tried to explain why an all-Tailwind, no-CSS approach was not just crippling our ability to execute on our designers' creations, but forcing us into questionable architecture decisions as well. (Custom components proliferated out of control, almost to the point that it barely even made sense to have components at all.)

We also explained how this change was making us miserable, by putting our best tools just out of reach and forcing us to implement crude workarounds to achieve mediocre results. We weren't happy, and neither were the designers.

Besides, this just resulted in JIT styles being abused all over the place. The compiled stylesheet on the project had ballooned to unreasonable scale, because every team was just implementing their own one-offs willy-nilly.

<CalloutPlusQuote>

Both the process and the output suffered; things were harder to build, and they turned out worse.

</CalloutPlusQuote>

Unfortunately, those explanations were summarily dismissed. It was just like the Mario Kart conversation from earlier; _why could you possibly want to go off the track? You're not supposed to do that!_

In the months that followed, many of my colleagues transferred to other teams in other areas of the company. Some (like me) left entirely. That admittedly wasn't one of my main reasons, and I suspect it wasn't anyone else's either. But still: being creatively stifled by people who don't try to understand your problems and don't really trust that you even know what you're talking about to begin with has a way of sticking with you.

I think often about what I could have said in those conversations; what might have made those more senior developers in charge of our projects realize the lose-lose situation they'd put us into.

I don't know if I could have. But since I've spent so much of this post talking about upsides and downsides, and how one person's bug is another person's feature, let's close on that.

### The two sides of the same coin

If you're a Tailwind fan, then where you might see a helpful copilot who keeps you on the track, I see a meddler who gets in my way at the worst possible moments.

Where Tailwind ostensibly saves you from context switching, it keeps me away from the places where I do my best work.

Where you see a tool that just helps you get through a part of your job you either aren't good at or just don't enjoy, I see a missed opportunity for us to collaborate and put _both_ of our skills to optimal use. (I also see a cheapening of what I do well. _Your_ code is important; _mine_ is just something to be plowed through and done well enough to move on.)

Where you see a solved problem, I see tech debt that simply hasn't come due yet; where you saw how easily you could quickly write something the first time, I saw how difficult it made future refactors and rewrites.

Where you see a tool that finally makes you free, I see a powerful snare with a lock-in mechanism that will be incredibly painful to undo.

Where you see easy prototyping and fast styling, I see a tool that's railroading me into speed-running just making all the same web pages and interfaces everybody else already is.

Where you see complexity simplified, I see a once-powerful tool, dulled and watered-down almost beyond recognition.

Where you see empowerment, I see suppression.

Where you see protective walls, I see a constricting cage.

We're both just observing the same truths from different points of view.

We're both wrong. We're both right.

It just depends where we intend to go on the course.
