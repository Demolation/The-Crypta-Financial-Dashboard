//Import
const express = require("express");
const cors = require("cors");

//Initilization
const app = express();
const port = 5001;

//The Middleware(aka the Assembly Line)
app.use(cors());
app.use(express.json())

//The Route (the API endpoint)
app.get("/api/status", (req, res) => {
    res.json({messege: "The Crypta backend engine works properly!"})
});

//The Listener
app.listen(port, () => {
    console.log(`Crypta API listening on port ${port} `)
});
