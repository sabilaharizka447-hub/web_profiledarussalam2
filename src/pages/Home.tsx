import { Users, BookOpen, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import NewsCard from "@/components/NewsCard";
import heroImage from "@/assets/hero-pesantren.jpg";

const Home = () => {
  const stats = [
    {
      icon: Users,
      title: "Total Santri",
      value: "850+",
      description: "Santri aktif tahun ini"
    },
    {
      icon: BookOpen,
      title: "Tahun Berdiri",
      value: "1995",
      description: "28 tahun mengabdi"
    },
    {
      icon: Award,
      title: "Prestasi",
      value: "50+",
      description: "Penghargaan diraih"
    },
    {
      icon: Calendar,
      title: "Program",
      value: "15+",
      description: "Program unggulan"
    }
  ];

  const news = [
    {
      title: "Santri Darussalam 2 Raih Juara Tahfidz Nasional",
      excerpt: "Alhamdulillah, santri kami berhasil meraih juara 1 dalam Kompetisi Tahfidz Al-Quran tingkat nasional yang diselenggarakan di Jakarta.",
      date: "15 Okt 2024",
      category: "Prestasi",
      image: heroImage
    },
    {
      title: "Pembukaan Tahun Ajaran Baru 2024/2025",
      excerpt: "Pesantren Darussalam 2 membuka tahun ajaran baru dengan berbagai kegiatan orientasi santri dan sambutan hangat dari pengasuh.",
      date: "1 Sep 2024",
      category: "Kegiatan"
    },
    {
      title: "Program Ramadhan: Khataman & Pesantren Kilat",
      excerpt: "Di bulan Ramadhan ini, kami mengadakan program khusus khataman Al-Quran dan pesantren kilat untuk masyarakat umum.",
      date: "10 Mar 2024",
      category: "Program"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Pondok Pesantren Darussalam 2" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Membina Generasi Qur'ani
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Unggul dalam Ilmu Pengetahuan & Berakhlak Mulia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated">
              Daftar Santri Baru
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <InfoCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tentang Pondok Pesantren <span className="text-primary">Darussalam 2</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Yayasan Pondok Pesantren Darussalam 2 adalah lembaga pendidikan Islam yang telah berdiri sejak tahun 1995. Kami berkomitmen untuk membina generasi muda yang tidak hanya unggul dalam ilmu pengetahuan, tetapi juga memiliki akhlak yang mulia sesuai dengan ajaran Al-Quran dan As-Sunnah.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Dengan sistem pendidikan yang modern namun tetap menjunjung tinggi nilai-nilai tradisi Islam, kami telah menghasilkan ribuan alumni yang berkontribusi positif bagi masyarakat.
              </p>
              <Button className="shadow-soft">
                Lihat Profil Lengkap
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Aktivitas Santri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Berita & Kegiatan <span className="text-primary">Terkini</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Update terbaru tentang kegiatan, prestasi, dan program-program pesantren
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {news.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">
              Lihat Semua Berita
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Mari bersama membangun generasi Qur'ani yang berilmu, berakhlak, dan bermanfaat bagi umat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated">
              Daftar Sekarang
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
