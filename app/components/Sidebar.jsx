"use client";
import React from 'react'
import { useRouter } from "next/navigation";

const Sidebar = () => {
    const route = useRouter();
    return (
        <div className='bg-amber-300 flex flex-col gap-2'>
            <h1>this is sidebar</h1>

            <button
                onClick={() => route.push("/tasks")}
                className="bg-green-500 rounded-md px-4 py-2 mx-2"
            >
                to tasks
            </button>
            <button
                onClick={() => route.push("/dashboard")}
                className="bg-green-500 rounded-md px-4 py-2 mx-2"
            >
                to dashboard
            </button>
            <button
                onClick={() => route.push("/kanban")}
                className="bg-green-500 rounded-md px-4 py-2 mx-2"
            >
                to kanban
            </button>
        </div>
    )
}

export default Sidebar
