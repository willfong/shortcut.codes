const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.redirect("https://github.com/willfong/shortcut.codes");
});

app.get("/:username/:file", async (req, res, next) => {
    const {username, file} = req.params;
    const url = `https://raw.githubusercontent.com/${username}/shortcut.codes/master/${file}`;
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch(err) {
        if (err.response.status === 404) {
            res.status(404).send(`404: NOT FOUND - ${url}`);
        } else {
            next(err)
        }
    }
});

app.use(function(req, res) {
    res.status(404).send("404: Page Not Found");
});

app.use(function(error, req, res, next) {
    console.log(error);
    res.status(500).send("500: Internal Server Error");
});

app.listen(port, () => {
    console.log(`Service started on port: ${port}`);
});
