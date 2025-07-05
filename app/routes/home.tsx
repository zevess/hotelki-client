import { Welcome } from "~/pages/welcome";
import type { Route } from "./+types/home";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Главная" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
