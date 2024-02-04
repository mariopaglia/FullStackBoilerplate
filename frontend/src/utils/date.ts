export const formatDate = (dateString: string): string => {
  const timeZone = 'America/Sao_Paulo';
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone,
  }).format(new Date(dateString));
};

export const formatDateAndHours = (dateString: string): string => {
  const timeZone = 'America/Sao_Paulo';
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone,
  }).format(new Date(dateString));
};
