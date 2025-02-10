function CenteredLayout({ children }: { children: React.ReactNode }) {
  return <div className='max-w-[1400px] m-auto w-full flex-grow p-2'>{children}</div>;
}

export default CenteredLayout;
