---
title: "In defense of two-state theme toggles"
date: '2026-8-21'
updated: '2026-8-21'
categories:
  - opinion
excerpt: "There's a lively debate going on over whether theme toggles should have two options (light/dark) or three, with an added \"system\" option. I maintain two-state toggles are better in most cases (though not all), and that the case for a third option rests mainly on problems most users don't actually have."
coverImage: "two-state.webp"
coverWidth: 1920
coverHeight: 1080
---

<script>
  import PullQuote from '$lib/components/PullQuote.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
  import CalloutPlusQuote from '$lib/components/CalloutPlusQuote.svelte'
</script>

In case you haven't kept up on the most recent ~~bikeshedding~~ discussion in frontend: there's a lively debate going on over the merits of a simpler two-state theme toggle (light/dark), vs. a more explicit three-state toggle (with dark and light, plus a third "system" option), and whether the clarity of that third option is worth the additional complexity it introduces.

But let's back up to where this discussion started, and talk a little bit more about the details and tradeoffs those two approaches, before I start weighing in on what I think is (and is not) ideal, and why.


## The origins of the debate

A couple of weeks ago, Lea Verou published an excellent post titled [_Dark mode toggles: two states are enough_](https://lea.verou.me/blog/2026/dark-mode-toggles/). (Evidently, this discussion had been ongoing for a good while prior.)

The post is thorough and insightful. Dr. Verou lays out her case that a two-state is enough most of the time, **in the case of a switch that's part of the main site UI**. That last part's important:

<CalloutPlusQuote>

In _most_ cases, users aren't looking for that third "system" option, and aren't likely to find it useful; they're mainly just trying to switch from light to dark, or vice versa.

</CalloutPlusQuote>

There are exceptions. In some cases—like in a dedicated settings page, where the mental model is less "what do I want right this second" and more "what do I want this app to be like in the future?"—a three-state toggle makes more sense. Dr. Verou's post makes this abundantly clear, and I tend to agree.

Aside from all that: I find Dr. Verou's two-state implementation particularly clever. Under the hood, rather than explicitly toggling between "light" or "dark", it toggles between falling back to the system setting, and the _opposite_ of the system setting.

That is: rather than saving either a light or dark theme preference permanently in `localStorage`, Dr. Verou's implementation stores your preference _only if that preference is different than your device setting_. In that case, the site saves whatever theme that happens to be.

_Otherwise_--or should the user toggle the theme once again--rather than storing the newly selected theme (which now once again matches their OS preference), the saved preference is simply deleted, causing the site to once again default to the device preference. This is important, because a common criticism of binary light/dark controls is that they lock you into one or the other, with no way to get back to your system preference; this two-state toggle neatly avoids that lock-in.

A couple of other points made in the post:

1. **With a three-way toggle, at any given time, two of the three options will do the same thing**. This is a bit redundant, and creates at least _some_ complexity by offering users more choice than they might want (or even understand; more on that in a bit).

2. **This is not a one-size-fits-all implementation**. Again, Dr. Verou herself writes that there will be exceptions, and in particular, advocates for a three-way toggle in dedicated settings pages. Her argument mainly focuses on the toggles that are a persistent part of the UI.

I keep harping on that second point because it seems like it gets lost in the conversation. <footnote>Honestly, it feels like a _lot_ of the pushback to Dr. Verou's post is rooted in a hasty or incomplete reading; it seems many don't get past the title, and take the post as a dogmatic screed against three-way toggles. It very much is not.</footnote>

The pushback against this two-state implementation—despite the aforementioned caveats and nuances—has seemed loud and severe, at least in my circles of the web. Some in the frontend community seem to feel denying users that third option is something akin to malpractice; a choice that nobody who truly cares about users could possibly make.&nbsp;<footnote>_Won't somebody please think of the users!?_</footnote>

Perhaps the most visible rebuttal is [Bramus's _The Case for Tri-State Dark Mode Toggles_](https://www.bram.us/2026/08/18/the-case-for-tri-state-dark-mode-toggles/). That post does a serviceable job making its titular case (despite the irony that Bramus's own site offers no theming or theme toggle at all), so it'll serve as my focus for addressing the dissenting opinion.

## Addressing the case for tri-state theme toggles

Almost all arguments _against_ the two-state toggle and in favor of a three-state option boil down to one of two concerns:

1. Favoring clarity over simplicity; or
2. Accounting for users who might have a _dynamic_ system theme, which changes between light and dark mode based on time of day.

The first point is valid, even if I personally believe the tradeoff is worthwhile in most cases, and with the caveats already mentioned above. Still, it's possible some users might want that choice, and it's nice for them to have it if they do. Reasonable cases can be made both ways here, and—once again—context should affect the answer.

The second point above, however, seems like a bit of an extreme edge case to me.

I say "edge case" because, while we don't have data directly from Apple or other device vendors, what little we _do_ know from independent surveys suggests a very small minority of users favor a dynamic theme. There's good reason to think it's likely a low single-digit percentage of users. <footnote>Most of the data we have to go off of doesn't explicitly include dynamic theme usage; it only includes users who say they use both light and dark themes. So while that number seems to be around 10%, that's probably very high, as it likely includes users who manually change their theme or bounce between light and dark, alongside those who opt for automatic dynamic theming. Also: not all operating systems even offer the setting; Windows does not, and while Android does, it's a bit of work to enable unless you opt into it during device setup.</footnote>

But remember: **the two-state approach isn't automatically an issue for those users**. A two-state toggle doesn't actually become a problem for users with a dynamic OS theme, _except_ in the following case:

- Somebody with a dynamic theme enabled visits the site _and_ decides to change the site's theme manually
- They come back to the site _later_, _after_ their dynamic theme has shifted between light and dark, ***and***
- Upon that change, the theme is not what the user wants, and they want to change it again

That's a _lot_ of conditions to build a UI around, and a user has to get through _all_ of them before we've actually maybe got a problem. Even if we assume 10% of all users have a dynamic OS theme (which, again, is likely an extremly high estimate), _some_ portion of those users are dropping off at every step above. What we're left with is quite likely close to zero.

And _even in that case_, let's remember: the "problem" in question is literally _one extra click_, for whatever vanishingly tiny percentage of users we're left with in the end.

Now, to be clear: **I do not advocate for ignoring a group of users simply because they're in the minority**. (That's how a lot of accessibility failures happen, among other terrible outcomes.) That's not what this is; don't take this out of context.

