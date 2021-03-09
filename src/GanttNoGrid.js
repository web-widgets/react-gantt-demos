import React from "react";
import Gantt from "@dhtmlx/trial-react-gantt";

import { getData } from "./common/data";
const { tasks, links, scales } = getData();

export default function GanttNoGrid({ cellHeight, borders }) {
  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      tasks={tasks}
      links={links}
      scales={scales}
      grid={false}
    />
  );
}
