import Image from 'next/image';
import Link from 'next/link';

import NotFound from '@/components/NotFound';
import ProfileHeader from '@/components/profile/ProfileHeader';
import H2 from '@/components/ui/H2';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table';

import { getAthlete } from '@/actions/athlete';
import { getResultsByAthlete } from '@/actions/result';

async function AthletePage({ params }: { params: Promise<{ athlete: string }> }) {
  const athleteId = (await params).athlete;

  const athlete = await getAthlete(athleteId);
  if (!athlete) {
    return <NotFound />;
  }

  const results = await getResultsByAthlete(athleteId);

  return (
    <div>
      <Image
        src={`https://picsum.photos/2000/500?random=${Math.round(Math.random() * 101)}`}
        alt='User Banner'
        width={2000}
        height={500}
        className='object-cover min-h-[150px] max-h-[250px] w-full'
      />
      <div className='p-2 flex flex-col gap-8 max-w-[1000px] m-auto'>
        <ProfileHeader athlete={athlete} />
        <div>
          <H2>Results</H2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[200px]'>Event</TableHead>
                <TableHead>Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => {
                return (
                  <TableRow key={result.id}>
                    <TableCell>
                      <Link href={`/competition/${result.event.comp_id}`}>{result.event.name}</Link>
                    </TableCell>
                    <TableCell>{result.result}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div>
          <H2>Teams</H2>
          <ul className='list-disc list-inside'>
            <li>
              <Link href={`/school/${athlete.team.school_id}/${athlete.team.id}`}>
                {athlete.team.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AthletePage;
