import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";

const ITEMS = [
  {
    title: "Veel data, maar geen idee wat ermee te doen",
    text: "Sunt commodo sint ipsum proident qui non enim dolor officia amet adipisicing consectetur aliqua. Laboris duis dolore cupidatat et enim velit Lorem laboris ad. Non eiusmod ullamco Lorem exercitation laboris. Et anim culpa voluptate laborum dolore velit excepteur.",
    link: { label: "Meer informatie", href: "#" },
  },
  {
    title: "Mooie dashboards, niemand die ze gebruikt",
    text: "Sunt commodo sint ipsum proident qui non enim dolor officia amet adipisicing consectetur aliqua. Laboris duis dolore cupidatat et enim velit Lorem laboris ad. Non eiusmod ullamco Lorem exercitation laboris. Et anim culpa voluptate laborum dolore velit excepteur.",
  },
  {
    title: "Investeren in data zonder resultaat",
    text: "Sunt commodo sint ipsum proident qui non enim dolor officia amet adipisicing consectetur aliqua. Laboris duis dolore cupidatat et enim velit Lorem laboris ad. Non eiusmod ullamco Lorem exercitation laboris. Et anim culpa voluptate laborum dolore velit excepteur.",
  },
];

export default function HomeAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="text-primary-800 flex flex-1 flex-col justify-center gap-5"
    >
      {ITEMS.map((item, index) => (
        <AccordionItem
          className="text-primary-700 data-[state=open]:bg-accent-700 flex flex-1 flex-col rounded-2xl border border-[#DCDCDC] bg-white px-8 py-5 data-[state=open]:text-white"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="mb-3 flex w-full items-start justify-between gap-11 text-3xl tracking-tight hover:no-underline [&[data-state=open]_.minus-icon]:block [&[data-state=open]_.plus-icon]:hidden">
            <span className="max-w-xl">{item.title}</span>
            <LuCirclePlus className="plus-icon" />
            <LuCircleMinus className="minus-icon hidden" />
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-7">{item.text}</p>
            {item.link && (
              <Link
                href={item.link.href}
                className="rounded- rounded-5xl bg-primary-700/20 hover:bg-primary-800/40 flex w-fit items-center justify-start gap-2.5 border border-white px-5 py-2.5 transition-all"
              >
                <span>{item.link.label}</span>
                <IoMdArrowForward className="text-lg text-white" />
              </Link>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
