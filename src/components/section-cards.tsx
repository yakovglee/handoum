import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

import type { Data } from "@/utils/types";

interface SectionCardsProps {
  data: Data[];
}

export function SectionCards({ data }: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/70 *:data-[slot=card]:to-secondary/30 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {data.map((item, index) => (
        <Card key={index} className="@container/card">
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
              <>
                <Item key={index} className="px-6">
                  <ItemHeader>
                    <ItemTitle className="text-md tabular-nums @[250px]/card:text-3xl">{item.lemma}</ItemTitle>
                    <ItemActions>
                      <Badge variant="outline">{item.pos}</Badge>
                    </ItemActions>
                  </ItemHeader>
                  <ItemSeparator />
                </Item>
              </>
            ))}
        </Card>
      ))}
    </div>
  );
}
