import ProductDetailCard from "@/components/ProductDetailCard";
import SizeGuideTable from "@/components/SizeGuideTable";
import Image from "next/image";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ดึงค่า slug ออกมา
  const { slug } = await params;
  const productName = slug;

  return (
    <div className="bg-white">
      <ProductDetailCard />
      {/* <div className="flex flex-col md:flex-row items-top justify-center gap-10 p-10">
        <Image
          src="/assets/mock/mock-p1.svg"
          alt="maja"
          width={600}
          height={600}
          className="md:w-[30vw] w-full h-auto"
        />
        <div>
          <p className="font-mono font-border text-xl pt-6">
            Cycling Club T-Shirt
          </p>
          <p className="font-mono text-sm">Cat Club Collection</p>
          <p className="font-mono  text-xs">
            Tusse grinned and told them, "We don't rush, we ride like cats"
          </p>
          <p className="font-mono font-border text-xl">390 THB</p>

          <SizeGuideTable />
        </div>
      </div> */}
    </div>
  );
}
