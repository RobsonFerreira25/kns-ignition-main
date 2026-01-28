import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.png';

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10 saturate-0 mix-blend-screen" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-0 z-0 bg-grid-tech opacity-40" />
      <div className="scanline" />
      <div className="noise" />

      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection delay={0} animation="fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-none border border-primary/40 bg-primary/5 backdrop-blur-md mb-12 tech-card">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Sistema KNS Ativado // v2.0</span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={200} animation="blur-reveal">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8 tracking-tighter">
              A REVOLUÇÃO <br />
              <span className="text-primary text-edge-glow">DIGITAL</span> É AGORA
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={400} animation="fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Desafiamos o status quo do desenvolvimento web. Construímos sistemas de
              <span className="text-foreground font-medium"> alta performance </span>
              que não apenas funcionam, mas dominam o mercado.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={600} animation="scale-up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://briefing-adz21orkk-robson-ferreiras-projects-746f0ca3.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="xl" className="group rounded-none px-12 border-b-4 border-primary/50 hover:border-primary active:translate-y-1 transition-all">
                  INICIAR PROJETO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </a>
              <Button variant="ghost" size="xl" className="group rounded-none hover:bg-primary/10 tracking-widest text-xs font-bold">
                EXPLORAR PORTFÓLIO
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust Indicators */}
          <AnimatedSection delay={800} animation="fade-in">
            <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-white/5">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-white group-hover:text-primary transition-colors cursor-default">150+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Outputs de Sucesso</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-white group-hover:text-primary transition-colors cursor-default">8+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Ciclos de Inovação</div>
              </div>
              <div className="text-center group col-span-2 md:col-span-1">
                <div className="text-4xl lg:text-5xl font-black text-white group-hover:text-primary transition-colors cursor-default">99%</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">SLA de Satisfação</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Aesthetic Scroll Trigger */}
      <div className="absolute bottom-12 left-12 flex flex-col items-center gap-4 opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-[2px] h-24 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
