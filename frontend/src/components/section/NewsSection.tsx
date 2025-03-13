import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/Button';

function NewsSection() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Latest News
      </h2>

      <div className='flex gap-4 w-full justify-evenly flex flex-wrap'>
        <NewsCard
          title='Lorem ipsum'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <NewsCard
          title='Lorem ipsum'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <NewsCard
          title='Lorem ipsum'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <NewsCard
          title='Lorem ipsum'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>

      <div className='w-full flex justify-center'>
        <Button variant='default'>View more articles</Button>
      </div>
    </div>
  );
}

export default NewsSection;
