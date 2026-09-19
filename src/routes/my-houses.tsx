import { createFileRoute } from "@tanstack/react-router";
import { MyHouseList } from "@/components/MyHouseList/MyHouseList";

export const Route = createFileRoute("/my-houses")({
  component: MyHouseList,
});