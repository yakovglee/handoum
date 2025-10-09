import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Item,
  ItemActions,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { useSearchStore } from "@/store/search";
import type { Data } from "@/utils/types";

interface WordCardProps {
  item: Data;
}
function WordCard({ item }: WordCardProps) {
  const setSearchFromQuery = useSearchStore((s) => s.setSearchFromQuery);

  return (
    <Card className="@container/card" onClick={() => setSearchFromQuery(item.word.surface)}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {item.word.surface}
        </CardTitle>
        <CardAction>
          <Badge variant="outline">{item.word.pos}</Badge>
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
                <Badge variant="outline">{item.pos}</Badge>
              </ItemActions>
            </ItemHeader>
            <ItemSeparator />
          </Item>
        ))}
    </Card>
  );
}

export default WordCard;