Some people have theme preferences for important reasons, like vision. One mode or the other simply doesn't work for them. We should absolutely respect that.

The difference in this case is: we're not talking about something like ability, bandwidth, device power, or any other factors a user might not be able to control; we're talking about _a choice they made freely and independently_.

Further: we can safely assume this choice is _not_ accessibility-related, as any user whose vision allows them to opt comfortably into both light and dark mode at varying times of the day clearly isn't hindered by either one.

And in a case where a small minority of users has explicitly _opted in_ to an unusual experience, and, as a direct result of that uncommon choice, in certain circumstances, _might_ make further choices that _could_ cause them to encounter unexpected behavior, depending on what their expectations were to begin with—none of which is actually an _issue_ for them, but merely a preference, resulting, worst-case, in a single extra click—

Well, I have a very difficult time adding extra complexity for the _other_ ~95% of users, based solely on that hole of what-ifs those users deliberately dug for for themselves in the first place.

Personally: I suspect a user who _wants_ their machine to alter the theme for them probably isn't picky enough to change it in the first place. But even if they do, I have a hard time imagining that person being terribly surprised or interrupted simply by encountering one or the other, when they're already used to both.

Or, to put it more bluntly:

<CalloutPlusQuote>

I'm not sure real users actually have this problem. I think we've mostly invented it.

</CalloutPlusQuote>

Which actually brings me to my next point…


## "System" is unclear to many users

My core thesis about all of this is: users might have a preference, but I severely doubt most users think even 1% as much about theming as we do, as developers.

