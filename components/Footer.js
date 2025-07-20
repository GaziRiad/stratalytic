import Image from "next/image";
import NewsLetter from "./NewsLetter";

import logoFooter from "@/public/images/logo-footer.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-800">
      <div className="grid grid-cols-4 divide-x divide-[#404040] border-t border-b border-[#404040]">
        <div className="col-span-2 px-10 pt-9 pb-5 text-white">
          <div className="max-w-lg">
            <h2 className="mb-4 text-4xl">
              Blijf op de hoogte van nieuwe ontwikkelingen
            </h2>
            <p className="text-primary-300 mb-11">
              Magna enim et laborum ad dolore culpa irure. Eiusmod tempor ex
              anim sint anim fugiat aliqua dolor laborum. Laborum sint do
              laborum pariatur sit duis magna ut elit.
            </p>
            <NewsLetter />
            <Image
              src={logoFooter}
              alt="Footer logo of stratalytic"
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-linear-to-b from-white/10 to-white/0 px-5 py-3.5 text-white uppercase">
          <h4 className="text-primary-300 mb-24 tracking-tight">
            Snel schakelen
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#">Gratis Strategische Verkenning</Link>
            </li>
            <li>
              <Link href="#">Expertise Overzicht  </Link>
            </li>
            <li>
              <Link href="#">Impact Stories</Link>
            </li>
            <li>
              <Link href="#">Over Stratalytic</Link>
            </li>
          </ul>
        </div>
        <div className="px-5 py-3.5 text-white uppercase">
          <h4 className="text-primary-300 mb-24 tracking-tight">Legal</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Algemene Voorwaarden</Link>
            </li>
            <li>
              <Link href="#">Cookie Beleid</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* COPYRIGHTS */}
      <div className="text-primary-300 flex items-center justify-between px-10 py-3.5">
        <p>Copyright: © 2025 Stratalytic. Alle rechten voorbehouden.</p>

        <p className="flex items-center gap-1">
          <span>Designed with &#x2764;</span>
          <span>by </span>
          <Link href="https://mats-hofstede.vercel.app/" target="_blank">
            Mats Hoftede
          </Link>
        </p>
      </div>
    </footer>
  );
}
