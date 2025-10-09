import { SectionCards } from "./components/section-cards";
import { DataTableDemo } from "./components/table";
import { TextareaWithButton } from "./components/text-area";
import { TypographyLarge } from "./components/typography";
import { useTextStore } from "./store/text";

function App() {
  const { text, data, loading, error } = useTextStore();
  return (
    <div className="flex flex-1 flex-col relative">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <TextareaWithButton />
          <TypographyLarge>
            {text ? `${text}` : "아버지가방에들어가신다"}
          </TypographyLarge>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          {data && data.length > 0 ? (
            <>
              <SectionCards data={data} />
              <DataTableDemo data={data} />
            </>
          ) : (
            !loading && (
              <p className="text-sm opacity-70">
                {text ? "No results." : "Enter text above and click Analyze."}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
