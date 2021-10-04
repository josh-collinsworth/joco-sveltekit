import type Post from '../assets/js/interfaces/post'

const EXTERNAL_POSTS: Post[] = [
  {
    title: 'Using SVG and Vue.js: A complete guide',
    subtitle: 'LogRocket Blog',
    slug: 'https://blog.logrocket.com/using-svg-and-vue-js-a-complete-guide/',
    coverImage: 'ultimate-guide-SVGs-vue-js.webp',
    coverRatio: '730 / 487',
    date: '2021-09-07',
    excerpt: 'From the simple question of how best to load SVG files into your templates, to handling animations and accessibility, there are plenty of pitfalls to avoid. I’ve been working with Vue and SVG for the last few years, and I’ve developed (pun intended) a few tricks and recommendations I’d like to share.',
  },
  {
    title: 'What I Learned Building a Word Game App With Nuxt on Google Play',
    subtitle: 'CSS Tricks',
    slug: 'https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/',
    coverImage: 'quina-post-hero.jpg',
    coverRatio: '120 / 63',
    date: '2021-05-21',
    excerpt: 'I fell in love with coding the moment I created my first CSS :hover effect. Years later, that initial bite into interactivity on the web led me to a new goal: making a game.',
  },
  {
    title: `Leveling up Flywheel's retreat website: A developer's tale`,
    subtitle: 'The Layout',
    slug: 'https://getflywheel.com/layout/leveling-up-flywheels-retreat-website/',
    coverImage: 'FlyFest_site_Flywheel-1800x620.jpeg',
    coverRatio: '90 / 31',
    date: '2019-11-13',
    excerpt: `A post about Flywheel's internal retreat website; how and why it was created, the tech behind it, and all the fun we had making it. (Note: misattributed to Morgan Smith.)`
  },
  {
    title: `Understanding WordPress Shortcodes`,
    subtitle: 'The Layout',
    slug: 'https://getflywheel.com/layout/understanding-wordpress-shortcodes/',
    coverImage: 'Dark_Grey_Shortcode-icon.jpeg',
    coverRatio: '84 / 51',
    date: '2019-11-13',
    excerpt: `The first of a planned series on WordPress shortcodes that never quite got finished (and probably isn't very useful in a post-Gutenberg world anyway), but offers a nice intro to the concept, at least. (Note: misattributed to Morgan Smith.)`
  },
]

export {
  EXTERNAL_POSTS
}