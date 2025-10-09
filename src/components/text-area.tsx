import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";

export function TextareaWithButton() {
  return (
    <div className="flex flex-col h-full gap-3 px-4">
      <Textarea placeholder="Type text to analyze..." />
      <div className="flex justify-end">
        <Button className="w-fit">
          Analyze <SendHorizontal />
        </Button>
      </div>
    </div>
  );
}
