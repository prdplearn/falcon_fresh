import connectToDatabase from "@/config/dbConfig";
import { Restaurant } from "@/models/restaurant.model";
import { User } from "@/models/users.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase()
        const data = await User.find()
        console.log(data);
        return NextResponse.json({ result: data })

    } catch (error) {
        console.log(error);
    }
}



export async function POST(request) {
    let payload = await request.json()
    console.log(payload);
    await connectToDatabase()
    let restaurent = new User(payload)
    let result = await restaurent.save()
    return NextResponse.json({ result: result, success:true })
}