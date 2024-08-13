const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

main().then(() => { console.log("connection successful") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}

// let chart1 = new Chat({
//     from: "nabin",
//     to: "rahul",
//     message: "Hi rahul",
//     created_at: new Date()
// })

let chats = ([
    {
        from: "nabin",
        to: "rahul",
        message: "Hi rahul",
        created_at: new Date()
    },
    {
        from: "hemant",
        to: "sairaj",
        message: "how are you?",
        created_at: new Date()
    },
    {
        from: "sairaj",
        to: "hemant",
        message: "fine and you?",
        created_at: new Date()
    },
    {
        from: "sairaj",
        to: "hemant",
        message: "fine, is your batchers completed",
        created_at: new Date()
    },
    {
        from: "adyatan",
        to: "sairaj",
        message: "is task complete sairaj",
        created_at: new Date()
    },
    {
        from: "sairaj",
        to: "adyatan",
        message: "yahh, completed",
        created_at: new Date()
    },
])


Chat.insertMany(chats)