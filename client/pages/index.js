import MovieLayout from "../components/layout/Movie";
import LineMovie from "../components/movie/Line";
import FilterPanel from "../components/panel/Filter";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Pagination from "../components/ui/Pagination";

const IndexPage = () => {
  const router = useRouter();
  const [activeGenre, setActiveGenre] = useState(router.query?.genre);
  const [activeYear, setActiveYear] = useState(null);
  const [activeSortBy, setActiveSortBy] = useState(null);
  const [loaded, setLoaded] = useState(true);
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState(false);
  const [activePage, setActivePage] = useState(1);
  console.log({ activeGenre, activeYear, activeSortBy });
  useEffect(() => {
    const params = [];
    if (activeGenre) {
      params.push("genre=" + activeGenre);
    }
    if (activeYear) {
      params.push("year=" + activeYear);
    }
    if (activeSortBy) {
      params.push("sortBy=" + activeSortBy);
    }
    const queryString = params.join("&");
    if (!loaded) {
      router.push("?" + queryString, null, { scroll: false });
    }
  }, [activeGenre, activeYear, activeSortBy, loaded]);
  useEffect(() => {
    //if (loaded) {
    // return;
    // }
    if (!router.isReady) {
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
    const limit = 12;
    const skip = (activePage - 1) * 12;
    console.log("hello")
    fetch(
      "http://localhost:3001/movies" +
       (router.asPath.slice(1) || '?') +
        `&skip=${skip}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setCount(data.count);
      });
  }, [router.isReady, router.asPath, activePage]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/movies")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.items);
  //     });
  // }, []);
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
              setGrid,
              grid,
              setLoaded,
            }}
          />
          <div className="section-bottom mb-3">
            <Pagination
              pages={Math.ceil(count / 10)}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </div>
          <div className="row">
            {movies?.map((movie) => {
              if (grid) {
                return (
                  <div className="col-4 mb-5">
                    <LineMovie key={movie._id} movie={movie} grid={grid} />
                  </div>
                );
              } else {
                return (
                  <div className="col-12 mb-5">
                    <LineMovie key={movie._id} movie={movie} />
                  </div>
                );
              }
            })}
          </div>
          <div className="section-bottom">
            <Pagination
              pages={Math.ceil(count / 10)}
              activePage={activePage}
              setActivePage={setActivePage}
            />
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
