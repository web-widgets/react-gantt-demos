import React, { useEffect, useState, useRef } from "react";
import Gantt from "@dhtmlx/trial-react-gantt";

import { getData } from "./common/data";
import { RestDataProvider } from "@dhtmlx/gantt-data-provider";

const { columns, scales } = getData();
const url = "https://docs.dhtmlx.com/gantt-backend";

// eslint-disable-next-line
const useMount = (fun) => useEffect(fun, []);

export default function GanttBackend({ cellHeight, borders }) {
  const [tasks, setTasks] = useState([]);
  const [links, setLinks] = useState([]);

  const server = useRef(null);
  const store = useRef(null);

  useMount(() => {
    const s = new RestDataProvider(url, {
      task: (id, obj) => store.current.updateTask(id, obj, true),
      link: (id, obj) => store.current.updateLink(id, obj, true),
    });
    s.getData().then((data) => {
      setTasks(data.tasks);
      setLinks(data.links);
    });
    server.current = s;
  });

  return (
    <Gantt
      cellHeight={cellHeight}
      borders={borders}
      tasks={tasks}
      links={links}
      scales={scales}
      columns={columns}
      save={(data) => server.current.saveData(data)}
      store={(ev) => (store.current = ev)}
    />
  );
}
