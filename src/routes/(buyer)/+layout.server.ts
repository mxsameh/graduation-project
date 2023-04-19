import type { ServerLoadEvent } from "@sveltejs/kit"

export const load = async (event : ServerLoadEvent) =>
{
    const user = event.locals.user || null
    return {user}
}
