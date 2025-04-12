function Paper(props: React.ComponentPropsWithoutRef<'div'>) {
  const { children } = props;

  return (
    <div className={`rounded-xl border bg-card text-card-foreground shadow p-4 ${props.className}`}>
      {children}
    </div>
  );
}

export default Paper;
