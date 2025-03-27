function Paper({ children }: { children: React.ReactNode }) {
  return (
    <div className='rounded-xl border bg-card text-card-foreground shadow p-4'>{children}</div>
  );
}

export default Paper;
