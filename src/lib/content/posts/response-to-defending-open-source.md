---
title: "A response to \"Defending Open Source: Protecting the Future of WordPress\""
date: 2024-11-5
updated: 2024-11-6
categories:
  - opinion
  - web
  - wordpress
coverImage: wtf.webp
coverWidth: 1280
coverHeight: 720
excerpt: I feel it's important to issue a critical reading of Automattic's post, as it doesn't seem to offer much of a serious or objective examination of the issues at hand. Rather, the post unfortunately reads as something more akin to a puff piece, or corporate propaganda.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
  import Update from '$lib/components/Update.svelte'
  import Callout from '$lib/components/Callout.svelte'
  import TableOfContents from '$lib/components/_not-in-use/TableOfContents.svelte'
</script>

<style>
blockquote {
  font-weight: bold;
  margin-block: var(--whole-note) var(--quarter-note);
}
h2 + blockquote {
  margin-block-start: var(--half-note);
}
</style>

This post is a response to “[Defending Open Source: Protecting the Future of WordPress](https://automattic.com/2024/protecting-wordpress/),” which was recently published on Automattic's website as an explanation of the company's ongoing dispute with WP Engine.

I feel it's important to issue a critical reading of Automattic's post, as it doesn't seem to offer much of a serious or objective examination of the issues at hand.

Rather, the post unfortunately reads as something more akin to a puff piece, or corporate propaganda. (Expectedly enough, I suppose, since Matt and Automattic are currently embroiled in lawsuits against WP Engine.)

In _this_ post, I'll go through the original Automattic post, quoting key pieces, and adding the questions and context I feel are obviously missing.

(If you're new to this whole WordPress drama, I have [a whole other post covering it here](/blog/fire-matt). I guess writing about this whole thing is a new hobby of mine.)

Below, I frequently reference the author as "Matt" (meaning of course Matt Mullenweg), though I don't actually know if he himself wrote this post, in part or in whole. In fact, I doubt it's solely his; it's much more subdued than the manic, aggressive tone Matt's largely taken over the last eight weeks or more. It clearly went through a more rigorous vetting than most of his recent communications.

I say "Matt" regardless, however, because ultimately, this whole thing _is_ essentially Matt. He is Automattic, he is apparently the Foundation, and he is .org. This sequence of events was set in motion by Matt, and if these words weren't directly written by him, they were written by somebody doing what he wanted, probably trying their best to please him. Most likely, he approved the final version, no matter how involved he was in its production.

So let's set aside the technicalities: all of this is Matt, directly or indirectly, whether filtered through marketing and legal or not.

That said: let's go through the Automattic post, section by section.

## 1. WordPress is Resilient

> WP Engine’s revenue grew from $100m in 2018 to over $400m by 2024, yet their use of trademarks went beyond the bounds of fair use, including in multiple product names and positioning statements, causing confusion, leading some customers to conflate WP Engine with WordPress.

If this were Wikipedia, there would be at least five "who?" "such as?" and "citation needed" links in this sentence.

First: why does it matter what WP Engine's revenue was, or is? What's the point of bringing it up not just here, but repeatedly throughout the article, if there's never going to be any meaning attached to the figure?

Was this growth different than the growth of comparable companies over the same period? If it was, why is this important? Why is this growth apparently _bad_, both in general and for WordPress in particular?

Isn't it at least arguably a _good_ thing for WordPress if an exclusively WordPress-based company is growing?

These are questions that aren't ever addressed. We're apparently just meant to know it's bad, as a given, as though it's a natural part of the doctrine we all share.

Profits aside, we're also left to wonder: what use of trademarks went beyond fair use, exactly? Because to this point, we've seen no compelling evidence that WP Engine's use of the WordPress/WP name was either at odds with the official guidelines, or uncommon among WordPress-based companies. Again, we're apparently just meant to innately know WP Engine has done bad things here, without any concrete example given.

(As a reminder: Matt edited the official trademark guidelines after he started this whole thing. So if anyone's failed to live up to the original agreement here, it sure seems like it's not WP Engine.)

It's also worth a reminder that WP Engine _did_ somewhat alter their plan names in response to this whole mess, and add some disambiguation to their website, to make sure folks know they're not officially affiliated with WordPress. So even if they _were_ out-of-bounds, it seems like they've remediated that part of the issue.

Regardless, though: _who_ was confused, exactly? (Besides Matt's mom, of course.) What was the outcome of that confusion? Why was it harmful? I'm not aware of anyone, say, signing a contract with the wrong company by mistake, or being misled into any other kind of commitment or expenditure.

If there was so much of this confusion, and if it was so damaging, why is Matt's claim about his mom literally the only example we've ever been provided?

And, again, with every other company in the ecosystem doing exactly the same things WP Engine is doing with the WordPress and WP names, what makes it not ok in their case and ok in every other case?

> Matt blocked WP Engine’s convenient access to resources he was under no obligation to provide such as the WordPress.org plugin directory.

The `wordpress.org` domain is hard-coded into WordPress core almost a thousand times, and indirectly referenced hundreds more. Its functionality is central and vital to WordPress. Developers are required to push updates through WordPress.org.

WordPress doesn't even _work_ without WordPress.org. It is, for all intents and purposes, a part of WordPress. The fact that it's an external repository with its own domain, and not something you download with the core software, is nothing more than a necessary technical detail.

I don't think anyone who _ever_ contributed to WordPress.org—either the repo itself, or the themes and plugins it houses—realized before this whole episode that they were working on something that would ever be described as one man's personal project, or that their work could be ripped away from others (or even from ***themselves!***) at the drop of a hat.

In fact, the place where contributors worked on core itself is actually _called_ "dotorg" in the official WordPress Slack, and in other places. So the two have very, very commonly been considered one and the same, even under Matt's direct leadership.

WordPress.org has _never_, at _any_ point, been positioned as an add-on to WordPress, or a separate companion piece. It was never presented as a discrete project, and _certainly_ not one operated by one man, who could or would lock users out, in the name of a corporate dispute built on shaky claims of community disruption. (Indeed, whatever WP Engine's ostensible disruption to the community, it would be difficult to argue they were greater, or would have become greater, than the disruption Matt himself has unleashed on end users of WordPress.)

I think we all know if this were a business dispute taking place behind the scenes, without involving the users, we'd be having a whole different conversation.

But the authors who maintain the repo itself, and the plugins and themes it houses, fully believed in good faith their work was _for everyone_, "in perpetuity" (as the WP Foundation's mission statement goes).

So to take that work, intended and believed to be part of the community commons, and put it instead inside a walled garden—all because of where someone chooses to host their site—is a flagrant abuse of Matt's trust and power. And to claim it's all just his own site, like some blog he threw together on his own, is preposterous in nearly every possible sense.

Now: that's all my opinion, and I'm not a lawyer.

There's every possibility the courts side with Mullenweg on the point that he alone owns WordPress.org, and conclude he's within his rights, legally speaking, to do whatever he wants with it.

But the law is an imperfect model of justice, and being within your rights isn't the same thing as being _in the right_.

The idea that Matt doesn't "owe" access to .org is an absurd legalistic technicality on par with a childish claim like "I never said I did _all_ my homework."

And besides, we're only in this position because he fleeced the whole community into believing .org was in a different, broader, more responsible set of hands than his and his alone.

In my view, WordPress.org ***is*** a part of WordPress. It ***is*** owned by the community.

Matt just managed to steal it without anyone noticing until now.


> WP Engine responded predictably—issuing multiple legal filings—while ignoring invitations for open debates.

Let's call a spade a spade: demanding debates is a childish move. It's childish to believe the only reason someone doesn't acknowledge your indisputable correctness is that you haven't had the opportunity to crush them in the suffocating grip of your cold, hard reason. It's childish to assume there are no other valid reasons a person might disagree with you, and/or won't debate you. Frankly, It's childish to think you can change their mind with a debate anyway.

Maybe you're not as right as you think you are. Maybe they've already looked into all your points and have very good reason to disagree with them.

Maybe they know this whole thing is just a circus.

Maybe they just don't want to waste their time.


> WordPress will continue to thrive. The ecosystem is strong and resilient, supported by thousands of contributors and millions of users.

Yes, thousands of contributors who never believed they were working on one man's website, or that their work could or would ever be blocked off from many of those millions of users (or, for that matter, outright stolen, as with Advanced Custom Fields).


> Silver Lake and WP Engine are outliers. The overwhelming majority of WordPress users and businesses operate ethically and collaboratively—or at least neutrally.

We desperately need to see some actual, tangible data and examples here.

What is WP Engine doing that's so different from every other host in the space? All we've heard up to this point is "they make lots of money." So why are they an outlier? What do the "overwhelming majority" of other businesses do that makes them so ethical and collaborative, and how can you demonstrate WP Engine isn't doing those things?

Frankly, this article does more to convince me that Matt just wants to extort and squash his largest competitor than to convince me this is somehow about the greater good of the WordPress community. Otherwise, it would focus on the actual, tangible harms WP Engine is doing or would do, instead of just throwing big numbers and scary terms at us over and over.

The _only things_ Matt points to in this _entire_ piece are the size and profitability of WP Engine, and the fact that they're owned by private equity.

But he never connects the dots; never shows how either of those are actually causing real harm to WordPress or its users. (All the while, of course, any one of us can point to  countless ways Matt's actions since WCUS _have_ caused very real damage to users, and continue to do so.)


> We’re working to protect you. Our actions are focused on defending the WordPress community.

I'm sorry, but no, they are not. Throwing WP Engine's customers under the bus and exposing them to multiple vulnerabilities that they can't update because _you_ cut off their access isn't "protecting" them. That isn't what you do to people you consider members of your community.

This is like the mayor cutting a suburb off from the power grid, over a dispute with the power company. You aren't helping people, and you aren't promoting community. You're hurting people, and you're tearing the community down.


> Choose ethical hosting providers: Hosts that prioritize open source principles help keep the ecosystem healthy.

Again: show us some actual data here, if this is what you're coming in with. (And no, Matt's mostly made-up figures from his WCUS talk don't count, as I already explained at length in my [previous post on this whole mess](/blog/fire-matt).)

What other hosting providers are doing more, specifically? What are they doing differently? How does their scale compare to WP Engine's? Do as many people rely on the products they contribute to?

For that matter: how do you even _count_ what WP Engine is doing? Where would you even begin to make a fair comparison?

The fact that Matt isn't interested in even asking this question is rather telling, in my view.

Even if WPE isn't contributing as many hours specifically to core as Automattic is (and arguably: they shouldn't be expected to), they're clearly building things for the community and drawing people into it. WordPress has grown as WP Engine has grown. People keep using their stuff. Their products and plugins are obviously good for WordPress, generally speaking. Lots of them aren't even used by people who host on WP Engine. (I, for one, would use Local and ACF for any WordPress site I built, even if I didn't host with WPE.)

So why is Matt's personal math all that counts?

And more importantly: why won't he even show his work?

Not that any of this matters, actually, because I'm sorry: it's open-source software. You don't just get to extort people out of nowhere if you decide you don't like how they're using it.


## 2. Private Equity vs. Open Source

Honestly, I don't even know if there's much quotable in the next two sections. This one mostly just describes how capitalism works, while expecting the reader to do the work of equating capitalism with WP Engine. (It helps if you forget Automattic is _also_ a for-profit company, I suppose.)

A lot of people can get down to the anti-capitalist blues, myself included. But it doesn't really hit the same way when it's played by a guy worth around half a billion dollars, talking about his own for-profit company's biggest competitor.

Aside from "private equity is usually bad," there's very little of meaningful substance here. A lot of it is bad-faith tactics and fallacies.

[Spooky Halloween voice]: _Beware, children! I can name not one, but **two** open-source projects that took investor money and failed_!

_Did you know WP Engine is worth more now that it was five years ago!? Woooooooo~_!

_That's because…they **bought things** and **did marketing**_! [Sound of children screaming]

WP Engine is bad because they make money, apparently. (Again: this does more to promote the idea that Matt's focused on them because of their threat to his business than because they pose any real threat to the community or open source project.)

Matt's company also makes money. But he wants us to know _his_ company does it the one true, pure way, and WP Engine does it the bad, evil way that will destroy everything (without doing much to spell out what the distinction is).

Matt points to how much his company does for WordPress, but since he's the only arbiter of what counts, everything on his side gets tallied while nothing on WP Engine's side does. It's hard to even take it seriously.

If I had tried to submit this post in my community college English class, I would've gotten it back with marks all over this section.


## 3. Silver Lake & WP Engine

This whole section doesn't even really talk about WP Engine; it's just a Cliff's notes version of bad things private equity firms have done in the past, which once more fails to connect the dots on why and how that translates to harm or danger for WordPress itself, via WP Engine or otherwise.

We're again left to conclude on our own that WP Engine will do to WordPress what private equity has done to, say, nursing homes, with nothing provided to get us from point A to point B.

Do I believe private equity is bad? You betcha.

Do I think WP Engine does some shitty things in the name of profit? 100% yes.

But do I believe there was such an imminent threat to WordPress that it warranted _anything_ Matt's done in the past two months? _Absolutely not_.

Besides: if private equity is going to hurt WP Engine, how does _that_ translate to harm for the broader ecosystem?

It's not like WP Engine has the market cornered. There are plenty of other WordPress hosts, products, and services. To the extent WP Engine "enshittifies" their own offerings (to borrow the term), isn't that just hurting _them_?

Maybe Matt is convinced that, if left unchecked, WP Engine _would_ eventually buy up enough of the market to singlehandedly cause its collapse. But it strikes me that the right move in that case would've been to just keep doing what he was already doing—i.e., growing WordPress.com, and supporting both core and tertiary products—rather than starting a war over some specious future crime that hasn't been committed yet.

This section does nothing to provide any persuasive context, or explain why WP Engine is somehow the one profitable company doing questionable things in the name of growth that happens to be a "danger." (There are, after all, plenty of other companies making questionable decisions in the name of maximizing profits, both in the WordPress space and beyond it.)

By the way: it's worth mentioning Matt has taken money from about a dozen investors himself. One of the other two people on the Foundation board with him is a Partner at a private equity firm. His lawyer is a board member of a venture capital firm (and [a really awful human](https://newrepublic.com/article/160481/neal-katyal-depravity-big-law)). I'm sure that's not the complete list of the ways Matt himself is tied up in VC money and/or private equity.

So yeah, we can all get behind the core message, but it looks mighty hypocritical in this context—not to mention suspiciously targeted.

Another instance of the double standard; when Matt does it, it's the right way, and when WP Engine does it, it's the wrong way.


## 4. Calling out WP Engine

> For nearly a year, Matt has attempted to constructively engage WP Engine on proper use of the trademark and the need for them to contribute to the community from which they profit.

Citation _very much_ needed here.

Matt's repeatedly claimed he's been trying "for years" to get WP Engine on what he sees as the right path. So it's interesting that now it's just "for nearly a year."

Why "nearly" now? When _did_ this all start, exactly?

And more importantly: where are the receipts?

Matt [published a timeline and terms sheet](https://automattic.com/2024/10/01/wpe-terms/) back at the start of October, but it really didn't show _any_ communication between WPE and Matt/Automattic on this topic _at all_—except for the term sheet itself, which was dated September 20 (i.e., the same day Matt went on stage at WCUS to publicly excoriate WP Engine in his keynote presentation).

So if this conversation has been going on so long: where's the proof? Show us some emails, or contracts, or _something_. Surely you didn't try to negotiate multimillion dollar contracts without a paper trail…right?

We've seen nothing to prove Matt's version of events, and the only document he _has_ produced actually does more to contradict it than support it.

I don't think there's anything Matt can do at this point to regain his credibility, personally, but it would at least help if he presented _some_ kind of evidence these talks even happened. (WP Engine says they didn't.)

If this _wasn't_ the sudden extortion attempt leveraged against a rival business it appears to be, why do we still have zero evidence demonstrating that, nearly seven weeks later?

Are we really meant to believe the chronically online CEO who can't stop himself from constantly posting, and who so desperately needs everyone on his side,  has exculpatory evidence that he's just _choosing not to share_?

That's a hard sell.


> Not getting anywhere, Matt suggested that WP Engine either execute a license for the Foundation’s WordPress trademarks or dedicate 8 percent of its revenue to the further development of the open source WordPress platform. This is a modest request, considering WP Engine quadrupled its revenue between 2018 and 2024, now generating $400M ARR by leveraging the value created by the WordPress open source project and its trademarks.

I want to break this one down a bit.

First off: the term sheet demanded 8% of ***gross*** revenue. There are a lot of words to describe that figure, but "modest" is the opposite of most of them.

8% of gross revenue would be a ***massive*** chunk of any company's income—***way*** more than 8% of net profits—and I think you'd struggle to find comparable examples in modern business. It is an outrageous, very much _not_-modest ask.

Secondly: Matt keeps presenting this like an either/or option, but it wasn't. Look at the terms sheet Matt himself provided: that 8% gross revenue was either going directly to Automattic, ***or*** WP Engine could pay its own workers 8% of gross revenue, and then _send those people to Automattic_ to do work at Matt's sole discretion.

So it was never a "pay, or alternatively, contribute" situation, like Matt wants it to sound. It was actually "pay directly, or pay indirectly." The price tag was the same in both scenarios. There was only ever the one option, just with two payment methods.

Next up: just a few paragraphs prior to this, Matt mentioned WP Engine owns “advanced custom fields, Better Search Replace, WP Migrate, Flywheel, Array Themes, and StudioPress (Genesis Framework)”—all of which are used and relied on by millions of WordPress users.

So why is Matt _now_ saying WP Engine's continued work on those properties doesn't count as giving back to the community?

Yes, I know the free versions contain marketing. Big deal. I can still use them for free, and I do, and so do millions of other WordPress users. Somebody's footing the bill for that, and it's WP Engine. So why doesn't that count, in Matt's estimation?

And again: why does it matter what WP Engine's ARR is? There isn't anything saying a company is obligated to pay _x_ when they reach a certain size. You can make a reasonable argument WPE _should_ contribute more, certainly—and I think most people would agree—but you can't argue they're _required_ to. Nobody is.

If Matt's going to hide behind the razor-thin notion that he doesn't legally owe access to WordPress.org to anyone, it seems wildly hypocritical of him to believe WP Engine _does_ legally owe him a massive chunk of their revenue.

And once more: it ***was*** Matt who was supposedly owed, and not WordPress, or the community, or whatever other ephemeral entity Matt wants to hide behind. Matt didn't try to force WP Engine to give to the Foundation, or to WordPress.org. His own term sheet explicitly specified the money would go, either directly or indirectly, _to his own for-profit company_ (i.e., Automattic).


> In contrast, WP Engine generates approximately $400M annual revenue, while contributing minimally to the open source project.

Matt _really_ wants you to know WP Engine's ARR is $400m. This is literally the third time this article has said it.

Did you know Matt Mullenweg's net worth was recently projected to be around $400m?

Just an interesting tidbit.

Anyway, we've already covered how the "contributing minimally" piece is deeply spurious.


> For over a year now, Automattic has been trying to resolve the matter in good faith.

Ok, is it _over_ a year, or _nearly_ a year? Or _years_, as Matt has said before?

We deserve some receipts here, if they exist. Otherwise—and as it very much appears currently—this was _not_ any kind of "good faith" attempt; it was blackmail.


> Unfortunately, WP Engine has refused to correct inappropriate trademark usage, pay for a license, or give back in kind.

As covered above: the "give back in kind" deal Matt offered was for WP Engine to pay 8% of their ***gross*** revenue to Automattic, one way or the other. So yeah, of course they didn't do that.

As for the license and trademark usage: if WP Engine has to pay for a license, why doesn't anyone else? What's different about them? Why does every other company get a pass and they don't?

For a post that's supposed to answer questions, this piece sure does create a lot of unanswered ones.


## 5. Standing up for WordPress

> At its heart, WordPress is a platform built on the principles of freedom, collaboration, and openness. It has thrived for over two decades because of the commitment of the community and its leaders to these ideals to ensure WordPress will continue to serve the many, not the few.

If you could read that without rolling your eyes, you're stronger than I am.


> WP Engine has one of the highest revenues of any commercial service provider in the WordPress ecosystem, paired with some of the most aggressive marketing that historically has misused the WordPress trademark, yet one of the lowest ratios of contribution to the WordPress core.

Citation ***desperately*** needed.

What misuse!? What did WPE do that no other company has done? How was the marketing so "aggressive" as to warrant this autocrat(t)ic shakedown?

Why does Matt care so much about us knowing how much WP Engine is worth?

(My personal theory is that Matt so deeply believes he's the main character, we'll all fall in line right behind him when we learn somebody's beating him at his own game. But that's pure speculation.)


> Silver Lake and WP Engine repeatedly refused to improve the ratio of taking and giving—signaling clear risk to the future of WordPress.

Again: massive citation needed.

What is the risk, exactly? Seems to me like, if anything, WP Engine is actually doing a _lot_ to make WordPress better, and to bring more people into it.

Anyway, people clearly like them. They're obviously making WordPress work well for lots of users.

Did you know their ARR is $400m? I can't remember if that's come up.

Sorry they're making money while they do that?

Sorry they have a marketing team?

What are we supposed to be upset about here, exactly?


> Matt’s actions were not retaliation or retribution. They were to defend the future of WordPress from systemic interference and to draw attention to this cause.

Glad I wasn't drinking anything when I read that, or I'd be cleaning off my monitor right now.

_Everything_ Matt's done on September 20th and since has been retaliation. He's retaliated against WPE, against their users, against his own employees, against _former_ employees, agains people forking WordPress, against other people in the ecosystem, against Tumblr users…against pretty much anyone and everyone who has anything negative to say about him or his one-man crusade.

People who don't want retaliation or retribution don't act like Matt has been acting for the past two months (and longer).


> While restricting access to the WordPress.org plugin directory may seem disruptive, these measures were carefully considered. WP Engine was able to deploy its own equivalent within days, and WP Engine users retained access to downloading and uploading plugins directly.

I **cannot believe** this part is actually in here! 😱

Matt is actually arguing his abuses of power _weren't bad_, specifically _because there was a workaround_!

Forget that upwards of 90% of users probably aren't going to do that workaround, because it's orders of magnitude more work for them.

Forget that Matt unjustly cut off people he should've never targeted, from a resource that nobody should ever lose access to, and that shouldn't have ever belonged solely to him in the first place: _he's actually arguing it's a good thing_!

Matt's basically saying: “_you see, poisoning the community's well wasn't evil, because they were able to dig a new one!_”

I am genuinely astounded at the mental and ethical gymnastics on display here.


> We’ve been careful to minimize disruption to the broader ecosystem…

I guess WP Engine's users and customers and employees don't count as part of the broader ecosystem?

Kinda seems like a healthy community shouldn't be just fine throwing some of its members under the bus and acting as though they don't matter, based solely on where they choose to host their site.

_That_ sounds like a threat to a community, to me.


> …and whenever possible have helped users and businesses transition smoothly and easily.

And by "helped users and businesses transition smoothly and easily," Matt means, "taken the opportunity to poach customers from a rival."

Pressable and WooCommerce—both owned by Automattic—have poured a lot of money and effort into marketing to WP Engine's customers. Matt himself has speculated, _on the record_, about being able to buy out WP Engine once he's managed to artificially reduce their value enough.

This isn't "guarding the community." This is more like a mafia-style bust-out.


> Our actions target WP Engine, which is influenced by its private equity backer Silver Lake.

Wait—WP Engine is backed by Silver Lake!?

Huh. I guess I missed it the first (literally) ten times this article said it.

While Matt's actions _do_ target WP Engine in the sense that he's obviously trying to weaken their business, Matt's also completely content to let WP Engine's users—also very much members of this community Matt claims to care so much about—get caught in the crossfire.

This isn't the way you defend a community. This is the way you shake down a rival.

## 6. What this means for you

> The functionality, security, and stability of your WordPress site are not affected by these actions.

...Unless you host on WP Engine, in which case: have fun drinking the poisoned well water. (You're welcome.)


> The vast majority of WordPress plugins and themes continue to operate as normal.

Excluding the many that have asked to be removed from the repo entirely over all of this. (Oh, also, Automattic took over some of those, and threatened to do the same with others. Yay, normal!)


> For the vast majority of users, your site’s functionality, security, and performance will remain unchanged.

Excluding the many, many, thousands of you who host on WP Engine, and who are being actively punished for that choice, even though you yourselves did literally nothing wrong. ✨ _Community_! ✨

> **Are plugins or themes being removed?**
>
> No. The beauty of open-source is freedom. WordPress.org has blocked login access to WP Engine and affiliates. The vast majority of plugins and themes remain available and unaffected.

There _are_ a whole bunch of developers who don't feel safe building for WordPress anymore, and who have either abandoned the platform or are running away from the repo screaming because they know they can't trust Matt anymore, but I guess we're not mentioning them.


> The WordPress community thrives on open dialogue and collaboration.

Matt literally put a checkbox on WordPress.org to keep anyone affiliated with WP Engine in any way whatsoever from having a voice or getting involved at all.

Matt has also now _twice_ bought out dissenters to get them to leave his company. He's monitored employee emails for communications from Blind, threatened people who talk to the media, demanded people take down pro-WP Engine posts, and tried to infiltrate the Automattic alumni Slack.

Not to mention how he's barged in on virtually any online forum where people are talking about this situation and picked fights with the people there who didn't agree with him.

So excuse me for not buying the "open dialogue" crap in the slightest bit.

A hell of a lot of people at WP Engine _were_ collaborating. Then they got locked out.

Even more people at Matt's company were collaborating; then their boss demanded loyalty or else, and they left. (And then that happened a second time.)

The values in Matt's words very clearly fail to align with the values in Matt's actions.


> Whether you’re a site owner, developer, or host, your voice matters.

Unless it disagrees with Matt's voice. Then you'll be forced to take your posts down.


> Visit our community forums and participate in discussions about the future of WordPress and how we can continue to protect the platform.

Incidentally, these forums are hosted at WordPress.org, and therefore, _also_ evidently owned by Matt himself, who owes nothing to anyone.

What openness!

Such community.
