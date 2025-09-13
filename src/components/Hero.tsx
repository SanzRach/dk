import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-school.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('profil');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-school-blue/80 via-school-blue/60 to-school-teal/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Selamat Datang di
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              XI DKV BC
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Organisasi Siswa Intra Sekolah periode 2025/2026 - Membangun masa depan bersama dengan semangat dan dedikasi
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => document.getElementById('profil')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4"
            >
              Pelajari Lebih Lanjut
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-white/30 text-primary-foreground hover:bg-white/10"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground hover:text-blue-200 transition-smooth animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-school-teal/20 rounded-full blur-2xl animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;