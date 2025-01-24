import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)


// Encoder 

export const encrypt = async (payload) => {

    return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(encodedKey)
}

// Decoder 

export const decrypt = async (session) => {
    try {
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ["HS256"] })
        return payload
    } catch (error) {
        console.log("Failed to verify Session", error);
    }
}

// Create a Session 

export const createSession = async (userId) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({userId,expiresAt})
    const cookieStore = await cookies()

    cookieStore.set("Session", session, {
        httpOnly:true,
        secure:true,
        expires:expiresAt,
        sameSite:"lax",
        path:"/"
    })
}