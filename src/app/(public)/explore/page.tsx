import { Suspense } from "react"
import { Explore } from "./Explore"

export default function ExplorePage(){
    return (<Suspense>
                <Explore/>
            </Suspense>
)}