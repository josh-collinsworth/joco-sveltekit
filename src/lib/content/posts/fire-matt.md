---
title: If WordPress is to survive, Matt Mullenweg must be removed
date: 2024-09-27
updated: 2024-10-28
categories:
  - opinion
  - web
  - wordpress
coverImage: beatings.webp
coverWidth: 1920
coverHeight: 1388
excerpt: I believe Matt Mullenweg's abuses of his unilateral, unchecked powers prove that it is in the best interest of the entire WordPress community that he be removed from power immediately.
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

<Note>

This post is a little more hasty than some of my others, in the interest of keeping up with unfolding events. I hope you'll bear with the jumble of thoughts. It's being actively edited; use the table of contents below to jump to any updates.

Cover image from [this Etsy store](https://www.etsy.com/listing/1341940035/the-beatings-will-continue-until-morale) (unaffiliated).

</Note>

<!-- <TableOfContents /> -->

<div class="toc-wrap s-QxGJVNas-JkL"><aside class="toc s-QxGJVNas-JkL"><h2 class="s-QxGJVNas-JkL"><span class="opening-bracket s-QxGJVNas-JkL" aria-hidden="true">[</span>
				Table of contents
        <span class="closing-bracket s-QxGJVNas-JkL" aria-hidden="true">]</span></h2> <ul class="toc-list s-QxGJVNas-JkL"><li><a href="#wait-who-are-you-and-why-do-you-care">Wait, who are you and why do you care?</a></li><li><a href="#im-sorry-what-happened">I’m sorry, what happened?</a><ul><li><a href="#automattic-approaches-wp-engine-to-offer-a-license">Automattic approaches WP Engine to offer a “license”</a></li><li><a href="#matts-rejected-so-he-tries-new-strategies">Matt’s rejected, so he tries new strategies</a></li><li><a href="#waitwhats-matts-actual-deal-why-is-he-doing-this">Wait—what’s Matt’s actual deal? Why is he doing this?</a><ul><li><a href="#matt-claims-wp-engine-is-misrepresenting-itself">Matt claims WP Engine is misrepresenting itself</a></li><li><a href="#matt-claims-wp-engine-is-selling-a-cheap-knock-off-of-wordpress">tt claims WP Engine is selling a “cheap knock-off” of WordPress</a></li><li><a href="#matt-says-wp-engine-doesnt-give-back-enough">Matt says WP Engine doesn’t give back enough</a></li></ul></li><li><a href="#an-aside-on-motivations-and-justifications">An aside on motivations and justifications</a></li><li><a href="#the-wordcamp-us-fallout-and-matts-abuse-of-power">The WordCamp US fallout and Matt’s abuse of power</a></li><li><a href="#wp-engines-reaction">WP Engine’s reaction</a></li><li><a href="#matt-melts-down">Matt melts down</a></li><li><a href="#matt-goes-nuclear">Matt goes nuclear</a></li></ul></li><li><a href="#updates-everything-thats-happened-since-october-1st">Updates: everything that’s happened since October 1st</a><ul><li><a href="#101-matt-talks-taking-over-wp-engine">10.1: Matt talks taking over WP Engine</a></li><li><a href="#101-automattic-releases-the-terms-sheet-which-kinda-backfires">10.1: Automattic releases the terms sheet, which kinda backfires</a></li><li><a href="#102-wp-engine-files-suit-against-matt-and-automattic">10.2: WP Engine files suit against Matt and Automattic</a></li><li><a href="#103-matt-offers-buyouts-to-automattic-employees">10.3: Matt offers buyouts to Automattic employees</a></li><li><a href="#104-159-automattic-employees-take-the-buyout-matt-hires-a-famous-lawyer-whos-a-horrible-human">10.4: 159 Automattic employees take the buyout; Matt hires a famous lawyer who’s a horrible human</a></li><li><a href="#105-matt-gleefully-exposes-a-vulnerability-in-acf-but-prevents-wpe-from-fixing-it">10.5: Matt gleefully exposes a vulnerability in ACF, but prevents WPE from fixing it</a></li><li><a href="#1011-matt-adds-a-vague-anti-wp-engine-checkbox-to-wordpressorg-but-fails-to-clarify-why-all-while-playing-the-victim">10.11 Matt adds a vague anti-WP Engine checkbox to WordPress.org, but fails to clarify why, all while playing the victim</a></li><li><a href="#1012-matt-commandeers-acf-using-wordpressorg-to-steal-a-competitors-product">10.12 Matt commandeers ACF, using WordPress.org to steal a competitor’s product</a></li><li><a href="#1015-previous-lawsuits-against-matt-come-to-light">10.15: Previous lawsuits against Matt come to light</a></li><li><a href="#1015-matt-responds-to-the-other-lawsuits">10.15: Matt responds to the “other lawsuits”</a></li><li><a href="#1017-matt-wars-against-dissenters-with-second-buyout-offer-threatens-employees-who-speak-out-intercepts-employees-emails">10.17 Matt wars against dissenters with second buyout offer; threatens employees who speak out; intercepts employees’ emails</a></li><li><a href="#1021-wp-engine-files-an-injunction-to-regain-access-to-wordpressorg">10.21: WP Engine files an injunction to regain access to WordPress.org</a></li><li><a href="#1023-matt-responds-saying-wordpressorg-belongs-to-him-and-him-alone">10.23: Matt responds, saying WordPress.org belongs to him and him alone</a></li><li><a href="#1024-its-been-a-week-and-matts-apparently-still-balking-at-that-latest-employee-buyout-offer">10.24: It’s been a week, and Matt’s apparently still balking at that latest employee buyout offer</a></li><li><a href="#1028-matt-cries-freedom-of-speech-but-censors-speech-he-disagrees-with">10.28: Matt cries freedom of speech, but censors speech he disagrees with</a></li></ul></li><li><a href="#if-matt-cares-about-wordpress-he-should-step-down-immediately-and-if-matt-wont-step-down-he-should-be-removed">If Matt cares about WordPress, he should step down immediately. And if Matt won’t step down, he should be removed.</a></li><li><a href="#addendum-on-the-future-of-wordpress">Addendum: on the future of WordPress</a></li></ul></aside></div>

<p id="intro">There are some people who think being right about something confers the right to do whatever they think should be done about it; a license to act however they see fit in order to correct what they see as wrongness.</p>

This, of course, is never the case. No matter how egregious the original infraction, there are some responses it never justifies. That's such common knowledge it's proverbial: two wrongs don't make a right; the ends don't justify the means; etc.

Doing the wrong thing for the right reason doesn't makes it the right thing.

Matt Mullenweg appears to have decided those truisms don't apply to him, as he's effectively spent the week causing destruction and collateral damage to countless WordPress sites and users, in his fight with one of the community's landlords.

Matt has, for far too long, enjoyed unchecked powers at the top of WordPress—powers which are all too often a direct and flagrant conflict of interest. And while we've seen this power abused before, we've never seen it on this scale.

Some might agree with Matt's original reasoning. But his egregious actions and reactions since then have utterly nullified any previous merit.

A line has been crossed, and the entire community is worse for it.

<CalloutPlusQuote>

I believe that if WordPress is to survive, let alone thrive, Matt Mullenweg must be removed from all forms of official WordPress leadership, as expediently as possible.

</CalloutPlusQuote>

## Wait, who are you and why do you care?

Let's get this out of the way right off: I'm not the best person to be talking about this. I haven't really been involved in WordPress for about five years now. Honestly, I couldn't tell you the last time I even logged in to a WordPress site.

That said, however: I spent some six or seven years of my life deep in the WordPress world. I built and customized WordPress sites for clients as a designer; I taught a WordPress development course (focused on building custom themes in PHP) for about five years; and I worked in support for Flywheel, a managed WordPress hosting company, for a little over five years. It was there I transitioned to full-time frontend work, building tools to help support WordPress sites.

So while I've been out of the WordPress game for a good while now, I still might be considered an expert next to your average Joe. I'd like to think I could still sling some theme templates with the best of 'em. (Hell, some days I even get a little nostalgic and think about booting up a Local site just for fun.)

You might have spotted the word "Flywheel" up there and realized that company was acquired by WP Engine—the company with which Mullenweg is publicly feuding at the moment—back in 2019. That might reasonably raise questions of my objectivity, so let's get this out of the way:

Yes, I used to work for WP Engine. I even kinda liked them, for a while (mostly while they just kinda left us alone for the first year or so). But I wouldn't say my time at the company left a good taste in my mouth.

We don't need to dredge up a bunch of old and buried stuff that isn't really important anyway, but suffice to say: I really don't have any reason to be a WP Engine cheerleader. Most of the people I knew there have left, and I've watched from the sidelines as the company has implemented a bunch of scummy policies and shady sales tactics to squeeze money from their customers and make it harder to leave. (Oh yeah: they also like to brag about record growth and profits in the midst of layoffs.)

On most days, if you wanted to have a conversation about how much WP Engine sucks, frankly, I'd be a happy participant.

So this post might be a lot of things, but I can assure you it's _not_ me defending my old company just because I used to work for them. I've got literally no reason to do that.

<CalloutPlusQuote>

To the extent I'm on WP Engine's side, it's not because of any sense of loyalty to the company or to the remaining good people I know there; it's because I believe what Matt's doing is deeply wrong and foolishly destructive.

</CalloutPlusQuote>

I'll also go on record as saying I got pretty far in the interview process at Automattic once, a few years back. And, since we're being honest, it was the absolute _worst_ interview process I've ever taken part of as a web professional (though the people themselves were lovely). But that alone ain't gonna get a post out of me. I'm not wasting my time and yours just to gripe about an interview I chose to drop out of over three years ago. Just thought it merited a mention.

I still regarded Matt Mullenweg himself pretty highly after that, up until the last year or so. This post isn't long enough to get into the details, but Matt had already become a pretty problemat(t)ic character well before any of this went down.

So in summary: I'm not a big fan of either party, and I don't have any good reason to side with either one of them.

I _am_, however, somebody who still cares deeply about WordPress. It's what gave me my start, and I still recommend it to a lot of people when they ask me what system might best suit their needs.

It's a wonderful community, all in all, and despite my inactivity, I still feel invested in WordPress, and interested in seeing it continue to be a productive way to democratize the web.

Finally: I am not a lawyer, and since it's Friday now and this feud had already reached lawyers-involved level by Monday morning, I should be careful to clarify any legal commentary here is expressly my personal, non-expert opinion.

## I'm sorry, what happened?

For those of you who haven't been following the story thus far (read: aren't chronically online web nerds like me), let's hit the highlights.

### Automattic approaches WP Engine to offer a "license"

