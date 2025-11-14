"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/stories", label: "Stories" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">
                  GP
                </span>
              </div>
              <span className="text-foreground">GEMPAR</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/join">Join Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
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
