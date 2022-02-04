const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    year: Number
});

const model = mongoose.model('Movie', MovieSchema, 'movies');

module.exports = model;