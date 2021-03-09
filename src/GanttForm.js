import React, { useState, useRef } from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import Form from "./Form";

import { getData } from "./common/data";
const { tasks, links, scales, columns } = getData();

export default function GanttForm({ cellHeight, borders }) {
  const store = useRef(null);
  const [task, setTask] = useState(null);

  const ganttAction = (ev) => {
    const { id, nId, action } = ev;

    switch (action) {
      case "show-details":
        setTask(store.current.getTask(id));
        break;

      case "add-task":
        setTask(store.current.getTask(nId));
        break;

      default:
        break;
    }
  };

  const formAction = (ev) => {
    switch (ev.action) {
      case "hide-details":
        setTask(null);
        break;

      default:
        break;
    }

    store.current.action(ev.id, ev.action, ev.obj);
  };

  return (
    <>
      <Gantt
        cellHeight={cellHeight}
        borders={borders}
        readonly={{ noEdit: true }}
        tasks={tasks}
        links={links}
        scales={scales}
        columns={columns}
        start={new Date(2020, 2, 1)}
        end={new Date(2020, 4, 1)}
        action={(ev) => ganttAction(ev)}
        store={(ev) => (store.current = ev)}
      />

      {task && <Form task={task} action={(ev) => formAction(ev)} />}
    </>
  );
}
