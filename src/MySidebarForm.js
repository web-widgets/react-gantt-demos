import React from "react";
import { differenceInCalendarDays } from "date-fns";
import { wx } from "@dhtmlx/trial-react-gantt";
const { Text, Datepicker } = wx;

export default function MySidebarForm({ task, action }) {
  const update = (name, value) => {
    switch (name) {
      case "start_date":
        task.start_date = value;
        task.duration = differenceInCalendarDays(
          task.end_date,
          task.start_date
        );
        break;

      case "text":
        task.textRight = value;
        break;

      default:
        break;
    }
    action({ action: "update-task", id: task.id, obj: task });
  };

  return (
    <>
      <Text
        autofocus={true}
        label="Name"
        value={task.textRight}
        change={(v) => update("text", v)}
      />

      <Datepicker
        label="Start date"
        id="start_date"
        value={task.start_date}
        change={(v) => update("start_date", v)}
        readonly
      />
    </>
  );
}
