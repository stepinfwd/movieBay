import React from "react";
import Crew from "../Crew/Crew";
import Gallery from "../Gallery/Gallery";
import Episode from "../Episode/Episode";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import Topic from "../Topic/Topic";
function InnerNav(props) {
    let { path, url } = useRouteMatch();

    return (
        <>
            <Router>
                <div className="inner_nav">
                    <ul className="breadcrumb">
                        <li>
                            <a>
                                <Link to={`${url}/crew`}>Crew</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to={`${url}/gallery`}>Gallery</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to={`${url}/episode`}>Episode</Link>
                            </a>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path={path}>
                            <h3>testing</h3>
                        </Route>
                        <Route path={`${path}/:topicId`}>
                            <Topic />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default InnerNav;
