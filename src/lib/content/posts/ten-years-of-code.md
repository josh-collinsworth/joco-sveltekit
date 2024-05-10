---
title: A decade of code
date: 2024-05-10
updated: 2024-05-10
categories:
  - personal
  - css
  - web
coverImage: html-css-book.jpg
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

It suddenly struck me today that I began first learning code, starting with the very basics of HTML and CSS, at the job I had exactly ten years ago. That means I've been doing this (coding, that is; building things on the web, in some form or another) for a decade now.

_A decade!_ Ten whole years I've been putting these silly little characters into silly little shapes to make silly little things appear on silly little screens.

That's reductive, of course. Even I don't buy that.

I'm lucky.

I remember the magic of the moment when, almost exactly ten years ago, I built my first responsive layout. I was a graphic design intern when my manager, Brad (_also an instructor I was fortunate to have in school, and who helped me get multiple internship opportunities_), handed me [Jon Duckett's _HTML & CSS_ book](https://htmlandcssbook.com/).<Footnote number="1" />

That was back in the relatively early days of responsive web design, when floats were still how responsive layouts were achieved, Internet Explorer was still a big deal, and (largely because of that) jQuery was pretty much synonymous with JavaScript.<Footnote number="2"/>

So, I sat down at my computer, followed the directions, [tied an onion to my belt](https://knowyourmeme.com/memes/so-i-tied-an-onion-to-my-belt-which-was-the-style-at-the-time), and before long, I had something I could actually interact with on the screen.

It wasn't much. In fact, it was all but useless. It was a simple, yet responsive grid of blue squares that turned orange when you hovered over them.

But it was _interactive_! And _that_ was intoxicating.

I remember the moment so clearly I can still faithfully recreate that first, all-but-pointless demo in a CodePen, ten years later:

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="rNyMgQK" data-user="collinsworth" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" resize="horizontal">
  <span>See the Pen <a href="https://codepen.io/collinsworth/pen/rNyMgQK">
  My very first grid of squares</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

_(Be sure to open that demo in a new window and resize it if you want to get the full, underwhelming effect)_

Everything I'd ever made or designed up to that point was static; posters, brochures, packaging, booklets, and all the other kinds of projects you do when you're a graphic design student, meticulously crafted be one specific size and shape.

But this—_this_ was something you could actually _interact with_—albeit in a very limited way. None of my designs could alter their colors or shape or layout as the situation called for. There was never any version but the one you sent to the printer.

<CalloutPlusQuote>

Obviously, I knew the web was interactive and adaptable, from my experience as a user. But this was my first realization that it could be fluid and adaptable as a _creator_.

</CalloutPlusQuote>

It was captivating. I'd liken it to when you're learning a musical instrument, and you get just good enough to play along with one of your favorite songs for the first time.

You feel like you're on top of the world. Even though you're fully aware of exactly how humble all of it is, you feel like a rock star.

I remember sitting there for what seemed like hours, just moving my mouse over the boxes, and grabbing the edge of the browser to resize it and watch how the shapes rearranged themselves to accommodate the new window size.

---

I wasn't learning HTML and CSS for any reason except to make myself more valuable. At the time, I wanted to ensure I'd get internships and, eventually, a full-time job in the design field, and _everybody_ told me that was much more likely to happen if I knew some code.

So, like a great many people in this field, this wasn't a destination I ever had in mind.

<CalloutPlusQuote>

That's one of the things I love about development, as a field: it's a city of immigrants. This place our home, but most of us aren't from here.

</CalloutPlusQuote>

Over time, however, I found myself spending more time on [CodePen](https://codepen.io) than I did on the likes of [Dribbble](https://dribbble.com/) and [Behance](https://www.behance.net/). (_I used to have portfolios on both of those sites, but over the years they decayed until the point it was easier to delete them than salvage them._)

It spawned an identity crisis, which I struggled with for a long time. I'd worked so hard to be a designer. That's all I wanted to be, for years. It was a title I'd poured all my energy into earning.

If I wasn't that anymore, what was I?

I didn't know. I certainly wouldn't have called myself a developer back then. It seemed like _everybody_ knew more about the web than I did. I just loved making things, even simple things. I loved being able to crack open a stylesheet and change the appearance (and sometimes even the functionality) of a website, just by writing CSS.

I'm lucky that my first few internship gigs gave me opportunities like that; chances to dive into CSS and make changes to real, live websites.

(Yes, we just made changes directly to files via FTP in those days. Seems wild now, but there's a part of me that kind of misses having that direct and tangible a connection to the shipped code, rather than having ten steps between you and the unrecognizable output that ends up on some file system somewhere that you probably can't even get access to.)

Part of me worries that those opportunities don't come around much anymore; that the next generation of web developers mostly aren't getting the chance to do _real_ work. But who knows; maybe I'm just saying that because already, I'm an old-timer in this field, and things aren't like they were when I was your age, kiddo.

Back in my day a [Bootstrap](https://getbootstrap.com/) only cost a nickel.

---

I was lucky to get good internships, to meet the right people, and to eventually land a full-time position right out of school.

I was successful in design. I mean, I was still very small potatoes (it was Omaha), but I went from zero schooling to having a degree and a full-time job as a designer, with a couple of notable projects and awards under my belt, in the span of just over four years.

But ultimately, I fell out of love with design.

<PullQuote>

Design never changes. Ultimately, it's just the same function called with different arguments, over and over again.

</PullQuote>

After a few projects, I started to realize: design never changes. Parts of branding I still love (typography and logo design, especially), but ultimately, it's just the same function called with different arguments, over and over again. Discovery; ideation; solution. If you don't love that grind, it'll burn you out fast—especially because design is one of those fields where you're constantly talked down to by people who understand it far less than you do, for low-grade pay and little hope of advancement.

Loving design is basically the only reason to do it, and I felt my relationship with design growing stale.

At the same time, though, development seemed to offer a never-ending universe of possibilities to explore, full of things that would take me a lifetime to learn.

Some, I've learned in the last ten years or so. Many, I still never have. Many of those, I probably never will.

---

The design agency where I worked regularly used WordPress, which means I regularly ran into the wall of not knowing PHP. So I talked the agency into sending me to a local code school for a WordPress development course.

That was the springboard for everything else in my career. My capabilities exploded. I brought the knowledge back with me, and did a bit of dev work for the agency.

Then, another change. Several months later, I was recruited to teach that same class, and to continue developing the curriculum past its first iteration.

I had no experience with teaching, but I said yes enthusiastically.

My class was, therefore, a mess a lot of the time. But I know I at least helped a handful of students move into tech and land good jobs. I constantly hope I didn't fail anyone too badly.

I tended to blame myself for my students' failures, and take no credit at all for their successes. When students failed, most of the time, it felt like I was doing them a disservice. When they took to the material and went on to have successful careers in the field, I credited their curiosity and tenacity much more than anything I did.

I enjoyed teaching when I had good students, which, luckily, was most of the time.

I imagine most teachers can probably relate to all of that.

---

I was lucky to land my first tech job<Footnote number="3"/> at a company like Flywheel, even though I didn't realize at the time how much I and most of the people around me were being undervalued. (That's a long story with many chapters, but one common to midwestern tech companies.)

Still, the opportunity to learn everything I learned there—both in terms of the day-to-day technical aspects, and the inner workings of a startup—was one that doesn't come along often, and one I didn't fully appreciate until years later.

I was lucky by the time I landed an interview with Shopify, I'd spent _years_ live-coding in front of students, and hacking my way through things I didn't really understand in a support role. I'd made so many embarrassing mistakes in front of so many rooms of students I had no fear. I could easily talk through what I was doing. I knew how to avoid what mistakes I could, and to move past the ones I couldn't.

I tried to recruit some other developers I knew to Shopify, most of whom much more senior then me, many I counted among my mentors. But none of them made it through the interview process, because tech interviews are broken.

I just happened to have the exact right combination of skills to get past the stacked deck. I got to the end of the run with the perfect build to beat the boss.

Like I said…I'm lucky.

---

Ten years is an eon in web time.

When I first got the title of web developer, I remember being overwhelmed with contentedness.

Some days, just sitting down in my chair and firing up my terminal was enough to make me smile and think, _this is so cool and I'm so fortunate to be able to do this_.

And though I still have moments like that—and days when I get fully lost in the excitement of building something new—the rosy tint on my glasses has faded a bit with time.

There's a sort of cliché about tech that goes like this: once you get to a certain point, you don't want to have anything to do with it anymore, and you pick up a hobby like woodworking or barbecue or gardening, and plan to go live off the grid in the woods as far away from computers as you can get.

I'm not there yet. But every day, I think I understand that mentality a little more.

Sometimes I idly fantasize about opening a store, or a brewery (one with an amazing website, of course).

Sometimes I look at people who do a simple job like mowing lawns or building walls—one with a clearly defined start and end, that doesn't ever go home with you or Slack you on the weekend —and think there's something nice about the simplicity of that labor; something I've lost somewhere along the way.

I know how privileged that is. The grass is definitely greener on my side.

Still.

Much as I still love web development as a whole, it feels like _everything_ around it is a mess right now.

I've seen and experienced how it can grind you down; how the day-to-day organizational bullshit that goes along with making things for the web can slowly drain the joy of creation.

But you know what?

I'm still lucky.

I still get to do a very cool thing every single day. Although the shine has faded a bit, I still love it. Sometimes—not as much as I used to, but _sometimes_—I even do it just for fun.

And despite all the mess of the way things are now, I'm excited to see where the web is another ten years from now.

<FootnoteAnnotations  footnotes={[`The website for the book itself is not responsive, ironically enough. Just locked in at 940px wide.`,`If you don't remember those days, check out the CodePen here, and generally just be grateful that the web has come a long, long way since then.`,`Actually, technically, my first tech job was as a call center rep for America Online, but we don't need to go back that far.`]}/>

