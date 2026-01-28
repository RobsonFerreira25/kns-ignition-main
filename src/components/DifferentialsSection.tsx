import { AnimatedSection } from '@/components/AnimatedSection';
import { Shield, Rocket, Target, Clock, HeadphonesIcon, BarChart3 } from 'lucide-react';
import techBg from '@/assets/tech-bg.png';

const differentials = [
  {
    icon: Shield,
    title: 'NÚCLEO BLINDADO',
    description: 'Segurança de nível enterprise integrada nativamente em cada linha de código.',
  },
  {
    icon: Rocket,
    title: 'ALTA DISPONIBILIDADE',
    description: 'Sistemas resilientes projetados para escala global sem interrupções.',
  },
  {
    icon: Target,
    title: 'PRECISÃO ANALÍTICA',
    description: 'Foco absoluto em KPIs que impulsionam o crescimento real e mensurável.',
  },
  {
    icon: Clock,
    title: 'ENTREGA CONTÍNUA',
    description: 'Ciclos de feedback rápidos e deploys automatizados para máxima agilidade.',
  },
  {
    icon: HeadphonesIcon,
    title: 'SUPORTE ELITE',
    description: 'Acesso direto a arquitetos e engenheiros para resolver desafios complexos.',
  },
  {
    icon: BarChart3,
    title: 'CULTURA DE DADOS',
    description: 'Inteligência de mercado aplicada para antecipar tendências e comportamentos.',
  },
];


export const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-card/20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5 saturate-0">
        <img src={techBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-grid-tech opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Static Sidebar Content (The 10% in 90/10 feel) */}
          <div className="lg:w-1/3 flex flex-col pt-8">
            <div className="sticky top-32">
              <AnimatedSection animation="fade-in">
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Diferenciais Elite</span>
              </AnimatedSection>
              <AnimatedSection delay={200} animation="blur-reveal">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">
                  ENGENHARIA <br />
                  <span className="text-primary">DE ELITE</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={400} animation="fade-in-up">
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
                  Não seguimos padrões de mercado. Nós os definimos. Nossa abordagem
                  combina rigor técnico com design disruptivo.
                </p>
              </AnimatedSection>

              {/* Stats Staggered - Better Aligned */}
              <div className="flex flex-col gap-4 max-w-[280px]">
                <AnimatedSection delay={600} animation="slide-in-left" className="tech-card p-6 border-l-primary border-l-2 bg-background/40 backdrop-blur-md">
                  <div className="text-3xl font-black text-white">150<span className="text-primary">+</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Sistemas Implantados</div>
                </AnimatedSection>
                <AnimatedSection delay={700} animation="slide-in-left" className="tech-card p-6 border-l-white/20 border-l-2 bg-background/40 backdrop-blur-md">
                  <div className="text-3xl font-black text-white">99.9<span className="text-primary">%</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Uptime de Performance</div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Main Grid Content (The 90%) */}
          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-4 h-full">
              {differentials.map((item, index) => (
                <AnimatedSection
                  key={item.title}
                  delay={index * 50}
                  animation="fade-in-up"
                  className={`${index % 2 === 0 ? 'lg:-translate-y-8' : 'lg:translate-y-8'} transition-transform duration-700`}
                >
                  <div className="tech-card p-8 lg:p-10 h-full group bg-white/[0.02] border-white/5 hover:bg-white/[0.05]">
                    <div className="w-12 h-12 flex items-center justify-center mb-6 border border-primary/20 bg-primary/5 group-hover:bg-primary/20 transition-all">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-black mb-4 tracking-tight group-hover:text-primary transition-colors uppercase">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
