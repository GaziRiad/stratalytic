import Link from "next/link";
import MainButton from "./MainButton";
import { CiGlobe } from "react-icons/ci";
import DropDown from "./DropDown";

const NAVLINKS = [
  {
    label: "Services",
    links: [
      { label: "Frontend development", href: "#" },
      { label: "Backend development", href: "#" },
      { label: "Web design", href: "#" },
    ],
  },
  {
    label: "Cases",
    links: [
      { label: "Mats Hoftesde website", href: "#" },
      { label: "STRATALYTIC web project", href: "#" },
      { label: "STRATALYTIC web project", href: "#" },
    ],
  },
  {
    label: "Contact",
    href: "#",
  },
];

export default function Navigation() {
  return (
    <nav className="flex items-center gap-10">
      <ul className="flex items-center gap-8">
        {NAVLINKS.map((item, index) => {
          return item.links ? (
            <li key={index}>
              <DropDown title={item.label} items={item.links} />
            </li>
          ) : (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>

      <MainButton color="accent" />
      <CiGlobe size={32} />
    </nav>
  );
}
