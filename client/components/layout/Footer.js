import Link  from "next/link"

const Footer = ({ topMovies, genreItems }) => {
    return (
        <footer className="section-text-white footer footer-links bg-darken">
            <div className="footer-body container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <a className="footer-logo" href="/html/">
                            <span className="logo-element">
                                <span className="logo-tape">
                                    <span
                                        className="svg-content svg-fill-theme"
                                        data-svg="/html/images/svg/logo-part.svg"
                                    />
                                </span>
                                <span className="logo-text text-uppercase">
                                    <span>M</span>emico
                                </span>
                            </span>
                        </a>
                        <div className="footer-content">
                            <p className="footer-text">
                                Sidestate NSW 4132,
                                <br />
                                Australia
                            </p>
                            <p className="footer-text">Call us:&nbsp;&nbsp;(555) 555-0312</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h5 className="footer-title text-uppercase">top Movies</h5>
                        <ul className="list-unstyled list-wide footer-content">
                            {topMovies.map((topMovie, index) => {
                                return (<li key={index}>
                                   <Link href={topMovie.link}><a className="content-link" >
                                        {topMovie.name}
                                    </a></Link>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h5 className="footer-title text-uppercase">Genres</h5>
                        <ul className="list-unstyled list-wide footer-content">
                        {genreItems.map((genreItem, index) => {
                                return (<li key={index}>
                                   <Link href={genreItem.link}><a className="content-link">
                                        {genreItem.name}
                                    </a></Link>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h5 className="footer-title text-uppercase">Follow</h5>
                        <ul className="list-wide footer-content list-inline">
                            <li className="list-inline-item">
                                <a className="content-link" href="#">
                                    <i className="fab fa-slack-hash" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="content-link" href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="content-link" href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="content-link" href="#">
                                    <i className="fab fa-dribbble" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="content-link" href="#">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="content-link" href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                        </ul>
                        <h5 className="footer-title text-uppercase">Subscribe</h5>
                        <div className="footer-content">
                            <p className="footer-text">
                                Get latest movie news right away with our subscription
                            </p>
                            <form className="footer-form" autoComplete="off">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        name="email"
                                        type="email"
                                        placeholder="Your email"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-theme" type="submit">
                                            <i className="fas fa-angle-right" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="container text-center">
                    Copyright {new Date().getFullYear()} © AmigosThemes. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer