interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`pill-badge ${className}`}>
      {children}
    </span>
  );
}
