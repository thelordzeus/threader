import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.png" width={28} height={28} alt="logo"></Image>
        <p className=" text-heading3-bold text-light-1 max-sm:hidden">
          Threader
        </p>
      </Link>
    </nav>
  );
}

export default Topbar;
