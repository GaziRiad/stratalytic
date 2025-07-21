import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

import profileImg from "@/public/images/profile.png";
import MainButton from "@/components/MainButton";
import HomeAccordion from "./HomeAccordion";

export default function AboutSection() {
  return (
    <section className="bg-primary-800 min-h-screen py-28 text-white">
      <div className="max-w-8xl mx-auto mb-24">
        <h2 className="mb-20 max-w-[1020px] text-5xl leading-[110%]">
          Stratalytic vertaalt data naar werkende oplossingen voor jouw
          business. Welke bronnen je ook gebruikt, wij maken de connectie en
          creëren een platform waarop je processen soepeler draaien en je
          organisatie beter presteert.
        </h2>
        <div className="bg-primary-200 flex rounded-4xl px-5 py-6">
          <h3 className="text-primary-800 flex-1 pt-8 pl-10 text-6xl">
            Van problemen naar oplossingen
          </h3>
          <HomeAccordion />

          {/* <div className="flex flex-1 flex-col justify-center gap-5">
            <div className="bg-accent-700 flex flex-1 flex-col rounded-2xl px-8 py-5">
              <p className="mb-3 max-w-md text-3xl tracking-tight">
                Veel data, maar geen idee wat ermee te doen
              </p>
              <p className="mb-7">
                Sunt commodo sint ipsum proident qui non enim dolor officia amet
                adipisicing consectetur aliqua. Laboris duis dolore cupidatat et
                enim velit Lorem laboris ad. Non eiusmod ullamco Lorem
                exercitation laboris. Et anim culpa voluptate laborum dolore
                velit excepteur.
              </p>

              <Link
                href="#"
                className="rounded- rounded-5xl bg-primary-700/20 hover:bg-primary-800/40 flex w-fit items-center justify-start gap-2.5 border border-white px-5 py-2.5 transition-all"
              >
                <span>Meer informatie</span>
                <IoMdArrowForward className="text-lg text-white" />
              </Link>
            </div>
            <div className="flex flex-1 flex-col rounded-2xl bg-white px-8 py-5">
              <p className="text-primary-700 mb-3 max-w-md text-3xl tracking-tight">
                Mooie dashboards, niemand die ze gebruikt
              </p>
            </div>
            <div className="flex flex-1 flex-col rounded-2xl bg-white px-8 py-5">
              <p className="text-primary-700 mb-3 max-w-md text-3xl tracking-tight">
                Investeren in data zonder resultaat
              </p>
            </div>
          </div> */}
        </div>
        {/*  */}
      </div>

      {/* PROFILE */}
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
    </section>
  );
}
