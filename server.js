const express = require("express");
const cors = require("cors");
const Buffer = require("buffer");

const port = 3000;
const app = express();
const server = require("http").Server(app);

app.use(cors());
app.use(express.static("./build"));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
