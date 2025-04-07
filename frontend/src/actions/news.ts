import { adbGet } from '@/util/api';

import { NewsArticle } from '@/types/types';

export async function getNews(limit?: number): Promise<NewsArticle[]> {
  const response = await adbGet<{
    articles: NewsArticle[];
  }>('/news');
  const { articles } = response.data;

  return articles.slice(0, limit || 10);
}
