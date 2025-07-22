"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Slider } from "./ui/slider";

const ITEMS = [
  {
    title: "Hilti manufacturing",
    text: "Implemented advanced analytics to streamline production workflows, reducing waste by 35% and increasing overall efficiency. Our data-driven approach identified bottlenecks and optimized resource allocation across multiple production lines.",
    img: "/images/cases/case-1.png",
  },
  {
    title: "Supply Chain Intelligence",
    text: "Developed predictive models to forecast demand fluctuations and optimize inventory management. The solution reduced stockouts by 40% while minimizing excess inventory costs, resulting in significant operational savings.",
    img: "/images/cases/case-2.png",
  },
  {
    title: "Quality Control Automation",
    text: "Built machine learning algorithms to detect defects in real-time during production. The automated quality control system improved product consistency and reduced manual inspection time by 60% while maintaining high quality standards.",
    img: "/images/cases/case-1.png",
  },
  {
    title: "Hilti manufacturing",
    text: "Implemented advanced analytics to streamline production workflows, reducing waste by 35% and increasing overall efficiency. Our data-driven approach identified bottlenecks and optimized resource allocation across multiple production lines.",
    img: "/images/cases/case-2.png",
  },
  {
    title: "Hilti manufacturing",
    text: "Implemented advanced analytics to streamline production workflows, reducing waste by 35% and increasing overall efficiency. Our data-driven approach identified bottlenecks and optimized resource allocation across multiple production lines.",
    img: "/images/cases/case-1.png",
  },
  {
    title: "Hilti manufacturing",
    text: "Implemented advanced analytics to streamline production workflows, reducing waste by 35% and increasing overall efficiency. Our data-driven approach identified bottlenecks and optimized resource allocation across multiple production lines.",
    img: "/images/cases/case-2.png",
  },
  {
    title: "Hilti manufacturing",
    text: "Implemented advanced analytics to streamline production workflows, reducing waste by 35% and increasing overall efficiency. Our data-driven approach identified bottlenecks and optimized resource allocation across multiple production lines.",
    img: "/images/cases/case-1.png",
  },
];

// Timer configuration
const SLIDE_DURATION = 5000; // 5 seconds per slide
const PROGRESS_UPDATE_INTERVAL = 100; // Update progress every 100ms

export default function CasesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress when slide changes
    setProgress(0);

    const timer = setTimeout(() => {
      setCurrentSlide((cur) => (cur < ITEMS.length - 1 ? cur + 1 : 0));
    }, SLIDE_DURATION);

    // Animate progress bar
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL); // Calculate increment based on duration
      });
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [currentSlide]);

  // Scroll the carousel when currentSlide changes
  useEffect(() => {
    if (!api) return;

    // Add a small delay to let the slide transition start first
    const scrollTimer = setTimeout(() => {
      // Calculate which slide should be at the start of the viewport
      // Keep active slide more centered when possible
      let scrollToIndex = 0;

      if (currentSlide >= 3 && currentSlide < ITEMS.length - 1) {
        // Center the active slide: [prev] [active] [next] [next+1]
        scrollToIndex = currentSlide - 2;
      } else if (currentSlide === ITEMS.length - 1) {
        // Last slide: show last 4 slides
        scrollToIndex = Math.max(0, ITEMS.length - 4);
      }

      api.scrollTo(scrollToIndex);
    }, 100); // Small delay to let slide transition start

    return () => clearTimeout(scrollTimer);
  }, [currentSlide, api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        duration: 500, // Carousel scroll duration (separate from slide duration)
        align: "start",
      }}
    >
      <CarouselContent className="flex gap-5 pl-16">
        {ITEMS.map((item, index) => (
          <CarouselItem
            key={index}
            className={`relative min-h-96 basis-64 overflow-hidden rounded-4xl transition-all duration-500 ease-in-out ${currentSlide === index && "basis-3xl"}`}
          >
            <Image
              src={item.img}
              fill
              alt={`Image of ${item.title}`}
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="from-primary-800 via-primary-800/20 absolute inset-0 bg-gradient-to-t to-transparent"></div>

            <div
              className={`absolute inset-0 flex flex-col justify-end p-4 text-white transition-opacity duration-300 ease-in-out ${currentSlide !== index ? "pointer-events-none opacity-0" : "opacity-100"}`}
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex-1/3">
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="line-clamp-3 text-sm text-white/90">
                    {item.text}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-end">
                  <Link
                    href="#"
                    className="font-secondary rounded-5xl flex w-fit items-center justify-center gap-3 border border-white bg-transparent px-4 py-1.5 text-sm font-light"
                  >
                    <span>Case bekijken</span>
                    <IoMdArrowForward className="text-lg text-white" />
                  </Link>
                </div>
              </div>

              {/* Animated progress bar */}
              <div className="h-1 w-full overflow-hidden rounded-2xl bg-white/30">
                <div
                  className="h-full rounded-2xl bg-white transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
