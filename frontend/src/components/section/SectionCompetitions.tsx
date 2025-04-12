import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import H2 from '@/components/ui/H2';

import { getCompetitions } from '@/actions/competition';

import CompetitionBox from '../CompetitionBox';

async function SectionCompetitions() {
  const competitions = await getCompetitions();
  competitions.splice(3);

  return (
    <div>
      <H2>Upcoming Competitions</H2>
      <div className='flex flex-col items-center justify-center gap-4 pt-2'>
        {competitions.map((competition) => {
          return <CompetitionBox competition={competition} key={competition.id} />;
        })}
        <Button asChild>
          <Link href='/competitions'>View all</Link>
        </Button>
      </div>
    </div>
  );
}

export default SectionCompetitions;
