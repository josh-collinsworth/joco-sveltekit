---
title: First impressions of the MoErgo Glove80 ergonomic keyboard
date: 2023-11-04
updated: 2023-11-04
categories:
  - gear
  - advice
  - opinion
coverImage: glove80/mine.webp
coverWidth: 1920
coverHeight: 1080
excerpt: 'How does the Glove80 stack up against similar keyboards like the Moonlander and Ergodox? I share my impressions after the first few weeks of use.'
draft: true
published: false
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

<style lang="scss">
	.toc-details {
		border: 1px solid var(--lightGray);
		padding: 1rem;
		margin-bottom: var(--halfNote);
		font-family: var(--headingFont);

		::marker {
			color: var(--yellow);
		}

		ul {
			margin-block: var(--eighthNote);
			padding-inline-start: var(--dottedQuarterNote);
		}
	}
</style>

<details class="toc-details">
	<summary>Table of contents</summary>
	<ul>
    <li><a href="#backstory-my-history-with-keyboards-ergonomics-and-rsi">Backstory: my history with keyboards, ergonomics, and RSI</a></li>
    <li><a href="#why-the-glove80">Why the Glove80?</a></li>
    <li><a href="#pricing-and-shipping">Pricing and shipping</a></li>
    <li><a href="#layout-customization">Layout customization</a></li>
    <li><a href="#lights">Lights</a></li>
    <li><a href="#wireless-and-battery">Wireless and battery</a></li>
    <li><a href="#ergonomics-and-customization">Ergonomics and customization</a></li>
		<ul>
    	<li><a href="#did-it-solve-my-issues">Did it solve my issues?</a></li>
		</ul>
    <li><a href="#switches-and-keycaps">Switches and keycaps</a></li>
    <li><a href="#summary">Summary</a></li>
	</ul>
</details>

I never had any real interest at all in mechanical keyboards until recently. I mostly considered them novelties; the kind of thing that was fine as a hobby, but not anything particularly practical.

Over the last year or so, however, I've been going deeper and deeper down the rabbit hole of mechanical keyboards, and I've discovered a much richer, more fulfilling world than I ever suspected. There's just something about nerding out over the finest details of the machine you touch and use every day that can be extremely gratifying.

<PullQuote>

My gateway into mechanical keyboards was purely driven by the search for better ergonomics.

</PullQuote>

It was silly that I never looked any closer at things like keycaps and switches, I now realize. After all, a person who spends all day on their feet will likely care deeply about their shoes; why shouldn't someone whose fingers press keys thousands of times a day be invested in how their fingers feel?

However, unlike most mechanical keyboard enthusiasts, I wasn't initially drawn to the hobby by any interest in the feel, sound, look, or performance.

Instead, my gateway into mechanical keyboards was purely driven by the search for better ergonomics.

## Backstory: my history with keyboards, ergonomics, and RSI

For most of my life, whatever keyboard was attached to or supplied with the computer I was using was just fine with me. I rarely gave any thought to the device resting beneath my fingertips.

