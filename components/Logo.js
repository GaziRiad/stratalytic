import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src={logo} alt="Stratalytic logo" className="object-cover" />
    </Link>
  );
}
