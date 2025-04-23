import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

describe('Alert', () => {
  it('renderiza corretamente com título e descrição', () => {
    render(
      <Alert>
        <AlertTitle>Título do Alerta</AlertTitle>
        <AlertDescription>Descrição do alerta para teste</AlertDescription>
      </Alert>
    );
    
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Título do Alerta')).toBeInTheDocument();
    expect(screen.getByText('Descrição do alerta para teste')).toBeInTheDocument();
  });

  it('aplica variante destrutiva corretamente', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Alerta Destrutivo</AlertTitle>
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('border-destructive/50');
  });
});