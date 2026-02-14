import Link from "next/link";
import Image from "next/image";
export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "cat running club t-shirt",
      price: 390,
      image: "/assets/products/p1.jpg",
    },
    {
      id: 2,
      name: "cat cycling club t-shirt",
      price: 390,
      image: "/assets/products/p2.png",
    },
    {
      id: 3,
      name: "cat running club t-shirt",
      price: 390,
      image: "/running.png",
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex flex-wrap justify-center gap-10 p-4">
        {products.map((item) => (
          <div key={item.id} className="p-4 bg-white hover:shadow-sm w-70">
            <Link href="/">
              <Image src={item.image} alt="maja" width={500} height={10} />
            </Link>
            <h2 className="font-semibold p-2">{item.name}</h2>
            <p className="text-end text-black-500">{item.price} THB</p>
          </div>
        ))}
      </div>
    </div>
  );
}
