import NotFound from '@/components/NotFound';

import { getAthlete } from '@/actions/athlete';

async function AthletePage({ params }: { params: Promise<{ athlete: string }> }) {
  const athleteId = (await params).athlete;

  const athlete = await getAthlete(athleteId);
  if (!athlete) {
    return <NotFound />;
  }

  return <p>{athleteId}</p>;
}

export default AthletePage;
