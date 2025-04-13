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
  return athletes.length > 0 ? (
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
                <Link href={`/athlete/${athlete.id}`}>
                  {athlete.first_name} {athlete.last_name}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/school/${athlete.team.school_id}`}>{athlete.team.school.name}</Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ) : (
    <p className='pt-4'>No athletes found.</p>
  );
}

export default TableAthletes;
