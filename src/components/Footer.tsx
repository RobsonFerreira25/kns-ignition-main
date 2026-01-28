import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

import logoImg from '@/assets/kns-logo-official.png';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = {
  servicos: [
    { label: 'SITES ESTRATÉGICOS', href: '#servicos' },
    { label: 'SISTEMAS ESCALÁVEIS', href: '#servicos' },
    { label: 'AUTOMAÇÃO PRO', href: '#servicos' },
    { label: 'SEO & LOCAL GROWTH', href: '#servicos' },
    { label: 'GESTÃO ESTRATÉGICA', href: '#servicos' },
  ],
  empresa: [
    { label: 'SOBRE NÓS', href: '#' },
    { label: 'PORTFÓLIO', href: '#' },
    { label: 'BLOG', href: '#' },
    { label: 'CARREIRAS', href: '#' },
  ],
  legal: [
    { label: 'POLÍTICA DE PRIVACIDADE', href: '#' },
    { label: 'TERMOS DE USO', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="h-20 mb-8 flex items-center overflow-hidden relative">
              <img
                src={logoImg}
                alt="KNS Logo"
                className="h-full object-contain mix-blend-screen brightness-125 contrast-110"
              />
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mb-10 tracking-[0.1em] uppercase font-bold">
              KERNEL • NETWORK • SYSTEMS
              <br />
              <span className="font-light normal-case tracking-normal">Transformando negócios através da engenharia de software de elite.</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@kns.com.br" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                contato@kns.com.br
              </a>
              <a href="https://wa.me/5511993076132" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99307-6132
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                São Paulo, SP
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KNS. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com 💙 por <span className="text-primary">KNS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
