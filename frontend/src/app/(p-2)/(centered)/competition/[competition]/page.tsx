import NotFound from '@/components/NotFound';
import H2 from '@/components/ui/H2';

import { getCompetition } from '@/actions/competition';

async function CompetitionPage({ params }: { params: Promise<{ competition: string }> }) {
  const competitionId = (await params).competition;

  const competition = await getCompetition(competitionId);
  if (!competition) {
    return <NotFound />;
  }

  return (
    <>
      <H2>{competition.name}</H2>
    </>
  );
}

export default CompetitionPage;
