import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
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
        image: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        roles: {
            type: String,
        },
        department: {
            type: String,
        },
        about: {
            type: String,
        },
        coverImage: {
            type: String
        },
        country: {
            type: String
        },
        streetAddress: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        postalCode: {
            type: String
        },
        phone: {
            type: String
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



export const User = mongoose.models?.User || mongoose.model("User", userSchema);

