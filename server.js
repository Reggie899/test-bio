const express = require("express");
const cors = require("cors");
const app = express();


app.use(
  cors({
    origin: "*",
  })
);

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Server is working!");
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`it's alive on ${PORT}`));
