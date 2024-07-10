const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (input: string) => {
  const [date, time] = input.split("T");

  // adding the space will use UTC for the creation
  const tempDate = new Date(date + " ");
  let formattedDate = MONTHS[tempDate.getMonth()] + " " + tempDate.getDate();

  if (isToday(tempDate)) {
    formattedDate = "Today";
  }

  return {
    date: formattedDate,
    time: time,
  };
};

function isToday(date: Date) {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
