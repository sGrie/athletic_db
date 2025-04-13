import Link from 'next/link';
import { School } from 'lucide-react';

import NotFound from '@/components/NotFound';
import TextPrefixIcon from '@/components/TextPrefixIcon';
import H2 from '@/components/ui/H2';
import H3 from '@/components/ui/H3';

import { getTeam, getTeamAthletes, getTeamSchool } from '@/actions/team';

async function TeamPage({ params }: { params: Promise<{ team: string }> }) {
  const teamId = (await params).team;

  const team = await getTeam(teamId);
  if (!team) {
    return <NotFound />;
  }

  const school = await getTeamSchool(teamId);
  const athletes = await getTeamAthletes(teamId);

  return (
    <div>
      <H2>{team.name}</H2>
      <TextPrefixIcon icon={<School width={16} />}>
        <Link href={`/school/${school?.id}`}>{school?.name || 'No school.'}</Link>
      </TextPrefixIcon>

      <div className='mt-4'>
        <H3>Athletes</H3>
        <ul className='list-disc list-inside'>
          {athletes.length > 0 ? (
            athletes.map((athlete) => {
              return (
                <li key={athlete.id}>
                  <a href={`/athlete/${athlete.id}`}>
                    {athlete.first_name} {athlete.last_name}
                  </a>
                </li>
              );
            })
          ) : (
            <p>No athletes found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TeamPage;
