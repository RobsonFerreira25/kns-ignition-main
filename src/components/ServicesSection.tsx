import { AnimatedSection } from '@/components/AnimatedSection';
import { Globe, Code2, Search, Share2, Zap, Database } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'SITES ESTRATÉGICOS',
    description: 'Landing pages de alta conversão construídas com foco em autoridade e velocidade. Design que diferencia sua marca instantaneamente.',
    features: ['SEO HARDWARE', 'BLAZING FAST', 'CONVERSION MAP'],
  },
  {
    icon: Code2,
    title: 'SISTEMAS ESCALÁVEIS',
    description: 'Aplicações web sob medida para automação de processos complexos. Arquitetura robusta para suportar o crescimento do seu negócio.',
    features: ['API TECH', 'SECURITY FIRST', 'DATA FLOW'],
  },
  {
    icon: Zap,
    title: 'AUTOMAÇÃO PRO',
    description: 'Elimine gargalos operacionais com automações inteligentes. Integramos suas ferramentas para um fluxo de trabalho impecável.',
    features: ['BOT SYSTEMS', 'WORKFLOWS', 'AI AGENTS'],
  },
  {
    icon: Search,
    title: 'SEO & LOCAL GROWTH',
    description: 'Domine as buscas locais. Colocamos sua empresa no radar dos clientes certos no momento exato da decisão.',
    features: ['MAP POWER', 'AUTHORITY', 'LOCAL SEO'],
  },
  {
    icon: Share2,
    title: 'GESTÃO ESTRATÉGICA',
    description: 'Presença digital contínua e estratégica. Criamos narrativas envolventes que transformam seguidores em defensores da marca.',
    features: ['ENGAGEMENT', 'RELATIONSHIP', 'ADS OPS'],
  },
  {
    icon: Database,
    title: 'NÚCLEO DIGITAL',
    description: 'Desenvolvemos a identidade e a infraestrutura digital completa para empresas que buscam liderança de mercado.',
    features: ['BRANDING', 'INFRASTRUCTURE', 'EXPANSION'],
  },
];

import netBg from '@/assets/network-bg.png';

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none opacity-5 saturate-0">
        <img src={netBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <AnimatedSection animation="fade-in">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Módulos de Entrega</span>
          </AnimatedSection>
          <AnimatedSection delay={200} animation="blur-reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              SOLUÇÕES PARA QUEM <br />
              <span className="text-primary">NÃO ACEITA O COMUM</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={400} animation="fade-in-up">
            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
              Não entregamos apenas código. Entregamos vantagem competitiva através de
              tecnologia de ponta e design focado em resultados reais.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 50}
              animation="fade-in-up"
              className="group"
            >
              <div className="tech-card p-10 lg:p-12 h-full flex flex-col border-white/5 border-l-primary group-hover:border-l-4 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mb-8 border border-primary/20 bg-primary/5 group-hover:bg-primary/20 transition-all">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light mb-auto leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[9px] font-bold tracking-[0.1em] px-3 py-1 bg-white/5 text-white/60 uppercase border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Subtle Hover Indicator */}
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  VER DETALHES <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';
