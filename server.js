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

app.post('/update-file', (req, res) => {
    const data = req.body;

    fs.writeFile("./data.json", JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to update file' });
        }
        res.status(200).json({ message: 'File updated successfully' });
    });
});