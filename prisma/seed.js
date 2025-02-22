import { PrismaClient } from "@prisma/client";

const prismadb = new PrismaClient();

async function main() {
  await prismadb.user.create({
    data: {
      email: "admin@crawlerhub.com",
      name: "Admin",
      password: "User@123",
    },
  });

  await prismadb.booking.createMany({
    data: [
      {
        date: "2025-02-05",
        booking_name: "Shop",
      },
      {
        date: "2025-02-05",
        booking_name: "Gym",
      },
      {
        date: "2025-02-06",
        booking_name: "Library",
      },
      {
        date: "2025-02-07",
        booking_name: "Restaurant",
      },
      {
        date: "2025-02-10",
        booking_name: "Theater",
      },
      {
        date: "2025-02-11",
        booking_name: "Mall",
      },
      {
        date: "2025-02-11",
        booking_name: "Cinema",
      },
      {
        date: "2025-02-12",
        booking_name: "Cafe",
      },
      {
        date: "2025-02-12",
        booking_name: "Hotel",
      },
      {
        date: "2025-02-12",
        booking_name: "Coworking Space",
      },
      {
        date: "2025-02-14",
        booking_name: "Resort",
      },
      {
        date: "2025-02-18",
        booking_name: "Conference Room",
      },
      {
        date: "2025-02-20",
        booking_name: "Salon",
      },
      {
        date: "2025-02-25",
        booking_name: "Stadium",
      },
      {
        date: "2025-03-01",
        booking_name: "Park",
      },
      {
        date: "2025-03-03",
        booking_name: "Music Studio",
      },
      {
        date: "2025-03-05",
        booking_name: "Dance Hall",
      },
      {
        date: "2025-03-07",
        booking_name: "Resort",
      },
      {
        date: "2025-03-10",
        booking_name: "Exhibition Center",
      },
      {
        date: "2025-03-12",
        booking_name: "Coaching Center",
      },
      {
        date: "2025-03-15",
        booking_name: "Event Hall",
      },
      {
        date: "2025-03-18",
        booking_name: "Bowling Alley",
      },
      {
        date: "2025-03-20",
        booking_name: "Gaming Arena",
      },
      {
        date: "2025-03-22",
        booking_name: "Lounge",
      },
      {
        date: "2025-03-25",
        booking_name: "Office Space",
      },
      {
        date: "2025-03-28",
        booking_name: "Spa",
      },
      {
        date: "2025-03-30",
        booking_name: "Banquet Hall",
      },
    ],
  });
}
main()
  .then(async () => {
    await prismadb.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismadb.$disconnect();
    process.exit(1);
  });
