import Link from 'next/link';

import H3 from '@/components/ui/H3';
import Paper from '@/components/ui/Paper';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table';

import { getEventSubmissions } from '@/actions/event';

import { Event } from '@/types/types';

async function EventBox({ event }: { event: Event }) {
  const submissions = await getEventSubmissions(event.id.toString());

  return (
    <Paper key={event.id}>
      <H3>{event.name}</H3>

      {submissions.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[200px]'>Name</TableHead>
              <TableHead>Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => {
              return (
                <TableRow key={submission.id}>
                  <TableCell>
                    <Link href={`/athlete/${submission.athlete_id}`}>
                      {submission.athlete.first_name} {submission.athlete.last_name}
                    </Link>
                  </TableCell>
                  <TableCell>{submission.result}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <p>No results found.</p>
      )}
    </Paper>
  );
}

export default EventBox;
