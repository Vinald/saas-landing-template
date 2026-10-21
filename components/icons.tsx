type IconProps = { className?: string };

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M4 20V10M12 20V4M20 20v-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 3 4 6v6c0 4.5 3.2 7.9 8 9 4.8-1.1 8-4.5 8-9V6l-8-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PuzzleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M9 4h4v2a2 2 0 1 0 2 2v4h2a2 2 0 1 1 0 4h-2v2a2 2 0 1 1-2-2h-4v-2a2 2 0 1 0-2-2H3V8h2a2 2 0 1 0 2-2V4h2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const iconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  bolt: BoltIcon,
  chart: ChartIcon,
  shield: ShieldIcon,
  puzzle: PuzzleIcon,
};
