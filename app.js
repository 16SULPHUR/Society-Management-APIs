const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 6969;

app.use(
  cors({
    origin: "*",
    // methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// app.use(cors({
//   origin:"*"
// }))

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
const allNoticesRouter = require("./routes/notices");
const editProfileRouter = require("./routes/editProfile");
const signupRouter = require("./routes/signup");
const changeDPRouter = require("./routes/changeDP");
const editEventRouter = require("./routes/editEvent");
const editNoticeRouter = require("./routes/editNotice");
const galleryRouter = require("./routes/gallery");
const addNoticeRouter = require("./routes/addNotice");
const addEventRouter = require("./routes/addEvent");
const deleteEventRouter = require("./routes/deleteEvent");
const deleteNoticeRouter = require("./routes/deleteNotice");

app.use("/login", loginRoute);
app.use("/allEvents", allEventsRouter);
app.use("/allNotices", allNoticesRouter);
app.use("/editProfile", editProfileRouter);
app.use("/signup", signupRouter);
app.use("/changeDP", changeDPRouter);
app.use("/editEvent", editEventRouter);
app.use("/editNotice", editNoticeRouter);
app.use("/gallery", galleryRouter);
app.use("/addNotice", addNoticeRouter);
app.use("/addEvent", addEventRouter);
app.use("/deleteEvent", deleteEventRouter);
app.use("/deleteNotice", deleteNoticeRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
