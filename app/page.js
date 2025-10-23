"use client";
import Image from "next/image";
import Heatmapb from '@/app/components/Heatmapa.jsx'
import { dummyData } from "@/app/components/dummyData";

import { useRouter } from "next/navigation";


export default function Home() {
  const route = useRouter();
  return (
    // <div className="bg-white w-full flex items-center justify-center h-screen">
    //   <Heatmapb data={dummyData}/>
    // </div>
    <div className="bg-blue-500 w-full">
      <h1>Focus Flow</h1>
      <button
        onClick={()=> route.push("/tasks")}
        className="bg-green-500 rounded-md px-4 py-2 mx-2"
      >
        to tasks
      </button>
      <button
        onClick={()=> route.push("/dashboard")}
        className="bg-green-500 rounded-md px-4 py-2 mx-2"
      >
        to dashboard
      </button>
      <button
        onClick={()=> route.push("/kanban")}
        className="bg-green-500 rounded-md px-4 py-2 mx-2"
      >
        to Kanban
      </button>
    </div>
      );
}
