const { notesMock } = require('../utils/mocks/notes')

class NotesService {
    async getNotes() {
        const notes = await Promise.resolve(notesMock);
        return notes || [];
    }

    async getNote() {
        const note = await Promise.resolve(notesMock[0]);
        return note || {};
    }

    async createNote() {
        const createdNote = await Promise.resolve(notesMock[0].id);
        return createdNote;
    }

    async updateNote() {
        const updatedNote = await Promise.resolve(notesMock[0]);
        return updatedNote || {};
    }

    async deleteNote() {
        const deletedNoteId = await Promise.resolve(notesMock[0].id);
        return deletedNoteId;
    }
}

module.exports = NotesService;