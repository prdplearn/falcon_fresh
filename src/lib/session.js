import "server-only"
import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)


// Encoder 

export const encrypt = async (payload) => {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey);
};

// Decoder 

export const decrypt = async (session) => {
    try {
        // Check if the session token is present
        if (!session) {
            throw new Error("Session token is missing.");
        }

        // Verify and decode the JWT using the secret key
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ["HS256"] });

        // Return the payload (the user data should be here)
        return payload;
    } catch (error) {
        // Log any errors during decryption or verification
        console.log("Failed to verify session:", error.message);

        // Optionally, throw an error or return a default response
        throw new Error("Invalid session or token.");
    }
};

// Create a Session 

export const createSession = async (userId) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days expiration
    const session = await encrypt({ userId, expiresAt: expiresAt.toISOString() });
    const cookieStore = await cookies();

    cookieStore.set("Session", session, {
        httpOnly: true,
        secure: true, // Use `secure` only in production
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });
};
