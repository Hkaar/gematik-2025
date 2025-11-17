"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { GlobeIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import Logo from "@/public/images/logo.png";
import { translations } from "@/lib/i18n";

interface Props {
  active: string;
}

export default function Header({ active = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const t = translations[language];

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/programs", label: t.nav.programs },
    { href: "/stories", label: t.nav.stories },
    { href: "/resources", label: t.nav.resources },
  ];

  return (
    <header className="sticky bg-background border top-4 w-11/12 xl:w-4/5 mx-auto z-50 shadow-xl rounded-2xl">
      <nav className="rounded-2xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-bold text-lg"
            >
              <img src={Logo.src} className="size-12" />
              <span className="text-foreground text-xl hidden xl:block">
                GEMPAR
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-foreground",
                    active == link.href
                      ? "text-primary border-b-2 border-primary"
                      : "hover:text-primary transition-colors"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2.5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="hover:bg-muted/50 hover:text-muted-foreground"
                    >
                      <GlobeIcon size={14} />
                      <span className="text-sm font-medium uppercase">
                        {language}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Button
                        variant={"ghost"}
                        onClick={() => {
                          setLanguage("en");
                        }}
                        className={`w-full text-left px-4 py-2 transition-colors ${
                          language === "en"
                            ? "text-primary font-semibold"
                            : "text-foreground"
                        }`}
                      >
                        English
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Button
                        variant={"ghost"}
                        onClick={() => {
                          setLanguage("id");
                        }}
                        className={`w-full text-left px-4 py-2 transition-colors ${
                          language === "id"
                            ? "text-primary font-semibold"
                            : "text-foreground"
                        }`}
                      >
                        Bahasa Indonesia
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  disabled={active == "/join" ? true : false}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center"
                >
                  <Link href="/join">{t.nav.joinUs}</Link>
                </Button>
              </div>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-2 text-foreground hover:bg-muted rounded-md",
                    active == link.href
                      ? "text-primary bg-muted/40"
                      : "hover:text-primary transition-colors"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="hover:bg-muted/50 hover:text-muted-foreground"
                  >
                    <GlobeIcon size={14} />
                    <span className="text-sm font-medium uppercase">
                      {language}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Button
                      variant={"ghost"}
                      onClick={() => {
                        setLanguage("en");
                      }}
                      className={`w-full text-left px-4 py-2 transition-colors ${
                        language === "en"
                          ? "text-primary font-semibold"
                          : "text-foreground"
                      }`}
                    >
                      English
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Button
                      variant={"ghost"}
                      onClick={() => {
                        setLanguage("id");
                      }}
                      className={`w-full text-left px-4 py-2 transition-colors ${
                        language === "id"
                          ? "text-primary font-semibold"
                          : "text-foreground"
                      }`}
                    >
                      Bahasa Indonesia
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                disabled={active == "/join" ? true : false}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/join" onClick={() => setIsOpen(false)}>
                  {t.nav.joinUs}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
