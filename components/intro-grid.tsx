"use client";

import EarthImage from "@/public/images/earth.jpg";
import InnovationImage from "@/public/images/innovation.jpg";
import CommunityImage from "@/public/images/group.jpg";
import ActionImage from "@/public/images/action.jpg";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import SlideRight from "./animation/slide-right";
import SlideDown from "./animation/slide-down";
import SlideUp from "./animation/slide-up";
import SlideLeft from "./animation/slide-left";
import Link from "next/link";

export default function IntroGrid() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
        <SlideRight delay={1.3} className="lg:col-span-2 h-full flex">
          <div
            className="flex flex-1 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${EarthImage.src})` }}
          >
            <div className="flex-1 size-full flex flex-col justify-end gap-2.5 bg-neutral-800/70 rounded-2xl px-7 py-6">
              <h3 className="text-2xl font-bold text-white">
                Global Opportunities
              </h3>
              <p className="text-muted leading-relaxed">
                Access opportunities that transcend borders and open doors you
                never knew existed.
              </p>
            </div>
          </div>
        </SlideRight>

        <SlideDown delay={2.4} className="col-span-1 flex h-full">
          <div
            className="flex flex-1 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${InnovationImage.src})` }}
          >
            <div className="flex-1 size-full px-7 py-6 bg-neutral-800/70 flex flex-col justify-end gap-2.5 rounded-2xl">
              <h3 className="text-2xl font-bold text-white">Innovation</h3>
              <p className="text-muted leading-relaxed">
                Learn cutting-edge skills and stay ahead of trends.
              </p>
            </div>
          </div>
        </SlideDown>

        <SlideUp delay={2.9} className="col-span-1 lg:row-span-2 flex h-full">
          <div
            className="flex flex-1 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${CommunityImage.src})`,
            }}
          >
            <div className="flex-1 size-full px-7 py-6 flex flex-col justify-end gap-2.5 rounded-2xl bg-neutral-800/70">
              <h3 className="text-2xl font-bold text-white">Community</h3>
              <p className="text-muted leading-relaxed">
                Be part of a supportive ecosystem of changemakers.
              </p>
            </div>
          </div>
        </SlideUp>

        <SlideLeft
          delay={1.9}
          className="lg:col-span-2 lg:row-span-2 flex h-full"
        >
          <div
            className="flex flex-1 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${ActionImage.src})`,
            }}
          >
            <div className="flex-1 size-full px-7 py-6 flex flex-col justify-end gap-5 rounded-2xl bg-neutral-800/70">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-2xl font-bold text-white">
                  Empowerment Through Action
                </h3>
                <p className="text-muted leading-relaxed">
                  We believe the best way to empower youth is through real-world
                  experience, mentorship, and collaboration.
                </p>
              </div>
              <Link
                href="/programs"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-fit group-hover:gap-2 flex items-center gap-1 transition-all duration-300"
                )}
              >
                Explore more
                <ArrowUpRightIcon size={14} />
              </Link>
            </div>
          </div>
        </SlideLeft>

        <SlideUp
          delay={3.1}
          className="md:col-span-2 lg:col-span-3 flex h-full"
        >
          <div className="flex-1 flex flex-col justify-center p-8 rounded-2xl bg-primary/10 border-4 border-dashed border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Why This Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              In an era of rapid disruption, youth equipped with adaptability,
              creativity, and purpose will lead the way. Our mission is to
              provide you with the tools, network, and confidence to thrive in
              whatever future you imagine.
            </p>
          </div>
        </SlideUp>
      </div>
    </>
  );
}
