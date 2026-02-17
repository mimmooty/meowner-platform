"use client";
import Link from "next/link";
import Image from "next/image";
interface Product {
    name: string;
    description: string;
    price: number;
    imagePath: string;
    collection: string;
  }
  
export default function  ProductCard ({ product }: { product: Product }){return(

    <div key={product.name} className="p-4 bg-white hover:shadow-sm w-70">
      <Link href="/">
        <Image src={product.imagePath} alt={product.name} width={500} height={10} />
      </Link>
      <p className="font-mono font-bold text-xs p-2">{product.name}</p>
      <p className="font-mono text-xs p-2">{product.collection}</p>
      <p className="font-mono text-xs p-2">{product.description}</p>
      <p className="text-end text-black-500">{product.price} THB</p>
    </div>
  )};