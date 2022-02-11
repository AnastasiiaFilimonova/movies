const Movie = require('../model/mongo/Movie')
const Comment = require('../model/mongo/Comment')
const list = async (req, res, next) => {
    const criteria={}
    let sort={_id:-1}
    if (req.query.year) {criteria.year=req.query.year}
    if (req.query.genre) {criteria.genres=req.query.genre}
    if (req.query.sortBy) {
        if (req.query.sortBy==="Duration") {
            sort={runtime:1} 
            criteria.runtime={$gt:0}
        } else 
        if (req.query.sortBy==="Rating"){
            sort={"imdb.rating":-1}
            criteria["imdb.rating"]={$gt:0}
        }
    }
    try {
        const {skip=0, limit=10}=req.query
        res.json({
            count: await Movie.countDocuments(criteria),
            items: await Movie.find(criteria).sort(sort).skip(+skip).limit(+limit)
        });
    } catch (error) {
        next(error)
    }
    
}

const getById = async (req, res, next) => {
    try {
        res.json({
            item: await Movie.findById( req.params.id ),
            comments: await Comment.find({
                movie_id: req.params.id
            })
        });
    } catch (error) {
        next(error)
    }
    
}

module.exports = { list, getById }