import Link from 'next/link';

import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/Button';
import H2 from '@/components/ui/H2';

import { getNews } from '@/actions/news';

async function SectionNews() {
  const news = await getNews(4);

  return (
    <div className='flex flex-col gap-4'>
      <H2>Latest News</H2>

      <div className='flex gap-4 w-full justify-evenly flex-wrap'>
        {news.length > 0 ? (
          news.map((newsItem, i) => {
            return (
              <NewsCard
                title={newsItem.title}
                description={newsItem.description}
                image={`${newsItem.image}?i=${i}`}
                key={i}
              />
            );
          })
        ) : (
          <p>No news found.</p>
        )}
      </div>

      <div className='w-full flex justify-center'>
        <Button variant='default' asChild>
          <Link href='/news'>View more articles</Link>
        </Button>
      </div>
    </div>
  );
}

export default SectionNews;
