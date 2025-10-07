import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacilityCard from "@/components/FacilityCard";
import asramaImage from "@/assets/asrama.jpg";
import masjidImage from "@/assets/masjid.jpg";
import kelasImage from "@/assets/ruang-kelas.jpg";
import perpustakaanImage from "@/assets/perpustakaan.jpg";
import dapurImage from "@/assets/dapur.jpg";

const Facilities = () => {
  const facilities = [
    {
      title: "Asrama Santri",
      description: "Asrama yang nyaman dan terorganisir dengan kapasitas ratusan santri, dilengkapi dengan tempat tidur, lemari, dan ruang belajar pribadi. Diawasi oleh musyrif/musyrifah yang berpengalaman.",
      image: asramaImage
    },
    {
      title: "Masjid Jami'",
      description: "Masjid megah yang menjadi pusat kegiatan ibadah dan pembelajaran agama, dapat menampung lebih dari 1000 jamaah dengan fasilitas AC dan sound system modern.",
      image: masjidImage
    },
    {
      title: "Ruang Kelas Modern",
      description: "Ruang kelas ber-AC dengan meja kursi ergonomis, papan tulis interaktif, dan proyektor untuk mendukung pembelajaran yang efektif dan nyaman.",
      image: kelasImage
    },
    {
      title: "Perpustakaan",
      description: "Perpustakaan lengkap dengan koleksi ribuan buku agama dan umum, referensi kitab kuning, jurnal ilmiah, dan ruang baca yang tenang untuk menunjang kegiatan belajar santri.",
      image: perpustakaanImage
    },
    {
      title: "Dapur Umum",
      description: "Dapur bersih dan higienis yang menyediakan makanan bergizi tiga kali sehari untuk seluruh santri, dikelola oleh tim professional dengan standar kesehatan yang ketat.",
      image: dapurImage
    },
    {
      title: "Lapangan Olahraga",
      description: "Lapangan serbaguna untuk berbagai aktivitas olahraga seperti futsal, basket, dan voli. Mendukung pengembangan fisik dan kesehatan santri.",
      image: asramaImage
    },
    {
      title: "Klinik Kesehatan",
      description: "Klinik dengan dokter dan perawat yang siap melayani 24 jam, dilengkapi dengan obat-obatan dan peralatan medis dasar untuk menjaga kesehatan santri.",
      image: masjidImage
    },
    {
      title: "Lab Komputer",
      description: "Laboratorium komputer dengan puluhan unit PC modern dan koneksi internet untuk pembelajaran teknologi informasi dan penelusuran literatur digital.",
      image: kelasImage
    },
    {
      title: "Kantin",
      description: "Kantin bersih yang menyediakan berbagai makanan dan minuman sehat dengan harga terjangkau untuk santri.",
      image: perpustakaanImage
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
            Fasilitas Pesantren
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Fasilitas lengkap dan modern untuk mendukung pembelajaran dan kehidupan santri
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Terus Berkembang untuk <span className="text-primary">Santri</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kami terus berkomitmen untuk meningkatkan dan menambah fasilitas pesantren agar santri dapat belajar dengan nyaman dan optimal. Berbagai rencana pengembangan infrastruktur sedang dalam tahap persiapan untuk masa depan yang lebih baik.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">850+</div>
                <p className="text-muted-foreground">Kapasitas Santri</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">5 Ha</div>
                <p className="text-muted-foreground">Luas Area Pesantren</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Fasilitas Lengkap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
