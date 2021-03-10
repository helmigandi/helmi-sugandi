const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/");
const port = process.env.PORT || 4001;

mongoose.connect("mongodb://localhost:27017/helmi_sugandi_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, () => {
  console.log(`user-service running at http://localhost:${port}`);
});
