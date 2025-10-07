import { BookOpen, GraduationCap, Trophy, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";

const Programs = () => {
  const formalPrograms = [
    {
      icon: BookOpen,
      title: "Madrasah Ibtidaiyah (MI)",
      description: "Pendidikan dasar Islam setara SD dengan kurikulum kementerian agama yang mengintegrasikan ilmu agama dan umum.",
      features: [
        "Durasi 6 tahun (Kelas 1-6)",
        "Kurikulum Kemenag + Muatan Lokal",
        "Tahfidz Juz 30",
        "Bahasa Arab & Inggris dasar"
      ]
    },
    {
      icon: GraduationCap,
      title: "Madrasah Tsanawiyah (MTs)",
      description: "Pendidikan menengah pertama Islam setara SMP dengan pendalaman ilmu agama dan sains.",
      features: [
        "Durasi 3 tahun (Kelas 7-9)",
        "Kitab Kuning dasar",
        "Tahfidz minimal 3 Juz",
        "Bahasa Arab & Inggris lanjutan"
      ]
    },
    {
      icon: GraduationCap,
      title: "Madrasah Aliyah (MA)",
      description: "Pendidikan menengah atas Islam setara SMA dengan penjurusan IPA, IPS, dan Agama.",
      features: [
        "Durasi 3 tahun (Kelas 10-12)",
        "Penjurusan: IPA, IPS, Agama",
        "Kitab Kuning lanjutan",
        "Persiapan PTN/PTS"
      ]
    }
  ];

  const specialPrograms = [
    {
      icon: BookOpen,
      title: "Program Tahfidz Intensif",
      description: "Program khusus untuk santri yang ingin fokus menghafal Al-Quran 30 Juz.",
      features: [
        "Target 30 Juz",
        "Metode Talaqqi & Muraja'ah",
        "Pembimbing hafidz berpengalaman",
        "Evaluasi berkala"
      ]
    },
    {
      icon: Trophy,
      title: "Ekstrakurikuler",
      description: "Berbagai kegiatan untuk mengembangkan minat dan bakat santri.",
      features: [
        "Olahraga (Futsal, Basket, Panahan)",
        "Seni Islami (Kaligrafi, Hadroh)",
        "Pramuka & Leadership",
        "Bahasa Arab & Inggris"
      ]
    },
    {
      icon: Leaf,
      title: "Kewirausahaan Santri",
      description: "Program pembinaan entrepreneurship untuk membekali santri dengan skill bisnis.",
      features: [
        "Pelatihan bisnis syariah",
        "Praktik usaha kecil",
        "Manajemen keuangan",
        "Marketing digital"
      ]
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
            Program Pendidikan
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Beragam program pendidikan untuk membentuk santri yang berilmu dan berakhlak
          </p>
        </div>
      </section>

      {/* Formal Education */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Pendidikan <span className="text-primary">Formal</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Program pendidikan formal terakreditasi dengan kurikulum yang mengintegrasikan ilmu agama dan umum
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {formalPrograms.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Program <span className="text-primary">Unggulan</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Program khusus untuk pengembangan spiritual dan soft skills santri
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Jadwal <span className="text-primary">Kegiatan Harian</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { time: "04:00 - 05:30", activity: "Shalat Tahajud & Subuh Berjamaah" },
              { time: "05:30 - 06:30", activity: "Setoran Hafalan & Tahsin" },
              { time: "06:30 - 07:00", activity: "Persiapan & Sarapan" },
              { time: "07:00 - 12:00", activity: "Kegiatan Belajar Formal (Madrasah)" },
              { time: "12:00 - 13:30", activity: "Shalat Dzuhur, Makan Siang & Istirahat" },
              { time: "13:30 - 15:00", activity: "Kegiatan Belajar Formal (Lanjutan)" },
              { time: "15:00 - 16:00", activity: "Shalat Ashar & Kajian Kitab Kuning" },
              { time: "16:00 - 17:30", activity: "Ekstrakurikuler & Olahraga" },
              { time: "17:30 - 19:00", activity: "Shalat Maghrib, Ngaji Al-Quran & Makan Malam" },
              { time: "19:00 - 20:30", activity: "Shalat Isya & Belajar Mandiri" },
              { time: "20:30 - 21:30", activity: "Muraja'ah Hafalan" },
              { time: "21:30 - 04:00", activity: "Istirahat" }
            ].map((schedule, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-soft transition-smooth">
                <div className="flex-shrink-0 w-32 font-bold text-primary">{schedule.time}</div>
                <div className="text-foreground">{schedule.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
