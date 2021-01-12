const router = require('express').Router();

const notesController = require('../controllers/note.controller');

// Create a new Note
router.post('/notes', notesController.create);

// Retrieve all Notes
router.get('/notes', notesController.findAll);

// Retrieve a Single Note with NoteId
router.get('/notes/:noteId', notesController.findOne);

// Update a Note with nodeId
router.put('/notes/:noteId', notesController.update);

// Delete a Note with its nodeId
router.delete('/notes/:noteId', notesController.delete);

module.exports = router;