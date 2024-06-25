---
title: "For whatever it's worth: my advice on job hunting in tech"
date: 2024-06-07
updated: 2024-06-24
categories:
  - opinion
  - personal
coverImage: fwiw.svg
coverWidth: 1920
coverHeight: 1080
excerpt: "A collection of things I've learned over my decade in the industry, on how and where to look for jobs, applying, interviewing, talking about yourself and your work, and all those other fun things. For whatever it's worth."

---

<script>
	import PullQuote from '$lib/components/PullQuote.svelte'
	import SideNote from '$lib/components/SideNote.svelte'
	import Note from '$lib/components/Note.svelte'
	import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
	import Footnote from '$lib/components/FootnoteLink.svelte'
	import FootnoteAnnotations from '$lib/components/FootnoteAnnotations.svelte'
</script>


Every once in a while, somebody will reach out to me with advice on navigating their development career. Sometimes it's how to break into the industry; sometimes it's more about career progression, where to look for jobs, or how to interview.

<CalloutPlusQuote>

Eventually, I realized I was having the same conversation often enough that it would probably save everyone a lot of time if I just wrote down all my advice.

Hence: this post.

</CalloutPlusQuote>

This will serve as a collection of whatever I've learned, for whatever it's worth. I'll do my best to keep it up to date as the months and years roll on, but this is everything I know (or at least, am pretty sure I know) right now.


<!-- This markup was generated using the deprecated TableOfContents component. -->
<div class="toc-wrap s-QxGJVNas-JkL"><aside class="toc s-QxGJVNas-JkL"><h2 class="s-QxGJVNas-JkL"><span class="opening-bracket s-QxGJVNas-JkL" aria-hidden="true">[</span>Table of contents<span class="closing-bracket s-QxGJVNas-JkL" aria-hidden="true">]</span></h2> <ul class="toc-list s-QxGJVNas-JkL"><li><a href="#what-this-is-and-isnt">What this is (and isn’t)</a></li><li><a href="#before-you-start">Before you start</a><ul><li><a href="#know-what-you-want">Know what you want</a></li><li><a href="#shore-up-weaknesses-but-focus-on-strengths">Shore up weaknesses, but focus on strengths</a></li><li><a href="#create-a-behavioral-story-bank">Create a behavioral story bank</a></li><li><a href="#if-you-can-be-financially-prepared">If you can, be financially prepared</a></li><li><a href="#get-out-there-and-network">Get out there and network</a></li><li><a href="#you-need-a-website">You need a website</a></li><li><a href="#have-some-writing-templates-ready">Have some writing templates ready</a></li></ul></li><li><a href="#where-to-look">Where to look</a></li><li><a href="#applying">Applying</a><ul><li><a href="#track-your-efforts">Track your efforts</a></li><li><a href="#front-load-the-search">Front-load the search</a></li><li><a href="#be-among-the-first-to-apply">Be among the first to apply</a></li><li><a href="#go-to-the-source">Go to the source</a></li><li><a href="#dont-worry-how-many-other-applicants-there-are">Don’t worry how many other applicants there are</a></li><li><a href="#write-good-cover-letters-if-you-can-dont-if-you-cant">Write good cover letters if you can; don’t if you can’t</a></li><li><a href="#dont-disqualify-yourself">Don’t disqualify yourself</a></li><li><a href="#invest-in-your-web-presence">Invest in your web presence</a></li></ul></li><li><a href="#resume-advice">Resume advice</a><ul><li><a href="#focus-on-effect-not-actions">Focus on effect, not actions</a></li><li><a href="#talk-about-yourself-as-a-human-not-a-technology-checklist">Talk about yourself as a human, not a technology checklist</a></li><li><a href="#tailor-your-resume-to-the-job">Tailor your resume to the job</a></li><li><a href="#keep-it-short-and-simple">Keep it short and simple</a></li><li><a href="#sweat-the-details">Sweat the details</a></li></ul></li><li><a href="#interviewing">Interviewing</a><ul><li><a href="#fail-early-and-often">Fail early and often</a></li><li><a href="#have-your-behavioral-story-bank-ready">Have your behavioral story bank ready</a></li><li><a href="#take-the-time-you-need">Take the time you need</a></li><li><a href="#never-ever-ever-say-bad-things-about-previous-jobs-or-coworkers">Never, ever, EVER say bad things about previous jobs or coworkers</a></li><li><a href="#always-have-questions-ready-and-always-ask-them">Always have questions ready, and always ask them</a></li><li><a href="#be-prepared-to-talk-salary">Be prepared to talk salary</a></li><li><a href="#follow-up-and-connect-after-interviews">Follow up and connect after interviews</a></li><li><a href="#invest-in-your-setup">Invest in your setup</a></li><li><a href="#ask-for-feedback">Ask for feedback</a></li><li><a href="#one-weird-trick">One weird trick</a></li></ul></li><li><a href="#handling-live-coding-interviews">Handling live coding interviews</a><ul><li><a href="#preparation-and-mindset">Preparation and mindset</a></li><li><a href="#once-the-clock-starts">Once the clock starts</a></li><li><a href="#dont-panic">Don’t panic</a></li><li><a href="#after-times-up">After time’s up</a></li></ul></li><li><a href="#talking-salary">Talking salary</a></li><li><a href="#mindset">Mindset</a><ul><li><a href="#things-are-bad-but-i-think-theyre-getting-better">Things are bad, but I think they’re getting better</a></li><li><a href="#its-not-you-its-them">It’s not you, it’s them</a></li><li><a href="#take-care-of-yourself">Take care of yourself</a></li></ul></li></ul></aside></div>

## What this is (and isn't)

**This is advice for anyone actively looking for a job in tech, or about to start**, particularly developers. It aims to cover the search, from beginning to end.

Just to get this out of the way right off the bat: I'm no authoritative expert, either on hiring or on tech in general. If there was a talking heads-style TV show about tech careers, nobody would call me up to sit on the panel.

I don't claim to know everything. I don't even claim whatever I _do_ know will be useful in the first place; what worked for _me then_ might not work for _you now_.

However, I've had what I think is fair to consider a pretty good run in tech so far. I've been building things on the web for about ten years. I've worked for agencies, taught development courses, and I've spent the last several years full-time in frontend at some notable software companies.

