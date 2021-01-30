const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const ItemSchema = new Schema({
  img: String,
  title: String,
  description: String,
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Item", ItemSchema);
