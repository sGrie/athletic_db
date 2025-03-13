import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

function NewsCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className='w-full basis-[300px]'>
      <div className='aspect-w-4 aspect-h-5 relative'>
        <Image
          src='https://picsum.photos/400/200'
          alt='Product'
          width={400}
          height={200}
          className='object-fill w-full'
        />
      </div>
      <CardHeader className='grid gap-1 p-4'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Read</Button>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
