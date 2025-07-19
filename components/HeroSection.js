import Image from "next/image";
import React from "react";

import img from "@/public/images/heroPattern.png";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center">
      <Image
        src={img}
        alt="Hero Pattern"
        className="absolute -top-50 -z-10 scale-[60%] object-cover object-[center_-10%]"
      />
      {/* Gradient overlay - fades from transparent (top) to white (bottom) */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>

      <div className="relative z-10 flex flex-col items-center gap-8 pt-[10%]">
        <h1 className="max-w-heading text-center text-8xl">
          Artificial Intelligence voor verbeteren van bedrijfs resultaten
        </h1>
        <div className="flex items-center gap-[7px]">
          <Link
            href="#"
            className="bg-primary-800 rounded-5xl font-secondary hover:bg-primary-700 flex h-10 items-center justify-center px-[18px] tracking-tight text-white transition-all"
          >
            Plan een gratis consult
          </Link>
          <Link
            href="#"
            className="bg-primary-800 hover:bg-primary-700 flex items-center justify-center rounded-full p-2.5 transition-all"
          >
            <IoMdArrowForward className="text-lg text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
