const MovieShort = ({ movie }) => {
  const { title, poster, imdb, runtime, year, genres = [], _id, countries = [], directors = [], cast = [], languages = [] } = movie
  return (
    <div className="movie-info-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          <img
            className="embed-responsive-item"
            src={poster}
            alt={title}
          />
        </div>
      </div>
      <div className="entity-content">
        <h2 className="entity-title">{title}</h2>
        <div className="entity-category">
          {genres.map((genre) => {
            return (
              <a className="content-link" href="movies-blocks.html" key={genre}>
                {genre} {" "}
              </a>
            )
          })}

        </div>
        <div className="entity-info">
          <div className="info-lines">
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-star" />
              </span>
              <span className="info-text">{imdb.rating}</span>
              <span className="info-rest">/10</span>
            </div>
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-clock" />
              </span>
              <span className="info-text">{runtime}</span>
              <span className="info-rest">&nbsp;min</span>
            </div>
          </div>
        </div>
        <ul className="entity-list">
          <li>
            <span className="entity-list-title">Release:</span>{year}
          </li>
          <li>
            <span className="entity-list-title">Directed:</span>
            {directors.map((director, index) => {
              return (
                <a className="content-link" href="movies-blocks.html" key={director}>
                  {director} {directors.length - 1 !== index && ", "}
                </a>
              )
            })}
          </li>
          <li>
            <span className="entity-list-title">Starring:</span>
            {cast.map((actor, index) => {
              return (
                <a className="content-link" href="movies-blocks.html" key={actor}>
                  {actor} {cast.length - 1 !== index && ", "}
                </a>
              )
            })}
          </li>
          <li>
            <span className="entity-list-title">
              Production company:
            </span>
            <a className="content-link" href="#">
              Re-Production Bro.
            </a>
            ,
            <a className="content-link" href="#">
              Pentakid
            </a>
          </li>
          <li>
            <span className="entity-list-title">Country:</span>
            <a className="content-link" href="#">
              USA
            </a>
            ,
            <a className="content-link" href="#">
              India
            </a>
          </li>
          <li>
            <span className="entity-list-title">Language:</span>english
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MovieShort