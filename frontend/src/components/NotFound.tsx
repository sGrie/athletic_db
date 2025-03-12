import Link from "next/link";

import { Button } from "@/components/ui/Button";

function NotFound() {
  return (
    <div className='h-96 flex flex-col justify-center items-center gap-4'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-2xl tracking-tight'>Not Found</h1>
        <p>The page you are looking for cannot be found.</p>
      </div>
      <Button asChild>
        <Link href='/'>Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
