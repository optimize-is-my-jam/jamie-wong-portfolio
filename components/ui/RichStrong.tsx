type RichStrongProps = {
  text: string;
};

/**
 * Renders `**segment**` as semantic strong emphasis (white) per stitch portfolio copy.
 */
export function RichStrong({ text }: RichStrongProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\*\*(.+)\*\*$/);
        if (m) {
          return (
            <strong key={i} className="text-white">
              {m[1]}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
