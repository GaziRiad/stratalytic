import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

export default function MainButton({ color = "primary" }) {
  return (
    <div className="font-secondary flex items-center gap-[7px]">
      <Link
        href="#"
        className={`rounded-5xl font-secondary flex h-10 items-center justify-center px-[18px] tracking-tight text-white transition-all ${color === "primary" ? "bg-primary-800 hover:bg-primary-700" : "bg-accent-700 hover:bg-accent-700/80"}`}
      >
        Plan een gratis consult
      </Link>
      <Link
        href="#"
        className={`flex items-center justify-center rounded-full p-2.5 transition-all ${color === "primary" ? "bg-primary-800 hover:bg-primary-700" : "bg-accent-700 hover:bg-accent-700/80"}`}
      >
        <IoMdArrowForward className="text-lg text-white" />
      </Link>
    </div>
  );
}
