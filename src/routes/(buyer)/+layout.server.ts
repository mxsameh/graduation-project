
export const load = async (event) =>
{
    const user = event.locals.user || null
    return {user}
}
