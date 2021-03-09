import React from "react";
import Gantt from "@dhtmlx/trial-react-gantt";

import { getData } from "./common/data";
const { tasks, links, scales, columns } = getData();

const noDrag = false; // if true - can't move and dnd tasks
const noEdit = false; // if true - can't edit task
const noNewLink = false; // if true - can't create new links

const readonly =
  noDrag || noEdit || noNewLink ? { noDrag, noEdit, noNewLink } : true;

export default function GanttReadOnly({ cellHeight, borders }) {
  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      readonly={readonly}
      tasks={tasks}
      links={links}
      scales={scales}
      columns={columns.filter((a) => a.name !== "add-task")}
      start={new Date(2020, 2, 1)}
      end={new Date(2020, 3, 1)}
    />
  );
}
