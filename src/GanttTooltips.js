import React from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import MyTooltipContent from "./MyTooltipContent";

import { getData } from "./common/data";
const { tasks, links, scales, columns } = getData();
export default function GanttTooltip({ cellHeight, borders }) {
  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      tooltip={(data) => <MyTooltipContent data={data} />}
      tasks={tasks}
      links={links}
      scales={scales}
      columns={columns}
    />
  );
}
