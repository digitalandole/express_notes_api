const MongoLib = require('../lib/mongo')

class NotesService {

    constructor() {
        this.collection = 'notes';
        this.mongoDb = new MongoLib();
    }

    async getNotes(tags) {
        const query = tags && { tags: { $in: tags}};
        const notes = await this.mongoDb.getAll(this.collection, query);
        return notes || [];
    }

    async getNote(noteId) {
        const note = await this.mongoDb.get(this.collection, noteId);
        return note || {};
    }

    async createNote(note) {
        const createdNote = await this.mongoDb.create(this.collection, note);
        return createdNote;
    }

    async updateNote(noteId, note) {
        const updatedNote = await this.mongoDb.update(this.collection, noteId, note);
        return updatedNote || {};
    }

    async deleteNote(noteId) {
        const deletedNoteId = await this.mongoDb.delete(this.collection, noteId);
        return deletedNoteId;
    }

    async deleteAllNotes() {
        const deletedAll = await this.mongoDb.deleteAll(this.collection);
        return deletedAll;
    }
}

module.exports = NotesService;