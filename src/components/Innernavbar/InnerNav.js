import React, { useState } from "react";
import "./InnerNav.css";
import Crew from "../Crew/Crew";
import Gallery from "../Gallery/Gallery";
import Episode from "../Episode/Episode";
import MovieDetailCard from "../Views/Movie-info/MovieDetailCard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import CastInfo from "../castinfo/CastInfo";

function InnerNav(props) {
  let { url } = useRouteMatch();
  const { gallery, crew, episode, movieitem, cast, value } = props;
  // const [active,setActive]=useState(false)
  const [state, menuToggle] = useState({
    detailOn: true,
    castOn: false,
    crewOn: false,
    galleryOn: false,
    episodeOn: false,
  });
  const secondLevelMenuToggle = (key) => {
    console.log("CLCK AAY");
    menuToggle({ [key]: !state[key] });
    console.log("STATE", state[castOn]);
  };
  const { detailOn, castOn, crewOn, galleryOn, episodeOn } = state;
  return (
    <>
      <Router>
        <div className="inner_nav">
          <ul className="breadcrumb">
            <li>
              <Link
                onClick={() => secondLevelMenuToggle("detailOn")}
                className={detailOn ? "active" : "non-active"}
                to={`${url}/`}
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                onClick={() => secondLevelMenuToggle("castOn")}
                className={castOn ? "active" : "non-active"}
                to={`${url}/cast`}
              >
                Cast
              </Link>
            </li>
            {/* <span>|</span> */}

            <li>
              <Link
                onClick={() => secondLevelMenuToggle("crewOn")}
                className={crewOn ? "active" : "non-active"}
                to={`${url}/crew`}
              >
                Crew
              </Link>
            </li>
            {/* <span>|</span> */}
            <li>
              <Link
                onClick={() => secondLevelMenuToggle("galleryOn")}
                className={galleryOn ? "active" : "non-active"}
                to={`${url}/gallery`}
              >
                Gallery
              </Link>
            </li>
            {/* <span>|</span> */}

            <li>
              <Link
                onClick={() => secondLevelMenuToggle("episodeOn")}
                className={episodeOn ? "active" : "non-active"}
                to={`${url}/episode`}
              >
                Episode
              </Link>
            </li>
          </ul>
          {/* CHECK WHY NOT WORKING */}
          {/* <Switch>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                key={index}
                exact
                render={(props) => <route.component {...props} />}
              ></Route>
            ))}
          </Switch> */}
          <Switch>
            <Route
              exact
              path={`${url}/`}
              render={() => <MovieDetailCard movieitem={movieitem} />}
            />
            <Route
              exact
              path={`${url}/episode`}
              render={() => <Episode episode={episode} />}
            />
            <Route
              exact
              path={`${url}/crew`}
              render={() => <Crew crew={crew} />}
            />
            <Route
              exact
              path={`${url}/gallery`}
              render={() => <Gallery gallery={gallery} />}
            />

            <Route
              exact
              path={`${url}/cast`}
              render={() => <CastInfo cast={cast} value={value} />}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default InnerNav;
