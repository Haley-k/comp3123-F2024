import express from 'express';
import noteModel from '../models/NotesModel.js';

const router = express.Router();

// Create a new Note
router.post('/notes', async (req, res) => {
    const note = new noteModel(req.body);
    // Validate request
    if (!req.body.noteTitle || !req.body.noteDescription || !req.body.priority) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    try {
        const savedNote = await note.save();
        res.send(savedNote);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "An error occurred while saving the note"
        });
    }
});

// Retrieve all Notes
router.get('/notes', (req, res) => {
    noteModel.find()
        .then((notes) => res.send(notes))
        .catch((err) => res.status(500).send({ message: err.message }));
});

// Retrieve a single Note with noteId
router.get('/notes/:noteId', (req, res) => {
    noteModel.findById(req.params.noteId)
        .then((note) => {
            if (!note) {
                return res.status(404).send({ message: "Note not found" });
            }
            res.send(note);
        })
        .catch((err) => res.status(500).send({ message: err.message }));
});

// Update a Note with noteId
router.put('/notes/:noteId', (req, res) => {
    // Validate request
    if (!req.body.noteTitle || !req.body.noteDescription || !req.body.priority) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    noteModel.findByIdAndUpdate(req.params.noteId, req.body, { new: true })
        .then((note) => {
            if (!note) {
                return res.status(404).send({ message: "Note not found" });
            }
            res.send(note);
        })
        .catch((err) => res.status(500).send({ message: err.message }));
});

// Delete a Note with noteId
router.delete('/notes/:noteId', (req, res) => {
    noteModel.findByIdAndDelete(req.params.noteId)
        .then((note) => {
            if (!note) {
                return res.status(404).send({ message: "Note not found" });
            }
            res.send({ message: "Note Deleted" });
        })
        .catch((err) => res.status(500).send({ message: err.message }));
});

export default router;