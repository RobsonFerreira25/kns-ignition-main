import { AnimatedSection } from '@/components/AnimatedSection';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Mendes',
    role: 'CEO, TechFlow Solutions',
    content: 'A KNS transformou completamente nossa presença digital. O novo site aumentou nossas conversões em 340% nos primeiros 3 meses.',
    rating: 5,
  },
  {
    name: 'Ana Carolina Silva',
    role: 'Diretora de Marketing, Inovar Corp',
    content: 'Profissionalismo e expertise técnica incomparáveis. O sistema desenvolvido automatizou 70% dos nossos processos manuais.',
    rating: 5,
  },
  {
    name: 'Fernando Costa',
    role: 'Fundador, Digital First',
    content: 'Parceria de confiança há mais de 3 anos. A equipe da KNS sempre entrega além das expectativas.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            O que nossos{' '}
            <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Resultados reais de empresas que transformaram seus negócios com a KNS.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 150}>
              <div className="card-gradient p-6 lg:p-8 h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
