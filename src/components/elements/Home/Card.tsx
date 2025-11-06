import Image from "next/image";

const Card = () => {
  const data = [
    {
      id: 1,
      img: "/images/home/card.svg",
      description: "NARA Coach bantu memahami laporan dalam bahasa sehari-hari",
    },
    {
      id: 2,
      img: "/images/home/card.svg",
      description: "Visualisasi dari kasir, stok, hingga prediksi penjualan",
    },
    {
      id: 3,
      img: "/images/home/card.svg",
      description: "Insight yang dapat membantu memahami saran tindakan nyata",
    },
  ];

  return (
    <div className="pt-6">
      <div className="text-6xl font-semibold text-center">
        <span className="text-blue-800 ">NARA</span>{" "}
        <span className="text-orange-400 ">selalu menemani</span>
      </div>
      <p className="py-4 text-2xl text-center">
        Tiga pilar utama NARA yang siap menjadi pelatih digital bisnis anda.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between p-6 bg-blue-600 rounded-2xl w-80 min-h-[320px]"
          >
            <Image
              src={item.img}
              width={200}
              height={200}
              alt="card"
              className="object-contain"
            ></Image>
            <p className="font-medium text-center text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
