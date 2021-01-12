const Note = require("../models/note.model");

exports.create = (req, res) => {

console.log(req.body);
  // Check if Req is not empty
  if (!req.body.content) {
    return res.status(400).send({
      message: "Request Body cannot be empty",
    });
  }

  //   Create a new Note
  const note = new Note({
    title: req.body.title || "Untitled Note",
    content: req.body.content,
  });

  //   Save Note
  note
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error While Creating Note",
      });
    });
};

exports.findAll = (req, res, next) => {
  Note.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Notes",
      });
    });
};

exports.findOne = (req, res, next) => {
  const noteId = req.params.noteId;

  Note.findById(noteId)
    .then((note) => {
      if (!note) {
        res.status(404).send({
          message: "Note Not Found with id: " + noteId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Note",
      });
    });
};

exports.update = (req, res, next) => {
  const noteId = req.params.noteId;

  Note.findByIdAndUpdate(
    noteId,
    {
      title: req.body.title,
      content: req.body.content,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not Found to Update with Id: " + noteId,
        });
      }

      res.send(note);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "Error updating note with Id: " + noteId,
      });
    });
};

exports.delete = (req, res, next) => {
  const noteId = req.params.noteId;

  Note.findByIdAndRemove(noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not Found to Update with Id: " + noteId,
        });
      }

      res.send({ message: "Note Deleted Successfully!" });
    })
    .catch((err) => {
      return res.status(404).send({
        message: "Could not delete note with Id: " + noteId,
      });
    });
};
