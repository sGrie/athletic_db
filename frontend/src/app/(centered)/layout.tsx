function CenteredLayout({ children }: { children: React.ReactNode }) {
  return <div className='max-w[1400px] m-auto w-full flex flex-col'>{children}</div>;
}

export default CenteredLayout;
