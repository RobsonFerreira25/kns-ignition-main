import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-48 relative overflow-hidden bg-background">
      {/* Brutalist Background */}
      <div className="absolute inset-0 bg-grid-tech opacity-10" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 mb-8 opacity-60">
              <Terminal className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Iniciando Protocolo de Expansão</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="blur-reveal">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-none tracking-tighter">
              PRONTO PARA O <br />
              <span className="text-primary text-edge-glow uppercase">Próximo Nível</span>?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fade-in-up">
            <p className="text-lg md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Não perca tempo com soluções genéricas. Vamos construir o futuro do
              seu negócio com tecnologia de elite e design inesquecível.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <AnimatedSection delay={600} animation="scale-up">
              <a href="https://wa.me/5511993076132" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="xl" className="group rounded-none px-12 py-8 text-lg border-b-4 border-primary/50 hover:border-primary active:translate-y-1 transition-all">
                  AGENDAR CONSULTA FREE
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={700} animation="fade-in">
              <a href="https://wa.me/5511993076132" target="_blank" rel="noopener noreferrer" className="text-[10px] items-center gap-4 group flex uppercase tracking-[0.4em] font-bold hover:text-primary transition-colors">
                <span className="w-8 h-[1px] bg-white/20 group-hover:bg-primary transition-all" />
                Conversar via WhatsApp
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
