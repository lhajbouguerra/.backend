const experss = require('express');
const app = experss()
app.get("/test", (req, res) => {
    res.json({
        message:"jwk bh"
    })
})

app.listen(5000, () => {
    console.log("server is live...")
})