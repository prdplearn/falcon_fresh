import connectToDatabase from "@/config/dbConfig";
import { Restaurant } from "@/models/restaurant.model";
import { User } from "@/models/users.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase()
        const data = await Restaurant.find()
        console.log(data);
        return NextResponse.json({ result: data })

    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}



export async function POST(request) {
    try {
        let payload = await request.json()
        console.log(payload);
        await connectToDatabase()
        // Create and save the restaurant entry
        const restaurant = new Restaurant(payload);
        const result = await restaurant.save();
        return NextResponse.json({ success: true, data: result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }


}