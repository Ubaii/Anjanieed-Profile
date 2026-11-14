
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Strawberry Shortcake",
    category: "KOLEKSI SIGNATURE",
    price: "Rp 185.000",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Chocolate Indulgence",
    category: "KOLEKSI COKELAT",
    price: "Rp 165.000",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Berry Velvet Cake",
    category: "KOLEKSI SPESIAL",
    price: "Rp 195.000",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=90",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#142D4E]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">

        {/* DESKTOP IMAGE */}
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <img
            src="./src/assets/images/nursha.png"
            alt="Kue spesial Anjanieed Cake"
            className="h-full w-full object-cover object-center"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 42%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 42%)",
            }}
          />
        </div>

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center px-6 lg:grid-cols-2 lg:px-10">

          {/* HERO TEXT */}
          <div className="relative z-10 py-16 sm:py-20 lg:py-24">

            <p className="mb-6 text-[11px] font-semibold tracking-[0.3em] text-[#7893B2]">
              SELAMAT DATANG DI ANJANIEED CAKE
            </p>

            <h1 className="max-w-xl font-serif text-4xl leading-[1.2] tracking-tight text-[#142D4E] sm:text-5xl md:text-6xl lg:text-[66px]">
              Dibuat dengan sepenuh hati,
              <span className="mt-2 block font-normal italic text-[#7893B2]">
                untuk momen tak terlupakan.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-8 text-[#78879A] sm:text-base">
              Setiap momen istimewa layak dirayakan dengan sesuatu
              yang spesial. Temukan berbagai pilihan kue cantik dan
              lezat dari Anjanieed Cake yang dibuat dengan penuh
              perhatian untuk melengkapi setiap kebahagiaanmu.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">

              <Link
                to="/menu"
                className="inline-flex items-center rounded-full gap-3 bg-[#142D4E] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#28496F] sm:px-7"
              >
                Lihat Koleksi Kue
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/about"
                className="text-sm font-semibold text-[#142D4E] transition hover:text-[#7893B2]"
              >
                Tentang Kami
                <span className="ml-1">↗</span>
              </Link>

            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-12 flex items-center gap-7 border-t border-[#E5EAF0] pt-7 sm:mt-14 sm:gap-10">

              <div>
                <h3 className="font-serif text-2xl text-[#142D4E]">
                  Segar
                </h3>
                <p className="mt-2 text-xs text-[#8A98A9]">
                  Dibuat dengan teliti
                </p>
              </div>

              <div className="h-10 w-px bg-[#E5EAF0]" />

              <div>
                <h3 className="font-serif text-2xl text-[#142D4E]">
                  Spesial
                </h3>
                <p className="mt-2 text-xs text-[#8A98A9]">
                  Untuk setiap momen
                </p>
              </div>

            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className="relative -mx-6 h-[320px] overflow-hidden sm:h-[420px] lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=90"
              alt="Kue spesial Anjanieed Cake"
              className="h-full w-full object-cover object-center"
            />
          </div>

        </div>
      </section>


      {/* BRAND INTRO */}
      <section className="bg-[#F3F6FA] px-6 py-20 text-center sm:py-24">

        <p className="text-[11px] font-semibold tracking-[0.3em] text-[#7893B2]">
          TENTANG ANJANIEED CAKE
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
          Lebih dari sekadar kue,
          <span className="mt-2 block font-normal italic text-[#7893B2]">
            ada cerita di setiap sajian.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#78879A] sm:text-base">
          Dari pertemuan sederhana hingga perayaan istimewa,
          kami menghadirkan berbagai pilihan kue yang dibuat
          untuk menemani momen berharga bersama orang tersayang.
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-[#9FB3C9]" />

      </section>


      {/* COLLECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-[#7893B2]">
              PILIHAN UNTUK MOMEN SPESIAL
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">
              Koleksi pilihan kami.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#8491A1]">
              Temukan kue favorit untuk melengkapi setiap momenmu.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#7893B2]"
          >
            Lihat Semua Kue
            <ArrowUpRight size={17} />
          </Link>

        </div>


        {/* PRODUCT LIST */}
        <div className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (
            <article key={product.name} className="group">

              <div className="relative overflow-hidden bg-[#F1F4F8]">

                <div className="absolute left-4 top-4 z-10 bg-white px-3 py-2 text-[10px] tracking-widest text-[#142D4E]">
                  0{index + 1}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[330px] lg:h-[350px]"
                />

                <Link
                  to="/menu"
                  aria-label={`Pesan ${product.name}`}
                  className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-white text-[#142D4E] shadow-md transition hover:bg-[#142D4E] hover:text-white"
                >
                  <ShoppingBag size={18} />
                </Link>

              </div>

              <div className="mt-5 flex items-start justify-between gap-3">

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#7893B2]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-base font-semibold sm:text-lg">
                    {product.name}
                  </h3>
                </div>

                <p className="whitespace-nowrap pt-5 text-sm font-semibold">
                  {product.price}
                </p>

              </div>

            </article>
          ))}

        </div>
      </section>


      {/* BRAND STATEMENT */}
      <section className="px-6 pb-20">

        <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#142D4E] md:grid-cols-2">

          <div className="flex flex-col justify-center px-7 py-14 text-white sm:px-12 sm:py-20 lg:px-14">

            <p className="text-[11px] font-semibold tracking-[0.3em] text-[#AFC2D8]">
              MANISNYA SETIAP PERAYAAN
            </p>

            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Hadirkan kebahagiaan dalam setiap potongan.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#C3D0DE]">
              Pilih kue favoritmu dan jadikan Anjanieed Cake
              bagian dari cerita indah yang akan selalu dikenang.
            </p>

            <div>
              <Link
                to="/menu"
                className="mt-9 inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-semibold text-[#142D4E] transition hover:bg-[#E5EDF5]"
              >
                Jelajahi Menu
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>

          <div className="min-h-[280px] sm:min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=90"
              alt="Kue untuk perayaan istimewa"
              loading="lazy"
              className="h-full min-h-[280px] w-full object-cover sm:min-h-[350px]"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
