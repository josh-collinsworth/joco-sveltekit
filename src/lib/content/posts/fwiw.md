---
title: "For what it's worth: whatever I know about getting hired in tech"
date: 2024-06-07
updated: 2024-06-07
categories:
  - opinion
  - personal
coverImage: fwiw.svg
coverWidth: 1920
coverHeight: 1080
excerpt: "A collection of things I've learned over my decade in the industry, on how and where to look for jobs, applying, interviewing, and all those fun things. For whatever it's worth."

---

<script>
	import PullQuote from '$lib/components/PullQuote.svelte'
	import SideNote from '$lib/components/SideNote.svelte'
	import Note from '$lib/components/Note.svelte'
	import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
	import Footnote from '$lib/components/FootnoteLink.svelte'
	import FootnoteAnnotations from '$lib/components/FootnoteAnnotations.svelte'
</script>

<!-- This markup was generated using the deprecated TableOfContents component. -->
<div class="toc-wrap s-QxGJVNas-JkL"><aside class="toc s-QxGJVNas-JkL"><h2 class="s-QxGJVNas-JkL"><span class="opening-bracket s-QxGJVNas-JkL" aria-hidden="true">[</span>Table of contents<span class="closing-bracket s-QxGJVNas-JkL" aria-hidden="true">]</span></h2> <ul class="toc-list s-QxGJVNas-JkL"><li><a href="#what-this-is-and-isnt">What this is (and isn’t)</a></li><li><a href="#before-you-start">Before you start</a><ul><li><a href="#know-what-you-want">Know what you want</a></li><li><a href="#shore-up-weaknesses-but-focus-on-strengths">Shore up weaknesses, but focus on strengths</a></li><li><a href="#create-a-behavioral-story-bank">Create a behavioral story bank</a></li><li><a href="#if-you-can-be-financially-prepared">If you can, be financially prepared</a></li><li><a href="#get-out-there-and-network">Get out there and network</a></li><li><a href="#you-need-a-website">You need a website</a></li><li><a href="#have-some-writing-templates-ready">Have some writing templates ready</a></li></ul></li><li><a href="#where-to-look">Where to look</a></li><li><a href="#applying">Applying</a><ul><li><a href="#track-your-efforts">Track your efforts</a></li><li><a href="#front-load-the-search">Front-load the search</a></li><li><a href="#be-among-the-first-to-apply">Be among the first to apply</a></li><li><a href="#go-to-the-source">Go to the source</a></li><li><a href="#dont-worry-how-many-other-applicants-there-are">Don’t worry how many other applicants there are</a></li><li><a href="#write-good-cover-letters-if-you-can-dont-if-you-cant">Write good cover letters if you can; don’t if you can’t</a></li><li><a href="#dont-disqualify-yourself">Don’t disqualify yourself</a></li><li><a href="#be-active-online">Be active online</a></li></ul></li><li><a href="#resume-advice">Resume advice</a><ul><li><a href="#focus-on-effect-not-actions">Focus on effect, not actions</a></li><li><a href="#talk-about-yourself-as-a-human-not-a-technology-checklist">Talk about yourself as a human, not a technology checklist</a></li><li><a href="#tailor-your-resume-to-the-job">Tailor your resume to the job</a></li><li><a href="#keep-it-short-and-simple">Keep it short and simple</a></li><li><a href="#sweat-the-details">Sweat the details</a></li></ul></li><li><a href="#interviewing">Interviewing</a><ul><li><a href="#fail-early-and-often">Fail early and often</a></li><li><a href="#have-your-behavioral-story-bank-ready">Have your behavioral story bank ready</a></li><li><a href="#take-the-time-you-need">Take the time you need</a></li><li><a href="#never-ever-ever-say-bad-things-about-previous-jobs-or-coworkers">Never, ever, EVER say bad things about previous jobs or coworkers</a></li><li><a href="#always-have-questions-ready-and-always-ask-them">Always have questions ready, and always ask them</a></li><li><a href="#be-prepared-to-talk-salary">Be prepared to talk salary</a></li><li><a href="#follow-up-and-connect-after-interviews">Follow up and connect after interviews</a></li><li><a href="#ask-for-feedback">Ask for feedback</a></li><li><a href="#one-weird-trick">One weird trick</a></li></ul></li><li><a href="#handling-live-coding-interviews">Handling live coding interviews</a><ul><li><a href="#preparation-and-mindset">Preparation and mindset</a></li><li><a href="#once-the-clock-starts">Once the clock starts</a></li><li><a href="#dont-panic">Don’t panic</a></li><li><a href="#after-times-up">After time’s up</a></li></ul></li><li><a href="#talking-salary">Talking salary</a></li><li><a href="#mindset">Mindset</a><ul><li><a href="#things-are-bad-but-i-think-theyre-getting-better">Things are bad, but I think they’re getting better</a></li><li><a href="#its-not-you-its-them">It’s not you, it’s them</a></li><li><a href="#take-care-of-yourself">Take care of yourself</a></li></ul></li></ul></aside></div>

Every once in a while, somebody will reach out to me with advice on navigating their development career. Sometimes it's how to break into the industry; sometimes it's more about career progression, where to look for jobs, or how to interview.

<CalloutPlusQuote>

Eventually, I realized I was having the same conversation often enough that it would probably save everyone a lot of time if I just wrote down all my advice.

Hence: this post.

</CalloutPlusQuote>

This will serve as a collection of whatever I've learned, for whatever it's worth. I'll do my best to keep it up to date as the months and years roll on, but this is everything I know (or at least, am pretty sure I know) right now.

## What this is (and isn't)

**This is advice for anyone actively looking for a job in tech, or about to start**. It aims to cover the search, from beginning to end.

Just to get this out of the way right off the bat: I'm no authoritative expert, either on hiring or on tech in general. If there was a talking heads-style TV show about tech careers, nobody would call me up to sit on the panel.

I don't claim to know everything. I don't even claim everything I _do_ know will be useful in the first place; what worked for me before might not work for you now.

