import TableAthletes from '@/components/table/TableAthletes';
import H2 from '@/components/ui/H2';

import { getAthletes } from '@/actions/athlete';

async function AthletesPage() {
  const athletes = await getAthletes();

  return (
    <>
      <H2>Athletes</H2>
      <TableAthletes athletes={athletes} />
    </>
  );
}

export default AthletesPage;
