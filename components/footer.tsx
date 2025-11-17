"use client";

import Link from "next/link";
import {
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <span className="font-bold text-2xl">{t.footer.title}</span>
              <p className="text-background/70">{t.footer.tagline}</p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Instagram size={18} className="text-neutral-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-neutral-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Youtube size={18} className="text-neutral-700" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <Card className="rounded-xs rounded-tl-2xl border-0 rounded-br-2xl bg-secondary shadow-xl">
              <CardContent className="flex flex-col justify-center gap-2.5 flex-1">
                <div className="flex items-center gap-2.5">
                  <div className="bg-background grid place-items-center rounded-xl p-1.5">
                    <Phone />
                  </div>
                  <span>Phone</span>
                </div>
                <span>+62 855 6674 9987</span>
              </CardContent>
            </Card>
            <Card className="rounded-xs rounded-tl-2xl rounded-br-2xl border-0 bg-secondary shadow-xl">
              <CardContent className="flex flex-col justify-center gap-2.5 flex-1">
                <div className="flex items-center gap-2.5">
                  <div className="bg-background grid place-items-center rounded-xl p-1.5">
                    <Mail />
                  </div>
                  <span>Email</span>
                </div>
                <span>info@gempar.co.id</span>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-background/70">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
