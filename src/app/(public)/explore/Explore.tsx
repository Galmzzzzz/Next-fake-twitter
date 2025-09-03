'use client';

import { useSearchParams } from "next/navigation";

export function Explore(){
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')
// http://localhost:3000/explore?tag=asdf
    return(
        <div>explore by #{tag}</div>
    )
}