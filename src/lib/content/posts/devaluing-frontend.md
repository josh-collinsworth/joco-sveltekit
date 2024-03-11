---
title: The quiet, pervasive devaluation of frontend
date: 2024-03-07
updated: 2024-03-09
categories:
  - personal
  - opinion
  - css
  - web
coverImage: deval.webp
coverWidth: 1200
coverHeight: 630
excerpt: I keep noticing those of us in the frontend field being treated much the same as nurses, paralegals, and executive assistants. Our work is seen as important, certainly, but just not the same as, or as important as, the “real” work.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
	import Footnote from '$lib/components/FootnoteLink.svelte'
	import FootnoteAnnotations from '$lib/components/FootnoteAnnotations.svelte'
</script>

There's a trend I've noticed—or at least, I _think_ I've noticed. It's the kind of thing that's hard to be sure of; the kind that might genuinely be true, or might simply _appear_ to be true if you look at it a certain way.

I can't tell if I'm right, or if the shapes I'm envisioning in arbitrary ink blots say more about me than they do about what I'm observing.

Maybe it's both. Maybe it's all subjective gray area and I'm just picking a spot to draw a line.

I guess you can decide for yourself.

---

<CalloutPlusQuote>

I feel like I'm seeing a widespread diminishment of the practice of frontend. Nearly everywhere I look, I notice its importance minimized, and its challenges trivialized.

</CalloutPlusQuote>

This effect might be invisible to you right now. And thus, you might be reflexively inclined to say it doesn't exist.

Maybe you're right. Maybe it doesn't. Maybe I just need to step away from my little screens in my little basement office a little more often.

Or, maybe it's just like any other implicit bias; maybe it seems like it doesn't exist because it feels so _ordinary_ until you know what to look for.

So: let's talk about what I see. Maybe you'll see it, too.


## I see it in the way we talk about frontend languages

I notice CSS is widely considered some or all of the following: unmaintainable; subjective; messy; unruly; unpredictable; a footgun; overly complicated; unscalable; and a nightmare.

(I generally disagree with all of those. But then, I'm also fond of saying CSS is the only language that gets blamed when the _author_ is bad.)

But despite all these claims, CSS is _also_ somehow "not a real programming language." Many people online will tell you so, often quite loudly, and sometimes even using memes. Same with HTML.

<CalloutPlusQuote>

It's like CSS exists in some bizarre quantum state; somehow both too complex to use, yet too simple to take seriously, all at once.

</CalloutPlusQuote>

I find what most of those people actually _mean_ is: HTML and CSS aren't _scripting_ languages. Which: a) of course they aren't; and b) is not really the point at all.

CSS is a programming language because that's what you're doing when you write it; you're _programming_ the application's presentation logic. And that's important, because CSS has power enough to either maximize the useability of software, or to ruin it beyond all utility. (Really; you'd probably be astounded how many ways there are to utterly destroy anything on the web with hardly any CSS.)

<CalloutPlusQuote>

In many ways, CSS has greater impact than any other language on a user's experience, which often directly influences success. Why, then, is its role so belittled?

</CalloutPlusQuote>

HTML is similar; HTML might not have things like loops and conditionals, but it is still a programming interface nonetheless because it's how you _program_ a UI—and to do it well requires as much care and expertise as any other language.

### Language is reality

This might all sound trivial. It might seem like I'm just asserting my stance in some petty online argument. Who cares what developers argue about online? Get a life (as we used to say in the '90s).

However, I believe there are actually very important reasons to care.

To assert that frontend languages are not programming languages is to assert that what one is doing when writing them is not programming, but something _else_. Something _different_.

Something—perhaps not explicitly spoken, but undeniably implied—_lesser_.

And yes, as biases go, even if there _is_ one against frontend developers, it would be pretty hard to rank it above any of the myriad _other_ biases present in everyday society…

…unless this bias is actually a _part of_ those other biases?

