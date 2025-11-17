"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonyCard from "@/components/testimony-card";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  const testimonials = [
    {
      quote:
        "I came in uncertain about my path. Now I'm confident, skilled, and ready to make an impact in my field.",
      author: "Marcus Johnson",
      role: "Tech Entrepreneur",
    },
    {
      quote:
        "The resources and community support here are unmatched. I feel part of something bigger than myself.",
      author: "Priya Patel",
      role: "Social Impact Leader",
    },
    {
      quote:
        "The workshops on public speaking were incredible. I've gone from nervous to confident in just a few weeks.",
      author: "David Kim",
      role: "Non-Profit Coordinator",
    },
    {
      quote:
        "Connecting with peers from such diverse backgrounds has broadened my perspective more than I ever imagined.",
      author: "Aisha Al-Jamil",
      role: "University Student",
    },
    {
      quote:
        "I never realized my potential as a leader until this program. It's been a life-changing experience.",
      author: "Emily White",
      role: "Community Organizer",
    },
    {
      quote:
        "The one-on-one coaching helped me navigate complex challenges and define my personal brand.",
      author: "Kenji Tanaka",
      role: "Freelance Journalist",
    },
    {
      quote:
        "A truly inspiring community. Every single person is dedicated to making a positive change in the world.",
      author: "Fatima Bello",
      role: "Policy Analyst",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          className="w-full pb-16"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i} className="pb-4 h-auto z-0 mb-4">
              <TestimonyCard
                className="h-full"
                name={testimonial.author}
                role={testimonial.role}
                profileImage={`https://placehold.co/100x100/EBF4FF/0F172A?text=${testimonial.author.charAt(
                  0
                )}`}
              >
                {testimonial.quote}
              </TestimonyCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
