const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    starred: {
      type: Boolean,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notes", noteSchema);
