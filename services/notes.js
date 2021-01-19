const MongoLib = require('../lib/mongo');

class NotesService {
    constructor() {
        this.collection = 'notes';
        this.mongoDB = new MongoLib();
    }
    async getNotes({ tags } = {}) {
        const query = tags && { tags: { $in: tags } };
        const notes = await this.mongoDB.getAll(this.collection, query);
        return notes;
    }

    async getNote({ id }) {
        const note = await this.mongoDB.get(this.collection, id);
        return note;
    }

    async createNote({ note }) {
        const createdNote = await this.mongoDB.create(this.collection, note);
        return createdNote;
    }

    async updateNote({ id, note } = {}) {
        const updatedNoteId = await this.mongoDB.update(this.collection, id, note);
        return updatedNoteId;
    }

    async deleteNote({ id }) {
        const deletedNoteId = await this.mongoDB.delete(this.collection, id);
        return deletedNoteId;
    }

    async deleteAllNotes() {
        const deletedAll = await this.mongoDb.deleteAll(this.collection);
        console.log(deletedAll)
        return deletedAll;
    }
}

module.exports = NotesService;