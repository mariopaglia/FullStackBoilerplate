export const convertDateToBrazilTZ = (timestamp: Date | string): string => {
  const timeZone = 'America/Sao_Paulo';
  const date = typeof timestamp === 'string' ? new Date(timestamp.replace(' ', 'T') + 'Z') : timestamp;

  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: timeZone,
  }).format(date);
};
