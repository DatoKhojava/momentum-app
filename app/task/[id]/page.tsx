"use client"

import { useParams } from 'next/navigation'

export default function page() {
    const params = useParams()
    return (
        <div>
            <h1>Page of task by id: {params.id}</h1>
        </div>
    )
}
