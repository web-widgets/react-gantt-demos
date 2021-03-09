import React from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import "./GanttMarkers.css";

import { getData } from "./common/data";
const { tasks, links, scales, columns } = getData();

const markers = [
  {
    start: new Date(2020, 2, 4),
    text: "Start",
    title: "start point of project",
  },
  {
    start: new Date(2020, 2, 8),
    text: "Middle point",
    css: "myMiddleClass",
    title: "middle point of project",
  },
  {
    start: new Date(2020, 2, 11),
    text: "End point",
    css: "myEndClass",
    title: "end point of project",
  },
];

export default function GanttMarkers({ cellHeight, borders }) {
  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      markers={markers}
      tasks={tasks}
      links={links}
      scales={scales}
      columns={columns}
    />
  );
}
