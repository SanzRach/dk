import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'bidang', label: 'Bidang' },
    { id: 'anggota', label: 'Anggota' },
    { id: 'berita', label: 'Berita' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-card border-b' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('beranda')}
            className="flex items-center space-x-3 font-bold text-lg hover:opacity-80 transition-smooth"
          >
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-card">
              <span className="text-primary-foreground font-bold">OS</span>
            </div>
            <span className={isScrolled ? 'text-foreground' : 'text-primary-foreground'}>
              OSIS SMK Link and Match
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-smooth hover:text-school-blue ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="school" size="sm">
              Feedback
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t shadow-card">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-medium text-foreground hover:text-school-blue transition-smooth py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="school" size="sm" className="w-full">
                Feedback
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;