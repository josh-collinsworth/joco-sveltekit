---
title: 'Alfred vs. Raycast: my constant debate'
date: 2023-07-24
updated: 2023-08-04
categories:
  - personal
  - opinion
coverImage: raycast-to-alfred.png
coverWidth: 16
coverHeight: 9
excerpt: After a year or so of using Raycast, I'm switching back to Alfred. This is what prompted me to make that decision, and why I may or may not stick with it.
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import Note from '$lib/components/Note.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

If you've ever talked to me about workflows or favorite apps, I probably mentioned [Alfred](https://www.alfredapp.com/) and/or [Raycast](https://www.raycast.com/) in that conversation. They're amazing—and very similar—productivity apps that work as a sort of omni-bar or command pallette for your Mac; you use them for pretty much everything, from searching for anything you might need to find (both on your machine and on the internet) to managing tasks and apps.

Alfred was the original, and I'd been a notoriously outspoken enthusiast for many years. It's one of my absolute favorite apps.

However, I made the switch to Raycast last year. Although I didn't see any compelling reason for the change at the time, the hype was impossible to ignore.

<CalloutPlusQuote>

Surely, I thought, with seemingly every developer in the world so excited about Raycast, I must be missing something.

</CalloutPlusQuote>

So I disabled Alfred, and installed Raycast, on both my work and personal laptop. (Not for the first time; I'd tried Raycast before, but never gave it a really solid shot). I meticulously combed through Raycast's apps and settings to get it working with all the same shortcuts and hotkeys I was accustomed to, to avoid any hit on productivity.

And then, I settled in. I used Raycast, every single day, for all of my snippets, clipboard history, window management, and general searching (online and local), plus as a calculator, dictionary, and all the other little things both of these apps are so good at.

But after a year with Raycast, I recently decided to try switching back to Alfred again. There were lots of small reasons, but if I had to sum it up:

<CalloutPlusQuote>

In all that time with Raycast, I never found the compelling reason I was hoping would surface.

</CalloutPlusQuote>

There was no big thing that grabbed me; no revelation in productivity or ease of use. Raycast was mostly just an Alfred stand-in. It was better in places and worse in others, but usually not dramatically so in either direction, so its pros and cons tended to balance each other out. I wondered if I was actually gaining anything.

Truthfully, if I'd never used Alfred before, I probably would've been 100% happy with Raycast, and would be writing this post singing its praises, instead of comparing the two and not really being certain which one I want to stick with. A lot of the things that bugged me about Raycast, I have to admit, are comparison issues; things that work just fine in Raycast but _slightly better_ in Alfred (in my opinion, at least).

There's a muscle memory component to it too, for sure. Some of the things I don't like about Raycast are just because it doesn't work the way I'm used to or think it should. In fairness, though: the way I'm used to generally involves better speed and/or fewer keystrokes, so there's an objective component to that subjective argument. (More on that in a bit.)

Still, Raycast _does_ have advantages over Alfred. It's a great app with lots of great features. I'm not here to slam one, or convince you to use the other. Whatever you're happy and productive with, great! I just want to explain what changed my mind, in case you find any of it helpful, or are considering committing to one or the other yourself. (Especially because my ultimate final decision remains to be seen…)

## Raycast advantages over Alfred

First, let's cover some of the things I _did_ like about Raycast—and what it does better—before going into what finally prompted the decision to change back to Alfred again (for now, anyway).

### Raycast does more things by default

In contrast to Alfred, Raycast replaces _more_ of the apps you're probably already using. You can likely clean out at least one or two of the icons taking up space in your menu bar when you use Raycast, because Raycast can do whatever those apps did just as well.

For example: with Alfred, I still use [Rectangle](https://rectangleapp.com/) to move my windows around using keyboard shortcuts; Raycast has window management as a built-in extension already. And anything it doesn't have by default, Raycast probably has an extension for…

### Raycast has an extension for everything

The main advantage of Raycast is its vast ecosystem of [extensions](https://www.raycast.com/store), available in the [Raycast "store."](https://www.raycast.com/store)

<CalloutPlusQuote>

I have a feeling the extensions store is actually the killer feature, and that's probably why Raycast never really landed with me.

</CalloutPlusQuote>

I never installed very many extensions in the time I was using Raycast (the default extensions get you pretty far), and the ones I _did_ install just didn't seem to work that well, in my experience. The VS Code extension in particular, I never got to work, even after doing and installing all the things it told me to.

No shade; this was very likely a remediable user error or just a bad selection. It's a popular extension, as many are; I trust they're generally good and work well for most people. But it was never really worth the trouble to me to figure out. I love spending hours on shortcuts to save me a few seconds as much as the next dev, but when I'm ready to open a code file and get to typing, it's never the right time to debug an extension, and so I never got around to it.

By contrast, while extensions _do_ exist in the Alfred world, they're much less…I guess "productized" might be the word. They're called [workflows](https://www.alfredapp.com/workflows/), and they're much less of a first-class citizen in Alfred than extensions are in Raycast. There's a lot more opening them up and tinkering with the internals, and less of a nice UI to just configure the settings.

<SideNote>

The Alfred team have recently put their own store, called [Alfred Gallery](https://alfred.app/workflows/), into early access. It looks like there's even a window management app available, so maybe Alfred _will_ be able to replace your other apps, too. In my initial testing, though, it looks like there's still a long way to go before Alfred catches up in this area, UX-wise.

</SideNote>

Raycast already has a wide world of extensions available to install and configure, and it's also apparently relatively easy to build your own, if you have the scripting knowledge. (I haven't tried, personally.)

In fairness, you can build your own workflows with Alfred, too—and depending on what you want to do, it may even be easier (Alfred has a nice UI for that)—but again, the sharing and configuration aspects are not as fully fleshed-out.

### Raycast's calculator is better

This is a small one, but even I use the built-in calculator function enough that it's worth calling out. Alfred's calculator still throws up its hands if you enter a number with commas in it, which is just..._come on_. Raycast's calculator generally just works. (It also stays open to the last number you had in there by default, which some find handy.)

### Raycast's UI is a little nicer

I'm lumping a lot of things into "UI" here, and that's not entirely fair. But overall, even though Raycast has tons of different extensions available, they all have a pretty unified interface and work pretty similarly. Raycast feels more like one cohesive product, and any time you're using or configuring it, the experience feels well coordinated.

By contrast, Alfred's constituent parts feel a bit more like several different things all bolted together, and one part of Alfred may not always look or work a lot like another.

## Alfred advantages over Raycast

Ok, so since Raycast and Alfred aren't really all that different—and in fact, operate pretty much identically most of the time (for my use cases, anyway), what was the friction that finally made me switch back this time?

There wasn't so much one big thing. Mostly, it just wasn't that different. But in many measurable ways, Alfred was just _slightly_ better. Here are my takeaways.

### Alfred's file search is much better

Raycast's file search does the job well enough, but it's noticeably slower than Alfred's (speed is a recurring theme in Alfred's wins), and doesn't seem to work quite as well in general.

I use file search pretty much any time I need to open a file or folder on my machine, so this minor friction eventually created a UX blister. I _love_ not needing to dig down into file trees, or even know where a file _is_ on my machine; I just type its name, and there it is. And Raycast just doesn't seem to do quite as well with it (in speed or in accuracy).

I don't know what the algorithm is, but Raycast seems to lean much more on learning from your frecent (frequent + recent) history. (Not that Alfred doesn't, but it seems more "sticky" with Raycast.) If you're the kind of person who's always opening the _same_ files, Raycast will probably be just fine for you. But even when Raycast _did_ find the right files or folders for me, again, it was noticeably slower. Alfred's speed and accuracy made it the clear winner.

### Raycast's clipboard limit is a deal-breaker

I discovered that Raycast's clipboard manager seems to have a character/size limit that you can't adjust, as far as I could find.

<CalloutPlusQuote>

I didn't run into it often, but every once in a while, I'd need to copy a big chunk of text, and Raycast just…wouldn't do it. It would fail silently.

</CalloutPlusQuote>

I'd go to paste the text, and instead of getting what I had just copied, I'd get whatever was in my clipboard history before that. The new entry didn't exist.

I don't know where the limit is, but I encountered it somewhere between 1,000–2,000 lines of JSON. It could be a character length thing, or just a memory thing. I'm not sure.

In any case: more than once, I ran into a situation where I had to turn off Raycast; _then_ copy and paste the thing I needed to copy and paste; **_then_** re-enable Raycast. And it doesn't take very many times of doing that to make you look for alternatives.

### Alfred is faster

In my experience, wherever Alfred and Raycast can do the same thing, Alfred always seems faster than Raycast.

I don't know what magic makes it so fast; I think it has to do with some kind of fancy indexing. (There are options within the app's settings to control how much memory, etc. you give to the indexer, and other things.) But whatever's going on under the hood, Alfred tends to find things about as fast as I can type them in most cases, while there's a slight but noticeable lag with Raycast.

<PullQuote>

In my experience, wherever Alfred and Raycast can do the same thing, Alfred always seems faster than Raycast.

</PullQuote>

Snippet expansion is one area where the difference in speed is especially noticeable. With Raycast, there's a pronounced delay between typing a snippet shortcode, and getting the replacement. It's under a second, but it's long enough to make you wonder whether the expansion actually worked, and plenty of time to mess up the text you were trying to type when the new text gets added in.

I think I actually got used to typing a snippet, and then _stopping and waiting_ before continuing. But it's not about the time; it's the interruption to workflow.

Alfred is nearly instantaneous with snippet expansion, and so it doesn't seem like you have to adjust your thinking for it as much.

[**EDIT, August 4, 2023**: I've discoverd Raycast actually has a setting for snippet expansion speed. I don't think it was always there, but in fairness, it is now.]

<SideNote>

If you're not familiar with snippets: they allow you to type a short trigger string, which is immediately expanded into a (usually) longer block of text, to save keystrokes on things you might type frequently.

For example, many users make `@@` expand into their full email address. I used them more when I worked in support and wrote emails all day than I do now, but I still have a few. I have a snippet that expands `/shrug` into `¯\_(ツ)_/¯`, just because. I also have some for things that are hard to type, like the ⌘ symbol, and even a few for boilerplate code I use frequently.

</SideNote>

### Alfred usually requires fewer keystrokes

With Raycast, you need enter _two_ prompts to do most things. For example, to search for a file: first, you need to manually type "file" (or similar) to bring up file search; then hit enter; then you type the file you're looking for.

Alfred just needs one prompt: the name of the file. It's smart enough to match the name of the file without you specifying that's what you're looking for first.

Over and over again, I'd type my prompt, then realize I forgot to specify. So I'd have to either _delete_ what I'd just typed, put Raycast into the proper mode, and _then retype_ it; or spend time fiddling with the mouse or arrow keys to move to the proper prompt in the list after the fact.

Admittedly, Alfred's way can backfire. You might mean to do a Google search, but Alfred might find some random file on your machine that matches your query. But here's the thing:

With Alfred, you have the option to change the search mode _any time_, by holding either command (to go to web search) or option (to default to file searching). That saves you from retyping or having to select between items in a list.

Raycast has a similar option: if "web search" is the first option in the list, then "file search" might be second, and you can hit `⌘ + 2` (or just hit the down arrow once) to choose that second option instead.

However, crucially, _there's no guarantee which order your options will be in_. File search (or whatever option you meant to choose) might be third, or fourth, or possibly not even on the short list. So you can't rely on muscle memory, or have a shortcut that always does the same thing.

Admittedly, Raycast's worst-case is not particularly painful in isolation (keystrokes; boo-hoo). But it's the kind of tiny paper cut that adds up to a painful experience over time.

<CalloutPlusQuote>

Minute though the difference may be, just about every task in Raycast seems to require more time and/or more keystrokes than in Alfred.

</CalloutPlusQuote>

I've harped a lot on the file search functionality in particular, but I found that most features Raycast and Alfred share work with just a little less finagling in Alfred.

For example, both Raycast and Alfred have dictionary features that I use relatively frequently. On Alfred, the prompt is simply:

`define [word]`

Enter whatever word you want there, and Alfred will show it in the list of results (or, perhaps, signal that your spelling is off).

On the other hand, Raycast requires a two-part prompt:

`define`, `[hit enter]`, `[word]`

Is this a big deal? No. In fact, if you so choose, you can customize either app to work whichever way you prefer. But it's the way Raycast tends to work across _all_ of its extensions, both default and third-party, so if you don't like that, you might have to change quite a few settings.

## Places where both Alfred and Raycast have advantages

There are a few areas where the difference between Alfred and Raycast are too nuanced to declare a winner, or where one might be better than the other just depending on your use case. Let's cover those here.

### Raycast is better free; Alfred is better paid

One point that most people consider to be in Raycast's favor: it's free. With Alfred, you still need to buy the [Powerpack](https://www.alfredapp.com/powerpack/) to use many of the best features, like snippets and clipboard history.

I don't personally consider that a drawback, as the Powerpack is very affordable as a one-time purchase for such useful, continuously updated software. I don't mind supporting good work. It's a more-than-reasonable ask. But still: Alfred's not completely free for personal use, and Raycast is.

…At a basic level, anyway. There's actually more nuance to it than that, now that Raycast has released its [Pro plan](https://www.raycast.com/pro).

<CalloutPlusQuote>

Raycast is free for personal use, but charges monthly for Team and/or Pro accounts. Alfred does less for free, but only charges a one-time license fee.

</CalloutPlusQuote>

The Raycast Pro account includes access to ChatGPT, cloud sync, and the ability to theme Raycast. Smart business move on Raycast's part, I guess, to make one of the most-requested features (theming) a paid add-on.

If those things—and the other features the Raycast team promises are coming down the pipe—are worth the money to you: great! I can see where those would be useful. (Especially cloud sync, if you'd like to use Raycast on more than one machine.)

But for me, in the era of paid subscription software overtaking everything, I don't need yet another $8–10/month siphon on my bank account.

<CalloutPlusQuote>

By the time you've paid for Raycast Pro for a year, you could've paid for Alfred for a lifetime.

</CalloutPlusQuote>

That's a pretty hefty difference in pricing, and one that would be extremely difficult for me to ignore. If Raycast came out with a lifetime option, maybe I'd reconsider. But at this point, for me, there's no way I'm signing up for Raycast Pro at that price.

### The design comparison is complicated

I have to admit: Raycast is just more visually appealing, by default, in terms of both the app itself and the overall brand.

There's nothing _wrong_ with Alfred's appearance per se, but everything about the brand and out-of-the-box experience feels like it's from a past era of Mac apps, circa 2010. In web dev terms, I'd say: it feels very [Bootstrap](https://getbootstrap.com/); it seems like the brand hasn't really updated in probably over a decade.

By contrast, Raycast looks very modern. (Yes, it also looks like most other maybe-not-technically-Tailwind-but-definitely-Tailwind-type-design tech sites/products, complete with bold sans-serif text gradients over a dark background, but hey: it's at least 2020s.)

However, for most of Raycast's life up until this point, theming was impossible, and it was only recently—and only on the paid "Pro" plan—that users could theme Raycast in any way at all.

Granted, Raycast has a nice default appearance, so I don't consider this a problem per se, and I imagine most users don't either (even though the ability to skin Raycast with chosen fonts and colors is definitely appealing).

But it's sort of hypocritical, I suppose, to critique Alfred's design while praising Raycast's, given that Alfred actually offers nearly endless options to customize its interface however you like. (I have mine in [Averta](https://thedesignersfoundry.com/averta), the sans serif you see on this website, and [Dracula Pro](https://draculatheme.com/pro) purple. You don't care. That's fine.)

Still, though: branding is important, and Raycast clearly has the better overall aesthetic (out of the box, at least).

But then again…you can completely customize the Alfred UI with a one-time license purchase. You'll have to pay monthly for that privilege with Raycast.

## Conclusion

In writing this post, I spent a while reading online discussions of Alfred vs. Raycast. It seems to me the general difference is: power users (i.e., the folks who care most about getting things done as efficiently as possible) tend to gravitate towards Alfred. Conversely, users who just have a small handful of specific things they want to be easier tend to pick Raycast, for the extensions that handle their use cases. (Again, however: Alfred's beginning to catch up on that front.)

I'd generally agree there. I really hope the gap between these two apps closes a bit more. I'd love for Raycast to be faster, and for its paid plans to be more affordable long-term. Conversely, I'd love for Alfred to have a better product experience around adding new workflows and customizing them.

Meanwhile, I'll be sticking with Alfred for a bit. Maybe I'll go back to Raycast eventually, for its generally superior ergonomics; maybe I'll decide to stay with Alfred for its speed.

In the end, I guess it's good we have both those choices.
