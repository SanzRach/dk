import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import memberImage from '@/assets/member-1.jpg';

const Members = () => {
  const members = [
    {
      name: 'Ferdinand Alexander Cahyadi',
      position: 'Ketua Kelas',
      image: memberImage,
      description: 'Memimpin dengan visi untuk menciptakan lingkungan sekolah yang kondusif dan inovatif.',
      social: {
        linkedin: '#',
        email: 'ferdinand@xidkvbc.sch.id',
        instagram: '@ferdinand_alex'
      }
    },
    {
      name: 'Sarah Putri Maharani',
      position: 'Wakil Ketua Kelas',
      image: memberImage,
      description: 'Berpengalaman dalam mengorganisir acara besar dan mengkoordinasi berbagai bidang.',
      social: {
        linkedin: '#',
        email: 'sarah@xidkvbc.sch.id',
        instagram: '@sarah_putri'
      }
    },
    {
      name: 'Ahmad Rizki Pratama',
      position: 'Sekretaris',
      image: memberImage,
      description: 'Bertanggung jawab dalam dokumentasi dan administrasi organisasi.',
      social: {
        linkedin: '#',
        email: 'rizki@xidkvbc.sch.id',
        instagram: '@rizki_pratama'
      }
    },
    {
      name: 'Dinda Ayu Lestari',
      position: 'Bendahara',
      image: memberImage,
      description: 'Mengelola keuangan organisasi dengan transparansi dan akuntabilitas tinggi.',
      social: {
        linkedin: '#',
        email: 'dinda@xidkvbc.sch.id',
        instagram: '@dinda_ayu'
      }
    },
  ];

  return (
    <section id="anggota" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pengurus Kelas
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tim pengurus yang berdedikasi untuk kemajuan sekolah dan kesejahteraan seluruh siswa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className="group bg-gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-spring transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-smooth">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-hero rounded-full opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-school-blue transition-smooth">
                  {member.name}
                </h3>
                <p className="text-school-teal font-semibold mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="flex justify-center space-x-3 pt-4 border-t border-border/50">
                <Button variant="ghost" size="icon" className="hover:text-school-blue">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-school-blue">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-school-blue">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="school" size="lg" className="px-8">
            Lihat Semua Anggota
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Members;