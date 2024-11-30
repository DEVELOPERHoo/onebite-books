import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return <h1>인덱스</h1>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
//자바스크립트의 함수는 모두 객체 이므로 매서드를 추가할 수 있다.
