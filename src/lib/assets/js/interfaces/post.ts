export default interface Post {
  categories?: string|string[]
  coverImage: string
  coverRatio?: string
  date: string
  excerpt: string
  slug: string
  subtitle?: string
  title: string
  updated?: string
}