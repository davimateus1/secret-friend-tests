import { RecoilRoot } from 'recoil';
import { ConfigurationPage } from '../pages';
import { render } from '@testing-library/react';

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

describe('Configuration Page', () => {
  it('Should render the configuration page', () => {
    const { container } = render(<ConfigurationPage />, {
      wrapper: RecoilRoot,
    });
    expect(container).toMatchSnapshot();
  });
});
