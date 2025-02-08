const express = require("express");

const app = express();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello,world!",
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


module.exports = app;