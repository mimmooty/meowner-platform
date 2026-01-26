import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row justify-between p-4">
      <div>
        <Image src="/maja.png" alt="Next.js logo" width={50} height={10} />
        meower
      </div>
      <div></div>
      <div>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
}
