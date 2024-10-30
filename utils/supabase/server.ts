"user server"

import { CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "types_db";

export const createServerSupabaseClient = async (
    cookieStore: ReturnType<typeof cookies> = cookies(),
    admin: boolean = false
) => {
    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        admin  
            ? process.env.NEXT_SUPABASE_SERVICE_ROLE!
            : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string){
                    return (cookieStore as any).get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                       (cookieStore as any).set({name, value, ...options})
                    } catch (error) {
                        
                    }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        (cookieStore as any).set({name, value: "", ...options})
                    } catch (error) {
                        
                    }
                }
            }
        }
    )
}

export const createServerSupabaseAdminClient = async (cookieStore: ReturnType<typeof cookies> = cookies()) => {
    return createServerSupabaseClient(cookieStore, true)
}