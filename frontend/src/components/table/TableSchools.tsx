import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table';

import { School } from '@/types/types';

function TableSchools({ schools }: { schools: School[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[200px]'>School</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schools.map((school) => {
          return (
            <TableRow key={school.id}>
              <TableCell>
                <Link href={`/school/${school.slug}`}>{school.name}</Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default TableSchools;