It's a common pitfall of human psychology that we imagine everyone thinks like we do. Finance people think everyone understands interest and investments; car people think everyone knows how to change their oil; developers think everyone obsesses over color themes.

But I see little evidence of non-developer users caring nearly as much as we seem to.

<CalloutPlusQuote>

To test my theory, I asked my wife (_who is not a developer, but who regularly uses a smartphone, an iPad, and a laptop_) what color theme her phone is set to; light or dark.

She had absolutely no idea.

</CalloutPlusQuote>

Despite spending hours a day looking at her phone, she literally had to check it to find out what her default color theme is; it's that invisible to her. (_Interestingly: she herself was surprised to find out she's actually been looking at dark mode this whole time without even realizing it_).

I asked whether she has the same preference set for her other devices; she didn't know that, either.

Then I asked whether she's ever pressed the button on a site or app to change to another color theme.

She said no. Literally never.

Now, **I acknowledge this is only one singular data point**. I don't pretend this is meaningful research, or for even a moment imagine my wife happens to represent the majority of any user base. Users undoubtedly exist on a wide spectrum between her and, well, nerds who think about this stuff enough to write blog posts about it. (_Ahem._)

But still: unavoidably, _some number of users don't even know what their system theme is_, or might not understand what "system" means in the first place.

I suspect a non-trivial number of users probably aren't even aware they _have_ a default theme, simply because they've gotten so used to whatever is currently set on their device they forgot they ever set anything at all. They think things just look the way they look.

**A "system" setting is likely meaningless to those users**. To provide that option is to throw extra complexity at them, which could very well be confusing (_especially because, again: two of the three options look exactly alike, and a user might not even understand what the difference is_).

And that's all assuming the word "system" (or "OS" or "device" or whatever) is present to begin with. Many three-state toggles simply show a little computer-like icon, which could quite easily compound the confusion.

Further: because the "system" option is the default anyway, it's only important if somebody switches _away_ from it, _and then wants to switch back_. That's yet another multi-step logic flow, and probably not one that many ordinary users are regularly encountering.


Personally: being a developer, and being acutely aware of this stuff, I have strong preferences and opinions on my theme. But to be honest, I can't remember a time when I've ever clicked the "system" option when I _wasn't_ just testing things out. I can't say it's ever been something I had to seek out or even _wanted_, operating a site or app as a user (probably mostly because, again: it's the default already). But of course, that's just me.

---

So to reiterate: in order for the "system" option to be useful, a minimum of _four_ conditions must first be met:

- The user must be aware of what their system theme is;
- The user must _also_ understand what that little computer icon represents (or otherwise, the option must clearly be labeled);
- The user must have _already_ switched away from their system theme, since it's the default, ***and***
- The user must want to switch _back_ to their system theme—and explicitly ***not*** just to whatever the opposite of the current theme happens to be, for whatever reason

I suspect few users regularly, if ever, check all of those boxes.

I further suspect most that do are themselves developers, or are otherwise deliberately running every setting through its paces just for the sake of testing.

Regardless, because people seem to skip over this point, I think it's worth reiterating once more: **this doesn't mean we should never use a three-state toggle**. They have their place, and context is important. I (and Dr. Verou, and others who favor two-state toggles) are completely in favor of three-state where it makes sense.

I just don't think that's in the main site UI.

<CalloutPlusQuote>

The charge to make tri-state the default is mostly in the name of accommodating an extreme minority of users that _probably doesn't even need accommodation in the first place_, at the expense of likely confusing or slowing down at least as many more.

</CalloutPlusQuote>


### Further addressing "The Case for Tri-State Dark Mode Toggles"

In the above post, Bramus points to a survey he conducted on social media, asking his followers whether they preferred a two- or three-state toggle. The survey closed with the overwhelming preference being three-state, but there are a lot of issues with this approach to data collection:

