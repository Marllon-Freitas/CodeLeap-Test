export const formatPostDate = (date) => {
  // calculate how many time since the post was created
  const timeSince = Date.now() - Date.parse(date);
  // convert timeSince from milliseconds to seconds
  const timeSinceInSeconds = timeSince / 1000;
  // if timeSinceInSeconds is less than 60, return the number of seconds
  if (timeSinceInSeconds < 60) {
    return `${Math.floor(timeSinceInSeconds)} seconds ago`;
  }
  // convert timeSinceInSeconds to minutes
  const timeSinceInMinutes = timeSinceInSeconds / 60;
  // if timeSinceInMinutes is less than 60, return the number of minutes
  if (timeSinceInMinutes < 60) {
    return `${Math.floor(timeSinceInMinutes)} minutes ago`;
  }
  // convert timeSinceInMinutes to hours
  const timeSinceInHours = timeSinceInMinutes / 60;
  // if timeSinceInHours is less than 24, return the number of hours
  if (timeSinceInHours < 24) {
    return `${Math.floor(timeSinceInHours)} hours ago`;
  }
  // convert timeSinceInHours to days
  const timeSinceInDays = timeSinceInHours / 24;
  // if timeSinceInDays is less than 7, return the number of days
  if (timeSinceInDays < 7) {
    return `${Math.floor(timeSinceInDays)} days ago`;
  }
  // convert timeSinceInDays to weeks
  const timeSinceInWeeks = timeSinceInDays / 7;
  // if timeSinceInWeeks is less than 4, return the number of weeks
  if (timeSinceInWeeks < 4) {
    return `${Math.floor(timeSinceInWeeks)} weeks ago`;
  }
  // convert timeSinceInWeeks to months
  const timeSinceInMonths = timeSinceInWeeks / 4;
  // if timeSinceInMonths is less than 12, return the number of months
  if (timeSinceInMonths < 12) {
    return `${Math.floor(timeSinceInMonths)} months ago`;
  }
  // convert timeSinceInMonths to years
  const timeSinceInYears = timeSinceInMonths / 12;
  // return the number of years
  return `${Math.floor(timeSinceInYears)} years ago`;
};
