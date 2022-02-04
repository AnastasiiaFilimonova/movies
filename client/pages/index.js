import MovieLayout from "../components/layout/Movie";
import LineMovie from "../components/movie/Line";
import FilterPanel from "../components/panel/Filter";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const [activeGenre, setActiveGenre] = useState(router.query?.genre);
  const [activeYear, setActiveYear] = useState(null);
  const [activeSortBy, setActiveSortBy] = useState(null);
  const [loaded, setLoaded] = useState(false);
  console.log({ activeGenre, activeYear, activeSortBy });
  useEffect(() => {
    // if (!loaded) {return}
    // const params = [];
    // if (activeGenre) {
    //   params.push("genre=" + activeGenre);
    // }
    // if (activeYear) {
    //   params.push("year=" + activeYear);
    // }
    // if (activeSortBy) {
    //   params.push("sortBy=" + activeSortBy);
    // }
    // const queryString = params.join("&");
    // if (queryString && loaded) {
    //   router.push("?" + queryString, null, { scroll: false });
    // }
  }, [activeGenre, activeYear, activeSortBy]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (loaded) {
      return;
    }
    if (!router.query) {
      return;
    }
        if (router.query.genre) {
      setActiveGenre(router.query.genre);
    }
    if (router.query.year) {
      setActiveYear(router.query.year);
    }
    if (router.query.sortBy) {
      setActiveSortBy(router.query.sortBy);
    }
    fetch("http://localhost:3001/movies?year="+router.query.year)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, [router.query]);
  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);
  console.log(movies);
  return (
    <MovieLayout>
      <section className="section-long">
        <div className="container">
          <FilterPanel
            {...{
              activeGenre,
              setActiveGenre,
              activeYear,
              setActiveYear,
              activeSortBy,
              setActiveSortBy,
            }}
          />
          {movies?.map((movie) => {
            return <LineMovie key={movie._id} movie={movie} />;
          })}
          <div className="section-bottom">
            <div className="paginator">
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-left" />
              </a>
              <a className="paginator-item" href="#">
                1
              </a>
              <span className="active paginator-item">2</span>
              <a className="paginator-item" href="#">
                3
              </a>
              <span className="paginator-item">...</span>
              <a className="paginator-item" href="#">
                10
              </a>
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <a className="scroll-top disabled" href="#">
        <i className="fas fa-angle-up" aria-hidden="true" />
      </a>
    </MovieLayout>
  );
};

export default IndexPage;