---
title: Classic rock, Mario Kart, and why we can't agree on Tailwind
date: 2023-09-25
updated: 2023-09-25
categories:
  - css
  - personal
  - opinion
  - web
coverImage: tailwind.svg
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

Tailwind is nearly as ubiquitous as it is polarizing these days. (I trust if you've been interested enough to read this far, I don't need to cite any sources on that score.)

Proponents show a near cult-like devotion to Tailwind, some even going so far as to claim it's "fixed" CSS—or at the very least, made it manageable and predictable in a way it wasn't for them before. Most frontend frameworks and products feature a first-class Tailwind integration, due to its popularity.

Detractors, on the other hand, claim Tailwind is messy; it gets in the way; it violates core fundamentals of web development; it diminishes the power of CSS; and/or that it does the _opposite_ of what it's supposed to, adding complexity and making projects even _harder_ to maintain.

Many who use Tailwind never want to go back; many who _don't_ never want to.

How could we possibly disagree so sharply?

After using Tailwind for the last year—both professionally and on a few small personal projects—I've come to what might just be the most unpopular opinion of all, in regards to that question:

**Both sides are right.**

…Ok, ok, I can hear the boos. Nobody likes a centrist. But hear me out.

We won't ever get anywhere debating the merits or flaws of Tailwind, for the same reason my brother and I never persuaded each other on music.

<CalloutPlusQuote>

We could've dissected Billy Joel and Sufjan Stevens all we wanted. But it didn't matter, because our disagreement ultimately started before either one of us ever pressed the play button.

</CalloutPlusQuote>

It turns out, he and I actually saw every artist and album in pretty much exactly the same way.

We just never agreed on what was a feature, and what was a bug.

Likewise, I suspect most people on opposing sides of the Tailwind debate actually see Tailwind quite similarly.

Our contention isn't with Tailwind; it's with the valuations we made long before we ever chose our tools. Where one of us sees a selling point, the other sees a flaw.

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

The better you are, the more a feature designed to augment your skills instead begins to inhibit them. But whether it makes you better or worse--and to what degree--will depend entirely on where you're coming from.

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

That's not at all my intent; I only mean to point out that if Tailwind is your thing, it's probably because we're coming from different places and value different things.

Whether Tailwind helps you do the things you want to do, or whether you (like me) feel that it just grabs the steering wheel away from you, that doesn't inherently mean anything good, or bad, about either one of us. It just means we have two different approaches.

</SideNote>

## There are no benefits without tradeoffs

For the most part, it's perfectly fine if we see the same thing in two different, even opposite ways. However, there's one universal truth I think it's important we agree on as common ground, namely: _benefits always come with tradeoffs_.

<CalloutPlusQuote>

That is: complexity always exists, even if it's remanded to a place you don't regularly experience it.

</CalloutPlusQuote>

When things seem to get better and simpler, we're actually just experiencing the _upside_ of some architectural decision. That decision, whatever it was, has downsides elsewhere; some other part of the chain, further away from our view, is now also more complex than it used to be.

Don't get me wrong; that's still usually a good thing. The new set of tradeoffs is often preferable to the old set (though not always). If we cleaned up a small mess in the living room by making a bigger mess in the bedroom, we might still consider that a net win.

Regardless, though: we should be incredibly skeptical of any product that claims it's eliminated the complexity—destroyed it, removed it, turned it into nothing—without acknowledging it had to go _somewhere_, and that other drawbacks were created by shifting it to that new location.

Problems in tech don't _vanish_; they simply _move_.

An example from the world of frontend might be: our build tools. Before the likes of Vite and Webpack (and before them, Grunt, Gulp, Browserify, and others), coercing our frontend code into a minimal bundle that worked cross-browser and -device was a painstaking task we dealt with on a regular basis.

Now, however, we've _moved_ that complexity into a little Pandora's box called `node_modules`. Most of us probably don't even think of the complexity day-to-day. But it's still very much there—only now, when something goes wrong, it goes _extremely_ wrong, as an inscrutable failure somewhere in the opaque toolchain can render our work inoperable for hours or possibly even days at a time.

<CalloutPlusQuote>

The problem never really dies; we just keep pushing its volume and frequency in opposite directions.

</CalloutPlusQuote>

Ok, fine. Why is this all important?

Because Tailwind is generally marketed (and spoken of by many of its proponents) as a framework that's achieved this impossible task of obliterating CSS's complexity from existence.

