import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from '@/components/ui/input';

describe('Input', () => {
  it('renderiza corretamente', () => {
    render(<Input placeholder="Digite aqui" />);
    expect(screen.getByPlaceholderText('Digite aqui')).toBeInTheDocument();
  });

  it('aceita entrada de texto', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Texto de teste' } });
    expect(input).toHaveValue('Texto de teste');
  });

  it('aplica classes personalizadas', () => {
    render(<Input className="test-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('test-class');
  });
});