"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  heading: string;
  subHeading: string;
};

export default function OverlayContent({ heading, subHeading }: Props) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(
    scrollYProgress,
    [0.24, 0.5, 0.75],
    ["rgba(13, 26, 38, 0)", "rgba(13, 26, 38, 1)", "rgba(13, 26, 38, 0)"]
  );

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center text-4xl mb-6 font-bold md:text-7xl">
        {heading}
      </p>
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subHeading}
      </p>
    </motion.div>
  );
}
