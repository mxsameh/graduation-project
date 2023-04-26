import { redirect, type ServerLoad } from "@sveltejs/kit";

export const load : ServerLoad  = (e) =>
{
    e.cookies.delete("user token")
    throw redirect(307,'/login')
}