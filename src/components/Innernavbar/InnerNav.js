import React from "react";
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
  useParams,
  useRouteMatch,
} from "react-router-dom";
import CastInfo from "../castinfo/CastInfo";
function InnerNav(props) {
  let { path, url } = useRouteMatch();
  const { id } = useParams();
  const { gallery, crew, episode, movieitem, cast,value } = props;
  return (
    <>
      <Router>
        <div className="inner_nav">
          <ul className="breadcrumb">
            <li>
              <Link to={`${url}/`}>Details</Link>
            </li>
            <span>/</span>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <span>/</span>

            <li>
              <Link to={`${url}/crew`}>Crew</Link>
            </li>
            <span>/</span>
            <li>
              <Link to={`${url}/gallery`}>Gallery</Link>
            </li>
            <span>/</span>

            <li>
              <Link to={`${url}/episode`}>Episode</Link>
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
