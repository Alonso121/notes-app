const Notes = require("../models/noteModel");

const noteCtrl = {
  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find({ user_id: req.user.id });
      res.json(notes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createNote: async (req, res) => {
    try {
      const { title, date } = req.body;
      const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
      const newNote = new Notes({
        title: capitalizedTitle,
        date,
        starred: false,
        user_id: req.user.id,
        name: req.user.name,
      });
      await newNote.save();
      res.json({ msg: "Created a Note" });
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = noteCtrl;
