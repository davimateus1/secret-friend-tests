import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserForm } from './components';
import { RecoilRoot } from 'recoil';

export const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<UserForm />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};
