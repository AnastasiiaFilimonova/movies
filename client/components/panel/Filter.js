import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const FilterPanel = ({
  activeGenre,
  setActiveGenre,
  activeYear,
  setActiveYear,
  activeSortBy,
  setActiveSortBy,
  setLoaded,
  setGrid,
  grid,
}) => {
  const genres = [
    "News",
    "Documentary",
    "Adventure",
    "Western",
    "Animation",
    "Family",
    "History",
    "Biography",
    "Comedy",
    "Mystery",
    "Romance",
    "Action",
    "Sport",
    "Short",
    "Sci-Fi",
    "Drama",
    "Crime",
    "Music",
    "Thriller",
    "War",
    "Fantasy",
    "Horror",
    "Musical",
  ];
  const years = [];
  for (let i = 2016; i >= 1916; i--) {
    years.push(i);
  }
  return (
    <div className="section-pannel">
      <div className="grid row">
        <div className="col-md-10">
          <form autoComplete="off">
            <div className="row form-grid">
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select
                    className="form-control"
                    name="genre"
                    value={activeGenre}
                    onChange={(event) => {
                      setLoaded(false);
                      setActiveGenre(event.target.value);
                    }}
                  >
                    <option selected="true" value="">
                      Genre:
                    </option>
                    {genres.map((genre) => {
                      return (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div
                  className="input-view-flat date input-group"
                  data-toggle="datetimepicker"
                  data-target="#release-year-field"
                >
                  <select
                    className="form-control"
                    name="year"
                    value={activeYear}
                    onChange={(event) => {
                      setLoaded(false);
                      setActiveYear(event.target.value);
                    }}
                  >
                    <option selected="true" value="">
                      Year:
                    </option>
                    {years.map((year) => {
                      return <option key={year}>{year}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select
                    className="form-control"
                    name="sortBy"
                    value={activeSortBy}
                    onChange={(event) => {
                      setLoaded(false);
                      setActiveSortBy(event.target.value);
                    }}
                  >
                    <option selected="true" value="">
                      Sort by
                    </option>
                    <option>Duration</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2 my-md-auto d-flex">
          <span className="info-title d-md-none mr-3">Select view:</span>
          <ul className="ml-md-auto h5 list-inline">
            <li className="list-inline-item">
              <a onClick={
                (e)=>{
                  e.preventDefault()
                  setGrid(true)
                }
               }
                className={`content-link transparent-link ${grid ? 'active': ""}`}
                href="#"
              >
                <i className="fas fa-th" />
              </a>
            </li>
            <li className="list-inline-item">
              <a onClick={
                (e)=>{
                  e.preventDefault()
                  setGrid(false)
                }
               }
               className={`content-link transparent-link ${grid ? '': "active"}`}
                href="#"
              >
                <i className="fas fa-th-list" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
