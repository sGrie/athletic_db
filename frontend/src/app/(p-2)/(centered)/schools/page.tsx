import TableSchools from '@/components/table/TableSchools';
import H2 from '@/components/ui/H2';

import { getSchools } from '@/actions/school';

async function SchoolsPage() {
  const schools = await getSchools();
  return (
    <>
      <H2>Schools</H2>
      <TableSchools schools={schools} />
    </>
  );
}

export default SchoolsPage;
