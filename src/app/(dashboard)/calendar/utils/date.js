import dayjs from "dayjs";

/**
 * Generates an array of calendar events based on booking data.
 *
 * @param {Array} bookings - An array of booking objects, where each object contains a `date` property in "YYYY-MM-DD" format.
 * @returns {Array} - An array of event objects formatted for use with a calendar component.
 *
 * ### Functionality:
 * - Counts the number of bookings per date.
 * - Generates events for every day in the year, ensuring days with zero bookings are included.
 * - Each event displays the number of bookings on that day as the title.
 * - Events are all-day events spanning from the start to the end of the same date.
 */
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
