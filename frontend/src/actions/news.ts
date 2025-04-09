import { adbGet } from '@/util/api';

import { NewsArticle } from '@/types/types';

export async function getNews(limit?: number): Promise<NewsArticle[]> {
  const response = await adbGet<{
    articles: NewsArticle[];
  }>(`/news?limit=${limit || 10}`);

  if (response.code !== 200) {
    return [];
  }

  const { articles } = response.data;

  return articles;
}
