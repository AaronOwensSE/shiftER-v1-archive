/*
This file is an informal mockup of backend API endpoints. It is edited for each test and is not an
automated test set.
*/

// =================================================================================================
// External Dependencies
// =================================================================================================
import express from "express";

// =================================================================================================
// Commands
// =================================================================================================
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("GET: /");
    res.send({ ok: true, message: "GET: /" });
});

app.post("/create-account", (req, res) => {
    console.log("POST: /create-account");
    res.send({ ok: true });

    /*
    res.send({ ok: false, message: "User ID already exists." });
    */

    /*
    res.send({ ok: false, message: "Some other error." });
    */
});

app.listen(port, () => {
    console.log(`Dummy backend listening on port ${port} . . .`);
});
