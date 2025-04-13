import NotFound from '@/components/NotFound';
import ProfileCountry from '@/components/profile/ProfileCountry';
import H2 from '@/components/ui/H2';
import H3 from '@/components/ui/H3';
import Paper from '@/components/ui/Paper';

import { getSchool, getSchoolAthletes, getSchoolTeams } from '@/actions/school';

async function SchoolPage({ params }: { params: Promise<{ school: string }> }) {
  const schoolId = (await params).school;

  const school = await getSchool(schoolId);
  if (!school) {
    return <NotFound />;
  }

  const teams = await getSchoolTeams(schoolId);
  const athletes = await getSchoolAthletes(schoolId);

  return (
    <>
      <div className='flex gap-4'>
        <img
          src={school.profile_picture}
          alt={school.name}
          width={500}
          height={500}
          className='object-fill w-[100px] h-[100px] rounded-3xl'
        />
        <div className='flex flex-col justify-around'>
          <H2>{school.name}</H2>
          <ProfileCountry country='US' />
        </div>
      </div>
      <div className='flex flex-wrap mt-2'>
        <div className='basis-1/2 p-1 min-w-[300px] flex-grow'>
          <Paper className='h-full'>
            <H3>Teams</H3>
            {teams.length > 0 ? (
              <ul className='list-disc list-inside'>
                {teams.map((team) => {
                  return (
                    <li key={team.id}>
                      <a href={`/school/${schoolId}/${team.id}`}>{team.name}</a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No teams found.</p>
            )}
          </Paper>
        </div>
        <div className='basis-1/2 p-1 min-w-[300px] flex-grow'>
          <Paper className='h-full'>
            <H3>Athletes</H3>
            {athletes.length > 0 ? (
              <ul className='list-disc list-inside'>
                {athletes.map((athlete) => {
                  return (
                    <li key={athlete.id}>
                      <a href={`/athlete/${athlete.id}`}>
                        {athlete.first_name} {athlete.last_name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No athletes found.</p>
            )}
          </Paper>
        </div>
        <div className='basis-1/2 p-1 min-w-[300px] flex-grow'>
          <Paper>
            <H3>Records</H3>
            <p>Testing.</p>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default SchoolPage;
