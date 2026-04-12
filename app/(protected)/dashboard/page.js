"use client";

import Heatmap from "@/app/components/Heatmapa";
import { useRouter } from "next/navigation";
import { dummyData } from "@/app/components/dummyData";
export default function dashboard() {
  const data = dummyData;
  const route = useRouter();
  return (
    <>
      <h1>Hello from Dashboard</h1>
      <Heatmap data={dummyData} />
    </>

  )
}
