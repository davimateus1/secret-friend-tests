import { RecoilRoot } from 'recoil';
import { UserForm } from '../components';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe('UserForm Tests', () => {
  it('Should be able to dont add new participant if input is empty', () => {
    render(<UserForm />, { wrapper: RecoilRoot });

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Should be able to add new participant if input is not empty', () => {
    render(<UserForm />, { wrapper: RecoilRoot });

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(button).not.toBeDisabled();
    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  it('Should be able to dont add duplicate participant', () => {
    const runLength = 2;
    render(<UserForm />, { wrapper: RecoilRoot });

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();

    Array.from({ length: runLength }).forEach(() => {
      fireEvent.change(input, { target: { value: 'John Doe' } });

      expect(button).not.toBeDisabled();
      fireEvent.click(button);
    });

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe(
      'Nomes duplicados não são permitidos!'
    );
  });

  it('Should be able to clear error message after specific time', () => {
    const runLength = 2;
    jest.useFakeTimers();

    render(<UserForm />, { wrapper: RecoilRoot });

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();

    Array.from({ length: runLength }).forEach(() => {
      fireEvent.change(input, { target: { value: 'John Doe' } });

      expect(button).not.toBeDisabled();
      fireEvent.click(button);
    });

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
