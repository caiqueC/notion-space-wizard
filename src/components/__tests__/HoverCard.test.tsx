import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

describe('HoverCard', () => {
  it('renderiza o gatilho corretamente', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Passe o mouse aqui</HoverCardTrigger>
        <HoverCardContent>Conteúdo do HoverCard</HoverCardContent>
      </HoverCard>
    );
    
    expect(screen.getByText('Passe o mouse aqui')).toBeInTheDocument();
  });
});