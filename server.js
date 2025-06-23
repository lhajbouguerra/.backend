const experss = require('express');
const cors = require('cors')
const app = experss()
app.use(cors())
app.get("/test", (req, res) => {
    res.json({
        message: "jwk bh",
        status: 200
    })
})

app.listen(5000, () => {
    console.log("server is live...")
})