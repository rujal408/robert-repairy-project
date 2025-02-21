"use client";

import React, { useMemo } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { getEvents } from "../utils/date";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);
const customEventStyle = () => {
  return {
    style: {
      backgroundColor: "transparent", // Remove box background
      color: "grey", // Set text color
      border: "none", // Remove border
      fontWeight: "normal", // Make text stand out
      padding: 0,
      fontSize: "12px",
      textAlign: "right",
      paddingRight: 3,
    },
  };
};

const AnalyticsPage = ({ data }) => {
  const events = useMemo(() => getEvents(data), [data]);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      style={{ height: 500 }}
      eventPropGetter={customEventStyle}
      views={{ month: true, day: true, week: true }}
    />
  );
};

export default AnalyticsPage;
