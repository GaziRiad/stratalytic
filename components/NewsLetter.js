import { BsArrowRight } from "react-icons/bs";

export default function NewsLetter() {
  return (
    <div className="mb-28 flex items-center gap-3.5">
      <input
        placeholder="Werk email adress"
        className="font-secondary flex-1 border border-[#404040] px-3.5 py-2.5"
      />

      <button className="bg-accent-700 cursor-pointer rounded-sm px-6 py-1.5">
        <BsArrowRight size={32} className="scale-90" />
      </button>
    </div>
  );
}
