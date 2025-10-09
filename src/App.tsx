import { SectionCards } from "./components/section-cards";
import { DataTableDemo } from "./components/table";
import { TextareaWithButton } from "./components/text-area";
import { TypographyLarge } from "./components/typography";
import { useTextStore } from "./store/text";
import { data } from "./utils/response";

function App() {
  const { text } = useTextStore();
  return (
    <div className="flex flex-1 flex-col relative">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <TextareaWithButton />
          <TypographyLarge>
            {text ? `${text}` : "No text to analyze."}
          </TypographyLarge>

          <SectionCards data={data}/>

          <DataTableDemo data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
