import { apiFetch } from "@/lib/api-fetch";

export const getBookings = () => apiFetch("/api/booking");
