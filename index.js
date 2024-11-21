const express = require('express');
const app = express();
const port = 3000;
const expressHbs = require("express-handlebars");

app.use(express.static(__dirname + "/style" ))
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.engine(
    "hbs",
    expressHbs.engine ({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout"
    })
);

app.set ("view engine", "hbs");

app.get("/", (req, res) => res.render("login", {title: "Login"}));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))