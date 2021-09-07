export default interface Post {
  categories: string|string[];
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  subtitle?: string;
  title: string;
  updated?: string;
}