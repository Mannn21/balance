"use client"

import {redirect} from "next/navigation"

export default function Dashboard() {
    if (typeof window !== 'undefined') {
        const balanceToken = window.localStorage.getItem("balanceToken")
        if (!balanceToken) {
            redirect("/")
        }
    }
    
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}