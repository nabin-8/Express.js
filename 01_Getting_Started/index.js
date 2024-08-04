const express = require("express")

const app = express();

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})

/*
app.use((req, res) => {
    // console.log(req);
    console.log("request received");
    // res.send("this is a basic response")

    // object response
    // res.send({
    //     name: "apple",
    //     color: "red"
    // })

    // html response
    res.send(`
            <h1>Fruits</h1>
            <ul>
                <li>apple</li>
                <li>orange</li>
            </ul>
        `)

})
*/

app.get("/", (req, res) => {
    res.send("you contacted root path")
})
// app.get("/apple", (req, res) => {
//     res.send("you contacted apple")
// })
// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path")
// })

// app.post("/", (req, res) => {
//     res.send("you send a post request to root ")
// })

// app.get("*", (req, res) => {
//     res.send("this path does not exist")
// })

// path parameter
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params
    console.log(req.params);

    res.send(`Username:${username} id:${id}`)
})

app.get("/search", (req, res) => {
    console.log(req.query);
    let { q } = req.query
    res.send(`Success query is ${q}`)

})

// search query
// http://localhost:8000/search?q=apple
// response
// Success query is apple