Then came 2020, and the pandemic. The home became the workplace. Between the constant demands of remote work and desperate attempts at escapism, my laptop was pretty much always…well, on top of my lap. (And even when it wasn't, it was probably on a surface that was in no way designed to be a comfortable workstation.)

Over these weeks and months, I developed a repetitive stress injury (RSI), and though I didn't know it then, it would be my first of many. My right wrist, constantly pinched, was in ever-present and worsening pain, which was at times so bad I couldn't even tighten my grip or carry heavy things.

It became clear I couldn't keep going without making changes.

<figure>

![Demonstration of how the forearms tend to point inward, with the wrists sharply bent outward, while using a standard keyboard](/images/post_images/glove80/ulnar-deviation-problem.jpg)

<figcaption>Image from <a href="https://kinesis-ergo.com/solutions/keyboard-risk-factors/">kinesis-ergo.com</a></figcaption>

</figure>

<CalloutPlusQuote>

Over the first year of working from home, I ended up spending around $2,000 overhauling my home workstation to alleviate the pain and prevent new injuries.

</CalloutPlusQuote>

(_What a great system, that makes working most expensive for the people for whom it's the most painful._.)

I got a better chair, a standing desk, a wrist brace, and—finally—my first split keyboard: the [Kinesis Freestyle2 for Mac](https://kinesis-ergo.com/shop/freestyle2-mac/).

<figure>
<img src="/images/post_images/glove80/freestyle2.jpeg" alt="" style="border: 1px solid"/>
<figcaption>The Kinesis Freestyle2 for Mac (my first ergonomic split keyboard)</figcaption>
</figure>

That keyboard served me well for nearly two years; it got my hands further apart, and allowed my wrists to sit at a more natural angle. But it eventually led to another, different injury: my left thumb was constantly bending at uncomfortable angles to press the command key to initiate shortcuts.

That's when I started looking at keyboards with thumb keys, and ended up with a [ZSA Moonlander](https://www.zsa.io/moonlander/). [I wrote about that story here](https://joshcollinsworth.com/blog/moonlander).

At first, I hated the Moonlander. The ortholinear (columnar grid) layout took a lot of getting used to, but it paid off and felt amazing once I got it down. To learn was to love. I even went so far as to invest in a new set of switches and keycaps for the Moonlander, which made me love it even more.

<figure>
<img src="/images/post_images/glove80/Moonlander.jpg" alt="" style="border: 1px solid"/>
<figcaption>The ZSA Moonlander (with custom keycaps)</figcaption>
</figure>

Over time, however, a new RSI flared up, even with the Moonlander.

<CalloutPlusQuote>

As I write this, I'm still recovering from this latest injury. Some of it, I attribute to the Moonlander specifically; some is probably my own fault.

</CalloutPlusQuote>

I was adjusting the Moonlander a dozen times a day trying to figure out the problem. Turns out: it doesn't really allow your hands to just _rest_ when they're not typing. (Or at least, it didn't how I was using it.) So over time, my left arm muscles fatigued from constant activation. I had to train myself to move my arm off the keyboard when not in use, since, again, there wasn't any really comfortable way to just rest my hand (especially at higher tenting angles).

I'm not here to tell you the Moonlander is bad, or that it won't work for you. However, I will [say again](https://joshcollinsworth.com/blog/moonlander): I think it's a keyboard that wants to be cool first, and ergonomic second.

I initially thought the similar [Ergodox EZ](https://ergodox-ez.com/) might solve my problems, with its thicker palm rests. However, the keyboard itself is so tall, it really wasn't any different. And sadly, like the Moonlander, the Ergodox was a letdown in the range of customizations it offered.

Again, I should emphasize that despite valid criticisms of the Moonlander, some of my issues with it were of my own creation. (My choice of tall keycaps may even have contributed.)

<CalloutPlusQuote>

Ergonomics are highly personal, and what works for one person might not work for another.

</CalloutPlusQuote>

All the keyboards I rejected above worked great for me at one point, after all.

Still, even making all the adjustments I knew how to make--despite how much I loved the feel of it--I felt like there might be a better option for me. So again, beset by arm pain (this time in both wrists, as well as my left elbow), I set out to find a solution.

That's when I started thinking maybe the [Glove80](https://www.moergo.com/collections/glove80-keyboards) could be the fit I was looking for.

## Why the Glove80?

Ergonomic keyboards cover an incredibly wide spectrum. On one end, they're little more than standard keyboards with a few curves, a gap in the middle, and/or a palm rest added. (Microsoft's [Sculpt Ergonomic Desktop](https://www.microsoft.com/en/accessories/products/keyboards/sculpt-ergonomic-desktop?activetab=pivot:overviewtab) and Logitech's [K350](https://www.logitech.com/en-us/products/keyboards/k350-wave-ergonomic.920-001996.html) and [Ergo K860](https://www.logitech.com/en-us/products/keyboards/k860-split-ergonomic.920-009166.html) fit this bill.)

On the other end of the spectrum are devices that barely even resemble traditional keyboards. They're often split (i.e., in two pieces, instead of one, allowing the wrists and forearms to sit straight in front of the shoulders instead of pointing awkwardly inwards together), and they frequently have a highly unconventional shape and layout.

<PullQuote>

Even within the nested rabbit hole of ergonomic mechanical keyboards, neither Glove80 nor its maker, MoErgo, are likely to be among the main names you've heard of.

</PullQuote>

Not all ergonomic keyboards are mechanical (or split, for that matter), but many are; ergonomic keyboards are often a sub-niche of the mechanical keyboard niche.

<figure>

<img src="/images/post_images/glove80/rtings.jpg" alt="" />

<figcaption>A wide range of ergonomic, split, and/or mechanical keyboards. Image from <a href="https://www.rtings.com/keyboard/reviews/best/ergonomic">rtings.com</a>.</figcaption>

</figure>

Even within the nested rabbit hole of ergonomic mechanical keyboards, however, neither the [Glove80](https://www.moergo.com/collections/glove80-keyboards) nor its maker, a New Zealand company called [MoErgo](https://www.moergo.com/), are likely to be among the main names you've heard of. Generally, it seems like [Kinesis](https://kinesis-ergo.com/) and [ZSA](https://www.zsa.io/) have the largest mindshare in the space (though there are others, like [Cloud Nine](https://cloudnineergo.com/), [Dygma](https://dygma.com/) and UGL, maker of the [UHK](https://ultimatehackingkeyboard.com/)).

Nearly as I can tell, the MoErgo Glove80 is a dark horse—or at least, it was until recently. Just finding reviews for it was challenging. The designer in me can't help but wonder how much of that may be due to MoErgo's website design; their store has a pretty dated, somewhat amateurish look and feel. It's definitely not a storefront that inspires confidence in the product, as far as aesthetics go.

<CalloutPlusQuote>

So: why did I buy a relatively unknown keyboard from a comparatively small manufacturer with a highly questionable website?

Because I could tell they cared—maybe more than anyone—about actual ergonomics.

</CalloutPlusQuote>

MoErgo clearly takes the Glove80 very seriously. Join the Discord, and you'll find the founders fastidiously posting updates, and actively responding to questions and issues.

More impressive than that, though: MoErgo goes to great lengths to explain how and why they landed on the Glove80's design, and that commitment shows. This doesn't feel like a cool keyboard with "ergonomics" slapped on as an afterthought selling point, just because it can tent a little. [_Side-eyes ZSA_]

<CalloutPlusQuote>

The Glove80 genuinely feels as though every decision was in service to ergonomics first and foremost, and everything else was secondary.

</CalloutPlusQuote>

MoErgo designates a pretty hefty portion of its website and printed materials to telling [the story of the Glove80's design](https://www.moergo.com/pages/glove80-ergonomic-keyboard-design-journey-1). It's undeniably impressive; over 500 experiments and prototypes are laid out in detail. The journey of assumptions being made, challenged, rethought and re-challenged is a testament to the designers' dedication to arriving at the best possible ergonomic solution.

---

With all that preamble out of the way, let's get to the main course.

As I'm writing this, I'm a few weeks into using the Glove80 as my full-time daily driver. I initially thought I might do a pros/cons list, but a lot of my observations really aren't either (or, are both at the same time), and so I think I'll take more of a scattershot approach.

<figure>
	<img src="/images/post_images/glove80/glove80-default.webp" alt="" />
	<figcaption>The Glove80 with default layout. Image from MoErgo</figcaption>
</figure>

## Pricing and shipping

Although the Glove80 is made by a New Zealand company, it ships from China. I initially thought this might mean shipping would be very slow and/or expensive. To my surprise, however, mine arrived in less than two weeks, and shipping was included in the price of the keyboard.

That price, I'll note, is certainly far from trivial; the Glove80 will run you $399 USD. That's undeniably hefty, but all things considered, it's actually a pretty good price. Other manufacturers charge similar rates for comparable keyboards, but the Glove80 already includes several extras for which those other companies often charge extra.

It's sadly common for supposedly ergonomic keyboards to only allow a minimal degree of tenting and/or tilting out of the box, but to offer a paid add-on to unlock more customization, which might run you over $100 all on its own. [_Side-eyes ZSA again_] Wireless connectivity, if offered, can also be an upcharge. You might also pay for RGB lighting, or for certain customization options. In many cases, even the palm rests run an extra $30–80.

<CalloutPlusQuote>

So while $399 USD might seem steep, know that unlike with most similar keyboards, that's the full and final price; no up-sells or add-ons.

</CalloutPlusQuote>

Another credit to MoErgo: unbeknownst to me at the time, I ordered my Glove80 just before the new version of the keyboard began shipping. (It's not significantly different; it mostly just features minor construction improvements, and now comes with a few extra accessories and a travel case.) MoErgo put the old stock on sale for $20 off, about a week after my order.

Total bummer for me, since I would've either got the newer package, or paid $20 less, if I'd only waited a little longer. But to the company's credit, they took the initiative to automatically issue a $20 gift card and to everybody else in the same situation.

Plus, that travel case now comes included with all new Glove80s at no extra cost. All of this speaks very highly of the folks running the show and what their priorities are. You get the sense that MoErgo is willing to sacrifice profits to make people happy, and that's one of the best things you can say about a company, if you ask me.

## Layout customization

Like many keyboard manufacturers, MoErgo has their own layout editor app, available at [my.glove80.com](https://my.glove80.com/). This is where you go to make changes to your layout; when you're done, you download a config file, and upload it to your keyboard.

<figure>

![The MoErgo layout editor, showing my current layout, named Collinsworth v0.4](/images/post_images/glove80/layout.webp)

<figcaption>The Glove80 layout editor at <a href="https://my.glove80.com">my.glove80.com</a>, with my personalized layout</figcaption>

</figure>

Under the hood, this app uses open-source [ZMK software](https://zmk.dev/) for customization. The keyboard ships with three layers: layer 0 (the default), layer 1, and the "magic" layer, which is triggered by the conspicuous MoErgo logo key, and which holds most of the hardware controls, like lights and Bluetooth. You have the ability to add more layers, if desired.

<SideNote>

In keyboard terms, a layer is a mapping of keys; a layer determines what each key does when pressed.

For example: when you're on the default layer, pressing the "a" key will simply type an "a" character. But on another layer, you could remap the "a" key to anything you want; arrows, symbols, or even complex key combos or macros.

</SideNote>

I haven't used a lot of keyboard customization software; mainly jut ZSA's Oryx, so that's my only real point of reference. MoErgo's app is similar and simple, at least for fairly standard things. Adding a complex modifier like hyper (`cmd` + `opt` + `shift` + `ctrl`) is a little more involved; you have to add each individual modifier separately, making this example a four-step process. It would be nice to have a single button for those instead, but that's a minor quibble.

I notice the editor is fairly straightforward; while you can customize key presses in a pretty wide variety of ways, you can't do much _besides_ customizing keys.

That is, with Oryx, there's a wide range of keyboard options, too. I didn't use most of them, but one I did particularly like was autoshift, which lets you long-press a key instead of shift-pressing, which I find handy. It's nice to just press the "a" key for slightly longer to get an uppercase "A," (or, `[` to get `{`), rather than getting another finger involved—especially when you're still learning your layout or when it's a physical stretch.

Autoshift alone is easy enough to add with [Karabiner-Elements](https://karabiner-elements.pqrs.org/), so it's still enabled. I prefer it that way, actually; it lets me use autoshift even when using the built-in laptop keyboard.

Anyway, though it's less full-featured than Oryx, the layout editor works great for customizing keys. But if you want to go any deeper than that, you'll likely have to write your own code. (There's a box for you to put your own custom code into in the editor, with a strong "make sure you know what you're doing" caveat.) Fine, and probably even better for some power users, but I'll likely never touch it if it's not in the GUI, and I'm guessing a lot of users won't either.

<CalloutPlusQuote>

One noticeable pain point: when modifying your layout, you're required to flash each side of the keyboard separately.

</CalloutPlusQuote>

With the Moonlander and Ergodox EZ, just uploading your layout once did the trick. Here, once you have your customization file downloaded from the customizer app, you'll need to upload the config file to each one.

<SideNote>

I've been told that as long as all you're doing is changing the key mappings, you should be able to get away with only uploading the layout to the left half. However, I was warned against this by the manufacturer.

</SideNote>

Plus, uploading a new layout file requires putting the keyboard into bootloader mode, which is a little tedious in and of itself.

With the Moonlander and Ergodox, you just hit a tiny physical button on the board itself. Here, however, you have to either designate a special bootloader key in your layout (not difficult, but remember, you'll need one on each half of the board); or, hold down a special key combo when powering on the keyboard half (a little like holding shift while powering on your computer to boot it in safe mode). You can find these combos in the instruction booklet.

This isn't a particularly big pain point for me, personally, since I've already got my preferred layout pretty well dialed-in. But I remember when I started learning the Moonlander, I would often modify my layout multiple times a day, and that sort of on-the-fly experimentation would hit some strong friction here.

In fairness, having a bootloader key available, instead of being forced to use a teensy pinhole button, might be considered a benefit. That's fair enough, but it brings up another quibble: if you have a bootloader key, you might hit it accidentally.

There's a key that resets Bluetooth that I hit mistakenly once, even though it was buried in the special Magic layer (I was trying to toggle the LEDs, incidentally). I was forced to pair my keyboard all over again. No big deal, but it's a potential hazard.

This section has gotten pretty long with various quibbles and minor issues. None of them are substantial on their own, but they stack up to make using this keyboard a fairly daunting affair.

<CalloutPlusQuote>

The level of technical know-how required to use and modify the Glove80 makes it pretty hard to recommend to beginners or casual users.

</CalloutPlusQuote>

Even customizing the layout might be tricky for non-tech-savvy folks--especially knowing how easy it is to accidentally mess something up and be forced to go digging through the troubleshooting FAQ.

That said, I gather both MoErgo's customizer and the ZMK software it's built on are actively developed software with planned future improvements. So maybe the Glove80 will become a bit more friendly to casual users as time goes on. (Of course, you don't _have_ to customize the layout, or use layers.)

## Lights

While the Glove80 _does_ have RGB lights under each key, the lighting seems a little less full-featured than comparable keyboards. While you can customize the color, every key has to be the _same_ color; you can't customize per-key or per-layout.

This is apparently a limitation of ZMK (for now, at least), but there are hacks to work around it. I haven't looked into them, but regardless, that's fairly technical "you better know what you're doing" territory.

In any case, though: I wouldn't say the lights are a major selling point here. They're neat. They can look pretty cool in the dark. But they accelerate battery usage when in wireless mode, and there are only a few lighting options to choose from anyway.

There's a nice rainbow animation that slides across all the keys (my personal favorite, pictured below). If you're not using that animation, again, every key has to be the same color, but you can choose whether they stay lit, gradually pulse off and on, or rotate through hues in sync all together.

By the way, the lights are toggled and adjusted using the keys on the Magic layer, rather than in the layout editor. (And, of course, you can just leave the lights off.)

<figure>

![The right half of the Glove80 in the dark, keys illuminated in rainbow colors](/images/post_images/glove80/rainbow.webp)

<figcaption>A still of the rainbow animation</figcaption>

</figure>

I personally wouldn't have missed the lights--or at least, wouldn't have minded if they were just there to provide a little light in the dark and didn't have all the customization options. Still, they're a nice-to-have.

One other note on the topic of lights, though: MoErgo cleverly decided to use the RGB lights as a status indicator. When you tap the Magic layer key (the one with the MoErgo logo), the left half illuminates to show the battery level of each side of the keyboard, which layer is currently active, key lock status, and Bluetooth profile info.

![The left half of the Glove80 with limited keys lit up to convey the current state of the keyboard, as described in the paragraph above. The second and third rows of keys serve as battery indicators, with more keys lit left to right to indicate a higher charge per half.](/images/post_images/glove80/status.webp)

It's a clever workaround that lets you access that information without the need for any additional software. (Come to think of it: I didn't need to install _anything_ to start using the Glove80, which is nice.)

## Wireless and battery

The wireless connectivity has mostly worked very well for me. Only the left half connects to your host machine via Bluetooth; the right half then just connects with the left.

There have been a couple of instances where the halves lost connection with each other and I needed to do some troubleshooting to get them reconnected, but I'm fairly certain those were both my fault. They both happened while I was still learning how to change the layout, and it hasn't happened since. In any case, re-flashing the right half was all it took to set things right again, so no big deal.

Connection-wise, the Glove80 offers multiple Bluetooth profiles, represented by the six thumb keys in the photo above. You can toggle between using Magic layer keys. This lets you connect to multiple devices, and switch between them without the need to disconnect or re-pair; you can just hit the proper key for the device you're using.

In my limited testing (switching between two MacBooks), this feature works even better than I expected. In my experience, Bluetooth is finicky on its own, and doubly so where Macbooks are involved, so I didn't expect toggling between machines to work seamlessly or on the first try, but that's exactly what happened.

<CalloutPlusQuote>

If you plan to use the Glove80 wirelessly with multiple devices, I'm happy to report this feature seems to work excellently.

</CalloutPlusQuote>

On to power. With the comparable keyboards I've used, just one half needed to be powered by the host, and the other half is connected to that one via a connector cable. With the Glove80, however, both halves are independently powered with a USB-C port.

This is both a pro and a con. It's nice that there's no wire running between the halves, and that each can be independently positioned wherever you like, however close or far from the other half. (I often set my phone and other objects between the halves of my split, so that's convenient.)

However, it's a con because it means you'll need to keep an eye on the power of both halves. That said, though, the battery life seems to be very good.

<CalloutPlusQuote>

I've used my Glove80 in wireless mode almost the entire time I've had it, and it seems like each half would easily last at least a few days on a full charge, maybe more.

</CalloutPlusQuote>

(_Note that this is without the RGB lights on, however; if you're using those, I'd recommend plugging both halves in_.)

Each half has an independent power button, which is just a small springy nub of a switch that feels a little on the cheap side. However, since the keyboard automatically sleeps when not in use, in practice, I've rarely had a reason to turn either side off.

In fact, I left my keyboard on while I was out of town for over a week, and didn't notice any significant battery drain when I returned.

## Ergonomics and customization

I guess this is the section that matters, so maybe I kinda buried the lede here.

<CalloutPlusQuote>

The Glove80 feels _great_. I find myself placing my hands on it just to feel it whenever I walk through the room.

</CalloutPlusQuote>

I'm resisting the urge to use the phrase "fits like a glove," but it really does.

MoErgo recommends using the keyboard in its fully "flat" default position while getting used to it, before making any tenting or tilting adjustments. I've mostly done this, and I've found the result to be generally very pleasant. I truly thought I _needed_ tenting, but at this point in my ergonomic journey, at least, maybe I _actually_ needed a really good palm rest that kept my wrists at a neutral angle.

<SideNote>

Tenting is the degree to which the keyboard slopes from the lower left and right edges up towards the center; tilting is the degree to which the whole board slopes towards or away from your body.

Most all ergonomic keyboards try to optimize these form factors; many allow you to customize one or both yourself.

</SideNote>

It should be noted that MoErgo sees the Glove80 as a kind of spiritual successor to the [Kinesis Advantage](https://kinesis-ergo.com/shop/advantage2/); a sort of "platform" for your hands with a scooped-out key well for each set of fingers.

<figure>

![A comparison of the Glove80 and the Advantage from a side view, showing that the Glove80 is shorter, and it keys sit closer to the desktop](/images/post_images/glove80/advantage-comparison.jpg)

<figcaption>The Glove80 (left) and Kinesis Advantage (right). Image from MoErgo</figcaption>

</figure>

For many years, the Advantage was one of the only really innovative ergonomic keyboards on the market, and it seems the MoErgo makers were fans. But while it was perhaps revolutionary for its time (its layout appears to have inspired the current generation of ortholinear keyboards), it left room for improvement and iteration.

I've never used a "scooped" keyboard before, but I found the adjustment surprisingly minimal. However, that's with the strong caveat that I've already put my time in with ortholinear boards; I can touch type with them quite well at this point. I'm sure the learning curve would've been exponentially higher if this had been my first ortholinear keyboard.

<SideNote>

If you've never taken the time to learn touch typing--typing without looking, using the proper fingers for each key--I'd highly recommend it, regardless of your chosen keyboard. It's likely that my shoddy ad-hoc typing form contributed to my RSI.

</SideNote>

<CalloutPlusQuote>

One of the main ergonomic goals of the Glove80 seems to be keeping your wrists in as much of a natural position as possible. That is: not bent at all, in any direction; an extension of your forearm.

</CalloutPlusQuote>

To achieve this with a scooped layout, MoErgo opted for low-profile switches and keys (Kailh Choc v1, specifically—more on the switches and keycaps in another section).

What this means is: while the keys on the Glove80 are noticeably taller than those on an Apple laptop or the Apple keyboard, they're still also significantly shorter than any standard (mechanical) keyboard. The home row sits at a little less than an inch above the desk surface.

It should be noted that some ergonomics-minded folks don't like scooped key wells. The argument goes that in order to have _lowered_ keys, your hands are forced to be _higher_ above the surface of the desk. This in turn means the optimal desk height with a scooped keyboard will be lower than it would be with a standard keyboard, to accommodate the difference in height. (In the case of the Glove80, this is probably a matter of about 1–1.5 inches.)

This isn't an issue for me, with my adjustable [Uplift desk](https://www.upliftdesk.com/) legs. But that said: I _do_ find myself pushing the desk to its lowest possible point more now than I did before. If your work surface doesn't adjust—or isn't very low—you might have issues that I didn't.

All that out of the way:

<CalloutPlusQuote>

I notice the angle of my wrist is _dramatically_ lessened with the Glove80. Between the short switches and the lower key bed, I'd estimate my fingertips rest a full 1–2 inches lower.

</CalloutPlusQuote>

Many reviewers have commented how easy it is to slide your fingers up and down the columns of keys, and I've also had this experience. Gliding up or down from the home row is so easy I often find myself overshooting.

Which reminds me: many reviewers _also_ comment that the Glove80 works well for folks with smaller hands. My hands are pretty average size for an adult male (about 7.5 inches from my wrist to the tip of my middle finger), but I can confirm that I can reach any key without any issue, though the function keys are a slight stretch.

Again: sometimes I even _overreach_, just because the keys are nestled so nicely together. But that's just an adjustment; it's actually very nice being able to hit keys two rows above the home row so easily.

The thumb keys, too, are close enough together that even reaching the furthest ones isn't an issue (though I wouldn't recommend putting keys you use with high frequency at the furthest reaches of the thumb clusters).

You might notice that each column of the keyboard is scooped at a little different depth, creating vertical trenches to accommodate each individual finger's length. (i.e., the keys you'll be hitting with your middle finger are in the deepest well; those you'll press with your pinky, the shallowest.)

That might look funky or intimidating, but honestly, it hasn't been an issue in my experience. If anything, it's kind of helpful; one of my more petty gripes with the Glove80 is that it doesn't include homing keys. (You can buy them, but not printed; they're just blank, which is a bummer.) On other boards, I rely on homing keys to make sure my fingers are in the proper position without looking, but here, thanks to those individually scooped finger trenches, if you're off the mark, you'll probably realize it right away.

Anyway, all that to say: so far I've been very pleased with the feel and ergonomics, though I haven't done much to customize tenting or tilting yet.

Speaking of that, though: the Glove80 has five adjustable feet on the bottom of each side. Each individual foot can be adjusted by tightening or loosening the screw to create the desired angle. (The sixth foot, on the outer middle, is not adjustable, as it doesn't really need to be.)

![The five adjustable feet on the bottom of each half of the Glove80](/images/post_images/glove80/feet.webp)

The Glove80 also includes an array of extra hardware to augment the customization capabilities (along with a keycap puller). These extra extensions let you create some more extreme tenting and/or tilting angles than what's available with the default feet.

![An array of customization hardware, including nuts and bolts in a range of sizes, along with a wrench and a keycap puller tool.](/images/post_images/glove80/hardware.webp)

Again, here we find both upside and downside in the same package. There's a massive range of possibility here—much greater than any other keyboard I've tried. The included hardware is a nice touch, and it's stuff you could go out and buy at a hardware store if the situation called for it. I appreciate this means both affordability and flexibility.

On the other hand, though, it means adjustments are a bit more labor-intensive than with most other keyboards. Hard to complain about too much, since I can't say any keyboard I've tried has come close to the Glove80's adaptability (and I'm not sure how you'd make this easier anyway). Still, it's worth noting that adjustments will be just a little more fiddly here.

Regardless, for now, I haven't felt the need to utilize the added hardware, as the capabilities of the standard feet have suited my needs thus far. (And again: MoErgo recommends getting used to the keyboard in standard, flat profile for a few weeks before experimenting with customization, just to set a baseline.)

### Did it solve my issues?

Since I started this post off by talking about the RSI issues that led me to try the Glove80 in the first place, I should probably address the question of how much the Glove80 has helped with those issues.

I'd love to say the Glove80 has been exactly what I needed, but truthfully: while my condition now is much better than it was when I was shopping, I'm not exactly sure what to attribute to the hardware, and what to attribute to other life changes.

<CalloutPlusQuote>

Like any physical issue, the cause of (and remedy for) RSI is often complex. So just changing one thing, keyboard or otherwise, isn't always likely to have a significant impact all on its own.

</CalloutPlusQuote>

My situation was already beginning to improve before the Glove80 arrived, thanks to the arm and wrist exercises I'd been doing regularly. So it's tough to say what's the keyboard, and what's just me, being more mindful and diligent.

What I _can_ say is: I absolutely love the palm rest on this keyboard. It's just plastic, of course, but its positioning feels as supportive and comfortable as I wished all my other keyboards' palm rests were. My hands feel as though they're in a very comfortable position, and the Glove80 seems as though it can accommodate any adjustments I might decide I need in the future.

So, the Glove80 probably isn't a miracle cure. But then again, that's not really fair. Ergonomics is arguably more about prevention than recuperation anyway.

So…what if I had found the Glove80 right away, back when my issues first started over three years ago? Would it have made more of a major difference, coming from the default Apple keyboard? And more importantly, would it have saved me some of these issues I've dealt with since?

Obviously, I have no way of knowing for sure. But I think so. I think using this keyboard for the better part of the last three years or so probably would've saved me some issues.

For now, in any case, my plan is to stick with the Glove80 for the foreseeable future, and closely watch the changes over time. The strongest signals will only emerge with time.


## Switches and keycaps

The switches on the Glove80 are low-profile Choc v1 switches, and unfortunately, they are _not_ hot-swappable; they're soldered in place.

There's a good reason for this drawback, though: apparently, when the keys are as close together as the Glove80's are—and when they sit at angles, rather than uniformly flat—swappable switches are much riskier to the quality and consistency of the keyboard. Soldering the switches in place essentially means a better product.

Besides, there aren't very many Choc v1 switches to choose from anyway. The Glove80 ships with your choice of four switches (really, three): Brown, White, Red, and Red Pro.

<SideNote>

For traditional reasons, key switches are usually referred to by color names. The various colors refer to a specific combination of sound and feel. For example: blue switches are generally loud and clicky.

Any given switch from one manufacturer should be similar to the same color from another manufacturer, in keeping with the convention. But the actual colors themselves don't mean anything, outside being a shorthand.

</SideNote>

The Red and Red Pro are both linear switches, which means they don't have any bump or clickiness to them; they just go straight down silently when you press them, kind of like a spring. (I personally can't stand linear switches; I like to _feel_ my keypresses register. But they work better for some people.) The Red Pro version requires less force to press, so it might be nice if you have weak fingers or RSI that gets in the way of applying force. (It's called "pro" because, in theory, you can press these switches milliseconds faster, making them ostensibly ideal for gaming. I find these claims dubious, but then again, linear switches aren't for me anyway.)

The Browns and Whites appear to be identical from the tech specs, except that the Whites make a clicking sound when pressed, and the Browns do not. Both are tactile switches, which means you feel a bump when you press them.

I opted for Brown switches on my board, and as expected, they feel quite a bit like Cherry Browns, despite a lower travel distance. (If that doesn't mean anything to you, don't worry. It just means the keys have a modest bump and are moderately springy, and while they do make a little bit of sound, they aren't loud or clicky.)

The Brown switches are fine, but the keyboard enthusiast in me wishes there was an option with a little more oomph. I used [Glorious Pandas](https://www.gloriousgaming.com/products/glorious-panda-mechanical-switches) on my Moonlander and absolutely loved them. I still haven't gotten used to the softer feel of the browns yet (although that will probably take a few weeks of use).

In any case, the narrow range of choices isn't MoErgo's fault; nearly as I can tell, there just aren't any other Kailh Choc v1 switches on the market. At least you still have a choice of linear, tactile, or clicky.

As for the keycaps: Choc v1 keycaps seem to be much harder to find than standard Cherry-compatible keycaps. This would seem to be because Choc v1 uses its own stem (generally just referred to as Choc), which looks a bit like a two-prong electrical plug, instead of the de facto industry standard Cherry "plus" stem.

<figure>

<img src="/images/post_images/glove80/choc-vs-cherry.jpg" alt="" />

<figcaption>Left: Kailh Choc v1 switch with proprietary Choc stem; right: Choc v2 switch featuring a standard Cherry-compatible stem.</figcaption>

</figure>

MoErgo made this decision deliberately, however; they seem to feel that Choc v2 switches, despite wider compatibility, only really manage to be the worst of both worlds.

Turns out, not all Cherry-compatible keycaps are actually compatible with low profile switches, even if they use the same stem. (Most such caps were designed assuming the space a standard switch would provide, which can mean collisions when mixing low-profile switches with standard caps.) When the keys are so close together and angled towards each other, as on the Glove80, you might not have the space for standard keycaps anyway.

Choc v2 switches are also marginally taller than Choc v1, so they represent a small but meaningful change to ergonomics. All that makes Choc v2 good in theory, but suboptimal in practice (in this use case, at least), and so MoErgo chose once again to optimize for fit over compatibility, which I see as a good thing.

Still, it can be very challenging to find Choc keycaps. They're a small fraction the popularity of Cherry. MoErgo sells a few add-on packs, but they're not much. A lot of popular keycap manufacturers don't even offer Choc sets, but some do.

## Summary

<CalloutPlusQuote>

The Glove80 is definitely the most ergonomics-minded keyboard I've ever touched. You feel that every design decision was focused on optimizing comfort for as many hands as possible.

</CalloutPlusQuote>

It's unfortunate that
