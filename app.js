const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const port = 6969;

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const DB =
  "mongodb+srv://akpatil51340:%40Ankit2005@cluster0.rwylpqs.mongodb.net/SentosaEnclaveDataBase?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
  console.log("connected to db");
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const loginRoute = require("./routes/login");
const allEventsRouter = require("./routes/events");

app.use("/login", loginRoute);
app.use("/allEvents", allEventsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
