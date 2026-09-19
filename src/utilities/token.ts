"use server"


import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function getMyToken() {
    const tok = (await cookies()).get("next-auth.session-token")?.value
    
    const token = await decode({
        token : tok,
        secret : process.env.NEXTAUTH_SECRET!
    })
    
    return token?.token
    
}