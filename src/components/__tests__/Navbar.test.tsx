import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

// Mock para o react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
      <a href={to}>{children}</a>
    ),
  };
});

describe('Navbar', () => {
  it('renderiza o logo e nome do app', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText('NotionSpaceWizard')).toBeInTheDocument();
  });

  it('renderiza os links de navegação', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Recursos')).toBeInTheDocument();
    expect(screen.getByText('Depoimentos')).toBeInTheDocument();
    expect(screen.getByText('Preços')).toBeInTheDocument();
  });

  it('renderiza os botões de login e registro', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Começar Grátis')).toBeInTheDocument();
  });
});