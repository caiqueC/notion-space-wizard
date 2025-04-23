import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Index from '@/pages/Index';

// Mock para o hook useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn()
  };
});

describe('Index', () => {
  it('redireciona para a página inicial', () => {
    const navigateMock = vi.fn();
    (useNavigate as ReturnType<typeof vi.fn>).mockReturnValue(navigateMock);
    
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
    
    // Verifica se o navigate foi chamado com o caminho correto
    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});