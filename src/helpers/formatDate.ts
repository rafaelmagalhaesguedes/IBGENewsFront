import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (dateString: string) => {
  const date = parse(dateString, 'dd/MM/yyyy HH:mm:ss', new Date());
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
};
