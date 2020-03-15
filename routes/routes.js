module.exports = (app) => {
    const players = require('../controllers/controllers');

    // Create a new Note
    app.post('/players', players.create);

    // Retrieve all Notes
    app.get('/players', players.findAll);

    // Retrieve a single Note with noteId
    app.get('/players/:playerId', players.findOne);

    // Update a Note with noteId
    app.put('/players/:playerId', players.update);

    // Delete a Note with noteId
    app.delete('/players/:playerId', players.delete);
}