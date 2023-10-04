import Head from 'next/head'
import Chat from '../assistant/Chat'
import Footer from './Footer'
import Menu from './Menu'


const MovieLayout = ({ children }) => {
    const topMovies = [
        {
            link: '/movies/573a1390f29313caabcd516c',
            name: 'In the Land of the Head Hunters'
        },
        {
            link: '/movies/573a1390f29313caabcd60e4',
            name: 'The Immigrant'
        },
        {
            link: '/movies/573a1390f29313caabcd5293',
            name: 'The Perils of Pauline'
        }
    ]
    const genres=["Comedy", "Drama", "Documentary", "News"]
    const genreItems = genres.map((genre)=>{
            return {
                link: `/?genre=${genre}`,
                name: genre
            }

    })
    // const genreItems = [
    //     {
    //         link: '/?genre=Comedy',
    //         name: 'Comedy'
    //     },
    //     {
    //         link: '/?genre=Drama',
    //         name: 'Drama'
    //     },
    //     {
    //         link: '/?genre=Documentary',
    //         name: 'Documentary'
    //     },
    //     ]
       return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>Memico - Cinema Bootstrap HTML5 Template</title>
                {/* Animate.css */}
                <link href="/html/animate.css/animate.css" rel="stylesheet" type="text/css" />
                {/* Font Awesome iconic font */}
                <link
                    href="/html/fontawesome/css/fontawesome-all.css"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* Magnific Popup */}
                <link
                    href="/html/magnific-popup/magnific-popup.css"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* Slick carousel */}
                <link href="/html/slick/slick.css" rel="stylesheet" type="text/css" />
                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* Theme styles */}
                <link href="/html/css/dot-icons.css" rel="stylesheet" type="text/css" />
                <link href="/html/css/theme.css" rel="stylesheet" type="text/css" />
            </Head>
            <header className="header header-horizontal header-view-pannel">
                <div className="container">
                    <nav className="navbar">
                        <a className="navbar-brand" href="/html/">
                            <span className="logo-element">
                                <span className="logo-tape">
                                    <span
                                        className="svg-content svg-fill-theme"
                                        data-svg="/html/images/svg/logo-part.svg"
                                    />
                                </span>
                                <span className="logo-text text-uppercase">
                                    Cinema
                                </span>
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button">
                            <span className="th-dots-active-close th-dots th-bars">
                                <span />
                                <span />
                                <span />
                            </span>
                        </button>
                        <div className="navbar-collapse">
                            <Menu topMovies={topMovies} genreItems={genreItems} />
                        </div>
                    </nav>
                </div>
            </header>
            <section className="after-head d-flex section-text-white position-relative">
                <div
                    className="d-background"
                    data-image-src="http://via.placeholder.com/1920x1080"
                    data-parallax="scroll"
                />
                <div className="d-background bg-black-80" />
                <div className="top-block top-inner container">
                    <div className="top-block-content">
                        <h1 className="section-title">Movies list</h1>
                        <div className="page-breadcrumbs">
                            <a className="content-link" href="#">
                                Home
                            </a>
                            <span className="text-theme mx-2">
                                <i className="fas fa-chevron-right" />
                            </span>
                            <span>Movies</span>
                        </div>
                    </div>
                </div>
            </section>
            {children}
            <Chat />
            <Footer topMovies={topMovies} genreItems={genreItems}/>
            {/* jQuery library */}
            {/* Bootstrap */}
            {/* Paralax.js */}
            {/* Waypoints */}
            {/* Slick carousel */}
            {/* Magnific Popup */}
            {/* Inits product scripts */}

        </>


    )
}

export default MovieLayout