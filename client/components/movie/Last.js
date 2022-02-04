const LastMovies = () => {
    return (
        <section className="section-sidebar">
        <div className="section-head">
          <h2 className="section-title text-uppercase">Latest movies</h2>
        </div>
        <div className="movie-short-line-entity">
          <a className="entity-preview" href="movie-info-sidebar-right.html">
            <span className="embed-responsive embed-responsive-16by9">
              <img
                className="embed-responsive-item"
                src="http://via.placeholder.com/1920x1080"
                alt
              />
            </span>
          </a>
          <div className="entity-content">
            <h4 className="entity-title">
              <a
                className="content-link"
                href="movie-info-sidebar-right.html"
              >
                Deadman skull
              </a>
            </h4>
            <p className="entity-subtext">11 nov 2018</p>
          </div>
        </div>
        <div className="movie-short-line-entity">
          <a className="entity-preview" href="movie-info-sidebar-right.html">
            <span className="embed-responsive embed-responsive-16by9">
              <img
                className="embed-responsive-item"
                src="http://via.placeholder.com/1920x1080"
                alt
              />
            </span>
          </a>
          <div className="entity-content">
            <h4 className="entity-title">
              <a
                className="content-link"
                href="movie-info-sidebar-right.html"
              >
                Dream forest
              </a>
            </h4>
            <p className="entity-subtext">29 oct 2018</p>
          </div>
        </div>
        <div className="movie-short-line-entity">
          <a className="entity-preview" href="movie-info-sidebar-right.html">
            <span className="embed-responsive embed-responsive-16by9">
              <img
                className="embed-responsive-item"
                src="http://via.placeholder.com/1920x1080"
                alt
              />
            </span>
          </a>
          <div className="entity-content">
            <h4 className="entity-title">
              <a
                className="content-link"
                href="movie-info-sidebar-right.html"
              >
                Fall
              </a>
            </h4>
            <p className="entity-subtext">29 oct 2018</p>
          </div>
        </div>
      </section>
    )
}

export default LastMovies