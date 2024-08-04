const express = require("express")
const app = express()
const path = require("path")
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'))

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json")
    const { username } = req.params
    const data = instaData[username]
    console.log(data);
    if (data) {

        res.render("instagram.ejs", { data })
    } else {
        res.render("error.ejs")

    }


})

app.get("/conditional/:age", (req, res) => {
    let { age } = req.params
    res.render("conditional.ejs", { age })
})

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs", { num: diceValue })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);

})