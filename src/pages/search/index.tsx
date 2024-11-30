import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();

  // 구조분해 할당 문법
  const { q } = router.query;

  return <h1>Search {q}</h1>;
}
