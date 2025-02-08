async function EventPage({ params }: { params: { competition: string; event: string } }) {
  const competition = (await params).competition;
  const event = (await params).event;

  return (
    <p>
      {competition}/{event}
    </p>
  );
}

export default EventPage;
