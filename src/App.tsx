import { RecoilRoot } from 'recoil';
import { ConfigurationPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<ConfigurationPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};
