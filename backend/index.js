import express from "express";
import cors from "cors";
// import mongoose from "mongoose";
// import mysql from "mysql";
import { MongoClient } from "mongodb";
// const mongoose = require('mongoose');
import bodyParser from "body-parser";

import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 7900;

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://127.0.0.1:27017/blackoffer";

// const dbName = "blackoffer";

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Database Name
const dbName = "laxical"; // Update this with your database name

// Collection Name
const collectionName = "register"; // Update this with your collection name

async function main() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB client
    await client.connect();
    console.log("Connected to MongoDB");
    // Select the database
    const database = client.db(dbName);

    // Select the collection
    const collection = database.collection(collectionName);

    // Find documents in the collection
    const cursor = collection.find({}); // You can pass a query object here if you want to filter results

    // Iterate over the cursor and print each document to the console
    await cursor.forEach((document) => {
      // console.log(document);
    });
  } finally {
    // Close the client
    await client.close();
  }
}
// Call the main function
main().catch(console.error);
// app.get("/api/data", async (req, res) => {
//   try {
//     const database = client.db(dbName);
//     const collection = database.collection(collectionName);
//     const data = await collection.find({}).toArray();
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
app.post("/api/data", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Connect to the MongoDB server
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if the user already exists in the database
    const existingUser = await collection.findOne({ email: username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await collection.insertOne({ email: username, password: password });
    res.status(200).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  } finally {
    // Close the connection
    await client.close();
  }
});
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Connect to the MongoDB server
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    // Find the user in the database
    const user = await collection.findOne({ email: username });
    const pass = await collection.findOne({ password: password });
    if (!user || !password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    // If username and password are correct, create a JWT token
    const token = jwt.sign({ username }, "jsadlkjhfwery39e8udhsl");
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  } finally {
    // Close the connection
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
