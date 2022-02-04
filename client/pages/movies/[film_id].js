import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import MovieLayout from "../../components/layout/Movie"
import MovieComments from "../../components/movie/Comments"
import LastMovies from "../../components/movie/Last"
import MovieShort from "../../components/movie/Short"
import Synopsis from "../../components/movie/Synopsis"
import Videos from "../../components/movie/Videos"


const MoviesPage = () => {
  const router = useRouter()
  const movie_id = router.query.film_id
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])
  useEffect(() => {
    if (!movie_id) {
      return
    }
    fetch(`http://localhost:3001/movies/${movie_id}`)
      .then(res => res.json())
      .then(data => {
        setMovie(data.item)
        setComments(data.comments)
      })
  }, [movie_id])
  console.log(movie)
  if (!movie) return 'loading...'
  return (
    <MovieLayout>
      <div className="container">
        <div className="sidebar-container">
          <div className="content">
            <section className="section-long">
              <div className="section-line">
                <MovieShort movie={movie} />
              </div>
              <div className="section-line">
                <Synopsis movie={movie} />
              </div>
              {/* <div className="section-line">
                 <Videos />
                </div> */}
              <MovieComments comments={comments}/>
            </section>
          </div>
          <div className="sidebar section-long order-lg-last">
           <LastMovies/>
          </div>
        </div>
      </div>
      <a className="scroll-top disabled" href="#">
        <i className="fas fa-angle-up" aria-hidden="true" />
      </a>
    </MovieLayout>

  )
}

export default MoviesPage