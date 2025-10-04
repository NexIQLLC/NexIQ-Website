"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
                    
          <div className="flex h-20 md:h-24 items-center">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center space-x-3 pl-3 md:pl-8">
                <Image
                  src="/NexIQ%20No%20background.png"
                  alt="NexIQ LLC Logo"
                  width={320}
                  height={90}
                  priority
                  className="h-20 w-auto md:h-24"
                />
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="hover:bg-transparent hover:text-inherit text-base md:text-lg px-5 py-2.5 cursor-pointer hover:underline hover:underline-offset-4"
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="ml-auto flex items-center space-x-2 pr-3 md:pr-6">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-transparent hover:text-inherit cursor-pointer hover:underline hover:underline-offset-4"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      
    </header>
  );
}


