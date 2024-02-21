// Import required modules
const express = require("express");
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express application
const app = express();

// Define the port to listen on, using environment variable or default to 4000
const port = process.env.PORT || 4000;

// Define routes and their corresponding handlers
// Route for the homepage
app.get("/", (req, res) => {
    res.send("Hello world");
});

// Route for LinkedIn page
app.get("/linkedin", (req, res) => {
    res.send("Hello Linkedin");
});

// Route for Twitter page
app.get("/twitter", (req, res) => {
    res.send("<h1>This is Twitter Page</h1>");
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
