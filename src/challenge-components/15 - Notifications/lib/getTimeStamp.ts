export const getTimeStamp = (time: number) => {
  const current = Date.now();
  //convert to seconds
  const difference = (current - time) / 1000;

  if (difference < 60) {
    return `${Math.floor(difference)} sec(s) ago`;
  }

  if (difference < 3600) {
    return `${Math.floor(difference / 60)} min(s) ago`;
  }

  if (difference < 86400) {
    return `${Math.floor(difference / 3600)} hour(s) ago`;
  }

  return `${Math.floor(difference / 86400)} day(s) ago`;
};
