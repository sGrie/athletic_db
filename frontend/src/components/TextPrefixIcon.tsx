function TextPrefixIcon({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className='flex items-center gap-2'>
      {icon}
      {children}
    </div>
  );
}

export default TextPrefixIcon;
