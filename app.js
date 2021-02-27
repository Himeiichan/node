const functions = require("./functions")

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","hbs");

app.use("/assets", express.static(path.join(__dirname,"./assets")));
app.use("/js",express.static(path.join(__dirname,"./js")));

app.get("/", function (req,res){
    res.render("index", {
        pageTitle: "zajęcia",
        subTitle: "node",
        subsubTitle: functions.someText,
        subsubsubTitle: functions.someFunction(),
    })
})

app.get("/about", function (req,res){
    res.render("Strona o mnie", {
        mainName: "agnieszka"
    })
})
app.get("/about/marcin", function (req,res){
    res.send("Strona o Marcinie ")
})

app.listen(port,(err) => {
    if (err) { return console.log(`Wystąpił błąd: ${err}`)}
    console.log(`Aplikacja działa na porcie ${port}`)
});