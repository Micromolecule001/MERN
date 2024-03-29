import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/auth.js";

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;


// Middlewares
app.use(cors()); // sending requests from different ip addresses
app.use(express.json()); // for parsing json

// Routes
app.use('/api/auth', authRouter)

app.listen(5000, () => console.log("Server Running on port 5000"))

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}.4mtm1l7.mongodb.net/?retryWrites=true&w=majority`
        )

        app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
    } catch (error) {
        console.log("ERROR SERVER CONNETCTION: ", error);
    }
}

start();