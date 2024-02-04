export const convertDateToBrazilTZ = (timestamp: Date | string): string => {
  const date = new Date(timestamp);
  date.setHours(date.getHours() - 3);
  const formattedDate = date.toISOString().replace('T', ' ').replace('Z', '');
  return formattedDate.substring(0, formattedDate.length - 4);
};
