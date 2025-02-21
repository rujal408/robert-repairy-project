import { getBookings } from "@/actions/bookings";
import React from "react";
import CalendarComponent from "./_component/calendar";

const CalendarPage = async () => {
  const res = await getBookings();

  return (
    <div className="p-6">
      <CalendarComponent data={res.data} />
    </div>
  );
};

export default CalendarPage;
