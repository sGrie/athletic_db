import Link from 'next/link';
import { Pencil, Plus, Trash } from 'lucide-react';

import DialogAthlete from '@/components/dialog/DialogAthlete';
import { Button } from '@/components/ui/Button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table';

import { getAthletes } from '@/actions/athlete';

async function AdminSectionAthletes() {
  const athletes = await getAthletes();

  return (
    <>
      <DialogAthlete mode='create'>
        <Button className='mb-4'>
          <Plus />
          New Athlete
        </Button>
      </DialogAthlete>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[200px]'>Name</TableHead>
            <TableHead>School</TableHead>
            <TableHead className='w-0'>Actions</TableHead>
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
                <TableCell className='flex justify-end gap-2'>
                  <Button size='icon-sm' variant='ghost'>
                    <Pencil />
                  </Button>
                  <Button size='icon-sm' variant='destructive'>
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default AdminSectionAthletes;
