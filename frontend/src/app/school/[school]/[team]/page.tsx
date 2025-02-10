async function TeamPage({ params }: { params: Promise<{ school: string; team: string }> }) {
  const school = (await params).school;
  const team = (await params).team;

  return (
    <p>
      {school}/{team}
    </p>
  );
}

export default TeamPage;
