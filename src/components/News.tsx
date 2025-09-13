import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Eye } from 'lucide-react';
import newsImage1 from '@/assets/news-1.jpg';
import newsImage2 from '@/assets/news-2.jpg';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Lomba Kreativitas Siswa Tingkat Nasional 2025',
      excerpt: 'Tim XI DKV BC berhasil meraih juara 1 dalam kompetisi kreativitas siswa tingkat nasional dengan inovasi teknologi pendidikan.',
      image: newsImage1,
      date: '15 Januari 2025',
      category: 'Prestasi',
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: 'Perayaan HUT Sekolah ke-25 yang Meriah',
      excerpt: 'Acara peringatan ulang tahun sekolah berlangsung sukses dengan berbagai lomba, pentas seni, dan kegiatan sosial yang melibatkan seluruh siswa.',
      image: newsImage2,
      date: '10 Januari 2025',
      category: 'Acara',
      views: 890,
      featured: false,
    },
    {
      id: 3,
      title: 'Program Bakti Sosial untuk Masyarakat',
      excerpt: 'XI DKV BC mengadakan program bakti sosial dengan memberikan bantuan kepada masyarakat sekitar dan mengajarkan pentingnya kepedulian sosial.',
      image: newsImage1,
      date: '8 Januari 2025',
      category: 'Sosial',
      views: 720,
      featured: false,
    },
    {
      id: 4,
      title: 'Workshop Digital Marketing untuk Siswa',
      excerpt: 'Pelatihan digital marketing yang diselenggarakan XI DKV BC bertujuan membekali siswa dengan keterampilan yang relevan dengan era digital.',
      image: newsImage2,
      date: '5 Januari 2025',
      category: 'Workshop''Sosial',
      views: 950,
      featured: false,
    },
  ];

  const categories = ['Semua', 'Prestasi', 'Acara', 'Sosial', 'Workshop'];

  return (
    <section id="berita" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Berita & Kegiatan
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Update terbaru tentang kegiatan, prestasi, dan program-program XI DKV BC.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "school" : "outline"}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured News */}
        {news.filter(item => item.featured).map((item) => (
          <div key={item.id} className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-smooth mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover hover:scale-110 transition-spring"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-hero text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-school-blue/10 text-school-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Eye className="w-4 h-4 mr-2" />
                    {item.views.toLocaleString()}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-4 hover:text-school-blue transition-smooth cursor-pointer">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {item.excerpt}
                </p>
                
                <Button variant="school" className="group">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.filter(item => !item.featured).map((item) => (
            <article 
              key={item.id}
              className="group bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-spring transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-spring"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-school-blue text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    {item.views}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-school-blue transition-smooth line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Button variant="ghost" className="group p-0 h-auto font-semibold text-school-blue hover:text-school-blue-light">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-8">
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
