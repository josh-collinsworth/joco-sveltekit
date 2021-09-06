import type Post from './interfaces/post'

const SITE_COLORS: string[] = [
  'transparent',
  'transparent',
  'transparent',
  'transparent',
  'var(--lightGray)',
  'var(--ink)',
  'var(--lightBlue)',
  'var(--darkBlue)',
  'var(--yellow)',
  'var(--orange)'
]

const EXTERNAL_POSTS: Post[] = [
  {
    title: 'What I Learned Building a Word Game App With Nuxt on Google Play',
    slug: 'https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/',
    coverImage: 'https://pbs.twimg.com/card_img/1432781135554154496/gZDxkOJh?format=jpg&name=medium',
    date: '2021-05-21',
    excerpt: 'I fell in love with coding the moment I created my first CSS :hover effect. Years later, that initial bite into interactivity on the web led me to a new goal: making a game.',
    categories: ['vue', 'javascript', 'design', 'web']
  }
]

export {
  SITE_COLORS,
  EXTERNAL_POSTS
}