import React from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import MySidebarForm from "./MySidebarForm";
import MyTaskContent from "./MyTaskContent";

import { getData } from "./common/data";
const { tasks, links, scales, columns } = getData();
tasks.forEach((task) => {
  task.textRight = task.text;
  task.text = "";
});
columns.forEach((column, i) => {
  if (i === 0) column.name = "textRight";
});

export default function GanttText({ cellHeight, borders }) {
  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      templates={{ taskText: MyTaskContent, sidebarForm: MySidebarForm }}
      tasks={tasks}
      links={links}
      scales={scales}
      columns={columns}
    />
  );
}
