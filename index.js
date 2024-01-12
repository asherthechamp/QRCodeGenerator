const express = require("express")
const qrcode = require("qrcode")

const app = express()
app.use(express.json())
app.get("/", async (req, res) => {
    qrcode.toString("Hello World.", {type: "terminal"}, (err, url) => {
        console.log(url)
    })
    // const { size, data, encoding } = req.body
    // const url = `https://chart.googleapis.com/chart?chs=${size}&cht=qr&chl=${data}&choe=${encoding}`
    // await fetch(url).then(response => response.json()).then(data => console.log(data))
})

app.listen(5000, () => console.log("Server running on port 5000"))

module.exports = app