However, I've had what I think is fair to consider a pretty good run in tech so far. I've been building things on the web for about ten years. I've worked for agencies, taught development courses, and I've spent the last few years full-time in frontend at companies like [Flywheel/WP Engine](https://wpengine.com), [Shopify](https://shopify.com) and [Deno](https://deno.com).

<CalloutPlusQuote>

I'll be the first to tell you a lot of my journey has been lucky. Still, though: some of that luck is reproducible.

</CalloutPlusQuote>

This will be very US-focused, and developer-focused, so not everything will apply to you if you're in another country, or in another role in tech. I think a lot of it still will, however.

I won't go deep into specifics on certain things, just because there are plenty of resources already available on those topics. (For example: how to write and design resumes, or understanding algorithms.) We _will_ cover some general advice on those topics, though.

Finally, I have to thank the members of the [ShopTalk Show](https://shoptalkshow.com) [D-D-D-Discord](https://www.patreon.com/shoptalkshow) for helping me flesh out this post with their own best suggestions and advice, especially [Dave Rupert](https://daverupert.com/), [Andrew Walpole](https://andrewwalpole.com/), and [Erick Merchant](https://erickmerchant.com/). Several of these points are theirs; I just added some fluff.

---

This is very long, which is why I've broken it up into sections. I've tried to make it as easy as possible to skip around, and get the ideas involved without reading every single word.

All that said: the rest of my advice has no basis more reliable than my own meandering experience.

I will dispense this advice now.

For what it's worth.

(Your mileage may vary.)

##  Before you start

Before you get to the thrilling and wonderful world of applications and phone calls with strangers, you should spend some time—as long as it takes—checking these things off your list, to ensure you're as prepared as possible. (If you've started already, these are things you might want to work on sooner than later.)

### Know what you want

Obviously, what you want is a job, because you'd like to make money to eat and survive and pay for Netflix. But since that answer probably won't get you anywhere in interviews, let's go a little deeper.

Really think about what's worked for you in the past, and what hasn't. What _kind_ of role best suits you, and in what type of organization? Do you like being a small part of a big team, and having well-defined criteria? Or, do you like having lots of autonomy and forging your own path? (Or somewhere between?)

What sort of opportunities would you want in your next position? How would you like it to be different from your last job, and how would you like it to be the same?

Would you take less pay for something more fulfilling?

For that matter: what makes you feel fulfilled in the first place?

If it helps: write down every criteria you can think of (pay, benefits, autonomy, company size, prestige, title, interesting work, stability, etc.) Then, rank them. Compare that list to any job you consider applying for, to see how closely it matches. (You probably won't find a perfect fit, but the list _will_ help you notice bad fits.)

<CalloutPlusQuote>

Spend some serious time figuring out what you value most, and put it down on paper.

</CalloutPlusQuote>

While I'm not generally a fan of personality tests and the like, I've found the [CliftonStrengths Assessment](https://www.gallup.com/cliftonstrengths/en/252137/home.aspx) (also called the StrengthsFinder, or Top Five Strengths) to be illuminating for me, personally. It's helped me to understand what I value, what I bring to the table, and where I fit in best.

Whether or not you take any tests, though, be honest with yourself.

Write your answers down, and keep them handy; they'll help you filter your search, and help you answer interview questions like "why are you interested in this company?"

As a bonus: they'll _also_ help guide you to some good questions _you_ can ask in interviews. We'll talk a little more about both of those later on.

### Shore up weaknesses, but focus on strengths

If you have any severe deficiencies, it's worth addressing those immediately. Now's the time to make sure you're ready for whatever comes your way.

Learn the basics of any technology or area that's likely to come up for the kinds of role you'll be going for.

<PullQuote>

I personally believe effort is better spent bolstering strengths than mitigating weaknesses.

</PullQuote>

You don't need to be an expert in any of those things, by any stretch, but they shouldn't be unfamiliar to you. If you can have a basic high-level conversation about them, that's probably good enough for now. (_I've been working in React, TypeScript, and Tailwind for years, and I wouldn't consider myself an expert in any of the three_.)

Beyond addressing any severe vulnerabilities, however: I personally believe effort is better spent bolstering strengths than mitigating weaknesses. There's usually a reason some things click with you while others don't, and so you're fighting against yourself trying to drag your lowest stats up. That energy goes a lot further leaning into things that come more easily. Plus, this is a long process; you need some wins along the way.

Don't get me wrong: you _should_ address your weaknesses, to some extent. But don't get so caught up in it you end up being average at everything.

<CalloutPlusQuote>

You'll be hired for what you're good at, not for what you've avoided being bad at. So don't leave any gaping holes in your armor, but also: don't polish your shield when you could be sharpening your sword.

</CalloutPlusQuote>

### Create a behavioral story bank

A "behavioral story bank" (_BSB, not to be confused with Backstreet Boys_) is a collection of stories you can tell about yourself any time you need to highlight your skills, positive qualities, and/or the results you've achieved. It's a prepared list of all your best stories about yourself.

If it helps: you can reverse-engineer your BSB from common interview questions (_look some up_).

Think of times you've had success, or faced adversity, or learned new things; times you overcame challenges; times you earned recognition, or your teammates thanked you for something you did.

Once you have a handful of those situations, put them into the [STAR format](https://www.interviewbit.com/star-interview-questions/) (Situation, Task, Action, Result), as short stories you can retell on demand.

Write the list down, and have it ready at all times. Ideally, have the stories ready to go from memory, but keep the list handy and refer to it any time you need to. That's your BSB.

<CalloutPlusQuote>

Your behavioral story bank might be your single most important resource. It'll help you write your cover letters, applications, and resume, and it'll give you solid answers to interview questions.

</CalloutPlusQuote>

You'll be returning to your BSB over and over again throughout the entire process. (Every time you go back to your BSB, you can think _Backstreet's Back, all right_!)

The point of this exercise is to have a list ready to go, so you're never caught off-guard, ready to answer any question on demand.

You can think of yourself a bit like a stand-up performer; have a set of your best material ready to go at any moment, and constantly refine it as you practice and gauge the results. To some extent, interviews are performative (for better or worse). So, be ready to perform.

One other piece of advice on your BSB: while stories should positively showcase your behaviors and results, they don't all have to be super business-y, or directly related. They can be from other industries, or even personal.

One example that's stuck with me through the years: a Latino applicant shared a story with me of overcoming racism from his school guidance counselor. His counselor tried dissuade him from going for his chosen academic field because of his race, and asserted he was better suited for the trades. The applicant rejected his counselor's racist discouragement, and found a way to succeed in his chosen academic field despite it.

That's obviously not a work story. But it's one that absolutely showed persistence in overcoming adversity (and, one that made me feel invested in that applicant, rooting for his success). Point is:

<CalloutPlusQuote>

If you faced a challenge and got positive results, it counts. Don't disqualify relevant experience just because it happened outside the walls of an office.

</CalloutPlusQuote>



### If you can, be financially prepared

If you have the luxury, save money for your search. If you don't (if you just found yourself laid off, for example), start cutting expenses now. You don't know how long this might take.

In any case: steel yourself. It's likely to take at least 6–8 weeks to find a job in the current market in the best-case scenario. It'll most likely be longer, and quite possibly, much longer. I say that not to scare you, but to prepare you for the current reality of things. Settle in, and find sustainable pace; this will be a marathon, not a sprint.

### Get out there and network

 In this era, where everything is digital, the more of a personal connection you can make, and the more people you can make it with, the better off you'll be.

It doesn't have to be just LinkedIn, or business-y meetups; you can do fun events, too (online or in person). Just make sure you're doing something to make you visible as a human, and to make some kind of actual connection with other humans.

A great way to do this is to get involved with any local or regional organization you can find. Most cities and metro areas will have developer meetups, and probably some dev groups on Discord, Slack, Meetup, etc. There may even be Facebook groups, bulletin boards, and the like.

Even if you aren't looking locally, I'd still recommend seeking out groups for professionals like you, especially in your area. Get involved, and get to know the members. Go wherever the crowd happens to be. If you can make in-person connections, they'll likely be your strongest, but online friends are real friends, too.

<CalloutPlusQuote>

Wherever you are, be active. Have helpful and friendly conversations. Share things. Become a name and face that people recognize and think of positively.

</CalloutPlusQuote>

Nobody likes the guy who pops into the channel on day one and says "hey everyone, I'm looking, have any jobs? Send them my way."

That's tactless. Don't be that guy. Nobody has any reason to help that person.

_Do_ let folks know you're looking, of course, but only _after_ you've gotten involved as a member of the group.

<CalloutPlusQuote>

Communities are not charities; you shouldn't try to take from them without first contributing to and participating in them.

</CalloutPlusQuote>

The more you can become a helpful, friendly person to other people, the more those people will remember you for any opportunities that come up.

<SideNote>

People commonly ask whether they should connect with strangers on LinkedIn. I don't have strong feelings one way or the other, but I generally don't connect with people if I don't have any idea who they are.

I'd recommend reading up on the pros and cons, using your own best judgment for your situation.

</SideNote>

### You need a website

Being on LinkedIn, etc. is a good start, but you shouldn't stop there.

<CalloutPlusQuote>

No matter how great your LinkedIn profile is, it's still just another LinkedIn profile.

It's hard to stand out when you're the same circle avatar, on the same page, with the same color and layout as everyone else.

</CalloutPlusQuote>

A personal website is a great way to stand out. You can, and should, link to it from everywhere. Having one has served me extremely well over the years.

Your website doesn't need to be fancy. Bonus points for building it yourself, but it's not a hard requirement. You don't have to blog, though it's a good idea, if you're into it at all. (“_But I don't have anything new or unique to say_,” you might argue. To which I might reply: “_This ain't the world's first job advice post, but you're still reading it_.”)

You don't even need to have multiple pages, or a lot of content. (This should go without saying, but: do ***not*** fill your website with AI-generated slop. People can smell that these days, and it _will_ backfire.)

However big or small, though, your site absolutely _should_ exist in some form, and it should look professional. After all, you're trying to get a job coding things. So, step one: make the things you code look really nice. Nice enough somebody might want to hire you to make that kind of thing.

If you aren't comfortable designing your own site, get some help, or use a template of some kind. If all else fails, mimic something tasteful and minimalist. Having a website that looks amateurish probably hurts you more than not having one at all, so put in the work.

Similarly: you need some projects to show. (Hint: the website itself could be one.)

<CalloutPlusQuote>

If you can link to something you've worked on professionally, definitely do that. Regardless: I'd recommend showcasing at least one personal project, or something you built yourself.

</CalloutPlusQuote>

(_This is less important if you've been in the industry a while, and your career track record speaks for itself. But it never hurts_.)

Whatever project(s) you show don't have to be big, or particularly ambitious. You don't need a full-fledged SaaS app, or an official open-source project. They don't even need to be particularly practical. But they _should_ be something you built on your own, to show you have the necessary drive and skills.

A simple game is fine, if that's your thing. Or maybe a tiny app that you find useful, even if nobody else does. Maybe it's a fan website, or a database, or some kind of calculator. Maybe it's generative art explorations.

It's up to you, and it really doesn't matter. The important part is:

1. You made something; and
2. It looks good and functions well.

Quality over quantity. One really good small project is worth a handful of sloppy demos, so get all the help and feedback you can. It's likely people will peer into the code, so make sure it's in good shape, and make it as accessible and performant as possible.

<SideNote>

I haven't mentioned GitHub to this point. I think you should have a profile, with some things in it, probably, but I don't think it's as important as the other factors. I've never gotten the impression recruiters put any stock at all into GitHub contribution stats.

</SideNote>

### Have some writing templates ready

Before you dive in, spend some time coming up with templates for the cover letters you'll be writing, and for the various types of emails you'll be sending. (Look up good examples, in each case.)

Use AI if that makes it easier; just be sure to read through the output extremely carefully, and put your own personal touch on it. AI is a tool to help you write; it's not a solution to replace your writing.

<CalloutPlusQuote>

If a recruiter catches any whiff of AI slop in your writing, it'll signal you're not invested, and that'll likely be plenty enough reason to toss you aside.

</CalloutPlusQuote>

Nonetheless: feel free to use AI to enhance your _own_ writing, if you can do it without sounding like a bot.

In any case: having these templates ready to go from the beginning will help minimize friction and time spent on tertiary tasks during the actual job search. When it's time to write a thank you, or a follow up, or a cover letter, you'll have  a head start, and won't lose a whole day researching and drafting.

##  Where to look

It's hard to deny the sheer volume of jobs, connections, and info available on LinkedIn. If you're not on there, you won't exist to a lot of employers.

If you're looking in earnest, I've had some friends strongly recommend LinkedIn Premium. It's usually available with a one-month free trial, and depending on your search, you may even be able to get hired before that month expires. I haven't used it, but it seems like Premium would be worth at least a month if you're really getting into the application phase.

All that said: LinkedIn is an especially desperate engagement generation machine, and that means the noise vastly outweighs the signal on the platform. (The feed is particularly noxious.) Search, and post, deliberately.

On the other end of the spectrum, I really like [Otta.com](https://otta.com). You won't get flooded with tons of jobs on Otta—in fact, it might seem like you barely see any jobs at all—but what you _do_ get will be much better tailored to your skills and preferences. I've been on Otta for well over a year, and while there are only a handful of jobs on there every week (and oftentimes, some of them will carry over from week to week), I can't remember any of them being poorly matched, or outside of my preferences. The platform also offers application and tracking tools.

In between those two, [Glassdoor](https://www.glassdoor.com) is also helpful, in my experience. The job volume is maybe lower than on LinkedIn, but the search filters work better, and there's more useful info available, including access to employee reviews of companies, and salary information. (As with any review site, take any individual review with a grain of salt, and look for patterns instead. Also consider _when_ reviews were posted.)

If you're looking for jobs with bigger tech companies, or with those in major tech hubs, [BuiltIn](https://builtin.com/jobs/) is a good resource that lets you tailor your search along many different parameters.

Finally, and perhaps most importantly:

<CalloutPlusQuote>

Get involved with any relevant groups in your area. Odds are, they'll have a place they share job openings with one another before they go out to the larger market. Make connections here, so you'll already have a foot in the door.

</CalloutPlusQuote>

I'd do this even if you're specifically looking for remote jobs at (inter)national companies. You never know who knows somebody at Microsoft, or who used to work for Shopify. Getting regionally involved will likely pay off the best, as you'll automatically have things in common with that group of people. Chatting local weather, sports, events, and/or restaurants goes a long way.

Again, however: be sure you're getting involved, and not just lurking for personal benefit.

---

Every job I've ever gotten or interviewed for has been through at least one of those venues; LinkedIn, Otta, Glassdoor, BuiltIn, and/or regional connections. So while there are others available, and while I don't have any reason to dissuade you from being on more, that's a pretty solid foundation in my experience.

A couple of extras, though: if you'd like to break into climate tech, [ClimateBase](https://climatebase.org/jobs) is a good place to look. And, if you'd like to try to land with an early-stage startup, [Wellfound](https://wellfound.com/jobs) is a great place to try. (That tends to be a more competitive market, however.)

## Applying

All right, you've covered your basics, and you're well prepared. Time to start sending out applications. Here's how I'd go about that process if I had to start looking tomorrow.

### Track your efforts

When I was applying for jobs in earnest, I kept a database table in Notion (a spreadsheet, essentially, in case you're not familiar). In it, I meticulously tracked every job I'd applied for, when, how, and what the status was, along with any other relevant notes and information. This helps in lots of ways:

1. You can visualize your efforts, and see how far you've gotten;
2. You won't end up forgetting which companies and roles you've applied to already;
3. You can track where you are in the process with each company;
4. You'll know when it might be time to follow up;
5. You can keep track of what conversations you've had, and with whom.

If you do this long enough, and with detailed enough notes, you might also start to get a sense for what's working and what's not.

So for those reasons, I'd highly encourage you to keep a spreadsheet with all the details you can. Looking for a job is a job in itself; you may as well take it seriously.

### Front-load the search

Your response rate will probably only be somewhere around 5–10%. That's not on you; it's just a weird, hard time in tech. But it does mean, on average, you'll need to apply to 10–20 jobs just to hear back from one.

Don't be discouraged by this; there are things you can do to grease your success rate. But when you're first getting going, put all your energy into sending out as many applications as you can. Don't be careless, and don't send out apps for jobs you know you'd never take or are wildly unqualified for. But do go for quantity initially.

There are a few reasons for this:

1. Later on, when your applications start turning into interviews, you won't have as much time to apply. So front-loading the process with applications helps make sure you've still got possibilities in the pipeline later on, when you want to be focusing more on interview prep and less on blasting applications at the wall.

2. You want to be getting as many interviews as possible. This isn't necessarily to maximize your odds short-term, but to gain valuable experience at interviewing itself. (More on that later.)

### Be among the first to apply

Jobs that have been posted recently—that is, within the last 24 hours or so—have a higher likelihood of engagement. After a day or two, most postings attract enough applicants to make the recruiter's eyes glaze over. Try to stay on top of postings, and be active on at least a daily basis, so you know as soon as a job you want goes up.

### Go to the source

Wherever possible, apply directly through the company's website, as opposed to applying through these third-party platforms. It may not make a difference, but it could help set you apart from the flood of applicants coming from LinkedIn, etc. Plus, while you're there, you can get a better sense for what the company's all about, and how it works.

### Don't worry how many other applicants there are

Some job sites show you how many people have applied to a posting already. **Ignore that number, no matter what it is**. (It will commonly be in the hundreds, or higher.)

Why apply to a job hundreds of other people have already applied for, you might ask?

- Many of those applications are probably bots;
- Many of those who _are_ human aren't qualified;
- Many who _are_ qualified will be eliminated for other reasons;
- Many of _those_ people won't get past the initial screen;
- Many who _do_ won't even won't show up for the interview;
- Many who show up won't make it through; and
- Some who get to the final stage might not accept the offer anyway.

<CalloutPlusQuote>

If you assume around half of the candidates are cut at each stage above, that means a job with 500 applicants will boil down to only about 15 by the time interviews begin.

</CalloutPlusQuote>

Your competition (if you want to call it that) is not nearly so daunting as it appears.

### Write good cover letters if you can; don't if you can't

People are divided on whether you should include cover letters. As long as you can write them well and fairly sincerely (there are numerous guides and templates available on that front), I'd advise you to do so.

<CalloutPlusQuote>

A good cover letter can only help. However, a bad cover letter probably hurts you more than none at all does. So err on the side of caution.

</CalloutPlusQuote>

(_By now, you should know this means: don't trust ChatGPT to spit something out for you_.)

Also, since you'll probably be applying to many positions at once, don't let the cover letter slow you down. Better to include a few carefully considered cover letters, for the jobs you want most, than to send out halfhearted consensual spam to every company.

### Don't disqualify yourself

Apply for jobs even if you don't match all their criteria. This is well-worn, classic advice, and classics are classics for a reason.

The job description is an employer's wish list; it's all the things they hope they find in their search. If you match even around 70%, you'll be about as close as they can reasonably expect to find.

I'd say if you really want the job, go ahead and apply even if you feel you're only about half qualified.

The truth is: the posting will contain mostly stuff you'll probably learn on the job anyway. It's notoriously more rigorous than the actual role. So gather up all your positive data points about how you solve problems, and what a great coworker you are, and apply anyway.

<CalloutPlusQuote>

A company will never offer your dream salary and benefits, so don't feel like you need to be their dream candidate.

</CalloutPlusQuote>

### Be active online

This is intentionally a retread of earlier advice; it's important enough to bear repeating.

<CalloutPlusQuote>

Remember: to the person reading your application and resume, you're just another face in a bubble. It's tough to tell much about you at this stage. So if they search for you online, give them something good to find.

</CalloutPlusQuote>

Have a website. Add a blog, if you're even remotely interested in writing (it helps to show your thinking style and communication skills). Have at least one live side project, however small, plus any socials you want to be on. Be active, but go with quality over quantity; you don't want to seem like a bot.

Show your human side. Focus what you're good at, what you're interested in, and why somebody might want to get to know you. Be friendly and helpful. Get some good karma on your side. Round out that vague impression of you someone might have from your application or resume. Add some personality.

That said, obviously: be careful what you're posting. It doesn't need to be anodyne, and it _should_ be authentic. But don't get _too_ edgy or controversial.

Paint a positive picture of yourself online, and you'll stand out as a human, not just as a random applicant.

If you can do all of this _before_ it's time to start the search—or at least, as early in the process as possible—it'll pay off well.

##  Resume advice

I won't get too deep into the specifics on writing or designing resumes here; that's well-covered territory elsewhere online. I do have a few specific points to keep in mind, however.

### Focus on effect, not actions

Remember how I said your behavioral story bank would help you in writing your resume? Here's how. (_Backstreet's back, all right!_)

Nobody will be impressed that you, say, "balanced requirements to meet deadlines" or "worked in constant communication with the client" or whatever other jargon commonly fills out resume bullet points. Sorry; everybody else has the exact same boilerplate on their piece of paper, too.

Instead, pull from your BSB. "In [situation], did a, b and c, _resulting in a 15% increase in conversions_.” Or, "Given [context], implemented x, y, and z, _improving cost efficiency by 10%_.”

The point of your resume is to tell your story. "I did all these things" isn't a story. Remember STAR (situation, task, action, result). You could simplify that to three story beats:

- Set the scene (situation, task)
- Say what you did (action)
- _Show how that had an impact_ (result)

Use specific, qualitative numbers and measurements wherever possible.

Usually, when I give this advice, the immediate response is "but what if I don't have numbers?" That's fine. Give it your best reasonable guess.

No, I'm not suggesting that you lie, or that you make things up. Don't do that.

But if you're fairly confident conversions went up by around 5%, or you have enough info to make an educated guess that you saved the company around $10,000 annually, go with it. If you're not comfortable with that, there's nothing wrong with saying "…by _approximately_ 5%," or "…saving the company _an estimated_ $10,000 annually."

Again, just to be clear: don't make up things, and don't inflate numbers. But you're not filing financial reports with the SEC here. Honest best estimates are fine, and more importantly: better than nothing.

One last time: _don't lie_. But a reasonably confident guess based on best available information will do.

### Talk about yourself as a human, not a technology checklist

Yes, you have to list every technology you've ever touched, because there's a chance you'll be filtered by whether or not the term "React" is on your resume. That sucks and I hate it, too, but it's the unfortunate reality of this whole stupid process.

However, _don't stop there_. If your qualifications are all you have to stand on—“I have proficiency in _x_, _y_, and _z_”—then you haven't given a prospective employer any reason at all to hire you over anyone else with those same skills. (Or even over _no one_ else; ChatGPT probably knows at least as much about React as you do. Hell, there are probably trained monkeys who can write JSX these days.)

You're never going to win the checklist game. Somebody else will always have a longer, more impressive list than you. So don't compete purely on that level.

Your employer has their pick of candidates who check the technical boxes. The question is: what _else_ do you bring to the table?

<CalloutPlusQuote>

Companies can't just hire your knowledge or skills; they have to hire _you_. So show who you are and what value you bring to the table beyond just your bona fides.

</CalloutPlusQuote>

I'm certain you have positive qualities that aren't merely the software you know, or the things you've memorized. It's the _overlap_ of those qualities and your hard skills, together, that creates your real value.

As one example: generally speaking, comic strip artists aren't as funny as a comedian, as talented as an illustrator, or as skilled as a writer. Yet, these three seemingly unrelated skills catalyze to create someone perfect for that niche.

If companies just want somebody who knows React, it's easy to find that person. (Maybe even a monkey.)

It's also fairly easy to find somebody who, for instance, communicates well. Or, someone and can step in to lead projects where needed.

But finding _all_ of those in the same person? *That's* value. So find your value, and then talk about it. It's not in what you know; it's in _everything_ you bring to the table, and your hard skills are just one part of that equation.

In my personal career, I've been valued at more than one company because I can not only build things on the web, but I can communicate well with stakeholders, and explain things in simple terms (skills built from years in other jobs).

In some places, my coworkers were even so used to dealing with temperamental, stubborn developers, that it made me—a person willing and able to listen, compromise, and partner on goals—far more valuable than either soft skills or hard skills ever would've on their own.

Are you a good communicator? Do you have stories of how you've supported others in your career? How are you a good team player? Do you take responsibility? Do you demonstrate empathy? Are you a persistent problem solver? Can you talk about a time you tracked down an extra tricky bug?

Heck, are you just nice to work with? Are you a decent human being? Do people like having you around?

Mine that BSB. (_Backstreet's back, all right!_)

Bonus points: get recommendations from your previous (or current) managers and coworkers in writing, and share them.

I know that's an awkward process, at least in the US, where our culture dictates that we never say anything nice about ourselves _or_ ask other people for favors. We're supposed to be humble and self-sufficient. But you're not bragging; you're being honest, and the sooner we all realize we're all an interconnected part of each other's success, the better.

Also remember: _all skills are transferable._ Don't disqualify relevant experiences just because they happened in a different career field, or in your personal life.

---

One final note on this topic: if you peel away the layers a little bit, you might realize what I'm suggesting is: beyond a certain point, working on _you_, the person, and your so-called "soft skills" pays off more than working on your hard skills does.

That's absolutely true. Hard skills are mostly just a prerequisite, and once you hit a certain threshold, they offer diminishing returns.

In a healthy organization, at least, it doesn't matter how good you are at your job if nobody wants to be around you. No matter how technically brilliant you are, you're still a person, and you still have to communicate and work with other people.

<CalloutPlusQuote>

Hard skills might get you in the building, but soft skills unlock most of the doors inside it.

</CalloutPlusQuote>

So if you've got the hard skills down, you know where your efforts are best invested.

### Tailor your resume to the job

This might be in "bonus points" territory; it won't always apply (ha). But wherever you can, make adjustments to your resume (and also, your application and cover letters) to better fit the specific job you're applying for.

Even if you're going for a frontend role, there are _lots_ of different kinds of those. Is the role in design systems? Put the design and component work you've done front and center.

Is the role for a performance-critical product? Try to match any experience you have to that.

Maybe it's a marketing/website role. If so, play up what you know about SEO, conversions, and A/B testing.

Your goal is to make your resume sound as much like the description as possible. "Hello, I am the person this post is describing. Here's why..."

### Keep it short and simple

Don't let your resume get longer than two pages; keep it to one, if you can. Don't skimp, but don't embellish, either.

Unfortunately, you probably have to stuff a lot of keywords in there to try to get it past automated screening software, but try to find a way to do that without making the reader's eyes glaze over.

Your resume is an opportunity to tell your story and set yourself apart. By all means, take whatever advice seems prudent on making sure the required content is there, so you get through the initial screen. But beyond that: be sure this piece of paper highlights who you are, what you've done, and what impact you had, without just looking like a wall of text.

(Pro design tip: white space is your friend. You'll usually hit the point where you can't possibly squeeze your content any further _long_ before you hit the point of too much white space.)

### Sweat the details

This piece of paper/digital document is the only thing someone knows about you. Make it look nice. (See the previous section.)

And whatever else you do, make _absolutely certain_ you fix any typos and grammatical errors. Run anything you write through as many checkers as you can, but be aware they won't catch everything. Reread what you write early and often. Sometimes it helps to do so aloud. Ask for help from a trusted friend if you need to.

There may be hundreds of other applicants. Someone at the company's gotta filter through them somehow. So don't give them a reason to throw you out, no matter how tiny or petty that reason might be.

##  Interviewing

So you've made it through the application process, and now it's time to actually _talk_ to somebody.

Congrats! Let's talk about what to do in this part.

### Fail early and often

My absolute best advice for interviewing is: do it _as often as you can_.

Interviewing is a skill, and just like any other skill, you're going to suck at it for a while before you get good at it.

In fact, sucking at it is the only way to _get_ good at it in the first place.

So: practice all you can. Do mock interviews with friends, family, or online, if it helps. Run through what you'd say in given scenarios in your head while you're commuting.

And, of course: actually _take_ real interviews. The more, the better, until you start to feel confident. (Personally, I think it's even a good idea to take interviews even when you're _not_ looking for a job, just to stay sharp.)

I was lucky that I often coded in front of students while I was teaching for a local code school. So by the time I got in front of real interviewers, I was pretty well-practiced at talking through things, and had long ago lost my fear of looking silly or making mistakes. I'd recommend you find ways to do something similar. (In other words: reproduce my luck.)

By the time you're interviewing for a job you _really_ want, you'll want to feel comfortable in that situation. You'll want to know how to handle yourself under that pressure, and be accustomed to answering the questions that might come up.

The only way to get there is through practice, and failure.

<CalloutPlusQuote>

Pardon the sports analogy, but: you don't want your first time at bat to be in a playoff game. So get out there and swing at some pitches before it really matters.

</CalloutPlusQuote>

One important caveat here: I'm not suggesting you waste anyone's time. I don't recommend you interview for a job you're 100% certain you'd never consider taking. That's rude to the person who's giving their time to interview you in good faith.

That said: you might be surprised how much things can change once you actually talk to some folks at any given company. The interview process has definitely changed my mind before, in both directions. I've said no to things I'd previously considered dream jobs, after getting a glimpse of the inner workings of the company. I've also said yes to jobs I applied for on a whim, never really expecting to hear back from, while contentedly employed elsewhere. So don't ever be _too_ sure before you've actually spent the time exploring.

There's nothing wrong with going into the process just to learn more. In fact, that's the whole point of it. Remember: this is a two-way agreement; you're not just selling yourself away to the first bidder. Ideally, at least, you should be asking questions and making sure it's a fit on your end, too, and there's little way to do that without interviewing.

Besides: this playing field is _heavily_ slanted towards companies, and a lot of them _will_ ghost you and worse. Even the companies who _won't_ ghost you will still have no qualms at all with asking you to do hours and hours of unpaid labor over the course of interviewing, quite likely for absolutely nothing in return. So even if you _did_ waste someone's time just for a practice interview, well...with the way things are right now, I guess I'd have a hard time feeling too bad about that.

<SideNote>

I've been ghosted, several times. Every time, it seemed like everything had gone well. Every time, I was cheerfully promised I'd hear back within a few days by a nice, friendly person who seemed genuinely interested in me. Then…nothing. (Or, best-case, an impersonal rejection email months later.)

I only tell you this so you know it happens, and so you don't take it personally. It's a cruel, stupid game. Don't believe it has anything to do with you.

</SideNote>

### Have your behavioral story bank ready

Interviewers will commonly ask questions like "tell me about a time you managed conflict," or "tell me about a time a project didn't go as planned."

They do this because it provides good insight into how you handle situations, so come prepared with your BSB. (_Backstreet's back, all right_!)

(I know you're groaning because that joke's gotten old by this point. That's ok. In fact, _I want it that way_.)

Remember, your stories don't all have to be from direct business situations. If an interviewer asks to hear about a time you dealt with conflict, and the best example you have is the time you broke up a fight between the neighborhood kids over Pokémon cards, run with it.

If your best story about managing expectations in a high-pressure situation happens to come from your days of restaurant work, by all means, tell that story! It absolutely counts. (_Your interviewer might even consider that pressure more impressive than the day-to-day of the workplace, and give you bonus points_.)

One other tip here: don't try to look perfect.

Lots of the questions you're likely to hear will focus on conflict; times you, for example, disagreed with your manager, or had a project go wrong in some way.

If an in interviewer asks about this kind of thing, tell them. Be honest. Don't try too hard to look like the good person. Instead, be sure to include what you learned, and how you'd handle that situation better in the future.

<CalloutPlusQuote>

Showing you're a person who's capable of learning and growth, and who can identify and be honest about their flaws, is more valuable (and believable) than coming off perfect.

</CalloutPlusQuote>

### Take the time you need

If you're asked a question, and you can't think of an answer right away, just say "let me think about that for a minute."

It's easy to feel the pressure to constantly perform in an interview, but anxiety and panic produce terrible results. It's perfectly fine to ask for time, and to take as much of it as you need. It will probably feel awkward as you sit there in silence, but it's just fine. Really. You won't get docked for that. (If you do, it's a red flag. But even in that case, the pause will probably produce a better result than hastily fumbling through a bad answer.)

### Never, ever, EVER say bad things about previous jobs or coworkers

Seriously: never. No matter how awful the employer; no matter how bad the coworkers; no matter how inept the management; no matter how miserable the conditions. Not even if you're fully and inarguably in the right. Do not, ever, under any circumstances, say bad things about any other party in an interview.

Never.

You might think I'm saying this because nobody likes a complainer. True enough. But there's more to that, in the form of a psychological quirk of the human brain:

<CalloutPlusQuote>

When someone calls out a problem, we automatically associate that problem with the person reporting it.

In other words: when you point out something wrong, people are predisposed to believe it's somehow _your fault_.

</CalloutPlusQuote>

Put simply: we're innately wired to shoot the messenger.

If you say your company is terrible, people will probably just think you're a complainer, and the real problem is with you.

If you say your manager is awful to you, people will wonder what _you_ did to your manager to make them treat you like that.

I'm sure you can probably identify this phenomenon in the real world without looking very hard. Sadly, cases where victims report their abusers, only to have many suggest the victims did something to deserve or invite it, are far too common. (_As if it's possible to deserve to be victimized_.)

Regardless of the effect, however: it's still pretty tactless to disparage parties who aren't present to defend themselves anyway. So just don't do it. You will _not_ look like the good person. Save those stories for people who know you and trust you.

If you're _forced_ to bring up a negative—if, for example, you're asked what it is you don't like about your current position—try focusing on the impersonal, objective, and aspirational, rather than on the personal, subjective, and/or current state of affairs.

Bad: “_My boss micro-manages me and I hate it_.”

Better: “_I'd like to find a role where I have more autonomy in my work_.”

Bad: “_My current company doesn't promote anyone unless management likes them. Everyone knows it, and it sucks_.”

Better: “_I feel I've grown as much as I can at my current position, and I'm looking for a role with greater challenges, where I can learn more and continue to expand my skills and knowledge_.”

### Always have questions ready, and always ask them

<CalloutPlusQuote>

A sneaky truth about interviewing: your questions say as much about you as your answers do.

</CalloutPlusQuote>

Most interviews will end with 5–10 minutes for you to ask anything you'd like. Don't pass up this valuable opportunity. Come prepared with some things you'd really like to know. Have a list of open-ended questions prepared.

Ideally, pull from the list you put together in the "know what you want" section. Ask questions that help reveal how closely aligned this company is to your values and preferences.

There are lots of resources available for this. Take the time to look up some good questions to ask employers. Ask anything you want to know about how the organization works, what the role entails, and how conflict is handled.

Don't throw softballs. This is your chance to really dig. “_What's your favorite thing about this job_?” probably won't tell you much you didn't already know.

Instead, try something like: “_what's your favorite thing about this job, and what's one thing you would change if you could_?”

One of my personal favorite questions: “_what would make somebody successful in this role_?” It's open-ended, and hopefully, the answer describes you. If so, you can give a little nudge on that. But either way, it helps you understand the job, and the company's expectations.

### Be prepared to talk salary

There's a whole section on this later. But for now, I mention it here so if you only read this section, you'll know to look up what people in this role make at _this_ company, and what they make in similar roles across the tech field.

### Follow up and connect after interviews

After any interviews you have, take a moment to follow up with the people you spoke with. Shoot them a quick email or LinkedIn message thanking them for their time and insight. (You _did_ ask questions, right?) If you can do so without forcing it, find a way to work in your enthusiasm for the role and continuing in the process. Do this as soon afterward as possible, without making it so fast it's creepy.

<CalloutPlusQuote>

I've interviewed dozens of candidates in my career. Every one of them who sent thoughtful follow-up notes got bonus points in my book.

</CalloutPlusQuote>

If you feel comfortable doing so, connecting with your interviewers on LinkedIn may also help expand your network. Sometimes interviewers will like you even if you don't get the role (it might not be up to them), and having that connection could help you down the road.

I still vividly remember a handful of people I interviewed and strongly recommended at previous jobs, but who didn't get hired for reasons unbeknownst to me. If any of them reached out to me on LinkedIn today, years later, I'd still gladly help them however I could.

### Ask for feedback

If you're turned down, you can ask for feedback. A lot of companies won't give it, but some might, and this might be helpful in identifying where you can do better next time.

_Feedback is a gift._ Take it as such. Don't be offended by it, and never, ever argue with it.

Get lots of it, and receive it with gratitude. Don't take any one data point too seriously, but if you start to see a pattern, act accordingly.

### One weird trick

Say you want the job. Really. You'd be surprised how far just vocalizing your enthusiasm will go.

##  Handling live coding interviews

Honestly, I wish I didn't have to write this section. In my opinion, live coding interviews should die immediately and forever.

Why? Because there's nothing an interviewer can learn about you by watching you code that they couldn't have sussed out through an ordinary conversation, for one thing.

Besides, performance in that environment has virtually no correlation at all with real-world job performance, or what it's like to the actual work. No manager at any remotely sane company will _ever_ show up at your desk with a problem you've never seen before, set a timer for 30 minutes, sit there and watch you work on it, and fire you if time expires. It just doesn't happen.

<CalloutPlusQuote>

Making a developer pass a live-coding interview is like forcing Taylor Swift to sight-read a classical harpsichord piece before you book her at your venue. That's how laughably mismatched the test is with the actual job.

</CalloutPlusQuote>

What _does_ happen, however, is that this style of interview filters out people who would've been excellent at the job, but who simply can't perform well in front of others, under pressure, and/or quickly. (Which, again, are all things the actual job pretty much never calls for.)

Live coding interviews don't filter for skill; they filter for cocksureness.

<CalloutPlusQuote>

Tech, in general, loves gatekeeping. So it's no surprise the code interview is more of a grand celebration of gatekeeping than it is any reasonable, sane attempt to gauge a candidate's actual abilities and qualifications.

</CalloutPlusQuote>

Anyway, I digress. Unfortunately, most companies still administer these arcane, bias-ridden exercises, and so you'll probably have to take some.

The good news is: most companies at least keep the difficulty fairly low, and many won't eliminate you just because you couldn't get through one on time. The exercise is, at least ostensibly, about seeing how you think, and about making sure you're not somebody who's just hoping to make it a few weeks before anyone notices they have no coding skills.

### Preparation and mindset

I _hope_ you don't have to do live coding, but I've had to for most of my jobs, and odds are high you will, too.

The only way to get better is practice. And the only way to overcome a fear of failure is…just get used to failure.

<CalloutPlusQuote>

Before you're in an actual interview, get in front of people, and talk as you type. Make mistakes. Talk about them. Laugh about them. Keep going, until it stops being so uncomfortable.

</CalloutPlusQuote>

Your goal isn't to stop making mistakes; that's impossible. Your goal is to get so used to it, it doesn't bother you anymore.

(_What, you think that wildly underqualified guy over there worried about_ his _mistakes? Hell, he probably didn't even know he made them_.)

You don't need to be a great performer _or_ a great coder. You just want to get reasonably comfortable talking through code while you write it, and shrugging off any inevitable mistakes along the way. That's it.

I know it's painful. I know some people just aren't suited for this kind of thing, and it's not fair to force those people to go through it anyway. If you're one of those people, I'm sorry. It's stupid. But I know you can do it. Trust me. It just takes practice.

### Once the clock starts

When you do find yourself in an actual code interview, first and foremost: _don't rush_. This will feel counter-intuitive; you've only got so many minutes. But trust me.

Once you've received the directions, read them slowly and carefully. Then, ask anything and everything that comes to mind.

Don't hesitate to ask about something you're not sure of, even if it seems like you should be. Make sure you fully understand the directions, and repeat them back in your own words to be certain.

After you're sure you understand the assignment, pause, and think about possible ways to accomplish the task. Talk through them as you think, if you can, so your interviewer can get a glimpse into your thought process. Talk through the tradeoffs of each approach that comes to mind.

<CalloutPlusQuote>

The more you talk through what you're doing, the better. You're here to show how you think through things, how you approach solving problems, and how you communicate—not just to bash some code out to finish a puzzle.

</CalloutPlusQuote>

Once you feel confident about a direction, write out the steps you need to get to a solution. Use comments in your code, if you can, but list them out somewhere.

Finally, when you know what success is and have a good idea of how to get there, then and only then do you get to work actually writing the code.

<SideNote>

Don't stress over code perfection at this point. Priority one is to get something working, no matter how sloppy or ugly. You can come back and clean it up if you have time at the end; if not, you can talk through it afterwards, which is almost as good.

</SideNote>

### Don't panic

I know the situation might feel very uncomfortable, but don't let the time constraints push you into rushing. Breathe slowly and deeply. As much as you can, be of calm mind and body. (The practice helps with this.)

If you sense yourself getting overly anxious, just stop and take a minute. Don't worry about the clock. Feel free to tell your interviewer you're taking a moment to think through the problem. It's your time; use it however you want.

<CalloutPlusQuote>

Trust me: you'll do better in 10 minutes of calm, prepared, thoughtful coding than you will in 30 minutes of hasty key-mashing.

</CalloutPlusQuote>

As you're coding, test your assumptions frequently. If you can, run a `console.log`, or refresh the preview, or whatever other check might apply, after every line or two. The longer you wait to test something, the harder it will be to backtrack and figure out what went wrong.

And just as a reminder: try to talk through everything you're doing as you're doing it.

Finally: don't be afraid to ask questions _during_ the coding, either. A company with a _good_ code interview process won't let you stay stuck or try to trip you up deliberately. Most will let you search the web for answers (since you'll be doing that in the day job anyway), but either way, hopefully your interviewer can provide you some clues where needed.

### After time's up

If you do poorly, that's not the end of the world. Like I said, a lot of employers don't consider that a deal-breaker. (If they do, walk away knowing you dodged a bullet.)

Regardless of how it went, take the opportunity to talk about it with your interviewer. What tripped you up? Have you done anything like this before? What would you have done differently? Was this something you're familiar with, or entirely new?

What's still missing in the code? How is that important? How might you address this problem differently if this were a real-world scenario?

Sometimes, showing you have a strong understanding of the problem is worth at least as much as providing a solution. So if it didn't go well, don't beat yourself up. Worst-case, you have more practice, and you'll do better next time. Best-case, you lost that battle, but you haven't lost the war, and you might even be able to make it up by how well you handle the defeat.

If it helps to know: I've gotten two different jobs where I failed at least one of the code interviews. I've never asked, but I'm pretty sure I managed to salvage them both by talking honestly about the failure afterwards, and how I would do better next time.

##  Talking salary

Of all the sections in this post, this is the area where I'd most encourage you to do your own further research. Here's my advice if you want it, but I strongly advise you to weigh it against what other, more qualified sources have to say on this topic.

There's been a big push in recent years to include the salary in the job posting. Some states have even begun to mandate it. If a company does this, I'd consider it a positive signal. Still, many companies don't. Some simply don't post or hire in states mandating it. Some will actively try to lock you in to as low a number as they can.

Traditional advice says: never be the first to say a number. I don't have strong feelings on that, but I _do_ have strong feelings on negotiating. Always know what you're worth, always be confident in asking for what you want, and _never_ take the first offer without countering (at least, not unless it's already well beyond your expectations).

<CalloutPlusQuote>

If you're asked for your current salary, politely evade the question in any way possible, and note it as a red flag. If forced to answer, be as vague as you can. There's nothing good that can come of sharing that info. You're only giving away leverage in the negotiation.

</CalloutPlusQuote>

(It may also be illegal to ask, depending on state laws.)

In any case: before going into the salary conversation, do your research. Try to gather as best you can what people at your level generally make at this company, and what they tend to make in the industry as a whole. [Glassdoor](https://glassdoor.com), [Levels.fyi](https://www.levels.fyi/), and similar sites will help with this. Also feel free to ask anyone you know; transparency helps workers.

Remember, however, that (inter)national companies and those in major markets will usually pay more than regional/midwestern companies. In general, the more a company hires from smaller markets, the less it needs to compete on salary. ($100k a year is a lot of money to many midwesterners, but it would be an unthinkable pay cut for many workers in New York or San Francisco.)

Product companies also tend to pay significantly better than consultancies (though consultancies can sometimes be easier to break into), so be sure you're comparing apples to apples there.

I'd expect an entry-level job at an agency would pay the least; then, a regional or midwestern product company would probably pay about 30% more than that; and finally, a(n inter)national product company in a major market would pay around 30% higher than that. But these are also in ascending order of difficulty, in terms of landing the job in the first place.

So: do your research. If the numbers you find are in alignment with your expectations, you can say something vague like:

> In researching [company] and the market in general, it looks like engineers in this role typically make a salary in the upper 80s to low 110s, and that range is in alignment with my expectations.

(Again, always be a little vague with your numbers. This is just about making sure you're both in the same ballpark.)

Alternatively, if you're _forced_ to get into numbers, I find it's helpful to phrase the question like this (at least to yourself, if nothing else):

1. Where does the number get high enough I probably couldn't say no?
2. Where does the number get low enough I probably couldn't say yes?

Once you've answered that, you have a pretty good idea of your range. Ask for the very high end of it, so you'll hopefully fall on the upper end if you end up negotiating. (If it's accepted right away, you might've asked low.)

Don't shoot the moon and ask for a wildly unrealistic number, of course. But ask for what you want and what you're worth. What you think is a high number probably isn't to the company. (This is all assuming they haven't posted the salary range, or given you any indication; you want to set the starting point high, because it's not going anywhere but down.)

You're probably not going to get rejected over shooting a little high, so don't be afraid of it. At worst, you'll probably just hear something like "that's slightly high for this role; we're budgeting more in the range of [x]" at which point you can still work on coming to an agreement, if you want to. (And if they slam the door on you over a reasonably small difference, walk away knowing you dodged a bullet.)

One last thing to keep in mind: salary isn't everything. There are lots of other things to consider, like:

- How good is the insurance? (Do look at that. I mean, really look at it, even if you're still young and healthy. Get the details up front as much as you can.)
- Do you get shares in the company, or any other sort of equity? If so, find out how much, how you earn them, and when.
- Are there bonuses? If so, what range are they, and how do you earn them?
- Are there other perks, like retirement funds? Is there 401k matching?
- What about non-monetary benefits? Do you get food? Office stipends? Travel opportunities? Is the culture great? Is there a learning or conference budget? Is this a promotion, or a better title? Will it look better on your resume the next time you're job searching?

Consider the whole package. It might be worth a lower salary if the benefits are better, the culture is better, and/or the role is just more fulfilling.

Ultimately it's up to you what's most valuable in a new position. I'd just say: be careful not to give any one factor so much weight it can override all the others. You'll need _some_ balance.

<CalloutPlusQuote>

Money makes up for poor perks better than the other way around, but no amount of money can make a bad job pleasant.

</CalloutPlusQuote>

One last thing: be extremely wary of promises. If you hear anything at all like "we're going to start you low, but we expect you'll be promoted quickly," or "the salary is lower because we give regular bonuses," that should set off some alarms.

If this happens, at the _very_ least, get every detail you can, in writing, including what you'll need to do to earn that promotion/bonus by the time stated, and what figures they'll be.

Promises are quickly forgotten. If you're relying on anyone's word for anything, get the receipts.

Pics, or it didn't happen.

##  Mindset

It's possible you'll find something quickly, and I hope you do. However, even if you find yourself looking month after month after month, I do think there are some ways to steel your outlook and conserve some of your energy, to move at a sustainable pace over the long haul.

### Things are bad, but I think they're getting better

I won't sugarcoat it: this is a weird, hard time for everyone in tech. As the general economy around us continues humming along steadily, our sector has, for various reasons (mostly to do with corporate greed), chilled pretty severely. It's a rough time, and again: that's nothing to do with you.

Anecdotally, however: years ago, since the day I put the word "developer" on my LinkedIn profile, I started getting regular, sometimes _relentless_ recruiter spam. (In fact, I've joked before that the best way to get a job as a developer is to say you already are one.)

That all went silent at some point in the last year or so, but I've noticed it beginning to tick back up again lately.

My personal take (again, purely anecdotal) is: companies have started to realize laying off so much of their staff over the last year or two has made them a lot slower than they'd like to be. (I also theorize they've realized AI didn't replace people the way they thought.)

On top of this, the much-prognosticated recession that helped lead to the layoffs in the first place never really materialized, tech's current downturn notwithstanding.

Money is still tight in the tech world, but I'd bet on it loosening back up again in the foreseeable future, personally.

Even if it doesn't, though: there are upsides to walking a long and trying road. A lot of your competition will probably give up and go looking elsewhere. Long job searches suck, but they give you plenty of time to work on your portfolio and side projects.

Try to keep putting one foot in front of the other, doing little things each day to get 1% better, and it'll pay off in the long run.

### It's not you, it's them

In my career, I've held a job where I beat out over 5,000 other candidates.

I've also—far more often—been rejected immediately, before I even got as far as a phone call.

I was the same person in both of those scenarios. They happened in the same year, while I had the same skills and experience, and brought all the same things to the table as a candidate. I'm not even sure my resume was any different.

Don't take this as nihilism; take it as proof that a rejection isn't an indication of anything at all, except a simple mismatch. It's not necessarily a bad thing. It might not even be anyone's fault. It's just what happens sometimes—oftentimes—when two parties are looking for a mutual fit.

Remember, this has to be a match from both sides, and every company will be looking for something different. You _are_ a fit somewhere. You _will_ be valued somewhere. But unfortunately, you just can't expect to find that without spending a lot of time looking.

<CalloutPlusQuote>

As long as you bring something to the table, all you have to do is find the right table.

</CalloutPlusQuote>

Not every company will have a fit or a need for your unique talents, regardless of who you are or what you have to offer.

Don't take any of this personally.

Gather all the feedback you can, and move on. It didn't work out this time, but it will sooner or later. Every strikeout teaches you something for the next time you step up to the plate.

### Take care of yourself

If you're searching in earnest and looking for a job full-time (or even if you're not, actually), don't sit in front of your computer all day. Go outside. Take walks. Exercise. Control the parts of your life you _can_ control. Do things that are good for your mental health. Meet up with friends. Play. Have fun. Work on your relationships. Catch up on reading. Work on side projects.

_Sleep_. Seriously; go take a nap.

You can definitely take advantage of your free time to build your skills. You _should_, to some extent. That's wise.

<CalloutPlusQuote>

But don't forget, you're still a human, which means you need water, sun, playtime, exercise, sleep, and nourishment. Don't skimp on any of those things in the name of a job (either one you have, or one you want).

</CalloutPlusQuote>

At the end of the day, we're all basically just (slightly) sophisticated house pets. Look after yourself like you'd look after your favorite animal.

You can do this. I know you can.

It's just a matter of time, practice, and persistence.