Sometime in or around July of this year, [Automattic](https://automattic.com/) (Matt Mullenweg's for-profit company, which owns, among other things, [WordPress.com](https://wordpress.com/), a major WordPress hosting company) reached out to [WP Engine](https://wpengine.com/) (also a for-profit company that offers WordPress hosting, and probably Automattic's largest business rival).

Automattic was offering WP Engine some kind of "licensing," at a rate of 8% of total business revenue, adding up to the eye-popping sum of several million dollars per year.

WP Engine apparently turned down this offer, presumably because _it doesn't appear they actually need any license_. The term "WP" is explicitly not covered by the [WordPress trademark policy](https://wordpressfoundation.org/trademark-policy/), and using the term "WordPress" to describe products and services (e.g., calling yourself a "WordPress specialist," or saying you offer "WordPress hosting") is fully allowed, according to the policy.

They've also been in business for like 15 years now, and somehow none of this has come up before.

Besides, I could name dozens of companies just off the top of my head also using one or both of those terms. So the "you need a license to say this" argument seems highly targeted and extremely dubious.

### Matt's rejected, so he tries new strategies

Immediately following WP Engine's rejection, [the WordPress Foundation](https://wordpressfoundation.org/) (the nonprofit side of WordPress, the open source software, and which Matt Mullenweg _also_ runs, in effect if not nominally) [filed to trademark the terms "Managed WordPress" and "Hosted WordPress](https://www.searchenginejournal.com/wordpress-files-to-trademark-managed-wordpress-hosted-wordpress/528112/)."

Neither trademark has been granted at this point, nor should they; they've been in use for ages, and are obviously far too generic for any one organization to hold.

Most reasonable and knowledgeable people seem to share this opinion. Companies have been describing themselves as one or both of those terms for around 15 years at this point. (We freely called Flywheel a "managed WordPress hosting company" the entire time I worked there, and we were far from the first. We were also at one point one of WordPress.org's recommended hosts. So...obviously, not a big deal.)

Anyway, this filing of spurious trademarks makes it appear very much like Matt's endgame was to extract money from WP Engine, but he just needed more of a foundation to do it (pun intended?). So, following that initial rejection, Matt set the Foundation arm of WordPress working on securing highly dubious trademarks, which, again, I and most reasonable observers think and hope will fail.

Meanwhile, Matt _also_ began sending a series of very apparently extortive messages to WP Engine leadership, essentially demanding they pay up or else. (This is all in [WP Engine's letter to Automattic](https://wpengine.com/wp-content/uploads/2024/09/Cease-and-Desist-Letter-to-Automattic-and-Request-to-Preserve-Documents-Sent.pdf), which I'm getting to, but which comes later in the story.)

All of this was in the run-up to [WordCamp US](https://us.wordcamp.org/2024/), the largest WordPress event of the year, at least in North America. (Of note: WP Engine [sponsored this event](https://us.wordcamp.org/2024/sponsors/) at the highest level, as did WordPress.com.)

Matt let WP Engine leadership know, via private DMs, that he intended to "go nuclear" and "scorched earth" on WP Engine in his keynote at the conference—that is, if WP Engine failed to acquiesce to his monetary demands, i.e., 8% of total revenue, i.e., tens of millions of dollars. It appears he repeated the "just pay up and I'll make this all go away" offer up to the literal last minute before he went on stage.

<CalloutPlusQuote>

Let's not beat around the bush: words like "threat" and "extortion" very much apply to Matt's behavior here.

</CalloutPlusQuote>

<Update date="9/28/24">

I left out that Matt's demands included the alternative option for WP Engine to "pay" in contribution hours; i.e., instead of cash, they could just donate employee work hours to WordPress. I didn't feel this was important, since ultimately it all shakes out the same—it's an identical sum of money that WP Engine is paying, one way or the other—but I suppose it's relevant information.

</Update>

Again: this demand was ostensibly in exchange for a "license" to use terms like "WordPress," "WordPress hosting," "WooCommerce," etc.—none of which appear to be actually necessary.

The only _possible_ exception seems to be "WooCommerce," which _is_ a trademark (and product/company) owned by Automattic. However, the lines are very blurry on what is and is not permissable when it comes to using the WooCommerce name. WP Engine does indeed call one of its offerings "WooCommerce hosting," which is explicitly called out in the guidelines. So I don't know, _maybe_ there's validity there. _Maybe_.

However, for one thing, it's hard to know whether, or how much the trademark guidelines might have changed. Matt made several changes to the WordPress license page in the last week, among other things, to call out WP Engine. That makes me not trust that the WooCommerce license page I'm looking at today is the same as it was last week—which, all on its own, should be setting off raging alarms for even the most casual of observers. It's extremely bad news when the company you're doing business with can just decide what the new terms are with no warning or recourse.

Anyway, Matt keeps sending the DMs all the way up until the literal last minute, offering _not_ to excoriate WP Engine onstage during his keynote at the country's (continent's? world's?) largest WordPress event, provided they simply pay up.

Once more: I'm no lawyer, but I'm pretty sure that's called extortion.

WP Engine says no (actually, they ask for more time, which Matt denies and takes as a no), so he proceeds with operation "scorched earth," and blasts WP Engine both onstage at WordCamp US, and in several other venues.

### Wait—what's Matt's actual deal? Why is he doing this?

Aside from the licensing issue, which I covered above (and which seems like a mostly flimsy premise to me), Matt's got some other complaints with WP Engine. Some have validity, some seem completely made-up. Let's walk through them.

#### Matt claims WP Engine is misrepresenting itself

Among Matt's complaints: that WP Engine is "misrepresenting" itself as an entity that's officially affiliated with and/or endorsed by WordPress itself. Matt's repeatedly used as an example his own mom's confusion; she apparently thought WP Engine was somehow affiliated with WordPress.com (I guess because they also use the word "WordPress," and are maybe a vaguely similar shade of blue).

<CalloutPlusQuote>

I'm sure it's frustrating, having taken over half the internet and being worth hundreds of millions of dollars, only to find out your own mom _still_ doesn't really understand what you do, but: come on, bro.

</CalloutPlusQuote>

First, _tons_ of companies use "WP" in their names, and/or the names of their products. Why isn't Matt going after them?

Second, as many people have already noted: Matt effectively runs both `wordpress.com` _and_ `wordpress.org`, which are entirely separate entities that do two completely different things. You wanna tell me _that's_ clear, but somehow WP Engine and WordPress.com are too similar? Really?

Third, my kindergartner and every kid in his class could tell the difference between the WordPress W and WP Engine's dumb logo. (WP Engine's logo has always been a grid of weird, almost-square shapes that's apparently meant to vaguely resemble an engine, but which makes no sense to pretty much anyone who's ever seen it, far as I can tell. It's a bad logo, in my professional opinion as a designer, even the slightly better version they just released recently. But I digress. Point is: it looks literally nothing like any WordPress logo. Also: it's not the same color. I have color vision deficiency, and even _I_ can tell that.)

Finally, for the whole two years I worked for Shopify, most of my family thought I was at Spotify. Now I'm at Deno, and nobody in my family has any clue what a JavaScript runtime is, and my dad basically thinks I work for Java.

Family members don't always get tech. That's not a sign that something is wrong, and it's most _certainly_ not a sign that any wrongdoing has been committed, let alone deliberately. (Which, I assume, probably wasn't Matt's mom's point to begin with, but that didn't stop him from running with it.)

<Update date="9/28/24">

As an additional point here: if the problem was confusion around WP Engine's name, why not just ask them for a name/marketing change? Why all the contribution stuff, too? Conversely, if Matt's beef was with WP Engine's lack of contribution, why is he going after their name and marketing? It feels very much like Matt's just trying to cobble together all the reasons he can think of to justify his assault, in my opinion.

</Update>

<Update date="10/1/24">

WP Engine have added a disclaimer to their website footer, clarifying that they have no official affiliation with WordPress, and have removed the word "WordPress" from the titles of their hosting plans.

</Update>

#### Matt claims WP Engine is selling a "cheap knock-off" of WordPress

Matt also claims WP Engine is selling "something that they’ve chopped up, hacked, butchered to look like WordPress." His reason for this wild claim? Because WP Engine disables revisions (a default feature of WordPress, albeit a pretty small one).

Literally, that's it. One tiny feature. The whole thing's been "hacked and butchered" because they just chose to modify one mostly insignificant detail.

Of all Matt's spurious claims, this one strikes me as the biggest reach, for a lot of reasons. For one: WP Engine will just turn on revisions if you want them to, but that's honestly beside the point.

If I decide to build something with, say, Laravel, but decide there's one feature I want to turn off, I'm not "hacking and butchering" Laravel. That's obviously ridiculous.

Besides, pretty much all hosts limit revisions in some way or another anyway, because they take up a ton of memory and most people don't really need them that bad.

And regardless, _it's open-source software_! You don't get to tell people how they use it.

We could also get into the utter hypocrisy that many of WordPress.com's plans do far, _far_ more invasive modifications of WordPress core (notice [you _can't even install themes and plugins_ until you upgrade to the Business plan](https://wordpress.com/pricing/)!) but again, that's all beside the point.

[The ability to disable or customize revisions is built into WordPress](https://wordpress.org/documentation/article/revisions/), for crying out loud. So it's obviously not some forbidden mutation, like Matt seems to be presenting it.

This whole claim is clearly total garbage, and the fact that Mullenweg even tried to sell this as a significant and legitimate grievance seriously undermines the credibility of his case, in my view.

#### Matt says WP Engine doesn't give back enough

<CalloutPlusQuote>

Matt's other complaint—and I think this is what everything else really boils down to—is: WP Engine doesn't give back enough to WordPress, in Matt's estimation.

</CalloutPlusQuote>

Matt showed some numbers onscreen at WCUS, comparing Automattic's contributions to WP Engine's. But I'm not going to repeat them because I'm certain they're heavily distorted. Besides, I'm not sure the two companies' work can, or _should_, be considered directly comparable in the first place. They do different things in different ways, and there's no law or license mandating either of them do anything to begin with.

Regardless, Matt seems irked that WP Engine isn't abiding by the ["Five for the Future" program, outlined on WordPress.org](https://wordpress.org/five-for-the-future). Five for the Future asks that if you benefit from WordPress, you give back 5% of your time directly to that open-source project, which I think pretty much everyone can agree is a very noble and admirable aspiration that companies such as these involved _should_ probably be doing.

But it's not a requirement, or a policy, and enforcing it as such—acting unilaterally as the WordPress police, let alone so suddenly and violently—is extremely questionable and deeply troubling. (Not to mention a likely deterrent for people and organizations who might want to participate in the WordPress space.)

Matt's claimed he/Automattic have been soliciting WP Engine for increased contributions for "years," and that they've given "$0" to the WordPress foundation. To the best of my knowledge, neither of those claims has been substantiated, but I suppose they don't really change this discussion much either way, because again: Matt's taken it upon himself to act as the WP PD to enforce a law that isn't even a law.

<Update date="9/28/24">

It's also worth calling out that Matt is the one doing _all_ the math on _both_ companies' contributions, and he's quite obviously skewing the numbers heavily in his own favor, as I explore more in the next section. Even without seeing the full ledger, it's pretty clear Matt's making some highly suspect choices on what counts and what doesn't. He really should've showed up with something at least vaguely resembling an objective and transparent tally if he wanted to make this point. The numbers he showed fall apart at even a cursory examination. And even if an unbiased dataset would still agree with him, it seriously damages Matt's credibility that he came in with such blatantly one-sided figures.

</Update>

<Update date="9/30/24">

To underscore the above point, over the weekend, [Matt floated the idea of merging Advanced Custom Fields Pro into WordPress core](https://www.reddit.com/r/Wordpress/comments/1frcor8/matt_brings_up_bringing_acf_pro_into_core/). Now, I don't really take Matt seriously here; this reads more like a threat or a troll than something that's likely to happen, in my view. But it highlights Matt's lopsided criteria for what counts as a contribution.

[Advanced Custom Fields](https://www.advancedcustomfields.com/) has been one of the most-used and -loved plugins in WordPress as long as I've been around. WP Engine acquired it in 2022, and has fully funded its ongoing development since then. If we take Matt _at all_ seriously in this comment, it's even valuable enough to consider merging into core. But yet, somehow, all the time and money WPE has put into it doesn't actually count for anything…?

Conversely, if we _don't_ take Matt seriously, and if he's just stirring up trouble for fun like a mini-Musk, then…well, that _also_ reinforces the point that he's not the person who should be in charge of all this.

</Update>

<Update date="10/1/24">

A number of people have reached out to confirm Matt Mullenweg, [by his own admission](https://x.com/photomatt/status/1840980359673995362), is the sole owner of wordpress.org. The project itself is ostensibly open-source, but he privately owns the domain, and there do not appear to be any other people or entities involved, as yet another item on the conflict-of-interest pile.

![`Jason Grigsby asks Matt whether he really individually owns WordPress.org. Not Automattic? Not a different LLC or something? No employees? No board of directors? Just you? To which Matt replies: just me.`](/images/post_images/fire-matt/dotorg.png)

This also raises questions of Matt's rights and motivations for even asking for contributions in the first place. I mean, if he owns .org and helms and funds the Foundation, isn't he, at least to some degree, demanding WP Engine do more work _for him_?

</Update>

So that's it; that's what Matt's mad about. There's _some_ substance there, and in a vacuum, I think he'd probably have a lot of people on his side.

But we're not in a vacuum; there's a lot of context here. So I'd like to talk about that next.

### An aside on motivations and justifications

Having explored Matt's complaints, I'd like to pause for a moment, because this is where the sides seems to diverge.

The relatively small minority of people in the community who appear to remain on Matt's side (which seems to be mostly made up of his own employees and some people with their own reasons for hating WP Engine) appear to be sticking with him because they agree with _this_ core point, i.e.: WP Engine should be doing more—maybe much more—especially considering that they're a company owned by private equity and making significant money off WordPress.

**On its own, I think that claim seems perfectly fair**. We could disagree about the details, or how much is too much or too little, but I don't think it's unreasonable to say a company the size and profitability of WPE probably owes quite a lot to the open-source software it's built on (ethically, at least; likely not legally).

<CalloutPlusQuote>

So it bears mentioning that WP Engine actually _does_ do a pretty good deal for WordPress. You can cherry-pick specific ways it hasn't contributed much, and you could certainly make a reasonable case they should be doing more. But to say they've given "$0" strikes me as pretty deliberately misleading.

</CalloutPlusQuote>

WP Engine pays several staff members to contribute work hours to WordPress core (again, maybe the number should be greater than it is, but it's definitely not zero), on top of the full-time maintenance of plugins, themes, and apps like Advanced Custom Fields, WP Migrate, WP GraphQL, Genesis, Local WP, and many others—all of which used by countless thousands of WordPress users every day. (In some parts of the community, many of those plugins are even considered essential enough to be part of WordPress core.)

This is to say nothing of WP Engine sponsoring of WordCamps, creating their own tutorials and educational material, their own events, and so on and so forth.

Point is: WP Engine _does_ do a lot more than zero. You could argue those contributions are not "pure" (Matt does), and that they're ultimately in service to WP Engine, and not the WordPress community.

But in fairness: sure, they're all marketing tools in some form or another, but you don't _have_ to pay for any of them. They all get maintained by WP Engine, they all have tons of users both on and off WP Engine, and they all work no matter what host you choose. (I'm sure they're all used on WordPress.com. I'd even use some of those things if I had to spin up a WordPress site tomorrow, even if I probably wouldn't host on either WPE or WordPress.com, personally. I'd probably choose [SpinupWP](https://spinupwp.com/), myself, which is another company with "WP" in the name that Matt apparently doesn't care about.)

Besides, Matt's company does exactly the same thing with Jetpack, which charges $5–$50 per month, depending on tier, so...not sure where that moral high ground is supposed to be coming from. Is Automattic really gonna claim Jetpack's paid features are purely for the altruistic benefit of the community? Why do _they_ get a pass on paid features?

I think you could fairly, if crudely, paraphrase Matt's argument as: "WP Engine is in it for the money, and we are in it for WordPress."

That's a really flimsy stance in my view, without even getting into whether we can, or should, have exactly the same expectations of both companies in the first place (which is at least questionable; Automattic has their hands in a lot more things than WP Engine does, including Tumblr, PocketCasts, Longreads, and many others things that may or may not be related to WordPress, along with at least two hosting companies).

Still, once more: there's probably _some_ validity there. WP Engine is a big company that makes lots of money, and it probably can and should do more.

<CalloutPlusQuote>

_Matt could've made that point_. I think most people would've agreed with him, if he had gone about it properly. We'd probably be lining up with him. There was a way to rally the community around this.

</CalloutPlusQuote>

_If_ Matt Mullenweg had done this the right way.

But Matt, being Matt, _didn't_ make that point in a good way.

(Sorry, this post is already too long without me going into all the times in the past he's stirred up drama and just generally been a toxic jerk to undeserving people in the WordPress community. But if you're not aware: it's become increasingly common. He was even adding public snarky comments on WP Engine employees' posts, ones who had given decades of their life to the project, as recently as yesterday.)

<Update date="10/2/24" id="tip">

As if to underscore this point, Matt himself saw this post, went to [my Ko-Fi](https://ko-fi.com/collinsworth), and paid to leave a condescending message—presumably after seeing that I literally closed comments on this post explicitly because I figured he might come argue with me.

![Matt's donation on Ko-Fi, with the following note: 'You write so much but understand so little. Thanks for following along. Check out my Theo interview and watch what happens this week.'](/images/post_images/fire-matt/tip.png)

So yeah…Matt's apparently the kind of guy who will respond to allegations that he's not being a very good guy by paying for the privilege of sending you a mildly harassing note. (It was a nice tip though, in fairness.)

</Update>

<CalloutPlusQuote>

Matt tried extortion, and threats, and petty, childish tantrums, and when none of that worked, he fully exercised his unmatched and unchecked powers in an inconscionable way, in order to extract millions of dollars from WP Engine to put in his own for-profit competitor's bank account.

</CalloutPlusQuote>

But I'm getting ahead of myself.

So that's the core of this whole thing; Matt thinks private equity is ruining everything and taking too much without giving enough back. It's an easy home run of a point to make in this economy. Pretty much nobody disagrees with that.

Maybe he thought he'd come off like Robin Hood in this whole deal. I don't know. But if there was a way to tactfully and gracefully thread that needle, it wasn't the rampaging hippopotamus approach Matt took.

The split in the community seems to lie in whether that core point _justifies_ Matt's actions.

It seems to me that most people agree it does _not_; that Matt's committed too many flagrant fouls of his own for the original infraction to matter.

<CalloutPlusQuote>

Matt had a problem with the landlords, so he set fire to the building. He disagreed with Alderaan's leaders, and so he fired the Death Star. And now it doesn't really matter what his original point was; he's made himself the bad guy.

</CalloutPlusQuote>

There are some people who just keep reading about all this and saying "but, but WP Engine…" and my dude (it's always a dude), _it does not matter_. We're past that point.

We've all seen a sporting match where one player commits a minor foul, and it enrages an opposing player into a frenzy of flagrant violations that gets them tossed from the game. That's basically where we are; Matt's the second guy. Whatever he was reacting to: sure, it existed, and you can point to it all you want. But if that's all you're focused on, you're severely missing the point.

Anyway, back to the timeline. (Note: I may have the chronology slightly mixed up here on a few of the points, but I don't think it should really matter.)

### The WordCamp US fallout and Matt's abuse of power

At some point in this chaos (during his keynote at WCUS, or shortly after), Matt used his control over every branch of power in the WordPress government to publish a post titled “[WP Engine is not WordPress](https://wordpress.org/news/2024/09/wp-engine/)” (which isn't something anybody seems to have been confused about, except of course Matt's mom).

That post lambasts WP Engine for all of the already discussed reasons. It also, crucially, went up on WordPress.org, which on its own seems questionable. WordPress.org is ostensibly the website for the nonprofit foundation; it's supposed to exist to _prevent_ any one for-profit company from having too much power over the WordPress ecosystem. It's supposed to be agnostic.

Not only was that boundary ignored, but since the post was published as WordPress news, it was then _syndicated to each and every WordPress admin dashboard in the world_.

Forget for a second whether you agree with Matt or not; we're getting into some of the worst of the conflicts of interest and abuses of power here.

This type of maneuver, plainly, is anti-competitive. It's a flagrant exploitation of Matt's many roles and the wild control he has over many branches of WordPress, many with conflicting priorities.

It's bullying, really; WP Engine doesn't have any tools to strike back like that. It can't. (Maybe it _wouldn't_, since to date, WP Engine appears to be the company with grown-ups in the room, who know to behave as though their actions will be examined in a courtroom one day.)

<CalloutPlusQuote>

This would be like Meta one day deciding it didn't like how a competitor was using React, and serving every single Facebook user a story on their home feed, brutally disparaging that competitor. It's _clearly_ a dramatic overreach.

</CalloutPlusQuote>

But Matt wasn't done. Matt went on flexing (read: abusing) his power by updating the [WordPress trademark policy](https://wordpressfoundation.org/trademark-policy/) to _retroactively disincentivize the use of the term "WP" in titles of products and companies_. ([Here's the source on that change.](https://www.reddit.com/r/Wordpress/comments/1foknoq/the_wordpress_foundation_trademark_policy_was/))

I want to emphasize the word "retroactively" in the above paragraph. You know why you constantly get notifications saying "we've updated our terms"? Because you legally _have_ to do that. To just change the terms without letting people know is shady at best, and actively malicious at worst.

Well, Matt just went in and changed the rules everyone's been playing by this whole time.

<CalloutPlusQuote>

Altering the WordPress trademark policy is yet another abuse that should make any remotely impartial observer shudder. Why would anyone want to use a software with an oligarch dictating the terms, and changing them on a whim, with no warning?

</CalloutPlusQuote>

It's around this point in the story Matt is really losing the plot. His whole complaint with WP Engine is that they're not helping WordPress enough.

But yet...he's burning WordPress to the ground to make that point.

### WP Engine's reaction

WP Engine—quite understandably—doesn't really care for all of their users seeing that smear blog post in their wp-admin. So, WP Engine finds a way to block the news feed on WP Engine sites.

That would be questionable in a vacuum, to be sure. But we're steeped in context at this point. (A lot of users either turn off the news feed, or ignore it on their own anyway, for what it's worth.) I have to assume this was only meant to be temporary, until the post cycled out of the most recent headlines, but either way: maybe not great, but probably not very impactful.

Following WordCamp US, WP Engine _also_ sent a [cease-and-desist](https://wpengine.com/wp-content/uploads/2024/09/Cease-and-Desist-Letter-to-Automattic-and-Request-to-Preserve-Documents-Sent.pdf) to Automattic. It's pretty damning, and does a good job laying out all the points I tried to cover above. (In short: Matt tried to extort money from WP Engine for spurious licensing claims, and used disinformation, or at least heavily slanted data, to do it.)

<CalloutPlusQuote>

One of the biggest revelations here is: Matt wanted the money he was trying to get from WP Engine to go _to Automattic_, which, again, is Matt's for-profit company.

</CalloutPlusQuote>

There are some pretty obvious conflicts of interest here. First and foremost, Automattic (or WordPress.com, at least) is a direct competitor of WP Engine's.

Second, while Automattic _does_ apparently own the WooCommerce trademark, it does _not_ own the WordPress trademark. That is owned by the WordPress Foundation (which evidently grants Automattic a license to use it. Gee, how thoughtful).

But it gets even murkier from there, as the Foundation is maybe (or maybe not) WordPress.org? And either way, the Foundation is apparently three people, and Matt Mullenweg is not only one of them, he appears to be _the only active one_!

Of the other two board members, one is a blogger whose company Matt bought out, and who apparently is no longer in the industry. The other is reportedly a Partner and Managing Director at—surprise!—_a private equity firm_ (not to mention a twice-failed Republican politician).

Wait...isn't private equity bad? I guess not if it's on Matt's side.

For the record, Matt and his companies are tied up in equity in many other, far more substantial ways than this. He outlines more than a dozen of Automattic's investors [in this blog post](https://ma.tt/2024/09/are-investors-bad/), which came out right before WCUS. The post praises all 14 of Automattic's investors for being "the fuel of entrepreneurship and capitalism and responsible for most of what we enjoy today" (yikes), while indirectly implying WP Engine's investors are bad, and "just taking," rather than contributing, all as a preview to Matt's talk.

Again: sure, nobody likes private equity, with good reason. And yes, WP Engine's done some pretty slimy stuff in order to maximize their investors' returns. But it looks pretty hypocritical of Matt to think _he's_ the guy to make this point (let alone in a post that largely reads like a paean to capitalism)—especially when ultimately, the moves he's making quite transparently seem designed to maximize _his own_ companies' profits.

Anyway: the WordPress Foundation is basically just Matt, it turns out, and he's just fine using his authority however he sees fit.

<CalloutPlusQuote>

It appears neither of the other two Foundation board members is active, and therefore, behind the curtains, Matt is the King, Prime Minister, and Pope when it comes to WordPress.

</CalloutPlusQuote>

Nobody holds any ability to check his power or challenge him. (That's very relevant to what happens next.)

Also: Matt apparently owns WordPress.org, too. So he has a dizzying interweaving of conflicts of interest and power abuses here. ([Source for all that about the foundation here](https://www.pluginvulnerabilities.com/2024/09/24/who-is-on-the-wordpress-foundation-board/).)

<CalloutPlusQuote>

Let's acknowledge the irony that the guy who basically _is_ WordPress.com, _and_ WordPress.org, ***and*** the WordPress Foundation, wants you to think the name "WP Engine" is confusing.

</CalloutPlusQuote>

Anyway. [Automattic responded](https://automattic.com/2024/09/25/open-source-trademarks-wp-engine/) by sending its own cease-and-desist to WP Engine, claiming mainly that WP Engine is deliberately confusing people, and that it owes licensing to...someone. Automattic, I guess, though the lines are so blurry it's clear the separations between WordPress entities were always little more than a smokescreen.

---

**I should mention: most people believe WordPress.com and WordPress.org/the Foundation are two (three!?) separate entities**. I sure did, before this week. I thought the two had separated many years ago, with the express intent of preventing any one for-profit company from abusing the WordPress name.

I guess they technically are. But when one person apparently enjoys unchecked control over all of them…

[Guitar strumming begins with Alanis Morissette vocalizing]

<Update date="10/1/24">

It should be said that licensing the WordPress trademark to other companies would obviously be a massive cash opportunity. But since the Foundation and Automattic are already so inextricably intertwined, and controlled by one person, it raises some serious, potentially even IRS-level questions of where that money would be going, exactly. (I'm not a lawyer or a tax expert. It's just that using a nonprofit to help create a monopoly that funnels money to your own for-profit company, which doesn't have to pay the nonprofit like the other businesses do because you run both of them, just _sounds_ like the kind of thing federal agencies might be interested in.)

Regardless: if you wanna sell licenses, you need to set the terms at the start, not just suddenly tell people they're on the wrong plan to slap them with a huge up-sell years down the road.

Plus, this whole thing reminds me a lot of the Unity saga from earlier this year, where Unity decided to just charge a bunch of extra money for licenses out of the blue and the entire community revolted. The decision was eventually walked back, but the damage was done.

</Update>

### Matt melts down

Two really weird things happened on Wednesday.

First, _out of nowhere_, Matt decides to [publish a post on his personal blog](https://ma.tt/2024/09/charitable-contributions/) outlining his charitable donations. He really frames it as though he's being victimized and bullied into revealing this information, and I suppose some people were probably (reasonably) asking how much _he_ gives, since he spent the whole week blowing up half the internet over how much WP Engine gives.

In the post, he also spends a lot more time defending himself against claims of being a "mafia boss" than most people who aren't mafia bosses or acting like mafia bosses ever feel the need to do.

Weird move all around. Especially since the implication seems to be...what? "I'm a good guy so I can't do bad things"?

I tried my best to look up Matt's net worth and work out what percentage he's giving, and by the best figures I could find, we're likely at or below 5% here. (He's said to be worth around $400 million, although that figure appears to be a little outdated—especially since he may or may not have [sold a shitload of user data to AI companies earlier this year](https://www.404media.co/tumblr-and-wordpress-to-sell-users-data-to-train-ai-tools/).)

Which, fine, that's still millions of dollars going to charity, and that's objectively a good thing.

But also: if my wife and I gave that percentage of _our_ income, it wouldn't even be enough money to get a tax deduction for it. So it's worth mentioning that just for scale. Contextually, Matt's donating at below the standard deduction level for somebody of his net worth. (And, most likely, enjoying significant tax benefits for it.)

Anyway, no matter which way you look at it, that's all weird, but it doesn't even really matter in the case of this larger discussion. It has major "oh yeah? Well would a bad guy do THIS?" energy.

You know...the sort of thing actual good guys don't usually have to do.

The whole thing seemed like a distraction, and it turns out, it was…

### Matt goes nuclear

The next move, and most recent development in this story, is still shocking to me. I think it should be shocking, and deeply disturbing, to _any_ observer.

[WordPress.org banned WP Engine sites from accessing the plugin repository](https://techcrunch.com/2024/09/25/wordpress-org-bans-wp-engine-blocks-it-from-accessing-its-resources/).

No more doing anything with plugins via the WordPress admin area. No installing, no updating. Not if you're on WP Engine/Flywheel.

There are many layers to this.

First: again, this is the `.org` arm of WordPress enforcing this brutal new edict. The Organization, or Foundation, or _whatever_, is not _supposed_ to be controlled solely by an oligarch who can bend it to their own will, to directly benefit their own interests. It's _supposed_ to be agnostic.

<CalloutPlusQuote>

WordPress.org's entire reason for existence, as I understood it (and I think as it was pitched to a lot of people), was explicitly to prevent things like this from happening.

</CalloutPlusQuote>

Second: _not being able to update plugins can be a **massive** deal_. You could very well be exposing your site to security vulnerabilities if plugins don't update (to say nothing of bugs). There are nonprofits, charities, government agencies, and public services that host on WP Engine, on top of countless businesses. All of those are just being thrown under the bus to serve one man's whims.

(_Yes,_ it's possible to manually update plugins, but nobody's gonna do that. Certainly not the agencies and freelancers who oversee dozens or hundreds of sites on WP Engine.)

<CalloutPlusQuote>

This is setting fire to the commons. This is putting innocent bystanders in harm's way. This is firing the Death Star.

What Matt's done is unforgivable, no matter how good of a point he might have had at the beginning. To unleash harm on actual _users_ of WordPress, indiscriminantly, solely over where they choose to host their sites, is an unconscionable, terroristic abuse of power.

</CalloutPlusQuote>

At some point in the middle of all this, [Pressable](https://pressable.com/), yet another WordPress host, and one which Automattic also owns, started offering a [promo to help users migrate to Pressable from WP Engine](https://pressable.com/wpe-contract-buyout/).

That alone should be majorly headline-grabbing, since Matt's abuses of power are the main reason anybody would even be considering leaving WP Engine right now to begin with. But Matt's other abuses are so egregious this one barely even registers on the scale, even though it absolutely should.

Exercising power over a nonprofit to steal users from a competitor is in fact _very much_ something a mafia boss would do.

But back to the plugins thing:

_You don't hurt users because you're beefing with their host_. You don't put innocent bystanders in harm's way.

It no longer matters what this was all about at that point, or whether you were originally right or not. _You are irreversibly the bad guy now_.

It's also worth calling out a side effect of this move, which may or may not have been deliberate:

<CalloutPlusQuote>

Matt's actions have ensured _his_ hosting companies are now the _only_ WordPress hosts that can guarantee something like this will never happen to their users.

</CalloutPlusQuote>

I mean, he can just flip the switch at any time. He can change the rules whenever he wants to. So what company is safe?

None. Except his.

I hope I don't need to go into how anti-competitive that is, all on its own, or what an egregious abuse of power it is to have put himself and his company in that position by using WordPress.org to do it.

<Update date="9/30/24">

I didn't even cover what _else_ somebody with Matt's powers might do; what other escalations would be possible with unilateral control over WordPress.org. Blocking the plugin repo is scary, but there's a lot more Matt _could_ do with this power that would potentially be even scarier—which is why I don't think _any_ one person should hold all the keys in this situation, and _especially_ not Matt Mullenweg. He's shown us what he's capable of and willing to do. There's no other reasonable response but to take him seriously, and ensure neither he nor anyone else can ever abuse such all-encompassing power over WordPress again.

</Update>

## Updates: everything that's happened since October 1st

I'll continue to update this section as long as it's practical and useful.

<Update date="10/1/24" id="unblock">

Matt agreed to unblock the plugins repo temporarily after the community backlash, but the block went back up today. It seems WP Engine must already have a workaround in place this time, though.

</Update>

### 10.1: Matt talks taking over WP Engine

Matt has now apparently rescinded the previous 8% licensing agreement, and is instead [threatening a corporate takeover of WP Engine](https://www.therepository.email/mullenweg-threatens-corporate-takeover-of-wp-engine).

There are some incredibly Trumpian quotes from Matt in that article; he makes a lot of this about him, personally, and paints himself as the victim. ("I was taken advantage of for so many years," Matt claims—leaving this reader, for one, wondering exactly how one might be taken advantage of in such a way to become worth a half billion dollars or so.)

Matt repeats the claim that he's been asking WP Engine for increased contributions "for years," but again: we haven't actually seen receipts on that one yet. Still, even if it's 100% true Matt was repeatedly rebuffed, it seems like shaky ground for this whole campaign anyway.

Matt also loosely threatens his enemy and promises vengeance—via corporate takeover, I guess—yet provides no hint of a substantial plan for actually achieving that.

It's very unclear how Matt thinks a takeover would theoretically happen, which makes it seem more like a threat than a realistic scenario. I don't know a lot about this type of business dealing, so I may not know what I'm talking about at all here, but: wouldn't Matt either have to reach an agreement with WP Engine, or win against them in court for this to actually happen? Like, you can't just march into WP Engine headquarters and take it over (though that does kinda sound like Matt at this point).

A sale doesn't seem very likely to me; Matt and WPE probably aren't even in the same ballpark on a price tag, since Matt already feels the company owes him many millions of dollars—and that's even if WPE _was_ motivated to negotiate, which I seriously doubt.

_Maybe_ Matt comes in really high with (*_ahem_*) an offer they can't refuse, to pressure the investors into a sale. That also seems unlikely to me, but crazier takeovers have happened in tech in recent memory.

So if that doesn't happen, are we off to court? No idea. There's a strong chance it's all just posturing. But I'm sure I'm not the only one who would be deeply curious to see how Matt's antics would play in a courtroom.

Regardless of how it all shakes out, though: this only reinforces my stance that Matt's power must be severely curtailed. Matt's intent to use the monopolistic powers at his disposal to absorb and neutralize his business's only real threat and competition, all over a sudden extortive rules change, is perhaps the most striking sign yet that far too much power is concentrated in his unfit hands (even if said power does eventually turn out to be less than he seems to think it is).

Yet again, Matt comes off just like a mafia boss. “_Nice business you've got there. Looks like it's really feeling the squeeze lately. Sure would be a shame if that bad stuff kept happening, huh? You'd stand to lose an awful lot. But maybe we could reach some kind of an agreement…_?”

If Matt's lawyers _really_ aren't telling him not to say stuff like this, you'd expect him to at least have the self-awareness to realize how it comes off.

...Actually, I take it back. I wouldn't expect that from him. Not anymore.

### 10.1: Automattic releases the terms sheet, which kinda backfires

[Automattic released a timeline and terms sheet](https://automattic.com/2024/10/01/wpe-terms/), in a post coming after WP Engine pretty aggressively, accusing WPE of lying about the terms that were offered. (WP Engine, in its original [cease-and-desist letter](https://automattic.com/wp-content/uploads/2024/09/term-sheet-wp-engine-inc.-automattic-trademark-license_09.19.2024-1.pdf), didn't mention any offer of work contribution as a payment method; they just said Matt demanded payment. Automattic seems to be saying this is a lie, and work contributions were apparently always an option.)

Automattic offers as proof [the terms sheet they offered to WPE](https://automattic.com/wp-content/uploads/2024/09/term-sheet-wp-engine-inc.-automattic-trademark-license_09.19.2024-1.pdf), but the sheet, bizarrely, is dated September 20th—i.e., the same day as Matt's keynote at WCUS. So I'm a little confused how this is meant to show what Automattic seems to think it does. It shows the two payment options, sure, but that's not the only allegation at play here. If Matt wanted to refute WP Engine's claim that he made a last-minute extortion attempt, this is pretty much the opposite of what he needed to produce.

Is there not an earlier version Matt can release? If this went down the way he says it did, why aren't we seeing more evidence of earlier terms being offered, rather than the literal last minute one?

Besides which, I'm not sure how much the "contribution" angle really matters, because ultimately, there was really only one offer on table, i.e., 8%. The difference was only in how WP Engine wanted to cough it up.

<CalloutPlusQuote>

Whether WP Engine would've paid 8% to their people to do the work, or paid Automattic 8%, it's all the same in the end; the price tag is identical. It's not really two options, so much as one option with two payment methods.

</CalloutPlusQuote>

So I don't think this gives a lot of credence to the "it was never about money" argument Matt and Automattic seem to be trying to make—_especially_ since, once again, _this is all going through Automattic_! Not through the WordPress Foundation or .org (which owns the actual WordPress trademark in question), but through Matt's own for-profit company, a direct competitor of WP Engine.

Honestly, this whole release is a little baffling, because it seems to do more to _reaffirm_ WP Engine's version of events than refute them.

It's also worth calling out that in WP Engine's version of events, they claim Matt was making "harassing texts and calls" to company leaders. (They showed some of those texts.)

Automattic, for their part, notes "On September 19th and 20th, Lee and Heather did not answer any of Matt’s calls."

Hmmm.

The rest of the timeline Automattic presents seems to show lots of meetings between company leaders, mostly in the last year, but it's just a written text schedule. There's only one link, and it's to a video of a conference panel talk from March of last year. At a cursory look, it doesn't even seem to be relevant to the current issues; it just happens to feature Matt and people from both companies.

I'll take it on good faith those meetings happened, but their nature and content remains unclear. Even if the terms were discussed in some form, the fact that Matt isn't showing any official offer from before the same day as his presentation means we don't really know much now that we didn't already, and if anything, we have _more_ reason to question his version of events.

One other interesting takeaway: the terms included full rights for Automattic to audit _all of WP Engine's finances_, which WP Engine would've been required to provide, itemized, on a monthly basis, for the full _seven years_ of the contract.

Seems to me like anything _remotely_ that invasive would take months, if not years to get in order and approved by legal, HR, etc. Certainly not a day.

But again: Matt insists it _wasn't_ a day offer; it was a conversation that had been going on for "years." So if that's true, why aren't we seeing earlier documents, or hard evidence of the substance of prior conversations? Why are we just seeing the one document from the 20th, and a bunch of dates?

Unless there's more to come that we haven't seen yet (and it's hard to imagine both what that would be and why it wasn't released initially), it's tough to see this as anything but Matt just digging himself in even deeper.

Oh, by the way, that 8% figure we've been talking about? The terms sheet showed Matt wanted that to be 8% of _gross_ revenue(!), which most observers seem to agree is absurd. It's easy to hear 8% and think of it as a small number, but to tax _gross_ earnings—i.e., pre-tax, pre-expenses, etc.—means the number is, in effect, dramatically higher. (8% gross could easily be 20% or more of net profits, possibly even as high as 50% in some businesses. Hard to say what the exact figure would be in WP Engine's case, and I'm not qualified to try, but it's definitely a much bigger number than 8.)

Matt also wanted WordPress.org (i.e., him) to decide what WP Engine was paying its employees to work on for him, had they gone with that option; WPE wouldn't even be able to choose what they were paying their own employees to do.

The entire of demands seems incredibly outrageous, even in a vacuum, but especially between competitors, and particularly knowing the labyrinthine conflicts of interest and questionable authority at play here.

No wonder WPE stopped taking his calls.

### 10.2: WP Engine files suit against Matt and Automattic

**Welp, looks like we're going to court.**

WP Engine is officially pursuing a series of legal complaints against Matt Mullenweg. [Here's the announcement](https://x.com/wpengine/status/1841633469685723292?t=Zc5MrODFXpYHhFVC_nJNwQ), and [here's a direct link to the actual legal document](https://wpengine.com/wp-content/uploads/2024/10/Complaint-WP-Engine-v-Automattic-et-al-with-Exhibit.pdf).

I remain very much not a lawyer, so take this with an appropriately sized grain of salt. But as a quick overview, the complaint names _both_ Matt and Automattic as defendants. WP Engine lists a dozen ways Matt and/or Automattic interfered with its business dealings, extorted WP Engine, broke verbal contracts, took unauthorized actions, and made libelous and slanderous statements that hurt their business (including insinuating patent and trademark violations). It's a document full of receipts, and it makes WPE's previous C&D look lighthearted by comparison. In any case (ha), WP Engine asks for a jury trial, and seeks a range of remedies, damages, and awards.

Most of the things they allege are things covered here already, but there are a few new juicy bits:

1. **Matt tried to poach Heather Brunner, WP Engine's CEO, and threatened her**. When Heather ignored Matt's offer, he threatened to "go public" with claims that she interviewed at Automattic (as this allegation could be severely damaging to her). WP Engine denies there was ever any actual interview; only a series of unsolicited offers from Matt that Heather either denied or ignored. The filing include enough screenshots of Matt's communications to make a convincing case.

2. WP Engine also asserts **Matt probably messed up real bad in IRS filings for the Foundation**. For one thing, it's a .org domain, which is generally reserved for nonprofits, which probably isn't a crime in itself, but which does sorta imply some shady dealings.

  More seriously, however: **the Foundation apparently never disclosed to the IRS that it owns the WordPress trademark, nor that it provided an exclusive license to use this trademark to Matt's companies**—which is a big problem, as Matt's claiming it's worth the millions and millions of dollars WP Engine allegedly owes him. Yet, no asset remotely near that value has ever been reported on the Foundation's taxes, according to the filing.

  <CalloutPlusQuote>

  Essentially, either the WordPress trademark owned by the Foundation is _not_ worth the millions Matt wants for it (because if it was, he should've reported that asset to the IRS)...or it _is_, and Matt's been filing bad tax reports for several years.

  </CalloutPlusQuote>

  _Yikes!_

WP Engine also officially states that **there were no conversations about licensing the WordPress trademark prior to mid September**, just before WCUS. A They say any prior conversations had been specifically about a WooCommerce partner program. Automattic, they allege, suddenly pulled the rug on those talks in August, before suddenly bringing Matt's extortion attempt days before WCUS. (WPE concedes there had been talk of "a license," as part of these dealings, but says no details about what the license was, or was for, or would cost, had been mentioned prior to mid September.)

**Matt's insisted his apparent extortion was never about money, and that the talks had been going on for "years." But now that both sides have showed their cards, it looks very much like he's been lying about both.** Matt had the chance to bring proof earlier in the week, and he came in with a doc from September 20th that very clearly asks for 8% in cash one way or another, and a weak list of meetings that barely went back a year. WP Engine's saying in a legal document full of screenshots it didn't go down the way Matt says it did, and thus far he's completely failed to offer anything of substance to refute their version of events.

<CalloutPlusQuote>

It's striking how much of the filing is literally just Matt running his mouth. So much of it is just screenshots of actual things he said or did. WPE's entire strategy seems to be "stay quiet and let him dig his own grave," and at this point it sure seems like they picked the perfect tactic.

</CalloutPlusQuote>

Unless Matt comes out with a _major_ stockpile of receipts that directly contradicts huge swaths of this filing, I don't see how he bounces back from this. Even if the filing were only 50% accurate, how could the community ever trust him after all this?

### 10.3: Matt offers buyouts to Automattic employees

It's being leaked through a number of channels that Automattic is offering employees buyout packages, said to be worth ~~up to $30k~~ at least $30k, if they want to leave over all of this. It appears to be generous, although it evokes Elon's deal to Twitter employees (which at this point I'm guessing Matt would take as a compliment); "get with me or get out."

A number of prominent figures in the organization are said to have taken the exit deal, [reportedly including Josepha Haden Chomphosy](https://x.com/jeffr0/status/1841679115419553825), the Executive Director of the WordPress project (who by all accounts—including my own—is an exceptional person, and who many felt was much better fit to lead WordPress than Matt. Also, unrelated: she's also a fellow Kansas Citian and elected official in my county, so shout-out to a local Councilmember).

Josepha's loss is a huge blow to the community all on its own. But there are said to be dozens of Automatticians (yes, they're really called that) who have also exited at this point, on top of the hundreds and quite possibly thousands of people who were kicked out, harassed, dissuaded, or just turned off by Matt's actions. The lasting damage Matt's done to the community really can't be overstated. All, ironically, in the name of somehow defending it.

Also, [more Matt harassing innocent people](https://medium.com/@kelliepeterson/nice-guy-matt-mullenweg-ceo-of-wordpress-com-cries-foul-and-threatens-me-with-legal-action-f116ac57d862). (He's been dropping into a lot of DMs and comment threads, which doesn't seem like advisable behavior for a defendant and CEO of a company that's a defendant.)

<Update date="10/4/24">

A number of folks have also reached out to remind me of [this incident on Tumblr earlier this year](https://techcrunch.com/2024/02/22/tumblr-ceo-publicly-spars-with-trans-user-over-account-ban-revealing-private-account-names-in-the-process/).

</Update>

### 10.4: 159 Automattic employees take the buyout; Matt hires a famous lawyer who's a horrible human

[According to Matt](https://ma.tt/2024/10/alignment/), the deal he offered employees is actually better than reported; it's 6 months of salary, or $30k, whichever is greater. He says 159 employees accepted the offer, which is a little under 10% of the company.

(In my opinion, anyone and everyone in a company the size and scale of Automattic, with a hundred-millionaire at the helm, should be making at _least_ the $60k required to eliminate the need for the "whichever is greater" clause. But alas, such companies often severely underpay where they can, which is often support teams in particular, because there's a never-ending supply of people working even worse jobs waiting to be lured by fancy benefits, burned out, and discarded for the next wave. I know WPE does this, too, as did Flywheel, and as just about any tech company does. It's part of the cycle that inevitably leads to these companies being completely out of touch with their own users, but I digress.)

Six months of salary is a sweet deal, to be sure. I'd definitely consider taking it even if I _didn't_ have any issues with the company. Not too many times in your life you get to take a six-month paid vacation. (I'm sure it's not as simple as that for many of the employees, however.)

Still: it worries me that Matt, who has come off like an egomaniac throughout all of this (and since long before) is in effect cleaning house; getting rid of the dissenters, thus perpetuating the very culture that created all these problems in the first place.

<CalloutPlusQuote>

Clearly, if there were adults in the room when Matt made these decisions, something kept their concerns from being heard. In my view, Matt's doing the opposite of what he should be here, by making himself even _less_ likely to be challenged.

I think this purging of dissenters is ultimately a very bad thing for WordPress, as it will likely result in even worse behavior and decisions out of Matt.

</CalloutPlusQuote>

Matt/Automattic also secured a lawyer, who [called WP Engine's lawsuit "meritless,"](https://automattic.com/2024/10/03/meritless/) which is of course the first thing any defense lawyer will do in any case no matter what. I've watched enough true crime to know a defendant could be in the middle of live-streaming their own crime spree to 10 million viewers, and the defense lawyer would still say the charges are baseless and the client is innocent.

I'm guessing things will probably quiet down at this point. Now that it's legally super serious, I surmise both parties will be a lot slower to speech and action. So maybe I'm near the end of these updates, as we may be getting to the long, slow, legal portion of all this now.

One last thing worth mentioning: Automattic's new lawyer, [Neal Katyal](https://en.wikipedia.org/wiki/Neal_Katyal), is apparently known for—among other things—defending Nestlé and Cargill against a class action suit brought by _formerly enslaved children who were kidnapped and forced to work on cocoa farms for those corporations_.

Yes, really. And it gets worse: his whole argument was that Nestlé and Cargill shouldn't be prosecuted because—I cannot believe I am not making this up—_the companies that supplied cyanide to the Nazis weren't convicted either_.

He also charged Johnson & Johnson $2,500 per hour (that's several million per year, if anything even remotely in the ballpark of full-time work) to defend them for selling baby powder contaminated with carcinogens. (It's all in [his Wikipedia](https://en.wikipedia.org/wiki/Neal_Katyal), if you'd like to see for yourself.) So...yeah. Draw from that what you will.

Incidentally, he also really likes Burning Man, just like Matt. ([Look at that outfit](https://abovethelaw.com/2023/09/biglaw-partner-neal-katyal-escapes-burning-man-avoids-trench-foot/)). And finally, he is—surprise!—a board member of a venture capital firm.

### 10.5: Matt gleefully exposes a vulnerability in ACF, but prevents WPE from fixing it

I almost can't believe Matt is still doing such destructive, careless things that I'm still writing these, but here we are.

Matt announced a vulnerability in ACF, which you'll recall, is a plugin WP Engine maintains, and which is reportedly installed on millions of WordPress sites. (You may also recall this doesn't count as a contribution to the community in Matt's estimation, but that's not relevant to this specific news item.)

Matt hasn't released the details of the vulnerability, but he _did_ publicly disclose that it's with ACF, which strikes me as highly questionable. I don't know that this announcement needed to be made in the first place, but if it did, why couldn't it be more vague? Why is Matt letting every hacker out there know exactly where to look? That just does not seem like something a guy who's supposed to care about the community would do.

He didn't disclose the specifics (except to WPE), but that info _will_ be released in 30 days, and so WPE has that time to fix the vulnerability, whatever it is.

Pretty awful to start that clock on a Saturday, though. Matt knows the engineers in charge of the plugin are now likely forced to work on the weekend to try to keep users safe.

However—and this is the _really_ shitty thing: remember, **WP Engine is still locked out of the .org plugin repo _because of Matt_**. So even once WPE does fix the issue, it _can't_ automatically go out to actual users; they have to *manually* update, which I don't need to tell you, a huge chunk of them aren't going to do.

<CalloutPlusQuote>

**Matt is effectively holding actual WordPress users hostage**, and it's no longer just WP Engine's customers; it's _anyone_ with ACF installed. And again: ACF is one of the absolute most popular plugins in all of WordPress.

</CalloutPlusQuote>

This is inexcusable, dangerous behavior on Matt's part, made all the worse by how borderline _giddy_ he seems to be at the prospect of playing chicken with his own community members' digital safety and wellbeing.

Matt is clearly just fine with risking very real harm to very real people in his feud, which is made all the more scary by the fact that his company just jettisoned 159 voices that could be telling him how destructive and malicious he's actually being.

I'm running out of ways to say good guys don't do this. The harm here is no longer theoretical; it is a statistical certainty. And yet, Matt not only doesn't seem to mind that people will be hurt by this, he seems to enjoy it.

The utter incineration of trust and goodwill is staggering.

This vindictive child of a man isn't qualified to lead a shift crew at Wendy's.

<Update date="10/5/24">

Sounds like that ACF vulnerability is low severity, which is good. But that doesn't change the fact that Matt _weaponized_ a vulnerability, made some extreme dick moves in the disclosure (including going public with it without releasing it to the maintainers first), and did it all fully knowing he's standing in the way of that vulnerability actually being fixed.

And he did it all gleefully, because it serves his purposes, and he obviously doesn't care who gets caught up in the collateral damage.

We deserve so much better than this petty tyrant.

</Update>

### 10.11 Matt adds a vague anti-WP Engine checkbox to WordPress.org, but fails to clarify why, all while playing the victim

I've missed a lot here because of work, but most of it is not especially relevant to the overall thread; just more Matt being Matt (i.e., provoking people, having confusing and unproductive conversations, and making the kinds of choices that have pretty much everyone questioning his motivations and/or wellness).

The ACF plugin vulnerability has been fixed, though it sounds like it required somebody on the inside to help, and also isn't the best fix, because again, Matt's standing in the way in every possible way he can, acting as the sole owner and officiator for WordPress.org.

Speaking of which: Matt added this checkbox to the WordPress.org login screen, requiring users to verify they have nothing to do with WP Engine before being allowed to log in:

![A checkbox on the WordPress.org login screen, asking the user to confirm 'I am not affiliated with WP Engine in any way, financially or otherwise'](/images/post_images/fire-matt/dotorg-login.png)

This prompted [a lot of good questions in the WordPress Slack](https://threadreaderapp.com/thread/1843963052183433331.html), such as "what does this actually mean?" and "why does this exist?" (paraphrasing mine). WP Engine is massive and they make lots of things. Many WordPress devs use them, have clients who use them, and/or pay them money. So…does that make them affiliated? Can a person who works at WPE or has clients there not contribute to WordPress?

Matt gave lots of non-answers, almost as though he didn't want to implicate himself, and eventually banned the people asking the questions in the first place, including [Javier Casaras](https://www.javiercasares.com/), longtime contributor to WordPress. (Joost from Yoast SEO was also fighting with Matt in the thread, but I don't know his current status.)

Matt (as WordPress.org) also dropped [this protest to WP Engine to 'please stop attacking us'](https://x.com/wordpress/status/1843965031719088368), which is laughable.

In the Slack thread above, Matt insists the WordPress Foundation "only" made $23k in donations last year, which is "barely 10–20 hours of legal fees," all of which I find deeply disingenuous for a few reasons:

1. Now that it's been revealed Matt himself _is_ the organization for all intents and purposes, where is that donation money going and how can we trust it? Are we not just effectively donating to Matt Mullenweg?

2. Matt picked the lawyer. He didn't have to go out and get a guy with his own Wikipedia page. Not every lawyer charges $2,500 per hour.

3. Matt playing the victim here when the aggression has been all on his side (and what there is from WPE has been in their own defense) is very gaslight-y; and

4. Matt is a hundred-millionaire, and he claims the WordPress license the Foundation owns is worth tens of millions of dollars (if not more).

<CalloutPlusQuote>

Notice how the Foundation is a poor, innocent nonprofit that's barely scraping by when it suits Matt's purposes, but yet, the sole owner of a license worth tens of millions of dollars when he prefers to weaponize it.

</CalloutPlusQuote>

Anyway, anyone who's ever seen an abusive relationship will recognize the dynamics at play here. Matt's the aggressor, and when he gets any kind of push back, suddenly he's the victim.

For example, here's Kellie Peterson (who you might remember from above; Matt's already made a bunch of accusations and threats against her over literally nothing). She made an obviously silly joke about Matt's clearly erratic behavior, and he accused her of threatening his life over it.

![On X, Kellie Peterson jokes, 'has anyone tried turning @photomatt off and restarting him?' To which he replies, 'By turning off, do you mean my life should end?'](/images/post_images/fire-matt/image.png)

(Longtime followers of Matt drama might recognize this play from Tumblr.)

Matt just keeps stirring up small dramas everywhere he can. Some people are sincerely asking whether he's ok, seemingly theorizing this whole episode to be either mental illness or drug-induced. For his part, Matt seems to insist he's fine while [trying to act like this is all part of his grand master plan](https://x.com/DustinSnider/status/1844364915613762032), which I don't think anybody buys at this point.

Personally, I subscribe to a much simpler theory: I think most people just severely underestimate what an overdose of power and wealth will actually do to a person.

Anyway, none of these incidents are especially meaningful on their own, and I'm going down kind of a rabbit hole by even exploring any of them. But I'm doing that because together, they paint a very dark and troubling picture.

<CalloutPlusQuote>

Over and over again, in big actions and in small interactions, Matt shows himself as someone who can't be trusted with the power he has, and honestly, probably shouldn't have _any_ power over the community to whatever extent it's now possible.

</CalloutPlusQuote>

### 10.12 Matt commandeers ACF, using WordPress.org to steal a competitor's product

I gotta hand it to Matt: he really knows how to top himself.

[Matt has commandeered the Advanced Custom Fields plugin](https://wordpress.org/news/2024/10/secure-custom-fields/), and is now calling it [Secure Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/).

In that post, Matt says he's "forking" ACF. The tenuous premise for this "fork" is [Point 18 of the plugin directory guidelines](https://github.com/wordpress/wporg-plugin-guidelines/blob/trunk/guideline-18.md), which you can read yourself (it's short), but certainly doesn't seem to me to be grounds for a hostile, forced takeover of a plugin without consent from its maintainer.

By the way, the reason I keep saying "fork" in quotes is because the new version (SCF; dumb name, dumb logo) is _not a fork_. It's a takeover.

See, when you fork something, you have a new copy. Your plugin needs to be a _new_ entry in the repo, and it will start at zero users, zero installs, zero reviews, and so on.

That's not what's happening here. As you can see, [SCF](https://wordpress.org/plugins/advanced-custom-fields/) has all of ACF's 2 million+ installs, thousand+ reviews, and everything.

The _actual_ ACF team [took to X](https://x.com/wp_acf/status/1845169499064107049) to say "A plugin under active development has never been unilaterally and forcibly taken away from its creator without consent in the 21 year history of WordPress."

Again, reading point 18, it seems designed to handle cases where a plugin's maintainer can't keep up with the workload any longer, or where there's an imminent security threat. Neither of those is the case here, so Matt's complaint really boils down to the fact that ACF asked people to get updates straight from WP Engine—which, you may recall, they had to do _literally because of Matt_.

The disrespect and cruelty here is striking. Taking away a developer's project, without their consent, all on its own, would've been all but unthinkable except in the most extreme of cases a mere 3–4 weeks ago (_how has it only been that long_!?)

But to do that because _you_ forced the developer to go around you by refusing them the access they needed to make updates, and then _punishing_ them for doing what they had to do to keep their own users safe…I just can't think of any other word but cruel.

Matt put people on the trolley tracks, WP Engine pulled the lever to save them, and Matt is punishing them for it.


### 10.15: Previous lawsuits against Matt come to light

Folks online dug up [a whole different lawsuit against Matt, filed in 2022](https://freewp.com/wp-content/uploads/2024/10/Complaint-MATTHEW-C.-MULLENWEG-CGC-22-600093.pdf) by a private nurse hired by Matt, who worked for his mom Kathleen as a full-time (and then some) caretaker.

There's a ***lot*** to go into here, and [this tweet summarizes the claims pretty well](https://x.com/trentlapinski/status/1845700375589826701). A quick summary doesn't do it justice, but: it claims this nurse (a mom, and a Muslim) was lured by promises of pay she never received, given half the pay of a male colleague, forced to work overtime in brutal conditions, defamed, abused, and exposed to horrific harassment and bigotry of pretty much every kind. When she spoke up—directly to Matt, who had allegedly promised her much more pay than he actually gave her—she was retaliated against and threatened. She eventually quit due to unbearable working conditions.

Read the actual filing and your jaw will drop. Just be warned it details _shocking_ levels of racism and mistreatment, along with just about every other kind of bigotry and harassment. (I'd argue the term "sexual assault" even applies here.) Most of it is on the part of Matt's mom, but Matt was allegedly very much aware of it, and not only did nothing, but made the caretaker's life even worse whenever complaints arose.

The nurse was apparently paid through Audrey Capital, which Matt owns, and which the lawsuit claims is basically a shell corporation for shady financial dealings. ("Fraud" is a word used in the filing.)

Some might say we shouldn't rush to judgment before the case is settled, and while there's certainly merit to that position, at the same time, we _must_ take these allegations seriously. If we don't, we give the benefit of the doubt to the rich abuser, rather than to his victims, and I hope we've learned better than that in recent history.

If we don't treat the allegations as though there at least _could be_ truth to them (and I don't see any strong reason to throw out that possibility), then we risk being complicit in the abuse itself.

Similarly, some folks will argue this doesn't have anything to do with the ongoing WordPress drama. They might say this whole incident is irrelevant in that larger picture, because it only has to do with Matt's family and personal life.

I disagree. We're talking about not just _a_ leader, but _the_ leader at the core of perhaps the largest ecosystem on the web, in a discussion of that (probably-not-so) benevolent dictator's character. And in this filing, we see patterns we've witnessed in the WordPress ecosystem (and Tumblr, and others) reinforced and played out again and again.

We've seen this all before. The specifics might be different, but the plot is the same every time; anyone who dares to defy Matt is threatened, bullied, cut off, and/or made an example of.

Matt is just fine using his power to hurt people. We've seen it plenty of times now. So it seems odd to think a meritless suit could nonetheless describe Matt's normal behavior so consistently.

Besides, the type of shady financial dealings this lawsuit alleges are very much in keeping with what we've already seen from Matt in this case.

There's also [a second lawsuit from 2022](https://freewp.com/wp-content/uploads/2024/10/Complaint-MATTHEW-C.-MULLENWEG-CGC-22-600095.pdf) (brought by the same lawyer), for similar claims as the first; low pay for unbearable working conditions, this time brought by a former assistant. [Here's another quick summary](https://x.com/trentlapinski/status/1845718004673265722).

### 10.15: Matt responds to the "other lawsuits"

[Matt speaks out about both of those suits from 2022](https://ma.tt/2024/10/other-lawsuits/), claiming they're baseless. He says the lawyer who filed both suits coerced both workers into filing and basically made everything up as a way to get money. He (predictably) claims this is all part of the "smear campaign" against him, and that he's fighting the cases because they're baseless, and he doesn't want to encourage more people to make stuff up.

I acknowledge there's no way to know who's telling the truth here, but I maintain my position that we should take the claims seriously and not take Matt's word for it or extend the benefit of the doubt unevenly (particularly since all of this is exactly what we could expect Matt to say whether or not he was guilty). That said:

<CalloutPlusQuote>

Matt's response is always the same, no matter what he's responding to. He's a poor, innocent victim, even when what's happening to him is 100% a direct result of his own aggressions against another party.

Everyone's against him. It's all a conspiracy. He didn't do anything at all (even the things we all watched him do).

</CalloutPlusQuote>

It's all very Trumpian.

Especially the "smear campaign" thing. Far as I can see, the only people saying anything negative or critical of Matt Mullenweg are people who are just noticing the things he's actually saying and doing, and calling attention to those things.

Also: I can't help but notice we keep finding Matt in situations where he could easily provide documentation to refute the allegations against him, and he keeps _not_ doing that, and instead, just asking us to believe him.

### 10.17 Matt wars against dissenters with second buyout offer; threatens employees who speak out; intercepts employees' emails

As reported by 404 Media, [Matt is offering employees another round of buyouts](https://www.404media.co/automattic-buyout-offer-wordpress-matt-mullenweg/), this time worth _nine_ months of pay rather than the previous six.

Evidently, some employees have regretted their decision to stay on Matt's side. Others never agreed with his crusade in the first place, and made the decision based purely on economic realities. Either way, Matt obviously wants anyone who disagrees with him purged.

Employees were reportedly given mere hours to make the decision. As of this writing, it's unclear how many opted in. (Of note: Matt stipulated the opt-in resignation be submitted via personal DM. So Matt himself is the only one who knows for now.)

The article mentions a loud group of "sycophants" remaining at Automattic. This group, like Matt, is described as vocal, and hostile to dissenters—naturally making life pretty miserable for those who remained, but weren't fully committed. Perhaps predictably, this group compares Mullenweg to Trump and Musk, as a compliment.

I agree with the comparison, but not for favorable reasons. Just as Musk and Trump have poured billions into doubling down for their own narrow, barbarous bases over and over again—at great personal expense and for dubious benefit—Mullenweg obviously cares only about catering to his own base of loyal minions, no matter how much it might cost him or hurt anyone else (all the while, drifting further and further away from any sense of objective reality).

Approval is a hell of a drug.

On a personal note: I genuinely revered Matt for many years. Since the early WordPress days, and until relatively recent history, it seemed like he was one of the few actual, genuine good guys in powerful positions in tech. It's deeply saddening to see both the community he built ripped apart by petty squabbles, and a once-benevolent figure descend into such a twisted, dark, grotesque version of themselves.

But maybe I'm getting ahead of myself. There's nothing _wrong_ with offering buyouts, per se (even if it's ultimately a bad move for the company).

Far _more_ ethically questionable is intercepting employees' emails, which is exactly what Matt's done.

<CalloutPlusQuote>

In a further effort to squash dissent, Matt's redirected and intercepted all emails from [Blind](https://www.teamblind.com/), the social platform where employees can speak publicly and anonymously about their employer and workplace.

</CalloutPlusQuote>

Since Blind requires signing up with an employer email address (to verify authenticity), whoever owns the domain--i.e., the employer--has power over delivery of those emails, via DNS records.

Not satisfied with merely blocking or filtering employee emails from Blind, Matt actually _had them forwarded to himself_!

Regardless of the fact that the address is a work email address, this is a serious and nearly unthinkable breach of trust and confidentiality. It's not unlike your employer combing through your Slack DMs, or reading private emails between you and your colleagues.

In fact, it's quite possibly _literally unprecedented_, according to a Blind spokesperson:

> “[We've] never seen a CEO or executive try to limit their employees from signing up for Blind by redirecting emails.”

To make things worse, _this email forwarding wasn't even announced_! Employees found out about it only _after_ they reached out to Blind support...only to learn their private emails were going directly to the CEO.

<CalloutPlusQuote>

Imagine that not only is your boss _intercepting_ your emails, but he's doing it _without even telling you_.

</CalloutPlusQuote>

The level of disregard is chilling.

In the midst of all this, Matt threatened dissenters who choose to "leak" info to the press or to their former coworkers with immediate termination with no severance, and possible legal action for "violating confidentiality agreement." (Whether such agreement exists, or whether employees have in fact broken it, I can't say. Even if it does, I don't think it justifies intercepting employees' email, let alone without so much as a notice.)

I just keep coming back to the question: **what kind of person does it take to do this**?

What kind of person is so petty as to retaliate against anyone who dares to speak against them?

What kind of person is so controlling, they forcefully and secretively steal their employees' autonomy and ability to speak out?

What kind of person is so utterly childish that they can't even tolerate the mere _presence_ of anyone who might disagree with them?

What kind of person demands unquestioning loyalty and obedience, no matter the circumstance or the cost?

It's a rhetorical question, of course—one that invites many comparisons, none at all favorable.

My point is: if you were to create an archetype of the absolute _worst_ person to be a leader in a community—the exact _opposite_ of the person you'd want in that role—this is exactly what you'd describe.

### 10.21: WP Engine files an injunction to regain access to WordPress.org

I missed this one over the weekend, but [WP Engine has filed a motion for preliminary injunction](https://www.documentcloud.org/documents/25237665-wp-engine-injunction?responsive=1&title=1) against Automattic and Mullenweg, requesting that the court both allow the company and all its employees and associates access to WordPress.org once again, and to reclaim ACF (the plugin Matt effectively stole from them, above).

The injunction points out, accurately, that doing so would cost Matt/Automattic nothing.

And since the whole reason Matt took over ACF in the _first place_ is that he says WP Engine's updates weren't safe (because they didn't go through the official .org repo, which they couldn't, because of Matt), it seems like he doesn't really have a leg to stand on here. (Again: not a lawyer; just personal commentary.)

Seems to me you can't very well argue that a company being *outside* of .org is harmful if _you're_ the one keeping them out.

That is, unless you're prepared to admit you _want_ users to be in harm's way, as an extortion tactic.

### 10.23: Matt responds, saying WordPress.org belongs to him and him alone

Matt and Automattic have [filed a response to WP Engine's latest legal filings](https://storage.courtlistener.com/recap/gov.uscourts.cand.437474/gov.uscourts.cand.437474.33.0.pdf).

Most notably, the filing basically claims that WordPress.org is Matt's; it's his private website, and he can do whatever he wants with it.

> WordPress.org is not WordPress. WordPress.org is not Automattic or the WordPress Foundation, and is not controlled by either. To the contrary, as Plaintiff itself acknowledges, WordPress.org is Mr. Mullenweg’s responsibility.

Basically, "yeah, we did everything they said, and we had every right to do it." (Pretty much the exact response you'd expect from a lawyer who [defended corporations against formerly enslaved children and cited Nazis as precedent](https://slate.com/news-and-politics/2020/12/neal-katyal-supreme-court-nestle-cargill-child-slavery.html).) (Yes, I know Matt's lawyer isn't technically a reflection on Matt, but if you're the human who took that case and helped corporations exploit enslaved children without consequence, I think you deserve to have it brought up literally every time anyone on Earth breathes mention of your miserable existence.)

Anyway: I'm not qualified to speak on the legal soundness of this defense, but in the real world, there are a lot of problems with it.

For starters: as I've mentioned several times now, we were all led to believe that the Foundation actually ***is*** .org, and that its entire reason for existence was to prevent this exact flavor of corporate white-collar crime.

For another, the Foundation's _explicit mission_ and reason for existence is:

> …to ensure free access, in perpetuity, to the software projects we support.

I guess I'm not sure what software projects the _WordPress-effing-foundation_ supports if it isn't, ya know, _WordPress_.

Now, at this point, Matt would argue the Foundation _is_ actually doing its job and he's totally within his rights, because WordPress itself actually _is_ still available to everyone. (He argues this, in fact, in the legal filing.) Anyone, he points out, can still access WordPress itself, and use it for any reason.

Problem is: we have all been led to believe, for decades now, that access to .org is _very explicitly_ a part of using WordPress.

And why wouldn't we!? The API exists in every WordPress install. Pretty much the first thing you see when you log into a new WordPress site is a prompt to install themes and plugins _straight from WordPress.org_!

In fact, ironically, pretty much the only place on the internet you might host a WordPress site that _doesn't_ include that privilege is…WordPress.com.

I just downloaded the latest version of WordPress, and did a quick search: `wordpress.org` appears _nearly a thousand times_ in the core WordPress code! (It also appears in two of the four links you get after you click the download button, with a Foundation link being one of the other two.)

![A search for WordPress.org in the base WordPress install reveals a total of 957 search results in 277 files.](/images/post_images/fire-matt/orgsearch.png)

I didn't actually try it, but I'm gonna make a well-educated guess that if I started commenting out those lines of code, or replacing that domain, my WordPress install wouldn't keep working for very long.


<CalloutPlusQuote>

Whatever the courts decide, I think it's more than fair to say WordPress.org _is_, for all intents and purposes, a part of WordPress.

</CalloutPlusQuote>

It would have never crossed any reasonable person's mind that access to the theme and plugin repository, and the entire community under the .org umbrella, was somehow separate from WordPress.

True, Matt never signed a contract where he agreed to give WP Engine, or anyone else, free use of .org.

But he _also_ never did anything to suggest to anyone this whole enterprise was his and his alone. Quite to the contrary; it seems he very deliberately let us all believe that WordPress.org is indeed a fundamental part of WordPress; a service anyone and everyone in the community could count on indefinitely and under any circumstances.

We've never had any reason to think otherwise.

**I can't help but feel that _everyone_ in WordPress is being betrayed here**.  We _all_ believed WordPress.org was in the hands of a benevolent nonprofit, not a tyrannical dictator. We _all_ thought this could never happen to _anyone_ in the community.

<CalloutPlusQuote>

Everyone believed—as any reasonable person would—that WordPress.org was _part of WordPress_, insomuch as access to it was understood to be a permanent, integral, irrevocable aspect of the software.

</CalloutPlusQuote>

Zero businesses would've been built on this software if _this_ had been the public face at the beginning; if it had been clear that anyone and everyone's fortunes were subject to the whims of a petty, childish narcissist.

Nobody even realized .org was entirely owned and operated by Matt Mullenweg, _let alone_ that access to it could ever be revoked for any reason he decided was valid, with zero other governance or authority keeping him in check.

<CalloutPlusQuote>

Whether deliberately or not, Matt let all of us believe in a lie.

</CalloutPlusQuote>

Using WordPress.org with WordPress is as fundamental to the software as the app store is to using an iPhone.

It's as ingrained in the ecosystem as npm is for JavaScript. If a Microsoft competitor was one day blocked from npm, the community would very rightly revolt. And taking access to .org away from a competitor is no less unacceptable of Matt and Automattic that Microsoft's behavior would be in that unthinkable scenario.

This sums up the obvious duplicity rather well:

![A tweet from Trent, @trentlapinski : Apparently I spent 5 years of my life just working on some dudes website and not the open source project I thought it was. Cool. Thanks. #wpdrama](/images/post_images/fire-matt/some-dudes-website.png)

Matt _might_ have a legal point here. Once more, I'm not a lawyer, but: from a purely legal standpoint, one could understand where Matt may technically be within his judicial rights.

But _having the right_ is not the same as _being in the right_. And we're only in this position because Matt fleeced the entire community into thinking he didn't possess the power he secretively hoarded for himself, and spent decades convincing everybody who ever touched WordPress it was in better hands than it actually is.

We all bought a lie. And now we have two paths: remove the liar; or pick up the pieces and build something new, with proper governance, safe far away from the previous steward's control.

### 10.24: It's been a week, and Matt's apparently still balking at that latest employee buyout offer

There's no new news to report here, but [anonymous reports out of Automattic](https://antimattic.net/index.php/2024/10/19/get-the-f-out-baby-please-dont-go/) suggest that employees who tried to opt into Matt's latest buyout offer from last week (reported above) are being told they actually can't leave yet.

It's still unclear how many might have opted in, as again: the terms had to be accepted via Slack DM directly to Matt. So he's the only one who knows for sure. But going by the reports from the inside, it sounds like there must have been several.

Maybe more than Matt anticipated? Or, maybe Matt just woke up to the reality that jettisoning even more employees would be a further setback to a workforce that's already strongly inhibited by its leader's maneuvers. (Remember, it's not just Automattic employees; dozens, if not hundreds of contributors to WordPress have been blocked or otherwise alienated. The work has slowed from both within and without, for a wide variety of reasons.)

In any case, not only is Matt walking back his explicit promise (familiar?) and telling employees they actually have to stick around for a while; what he's doing may very well be against California law, which, to quote the above post, "stipulates that employees are to receive a reasonable time of not less than five business days to consult an attorney when receiving an offer of separation."

Imagine this for a second.

Your CEO says "DM me if you want to leave. You'll be gone tomorrow with nine months of severance."

You decide that sounds good, so you take the deal.

And then…you have to stay.

<CalloutPlusQuote>

You just outed yourself, directly to the CEO who demands unconditional loyalty. You just put your name on a list. You're one of the dissenters. And you're _forced to stay_, because you trusted his word and he betrayed that trust.

</CalloutPlusQuote>

Just unfathomable irresponsibility, and cruelty, on Matt's part.

I don't know at this point if this man is even capable of empathy.

### 10.28: Matt cries freedom of speech, but censors speech he disagrees with

This first item is from a week ago, but: in response to WP Engine's injunction, Matt published some overwrought dreck titled "[My Freedom of Speech](https://ma.tt/2024/10/first-amendment/)," where he insists that his own first amendment rights would be gravely infringed, were access to WordPress.org restored to WP Engine.

It's quite a stretch, and I don't think anybody really takes it seriously. Especially because crying about "freedom of speech" has become pretty much the go-to defense for any and every problematic public figure these days. (“_Remember when you could just say [racist/sexist/bigoted things] and nothing would happen? What ever happened to freedom of speech_?”) So it's a far-from-surprising move from Matt.

I didn't report on that post before now, because on its own, it's not really that important. (Similarly: Matt's back-and-forth with DHH, and his hilariously failed attempt to hire Kendrick Lamar to write a WP Engine diss track, haven't made it here. That's because while those do indeed show Matt's childish ineptitude and lack of basic human qualifications for the job he holds, they're mostly just additional data points.)

The whole post is just Matt screaming into the void in the same melodramatic and self-victimizing way he always does. But new developments have arisen that make this more relevant than it was when it was just a tantrum.

In particular, The Register is reporting [WordCamp organizers are being forced to provide social login credentials, and to take down pro-WP Engine posts](https://www.theregister.com/AMP/2024/10/28/wordcamp_password_sharing_requirement/). Thus far the examples are few, but apparently WordCamps—which are almost all community-organized and run by volunteers who just want to get together with other WordPress users—are now being forced to fall in line with Matt's personal agenda and talking points.

Meanwhile, WordCamp attendance has been impacted by all this drama, as Matt's ridiculous shenanigans are quite predictably having a pronounced negative impact on enthusiasm. So some organizers, at least, are being forced to make do with less, even as they're also being forbidden from saying anything about it that disagrees with Matt's viewpoint. (Notice that only pro-WP Engine posts were targeted. It's not as though _all_ references to the ongoing debacle were barred; only those that Matt disagrees with.)

At the same time, the website [Bullenweg.com](https://bullenweg.com), has faced threats against its speech as well.

Bullenweg is a site that chronicles a timeline of all of Matt's "bull," i.e., problematic behavior, created in the midst of this mess and apparently run by one or more anonymous developers.

Mullenweg has reportedly been attempting to acquire and/or take down Bullenweg for a while now. Then, as of this weekend, the entire page was replaced with a message saying:

> Bullenweg.com is no longer available following threats of legal action from Matthew Mullenweg.

(Interestingly, as of this writing, that message has been replaced with a direct and severely damaging quote from one of the lawsuits against Matt. So whoever the anonymous person or group behind Bullenweg is, it would appear they might not be going down without a fight.)

<CalloutPlusQuote>

So to summarize: when Matt has to actually support software equally, it's an infringement of his first amendment rights. But when somebody says something he doesn't like, it's wrong, and he gets to censor it.

</CalloutPlusQuote>

This isn't new, or surprising. As a colleague put it: having lawyers censor language you don't like while crying about free speech is a classic of the genre. It's something men like Matt do all the time.

But it's just one specific iteration in a broader pattern that we see continuously from Matt. There's always a clear double standard: _my_ speech is free and protected; _your_ speech is restricted.

When it happens to you, you deserve it. When it happens to me, I'm the victim.

[The rules exist to protect me, and restrict you](https://en.wikipedia.org/wiki/Francis_M._Wilhoit#:~:text=Wilhoit's%20law,-This%20quotation%20is&text=Conservatism%20consists%20of%20exactly%20one,binds%20but%20does%20not%20protect.).


## If Matt cares about WordPress, he should step down immediately. And if Matt won't step down, he should be removed.

<CalloutPlusQuote>

The weapons Matt Mullenweg has wielded unilaterally in this war shouldn't even _exist_, let alone be controlled by one person.

</CalloutPlusQuote>

I believe the ability to block an entire hosting provider from accessing the plugins repository is a power that nobody should have. If such unthinkably drastic measures could _ever_ be justified, this case most certainly doesn't seem extreme enough for that.

Imagine if Microsoft got into a dispute with Apple, and decided to block npm for anyone using a Mac.

Imagine if Apple got into a dispute with Google, and blocked all text messages from Android phones.

Imagine if Google had a dispute with Amazon, and blocked all Amazon communications in Gmail. Or with Walmart, and prevented store locations from showing up on Google Maps.

And imagine if _one person_ at any one of those companies had both the power to make that decision, ***and*** was the sole arbiter of what justified that measure, unilaterally and without challenge.

_This is the scale of thing we're talking about._ This is the collateral damage Matt has unleashed on the WordPress community, and it's not to _anyone's_ benefit, except maybe Matt's and his own companies'. (For now, anyway. We'll see how it all shakes out; it seems pretty inevitable that a class action suit will follow and this all gets dragged into court.)

Virtually no WordPress users are happy about this, no matter how they felt about WP Engine. Certainly, none benefit.

<CalloutPlusQuote>

No reasonable person could argue WordPress is in a _better_ place today than it was a week ago, or is on a better path now than it was then.

</CalloutPlusQuote>

It's less secure, less trustworthy, more volatile, and overall just not something _anybody_ is as excited about as they were a week ago. People who spent the majority of their lives working on this software are leaving it. Professionals are looking at new solutions and tech stacks, to keep their clients out of the line of fire. Major sites are considering changing platforms, when they wouldn't have had any reason to previously.

We all sat by as one of our neighboring planets just got fired upon (forgive me, I'm going to the Death Star metaphor one last time). And as if that weren't bad enough, the man who ordered that strike _insists_ he's doing the right thing, by putting our neighbors directly in the path of harm, and incinerating the trust and security of our shared community.

Matt's clearly willing to burn it all down to score a pyrrhic victory, and that's not a power he or anybody else should ever have over any community, let alone one this size.

Matt has to go.

I don't expect him to be removed from Automattic leadership (although if there actually _is_ a board, or other people who can challenge Matt's power there, I think they absolutely _should_ be considering whether that's the right move for the company). But in any case:

<CalloutPlusQuote>

It's clear that the blurry lines between WordPress.org and WordPress.com should be turned into unbreachable walls, with no one company on both sides, or able to exercise power over the Foundation and/or Organization.

</CalloutPlusQuote>

I don't care about Automattic giving 5% to WordPress anymore. I want it to give up Matt's unchecked, unilateral power. Because it's clearer than ever he can't be trusted with it.


## Addendum: on the future of WordPress

(_This section was added on 9/30 and 10/1_)

Matt's repeatedly downplayed his role as dictator by saying if he ever turns into "Evil Matt," WordPress can just be forked—as though this is something incredibly easy and simple. Technically, sure, anyone could press the button to fork WordPress core, but that doesn't really solve the problem. The Foundation/.org would still oversee the themes and plugins repository in that scenario, plus the news feed, and who knows how many other things in the ecosystem—all of which would _also_ need to be replaced in order to fully extricate WordPress from Matt's control, and all of which would cost _massive_ amounts of money.

Each version of WordPress is downloaded tens, if not hundreds of millions of times. The entire plugin repository would need to be replicated, with all its untold millions of interactions a day. Same with themes, and probably lots else.

Infrastructure on that scale is a colossal undertaking that isn't anywhere nearly as simple as just pressing a button or dropping some stuff on a CDN—and that's without even getting into the logistical nightmare of keeping this new fork updated and maintained, which would require a huge dedicated team.

It's possible enough of the community rallies behind a fork to create a critical mass, but that seems unlikely to me. That's incredibly difficult to pull off in several ways, especially without some pretty massive cash behind it. And whoever's fronting that cash probably wants a return, and probably holds a position of power in that new world, and so we've likely just recreated the same problem in a new form.

I think the better approach is to reshape what we have, not throw untold resources at forking and rebuilding everything, only to possibly end up in the same situation all over again, just with a different dictator.

It's clear to me what WordPress needs is community governance—some kind of board or council—not control by a dictator. The kinds of decisions Matt's making shouldn't be made by one person or organization, and they shouldn't be made by anyone with a business stake or conflict of interest in their consideration or execution.

Clearly, too much power has been concentrated in the hands of too few.

Ironic, then, that Matt insists venture funding is good as long as capital doesn't achieve too big a stake and take control, as he's essentially just made himself the embodiment of that problem. Whether it's a VC or a [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life), the risks of corruption and exploitation are the same.

The WordPress Foundation claims its reason for existence is "[to ensure free access, in perpetuity, to the software projects we support](https://wordpressfoundation.org/)."

It's quite obvious the man who helms the foundation, who authors the news, and who holds pretty much all the cards when it comes to WordPress, isn't interested in any ideals but his own.

I believe an entirely new leadership structure is needed. Maybe Matt still has a say in this new form of community governance (I remain vague on its details because I don't believe my place is to make that prescription), but it should never be the case again that Matt's say is all that matters, or that nobody else can override his authority.
