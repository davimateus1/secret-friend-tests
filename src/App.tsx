import { RecoilRoot } from 'recoil';
import { ConfigurationPage, SortPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<ConfigurationPage />} />
          <Route path="/sorteio" element={<SortPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};
