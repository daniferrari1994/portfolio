import React from 'react';
import { render, screen } from '@/utils/renderWithProviders';
import { Provider } from "@/components/ui/provider"
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import FormInput from '.';
import '@testing-library/jest-dom';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider>{children}</Provider>
);

describe('FormInput component', () => {
  const mockRegister = {
    name: 'testInput',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
  };

  it('renderiza el input y responde a eventos', async () => {
    function TestComponent() {
      const { register } = useForm();
      return <FormInput placeholder="Escribe aquí" register={register('testInput')} error={undefined} errorMessage="" />;
    }

    render(<TestComponent />, { wrapper: Wrapper });

    const input = screen.getByPlaceholderText('Escribe aquí');
    expect(input).toBeInTheDocument();

    await userEvent.type(input, 'Hola');
    expect(input).toHaveValue('Hola');
  });

  it('muestra el placeholder correctamente', () => {
    render(
      <FormInput
        placeholder="Email"
        register={mockRegister}
        error={undefined}
        errorMessage=""
      />
    );

    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeInTheDocument();
  });

  it('muestra el mensaje de error cuando hay error', () => {
    render(
      <FormInput
        placeholder="Email"
        register={mockRegister}
        error={{ message: 'Error!', type: 'required' }}
        errorMessage="Campo obligatorio"
      />
    );

    const errorText = screen.getByText('Campo obligatorio');
    expect(errorText).toBeVisible();
    expect(errorText).toHaveStyle('color: #E53E3E');
  });

  it('no muestra el mensaje de error cuando no hay error', () => {
    render(
      <FormInput
        placeholder="Email"
        register={mockRegister}
        error={undefined}
        errorMessage=""
      />
    );

    const errorText = screen.queryByText(/./);
    expect(errorText).toBeNull();
  });

  it('renderiza el mensaje de error con display none cuando error existe pero errorMessage está vacío', () => {
    render(
      <FormInput
        placeholder="Email"
        register={mockRegister}
        error={{ message: 'Error!', type: 'required' }}
        errorMessage=""
      />
    );

    const errorText = screen.getByTestId('error-message');
    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveStyle('display: none');
  });

  it('aplica maxLength y estilos personalizados', () => {
    render(
      <FormInput
        placeholder="Nombre"
        register={mockRegister}
        error={undefined}
        errorMessage=""
        maxLength={5}
        styles={{ backgroundColor: 'red' }}
      />
    );

    const input = screen.getByPlaceholderText('Nombre');
    expect(input).toHaveAttribute('maxLength', '5');
    expect(input).toHaveStyle('background-color: red');
  });
});
