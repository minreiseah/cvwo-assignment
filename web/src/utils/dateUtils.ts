export const dateToString = (date: Date): string => {
  return date.toISOString();
}

const options: Intl.DateTimeFormatOptions = {
  year: '2-digit',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
};

export const formatDateString = (date: string): string => {
  return new Date(date).toLocaleString(undefined, options);
}
