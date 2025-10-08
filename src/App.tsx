import { SectionCards } from "./components/section-cards";
import { DataTableDemo } from "./components/table";
import { TextareaWithButton } from "./components/text-area";
import { TypographyLarge } from "./components/typography";
import { data } from "./utils/response";

function App() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <TextareaWithButton />
          <TypographyLarge>
            법률상으로는 무궁화를 국화로 인정할 근거가 없으나 행정안전부
            홈페이지에서 한국의 국화라고 명시해 두었고 1963년 제정된
            나라문장에서 무궁화 형태가 반영되는 등 보편적으로 이 꽃이 상징적인
            꽃으로 인식된다. 법률상 기준이 없다 보니 무궁화의 수많은 품종 중
            어떤 것인지는 모호하다. 1991년 산림청이 나라꽃의 범위를 '단심을 지닌
            홑꽃'으로 제한한 이력이 있다. 기본꽃잎 5장의 중심부에 단심과 우뚝
            솟은 수술통을 갖춘 형태를 말한다. 꽃잎의 색에 대해서는 하나로 정하지
            않고 '백단심계(흰 꽃잎)' 또는 '홍단심계(분홍 꽃잎)'라고 기술했다.
          </TypographyLarge>

          <SectionCards />

          <DataTableDemo data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
