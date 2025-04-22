
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader2, ArrowRight, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulando chamada para API
    setTimeout(() => {
      setIsLoading(false);
      setIsGenerated(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-dark-gradient text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-blue-purple-gradient flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8h12"></path>
              <path d="M6 12h12"></path>
              <path d="M6 16h8"></path>
            </svg>
          </div>
          <span className="font-semibold">NotionSpaceWizard</span>
        </div>
        
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            Meus Espaços
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Templates
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            Configurações
          </a>
        </nav>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="glass-card p-4 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-notion-purple flex items-center justify-center text-xs">
                P
              </div>
              <span>Plano Gratuito</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <div className="h-2 bg-blue-purple-gradient rounded-full w-2/5"></div>
            </div>
            <p className="mt-2 text-gray-400">2/5 espaços usados</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gradient">Crie seu Espaço Notion</h1>
            <p className="text-gray-300 mt-2">
              Descreva seu negócio e nossa IA criará um espaço Notion personalizado para você
            </p>
          </header>
          
          {!isGenerated ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Informações do Negócio</CardTitle>
                  <CardDescription className="text-gray-400">
                    Quanto mais detalhes você fornecer, melhor será o resultado
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Nome da Empresa</Label>
                      <Input
                        id="business-name"
                        placeholder="Ex: Tech Solutions"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-type">Ramo de Atividade</Label>
                      <Input
                        id="business-type"
                        placeholder="Ex: Agência de Marketing Digital"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-description">Descreva seu Negócio em Detalhes</Label>
                    <Textarea
                      id="business-description"
                      placeholder="Descreva seu negócio, objetivos, equipe, processos, clientes, produtos/serviços e qualquer outra informação relevante..."
                      value={businessDescription}
                      onChange={(e) => setBusinessDescription(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[200px]"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="bg-blue-purple-gradient hover:opacity-90 w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Criando seu espaço...
                      </>
                    ) : (
                      <>
                        Criar Espaço Notion
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="glass-card p-4 text-sm text-gray-400 flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <p>
                  Seus dados são usados apenas para criar o espaço Notion. Não compartilhamos suas informações com terceiros.
                </p>
              </div>
            </form>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <Card className="glass-card border-0">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-notion-green flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <CardTitle className="text-center text-2xl">Seu Espaço está Pronto!</CardTitle>
                  <CardDescription className="text-center text-gray-400">
                    Criamos um espaço Notion personalizado para {businessName} no ramo de {businessType}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative border border-white/10 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                    <img 
                      src="/lovable-uploads/2337052b-939a-4a60-bf92-a727ac74b3e2.png" 
                      alt="Preview do Espaço Notion" 
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <p className="font-semibold text-xl">Espaço para {businessName}</p>
                      <p className="text-gray-300 text-sm">Personalizado para {businessType}</p>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 border-0">
                    <h3 className="font-medium mb-2">O que está incluso:</h3>
                    <ul className="space-y-2">
                      {[
                        "Dashboard principal com KPIs e métricas",
                        "Banco de dados de clientes/projetos",
                        "Sistema de acompanhamento de tarefas",
                        "Templates de documentos",
                        "Calendário integrado",
                        "Processos automatizados"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-notion-blue">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-purple-gradient hover:opacity-90 flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    Baixar Espaço Notion
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 flex-1">
                    Criar Outro Espaço
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Próximos Passos</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Faça o download do arquivo",
                      description: "Clique no botão 'Baixar Espaço Notion' acima para obter seu arquivo."
                    },
                    {
                      title: "Importe para o Notion",
                      description: "Abra o Notion, clique em 'Importar' e selecione o arquivo baixado."
                    },
                    {
                      title: "Personalize conforme necessário",
                      description: "Ajuste o espaço de acordo com suas preferências específicas."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
