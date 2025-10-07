import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Pesantren No. 123, Kec. Darussalam, Kab. Aceh Besar, Aceh 23373"
    },
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      content: "+62 812-3456-7890"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@darussalam2.ac.id"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 16:00 WIB"
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
            Hubungi Kami
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Ada pertanyaan? Kami siap membantu Anda
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-elevated transition-smooth text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.content}</p>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Kirim <span className="text-primary">Pesan</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama lengkap"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Nomor Telepon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 812-3456-7890"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-soft">
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Lokasi <span className="text-primary">Pesantren</span>
              </h2>
              <div className="rounded-xl overflow-hidden shadow-elevated h-[500px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0!2d95.0!3d5.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzAnMDAuMCJOIDk1wrAwMCcwMC4wIkU!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Pondok Pesantren Darussalam 2"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Pertanyaan <span className="text-primary">Umum</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Bagaimana cara mendaftar sebagai santri baru?",
                a: "Pendaftaran dapat dilakukan secara online melalui website atau datang langsung ke kantor sekretariat pesantren. Silakan hubungi nomor yang tertera untuk informasi lebih lanjut."
              },
              {
                q: "Berapa biaya pendidikan di pesantren?",
                a: "Biaya pendidikan bervariasi tergantung jenjang pendidikan. Untuk informasi detail mengenai biaya, silakan hubungi bagian administrasi kami."
              },
              {
                q: "Apakah tersedia program beasiswa?",
                a: "Ya, kami menyediakan beasiswa bagi santri berprestasi dan kurang mampu. Informasi lengkap dapat ditanyakan saat proses pendaftaran."
              },
              {
                q: "Apakah orang tua boleh mengunjungi santri?",
                a: "Ya, orang tua dapat mengunjungi santri pada hari dan jam yang telah ditentukan, biasanya setiap hari Minggu atau hari libur tertentu."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-smooth">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
