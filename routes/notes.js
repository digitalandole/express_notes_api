const express = require('express');
const NotesService = require('../services/notes')
function notesApi(app) {
    const router = express.Router();
    app.use("/api/notes", router);

    const notesService = new NotesService();

    //List notes
    router.get("/", async function(req, res, next) {

        try {
            const tags = req.query.tags;
            const notes = await notesService.getNotes(tags);

            res.status(200).json({
                data:notes,
                message: 'notes listed'
            });

        } catch(err){
            next(err);
        }

    });

    //Retrieve a note
    router.get('/:id', async function(req, res, next) {

        try {

            const noteId = req.params.id;
            const retrievedNote = await notesService.getNote(noteId);

            res.status(200).json({
                data:retrievedNote,
                message: 'note retrieved'
            });

        } catch(err){
            next(err);
        }

    });

    //Create a note
    router.post("/", async function(req, res, next) {

        try {
            const note = req.body;
            const createdNote = await notesService.createNote(note);

            res.status(200).json({
                data: createdNote,
                message: 'note created'
            });

        } catch(err){
            next(err);
        }

    });

    //Update a note
    router.patch("/:id", async function(req, res, next) {

        try {
            const noteId = req.params.id;
            const note = req.body;

            const updatedNote = await notesService.updateNote(noteId, note);

            res.status(200).json({
                data:updatedNote,
                message: 'note updated'
            });

        } catch(err){
            next(err);
        }

    });

    //Delete a note
    router.delete("/:id", async function(req, res, next) {

        try {
            const noteId = req.params.id;
            const deletedNoteId = await notesService.deleteNote(noteId);

            res.status(200).json({
                data:deletedNoteId,
                message: 'note deleted'
            });

        } catch(err){
            next(err);
        }

    });

    //Delete all notes
    router.delete("/", async function(req, res, next) {

        try {
            const allDeleted = await notesService.deleteAllNotes();

            res.status(200).json({
                data: allDeleted,
                message: 'all notes deleted'
            });

        } catch(err){
            next(err);
        }

    });

    
};

module.exports = notesApi;