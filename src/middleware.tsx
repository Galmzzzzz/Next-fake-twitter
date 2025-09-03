import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest){
    console.log('middleware here')
    return NextResponse.next()
    
}

export const config = {
    matcher: ['/profile-fake:path*']
}