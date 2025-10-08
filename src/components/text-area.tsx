import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithButton() {
  return (
    <div className="flex flex-col h-full gap-3 px-4">
      <Textarea placeholder="Type your message here." />
      <div className="flex justify-end">
        <Button className="w-fit">Send message</Button>
      </div>
    </div>
  );
}
