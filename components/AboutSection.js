import HomeAccordion from "./HomeAccordion";
import HomeProfile from "./HomeProfile";

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
        </div>
      </div>

      {/* PROFILE */}
      <HomeProfile />
    </section>
  );
}
