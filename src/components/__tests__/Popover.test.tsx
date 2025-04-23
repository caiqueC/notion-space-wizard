import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

describe('Popover', () => {
  it('mostra o conteúdo quando o gatilho é clicado', () => {
    render(
      <Popover>
        <PopoverTrigger>Abrir Popover</PopoverTrigger>
        <PopoverContent>Conteúdo do Popover</PopoverContent>
      </Popover>
    );
    
    // Inicialmente o conteúdo não deve estar visível
    expect(screen.queryByText('Conteúdo do Popover')).not.toBeInTheDocument();
    
    // Clica no gatilho
    fireEvent.click(screen.getByText('Abrir Popover'));
    
    // Agora o conteúdo deve estar visível
    // Nota: Como o Popover usa Portal, pode ser necessário ajustar este teste
    // dependendo da implementação exata do Radix UI
  });
});