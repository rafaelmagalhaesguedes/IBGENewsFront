import { render } from '@testing-library/react';
import useFetch from '../hooks/useFetch';

// Crie um componente de teste que usa o hook useFetch
function TestComponent() {
  const { dataNews, isLoading } = useFetch();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {dataNews.map((news) => <div key={ news.id }>{news.titulo}</div>)}
    </div>
  );
}

describe('UseFetch hook testing', () => {
  it('1. Verify that the expected text appears in the document', async () => {
    global.fetch = async () => new Response(JSON.stringify({ items: [{ id: 1, titulo: 'Test News' }] }));

    const { findByText } = render(<TestComponent />);

    // Verifique se o texto esperado aparece no documento
    expect(await findByText('Test News')).toBeTruthy();
  });

  it('2. Verify fetch error', async () => {
    global.fetch = async () => {
      throw new Error('Erro ao buscar dados da API');
    };

    const { findByText } = render(<TestComponent />);

    // Verifique se o texto de carregamento aparece no documento
    expect(await findByText('Loading...')).toBeTruthy();
  });
});
