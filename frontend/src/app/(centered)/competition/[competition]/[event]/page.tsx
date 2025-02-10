import NotFound from '@/components/NotFound';

import { getEvent } from '@/actions/event';

async function EventPage({ params }: { params: Promise<{ competition: string; event: string }> }) {
  const competitionId = (await params).competition;
  const eventId = (await params).event;

  const event = await getEvent(competitionId, eventId);
  if (!event) {
    return <NotFound />;
  }

  return (
    <p>
      {competitionId}/{eventId}
    </p>
  );
}

export default EventPage;
