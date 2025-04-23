import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Login from '@/pages/Login';

describe('Login', () => {
  it('renderiza o formulário de login corretamente', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Acesse sua conta')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByText('Entrar')).toBeInTheDocument();
  });
  
  it('permite entrada de dados nos campos', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    
    fireEvent.change(emailInput, { target: { value: 'teste@exemplo.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senha123' } });
    
    expect(emailInput).toHaveValue('teste@exemplo.com');
    expect(passwordInput).toHaveValue('senha123');
  });
  
  it('contém links para registro e recuperação de senha', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Esqueceu?')).toBeInTheDocument();
    expect(screen.getByText('Registre-se')).toBeInTheDocument();
  });
});