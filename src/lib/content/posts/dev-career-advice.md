---
title: "For what it's worth: all my advice on tech job hunting"
date: 2024-05-03
updated: 2024-05-03
categories:
  - opinion
  - web
coverImage: fwiw.svg
excerpt: "A collection of things I've learned over my decade in the industry, on how and where to look for jobs, applying, interviewing, and talking salary."
draft: true
published: false

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

Eventually, I realized I was having this conversation often enough, and rehashing the same pointers, that it would probably save all parties involved a lot of time and effort if I just wrote down my advice in the form of a blog post.

Hence, here we are. This will be a collection of all my knowledge gained, for whatever it's worth. I'll do my best to keep it up to date as the months and years roll on, but this is everything I know (or at least, am pretty sure I know) right now.

## What this is (and isn't)

Just to get this out of the way right off the bat: I'm no authoritative expert, either in hiring or in tech in general. If there was a talking heads-style TV show on how to get a job and/or advance your career in tech, nobody would be calling me up to sit on the panel.

I don't claim to know everything, and I don't even claim what I _do_ know will apply to you in the first place—both because what works for me might not work for you , and because most of my experience with job hunting and career trajectory came _before_ the major tech layoffs and the large language model (LLM, or "AI") boom that's defined this era of tech.

Still, though: I've had what I would consider a fairly successful career in tech so far. I've been building things on the web and teaching code for about ten years, being full-time in frontend for the last five, at companies like [Flywheel/WP Engine](https://wpengine.com), [Shopify](https://shopify.com) and [Deno](https://deno.com). Over that time, I'd like to think I've learned some things that might be useful.

I'll be the first to tell you a lot of my journey has been lucky. Still, though: some of that luck is reproducible.

While I'm a developer, and while lots of this will use developer-specific jargon and examples, this post should be applicable to anyone looking for a role in tech.

Know that there are places I won't go deep into specifics, because there are plenty of resources already available (for example: how to write and design résumés or cover letters). Those are topics worthy of their own posts, and you'll find plenty of that kind of post out there.

This also won't cover things like how to write algorithms on the fly, although I do have some general advice relevant to coding interviews and white-boarding.

All that said: the rest of my advice has no basis more reliable than my own meandering experience.

I will dispense this advice now.

## Before you start

Before you get to the thrilling and wonderful world of filling out applications and telling strangers on the phone all about yourself in 90 seconds, you should check a few things off your list.

The biggest one is: _know what you're looking for_.

Obviously, you want a job to make money to eat and survive and pay for Netflix, but it's worth taking some time to go deeper than that.

What _kind_ of job best suits you? What type of opportunities would you want in your next position? How would you like it to be different from your last job, and how would you like it to be the same?

Other questions to ask include: what are your strengths, and what are your weaknesses?

While I'm not generally a fan of personality tests and the like, I've found the [CliftonStrengths Assessment](https://www.gallup.com/cliftonstrengths/en/252137/home.aspx) (also called the StrengthsFinder, or Top Five Strengths) to be illuminating for me, personally, and valuable in understanding the kinds of roles and organizations I do best in. (In fact, every time I've taken it, I've gotten a new job shortly thereafter.)

Whether or not you take any tests, though, be honest with yourself about how you do your best work, and what really grinds you to a halt. Write your answers down, too, and have them handy for interviews later.

If you have any severe deficiencies, it's worth addressing those immediately. If you think you might run into a coding interview and don't feel prepared, or if you might be white-boarding but don't have any idea how to do that, now's the time to work on that.

Get at least conversational in any technology or area that's likely to come up in the kinds of roles you'll be going for.

Beyond that, however, I personally think time and energy is better spent bolstering strengths than mitigating weaknesses. Don't leave any gaping holes in your armor, but also: don't polish your shield when you could be sharpening your sword.

## Where to look

I hate [LinkedIn](https://linkedin.com) as a social network, but it's hard to deny the sheer volume of jobs, connections, and info available there. If you're looking in earnest, I've had some friends strongly recommend LinkedIn Premium. It's usually available with a one-month free trial, and depending on your search, you may even be able to get hired before that month expires. It seems like it would be worth at least a month if you're really trying to get hired fast.

All that said: LinkedIn is desperate for engagement, and that means the noise vastly outweighs the signal on the platform.

On the other end of the spectrum, I really like [Otta](https://otta.com). You won't get flooded with tons of jobs that barely match what you're looking for on Otta—in fact, it might seem like you barely see any jobs at all—but what you _do_ get will be much more tailored to your skills and preferences. I've been on Otta for well over a year, and while there are only a handful of jobs on there every week (and oftentimes, some of them will carry over from week to week), I can't remember any of them being poorly matched, or outside of my preferences.

In between those two, [Glassdoor](https://www.glassdoor.com) is also helpful, in my experience. The job volume is lower than on LinkedIn, but the search filters work better, and there's more useful info available, including access to employee reviews of companies, and salary information. (As with any review site, take any individual review with a grain of salt, and look for patterns instead.)

If you're looking for jobs with bigger tech companies, or with those in major tech hubs, [BuiltIn](https://builtin.com/jobs/) is a good resource that lets you tailor your search along many different parameters.

I'm fairly sure every job I've ever gotten or interviewed for (and that hasn't come from word-of-mouth) has been through at least one of these four sites; LinkedIn, Otta, Glassdoor, and/or BuiltIn. So while there are others available, and while I don't have any reason to dissuade you from being on more, that's a pretty solid foundation in my experience.

If you'd like to break into climate tech, [ClimateBase](https://climatebase.org/jobs) is a good place to look. And, if you'd like to try to land with an early-stage startup, [Wellfound](https://wellfound.com/jobs) is a great place to try.

## How to apply

This section will cover lots of general tips and advice for the arduous process of applying to jobs. I've divided it into sections based on each general piece of advice, so you can get the gist by skimming the headlines if you want.

### Track your efforts

When I was applying for jobs in earnest, I kept a database table in Notion (a spreadsheet, essentially, in case you're not familiar) with every job I'd applied for, when, how, and what the status was, along with any other relevant notes and information. This helps in lots of ways:

1. You can visualize your efforts, and see how far you've gotten;
2. You won't end up forgetting which companies and roles you've applied to already;
3. You can track where you are in the process with each company;
4. You'll know when it might be time to follow up;
5. You can keep track of what conversations you've had with whom, so you don't repeat or embarrass yourself.

If you do this long enough, and with detailed enough notes, you might also start to get a sense for what's working and what's not.

I'd encourage you to do the same. Keep a spreadsheet with all the details you can. If you're gonna be looking, you might as well take it seriously.

### Front-load the search

Your response rate will probably only be somewhere around 5–10%. That's not on you; it's just a weird, hard time in tech. Bit it does mean, on average, you'll need to apply to 10–20 jobs to get one response.

Don't be discouraged by this; there are things you can do to grease your success rate. But when you're first getting going, put all your energy into sending out as many applications as you can. Don't be careless, but do go for quantity initially.

There are a few reasons for this:

1. Later on, when your applications start turning into interviews, you won't have as much time to apply. So front-loading the process with applications helps make sure you've still got possibilities in the pipeline later on, when you want to be focusing more on interview prep and less on blasting applications at the wall.

2. You want to be getting as many interviews as possible, not just to maximize your odds, necessarily, but to gain valuable experience at interviewing itself. (More on that later.)

(Hat tip to [Andrew Walpole](https://andrewwalpole.com/) for this point, and the next.)

### Apply early

Jobs that have been posted recently have a higher likelihood of engagement. After a day or two, most postings attract enough applicants to make the recruiter's eyes glaze over. Try to stay on top of postings, and be active on at least a daily basis.

### Go to the source

Wherever possible, apply directly through the company's website, as opposed to applying through these third-party platforms. It may not make a difference, but it could help set you apart from the flood of applicants coming from LinkedIn, etc.

### Don't worry how many other applicants there are

Some job sites show you how many people have applied to a posting already. Ignore that number, no matter what it is. (It will commonly be in the hundreds, or higher.)

- Many of those applications are probably bots;
- Many of those who _are_ human aren't qualified;
- Many who are qualified will be eliminated for other reasons;
- Many won't get past the screen;
- Many who do won't even won't show up for the interview;
- Many who do show up won't make it through; and
- Some who get to the final stage probably won't accept the offer anyway.

Your competition is not nearly so voluminous as it appears.

### Write good cover letters, unless you can't

People are divided on whether you should include cover letters. As long as you can write them well and fairly sincerely (there are numerous guides and templates available on that front), I'd advise you to do so.

However, a bad cover letter probably hurts you more than no cover letter does. So err on the side of caution.

Also, since you'll probably be applying to many positions at once, don't let the cover letter slow you down. Better to include a few carefully considered cover letters for the jobs you want most, than to send out spam letters to every company.

One helpful tip: spend some time prior to applying for jobs coming up with cover letter templates, where you can just swap in details as needed. This will help minimize friction during the application process. (Hat tip to [Dave Rupert](https://daverupert.com/) for that idea.)

### Be active online

To the person reading your application and résumé, you are just another face in a bubble. It's tough to tell much about you at this stage. So if somebody gets as far as searching for you online, _give them something good to find_!

I personally advocate for having a website, at minimum; add a blog, if you like writing at all (it helps to show your thinking style and communication skills); and at least one live side project, however small, plus any socials you want to be on. (LinkedIn is unfortunately a must for networking; others are up to you.)

You don't _have_ to do all of these things; I'd definitely go with quality over quantity. But focus on things that show who you are, what you're good at, and why somebody might want to get to know you and/or work with you.

Be active on LinkedIn, and definitely build your network there, but don't look like a bot. Post good content where you can, but don't spam. Show your human side. Be friendly and helpful where you can be. Round out that vague impression of you a stranger will have from your application with inviting details.

And obviously, be careful what you're posting. It doesn't need to be anodyne, and it _should_ be authentic. But don't get _too_ edgy or controversial.

<CalloutPlusQuote>

Paint a positive picture of yourself online, and you'll stand out as a human, not just an applicant.

</CalloutPlusQuote>

If you can do all of this _before_ it's time to start the search—or at least, as early in the process as possible—it'll pay off well.

## Résumé advice

I won't get too deep into the specifics on writing or designing résumés here; that's well-covered territory elsewhere online. I do have a few specific points to keep in mind, however.

### 1. Don't just say what you did; talk about the impact you had

Nobody will be impressed that you "balanced requirements to meet deadlines" or "worked in constant communication with the client" or whatever other jargon. Sorry; everybody else has the exact same boilerplate on their résumé, too.

Instead (or in addition), put something like "did a, b and c, _resulting in a 15% increase in conversions_.” Or, "implemented x, y, and z, _improving cost efficiency by 10%_.”

The point of your résumé is to tell your story. "I did all these things" isn't a story. Talk about _how you changed things_. Say what you did, yes, but follow that with how _your actions_ had an impact on the trajectory of the company and on the people around you.

And when you do that, use specific numbers wherever possible.

Usually, when I give this advice, the immediate response is "but what if I don't have numbers?" That's fine. Give it your best reasonable guess.

No, I'm not suggesting that you lie, or that you make things up. Just to be extra clear here: don't do that.

But if you're fairly confident conversions went up by around 10%, or your best educated guess is that you saved the company $10,000 annually, go with it. If you're not comfortable with that, there's nothing wrong with saying "…by approximately 10%," or "…saving the company _an estimated_ $10,000 annually."

Again, just to be unequivocal: don't make up things, and don't inflate numbers. But don't expect anybody to call in a detective to verify your figures, either, as long as they seem reasonable and fairly accurate.

### 2. Talk about yourself as a human, not just a technology checklist

Yes, you have to list every technology you've ever touched, because again, this whole process is a cruel joke, and there's a chance you'll be filtered by whether or not e.g., the word "React" is on your résumé. It's boring and it's stupid, but that's the way this boring, stupid game works.

However, _don't stop there_. If your qualifications are all you have to stand on—"I have proficiency in X, Y, and Z"—then you haven't given a prospective employer any reason at all to hire you over anyone else with those same skills. (Or even over _no one_ else; ChatGPT probably knows at least as much about React as you do. Hell, there are probably trained monkeys who can write JSX these days.)

If all you have is a checklist of skills, you're never going to win that game. Somebody else will always have a longer list than you. So don't try to compete purely on that level.

Your employer has their pick of probably hundreds, maybe _thousands_ of people who check the technical boxes. So the question is: what _else_ do you bring to the table?

As I'm fond of saying: companies can't hire _skills_ (or résumés, or portfolios, or expertise); they have to hire the _humans_ who possess those things.

I'm certain you have positive qualities that aren't just software you know, and it's the _overlap_ of those qualities and your hard skills that make you valuable.

It's easy to find somebody who, for example, knows React. It's also fairly easy to find somebody who, for instance, communicates well, and can step in to lead projects where needed. But finding _all_ of those in the same person? _That's_ value. So find your value, and then talk about it. It's not in what you know; it's in _everything_ you bring to the table, and skills are just a part of that.

Do you communicate well? Do you have stories of how you've supported others in your career? How are you a good team player? Do you take responsibility? Do you demonstrate empathy? Are you a good ally? Are you a persistent problem solver? Can you talk about a time you tracked down an extra tricky bug?

Heck, are you just nice to work with? Are you a decent human being? Do people like having you around?

Obviously, it probably doesn't help to write "I'm a really smart, nice person" on a résumé, but you _can_ find ways to weave that story into your bullet points.

Talk about how you supported your teammates on a project, or took leadership when it was needed. Talk about how you were unafraid to stand up and ask hard questions, or led new initiatives. Have a good sense of humor? Show it. Have you managed to work your way through some hard situations in the past (even that might not be directly related)? Talk about that. Do people like working with you? Get their recommendations in writing and share those recommendations.

(I know that's an awkward process, at least in the US, where our culture dictates that we never say anything nice about ourselves _or_ ask other people for favors. We're supposed to be humble and self-sufficient. But you're not bragging; you're being honest, and the sooner we all realize we're all an interconnected part of each other's success, the better.)

Also remember: _all skills are transferable._

Have you played in bands before? Cool, that probably makes you less nervous to be in front of people in meetings. Did you wait tables? Nice; that probably means you know how to communicate, juggle responsibilities, and manage expectations. Highlight that.

One final note on this topic: if you peel away the layers a little bit, you might realize what I'm suggesting is: beyond a certain point, working on _you_, the person, and your so-called "soft skills" pays off more than working on your hard skills does.

That's absolutely true. Once you hit a certain threshold, hard skills offer diminishing returns. In a healthy organization, at least, it doesn't matter how good you are at your job if nobody wants to be around you. No matter how technically brilliant you are, you're still a person, and you still have to communicate and work with other people. So if that's where you struggle, work on _that_.

Hard skills might get you in the building, but soft skills unlock most of the doors inside it.

### 3. Sweat the details

This piece of paper is the only thing someone knows about you. Make it look nice. And for the love of all that is good in this world, make sure you fix the typos.

There might be 100 other applicants. Or 1,000. Maybe even more. That company's gotta filter somehow, so don't give anyone a reason to throw you out, no matter how tiny or petty that reason might be.

## Interviewing

In this section, I'll focus on all my advice specific to interviewing.

### Practice, practice, practice

My absolute best advice for interviewing is: do it _as often as you can_.

Interviewing is a skill, and just like any other skill, you're going to suck at it for a while before you get good. (In fact, sucking at it is the only way to _get_ good at it in the first place.)

Practice all you can. Do mock interviews with friends, family, or online, if it helps. Run through what you'd say in given scenarios in your head while you're commuting. And, of course: actually _take_ interviews. The more, the better, until you start to feel confident. Hell, I even think it's a good idea to take interviews when you're not even _looking_ for a job.

I was lucky that I often coded in front of students, while I was teaching for a local code school. So by the time I got in front of real interviewers, I was pretty well-practiced, and had long ago lost my fear of looking silly or making mistakes. I'd recommend you find ways to do something similar.

Pardon the sports analogy, but: go swing at some pitches while the stakes are low.

By the time you're interviewing for a job you _really_ want, you want to feel comfortable in that situation. You want to know how to handle yourself under that pressure, and be accustomed to answering the questions that might come up.

You don't want your first at-bat to come in a crucial, must-win game. So get out there and swing at some practice pitches.

One important caveat here: I'm not suggesting you waste anyone's time. I don't recommend you interview for a job you're 100% certain you'd never consider taking. That's rude to the person who's giving their time to interview you in good faith.

That said: you might be surprised how much things can change once you actually talk to some folks at any given company. The interview process has definitely changed my mind before, in both directions.

I've said no to things I'd previously considered dream jobs, after getting a glimpse of the inner workings of the company. I've also said yes to jobs I applied for on a whim, never really expecting to hear back from, while contentedly employed elsewhere. So don't ever be _too_ sure before you've actually spent the time exploring.

There's nothing wrong with going into the process to learn more. In fact, that's the whole point of it. Remember: this is a two-way agreement; you're not just selling yourself away to the first bidder. Ideally, at least, you should be asking questions and making sure it's a fit on your end, too, and there's little way to do that without interviewing.

Besides: this playing field is _heavily_ slanted towards companies, and a lot of them _will_ ghost you and worse. Even the companies who _won't_ ghost you will still have no qualms at all with asking you to do hours and hours of unpaid labor over the course of interviewing, quite likely for absolutely nothing in return. So even if you _did_ waste someone's time just for a practice interview, well...with the way things are right now, I guess I'd have a hard time feeling too bad about that.

<SideNote>

I've been ghosted, several times. Every time, it seemed like everything had gone well. Every time, I was cheerfully promised I'd hear back within a few days by a nice, friendly person who seemed genuinely interested in me. Then…nothing. (Or, best-case, an impersonal rejection email months later.)

I only tell you this so you know it happens, and so you don't take it personally. It's a cruel, stupid game. Don't believe it has anything to do with you.

</SideNote>

### Have some stories ready

Interviewers will commonly ask questions like "tell me about a time you managed conflict," or "tell me about a time a project didn't go as planned."

They do this because it provides good insight into how you handle situations, so come prepared with stories. Spend some time curating a list of at least 3–5 situations you can remember from previous situations, where you overcame adversity, dealt with conflict, saw something difficult through to successful completion, etc.

Here's one underrated tip: your stories don't all have to be from a related job. All experience is relevant experience. If an interviewer asks for a time you dealt with conflict and the best story you have is the time you broke up a fight between the neighborhood kids over Pokémon cards, run with it. If your best story about managing expectations throughout a project comes from your days of waiting tables, by all means, tell that story. It absolutely counts. (Your interviewer might even consider that pressure greater than the day-to-day of the workplace and give you bonus points.)

Also: you don't have to make yourself look like a paragon of virtue and leadership in all of your stories. You're going to make the interviewer suspicious if you always come off like Superman. Be real. If they ask to hear about something that didn't go well, tell them. Just be sure to include what you learned, and how you'd handle that situation better in the future. (Sometimes, revealing you're a person who's capable of growth is all they're after.)

### Never, ever, ever, EVER talk shit

Seriously: absolutely never. No matter how awful the employer; no matter how bad the coworkers; no matter how inept the management; no matter how miserable the conditions. Not even if you're fully and inarguably in the right. Do not, ever, under any circumstances, say bad things about any other party in an interview. You are now a person who does not do that.

You might think I'm saying this because nobody likes a complainer. True enough. But there's an even more important psychological factor at play: when someone reports a problem, the human brain automatically draws an association between that problem and the person who's reporting it. We look for the other side of the story, and intuitively, believe the problem is somehow _that person's fault_.

If you say there are wolves at the gate, the knee-jerk reaction will be: _well why didn't you stop them_? And if you say your manager is awful, people will wonder what _you_ did to your manager to make them treat you like that.

Put simply, we're innately wired to shoot the messenger.

Plus, it's just pretty tactless to denigrate parties who aren't present to defend themselves anyway, so just don't do it. Save those stories for when you get to know your new coworkers a bit better and they trust you.

If you're _forced_ to bring up a negative—if, for example, you're asked what it is you don't like about your current position—try focusing on the impersonal, objective, and aspirational, rather than on the personal, subjective, and/or current state of affairs.

Bad: “_My boss micro-manages me and I hate it_.”

Better: “_I'd like to find a role where I have more autonomy in my work_.”

Bad: “_My current company doesn't promote anyone unless management likes them. Everyone knows it, and everyone hates it_.”

Better: “_I feel I've learned about all I can at my current position, and I'm looking for a role with greater challenges, where I can grow further_.”

### Ask for feedback

If you're turned down, you can ask for feedback. A lot of companies won't give it, but some might, and this might be helpful in identifying where you can do better next time.

_Feedback is a gift._ Take it as such. Don't fight it, don't argue with it, and don't be offended by it. Get lots of it, and receive it with gratitude. Don't take any one data point too seriously, but if you start to see a pattern, trust it.

### Have some good questions prepared

A sneaky truth about interviewing: your _questions_ say as much about you as your _answers_ do.

Most interviews will end with 5–10 minutes for you to ask your interviewer(s) anything you'd like. Don't pass up this valuable opportunity. Come prepared with some things you'd really like to know.

There are lots of lists and resources available, full of good questions to ask employers. Take the time to look some up. Ask anything you want to know, and ask some tough questions, too, about how the organization works, what the role entails, and how conflict is handled.

One of my personal favorite questions: "who would be the ideal person for this role? What are their strengths, and what would they do to make them successful?" (Hopefully, the answer describes you, and you can give a nudge on that. But either way, it helps you to understand the company's expectations.)

### Follow up and connect after interviews

After any interviews you have, take a moment to follow up with the people you spoke with. Shoot them a quick email or LinkedIn message thanking them for their time and insight. (You _did_ ask questions, right?) If you can do so without forcing it, find a way to work in your enthusiasm for the role, and continuing in the process.

I've interviewed dozens of candidates in my career. Many of them sent follow-up thank-you notes. It's _always_ bonus points in my book.

If you feel comfortable doing so, and assuming things didn't go too poorly, connecting with your interviewers on LinkedIn may also help expand your network. Sometimes interviewers will like you even if you don't get the role, and having that connection could help you down the road.

### One weird trick

Say you want the job. Really. You'd be surprised how far just vocalizing your enthusiasm will go.

### Handling live coding interviews

This is the final section in the Interviewing chapter, and honestly, I wish I didn't have to write it. In my opinion, live coding interviews should die immediately and forever.

There's nothing an interviewer can learn about you by watching you code that they couldn't have sussed out through an ordinary conversation. Besides, performance is all but irrelevant to the job; no manager at any sane company will _ever_ show up at your desk with a problem you've never seen before, set a timer for 30 minutes, and sit there and watch you code. It just doesn't happen.

What _does_ happen, however, is that this style of interviews filters out people who would've been excellent workers, but who simply can't perform well in front of others, under pressure, and/or quickly. (Which, again, are all things the actual job pretty much never calls for.)

<CalloutPlusQuote>

Tech, in general, loves gatekeeping. So it's no surprise the code interview is more of a grand celebration of gatekeeping than it is any reasonable, sane attempt to gauge a candidate's actual abilities and qualifications.

</CalloutPlusQuote>

Anyway, I digress. Unfortunately, most companies still do these arcane, bias-ridden exercises, and so you'll probably have to do one sooner or later.

The good news is: most companies at least realize the difficulty in these interviews should be reasonable, and many won't eliminate you just because you couldn't get through one on time. The exercise is, at least ostensibly, about seeing how you think, and about making sure you're not just somebody who's just hoping to make it a few weeks before anyone notices you have no coding skills.

#### The only way out is through

I _hope_ you don't have to do live coding, but I've had to for most of my jobs, and odds are high you will, too.

The only way to get better at this kind of thing is to practice it. So before you're in an actual interview, get in front of people, and talk as you type. Make mistakes. Talk about your mistakes. Keep going, until it stops being so uncomfortable. Do it often.

It's not something you ever need to be great at, but it _is_ a skill worth investing in. Your goal isn't to become somebody who can write leet code for an audience at the drop of a hat; your goal is just to get comfortable talking through code while you write it, and shrugging off any inevitable mistakes along the way.

#### In the live-coding interview

When you do find yourself in an actual code interview, first and foremost: _do not rush_.

After you've received the instructions, pause, and think. Think about possible ways to accomplish the task. Talk through them as you think, if you can, so your interviewer can get a look into your thought process. Gauge the tradeoffs of each approach.

Then—and this might be the most important part—_ask questions_! Ask any and all questions that come to mind. Do not hesitate for one second to ask something you're not sure of, even if it seems like you should be. Make sure you understand the directions fully, and repeat them back in your own words to be certain.

The more you talk, honestly, the better. Any developer can pound the keyboard and spit out some code. That's not what you're here for. You're here to show how you think through things, how you approach solving problems, and how you communicate.

Once you feel confident you understand the problem, write out the steps you need to get to a solution. Use comments in your code, if you can, but list them out somewhere.

Finally, and only when you've done all the above, get to work actually writing code.

#### Don't panic

I know the situation might feel very uncomfortable, but don't let the timer push you into rushing. Take deep breaths as needed. As much as you can, be of calm mind and body. (The practice helps with this.)

If you sense yourself getting anxious, just stop and breathe for a minute, even if it seems like you're shooting yourself in the foot by taking that time off the clock. You can tell your interviewer you're taking a moment to think through the problem.

<CalloutPlusQuote>

Trust me: you'll do better with 25 minutes of calm thought followed by five minutes of coding, than you will with 30 minutes of panicked key-mashing.

</CalloutPlusQuote>

As you're coding, test your assumptions frequently. If you can, run a `console.log`, or refresh the preview, or whatever other check might apply, after every line or two. The longer you wait to test something, the harder it's going to be to backtrack and figure out what went wrong.

Also: talk through what you're doing as much as possible, and say why out loud. Again: this is as much about showing your thinking as it is your raw coding abilities.

And finally: don't be afraid to ask questions _during_ the coding, either. A company with a _good_ code interview process won't let you stay stuck or try to trip you up deliberately. Most will let you search the web for answers (since you'll be doing that in the day job anyway), but either way, hopefully your interviewer can provide you some clues where needed.

#### After time's up

If you do poorly, that's not the end of the world. Like I said, a lot of employers don't consider that a deal-breaker.

Regardless of how it went, take the opportunity to talk about it with your interviewer. What tripped you up? Have you done anything like this before? What would you have done differently? What's still missing in the code? How is that important? How might you address this problem differently if this were a real-world scenario?

Sometimes, showing you have a strong understanding of the problem is worth at least as much as providing a solution. So if it didn't go well, don't beat yourself up. Worst-case, you have more practice, and you'll do better next time. Best-case, you lost that battle, but you haven't lost the war.

If it helps to know: I've gotten two different jobs where I failed at least one of the code interviews. I'm pretty sure both were because of how I was able to talk through the problems I failed to solve within the time limit.

## Talking salary

Of all the awful, stupid parts of getting a job, this might be the awfulest and stupidest.

There's been a big push in recent years for transparent salary expectations. Many companies now include a salary range in the job posting. This is what I'd consider a highly positive signal. Still, many companies don't, and some will actively try to lock you into as low a number as they can.

Traditional advice says: never be the first to say a number. I don't have strong feelings on that, but I _do_ have strong feelings on negotiating. Always know what you're worth, always be confident in asking for what you want, and _never_ take the first offer (at least, not unless it's already well beyond your expectations).

Before going into the interview, do your research. Try to gather as best you can what people at your level generally make at this company, and what they tend to make in the industry as a whole. ([Glassdoor](https://glassdoor.com), [Levels.fyi](https://www.levels.fyi/), and similar sites will help with this.)

Remember, (inter)national companies and those in major cities/markets will pay more than local/midwestern companies. In general, the more a company hires outside of major markets, the less it needs to compete on salary. ($100k a year is a lot of money to a lot of midwesterners, but it would be an unthinkable pay cut to a lot of workers in e.g., New York or San Francisco.)

Product companies also tend to pay significantly better than consultancies (though consultancies can sometimes be easier to break into), so be sure you're comparing apples to apples there.

I'd expect an entry-level job at an agency would pay the least; then, a midwestern product company would probably pay about 30% more than that; and finally, a(n inter)national product company would pay around 30% higher than that. But these are also in ascending order of difficulty, in terms of landing the job in the first place.

If you do your research on the company, and find out they generally pay people in the role you're interviewing for according to what your expectations are, you can say something like this:

> In researching [company], it looks like engineers in this role typically make a salary in the upper 90s to low 100s, and that's in alignment with my expectations.

Alternatively, if you're _forced_ to get into numbers, or if you _don't_ align, I find it's helpful to phrase the question like this (at least, to yourself, if nothing else):

1. When would it get hard for me to say _no_?
2. When would it get hard for me to say _yes_?

Let's run an imaginary scenario:

Your current position pays you $70k, and you don't feel any urgency to leave, so you don't want to accept anything less than that. Ideally, your next job would pay at least 10% more (that's $77k, of course), but your goal is a 20% increase (which is $84k).

In that scenario, there's nothing wrong with saying something like "I am expecting a salary in the range of $75 to $85k." You could even bump it up to $80–$90, if you want. Don't shoot the moon and ask for a wildly unrealistic number, but don't be afraid to ask a little high, either. You're probably not going to get rejected over a slight difference; most likely, whoever you're talking to will just say something like, "that's slightly high for this role," at which point you can still work on coming to an agreement, if you want to. (And if they shut the door on you at this point, walk away knowing you dodged a bullet.)

One last thing to keep in mind: salary isn't everything. There are lots of other things to consider:

- How good is the insurance? (Do look at that. I mean, really look at it, even if you're still young and healthy. Get the details up front as much as you can.)
- Do you get shares in the company, or any other sort of equity? (If so, find out how much, how you earn them, and when.)
- Are there bonuses? If so, what range are they, and what are they for? How much is conditional, and how much is guaranteed?
- Are there other perks, like 401k matching?
- What about non-monetary benefits? Do you get food? Office stipends? Travel opportunities? General culture? Opportunities? How good will this look on your résumé the next time you're job searching?

Consider the whole package, not just the salary. If, for example, the insurance at a new job is significantly better, it might end up being more net pay, even if your salary goes down a little.

Ultimately it's up to you what's most valuable in a new position. I'd just say: don't over-weight any one factor. Money isn't everything, but in my opinion, money makes up for lacking perks better than really good perks make up for lacking salary.

One last thing: be extremely wary of promises. If you hear anything at all like "we're going to start you low, but we expect you'll be promoted quickly," or "the salary is lower because we give regular bonuses," that should set off some alarms. At the _very_ least, get every detail you can, in writing, including what you'll need to do to earn that promotion/bonus by the time stated, and what figures they'll be.

Promises are quickly forgotten. If you're relying on anyone's word for anything, get the receipts.

## Breaking into the industry

I'll be honest with you: I don't know that there's ever been a _worse_ time to try to break into tech (with the possible exception of the dotcom burst, which was well before my time).

If you _are_ in this position, though: while you should know there's a difficult road ahead of you, I do also think there's reason for optimism.

Anecdotally: ever since I put the word "developer" on my LinkedIn profile, I've gotten regular, sometimes _relentless_ recruiter spam. That all went silent at some point in the last year or so, but I've noticed it beginning to tick back up again lately.

My personal take (again, purely anecdotal) is that companies have started to realize that laying off so much of their staff over the last year or two has made them a lot slower than they'd like to be. On top of this, the much-feared recession that helped lead to the layoffs in the first place never really materialized, and the economy in the US has remained solid (outside of tech, certainly, if not within).

Money is still tight in the tech world, but I'd bet on it loosening back up again in the foreseeable future, personally.

Even if it doesn't, though: there are upsides to walking a long and trying road. A lot of your competition will probably give up and go looking elsewhere. Long job searches suck, but they give you plenty of time to work on your portfolio and side projects.

Speaking of which:

### You need a website

Being on LinkedIn (or any number of similar job sites) isn't enough. Yes, you should be there, and yes, you should take care to fill out your profile for the optimal effect.

But even if you do all of that perfectly, you're still only going to be one of many, many faces; a paper in a stack.

It's unfortunate, but: in this market, you have to go a lot further.

A personal website is a great starting point, and having one has served me extremely well. You don't have to blog, and your site doesn't need to have a lot of pages or content. But it absolutely _should_ exist in some form, and if at all possible in any way under the sun, it should be well designed. If you're bad at design, get some help, or use a template of some kind. Having a website that looks amateurish probably hurts you more than not having one at all, so put in the work.

Similarly: you need some projects to show. If all you have is basic tutorial/school stuff, so be it, but if you're serious about maximizing your odds, I'd strongly recommend having at least one original project that you've built yourself from scratch(-ish).

It doesn't have to be big, or particularly ambitious. You don't need a SaaS app. It doesn't even have to be particularly practical, really. But it _does_ need to be something you built yourself, to show that you have the drive and skills necessary to do it.

A simple game is fine, if that's your thing. Or maybe a simple app that you find useful, even if nobody else does. Maybe it's a fan website, or a database, or some kind of calculator. Maybe it's generative art explorations.

It's up to you, and it really doesn't matter. The important part is:

1. You've made something; and
2. That thing looks good and functions well.

Get all the help you need on that second part. Get feedback.

## Mindset

Looking for a job in this environment is very often an exhausting, disheartening trudge. I'm sorry I don't have rosier news to share. It's possible you'll find something quickly, and I hope you do. However, even if you find yourself looking month after month after month, I do think there are some ways to steel your outlook to conserve some of your energy on this wearisome journey.

### It's not you, it's them

In my career, I've held a job where I beat out over 5,000 other candidates.

I've also—far more often—been rejected immediately, before I even got as far as a phone call.

I was the same person in both of those scenarios. They happened in the same year, while I had the same skills and experience, and brought all the same things to the table as a candidate. I'm not even sure my résumé was any different.

Don't take this as nihilism; take it as proof that a rejection isn't an indication of anything at all, except a simple mismatch. It's not necessarily a bad thing. It might not be anyone's fault. It's just what happens sometimes—oftentimes—when two parties are looking for a fit.

Remember, this has to be a match from both sides, and every company will be looking for something different. You _are_ a fit somewhere. You _will_ be valued somewhere. But you just can't expect to find that _everywhere_.

<CalloutPlusQuote>

As long as you bring something to the table, all you have to do is find the right table.

</CalloutPlusQuote>

Not every company will have a fit or a need for your unique talents, regardless of who you are or what you have to offer.

Don't take any of this personally, any more than you'd take it personally if a person you'd only known for a couple of hours rejected a marriage proposal.

Gather all the feedback you can, and move on. It didn't work out this time, but it will sooner or later. Every strikeout teaches you something for the next time you step up to the plate.

### It's a weird, hard time in tech right now

Again, try not to take anything in a job hunt personally. There's an imbalance right now; lots of workers going for not enough jobs.

Whole posts have been written on why this is, and on attempting to prognosticate when or how this might change. I'm not here to do either. I will tell you, though: it's not you. Don't let yourself get caught up thinking it might be.

Put your energy into stoic perseverance. That's the only thing that's gonna get you through this. Show up every day, and try to get just a little further. Try to let anything that gets in the way of this roll off of you.

### Take care of yourself

If you're searching in earnest and looking for a job full-time (or even if you're not, actually), don't sit in front of your computer all day. Go outside. Take walks. Exercise. Control the parts of your life you _can_ control. Do things that are good for your mental health. Meet up with friends. Play. Have fun. Work on your relationships. Catch up on reading. Work on side projects.

_Sleep_. Seriously; go take a nap.

You can definitely take advantage of your free time to build your skills, and you should, to some extent. That's wise. But don't forget, at the end of the day, you're still a human, which means you're an only slightly more sophisticated house pet. You need water, sun, playtime, exercise, sleep, and nourishment. Don't skimp on any of those things in the name of a job, either one you're trying to acquire or have already.





