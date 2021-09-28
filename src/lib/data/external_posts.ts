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
    categories: ['vue', 'javascript', 'web']
  },
  {
    title: 'What I Learned Building a Word Game App With Nuxt on Google Play',
    subtitle: 'CSS Tricks',
    slug: 'https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/',
    coverImage: 'quina-post-hero.jpg',
    coverRatio: '120 / 63',
    date: '2021-05-21',
    excerpt: 'I fell in love with coding the moment I created my first CSS :hover effect. Years later, that initial bite into interactivity on the web led me to a new goal: making a game.',
    categories: ['vue', 'javascript', 'design', 'web']
  }
]

export {
  EXTERNAL_POSTS
}