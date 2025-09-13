import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';
import Departments from '@/components/Departments';
import Members from '@/components/Members';
import News from '@/components/News';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Profile />
      <Departments />
      <Members />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
