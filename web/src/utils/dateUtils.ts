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

export const formatDateString = (s: string): string => {
  return new Date(s).toLocaleString(undefined, options);
}
