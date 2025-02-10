import { cookies } from "next/headers";
import { decrypt } from "./session";



const getAuthUser = async () => {
    const cookieStore = await cookies()
    const session = cookieStore.get('Session')?.value;

    if (session) {
        const user = await decrypt(session)
        return user;
    }
}

export default getAuthUser