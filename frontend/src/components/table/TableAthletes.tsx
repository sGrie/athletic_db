import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table';

import { Athlete } from '@/types/types';

function TableAthletes({ athletes }: { athletes: Athlete[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[200px]'>Name</TableHead>
          <TableHead>School</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {athletes.map((athlete) => {
          return (
            <TableRow key={athlete.id}>
              <TableCell>
                <Link href={`/athlete/${athlete.id}`}>{athlete.name}</Link>
              </TableCell>
              <TableCell>
                <Link href={`/school/${athlete.school.slug}`}>{athlete.school.name}</Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default TableAthletes;