[Frontend tends to be the most diverse job title among developers](https://cord.co/insights/diversity-and-inclusion/articles/gender-representation#:~:text=Front%20End%20is%20the%20most,and%200.07%25%20non%2Dbinary.). If you wanted to find the dev specialization with the _most_ people who aren't cishet white males, you'd pick frontend.

Do we honestly believe the language around frontend is different purely by mere coincidence?

## I see it in the way we talk about practices

Certain pursuits are validated with importance, dignity, and honor.

Doctors; lawyers; architects; CEOs; software engineers.

Some kinds of work are "serious" work, which is well and good—except that, implicitly, that means other kinds are _not_ serious.

We might not ever say it, or even think it, but when we cast some people as heroes, we relegate others to the role of the sidekick—even though their labor is no less important, and they do at least as much to push the work toward success.

Nurses; paralegals; interior designers; executive assistants; frontend developers.

(Surely it's a coincidence the first group tends to be more male than the second.)

Other forms of development are generally considered _serious_ work. They're _important_. They're _real_ computer science. (Computer science itself being a higher level of things we've decided are real, serious, and important—maybe not quite as much as medicine or law, but then again, maybe so in some circles.)

Engineering is unquestionably difficult and respectable work. The idea that other engineers are smart—even smarter than we are—is the kind of stereotype that feels so common and true it's rarely even questioned.

<CalloutPlusQuote>

Mostly, nobody actually *says* frontend is less important, or less real, or that you don't have to be as smart to do it. But it often seems to be implied.

</CalloutPlusQuote>

If I were to guess at the origins of this perception, I'd propose it might all come down to optics. Frontend engineers work in languages that, while notoriously difficult to master, are relatively straightforward to learn. A lot of engineers stop at the basics and move on to other things—which is fine, of course.

But I posit this leads to a [Dunning-Kruger effect](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect) where those who haven't taken the time to learn what they don't know never actually become aware of that hazardous chasm, or the mistakes they might have _already made_ relying on their established knowledge.

I'd guess most engineering managers and other folks in charge of developers probably know some HTML, CSS and JavaScript. These tend to be basics most developers touch on early on.

I think when those people in charge look at a frontend developer, there's an unconscious "I could do that."

<CalloutPlusQuote>

Our output is artistic, to some degree, and artistic things have a long, storied history of being tragically devalued merely because they seem simple and enjoyable.

</CalloutPlusQuote>

Contrast our workflows and our output with a backend developer, or site reliability engineer, as examples. They live in worlds of daunting terminals, oceans of data, and inscrutably interconnected systems. What they do _looks_ scary, like something I couldn't do and wouldn't want to.

Their output is easily measurable. A new API feature; a more efficient database; crises averted and crashes prevented. They go on charts and get presented to board members.

Our work? Much harder to measure.

Mostly, people just critique it.

Like art.

### Naming things is hard

Do you ever notice that the job of a person who works on frontend is, explicitly, developing sofware—and yet, esteemed titles like "software developer" (or the arguably even more esteemed "software _engineer_") very strongly imply something else?

If our job title _does_ include the word "engineer," it will almost certainly specify _what_ we're engineering. It'll be _UI engineer_, or _frontend engineer_, or maybe the newer (and arguably more fitting) _design engineer_.

But it's probably not "software developer" or "software engineer" without any other qualification. Because that, tacitly, _is not what we do_.

Somebody _else_ does that. What we do is, at best, only a _part_ of that. (Implicitly: _less_ than that.)

Sure, this is nuance of language and these titles serve to disambiguate. I get that. Nobody sat down one day and came up with these titles, let alone maliciously; they're just functions of language and time, and the way they shook out probably wasn't anyone's design.

Still: we ought to know by now the power language has to shape our perceptions, and in turn, our behavior.

<CalloutPlusQuote>

The language implies interfaces are decoupled from the software, and not an actual part of it.

</CalloutPlusQuote>

Even though we engineer software all day every day, by definition, somehow what we do isn't seen as software engineering. It's different than that. It's _softer_ than that.

Certainly, we _should_ venerate the skills required to earn a computer science degree, or pass a whiteboarding exercise on data structures and algorithms. But why must we _only_ respect that type of skill?

Why does _anyone's_ work have to be "more?"

Why can't it all be important, and challenging, in its own way?

## I see it in the feminine coding of frontend

<CalloutPlusQuote>

Writing CSS seems to be regarded much like taking notes in a meeting, complete with the implicit sexism and devaluation of the note taker's importance in the room.

</CalloutPlusQuote>

Though critical to the project, frontend work will quite often be disregarded by those who consider it beneath them (usually men, and usually only tacitly, never explicitly). It's not serious enough; not important enough; not _real_ enough. Too squishy. Like soft skills.

Yes, of course, it's important. It's work that _somebody_ needs to do, certainly. But probably not the important people, whose valuable attention is focused on other, bigger, more important problems.

Design itself is typically conflated with frontend, and design has long been colored as a "feminine" pursuit. The deep technical challenges of frontend functionality are often mistakenly regarded more as a sort of painting with pixels; making things _look_ right, rather than _work_ correctly.

Incidentally, folks involved in UI and design tend to be hit harder in layoffs than their peers, who are perceived as "more technical." Women, too, are often laid off in greater numbers than men. So it's hard _not_ to see frontend devaluation and sexism as intertwined. (If they're even separate things at all, that is.)

## I see it in the way we talk about frontend developers

Frontend is complicated. Few would contend with that.

But for some reason, where the difficulty of other forms of engineering are generally blamed on the daunting complexity of computers themselves (and where, again, we generally revere the people who dare attempt to wrangle that complexity), there's a pervasive myth that frontend is only complex because _frontend developers made it that way_.

As though we added frameworks and compilers and heaps of packages to our projects because we simply didn't know any better.

<CalloutPlusQuote>

As though the nearly impossible job of supporting every possible device, operating system, screen size, browser, user preference, and interface in the past, present and future is so simple we invented all the complexity ourselves, just because we were bored.

</CalloutPlusQuote>

There are lots of jokes about frontend developers. There's nothing wrong with that. Often, we're the ones making them; we're not above laughing at ourselves, and besides, there are plenty of jokes about other specialties, too.

We like to kid about our affinity for new things. How we're always coming up with new frameworks. How we're always chasing the new hotness.

That's all well and good…until the joke starts to become the actual perception. Until we begin to be taken _less_ seriously, because our reputation is a punch line.

<CalloutPlusQuote>

Yes, as a group, we get excited about new things. But why doesn't that make us curious, or adaptable, or inquisitive? Why don't we get credit for our joy of learning, instead of denigrated for refusing to stay in place?

Why don't we get the benefit of the doubt?

</CalloutPlusQuote>

Browsers move _fast_, and they've evolved at an unprecedented pace in recent years. So I guess I'm not sure where the assumption that we frontend devs should be so intransigent in our tech choices comes from.

Shouldn't we be persistently reevaluating, when the landscape is constantly shifting?

Shouldn't we _try_ to keep up? To be better? To rework old ideas with new capabilities?

Don't we deserve to be considered just a bit more than flighty little magpies, chasing anything that's shiny?

## I see it in our responsibilities

In my experience (yours may vary, of course), frontend engineers are regularly deployed as "fixers" on projects. We often aren't included at the beginning stages, where we could easily identify costly accessibility, performance, and user experience mistakes; we're brought in at the end, when things have already been built and it's too late to change anything significantly. By then, it's our job just to pretty things up.

"Here; other people already made this." (i.e., they already did the _real_ work.) "Now we just need you to fix it up."

But…why is it broken?

Why aren't we addressing the pipeline that generated a flawed product to begin with?

<CalloutPlusQuote>

If our skills are valuable as duct tape over the cracks of organizational shortcomings, why aren't they valuable during the planning and decision-making that led to those defects, when we could potentially prevent them?

</CalloutPlusQuote>

Why are we considered mere decorators, brought in at the end to spruce the place up a bit?

(As though a decorator could fix a deeply inaccessible building with a fresh coat of paint and some classy furniture.)

## I see it in what's expected of us

The list of skills that a frontend engineer must know expands constantly and unendingly. The world where you could just learn some HTML, CSS, and JavaScript in a couple of months and be ready for a job is mostly in the past.

HTML itself is enough to fill a very thick book, if you want to do it right—and yet, it's often seen as the _simplest_ thing a frontend developer ought to know.

Then there's CSS, and JavaScript itself, with all its myriad quirks. Then you'll of course need to know a framework (probably at least a couple, including the legacy one the company still uses and will never get around to completely replacing), plus a slew of add-ons, plugins, and packages. Probably a system to manage them all, too.

Then there's accessibility, which is a topic so complex and nuanced almost _nobody_ gets it fully right. But it's your job, if you're on the frontend—and not your whole job, either. Just part of it. Good luck!

You've got to know things about SEO, too, and that, also, requires nearly a full-time focus to do extremely well, even though you'll be expected to manage it, too, in a small slice of your time.

Then there's design, and of course, that includes all the tenets of user interfaces and user experience—all of which a person could spend years learning all on their own.

More and more, you'll need to know about legal compliance. And marketing, which is its own whole college major.

You also need to know at least a little TypeScript. And come to think of it, you'll probably be expected to learn at least _one_ backend language, too. ("So you can unblock yourself" is the reason given, although "so you can do your own job, plus a little bit of someone else's," is sometimes more accurate.)

From there, it might just be some animation libraries. Charts and data visualization. Testing and assertion libraries. Command line utilities. Cookies. Caching (and cache invalidation). DNS. Networks. Performance. The edge. Serverless. GraphQL. AWS. Docker. At least a little about databases. How's your knowledge of email? Can you write us some regular expressions? Oh by the way, the marketing team needs you to dig into their analytics, maybe run some A/B tests.

Earlier versions of this post completely left out state management libraries—and said nothing of security. What do you know about preventing XSS attacks? CORS? Content security policies?

The list goes on. Yet, for this unceasingly distended list of skills, frontend is still that silly thing that isn't the _real_ dev work.

## I see it in the marketing

<CalloutPlusQuote>

Frontend tools market themselves as though frontend is something no one wants to do, and nobody should care about any more than they have to.

</CalloutPlusQuote>

Every tool promises to make frontend uncomplicated and fast; that's the only concern. They say it the same way I reassure my five-year-old that his vaccinations will be swift and painless; just something necessary to get out of the way as quickly and thoughtlessly as possible.

But when did speed become the main concern? And _why_?

I understand that "rapidly prototyping" is a good thing, but it feels like it's become the _only_ thing.

I sometimes find myself wondering whether other developers are simply building things and then throwing them away almost immediately. Is nobody actually _maintaining_ work these days? Has frontend just become an assembly line job, where maximizing output while minimizing hours is the only metric for success?

Is nobody thinking about what we might be trading away for this furious pace? What quality and good ideas and accessibility and user experience we might just be flying by in our pursuit of the rapidest, prototypiest interfaces we can possibly speed-run?

It doesn't seem like it. These tools, the speedy ones: they promise you can just get on with other things ("more important things" is implied, if not overtly spoken), as long as you use them.

Like every frontend concern is something you just install a WordPress plugin for.

The proliferation of AI tools plays into this as well. I'm sure somebody's working on some AI product to build your backend for you (if there aren't already such products on the market). But in the meantime, I've already seen a handful for frontend. Their code isn't accessible, or well built, and it took dedicated frontend engineers to point that out. The companies making them didn't know, or didn't care (or both). All that mattered was slapping something up on the screen as quickly and easily as possible.

## I see it in how "good enough" has become the goal

The web is positively overrun with inaccessible code. Odds are, even if that specific problem doesn't currently affect you, you still see forms that won't submit, invisible buttons, errors surfaced in the UI, utterly broken layouts, things that don't work on mobile devices or in certain browsers, text and fonts that are difficult to impossible to read, interfaces that are impossible to zoom or scroll, interactions that break down, and silent or unhelpful error messages—all quite likely on a daily or near-daily basis.

This, of course, is to say nothing of the homogeny of the web. The same text, the same colors, the same user dropdown menu, the same little circle with the same little number in it to get your attention; the same marketing, the same three-column layout, the same hero with the image and the big button; the same dimly pulsing skeleton UI that shows up when you click something.

Sites with good design—both aesthetic and functional—are a tragic rarity. And I personally see this as a direct tradeoff we've made in our pursuit of shipping as fast as possible.

<CalloutPlusQuote>

It seems like nobody thinks of frontend as a critical part of the product anymore; they only think of it as the nice box the product arrives in.

</CalloutPlusQuote>

We need a framework; React will be good enough. No need to look any further.

Just pick a nice color and a serviceable font. No, don't bother writing any custom CSS; whatever Tailwind comes with will be good enough.

Anything to move on to the next thing. Because whatever the real, important, serious thing is on this project, it isn't _this_. Not the frontend.

Not this thing each and every user will look at and interact with every single time they use the product.

## I see it everywhere

But then again…maybe that's just me.

Maybe I'm feeling sorry for myself. Maybe I'm just a little depressed right now. Maybe I have an inferiority complex and I'm projecting it on everyone else.

Or…maybe there's some truth to this.

Maybe it's both.

I guess that's up to you to decide.

But maybe just keep your eyes open, ok?

You might see something you haven't noticed before.
