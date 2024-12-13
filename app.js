const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const port = 9000;
const ConnectDb = require("./db/connect");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await ConnectDb(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server listning at : ${port} `));
  } catch (err) {
    console.log(err);
  }
};

start();
