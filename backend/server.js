const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Item = require("./item");

require("dotenv").config();

console.clear();

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = process.env.DB;

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getItem", (req, res) => {
  Item.find((err, item) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, item: item });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateItem", (req, res) => {
  const { img, title, description } = req.query;
  Item.findByIdAndUpdate(img, title, description, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteItem", (req, res) => {
  const { title } = req.query;
  Item.findByIdAndRemove(title, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/postItem", (req, res) => {
  let item = new Item();

  const { img, title, description } = req.query;
  console.log(req.query);

  if (!img || !title || !description) {
    // if (true) {
    return res.json({
      success: false,
      error: "INVALID INPUTS",
    });
  }
  item.img = img;
  item.title = title;
  item.description = description;
  item.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
