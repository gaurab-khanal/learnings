// write a to create a user table in the database using pg library

import { Client } from "pg";

export const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
})

export const connectDb = async () => {
    try {
        await client.connect()
        console.log("Connected to the database")
    } catch (err) {
        console.log("Error connecting to the database", err)
    }
}

