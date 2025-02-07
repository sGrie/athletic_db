async function EventPage({ params }: { params: { event: string } }) {
  const event = (await params).event;

  return <p>{event}</p>;
}

export default EventPage;
