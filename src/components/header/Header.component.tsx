 "use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cbbLogoCondensed from "../../../public/assets/img/cbbLogoCondensed.svg";
import cbbLogoLong from "../../../public/assets/img/cbbLogoLong.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full mx-auto px-4 py-4 sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex justify-between items-center gap-4">
        <Link href="/" className="hidden md:block">
          <Image src={cbbLogoLong} height={40} alt="chicago blues bands logo" />
        </Link>
        <Link href="/" className="md:hidden font-black" onClick={closeMobileMenu}>
          <Image src={cbbLogoCondensed} height={40} alt="chicago blues bands logo" />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/pricing" className="font-bold hover:underline">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm cursor-pointer font-bold px-4 py-2 w-max rounded-full transition-all duration-500 border-1 border-slate-900 text-slate-900 hover:scale-110"
          >
            Contact
          </Link>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="md:hidden w-72 bg-white">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Browse site sections.</SheetDescription>
            </SheetHeader>

            <nav id="mobile-navigation" className="mt-8">
              <div className="flex flex-col items-center gap-8 pt-2">
                <SheetClose asChild>
                  <Link href="/pricing" className="font-bold hover:underline">
                    Pricing
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-sm cursor-pointer font-bold px-4 py-2 w-max rounded-full transition-all duration-500 border-1 border-slate-900 text-slate-900 hover:scale-110"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;