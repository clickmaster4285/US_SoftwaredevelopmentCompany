"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const dominateVideo = "/dominate-video.mp4";

export default function DominateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <section
      ref={ref}
      className="bg-[oklch(0.98_0.005_170)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Built for scale
          </p>

          <h2 className="text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
            Digital products that{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              dominate
            </span>{" "}
            their market.
          </h2>

          <p className="max-w-2xl text-lg leading-7 text-muted-foreground">
            We craft high-performance digital experiences that blend
            world-class design with engineering excellence. From startups
            to enterprises, we help brands move faster, think bigger,
            and build products that users actually love.
          </p>

          <div className="flex flex-wrap gap-16 pt-2">
            <div>
              <p className="text-5xl font-bold tracking-tight">
                {isInView && <CountUp end={150} duration={2.5} />}+
              </p>
              <p className="text-xs text-muted-foreground">
                Projects delivered
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold tracking-tight">
                {isInView && (
                  <CountUp
                    end={4.9}
                    decimals={1}
                    duration={2.5}
                  />
                )}
                ★
              </p>
              <p className="text-xs text-muted-foreground">
                Client satisfaction
              </p>
            </div>

            <div>
              <p className="text-5xl font-bold tracking-tight">
                {isInView && <CountUp end={12} duration={2.5} />}+
              </p>
              <p className="text-xs text-muted-foreground">
                Industry awards
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-black/10 shadow-2xl lg:mt-0">
          <video
            src={dominateVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}