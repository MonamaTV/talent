"use client";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue({ date, handleDate }) {
  const date_ = new Date();
  const date_time =
    date_.getFullYear() + "-" + (date_.getMonth() + 1) + "-" + date_.getDate();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            // value={date}
            onChange={(newValue) => handleDate(newValue)}
            defaultValue={dayjs(date_time)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
