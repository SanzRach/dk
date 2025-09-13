import { Building2, Users, Target, Star } from 'lucide-react';

const Profile = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Siswa Aktif' },
    { icon: Building2, value: '15', label: 'Bidang Kegiatan' },
    { icon: Target, value: '50+', label: 'Program Tahunan' },
    { icon: Star, value: '10+', label: 'Prestasi Nasional' },
  ];

  return (
    <section id="profil" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Profil Kelas
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            XI DKV BC adalah kelas yang berdedikasi untuk mengembangkan 
            potensi, kreativitas, dan kepemimpinan siswa melalui berbagai program inovatif dan 
            kegiatan yang bermanfaat bagi seluruh komunitas sekolah.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-smooth transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-school-blue mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <div className="w-8 h-8 bg-school-blue rounded-full mr-3"></div>
              Visi Kami
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Menjadi organisasi siswa yang unggul dalam mengembangkan karakter, 
              kreativitas, dan kepemimpinan untuk menciptakan generasi yang siap 
              menghadapi tantangan masa depan.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <div className="w-8 h-8 bg-school-teal rounded-full mr-3"></div>
              Misi Kami
            </h3>
            <ul className="text-muted-foreground leading-relaxed text-lg space-y-2">
              <li>• Mengembangkan potensi dan bakat siswa</li>
              <li>• Memfasilitasi kegiatan positif dan kreatif</li>
              <li>• Membangun karakter dan kepemimpinan</li>
              <li>• Menciptakan lingkungan belajar yang kondusif</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;