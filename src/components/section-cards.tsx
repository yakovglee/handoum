import type { Data } from "@/utils/types";
import WordCard from "./word-card";
import { Separator } from "@/components/ui/separator";
interface SectionCardsProps {
  data: Data[];
}

export function SectionCards({ data }: SectionCardsProps) {
  const grammar = [
    ...new Map(
      data.filter((d) => /^[JEX]/.test(d.word.pos)).map((d) => [d.word.pos, d])
    ).values(),
  ].sort((a, b) => a.word.pos.localeCompare(b.word.pos));

  const complicated = [
    ...new Map(
      data
        .filter((d) => d.word.entry_type != "*")
        .map((d) => [d.word.entry_type, d])
    ).values(),
  ].sort((a, b) => a.word.entry_type.localeCompare(b.word.entry_type));

  return (
    <div className="*:data-[slot=card]:from-primary/70 *:data-[slot=card]:to-secondary/30 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Separator className="my-4 bg-primary/30 @xl/main:col-span-2 @5xl/main:col-span-4" />
      {grammar.map((item, index) => (
        <WordCard key={index} item={item} />
      ))}
      <Separator className="my-4 bg-primary/30 @xl/main:col-span-2 @5xl/main:col-span-4" />
      {complicated.map((item, index) => (
        <WordCard key={index} item={item} />
      ))}
      <Separator className="my-4 bg-primary/30 @xl/main:col-span-2 @5xl/main:col-span-4" />
    </div>
  );
}
