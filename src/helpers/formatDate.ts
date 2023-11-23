import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

//
// Função que recebe uma string com a data no formato dd/MM/yyyy HH:mm:ss
// e retorna a data formatada
//
export const formatDate = (dateString: string) => {
  const date = parse(dateString, 'dd/MM/yyyy HH:mm:ss', new Date());
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
};
