'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDate } from 'date-fns';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/Collapsible';
import Paper from '@/components/ui/Paper';

import { Competition } from '@/types/types';

function CompetitionBox({ competition }: { competition: Competition }) {
  const [eventsIsOpen, setEventsIsOpen] = useState(false);

  return (
    <Paper className='flex w-full flex-wrap'>
      <div className='flex-grow basis-1/2 min-w-[250px]'>
        <p className='font-medium text-xl'>
          <Link href={`/competition/${competition.id}`}>{competition.name}</Link>
        </p>

        <Collapsible open={eventsIsOpen} onOpenChange={setEventsIsOpen}>
          <CollapsibleTrigger asChild>
            <Button className='mt-2'>
              <ChevronDown />
              {eventsIsOpen ? 'Hide' : 'Show'} Events
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className='pt-2'>
            <ul className='list-disc list-inside'>
              {competition.events.map((event) => {
                return <li key={event.id}>{event.name}</li>;
              })}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className='flex-grow basis-1/2 min-w-[250px] flex flex-col gap-4'>
        <p>{formatDate(competition.date, 'MMM dd')}</p>
        <p>{competition.event_location}</p>
      </div>
    </Paper>
  );
}

export default CompetitionBox;
