import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader, SendHorizontal, X } from "lucide-react";
import { useTextStore } from "@/store/text";

export function TextareaWithButton() {
  const { text, setText, fetchParsedData, loading } = useTextStore();
  const onSubmit = () => fetchParsedData();

  return (
    <div className="flex flex-col h-full gap-3 px-4">
      <div className="relative">
        <Textarea
          placeholder="Type text to analyze..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="pr-10"
        />

        {text && (
          <X
            size={18}
            onClick={() => setText("")}
            className="absolute right-3 top-3"
          />
        )}
      </div>

      <div className="flex justify-end">
        <Button className="w-fit" onClick={onSubmit} disabled={!text.trim()}>
          {loading ? (
            <>
              Analyzing <Loader className="animate-spin" />
            </>
          ) : (
            <>
              Analyze <SendHorizontal className="ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