If you would make this argument, I would firmly dissent. But I would also think you're probably right _in your case_. You likely don't work in the areas where the tradeoffs are, so they seem like they don't exist to you.

You never go into the basement—or at the very least, don't see the mess down there as a problem. As long as the living room is clean, that's all you care about.

<CalloutPlusQuote>

Boring and lazily centrist as it may sound: I think we have to agree that Tailwind and vanilla CSS are both just unique sets of tradeoffs.

</CalloutPlusQuote>

CSS _does_ have myriad complexities and pitfalls, and Tailwind admittedly smooths out many of those rough edges.

But CSS is _also_ an incredibly powerful programming language, which Tailwind dilutes and diminishes, all while introducing pitfalls of its own.

The only _invalid_ point of view is that you can have all benefits and no downsides.

It all depends.

It all _always_ depends.

## Assembly lines and artisans

I suspect that perhaps the main thing that separates pro-Tailwind folks from pro-CSS folks, as a broad and coarse generalization, is what part of building interfaces they enjoy.

If you're a hardcore Tailwind fan, you might see it as the thing that finally got rid of the hard parts of CSS, curbed the complexity, and made styling manageable for you. It made you _fast_, and I'd guess you probably like fast, because you're just trying to get through this part in decent shape so you can get on with the other parts of the job that you like better and/or are better at.

On the other side, if you're a seasoned frontend dev with a strong mastery of CSS, you may see Tailwind as a clumsy, blunt instrument that dismantled the best parts of CSS, diluted its power, and muzzled your abilities with it. I suspect if you're in this camp, speed wasn't an issue for you (or at least, not a priority); you were more concerned with the craftsmanship of your product.

Both of those are fully valid points of view. And, in fairness, there exists a rich gradient of options between the two. You can use Tailwind only as much as you choose, and opt to reach for hand-authored CSS the rest of the time. The question is really just what you value, and where you want to spend your time.

I acknowledge that Tailwind might be a great solution for you. If that's the case: I'm happy for you. Please, by all means, continue using it if it solves your problems, and feel free to disregard my qualms. It's only a tool, after all. It shouldn't be something we have to agree on if we're not working together, let alone a pillar of anyone's identity.

But to me, Tailwind _is_ a problem in and of itself. The tradeoffs may be a net benefit for your use cases, and if so, that's great. I've concluded that Tailwind is _not_ a net positive in my case.

## Conclusion: my story with Tailwind

There was a time in my career when I, along with the rest of the frontend engineers I worked with, were _forced_ to write absolutely _everything_ in Tailwind. There literally wasn't a stylesheet to even put CSS into; it was forbidden. We couldn't even edit the Tailwind config file for most of the time I was there. The powers at that company decided that was the best way to keep us all consistent. If it wasn't Tailwind, it didn't ship.

(I have yet to find a developer from outside that company who _doesn't_ consider this bafflingly ridiculous. Even the most ardent Tailwind fans cite the ability to simply break out of it and write CSS any time as a necessary and beneficial feature.)

Clearly, there was a sharp lack of representation in the room when that decision was made.

We tried reasoning with the devs in charge; tried to explain why an all-Tailwind, no-CSS approach was not just crippling our ability to execute on our designers' creations and forcing us into questionable architecture decisions (custom components were out of control, almost to the point that it barely even made sense to have components at all).

We also explained how this change was making us miserable, by putting our best tools just out of reach and forcing us to implement crude workarounds to achieve mediocre results. We weren't happy, and neither were the designers.

Besides, this just resulted in JIT styles being abused all over the place. The compiled stylesheet on the project had ballooned to unreasonable scale, because every team was just implementing their own one-offs willy-nilly.

<CalloutPlusQuote>

Both the process and the output suffered; things were harder to build, and they turned out worse.

</CalloutPlusQuote>

Unfortunately, those explanations fell on deaf ears. It was just like the Mario Kart conversation from earlier; _why could you possibly want to go off the track? You're not supposed to do that!_

In the months that followed, many of my colleagues transferred to other teams in other areas of the company. Some (like me) left entirely. That admittedly wasn't one of my main reasons, and I suspect it wasn't anyone else's either. But still: being creatively stifled by people who can't understand your problems and don't really trust that you even know what you're talking about to begin with has a way of sticking with you.

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
