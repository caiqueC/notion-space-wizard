import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';

// Mock para o componente Navbar
vi.mock('@/components/Navbar', () => ({
  Navbar: () => <div data-testid="navbar-mock">Navbar Mockada</div>
}));

describe('Home', () => {
  it('renderiza o título principal', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Transforme suas ideias em Espaços Notion')).toBeInTheDocument();
  });
  
  it('renderiza a seção de recursos', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Recursos Poderosos')).toBeInTheDocument();
    expect(screen.getByText('Personalização Inteligente')).toBeInTheDocument();
    expect(screen.getByText('Pronto para Usar')).toBeInTheDocument();
  });
  
  it('renderiza a seção de como funciona', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Como Funciona')).toBeInTheDocument();
    expect(screen.getByText('Descreva seu Negócio')).toBeInTheDocument();
  });
  
  it('renderiza a seção de depoimentos', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    
    expect(screen.getByText('O Que Dizem Nossos Usuários')).toBeInTheDocument();
  });
});