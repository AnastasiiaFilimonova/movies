const Movie = require('../model/mongo/Movie')
const Comment = require('../model/mongo/Comment')
const list = async (req, res, next) => {
    const criteria={}
    if (req.query.year) {criteria.year=req.query.year}
    try {
        const {skip=0, limit=10}=req.query
        res.json({
            count: await Movie.countDocuments(criteria),
            items: await Movie.find(criteria).skip(+skip).limit(+limit)
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