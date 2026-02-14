const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// 🔥 Esto es lo importante
app.use(express.static(__dirname))

// 🔥 Ruta principal explícita
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

io.on("connection", (socket) => {
  console.log("User connected:", socket.id)
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})















