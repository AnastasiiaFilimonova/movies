import Link from 'next/link'  

const Menu = ({topMovies, genreItems}) => {
    
    return (
        <ul className="navbar-nav">
            <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                <a className="nav-link" href="#">
                    Top movies
                </a>
                <div className="nav-arrow">
                    <i className="fas fa-chevron-down" />
                </div>
                <ul className="collapse nav">
                    {topMovies.map((topMovie, index) => {
                        return (<li className="nav-item" key={index}>
                            <Link href={topMovie.link}><a className="nav-link">
                                {topMovie.name}
                            </a></Link>
                        </li>)
                    })}
                </ul>
            </li>
            <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                <a className="nav-link" href="#">
                    Genres
                </a>
                <div className="nav-arrow">
                    <i className="fas fa-chevron-down" />
                </div>
                <ul className="collapse nav">
                {genreItems.map((genreItem, index) => {
                        return (<li className="nav-item" key={index}>
                            <Link href={genreItem.link}><a className="nav-link">
                                {genreItem.name}
                            </a></Link>
                        </li>)
                    })}
                </ul>
            </li>
        </ul>
    )
}

export default Menu