import { ReactNode } from 'react';

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>{children}</h2>
  );
}

export default H2;
