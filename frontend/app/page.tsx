import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <div className="bg-black">
        <p className="font-mono text-white text-center">
          new collection available now
        </p>
      </div>
      <div className="grid grid-flow-col justify-items-center bg-zinc-100">
        <div className="flex flex-wrap justify-self-start">
          <p className="font-mono font-bold ml-5 md:text-lg text-xs">Product</p>
          <p className="font-mono font-bold ml-5 md:text-lg text-xs">
            Collection
          </p>
          <p className="font-mono font-bold ml-5 md:text-lg text-xs">About</p>
        </div>
        <div className="flex flex-wrap items-center">
          <div>
            <Image
              className="md:size-12 size-6 mr-2"
              src="/maja.png"
              alt="maja"
              width={50}
              height={10}
            />
          </div>
          <div>
            <p className="md:text-2xl text-sm font-mono font-bold">
              the.last.three.cat
            </p>
          </div>
        </div>
        <div className="justify-self-end">
          <p className="font-mono font-bold mr-5 md:text-lg text-xs">Signup</p>
        </div>
      </div>
      <div>
        <p className="font-mono text-white text-center">main</p>
      </div>
      <div>
        <p className="font-mono text-white text-center">footer</p>
      </div>
    </div>
  );
}
