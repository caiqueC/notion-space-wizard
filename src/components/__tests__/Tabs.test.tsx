import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

describe('Tabs', () => {
  it('renderiza e alterna entre abas corretamente', async () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Aba 1</TabsTrigger>
          <TabsTrigger value="tab2">Aba 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Conteúdo da Aba 1</TabsContent>
        <TabsContent value="tab2">Conteúdo da Aba 2</TabsContent>
      </Tabs>
    );
    
    // Verifica se a primeira aba está ativa por padrão
    expect(screen.getByText('Conteúdo da Aba 1')).toBeVisible();
    
    // Clica na segunda aba
    fireEvent.click(screen.getByText('Aba 2'));
    
    // Aguarda a animação completar e verifica se o conteúdo da segunda aba está visível
    await waitFor(() => {
      expect(screen.getByText('Conteúdo da Aba 2')).toBeVisible();
    });
  });
});