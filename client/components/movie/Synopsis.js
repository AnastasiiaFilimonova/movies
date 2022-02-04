const Synopsis = ({ movie }) => {
    const plot = movie.plot
    const genres = movie.genres || []
    return (
        <>
            <div className="section-head">
                <h2 className="section-title text-uppercase">Synopsis</h2>
            </div>
            <div className="section-description">
                <p className="lead">
                    {plot}
                </p>
            </div>
            <div className="section-bottom">
                <div className="row">
                    <div className="mr-auto col-auto">
                        <div className="entity-links">
                            <div className="entity-list-title">Share:</div>
                            <a className="content-link entity-share-link" href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="content-link entity-share-link" href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="content-link entity-share-link" href="#">
                                <i className="fab fa-google-plus-g" />
                            </a>
                            <a className="content-link entity-share-link" href="#">
                                <i className="fab fa-pinterest-p" />
                            </a>
                            <a className="content-link entity-share-link" href="#">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="entity-links">
                            <div className="entity-list-title">Tags:</div>
                            {genres.map((genre) => {
                                return (
                                    <a className="content-link" href="movies-blocks.html" key={genre}>
                                        {genre} {" "}
                                    </a>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Synopsis