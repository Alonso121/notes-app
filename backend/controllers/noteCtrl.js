const Notes = require("../models/noteModel");

const noteCtrl = {
  // Fetch all notes
  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find({ user_id: req.user.id });
      res.json(notes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // Create a new note
  createNote: async (req, res) => {
    try {
      const { title, date } = req.body;
      const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
      const newNote = new Notes({
        title: capitalizedTitle,
        date,
        starred: false,
        user_id: req.user.id,
        complete: false,
      });
      await newNote.save();
      res.json(newNote);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  // add a star to important notes
  starNote: async (req, res) => {
    const { starred } = req.body;
    try {
      const note = await Notes.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { starred: !starred } },
        { new: true }
      );
      res.status(200).json({ starred: note.starred, _id: note._id });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  // toggle if notes are completed or not
  toggleCompleteNote: async (req, res) => {
    const { complete } = req.body;
    try {
      const note = await Notes.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { complete: !complete } },
        { new: true }
      );
      res.status(200).json({ complete: note.complete, _id: note._id });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  // delete a note
  deleteNote: async (req, res) => {
    try {
      await Notes.findByIdAndDelete({ _id: req.params.id });
      res.json({ _id: req.params.id });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = noteCtrl;