First: **people will always _say_ they want more options**. Psychologically, we imagine ourselves to prefer choice, even when we don't actually use it or even _want_ it in practice. The higher number pretty much always wins in a survey like this, regardless of topic. (Ask me how many options I'd like to have for dipping sauce, and I'll probably say five or ten. But ask me how many I actually _use_, and I'll probably say just one or two.) <footnote>Honestly, I think the psychological fear of missing out is a big driver of the pushback against two-state toggles as well. People are convinced that they—or users—will miss that option if it's not present, not unlike how I'm convinced someday I'll miss that doohickey that's been sitting unused in my cabinet for 15 years.</footnote>

Secondly: Bramus hints there's an option he prefers, which could further skew the results; respondents might be compelled to guess what Bramus thinks the right answer is, rather than supply their own.

But most importantly: **this audience is likely to be heavily comprised of developers**. The result is therefore bound to reflect the opinions of developers, rather than the preferences of users. (Not that devs should be excluded from the discussion, of course; they're users, too. But it means we're hearing almost entirely about users who either are themselves developers, or who have been fully invented in the imagination of a developer, rather than from a representative group of users.)

Bramus also points to [a tri-state implementation by Vale](https://vale.rocks/micros/20260810-0330) that he feels may be the ideal middle ground, but I can't say I agree it's worthy of consideration. Here's an embedded CodePen demo:

<p class="codepen" data-height="300" data-pen-title="Light/Dark/System Theme Setting" data-version="2" data-default-tab="result" data-slug-hash="emgXqvQ" data-user="OuterVale" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/OuterVale/pen/019fe98c-2d9b-71e4-849d-726543589635">
  Light/Dark/System Theme Setting</a> by Declan Chidlow (<a href="https://codepen.io/OuterVale">@OuterVale</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

It's certainly clever; it _appears_ to be a two-state toggle, but defaults to system preference by having _neither_ option selected. If you _do_ pick either theme, you can click it again to remove it, which causes the toggle to again fall back to the system default.

If somebody wanted to use this on their personal website or something, I'd say fine. That's neat. But I couldn't advocate for it in any kind of consumer software.

My issue with this approach is: **there is no existing affordance like this**. There's no common user control anywhere I'm aware of that matches this toggle or works like it; it's novel, invented behavior, which users are unlikely to have ever encountered. That's bound to be unavoidably confusing, regardless of how clever it might be or what feature it's actually manipulating under the hood.

You could argue it functions as a two-way toggle frictionlessly enough, with a nice secret third option, but I would then ask: what's the point?

It's effectively a multi-state toggle masquerading as a two-state, and neither its nature nor the option to deselect the current theme to revert to the system default is at all apparent or discoverable, except by trial. (It's ironic, then, that this approach is favored by some who critique the Verou approach over its lack of transparency.)

Bramus also asserts the tri-state toggle makes users think less (with a nod to Steve Krug), which as pointed out above, is very likely _not_ the case for a significant number of users, who either don't know what "system" means or aren't sure what their system setting is or how it's different from the other choices. So that appeal to authority seems misplaced, in my opinion.


## So what should we do?

After all of this, we circle back once again to the original post, because despite all the pushback, Dr. Verou got it right in the first place.

- **If a toggle is a part of the main UI, make it a two-state toggle**. This serves users who simply want to change the theme from whatever it happens to be at the moment, which will be the overwhelming majority of users, and the main purpose of any control that's featured in the main user interface.

- **If it's in a settings or account page, an explicit three-state toggle is probably better**. If I'm in the mindset of setting up an app how I want it to be, or choosing for my account, the choice is warranted. In those cases, users are deciding what experience they want to have _in the future_, and not just at this specific moment. They're not looking for the lightswitch; they're setting up software.

Further, I'd say any app or site a user might be looking at all day long, or multiple times a day—Slack or GitHub, for example—probably warrants a three-way toggle. Most sites and apps won't fall into this category.

But here I'm mostly just repeating what's already been written quite clearly by Dr. Lea Verou.

Who is a woman.

With a PhD.

In usability.

From MIT.

So, ya know…maybe she knows what she's talking about, dudes of the internet.
