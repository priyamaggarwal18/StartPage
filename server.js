const express = require("express");
const app = express()
const fs = require("fs");

app.use(express.static("./static"));
app.use(express.json())

app.listen(3001);

app.get("/getData", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    res.status(200).json(data);
})