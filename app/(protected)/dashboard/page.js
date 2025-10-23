"use client";

import { useRouter } from "next/navigation";

export default function dashboard(){
    const route= useRouter();
    return(
        <h1>Hello from Dashboard</h1>
    )
}