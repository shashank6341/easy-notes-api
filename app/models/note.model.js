const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    // Adds two field 'updatedAt' and 'createdAt'
    timestamps: true,
  }
);

module.exports = mongoose.model("Notes", noteSchema);
