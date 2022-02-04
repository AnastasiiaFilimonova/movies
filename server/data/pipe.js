[{
  $unwind: {
    path: "$genres"
  }
}, {
  $group: {
    _id: "$year",
    genres: {
      $addToSet: "$genres"
    }
  }
}, {
  $sort: {
    _id: -1
  }
}, { $out: 'genres-by-year' }]
const a = { "_id": 2015, "genres": ["News", "Documentary", "Adventure", "Western", "Animation", "Family", "History", "Biography", "Comedy", "Mystery", "Romance", "Action", "Sport", "Short", "Sci-Fi", "Drama", "Crime", "Music", "Thriller", "War", "Fantasy", "Horror", "Musical"] }