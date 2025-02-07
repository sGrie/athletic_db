async function TeamPage({ params }: { params: { team: string } }) {
  const team = (await params).team;

  return <p>{team}</p>;
}

export default TeamPage;
