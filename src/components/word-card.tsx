import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Item,
  ItemActions,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { filterWordsByPos } from "@/lib/utils";
import { useSearchStore } from "@/store/search";
import { useTextStore } from "@/store/text";
import type { Data } from "@/utils/types";

interface WordCardProps {
  item: Data;
}
function WordCard({ item }: WordCardProps) {
  const setSearchFromQuery = useSearchStore((s) => s.setSearchFromQuery);
  const setSearchPos = useSearchStore((s) => s.setSearchPos);
  const setSearchWords = useSearchStore((s) => s.setSearchWords);
  const { data } = useTextStore();

  const handlePosClick = (pos: string) => {
    const words = filterWordsByPos(data, pos);
    setSearchPos(pos);
    setSearchWords(words);
  };

  return (
    <Card
      className="@container/card"
      onClick={() => setSearchFromQuery(item.word.surface)}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {item.word.surface}
        </CardTitle>
        <CardAction>
          <Badge
            variant="outline"
            className="z-10"
            onClick={() => handlePosClick(item.word.pos)}
          >
            {item.word.pos_trans}
          </Badge>
        </CardAction>
      </CardHeader>

      {item.parsed_expression &&
        item.parsed_expression?.map((item, index) => (
          <Item key={index} className="px-6">
            <ItemHeader>
              <ItemTitle className="text-md tabular-nums @[250px]/card:text-3xl">
                {item.lemma}
              </ItemTitle>
              <ItemActions>
                <Badge
                  variant="outline"
                  className="z-10"
                  onClick={() => handlePosClick(item.pos)}
                >
                  {item.pos_trans}
                </Badge>
              </ItemActions>
            </ItemHeader>
            <ItemSeparator />
          </Item>
        ))}
    </Card>
  );
}

export default WordCard;
