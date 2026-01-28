import { AnimatedSection } from '@/components/AnimatedSection';
import { MessageSquare, Lightbulb, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultoria Inicial',
    description: 'Entendemos suas necessidades, objetivos e desafios em uma conversa estratégica.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Planejamento',
    description: 'Criamos uma proposta personalizada com escopo, prazos e investimento claros.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Desenvolvimento',
    description: 'Executamos o projeto com metodologia ágil, mantendo você informado em cada etapa.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lançamento',
    description: 'Entregamos seu projeto otimizado e pronto para gerar resultados.',
  },
  {
    number: '05',
    icon: HeadphonesIcon,
    title: 'Suporte Contínuo',
    description: 'Acompanhamos seu projeto com suporte técnico e melhorias contínuas.',
  },
];

export const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Como Trabalhamos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Processo{' '}
            <span className="text-gradient">transparente e ágil</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Do primeiro contato à entrega final, você acompanha cada etapa do seu projeto.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 100}>
                <div className="relative">
                  {/* Step Card */}
                  <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all group text-center lg:text-left">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 mx-auto lg:mx-0">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
