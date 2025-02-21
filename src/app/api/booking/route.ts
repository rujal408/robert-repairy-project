import { NextResponse } from "next/server";

export const GET = () => {
  const data = [
    {
      date: "2025-02-05",
      booking_name: "Shop",
    },
    {
      date: "2025-02-11",
      booking_name: "Mall",
    },
    {
      date: "2025-02-12",
      booking_name: "Cafe",
    },
    {
      date: "2025-02-12",
      booking_name: "Hotel",
    },
  ];
  return NextResponse.json({ data });
};
