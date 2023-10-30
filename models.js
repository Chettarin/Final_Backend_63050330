const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  title: String,
  income: Number,
  expense: Number,
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
