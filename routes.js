const express = require("express");
const router = express.Router();
const Record = require("./models");

// Create a new record
router.post("/records", (req, res) => {
  const { title, income, expense } = req.body;
  const newRecord = new Record({ title, income, expense });

  newRecord.save((err, record) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(201).json(record);
    }
  });
});

// Add more routes for listing, updating, and deleting records

module.exports = router;
