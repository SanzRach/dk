import { Shield, Monitor, Languages, Palette, Music, Trophy } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      icon: Shield,
      title: 'Keamanan',
      description: 'Menjaga ketertiban dan keamanan lingkungan sekolah, serta memastikan seluruh siswa merasa aman dan nyaman.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Monitor,
      title: 'Teknologi Informasi',
      description: 'Mengembangkan sistem informasi sekolah dan memfasilitasi pembelajaran teknologi modern.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Languages,
      title: 'Bahasa',
      description: 'Mengembangkan kemampuan komunikasi dan literasi dalam berbagai bahasa untuk persiapan global.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Palette,
      title: 'Seni & Budaya',
      description: 'Melestarikan budaya lokal dan mengembangkan kreativitas seni siswa melalui berbagai program.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Music,
      title: 'Musik & Performance',
      description: 'Mengembangkan bakat musik dan seni pertunjukan untuk membangun kepercayaan diri siswa.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Trophy,
      title: 'Olahraga',
      description: 'Membina prestasi olahraga dan mempromosikan gaya hidup sehat di kalangan siswa.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="bidang" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bidang Kegiatan
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            OSIS kami memiliki berbagai bidang kegiatan yang dirancang untuk mengembangkan 
            potensi siswa dalam berbagai aspek kehidupan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-spring transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-spring shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-school-blue transition-smooth">
                  {dept.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {dept.description}
                </p>

                <div className="mt-6 h-1 w-0 bg-gradient-hero group-hover:w-full transition-smooth duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Departments;