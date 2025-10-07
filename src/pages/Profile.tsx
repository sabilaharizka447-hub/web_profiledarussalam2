import { Target, Eye, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Profile = () => {
  const visions = [
    {
      icon: Target,
      title: "Visi",
      description: "Menjadi lembaga pendidikan Islam terdepan dalam mencetak generasi Qur'ani yang berakhlak mulia, berilmu luas, dan bermanfaat bagi umat"
    },
    {
      icon: Eye,
      title: "Misi",
      description: "Menyelenggarakan pendidikan Islam yang berkualitas, mengintegrasikan ilmu agama dan umum, serta membentuk karakter santri yang Islami"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Akhlakul Karimah",
      description: "Membentuk karakter santri yang berakhlak mulia sesuai ajaran Islam"
    },
    {
      icon: Users,
      title: "Ukhuwah Islamiyah",
      description: "Membangun persaudaraan yang kuat berdasarkan nilai-nilai Islam"
    },
    {
      icon: Target,
      title: "Keunggulan Akademik",
      description: "Menghasilkan santri yang unggul dalam ilmu agama dan umum"
    }
  ];

  const leaders = [
    {
      name: "KH. Ahmad Syahid, Lc., MA",
      position: "Pengasuh Pesantren",
      description: "Lulusan Universitas Al-Azhar Cairo, memimpin pesantren sejak 2005"
    },
    {
      name: "Ustadz H. Muhammad Ridwan, S.Pd.I",
      position: "Kepala Madrasah",
      description: "Mengelola kurikulum dan sistem pendidikan formal pesantren"
    },
    {
      name: "Ustadzah Hj. Siti Fatimah, S.Pd.I",
      position: "Kepala Asrama Putri",
      description: "Mengawasi dan membimbing santri putri dalam kehidupan asrama"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Profil Pesantren
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat Pondok Pesantren Darussalam 2
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Sejarah <span className="text-primary">Pesantren</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Pondok Pesantren Darussalam 2 didirikan pada tahun 1995 oleh KH. Abdul Karim (alm) dengan visi untuk menciptakan lembaga pendidikan Islam yang tidak hanya mengajarkan ilmu agama, tetapi juga membekali santri dengan pengetahuan umum yang memadai.
              </p>
              <p>
                Berawal dari sebuah musholla kecil dengan 25 santri, kini Pesantren Darussalam 2 telah berkembang menjadi salah satu pesantren terkemuka di wilayah Aceh dengan lebih dari 850 santri aktif dan berbagai fasilitas modern yang mendukung proses pembelajaran.
              </p>
              <p>
                Sepanjang perjalanannya, pesantren ini telah menghasilkan ribuan alumni yang tersebar di berbagai profesi, baik sebagai ulama, pendidik, pengusaha, maupun profesional di berbagai bidang, yang semuanya berkontribusi positif bagi masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Visi & Misi
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {visions.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-elevated transition-smooth">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Nilai-Nilai Pesantren</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elevated transition-smooth">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Struktur <span className="text-primary">Kepemimpinan</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elevated transition-smooth">
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-primary-foreground" size={40} />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-1">{leader.name}</h3>
                <p className="text-accent font-medium mb-3">{leader.position}</p>
                <p className="text-muted-foreground text-sm">{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
