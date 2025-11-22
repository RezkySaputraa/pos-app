import Footer from "@/components/elements/admin/Footer";
import Image from "next/image";

export default function LandingPage() {
  // --- URL GAMBAR ---
  const images = {
    heroGrowth:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1470&auto=format&fit=crop",
    robotCoach:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1472&auto=format&fit=crop",
    visualization:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    insight:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1470&auto=format&fit=crop",
    pos: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1470&auto=format&fit=crop",
    dashboard:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    academy:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop",
    community:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632&auto=format&fit=crop",
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800 w-full">
      {/* --- NAVBAR --- */}
      {/* Perbaikan: Container disamakan dengan body agar Logo rata dengan Judul */}
      <nav className="w-full bg-primary-gradient py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-[120px] h-[45px]">
              <Image
                src="/images/general/logo.png"
                alt="NARA Logo"
                fill
                className="object-contain brightness-0 invert" // Logo dipuihkan agar kontras
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-white">
            <a href="#" className="hover:text-primary-200 transition">
              Home
            </a>
            <a href="#" className="hover:text-primary-200 transition">
              Tentang Kami
            </a>
            <a
              href="/auth/login"
              className="px-6 py-2 bg-accent text-primary-900 rounded-full font-bold hover:opacity-90 transition shadow-sm"
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 pt-12 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          {/* Perbaikan: Menghapus padding extra agar rata kiri mutlak dengan logo */}
          <div className="space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary-600">
              Ubah Angka Menjadi Cerita <br />
              <span className="text-primary-500">
                Nyalakan Potensi Bisnis Anda
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Cerdas. Membimbing. Sederhana. Relevan.
              <br />
              NARA membantu Anda memahami data penjualan, stok, dan laba dengan
              cara yang sederhana dan membimbing.
            </p>
            <div className="pt-4">
              <a
                href="/login"
                className="bg-primary-gradient text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:opacity-90 transition"
              >
                Lihat Cara Kerjanya
              </a>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={images.heroGrowth}
                alt="Business Growth"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -right-4 -bottom-6 bg-accent p-6 rounded-2xl shadow-2xl text-primary-900 w-48 border-2 border-white">
              <div className="font-bold text-4xl">900+</div>
              <div className="text-sm font-bold mb-4 uppercase tracking-wider">
                User
              </div>
              <div className="font-bold text-4xl">50+</div>
              <div className="text-sm font-bold mb-4 uppercase tracking-wider">
                Kelas
              </div>
              <div className="font-bold text-4xl">5+</div>
              <div className="text-sm font-bold uppercase tracking-wider">
                Tahun Pengalaman
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: 3 PILAR NARA --- */}
      <section className="container mx-auto px-6 pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-600">
            <span className="text-accent">NARA</span> selalu menemani
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Tiga pilar utama NARA yang siap menjadi pelatih digital bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary-gradient rounded-3xl p-8 text-center text-white shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="h-40 w-40 mx-auto relative mb-6 rounded-full bg-white/10 overflow-hidden p-4">
              <Image
                src={images.robotCoach}
                alt="Nara Coach AI"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-accent font-bold text-2xl mb-3">NARA Coach</h3>
            <p className="text-primary-100">
              Bantu memahami laporan dalam bahasa sehari-hari.
            </p>
          </div>
          <div className="bg-primary-gradient rounded-3xl p-8 text-center text-white shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="h-40 w-40 mx-auto relative mb-6 rounded-full bg-white/10 overflow-hidden p-4">
              <Image
                src={images.visualization}
                alt="Visualisasi Data"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-accent font-bold text-2xl mb-3">Visualisasi</h3>
            <p className="text-primary-100">
              Dari baris, stok, hingga prediksi penjualan.
            </p>
          </div>
          <div className="bg-primary-gradient rounded-3xl p-8 text-center text-white shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="h-40 w-40 mx-auto relative mb-6 rounded-full bg-white/10 overflow-hidden p-4">
              <Image
                src={images.insight}
                alt="Business Insight"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-accent font-bold text-2xl mb-3">Insight</h3>
            <p className="text-primary-100">
              Yang dapat membantu memahami saran tindakan nyata.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VIDEO WARUNG KECIL --- */}
      <section className="bg-primary-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group cursor-pointer">
              <Image
                src={images.videoThumbnail}
                alt="UMKM Activity"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md hover:scale-110 transition">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <p className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">
                Lihat Bagaimana UMKM Bertumbuh
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Dari warung kecil sampai toko modern mereka belajar bersama NARA
              </h2>
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                Karena setiap angka punya cerita, dan NARA membantu membacanya
                agar bisnis Anda terus berkembang.
              </p>
              <a
                href="#"
                className="text-accent font-bold text-lg flex items-center gap-2 hover:underline"
              >
                Selengkapnya <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: 4 FITUR UTAMA --- */}
      <section className="container mx-auto px-6 py-12 bg-bg-primary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600">
            <span className="text-accent">Siap Menemani Bisnis</span> <br />
            Untuk Terus Tumbuh dan Berkembang
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-primary-50">
            <div className="h-48 relative overflow-hidden">
              <Image
                src={images.pos}
                alt="NARA POS"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="bg-primary-gradient p-6 text-white text-center h-full relative">
              <h4 className="text-accent font-bold text-xl mb-2">NARA POS</h4>
              <p className="text-sm text-primary-100">
                Kasir digital cepat dan praktis untuk semua jenis bisnis.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-primary-50">
            <div className="h-48 relative overflow-hidden">
              <Image
                src={images.dashboard}
                alt="NARA Insight"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="bg-primary-gradient p-6 text-white text-center h-full relative">
              <h4 className="text-accent font-bold text-xl mb-2">
                NARA Insight
              </h4>
              <p className="text-sm text-primary-100">
                Dashboard data bisnis dengan analisis otomatis.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-primary-50">
            <div className="h-48 relative overflow-hidden">
              <Image
                src={images.robotCoach}
                alt="NARA Coach"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="bg-primary-gradient p-6 text-white text-center h-full relative">
              <h4 className="text-accent font-bold text-xl mb-2">NARA Coach</h4>
              <p className="text-sm text-primary-100">
                Asisten cerdas yang bisa diajak berdiskusi soal toko.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-primary-50">
            <div className="h-48 relative overflow-hidden">
              <Image
                src={images.academy}
                alt="NARA Academy"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="bg-primary-gradient p-6 text-white text-center h-full relative">
              <h4 className="text-accent font-bold text-xl mb-2">
                NARA Academy
              </h4>
              <p className="text-sm text-primary-100">
                Pelatihan dan komunitas belajar analisis data untuk UMKM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: NARA COACH DEEP DIVE --- */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-12">
          NARA Coach bukan hanya mencatat <br />
          <span className="text-accent">tapi memikirkan bisnis bersamamu</span>
        </h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 relative h-[400px] w-full">
            <Image
              src={images.robotCoach}
              alt="NARA AI Robot"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          <div className="md:col-span-3 bg-primary-gradient rounded-[40px] rounded-tl-none p-8 md:p-12 text-white shadow-2xl relative">
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-light">
              AI NARA membantu kamu memahami mengapa omzet naik atau turun,
              kapan stok menipis, dan apa yang bisa dilakukan untuk
              memperbaikinya. Cukup tanya, dan NARA akan menjawab dengan solusi
              yang bisa langsung kamu jalankan.
            </p>
            <a
              href="#"
              className="text-accent font-bold flex items-center gap-2 hover:underline text-lg"
            >
              Selengkapnya <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: NARA ACADEMY DEEP DIVE --- */}
      <section className="container mx-auto px-6 py-10 mb-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-12 text-right">
          NARA Academy <br />
          <span className="text-accent">
            Belajar & tumbuh bersama pelaku UMKM
          </span>
        </h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="order-2 md:order-1 md:col-span-2 bg-primary-gradient rounded-[40px] rounded-tr-none p-8 md:p-12 text-white shadow-2xl relative h-full flex flex-col justify-center">
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-light">
              Melalui NARA Academy, kami bantu UMKM belajar membaca data bisnis
              dengan cara sederhana dan menyenangkan melalui komunitas yang
              suportif.
            </p>
            <a
              href="#"
              className="text-accent font-bold flex items-center gap-2 hover:underline text-lg"
            >
              Gabung Komunitas NARA <span>&rarr;</span>
            </a>
          </div>
          <div className="order-1 md:order-2 md:col-span-3 relative h-[350px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src={images.community}
              alt="NARA Community"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="container mx-auto px-6 pb-12">
        <div className="bg-primary-gradient rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mulai Perjalanan Datamu Hari Ini
            </h2>
            <p className="text-primary-100 mb-10 text-xl font-light">
              Jadikan NARA sebagai teman berpikir bisnismu. Gabung sekarang dan
              rasakan kemudahannya.
            </p>
            <a
              href="/auth/login"
              className="bg-accent text-white font-bold text-xl px-12 py-4 rounded-full shadow-xl hover:bg-yellow-300 hover:scale-105 transition transform duration-200"
            >
              Lihat Cara Kerjanya
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </main>
  );
}
