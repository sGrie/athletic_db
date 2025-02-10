import NotFound from '@/components/NotFound';

import { getCompetition } from '@/actions/competition';

async function CompetitionPage({ params }: { params: Promise<{ competition: string }> }) {
  const competitionId = (await params).competition;

  const competition = await getCompetition(competitionId);
  if (!competition) {
    return <NotFound />;
  }

  return <p>{competitionId}</p>;
}

export default CompetitionPage;
