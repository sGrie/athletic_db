async function AthletePage({ params }: { params: { athlete: string } }) {
  const athlete = (await params).athlete;

  return <p>{athlete}</p>;
}

export default AthletePage;
