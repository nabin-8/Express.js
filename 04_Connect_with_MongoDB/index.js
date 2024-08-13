const express = require("express")
const app = express();
const path = require("path")
const PORT = 8000
const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main().then(() => { console.log("connection successful") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}


// index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats })

})
app.get("/", (req, res) => {
    res.send("working")
})



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);

})