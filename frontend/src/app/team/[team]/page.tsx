import NotFound from '@/components/NotFound';

import { getTeam } from '@/actions/team';

async function TeamPage({ params }: { params: Promise<{ team: string }> }) {
  const teamId = (await params).team;

  const team = await getTeam(teamId);
  if (!team) {
    return <NotFound />;
  }

  return <p>{teamId}</p>;
}

export default TeamPage;
