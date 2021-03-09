import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";

import classes from "classnames";
import GanttMin from "./GanttMin";
import GanttBackend from "./GanttBackend";
import GanttScales from "./GanttScales";
import GanttGrid from "./GanttGrid";
import GanttForm from "./GanttForm";
import GanttNoGrid from "./GanttNoGrid";
import GanttReadOnly from "./GanttReadOnly";
import GanttSizes from "./GanttSizes";
import GanttMultiple from "./GanttMultiple";
import GanttPerformance from "./GanttPerformance";
import GanttMarkers from "./GanttMarkers";
import GanttTooltips from "./GanttTooltips";
import GanttText from "./GanttText";

import { MaterialTheme, DefaultTheme } from "@dhtmlx/trial-react-gantt";

import css from "./Demos.module.css";

const skins = [
  {
    id: "default",
    name: "Classic",
    settings: { borders: "full", cellHeight: 38 },
  },
  {
    id: "material",
    name: "Material",
    settings: { borders: "", cellHeight: 32 },
  },
];
const skinSettings = {};
skins.forEach((a) => (skinSettings[a.id] = a.settings));

const demos = [
  ["/base", "Gantt basic", GanttMin],
  ["/backend", "Gantt with backend", GanttBackend],
  ["/scales", "Custom scales", GanttScales],
  ["/grid", "Custom grid", GanttGrid],
  ["/form", "Custom edit form", GanttForm],
  ["/chart", "Without the grid", GanttNoGrid],
  ["/readonly", "Readonly mode", GanttReadOnly],
  ["/sizes", "Scale / cell sizes", GanttSizes],
  ["/many", "Many gantts per page", GanttMultiple],
  ["/performance", "Performance", GanttPerformance],
  ["/markers", "Markers", GanttMarkers],
  ["/tooltips", "Tooltips", GanttTooltips],
  ["/templates", "Custom text", GanttText],
];

function showTitle() {
  return <div className={css.title}>Gantt Demos</div>;
}

function showHint(title) {
  return <div className={css.hint}>{title}</div>;
}

function showDemoList(skin) {
  return (
    <div className={css.demos}>
      {demos.map((data) => (
        <NavLink
          activeClassName={css.active}
          className={css.demo}
          to={`${data[0]}/${skin}`}
          key={data}
        >
          {data[1]}
        </NavLink>
      ))}
    </div>
  );
}

function Routes({ history }) {
  const [skin, setSkin] = useState({});
  const [page, setPage] = useState({});
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const onClick = () => {
    if (!show) setShow(true);
  };

  const onHide = () => {
    if (show) setShow(false);
  };

  const toggleSkin = (e) => {
    e.stopPropagation();
    const data = e.target.dataset;
    if (data.role === "skin") {
      setSkin(skins.find((a) => a.id === data.id));
      history.push(`/${page}/${data.id}`);
    }
  };

  let location = useLocation();
  useEffect(() => {
    const parts = location.pathname.split("/");
    if (parts.length === 3) {
      setPage(parts[1]);
      setSkin(parts[2]);
      setTitle(demos.find((a) => a[0] === "/" + parts[1])[1]);
    }
  }, [location]);

  return (
    <Router>
      <div className={css.layout}>
        <MaterialTheme></MaterialTheme>
        <DefaultTheme></DefaultTheme>
        <div
          className={classes(css.sidebar, { [css.move]: show })}
          onClick={onClick}
        >
          {show && showTitle()}
          <div
            className={classes(css.skins, { [css.move]: !show })}
            onClick={toggleSkin}
          >
            {skins.map((data, i) => (
              <div
                key={i}
                className={classes(css.skin, {
                  [css.selected]: data.id === skin,
                })}
                data-role="skin"
                data-id={data.id}
              >
                {data.name}
              </div>
            ))}
          </div>
          {show ? showDemoList(skin) : showHint(title)}
        </div>

        <div
          className={classes(css.content, { [css.move]: show }, "wx-" + skin)}
          onClick={onHide}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/base/default"></Redirect>}
            />
            {demos.map((data) => (
              <Route
                key={data[0]}
                path={`${data[0]}/:skin`}
                render={({ match }) => {
                  const Demo = data[2];
                  return <Demo {...skinSettings[match.params.skin]} />;
                }}
              />
            ))}
          </Switch>
          {/* <demo.comp  /> */}
        </div>
      </div>
    </Router>
  );
}

const RoutesWithHistory = withRouter(Routes);

function Demos() {
  return (
    <Router>
      <RoutesWithHistory />
    </Router>
  );
}

export default Demos;
