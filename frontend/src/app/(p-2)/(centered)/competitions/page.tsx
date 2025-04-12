import CompetitionBox from '@/components/CompetitionBox';
import H2 from '@/components/ui/H2';

import { getCompetitions } from '@/actions/competition';

async function CompetitionsPage() {
  const competitions = await getCompetitions();

  return (
    <>
      <H2>Competitions</H2>
      <div className='flex flex-col gap-2 pt-2'>
        {competitions.map((competition) => {
          return <CompetitionBox competition={competition} key={competition.id} />;
        })}
      </div>
    </>
  );
}

export default CompetitionsPage;
