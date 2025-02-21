import dayjs from "dayjs";

export const getEvents = (bookings) => {
  const eventMap = {};

  // Count bookings per date
  bookings.forEach(({ date }) => {
    eventMap[date] = (eventMap[date] || 0) + 1;
  });

  // Generate events including days with zero bookings
  const allDates = Array.from({ length: 365 }, (_, i) =>
    dayjs("2025-02-01").add(i, "days").format("YYYY-MM-DD")
  );

  return allDates.map((date) => ({
    title: `${eventMap[date] || 0} bookings`,
    start: dayjs(date).toDate(),
    end: dayjs(date).toDate(),
    allDay: true,
  }));
};
