import React from "react";
import { format } from "date-fns";
import css from "./MyTooltipContent.module.css";

export default function MyTooltipContent({ data }) {
  const { type = "", text = "", start_date = "", end_date = "" } = data;

  const mask = "yyyy.MM.dd";

  return (
    <div className={css.data}>
      <div className={css.text}>
        <span className={css.caption}>{type}: </span>
        {text}
      </div>

      <div className={css.text}>
        <span className={css.caption}>Start: </span>
        {format(start_date, mask)}
      </div>

      <div className={css.text}>
        <span className={css.caption}>End: </span>
        {format(end_date, mask)}
      </div>
    </div>
  );
}
