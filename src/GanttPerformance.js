import React, { useState, useEffect } from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import { wx } from "@dhtmlx/trial-react-gantt";
import { getData, complexScales } from "./common/data";

const { Button } = wx;

const count = 10000;
const years = 3;
const { tasks, links, columns } = getData("", count, years);

export default function GanttPerformance({ cellHeight, borders }) {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => setTime(start ? new Date() - start : 0), [start]);

  return (
    <div style={rows}>
      <div style={row}>
        {time > 0 ? (
          <span>
            10 000 tasks ( {years} years ) rendered in <span>{time}</span> ms
          </span>
        ) : (
          <Button click={() => setStart(new Date())}>Start</Button>
        )}
      </div>

      {start && (
        <div style={ganttCell}>
          <Gantt
            cellHeight={cellHeight}
            borders={borders}
            tasks={tasks}
            links={links}
            scales={complexScales}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
}

// styles

const rows = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

const row = {
  padding: "10px",
  font: "var(--wx-font)",
};

const ganttCell = {
  position: "relative",
  height: "100%",
};
