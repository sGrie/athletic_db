async function SchoolPage({ params }: { params: Promise<{ school: string }> }) {
  const school = (await params).school;

  return <p>{school}</p>;
}

export default SchoolPage;
