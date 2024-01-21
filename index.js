const express = require("express");

const app = express();
app.get('/', (req, res) => {
    res.send("I am hosted")
})
app.listen(8912, () => {
  console.log("====================================");
  console.log("server is running on http:localhost:8912");
  console.log("====================================");
});
