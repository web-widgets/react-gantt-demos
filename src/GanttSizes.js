import React, { useState } from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import { wx } from "@dhtmlx/trial-react-gantt";
import { getData, complexScales } from "./common/data";

const { Slider } = wx;
const { tasks, links, columns } = getData();

export default function GanttScales({ cellHeight, borders }) {
  const [cellWidth, setCellWidth] = useState(100);
  const [scaleHeight, setScaleHeight] = useState(38);
  const [currentCellHeight, setCellHeight] = useState(cellHeight);

  return (
    <div style={rows}>
      <div style={slidersCell}>
        <Slider
          label="Cell width"
          value={cellWidth}
          min={20}
          max={200}
          change={setCellWidth}
        />
        <Slider
          label="Cell height"
          value={currentCellHeight}
          min={20}
          max={60}
          change={setCellHeight}
        />
        <Slider
          label="Scale height"
          value={scaleHeight}
          min={20}
          max={60}
          change={setScaleHeight}
        />
      </div>

      <div style={ganttCell}>
        <Gantt
          borders={borders}
          tasks={tasks}
          links={links}
          scales={complexScales}
          columns={columns}
          cellWidth={cellWidth}
          cellHeight={currentCellHeight}
          scaleHeight={scaleHeight}
          start={new Date(2020, 2, 1)}
          end={new Date(2020, 3, 1)}
        />
      </div>
    </div>
  );
}

const rows = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  backgroundColor: "#fff",
  overflow: "hidden",
};

const slidersCell = {
  padding: "10px",
};

const ganttCell = {
  position: "relative",
  height: "100%",
  borderTop: "1px solid var(--wx-border-color)",
};
