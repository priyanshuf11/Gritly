"use client";

import { useRouter } from "next/navigation";

export default function tasks(){
    const route= useRouter();
    return(
        <h1>Hello from Tasks</h1>
    )
}