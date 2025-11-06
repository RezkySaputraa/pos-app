import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-[85vh] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="text-6xl font-semibold">
              <h1 className="pb-2 text-blue-700 ">Ubah Angka Menjadi Cerita</h1>
              <h1 className="text-orange-300">Nyalakan Potensi Bisnis Anda</h1>
            </div>
            <div>
              <Image
                src="/images/home/nara-logo.svg"
                width={160}
                height={160}
                alt="hero"
              ></Image>
            </div>
          </div>

          <div className="flex">
            <div>
              <p className="mb-2 font-semibold">
                Cerdas Membimbing Sederhana Bersinar
              </p>
              <button className="p-2 font-bold text-orange-300 bg-blue-600 rounded-md">
                Lihat Cara Kerjanya
              </button>
            </div>
            <div className="w-[2px] h-20 bg-orange-300 mx-8"></div>
            <div>
              <p className="w-3/4 font-semibold">
                Nara membantu anda memahami data penjualan, stok, dan bisnis
                dengan cara yang sederhana dan membimbing
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[22vh] bg-blue-800 rounded-2xl ">
          <div className="absolute flex w-full -translate-x-1/2 justify-evenly -top-2/3 left-1/2">
            <Image
              src="/images/home/1.svg"
              width={250}
              height={250}
              alt="hero"
            ></Image>
            <Image
              src="/images/home/2.svg"
              width={250}
              height={250}
              alt="hero"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
