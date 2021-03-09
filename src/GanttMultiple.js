import React, { useEffect, useState } from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import { wx } from "@dhtmlx/trial-react-gantt";
import { getData, complexScales } from "./common/data";

const { Button } = wx;
// eslint-disable-next-line
const useMount = (fun) => useEffect(fun, []);

export default function GanttMultiple({ cellHeight, borders }) {
  const [counter, setCounter] = useState(0);
  const [gantts, setGantts] = useState([]);

  const addGantt = () => {
    setCounter(counter + 1);
    setGantts([
      ...gantts,
      {
        id: new Date().valueOf(),
        data: getData("[" + (counter + 1) + "] "),
      },
    ]);
  };

  const removeGantt = (id) => {
    setGantts(gantts.filter((a) => a.id !== id));
  };

  useMount(() => addGantt(), []);

  return (
    <div style={rows}>
      <div style={row}>
        <Button click={() => addGantt()}>Add Gantt</Button>
      </div>

      {gantts.map((gantt) => (
        <div key={gantt.id} style={ganttCell}>
          <div style={ganttHeader}>
            <Button appearance="danger" click={() => removeGantt(gantt.id)}>
              Delete Gantt
            </Button>
          </div>
          <Gantt
            cellHeight={cellHeight}
            borders={borders}
            tasks={gantt.data.tasks}
            links={gantt.data.links}
            scales={complexScales}
            columns={gantt.data.columns}
            start={new Date(2020, 2, 1)}
            end={new Date(2020, 3, 1)}
          />
        </div>
      ))}
    </div>
  );
}

const rows = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const row = {
  padding: "13px",
};

const ganttCell = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
  overflow: "hidden",
};

const ganttHeader = {
  padding: "13px",
  backgroundColor: "#fff",
  borderBottom: "1px solid var(--wx-border-color)",
};
