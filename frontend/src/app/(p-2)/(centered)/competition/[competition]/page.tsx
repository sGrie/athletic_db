import { format } from 'date-fns';
import { Calendar, MapPin } from 'lucide-react';

import EventBox from '@/components/EventBox';
import NotFound from '@/components/NotFound';
import TextPrefixIcon from '@/components/TextPrefixIcon';
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
      <div className='mb-4 flex gap-4'>
        <TextPrefixIcon icon={<MapPin width={16} />}>
          <p>{competition.event_location}</p>
        </TextPrefixIcon>
        <TextPrefixIcon icon={<Calendar width={16} />}>
          <p>{format(competition.date, 'MMMM dd')}</p>
        </TextPrefixIcon>
      </div>

      <div className='flex flex-col gap-2'>
        {competition.events.map((event) => {
          return <EventBox event={event} key={event.id} />;
        })}
      </div>
    </>
  );
}

export default CompetitionPage;
