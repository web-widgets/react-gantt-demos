import React, { useState } from "react";
import Gantt from "@dhtmlx/trial-react-gantt";
import { wx, locales } from "@dhtmlx/trial-react-gantt";
import { getData } from "./common/data";

const { Button, CNLocale, RULocale } = wx;
const { tasks, links, scales, columns } = getData();

const langs = ["en", "ru", "cn"];

export default function GanttLocale({ cellHeight, borders }) {
  const [index, setIndex] = useState(0);

  return (
    <div style={rows}>
      <div style={row}>
        <Button
          click={() => setIndex(index >= langs.length - 1 ? 0 : index + 1)}
        >
          Change Locale
        </Button>
      </div>

      <div style={ganttCell}>
        {langs[index] === "en" && (
          <Gantt
            cellHeight={cellHeight}
            borders={borders}
            tasks={tasks}
            links={links}
            scales={scales}
            columns={columns}
          />
        )}

        {langs[index] === "ru" && (
          <RULocale words={locales.ru}>
            <Gantt
              cellHeight={cellHeight}
              borders={borders}
              tasks={tasks}
              links={links}
              scales={scales}
              columns={columns}
            />
          </RULocale>
        )}

        {langs[index] === "cn" && (
          <CNLocale words={locales.cn}>
            <Gantt
              cellHeight={cellHeight}
              borders={borders}
              tasks={tasks}
              links={links}
              scales={scales}
              columns={columns}
            />
          </CNLocale>
        )}
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
