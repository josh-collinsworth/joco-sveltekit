import type Post from '../types/post'

const EXTERNAL_POSTS: Post[] = [{
		title: `Create better CSS forms with these design principles`,
		subtitle: `LogRocket Blog`,
		slug: `https://blog.logrocket.com/create-better-css-forms-design-principles/`,
		coverImage: `build-better-css-forms-design-principles.png`,
		coverWidth: 730,
		coverHeight: 487,
		date: `2022-02-23`,
		excerpt: `Many developers, even among the most seasoned senior engineers, balk at the idea of laying out and styling pages on their own. I don’t believe developers need to be designers. But I believe developers can learn to build functional, quality layouts with knowledge of design principles. And, just as a little primer, when I say “design,” I mean both visual and structural.`,
	}, {
		title: `A Complete Beginner's guide to NPM`,
		subtitle: `CSS Tricks`,
		slug: `https://css-tricks.com/a-complete-beginners-guide-to-npm/`,
		coverImage: `npm.webp`,
		coverWidth: 2,
		coverHeight: 1,
		date: `2022-01-20`,
		excerpt: `Whatever npm was—whatever those commands did and wherever you were supposed to type them—nobody had ever taken the time to explain it to me. And the more I read guides written by people who took that knowledge for granted, the more I felt isolated.`,
	}, {
		title: `Building a PWA with Vue.js`,
		subtitle: `LogRocket Blog`,
		slug: `https://blog.logrocket.com/building-pwa-vue/`,
		coverImage: `building-pwa-vue-js.webp`,
		coverWidth: 730,
		coverHeight: 487,
		date: `2021-12-30`,
		excerpt: `When it comes to PWAs, there’s nothing special about Vue specifically, or even frameworks in general. To put it simply: if it loads in a browser, it can be a progressive web app. That groundwork laid, let’s talk specifically about how to build a PWA with Vue, one of my personal favorite tools for web development.`,
	}, {
		title: `Using SVG and Vue.js: A complete guide`,
		subtitle: `LogRocket Blog`,
		slug: `https://blog.logrocket.com/using-svg-and-vue-js-a-complete-guide/`,
		coverImage: `ultimate-guide-SVGs-vue-js.webp`,
		coverWidth: 730,
		coverHeight: 487,
		date: `2021-09-07`,
		excerpt: `From the simple question of how best to load SVG files into your templates, to handling animations and accessibility, there are plenty of pitfalls to avoid. I’ve been working with Vue and SVG for the last few years, and I’ve developed (pun intended) a few tricks and recommendations I’d like to share.`,
	}, {
		title: `What I Learned Building a Word Game App With Nuxt on Google Play`,
		subtitle: `CSS Tricks`,
		slug: `https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/`,
		coverImage: `quina-post-hero.jpg`,
		coverWidth: 120,
		coverHeight: 63,
		date: `2021-05-21`,
		excerpt: `I fell in love with coding the moment I created my first CSS :hover effect. Years later, that initial bite into interactivity on the web led me to a new goal: making a game.`,
	}, {
		title: `Leveling up Flywheel's retreat website: A developer's tale`,
		subtitle: `The Layout`,
		slug: `https://getflywheel.com/layout/leveling-up-flywheels-retreat-website/`,
		coverImage: `FlyFest_site_Flywheel-1800x620.jpeg`,
		coverWidth: 90,
		coverHeight: 31,
		date: `2019-11-13`,
		excerpt: `A post about Flywheel's internal retreat website; how and why it was created, the tech behind it, and all the fun we had making it. (Note: misattributed to Morgan Smith.)`
	}, {
		title: `Understanding WordPress Shortcodes`,
		subtitle: `The Layout`,
		slug: `https://getflywheel.com/layout/understanding-wordpress-shortcodes/`,
		coverImage: `Dark_Grey_Shortcode-icon.jpeg`,
		coverWidth: 84,
		coverHeight: 51,
		date: `2019-11-13`,
		excerpt: `The first of a planned series on WordPress shortcodes that never quite got finished (and probably isn't very useful in a post-Gutenberg world anyway), but offers a nice intro to the concept, at least. (Note: misattributed to Morgan Smith.)`
	},
]

export {
	EXTERNAL_POSTS
}