import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <Image
          src="/images/home/logo.svg"
          width={140}
          height={120}
          alt="logo"
        ></Image>
      </div>
      <div>
        <ul className="flex gap-5 text-xl text-blue-500">
          <li>Home</li>
          <li>Tentang Kami</li>
          <li className="font-bold">Mulai Sekarang</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
