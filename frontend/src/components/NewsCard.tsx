import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

function NewsCard({
  title,
  description,
  image
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className='w-full basis-[320px]'>
      <div className='aspect-w-4 aspect-h-5 relative'>
        <Image
          src={image}
          alt='News Article'
          width={400}
          height={200}
          className='object-fill w-full rounded-t-xl'
        />
      </div>
      <CardHeader className='grid gap-1 p-4'>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='line-clamp-3'>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Read</Button>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
