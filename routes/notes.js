const express = require('express');
const NotesService = require('../services/notes')
function notesApi(app) {
    const router = express.Router();
    app.use("/api/notes", router);

    const notesService = new NotesService();

    //List notes
    router.get("/", async function(req, res, next) {

        try {
            const { tags } = req.query;
            const notes = await notesService.getNotes({ tags });

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

            const { id } = req.params;
            const retrievedNote = await notesService.getNote({ id });

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
            const { body: note } = req
            const createdNote = await notesService.createNote({ note });

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
            const { id } = req.params;
            const { body: note } = req

            const updatedNote = await notesService.updateNote({ id, note });

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
            const { id } = req.params;
            const deletedNoteId = await notesService.deleteNote({ id });

            res.status(200).json({
                data:deletedNoteId,
                message: 'note deleted'
            });

        } catch(err){
            next(err);
        }

    });

    
};

module.exports = notesApi;