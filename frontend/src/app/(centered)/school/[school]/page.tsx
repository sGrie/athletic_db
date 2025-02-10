import NotFound from '@/components/NotFound';

import { getSchool } from '@/actions/school';

async function SchoolPage({ params }: { params: Promise<{ school: string }> }) {
  const schoolId = (await params).school;

  const school = await getSchool(schoolId);
  if (!school) {
    return <NotFound />;
  }

  return <p>{schoolId}</p>;
}

export default SchoolPage;
