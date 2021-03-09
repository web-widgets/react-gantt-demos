import React from "react";
import Gantt from "@dhtmlx/trial-react-gantt";

import { getData, complexScales } from "./common/data";
const { tasks, links, columns } = getData();

export default function GanttScales({ cellHeight, borders }) {
  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      tasks={tasks}
      links={links}
      scales={complexScales}
      columns={columns}
      start={new Date(2020, 2, 1)}
      end={new Date(2020, 3, 1)}
    />
  );
}
