import React from "react";
import Gantt from "@dhtmlx/trial-react-gantt";

import { getData, simpleColumns } from "./common/data";
const { tasks, links, scales } = getData();

export default function GanttGrid({ cellHeight, borders }) {
  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      tasks={tasks}
      links={links}
      scales={scales}
      columns={simpleColumns}
      start={new Date(2020, 2, 1)}
      end={new Date(2020, 3, 1)}
    />
  );
}
