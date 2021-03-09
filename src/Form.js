import css from "./Form.module.css";

import React, { useState } from "react";
import { differenceInCalendarDays, addDays } from "date-fns";
import { wx } from "@dhtmlx/trial-react-gantt";
const { Button, Text, Textarea, Slider, Datepicker, Counter } = wx;

export default function Form({ task, action }) {
  const [key, setKey] = useState(1);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const center = (node) => {
    if (node) {
      setLeft((window.innerWidth - node.offsetWidth) / 2);
      setTop((window.innerHeight - node.offsetHeight) / 2);
    }
  };

  const hide = () => {
    action({ action: "hide-details" });
  };

  const update = (name, value) => {
    task[name] = value;
    switch (name) {
      case "date":
        task.duration = differenceInCalendarDays(
          task.end_date,
          task.start_date
        );
        break;

      case "duration":
        task.duration = task.duration * 1;
        task.end_date = addDays(task.start_date, value);
        break;

      default:
        break;
    }

    action({ action: "update-task", id: task.id, obj: task });
    setKey(key + 1); // force update
  };

  const remove = () => {
    action({ action: "delete-task", id: task.id });
    action({ action: "hide-details" });
  };

  return (
    <div className={css.backdrop}>
      <div ref={center} className={css.modal} style={{ left, top }}>
        <div className={css.header}>
          <h3 className={css.title} data-id="title">
            Edit task
          </h3>
          <div className={css.close} onClick={() => hide()}>
            &#9587;
          </div>
        </div>

        <div className={css.body}>
          <Text
            label="Task name"
            value={task.text}
            change={(v) => update("text", v)}
          />

          <Textarea
            label="Task description"
            value={task.details}
            change={(v) => update("details", v)}
          />

          <Slider
            label={`Progress: ${task.progress}%`}
            value={task.progress}
            change={(v) => update("progress", v)}
          />

          <Datepicker
            label="Start date"
            id="start_date"
            value={task.start_date}
            change={(v) => update("start_date", v)}
            readonly
          />

          <Datepicker
            label="End date"
            id="end_date"
            value={task.end_date}
            change={(v) => update("end_date", v)}
            readonly
          />

          <Counter
            label="Duration"
            value={task.duration}
            change={(v) => update("duration", v)}
          />

          <Button appearance="danger" click={() => remove()}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
