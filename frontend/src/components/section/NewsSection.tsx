import Link from 'next/link';

import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/Button';

import { getNews } from '@/actions/news';

async function NewsSection() {
  const news = await getNews(4);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Latest News
      </h2>

      <div className='flex gap-4 w-full justify-evenly flex-wrap'>
        {news.map((newsItem, i) => {
          return (
            <NewsCard
              title={newsItem.title}
              description={newsItem.description}
              image={`${newsItem.image}?i=${i}`}
              key={i}
            />
          );
        })}
      </div>

      <div className='w-full flex justify-center'>
        <Button variant='default' asChild>
          <Link href='/news'>View more articles</Link>
        </Button>
      </div>
    </div>
  );
}

export default NewsSection;
