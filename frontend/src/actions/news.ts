import { NewsArticle } from '@/types/types';

const DEFAULT_NEWS: NewsArticle = {
  id: '0',
  title: 'Lorem ipsum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: 'https://picsum.photos/400/200'
};

export async function getNews(limit?: number): Promise<NewsArticle[]> {
  return new Array(limit || 10).fill(DEFAULT_NEWS);
}
