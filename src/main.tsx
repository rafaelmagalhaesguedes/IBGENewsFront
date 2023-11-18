import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.tsx';
import App from './App.tsx';
import NewsProvider from './context/NewsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <NewsProvider>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </NewsProvider>,
);
