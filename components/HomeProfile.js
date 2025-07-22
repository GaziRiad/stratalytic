import Image from "next/image";

import profileImg from "@/public/images/profile.png";

import MainButton from "./MainButton";
import Link from "next/link";

export default function HomeProfile() {
  return (
    <div className="mx-auto flex max-w-fit items-center gap-10">
      <Image
        src={profileImg}
        alt="Image of profile"
        className="max-h-44 max-w-44 rounded-2xl object-cover object-top"
      />
      <div className="max-w-3xl">
        <p className="mb-4 text-4xl">Starten met AI gedreven keuzes maken</p>
        <p className="text-primary-300 font-secondary mb-5">
          Sunt commodo sint ipsum proident qui non enim dolor officia amet
          adipisicing consectetur aliqua. Laboris duis dolore cupidatat.
        </p>
        <div className="flex items-center gap-5">
          <MainButton color="accent" />
          <span className="text-primary-300">Of</span>
          <Link
            href="#"
            className="font-secondary hover:text-primary-200 text-white underline underline-offset-2 transition-all"
          >
            Bekijk onze aanpak
          </Link>
        </div>
      </div>
    </div>
  );
}
