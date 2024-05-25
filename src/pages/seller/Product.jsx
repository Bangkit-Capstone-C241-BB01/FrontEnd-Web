import BoxProduct from "../../components/BoxProduct";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import headset from "../../assets/hetset.jpg";
import kacamatahitam from "../../assets/kacamatahitam.jpg";
import sepatuhijau from "../../assets/sepatuhijau.jpg";
import tanaman from "../../assets/tanaman.jpg";
import sepatumerah from "../../assets/sepatumerah.jpg";
import jamtangan from "../../assets/jamtangan.jpg";
export const products = [
  {
    id: 1,
    name: "Jam Tangan",
    price: 300000,
    stock: 15,
    rating: 4.7,
    description: "Jam tangan elegan dengan desain klasik dan teknologi modern. Tali kulit asli dan mesin jam berkualitas tinggi membuatnya menjadi pilihan sempurna untuk penampilan formal maupun kasual.",
    image: jamtangan,
  },
  {
    id: 2,
    name: "Headset",
    price: 150000,
    stock: 10,
    rating: 4.5,
    description: "Headset gaming dengan kualitas suara terbaik, dilengkapi dengan mikrofon yang dapat dilepas dan bantalan telinga yang nyaman untuk penggunaan jangka panjang.",
    image: headset,
  },
  {
    id: 3,
    name: "Sepatu Merah",
    price: 200000,
    stock: 20,
    rating: 4.3,
    description: "Sepatu olahraga warna merah dengan desain dinamis dan sol yang empuk. Cocok untuk berlari dan aktivitas sehari-hari dengan kenyamanan maksimal.",
    image: sepatumerah,
  },
  {
    id: 4,
    name: "Sepatu Hijau",
    price: 210000,
    stock: 18,
    rating: 4.4,
    description: "Sepatu hijau stylish yang cocok untuk segala suasana. Dibuat dari bahan berkualitas tinggi, memberikan dukungan dan kenyamanan ekstra saat dipakai.",
    image: sepatuhijau,
  },
  {
    id: 5,
    name: "Tanaman",
    price: 50000,
    stock: 30,
    rating: 4.6,
    description: "Tanaman hias dalam pot, ideal untuk mempercantik ruangan. Perawatannya mudah dan bisa menambah kesegaran alami di rumah atau kantor Anda.",
    image: tanaman,
  },
  {
    id: 6,
    name: "Kacamata Hitam",
    price: 120000,
    stock: 12,
    rating: 4.5,
    description: "Kacamata hitam dengan lensa UV protection, memberikan perlindungan maksimal dari sinar matahari. Desain modern yang cocok untuk gaya kasual maupun formal.",
    image: kacamatahitam,
  },
];

const Product = () => {
  return (
    <>
      <Header />
      <div className="flex ">
        <Nav />
        <div className="font-roboto ml-4 lg:ml-72 mt-5 flex gap-9 w-full flex-wrap">
          {products.map((product) => (
            <BoxProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
