import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">D2</span>
              </div>
              <h3 className="font-bold text-lg">Darussalam 2</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Membina generasi Qur'ani yang unggul dalam ilmu pengetahuan dan berakhlak mulia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/profil" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/fasilitas" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Jl. Pesantren No. 123, Kec. Darussalam, Kab. Aceh Besar
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@darussalam2.ac.id" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  info@darussalam2.ac.id
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Pondok Pesantren Darussalam 2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
