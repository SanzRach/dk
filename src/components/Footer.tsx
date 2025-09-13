import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil', href: '#profil' },
    { label: 'Bidang', href: '#bidang' },
    { label: 'Anggota', href: '#anggota' },
    { label: 'Berita', href: '#berita' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Jl. Pendidikan No. 123, Jakarta Selatan' },
    { icon: Phone, text: '+62 21 1234 5678' },
    { icon: Mail, text: 'info@osissmklinkandmatch.sch.id' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-school-blue via-school-blue to-school-teal text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">OS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">OSIS SMK Link and Match</h3>
                <p className="text-blue-200">Periode 2025/2026</p>
              </div>
            </div>
            
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Organisasi Siswa Intra Sekolah yang berkomitmen untuk mengembangkan potensi siswa 
              dan menciptakan lingkungan belajar yang kondusif dan inovatif.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-blue-100">
                    <Icon className="w-5 h-5 text-blue-200" />
                    <span>{contact.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navigasi Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-smooth flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-smooth mr-0 group-hover:mr-3"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Terhubung dengan Kami</h4>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="bg-white/10 hover:bg-white/20 text-white hover:text-white transition-smooth"
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-blue-100 mb-4">Dapatkan update terbaru dari kami</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email anda"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-smooth"
                />
                <Button variant="secondary" className="bg-white text-school-blue hover:bg-blue-50">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-center md:text-left mb-4 md:mb-0">
            © 2025 OSIS SMK Link and Match. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-blue-100 hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="text-blue-100 hover:text-white transition-smooth">Terms of Service</a>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="icon"
              className="bg-white/10 hover:bg-white/20 text-white hover:text-white"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;