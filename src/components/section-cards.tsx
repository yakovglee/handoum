import type { Data } from "@/utils/types";
import WordCard from "./word-card";

interface SectionCardsProps {
  data: Data[];
}

export function SectionCards({ data }: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/70 *:data-[slot=card]:to-secondary/30 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {data.map((item, index) => (
        <WordCard key={index} item={item} />
      ))}
    </div>
  );
}
