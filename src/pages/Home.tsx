import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import backgroundImage from "/lovable-uploads/239444fd-540a-49f8-9c73-a8cc3863c797.png";

const Home = () => {
  return (
    <div 
      className="min-h-screen bg-dark-gradient text-white relative" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gradient animate-fade-in">
            Transforme suas ideias em Espaços Notion
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Crie espaços Notion profissionais para seu negócio em segundos com o poder da IA.
            Sem templates genéricos. Apenas espaços personalizados para o seu empreendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/register">
              <Button size="lg" className="bg-blue-purple-gradient hover:opacity-90 hover-scale text-lg font-medium px-8">
                Comece Gratuitamente
              </Button>
            </Link>
            <Link to="#features">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-lg font-medium px-8">
                Ver Recursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Recursos Poderosos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nossa IA foi treinada em milhares de espaços Notion profissionais para entregar a melhor experiência para o seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Personalização Inteligente",
              description: "Nossa IA analisa seu negócio e cria um espaço Notion totalmente adaptado às suas necessidades específicas.",
              icon: "✨"
            },
            {
              title: "Pronto para Usar",
              description: "Todos os espaços vêm com estrutura, bancos de dados e automações pré-configuradas. É só baixar e começar a usar.",
              icon: "🚀"
            },
            {
              title: "Organização Intuitiva",
              description: "Espaços com hierarquia lógica e agrupamentos que fazem sentido para o seu fluxo de trabalho específico.",
              icon: "📚"
            },
            {
              title: "Foco no Crescimento",
              description: "Modelos que priorizam KPIs, métricas e visualizações importantes para impulsionar seu negócio.",
              icon: "📈"
            },
            {
              title: "Estética Profissional",
              description: "Designs limpos e modernos que impressionam clientes e colaboradores.",
              icon: "🎨"
            },
            {
              title: "Atualização Contínua",
              description: "Nossas sugestões evoluem com as tendências e práticas recomendadas do Notion.",
              icon: "🔄"
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-6 hover-scale">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Como Funciona</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Três passos simples para transformar sua ideia em um espaço Notion profissional
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              title: "Descreva seu Negócio",
              description: "Conte-nos sobre sua empresa, seu ramo de atuação e suas necessidades específicas."
            },
            {
              step: "2",
              title: "Nossa IA Trabalha",
              description: "Nosso assistente inteligente cria um espaço Notion personalizado com base nas suas informações."
            },
            {
              step: "3",
              title: "Baixe e Use",
              description: "Faça o download do seu novo espaço e comece a organizar seu negócio imediatamente."
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-8 text-center hover-scale h-full flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-purple-gradient flex items-center justify-center text-xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-gray-500">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">O Que Dizem Nossos Usuários</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empreendedores de diversos setores já transformaram seus negócios com nossos espaços Notion personalizados pela IA
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ana Silva",
              role: "Fundadora, Studio Design",
              testimonial: "O espaço criado para meu estúdio de design superou todas as expectativas. A organização dos projetos e a visibilidade das métricas mudaram completamente nossa produtividade."
            },
            {
              name: "Carlos Mendes",
              role: "CEO, TechStart",
              testimonial: "Em minutos, consegui um workspace que substituiu 5 ferramentas diferentes que usávamos. A economia de tempo e dinheiro foi impressionante."
            },
            {
              name: "Júlia Martins",
              role: "Consultora de Marketing",
              testimonial: "Como consultora, preciso manter cada cliente organizado. O NotionSpaceWizard me deu um sistema que impressiona meus clientes logo na primeira reunião."
            },
          ].map((testimonial, index) => (
            <div key={index} className="glass-card p-6 hover-scale">
              <div className="mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD60A" stroke="#FFD60A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.testimonial}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="glass-card p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-notion-blue rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-notion-purple rounded-full blur-3xl opacity-20" />
          
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Pronto para transformar seu negócio?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a centenas de empreendedores que estão organizando seus negócios com espaços Notion personalizados pela IA.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-blue-purple-gradient hover:opacity-90 hover-scale text-lg font-medium px-10 py-6">
                Comece Agora — É Grátis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-blue-purple-gradient flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8h12"></path>
                  <path d="M6 12h12"></path>
                  <path d="M6 16h8"></path>
                </svg>
              </div>
              <span className="font-semibold">NotionSpaceWizard</span>
            </div>
            
            <div className="flex gap-8 mb-6 md:mb-0">
              <Link to="/" className="text-sm hover:text-primary transition-colors">Início</Link>
              <Link to="/#features" className="text-sm hover:text-primary transition-colors">Recursos</Link>
              <Link to="/#testimonials" className="text-sm hover:text-primary transition-colors">Depoimentos</Link>
              <Link to="/#pricing" className="text-sm hover:text-primary transition-colors">Preços</Link>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 NotionSpaceWizard. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
