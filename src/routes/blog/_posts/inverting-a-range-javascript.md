---
title: "Inverting a number from a range in JavaScript"
date: "2021-11-24"
updated: "2021-11-24"
categories: 
  - "javascript"
  - "web"
coverImage: "seesaw.png"
coverWidth: 16
coverHeight: 9
excerpt: TODO fill this in later
---
<script>
  import Callout from '$lib/components/Callout.svelte'
  import SideNote from '$lib/components/SideNote.svelte'
</script>

There's a prevalent misconception about developers and math. Specifically, most people seem to believe that you need to be good at math--_extremely_ good, in fact--in order to be a developer.

**This is a myth.** Most developers I know are plainly average at math.

Yes, there are situations in which math is necessary. And yes, there are certain specializations _within_ the very wide world of development that will be more math-heavy than others. (Working with algorithms, for example.) But the vast majority of us barely even think about math beyond some core fundamentals in our daily jobs. In my experience, knowledge of the [order of operations](https://www.mathsisfun.com/operation-order-pemdas.html) and working with percentages will get you where you need to be most of the time.

All that said: there is _one_ formula I've kept finding useful over and over again: how to get the inverse of a number in a range.


## What does this mean?

This is a concept that's easier to understand than to say and explain, but let me give it a shot.

Suppose you have a slider the user can adjust that goes from 0 through 100. For whatever reason, you need the _opposite_ of whatever the user has selected. If the user's picked 0, you want 100, and vice versa. If the put the slider to 25, you want 75, and right in the middle at 50 it should be 50.

Some practical examples:

- The user has drawn x cards from the deck. How many are left?


### Why would I need this?

Oftentimes, the actual value you want to adjust in the code is directly _opposite_ what the intuitive control will be in the UI.

For example: let's say you want to have a "darkness" slider, which does something like dims an image using the css `brightness` filter, or that just makes a given color darker.

In both of those cases, as the user _increases_ darkness, you'll want to _decrease_ the value in the code. In the case of `filter: brightness(x)`, `x` needs to go _down_ as the darkness value goes up. If you're working with `rgb` colors, the value of each color will need to go down to make darker color values. Same with the HSL or LAB color space, too.

Another example might be transparency. In your UI, it might make sense to have a "transparency" slider, that adjusts the CSS `opacity` property inversely; the more transparent, the less opaque.

You might be thinking: **couldn't I just change the input?** And yes, in some cases, you could; change the label to the opposite (darkness to lightness, transparency to opacity), and you can effectively sidestep the need to invert.

But while that works in these contrived examples, there will be cases where the intuitive way to change things is by _increasing_, rather than decreasing--or where the CSS value you want to change is just naturally opposite of what the input controls. It's better for us in these cases to keep the UI as intuitive as possible, rather than asking the user to think backwards.

Also, it's possible you may just need two opposing values regardless of input. There will be situations where the more one value goes up, the more another needs to go down (even when there _is_ no UI involved). It's helpful in these situations to understand how to go about calculating those values.


### The formula

The formula for getting the "opposite value" of a number in a given range is easier to understand than it is to read. But mathematically, the formula looks like this, where `v` is the current value within the range, and `m` is the maximum possible value in that range.


```
-v + m
```

That sounds a little heady, so let's talk about it in simpler, and less vague terms.


### A more useful example

Let's take our 0–100 example from above. The opposite of 0 is 100 and vice versa; the opposite of 25 is 75, and so on.

Now let's say we want to get the opposite value of 60. You probably already know it's going to be 40, but here's how we'd apply the formula:

**First, we multiply the value by -1:**

_60 × -1 = -60_

**Then, we add the maximum (100, in this case):**

_-60 + 100 = 40_

_Et voilà!_ We started with 40 and ended with 60, just like we wanted. This will work with any number in the range.


## Making a reusable function

You could write a function to generate the opposite of a value in a range fairly simply with JavaScript. (In fact, if you want to go down a little bit of a nerdy rabbit hole: formulas in math and functions in code are basically the same thing; they take input, do stuff with it, and return a value. 🤓)

Here's what our function might look like:

```js
const getOppositeOfValueInRange = (value, max) => {
  return -value + max;
}
```

If you wanted to be super minimalist about it (and that's up to you), you could go with this equivalent:

```js
const getOppositeOfValueInRange = (v, m) => -v + m
```

Either way, it works just great (whether or not we stick to 0–100 as our range):

```js
getOppositeOfValueInRange(25, 100) // 75
getOppositeOfValueInRange(83, 100) // 17
getOppositeOfValueInRange(0, 100) // 100

getOppositeOfValueInRange(3, 10) // 7
getOppositeOfValueInRange(5, 7) // 2
getOppositeOfValueInRange(237, 1000) // 763
```