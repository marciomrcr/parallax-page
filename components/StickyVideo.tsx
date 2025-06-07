"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  imgUrl: string;
};

export function StickyVideo({ imgUrl }: Props) {
  console.log("imgUrl", imgUrl);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      className="sticky z-0 overflow-hidden"
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh + 40px)`,
        top: 0,
        scale,
      }}
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-neutral-950/70"
      />
    </motion.div>
  );
}
