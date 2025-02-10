async function CompetitionPage({ params }: { params: Promise<{ competition: string }> }) {
  const competition = (await params).competition;

  return <p>{competition}</p>;
}

export default CompetitionPage;
