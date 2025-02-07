async function SchoolPage({ params }: { params: { school: string } }) {
  const school = (await params).school;

  return <p>{school}</p>;
}

export default SchoolPage;
