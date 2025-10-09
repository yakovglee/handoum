interface TypographyLargeProps {
  children: React.ReactNode;
}

export function TypographyLarge({ children }: TypographyLargeProps) {
  return (
    <div className="text-lg font-semibold px-4 sticky top-0 bg-card p-2 max-h-[30vh] overflow-y-auto rounded-md shadow-sm">
      {children}
    </div>
  );
}