<CalloutPlusQuote>

I'll be the first to tell you a lot of my journey has been lucky. Still, though: some of that luck is reproducible.

</CalloutPlusQuote>

This will be very US- and developer-centric (especially frontend), so not everything will apply to you if you're in another country or role. I think a lot of it still will, however.

I won't go deep into specifics on certain things (for example: how to write cover letters, or understanding algorithms), just because there are plenty of resources already available on those topics. I'll give my general advice, though.

Finally, I have to thank the members of the [ShopTalk Show](https://shoptalkshow.com) [D-D-D-Discord](https://www.patreon.com/shoptalkshow) for helping me flesh out this post with their own best suggestions and advice, especially [Dave Rupert](https://daverupert.com/), [Andrew Walpole](https://andrewwalpole.com/), and [Erick Merchant](https://erickmerchant.com/). Several of these points are theirs; I just added some color commentary.

---

This is very long, which is why I've broken it up into sections. I've tried to make it as easy as possible to skip around and skim.

All that said: the rest of my advice has no basis more reliable than my own meandering experience.

I will dispense this advice now.

For whatever it's worth.

(Your mileage may vary.)

##  Before you start

Regardless of where you are in your journey, these are things you might want to work on sooner than later.

### Know what you want

Obviously, what you want is a job, because you'd like to make money to eat and survive and pay for Netflix. But since that answer probably won't get you anywhere in interviews, let's go a little deeper.

Really think about what's worked for you in the past, and what hasn't. What _kind_ of role best suits you, and in what type of organization? Do you like being a small part of a big team, with well-defined roles and success criteria? Do you like having lots of autonomy, wearing lots of hats, and forging your own path somewhere smaller and more ambiguous? (Or something in-between?)

How would you like your next job to be different from your last job, and how would you like it to be the same?

Would you take less pay for something more fulfilling? For that matter: what makes you feel fulfilled in the first place?

One useful exercise: write down every criteria you can think of (pay, benefits, autonomy, company size, prestige, title, interesting work, culture, social impact, stability, etc.)

Once you've thought of every aspect you can, _rank them_, first through last, and save your ranked list for later.

Compare your ranked list to any job you consider applying for, to see how closely it matches. (You probably won't find a perfect fit, but the list _will_ help you notice bad fits.) However you do it, though:

<CalloutPlusQuote>

Spend some serious time figuring out what you value, and write it down.

</CalloutPlusQuote>

While I'm not generally a fan of personality tests and the like, I've found the [CliftonStrengths Assessment](https://www.gallup.com/cliftonstrengths/en/252137/home.aspx) (also called the StrengthsFinder, or Top Five Strengths) to be illuminating for me, personally. It's helped me to understand what I value, what I bring to the table, and where I fit in best.

In any case, keep your list handy; it will help you filter your search, and answer interview questions like "why are you interested in this company?"

As a bonus: the list will  _also_ help guide you to some good questions _you_ can ask in interviews.

### Shore up weaknesses, but focus on strengths

If you have any severe deficiencies, it's worth addressing those immediately. Now's the time to make sure you're ready for whatever comes your way.

Practice for interviews. Brush up on any technology or topic that's likely to come up for the kinds of role you're applying for. Look up articles; listen to podcasts; watch videos; whatever works for you. You just want to get your brain out of passive mode, and actively thinking about these kinds of things.

You don't need to become an expert, by any stretch, in everything that might come up in an interview. Just absorb enough of the basics to have a high-level conversation (or at least, fake your way through one).

<PullQuote>

Don't fight against yourself trying to drag your lowest stats up. That energy goes a lot further leaning into your strengths.

</PullQuote>

Beyond addressing any severe vulnerabilities, however: I personally believe effort is better spent bolstering strengths than mitigating weaknesses. There's usually a reason some things click with you while others don't, so don't fight against yourself trying to drag your lowest stats up. That energy goes a lot further leaning into your strengths and interests.

Plus, this is a long process; you need some wins along the way. Spend time working on the stuff you're good at and enjoy.

Don't get me wrong: you _should_ address your weaknesses, to some extent. But don't get so caught up in it that you end up being average at everything.

<CalloutPlusQuote>

You'll be hired for what you're good at, not for what you've avoided being bad at.

</CalloutPlusQuote>

### Create a behavioral story bank

A "behavioral story bank" (_BSB, not to be confused with Backstreet Boys_) is a collection of stories about yourself you can tell any time you need to highlight your skills, positive qualities, and/or the results you've achieved. It's a prepared list of all the best anecdotes about you.

Think of times you've had success, or faced adversity, or learned new things; times you overcame challenges; times you earned recognition, or times your coworkers were grateful for something you did. If it helps: you can reverse-engineer your BSB from common interview questions (take the time to look some up).

Once you have a handful of those situations, put them into the [STAR format](https://www.interviewbit.com/star-interview-questions/) (Situation, Task, Action, Result).

Write the list down, and have it ready at all times. That's your BSB.

<CalloutPlusQuote>

Your behavioral story bank might be your single most important resource. It'll help you write your cover letters, applications, and resume, and it'll give you solid answers to interview questions.

</CalloutPlusQuote>

You'll be returning to your BSB over and over again throughout the entire process. (Every time you go back to your BSB, you can think _Backstreet's back, all right_! I know you won't actually do that, but I'll still say it here.)

Prepare like a stand-up performer; you want to have a set of your best material ready to go at any moment, so you're never caught trying to come up with something on the spot. To some extent, interviews are performative (for better or worse). So, have some bits ready to go.

One other piece of advice on your BSB: while stories should positively showcase your behaviors and results, they don't all have to be super business-y, or directly related. They can be from other industries, or even personal.

One example that's stuck with me through the years: a Latino applicant shared a story of overcoming racism from his high school guidance counselor. His counselor tried to dissuade him from going to college, saying higher education "wasn't for people like him." The applicant rejected his counselor's racist discouragement, and successfully graduated in his chosen academic field anyway.

That's obviously not a work story. But it's one that absolutely showed persistence in overcoming adversity (and, one that made me feel invested in that applicant, rooting for his success). Point is:

<CalloutPlusQuote>

If you faced a challenge and got positive results, it counts. Don't disqualify relevant experience just because it happened outside the walls of an office.

</CalloutPlusQuote>

### If you can, be financially prepared

If you have the luxury, save money for your search. If you don't (if you just found yourself laid off, for example—I'm very sorry), start cutting expenses now. Sadly, but realistically: you don't know how long this might take.

Steel yourself, in any case. It's likely to take at least 6–8 weeks to find a job in the current market. It could be longer, and quite possibly much longer. I say that not to scare you, but to prepare you for all contingencies. Settle in, and find sustainable pace; this will be a marathon, not a sprint. It's probably wise to stretch your financial runway as far as it can go.

### Get out there and network

In this era, where everything is digital, the more of a personal connection you can make, and the more people you can make it with, the better off you'll be.

A great way to do this is to get involved with any relevant regional dev group you can find. Most large cities have developer meetups, and groups on Discord, Slack, Meetup, etc. There may even be Facebook groups, bulletin boards, and the like.

Even if you aren't looking locally, I'd still recommend seeking out dev groups in your area. Get involved, and get to know the members. If you can make in-person connections, they'll likely be your strongest, but online friends are real friends, too.

<CalloutPlusQuote>

Wherever you are, be active. Have helpful and friendly conversations. Share useful things. Become a name and face that people recognize and think of positively.

</CalloutPlusQuote>

Nobody likes the guy who pops into the channel on day one and says "hey everyone, I'm looking, send jobs my way."

That's tactless. Don't be that guy. Nobody has any reason to help that person.

_Do_ let folks know you're looking, of course, but only _after_ you've gotten involved as a member of the group.

<CalloutPlusQuote>

Don't try to take from a community you're not giving to and participating in.

</CalloutPlusQuote>

The more you can become a helpful, friendly person to other people, the more those people will remember you for any opportunities that come up.

Naturally, this also means: don't spam, and don't just post for the sake of posting. Quiet, infrequent involvement is fine, if that's you. Be real.

<SideNote>

People commonly ask whether they should connect with strangers on LinkedIn. I don't have strong feelings one way or the other, but I generally don't connect with people if I don't have any idea who they are.

I'd recommend reading up on the pros and cons, using your own best judgment for your situation.

</SideNote>

### You need a website

Being on LinkedIn, etc. is a good start, but you shouldn't stop there.

<CalloutPlusQuote>

No matter how great your LinkedIn profile is, it's still just another LinkedIn profile.

It's hard to stand out when you're the same circle avatar, on a page 95% the same as everyone else's.

</CalloutPlusQuote>

A personal website is a great way to stand out. You can, and should, link to it from everywhere. Having one has served me extremely well over the years.

Your website doesn't need to be fancy at all. Bonus points for building it yourself, but it's not required. If you do, build it well. Overly simple is better than over-complicated. (In other words: rock your `<body>` right. Yes, the Backstreet Boys jokes will continue. No, I will not apologize).

You don't have to blog, though it's a good idea if you're into it at all. You can just write about stuff you're working on and learning, if nothing else. (“_But I don't have anything new or unique to say_,” you might argue. To which I might reply: “_This ain't the world's first job advice post, yet here we both are_.”)

You don't need a lot of content. Even one page will do, if that's what you feel fits best. (This should go without saying, but: do ***not*** fill your website with AI-generated writing. It's easy to spot and it looks terrible.)

Whatever the size and shape of your site, though: it should be well-made. After all, you're trying to get a job coding things, so make the things you code nice enough that somebody might want to hire you to code their thing, too.

If you aren't comfortable designing your own site, get some help, or use a template of some kind. If all else fails, mimic something tasteful and minimalist. When in doubt, keep it simple. Having a website that looks amateurish probably hurts you more than not having one at all, so put in the work. Seek out feedback.

Similarly: you need some projects to show. (Hint: the website itself could be one.)

<CalloutPlusQuote>

If you can link to something you've worked on professionally, definitely do that. Regardless: I'd recommend showcasing at least one personal project, or something you built yourself.

</CalloutPlusQuote>

(_This is less important if you've been in the industry a while, and your career track record speaks for itself. But it never hurts_.)

Whatever project(s) you show don't have to be big, or particularly ambitious. You don't need a full-fledged SaaS app, or an official open-source project. What you show doesn't even need to be particularly practical or useful. It can be something just for fun, or just for you.

The main thing is: it's something you built on your own, that looks good and functions well, to show you have the necessary drive and skills.

_Quality over quantity_. One really good small project is worth a handful of sloppy demos, so again, get all the help and feedback you can here. It's likely people will peer into the code, so make sure it's in good shape, and make it as accessible and performant as possible.

Lastly: if a side project is still something you need to check off your list, pick something you know you'll enjoy working on. It'll be easier to stay motivated if you're having fun. Use this as an opportunity to learn something new if you want, but don't go so far outside your current area of expertise that you're too busy learning to actually build.

<SideNote>

I haven't mentioned GitHub to this point. I think you should have a profile, and it shouldn't look abandoned, but I don't think it's nearly as important as the other factors covered here. I've never gotten the impression recruiters put any stock at all into GitHub contribution stats (nor should they).

</SideNote>

### Have some writing templates ready

Before you dive in, spend some time coming up with templates for the cover letters you'll be writing, and for the various types of emails you'll be sending. (Look up good examples, in each case.)

Use AI if that makes it easier; just be sure to read through the output extremely carefully, and put your own personal touch on it. AI is a tool to help you write; it's not a solution to replace your writing.

<CalloutPlusQuote>

If a recruiter catches any whiff of AI slop in your writing, it'll signal you're not invested, and that'll likely be plenty enough reason to toss you aside.

</CalloutPlusQuote>

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

When I was applying for jobs in earnest, I kept a spreadsheet. In it, I meticulously tracked every job I'd applied for, when, how, and what the status was, along with the posting link, any other relevant notes and information. This helps in lots of ways:

1. You can visualize your efforts, and see how far you've gotten;
2. You won't end up forgetting which companies and roles you've applied to already;
3. You can track where you are in the process with each company;
4. You'll know when it might be time to follow up;
5. You can keep track of what conversations you've had, and with whom;
6. You won't forget what you've applied for, or get similar roles at the same company mixed up. (You'll be surprised how quickly postings will start to run together.)

If you do this long enough, and with detailed enough notes, you might also start to get a sense for what's working and what's not.

So for those reasons, I'd highly encourage you to keep a spreadsheet with all the details you can. Looking for a job is a job in itself; you may as well take it seriously.

### Front-load the search

Your response rate will probably only be somewhere around 5–10%. That's not on you; it's just a weird, hard time in tech. But it does mean, on average, you'll need to apply to 10–20 jobs just to hear back from one.

When you're first getting started, put all your energy into sending out as many applications as you can. Don't be careless, of course, and don't send out apps for jobs you know you'd never take or are wildly unqualified for. But _do_ go for quantity initially.

There are a few reasons for this:

1. Later on, when your applications start turning into interviews, you won't have as much time for applying. So front-loading the process helps ensure you've still got possibilities in the pipeline later, when you want to be focusing more on interview prep.

2. You want to be getting as many interviews as possible. This isn't necessarily to maximize your odds short-term, but to gain valuable experience at interviewing itself. (More on that later.)

### Be among the first to apply

Jobs that have been posted recently—that is, within the last 24 hours or so—have a higher likelihood of engagement. After a day or two, most postings attract enough applicants to make the recruiter's eyes glaze over. Try to stay on top of postings, and be active on at least a daily basis, so you know as soon as a job you want goes up.

### Go to the source

Wherever possible, apply directly through the company's website, as opposed to applying through these third-party platforms. It may not make a difference, but it could help set you apart from the flood of applicants coming from LinkedIn, etc. Plus, while you're there, you can get a better sense for what the company's all about, and how it works.

### Don't worry how many other applicants there are

Some job sites show you how many people have applied to a posting already. _Ignore that number, no matter what it is_. (It will commonly be in the hundreds, or higher.)

Why apply to a job hundreds of other people have already applied for, you might ask?

- Many of those applications are probably spam;
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

People are divided on whether you should include cover letters. As long as you can write them well and fairly sincerely (there are numerous guides available), I'd advise you to do so.

<CalloutPlusQuote>

A good cover letter can only help. However, a bad cover letter probably hurts you more than none at all does. So err on the side of caution.

</CalloutPlusQuote>

(_By now, you should know this means: don't trust ChatGPT to spit something out for you_.)

Also, since you'll probably be applying to many positions at once, don't let the cover letter slow you down. Better to include a few carefully considered cover letters for the jobs you want most than to send out halfhearted consensual spam to every company.

### Don't disqualify yourself

Apply for jobs even if you don't match all their criteria. This is well-worn, classic advice, and classics are classics for a reason.

The job description is an employer's wish list; it's all the things they hope they find in their search. If you match even around 70%, you'll be about as close as they can reasonably expect to find.

I'd say if you really want the job, go ahead and apply even if you feel you're only about half qualified.

The truth is: the posting will contain mostly stuff you'll probably learn on the job anyway. It's notoriously more rigorous than the actual role. If you want it, shoot your shot, my friend.

<CalloutPlusQuote>

A company will never offer your dream salary and benefits, so don't feel like you need to be their dream candidate.

</CalloutPlusQuote>

### Invest in your web presence

Wait, haven't we already covered this point?

Yes, but _before_ we were mainly being active online to help find opportunities. _Now_ we're being active online to _show who we are_. (You can do both at once, of course, but that shift is why we're talking about this again.)

Ok, but why do we want to do that?

<CalloutPlusQuote>

To the person reading your application and resume, you're just another face in a bubble. It's tough to tell much about you at this stage. So if they search for you online, give them something good to find.

</CalloutPlusQuote>

Definitely have relevant career content in your web presence, of course, but show your human side, too. Talk about what you're good at, what you're interested in, and why somebody might want to get to know you. Build on that vague impression of you someone might have from your application or resume.

Be authentic. You don't need to be anodyne or fake, but obviously, don't get _too_ edgy or controversial either.

If you're not comfortable having your socials public (there are plenty of valid
reasons for this), take them private for your search. Just make sure there's
still enough out there to give anyone searching for you an idea of the amazing person you are.

Showing who you are online helps promote you from a generic applicant to a real, fleshed-out human. Invest in your web presence; it can be a big differentiator.

##  Resume advice

I won't get too deep into writing or designing resumes here; that's well-covered territory elsewhere online. I do have a few specific points to keep in mind, however.

### Focus on effect, not actions

Remember how I said your behavioral story bank would help you in writing your resume? Here's how. (_Backstreet's back, all right!_)

Nobody will be impressed that you, say, "balanced requirements to meet deadlines" or "worked in constant communication with the client" or whatever other jargon commonly fills out resume bullet points. Sorry; everybody else has the exact same boilerplate on their piece of paper, too.

Instead, pull from your BSB. "In [situation], did a, b and c, _resulting in a 15% increase in conversions_.” Or, "Given [context], implemented x, y, and z, _improving cost efficiency by 10%_.”

The point of your resume is to tell your story. "I did all these things" isn't a story. Remember STAR (situation, task, action, result). You could simplify that to three story beats:

- Set the scene (situation, task)
- Say what you did (action)
- Show how that changed things in the end (result)

Use specific, quantitative numbers and measurements wherever possible.

Usually, when I give this advice, the immediate response is "but what if I don't have numbers?" That's fine. Give it your best reasonable guess.

No, I'm not suggesting that you lie, or that you make things up. Don't do that.

But if you're fairly confident conversions went up by around 5%, or you have enough info to make an educated guess that you saved the company around $10,000 annually, go with it. If you're not comfortable with that, there's nothing wrong with saying "…by _approximately_ 5%," or "…saving the company _an estimated_ $10,000 annually."

Again, just to be clear: don't make up things, and don't inflate numbers. But you're not filing financial reports with the SEC here. A reasonably confident guess based on best available information is fine, and more importantly for our purposes: much better than nothing.

### Talk about yourself as a human, not a technology checklist

Yes, you have to list every technology you've ever touched, because there's a chance you'll be filtered by whether or not the term "React" is on your resume. Nobody likes it, but it's the unfortunate reality of this whole ridiculous process.

However, _don't stop there_. If your qualifications are all you have to stand on—“I have proficiency in _x_, _y_, and _z_”—then you haven't given a prospective employer any reason at all to hire you over anyone else with those same skills.

For just about any skill you can list—say, React experience—there's a metaphorical line of humans down the hallway with that skill. (Hell, there are probably trained monkeys who can write JSX these days.)

You're never going to win the checklist game. So don't compete purely on that level.

<CalloutPlusQuote>

Companies can't just hire your knowledge or skills; they have to hire _you_. So show who you are and what you bring to the table beyond just your bona fides.

</CalloutPlusQuote>

If companies just want somebody who knows React, it's easy to find that person. (Maybe even a monkey.)

It's also fairly easy to find somebody who, for instance, communicates well. Or, someone who's good at managing projects.

But finding _all_ of those in the same person? *That's* value. So find your value, and then talk about it. It's not just what you know; it's in _everything_ you bring to the table all together, and your hard skills are only one dimension of that.

<CalloutPlusQuote>

A lot of development _isn't_ development; it's a job a human has to do, largely by actually talking with other humans, and using a slew of other skills that aren't typing code.

Don't make the mistake of excluding strengths and assets just because they aren't technical skills.

</CalloutPlusQuote>

Speaking from personal experience: my dev skills have been _most_ valuable when I could use them together with my communication and design skills. Dev skills alone never would've matched the value that fusion could achieve.

That's just my unique mixture; what's yours? Are you a good communicator? Do you have skills in other areas, like design, marketing, or sales? Do you have stories of how you've supported others in your career? Do you take responsibility? Are you good at managing projects? Are you a persistent problem solver?

Heck, are you just nice to work with? Are you a decent human being? Do people like having you around?

(You'd seriously be _amazed_ how many doors will open for you if you're just a decent coder who's also a decent person.)

At the end of the day, you're a human who has to work with other humans. So don't _just_ talk about how you work with computers.

Mine that BSB. (_Backstreet's back, all right!_)

Bonus points: get recommendations from your previous (or current) managers and coworkers in writing, and share them.

I know that's an awkward process, at least in the US, where our culture dictates that we never say anything nice about ourselves _or_ ask other people for favors. We're supposed to be humble and self-sufficient. But you're not bragging; you're being honest, and the sooner we all realize we're all an interconnected part of each other's success, the better.

Also remember: _all skills are transferable._ Don't disqualify relevant experiences just because they happened in a different career field, or in your personal life.

---

Zooming out a little bit, you might realize I'm suggesting that beyond a certain point, working on _you_, the person, and your so-called "soft skills" pays off more than working on your hard skills does.

Hard skills are mostly just a prerequisite, and once you hit a certain threshold, they offer diminishing returns.

In a healthy organization, at least, it doesn't matter how good you are at your job if nobody wants to be around you. No matter how technically brilliant you are, you're still a person, and you still have to communicate and work with other people.

<CalloutPlusQuote>

Hard skills might get you in the building, but soft skills unlock most of the doors inside it.

</CalloutPlusQuote>

So if you feel like you're well qualified, but you're still hitting a wall, soft skills may well be where your efforts are best invested.

### Tailor your resume to the job

Wherever you can, make adjustments to your resume (and also, your application and cover letters) to better fit the specific job you're applying for.

Even if you're going for a frontend role, there are _lots_ of different kinds of those. Is the role in design systems? Put the design and component work you've done front and center.

Is the role for a performance-critical product? Try to match any experience you have to that.

Maybe it's a marketing/website role. If so, play up what you know about SEO, conversions, and A/B testing.

Your goal is to make your resume sound as much like the description as possible. "Hello, I am the person this post is describing. Here's why..."

### Keep it short and simple

Don't let your resume get longer than two pages; keep it to one, if you can. Don't skimp, but don't embellish, either.

Unfortunately, you probably have to stuff a lot of keywords in there to try to get it past automated screening software, but try to find a way to do that without making the reader's eyes glaze over.

Your resume is an opportunity to tell your story and set yourself apart. By all means, take whatever advice seems prudent on making sure the required content is there. But beyond that: be sure this piece of paper highlights who you are, what you've done, and what impact you had, without just looking like a wall of text.

(Pro design tip: white space is your friend. You'll usually hit the point where you can't possibly squeeze your content any further _long_ before you hit the point of too much white space.)

### Sweat the details

This piece of paper/digital document is the only thing someone knows about you. Make it look nice. (See the previous section.)

And whatever else you do, make _absolutely certain_ you fix any typos and grammatical errors. Run anything you write through as many checkers as you can, but be aware they won't catch everything. Reread what you write early and often. Sometimes it helps to do so aloud. Ask for help from a trusted friend if you need to.

There may be hundreds of other applicants. Someone at the company's gotta filter through them somehow. So don't give them a reason to throw you out, no matter how tiny or petty that reason might be.

<SideNote>

If you find typos or grammatical errors in my writing—and I don't doubt you could—know that it's because I've done none of these things, and have subjected this post to no greater scrutiny than that of my own two eyeballs. Your resume deserves better.

</SideNote>

##  Interviewing

So you've made it through the application process, and now it's time to actually _talk_ to somebody.

Congrats! Let's talk about what to do in this part.

### Fail early and often

That heading is a little bit of a joke. But really, though: my absolute best advice for interviewing is: do it _as often as you can_.

Interviewing is a skill, and just like any other skill, the only way to improve is to just keep doing it.

<CalloutPlusQuote>

Contrary to the popular saying, doing something over and over and expecting different results is _not_ the definition of insanity; it's the definition of _practice_.

</CalloutPlusQuote>

Practice all you can. Do mock interviews with friends, family, or online, if it helps. Run through what you'd say in given scenarios in your head while you're commuting. Talk with strangers, if you can find some who are willing. (_Service industry workers don't count_.)

And, of course: actually _take_ real interviews. The more, the better, until you start to feel confident. (Personally, I think it's a good idea to take interviews even when you're _not_ looking for a job, just to stay sharp.)

I was lucky that I often coded in front of students while I was teaching for a local code school. So by the time I got in front of real interviewers, I was pretty well-practiced at talking through things, and had long ago lost my fear of looking silly or making mistakes. I'd recommend you find ways to do something similar. (In other words: reproduce my luck.)

By the time you're interviewing for a job you _really_ want, you'll want to feel comfortable in that situation. The only way to get there is through practice.

<CalloutPlusQuote>

Pardon the baseball analogy, but: you don't want your first time at the plate to be in a playoff game. So get out there and swing at some pitches while the stakes are still low.

</CalloutPlusQuote>

One important caveat here: I'm not suggesting you waste anyone's time. I don't recommend you interview for a job you know for sure you'd never consider taking. That's rude to the person who's giving their time to interview you in good faith.

That said: you might be surprised how much things can change once you actually talk to some folks at any given company. The interview process has definitely changed my mind before, in both directions. I've said no to things I'd previously considered dream jobs, and I've also said yes to jobs I applied for on a whim, both because of the interviews. So don't ever be _too_ sure before you've actually spent the time exploring.

There's nothing wrong with taking an interview just to learn more. In fact, that's kind of the whole point.

<CalloutPlusQuote>

This is a two-way agreement; you're not just selling yourself away to the first bidder. You should be asking questions to make sure it's a fit on your end, too, and the best way to do that is by interviewing.

</CalloutPlusQuote>

Besides: this playing field is _heavily_ slanted towards companies, and a lot of them _will_ ghost you and worse. Even the companies who _won't_ ghost you will still have no qualms at all with asking you to do hours and hours of unpaid labor over the course of interviewing, quite likely for absolutely nothing in return. So even if you did waste someone's time just for a practice interview, well...they're still getting paid. With the way things are right now, I guess I'd have a hard time feeling too bad about that.

<SideNote>

I've been ghosted, several times. Every time, it seemed like everything had gone well. Every time, I was cheerfully promised I'd hear back within a few days by a nice, friendly person who seemed genuinely interested in me. Then…nothing. (Or, best-case, an impersonal rejection email months later.)

I only tell you this so you know it happens, and so you don't take it personally. It's a cruel, stupid game. Don't believe it has anything to do with you.

</SideNote>

### Have your behavioral story bank ready

Interviewers will commonly ask questions like "tell me about a time you managed conflict," or "tell me about a time a project didn't go as planned."

They do this because it provides good insight into how you handle realistic situations, so come prepared with your BSB. (_Backstreet's back, all right_!)

(_I know you're groaning because the Backstreet Boys jokes have gotten old by this point. That's ok. In fact…I want it that way_.)

As I've noted before: your stories don't all have to be from direct business situations. If an interviewer asks to hear about a time you dealt with conflict, and the best example you have is the time you broke up a fight between the neighborhood kids over Pokémon cards, run with it.

If your best story about managing expectations in a high-pressure situation happens to come from your days of restaurant work, by all means, tell that story! It absolutely counts. (_Your interviewer might even consider that pressure more impressive than the day-to-day of the workplace, and give you bonus points_.)

One other tip here: don't try to look perfect.

Lots of the questions you're likely to hear will focus on conflict; times you disagreed with your manager, or had a project go wrong in some way.

Be honest. Don't try too hard to look like the good person. Instead, be sure to include what you learned, and how you'd handle that situation better in the future.

<CalloutPlusQuote>

Showing you're a person who's capable of learning and growth, who can identify and be honest about their flaws, is more valuable (and believable) than coming off perfect.

</CalloutPlusQuote>

### Take the time you need

If you can't think of an answer to a question right away, just say, "let me think about that for a minute."

It's easy to feel pressure to constantly perform in an interview, but it's perfectly fine to ask for time, and to take as much of it as you need.

It may feel awkward as you sit there in silence, but it's just fine. Really. You won't get docked for it. And even if you did, the pause will probably produce a better result than hastily fumbling through a bad answer would.

It's possible it'll even be noted as a _good_ thing that you're confident enough to ask for what you need.

### Never, ever, EVER say bad things about previous jobs or coworkers

Seriously: never. Do not ever, under any circumstances, disparage any other party in an interview, _no matter what_.

_Never_.

You might think I'm saying this because nobody likes a complainer. True enough. But there's more to that, in the form of a psychological quirk of the human brain:

<CalloutPlusQuote>

When someone calls out a problem, we automatically associate that problem with the person reporting it.

In other words: when you point out something wrong, people are predisposed to believe it's somehow _your fault_.

</CalloutPlusQuote>

Put simply: we're innately wired to shoot the messenger.

If you say your company is terrible, people will probably just think you're a complainer, and the real problem is with _you_.

If you say your manager is awful, people will wonder what _you_ did to your manager to make them treat you like that.

I'm sure you can probably identify this phenomenon in the real world without looking very far. Sadly, cases where abusers are called out, only for the victims to face accusations _they_ did something to deserve or invite the abuse, are far too common. (_As if it's possible to deserve to be victimized_.)

Regardless: it's pretty tactless to turn an interview into a gossip session. So just don't do it. You will _not_ look like the good person. Save those stories for people who know you and trust you.

If you're _forced_ to bring up a negative—if, for example, you're asked what it is you don't like about your current position—try focusing on the impersonal, objective, and aspirational, rather than on the personal, subjective, and/or current state of affairs.

**Bad**: “_My boss micro-manages me and I hate it_.”

**Better**: “_I'd like to find a role where I have more autonomy in my work_.”

**Bad**: “_My current company doesn't promote anyone unless management likes them. Everyone knows it, and it sucks_.”

**Better**: “_I feel I've grown as much as I can at my current position, and I'm looking for a role with greater challenges, where I can continue to expand my skills and knowledge_.”

---

Related advice—which goes here because I couldn't figure out where else to put it—impersonal language is almost always better in professional contexts. (It's often better in personal relationships, too.)

<CalloutPlusQuote>

Try to avoid the words "I" and "you." Focus the conversation on the topic, not the people in it.

</CalloutPlusQuote>

Soften your language; try not to speak in absolutes. If you have to involve pronouns, make it collaborative; use "us" or "we" instead of "I" or "you."

**Bad**:
- “You're unclear.”
- “I don't think that scales well.”
- “You should rethink that.”

**Better**:
- “_That code_ could be clearer.”
- “_That approach_ _may not_ scale as well as it could.”
- “_Let's_ rethink that.”

### Always have questions ready, and always ask them

<CalloutPlusQuote>

A sneaky truth about interviewing: your questions say as much about you as your answers do.

</CalloutPlusQuote>

Most interviews will end with 5–10 minutes for you to ask anything you'd like. _Don't pass up this valuable opportunity_. Have a list of open-ended questions prepared.

Ideally, base these on the list you put together in the "know what you want" section: ask questions that help reveal how closely aligned this company is to your values and preferences.

Don't throw softballs. “_What's your favorite thing about this job_?” probably won't tell you much you didn't already know.

Instead, try something like: “_what's your favorite thing about this company, and what's one thing you would change about it if you could_?” Dig for the full picture.

<CalloutPlusQuote>

This is probably your only chance to get an honest answer that hasn't been filtered through HR and marketing. Take full advantage.

</CalloutPlusQuote>

One of my personal favorite questions: “_what would make somebody successful in this role_?” It's open-ended, and hopefully, the answer describes you. If so, you can give a little nudge on that. But either way, it helps you understand the job, the company's expectations, and how you'll be evaluated.

### Be prepared to talk salary

There's a whole section on this later. But for now, I mention it here so if you only read this section, you'll know to look up what people in this role make at _this_ company, and what they make in similar roles across the tech field.

### Invest in your setup

Consider this less essential than other items, but: if you're interviewing via video call, like it or not, people's impression of you will be partially shaped by your video and audio.

Record yourself beforehand, to see how you look and sound in the video. Move your computer to a place with good lighting, if you can.

If you have good lighting, and headphones or earbuds with a decent mic, that's probably good enough (assuming your environment isn't too noisy). Good lighting makes up for a bad camera better than a good camera makes up for bad lighting, but even an affordable webcam will probably be better than the one built into your machine. (Either way: make sure the lens is clean.)

Spend some time on the space in your background, too. It's part of the impression you make. If your resume says you're organized and detail-oriented, a messy room will undermine you. Work on your background like it's part of your resume. (Tip: you can even put interesting personal items back there to help yourself stand out a little bit, and give you some good conversation pieces.)

### Follow up and connect after interviews

After any interviews you have, take a moment to follow up with the people you spoke with. Shoot them a quick email or LinkedIn message thanking them for their time and insight. (You _did_ ask questions, right?) If it doesn't feel forced, find a way to work in your enthusiasm for the role and continuing in the process. Do this as soon afterward as possible, without making it so fast it's creepy.

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

Honestly, I wish I didn't have to write this section. In my opinion, live coding interviews should die immediately and forever. (This includes anything by similar names; whiteboarding, leetcode exercises, whatever you want to call them.)

Why? Because there's little an interviewer can learn about you by watching you type that they couldn't have sussed out through an ordinary conversation, for one thing.

But more importantly: doing a code exercise has almost nothing in common with doing the actual job. The skills and experience are almost completely different.

<CalloutPlusQuote>

Making a developer pass a live-coding interview is like forcing Taylor Swift to sight-read a classical harpsichord piece before you book her at your venue. That's how laughably mismatched the test is with the actual job.

</CalloutPlusQuote>

Worse: this style of interview filters out people who would've been excellent at the job—working tickets, building features, understanding the system, collaborating on a team—but who don't have the testing skills. (_Which, again, are all things the actual job pretty much never calls for_.)

It's just like standardized testing in schools: it doesn't find the _smartest_ students; it finds the _best test-takers_.

<CalloutPlusQuote>

Tech, in general, loves gatekeeping. So it's little surprise most code interviews are more a grand celebration of gatekeeping than they are any reasonable attempt to gauge a candidate's actual qualifications.

</CalloutPlusQuote>

Anyway, I digress. Unfortunately, most companies still administer these archaic, bias-ridden exercises, and so you'll probably have to take some.

The good news is: most companies at least keep the difficulty fairly low, and many won't eliminate you just because you couldn't get through one on time. The exercise is, at least ostensibly, about seeing how you think, and about making sure you're not somebody who's just hoping to make it a few weeks before anyone notices they have no coding skills. (Again, this could easily be accomplished through conversation, but, well, tech bros make the rules in this world, and they tend to see human interaction as a last resort rather than, ya know, normal.)

### Preparation and mindset

I _hope_ you don't have to do live coding, but I've had to for most of my jobs, and odds are high you will, too.

The only way to get better is practice, and there are two aspects to prepare for:

1. The actual coding part; and
2. The in-front-of-people part.

For the first part, I highly recommend a site like [CodeWars](https://www.codewars.com). Despite the scary-sounding name, CodeWars lets you tackle exercises based on your skill level. It's an excellent place to try out some of the kinds of things you might be asked in interviews, and to sharpen your skills.

Look up some leetcode interview questions, too. Try some out, but be sure to check other people's answers. You can learn a lot just by observing at how other devs solve problems.

I also personally enjoyed and benefitted from the [Better JavaScript](https://levelup.video/tutorials/better-javascript) course on [Level Up Tutorials](https://levelup.video/). The series does a good job on explaining why some practices are better than others, and helped put me in a good mindset for thinking through code and talking about it.

That's the first half. The _other_ half is the performance part; getting comfortable in front of people.

Before you're in an actual interview, practice. Get in front of people, and talk as you type. Make mistakes. Talk about them. Laugh about them. Keep going, until it stops being so uncomfortable.

<CalloutPlusQuote>

Your goal isn't to stop making mistakes; that's impossible. Your goal is to get so used to it, it doesn't bother you anymore.

</CalloutPlusQuote>

(_What, you think that wildly underqualified guy over there worried about_ his _mistakes? Hell, he probably didn't even know he made them_.)

You don't need to be a great performer _or_ a great coder. You just want to get reasonably comfortable talking through code while you write it, and shrugging off any inevitable mistakes along the way. That's it.

I know it's painful. I know some people just aren't suited for this kind of thing, and it's not fair to force those people to go through it anyway. If you're one of those people, I'm sorry. It sucks. But I know you can do it. I believe in you. It just takes practice.

### Once the clock starts

When you do find yourself in an actual code interview, first and foremost: _don't rush_. This will feel counter-intuitive; you've only got so many minutes. But don't let the clock be a distraction, and don't let it dictate your mindset.

First, read the directions slowly and carefully. Ask any and every question that pops into your mind.

Don't hesitate to ask about something you're not sure of, even if it seems like you should be.

Make sure you understand the assignment by repeating it back in your own words. Then pause once more, and consider possible ways to accomplish the task. Talk through them as you think, if you can, so your interviewer can get a glimpse into your thought process. Talk through the tradeoffs of each approach that comes to mind.

<CalloutPlusQuote>

The more you talk through what you're doing, the better. You're here to show how you think through things, how you approach solving problems, and how you communicate.

</CalloutPlusQuote>

(Solutions also often appear when we try to explain the problem, so talking through everything you're doing has other benefits, too.)

Once you feel confident about a direction, write out the steps you need to get to a solution. Use comments in your code, if you can, but list them out somewhere.

Finally, when you know what success is and have a good idea of how to get there, then and only then do you get to work actually writing the code.

<SideNote>

Don't stress over code perfection at this point. Priority one is to get something working, no matter how sloppy or ugly. You can come back and clean it up if you have time at the end; if not, you can talk through it afterwards, which is almost as good.

</SideNote>

### Don't panic

I know the situation might feel very uncomfortable, but again, don't let the clock push you into rushing. Breathe slowly and deeply. As much as you can, be of calm mind and body. (The practice helps with this.)

If you sense yourself getting overly anxious, just stop and breathe for a minute. Feel free to tell your interviewer you're taking a minute to think through the problem. It's your time; use it however you want.

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

1. What number is low enough I probably couldn't say yes?
2. What number is high enough I probably couldn't say no?

Once you've answered that, you have a pretty good idea of your range. Ask for the very high end of it, so you'll hopefully fall on the upper end if you end up negotiating. (If it's accepted right away, you might've asked low.)

Don't shoot the moon and ask for a wildly unrealistic number, of course. But ask for what you want and what you're worth. What you think is a high number probably isn't to the company. (This is all assuming they haven't posted the salary range, or given you any indication; you want to set your starting point high, in that scenario, because it's not going anywhere but down.)

Don't be afraid of negotiation. As long as your ask isn't outrageous, at worst, you'll probably just hear something like "that's slightly high for this role; we're budgeting more in the range of [x]" at which point you can still work on coming to an agreement, if you want to. (And if they slam the door on you over a reasonably small difference, walk away knowing you dodged a bullet.)

Also keep in mind: salary isn't everything. There are lots of other things to consider, like:

- How good is the insurance? (Do look at that. I mean, really look at it, even if you're still young and healthy. Get the details up front as much as you can. Bad insurance can eat a _lot_ of your paycheck.)
- Do you get shares in the company, or any other sort of equity? If so, find out how much, how you earn them, and when.
- Are there bonuses? If so, what range are they, and how do you earn them?
- Are there other perks, like retirement funds? Is there 401k matching?
- What about non-monetary benefits? Do you get food? Office stipends? Travel opportunities? Is the culture great? Is there a learning or conference budget? Is this a promotion, or a better title? Will it look better on your resume the next time you're job searching? What growth and learning opportunities will you have?

Consider the whole package. It might be worth a lower salary if the benefits are better, the culture is better, and/or the role is just more fulfilling.

Ultimately it's up to you what's most valuable in a new position. I'd just say: be careful not to give any one factor so much weight it can override all the others. You'll need _some_ balance.

<CalloutPlusQuote>

Money makes up for poor perks better than the other way around, but no amount of money can make a bad job pleasant.

</CalloutPlusQuote>

One last thing: be extremely wary of promises. If you hear anything at all like "we're going to start you low, but we expect you'll be promoted quickly," or "the salary is lower because we give regular bonuses," proceed with an abundance of caution.

If this happens, at the _very_ least, get every detail you can, in writing, including what you'll need to do to earn that promotion/bonus by the time stated, and what figures they'll be.

Promises are quickly forgotten. They might be sincere and in good faith, but regardless: if you're relying on anyone's word for anything, get the receipts. If it's not in writing, it didn't happen.

##  Mindset

It's possible you'll find something quickly, and I hope you do. However, even if you find yourself looking month after month after month, I do think there are some ways to steel your outlook and conserve some of your energy, to move at a sustainable pace over the long haul.

### Things are bad, but I think they're getting better

I won't sugarcoat it: this is a weird, hard time for everyone in tech. As the general economy around us continues humming along steadily, our sector has, for various reasons (mostly to do with corporate greed), chilled pretty severely. It's a rough time, and again: that's nothing to do with you.

Anecdotally, however: years ago, starting the day I put the word "developer" on my LinkedIn profile, I began getting regular, sometimes _relentless_ recruiter spam. (In fact, I've joked before that the best way to get a job as a developer is to say you already are one.)

That all went silent at some point in the last year or so. But I've noticed it beginning to tick back up again lately.

My personal take (again, purely anecdotal) is: companies have started to realize laying off so much of their staff over the last year or two has made them a lot slower than they'd like to be. And also: the people who were left probably started jumping ship after having their trust in the company permanently shaken. (I further theorize companies are beginning to realize AI isn't replacing people quite the way they thought it might.)

On top of this, the much-prognosticated recession that helped lead to the layoffs in the first place never really materialized, tech's current downturn notwithstanding.

Money is still tight in the tech world, but I'd bet on it loosening back up again in the foreseeable future, personally.

Even if it doesn't, though: there are upsides to walking a long and trying road. A lot of your competition will probably give up and go looking elsewhere. You'll have plenty of time to work on your portfolio and side projects, and by the time hiring _does_ pick up again, if you're still out there, you'll be _way_ ahead, having spent the winter sharpening your skills instead of hibernating.

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

At the end of the day, we're all basically just (slightly) sophisticated house pets. Look after yourself like you'd look after your favorite pet.

I don't care who you are, where you're from, what you did… (Sorry, I had to get one last Backstreet Boys joke in there. I'm done now. I promise.)

Seriously: you can do this. I know you can.

It's just a matter of time, practice, and persistence.
