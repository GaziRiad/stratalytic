import Image from "next/image";
import img from "@/public/images/heroPattern.png";

import MainButton from "./MainButton";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center">
      <Image
        src={img}
        alt="Hero Pattern"
        priority={true}
        className="absolute -top-50 -z-10 scale-[60%] object-cover object-[center_-10%]"
      />
      {/* Gradient overlay - fades from transparent (top) to white (bottom) */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>

      <div className="relative z-10 flex flex-col items-center gap-8 pt-[10%]">
        <h1 className="max-w-heading text-center text-8xl">
          Artificial Intelligence voor verbeteren van bedrijfs resultaten
        </h1>
        <MainButton />
      </div>
    </section>
  );
}
