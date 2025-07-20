import Link from "next/link";
import MainButton from "./MainButton";
import { CiGlobe } from "react-icons/ci";

const NAVLINKS = [
  { href: "/services", label: "Services" },
  { href: "/case", label: "Cases" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="flex items-center gap-10">
      <ul className="flex items-center gap-8">
        {NAVLINKS.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <MainButton color="accent" />
      <CiGlobe size={32} />
    </nav>
  );
}
