import type { ServerLoadEvent } from "@sveltejs/kit";

export const load = (e : ServerLoadEvent) =>
{
    console.log(e);

}