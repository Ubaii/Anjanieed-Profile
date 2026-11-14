
import {
//   Instagram,
//   Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#142D4E] text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10 lg:pt-20">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* BRAND */}
          <div className="lg:col-span-1">

            <Link to="/" className="inline-flex items-center gap-3">

              <img
                src="/images/logo/logo.png"
                alt="Anjanieed Cake Logo"
                className="h-12 w-12 object-contain"
              />

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Anjanieed Cake
                </h2>

                <p className="mt-0.5 text-[9px] tracking-[0.25em] text-[#AFC2D8]">
                  CAKE & BAKERY
                </p>
              </div>

            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#C3D0DE]">
              Menghadirkan kue berkualitas dengan rasa istimewa
              untuk menemani setiap momen berharga dan menciptakan
              kenangan manis bersama orang tersayang.
            </p>

            {/* SOCIAL MEDIA */}
            {/* <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-white hover:bg-white hover:text-[#142D4E]"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-white hover:bg-white hover:text-[#142D4E]"
              >
                <Facebook size={18} />
              </a>

            </div> */}

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="text-sm font-semibold tracking-wide">
              Navigasi
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Beranda
              </Link>

              <Link
                to="/menu"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Koleksi Kue
              </Link>

              <Link
                to="/about"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Tentang Kami
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Kontak
              </Link>

            </div>

          </div>


          {/* OUR SERVICES */}
          <div>

            <h3 className="text-sm font-semibold tracking-wide">
              Layanan Kami
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/menu"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Kue Ulang Tahun
              </Link>

              <Link
                to="/menu"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Kue Custom
              </Link>

              <Link
                to="/menu"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Kue untuk Perayaan
              </Link>

              <Link
                to="/menu"
                className="w-fit text-sm text-[#C3D0DE] transition hover:translate-x-1 hover:text-white"
              >
                Pesanan Khusus
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="text-sm font-semibold tracking-wide">
              Hubungi Kami
            </h3>

            <p className="mt-6 text-sm leading-7 text-[#C3D0DE]">
              Punya pertanyaan atau ingin memesan kue?
              Kami siap membantu kebutuhan kue untuk momen spesialmu.
            </p>

            <div className="mt-6 flex flex-col gap-5">

              <Link
                to="/contact"
                className="flex items-start gap-3 text-sm text-[#C3D0DE] transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>Hubungi melalui halaman kontak</span>
              </Link>

              <Link
                to="/contact"
                className="flex items-start gap-3 text-sm text-[#C3D0DE] transition hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>Informasi pemesanan</span>
              </Link>

              <Link
                to="/contact"
                className="flex items-start gap-3 text-sm text-[#C3D0DE] transition hover:text-white"
              >
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Informasi lokasi toko</span>
              </Link>

            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#AFC2D8] pb-1 text-sm font-medium text-white transition hover:text-[#AFC2D8]"
            >
              Hubungi Kami
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="mt-16 border-t border-white/15 pt-7">

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-[#AFC2D8]">
              © {currentYear} Anjanieed Cake. Hak cipta dilindungi.
            </p>

            <p className="flex items-center gap-1.5 text-xs text-[#AFC2D8]">
              Dibuat dengan
              <Heart size={13} className="fill-current text-[#D9A6A6]" />
              untuk setiap momen istimewa.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
