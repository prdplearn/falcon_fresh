import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        storeName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        cpassword: {
            type: String,
        },
        cityName: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);



export const Restaurant  = mongoose.models?.Restaurant || mongoose.model("Restaurant", restaurantSchema);

