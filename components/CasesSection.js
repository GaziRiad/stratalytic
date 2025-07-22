import React from "react";
import CasesCarousel from "./CasesCarousel";

export default function CasesSection() {
  return (
    <section className="bg-primary-800 min-h-screen py-28 text-white">
      <div className="max-w-8xl mx-auto mb-24">
        <h3 className="text-primary-300 mb-2.5 text-center text-3xl">Cases</h3>
        <h2 className="mx-auto mb-16 max-w-[950px] text-center text-7xl leading-[110%]">
          Hoe onze producten bedrijven veranderen
        </h2>
      </div>

      <CasesCarousel />
    </section>
  );
}
