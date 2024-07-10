export type TEvent = {
  name: string;
  artist: string;
  venue: string;
  venueAddress: string;
  // date and time separated by T (like ISO string)
  // ex: 2024-07-10T16:00
  date: string;
  availableTickets: number;
};

export const EventsData: TEvent[] = [
  {
    name: "A Day to Remember",
    artist: "A Day to Remember",
    venue: "WAMU Theater",
    venueAddress: "800 Occidental Ave S, Seattle, WA",
    date: "2024-07-15T19:00",
    availableTickets: 10,
  },
  {
    name: "The Show",
    artist: "Niall Horan",
    venue: "White River Amphitheatre",
    venueAddress: "40601 Auburn Enumclaw Road, Auburn, WA 98092",
    date: "2024-07-23T19:30",
    availableTickets: 100,
  },
  {
    name: "Grey Day Tour 2024",
    artist: "$uicideboy$",
    venue: "Climate Pledge Arena",
    venueAddress: "334 1st Ave N, Seattle, WA 98109",
    date: "2024-08-24T19:00",
    availableTickets: 100,
  },
  {
    name: "The Saviors Tour",
    artist: "Green Day",
    venue: "T-Mobile Park",
    venueAddress: "1250 1st Ave S., Seattle, WA 981341216",
    date: "2024-09-23T17:30",
    availableTickets: 0,
  },
];
