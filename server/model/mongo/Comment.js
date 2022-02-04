const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: String,
    email: String,
    movie_id: Schema.Types.ObjectId,
    text: String,
    date: String
});

const model = mongoose.model('Comment', CommentSchema, 'movies-comments');

module.exports = model;