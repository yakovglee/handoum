import Highlighter from "react-highlight-words";
import { useSearchStore } from "@/store/search";

interface TypographyLargeProps {
  children: string; 
}

export function TypographyLarge({ children }: TypographyLargeProps) {
  const searchWords = useSearchStore((s) => s.searchWords);

  return (
    <div className="text-lg font-semibold px-4 sticky top-0 bg-card p-2 max-h-[30vh] overflow-y-auto rounded-md shadow-sm">
      <Highlighter
        highlightClassName="bg-yellow-200"
        searchWords={searchWords}
        autoEscape
        textToHighlight={children}
      />
    </div>
  );
}
