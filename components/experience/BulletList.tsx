type BulletListProps = {
  items: readonly string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="mb-4 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span
            className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-primary"
            aria-hidden
          />
          <span className="text-on-surface/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}
