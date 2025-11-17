"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, LogInIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Logo from "@/public/images/logo.png";

interface Props {
  active: string;
}

export default function Header({ active = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/stories", label: "Stories" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <header className="sticky bg-background border top-4 w-4/5 mx-auto z-50 shadow-xl rounded-2xl">
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
              <Button
                disabled={active == "/join" ? true : false}
                className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center"
              >
                <Link href="/join">Join Us</Link>
              </Button>
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
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/join" onClick={() => setIsOpen(false)}>
                  Join Us
                </Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
