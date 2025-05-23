"use client"

import { Menu, Rocket, X } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

interface NavbarProps {
  openCalendly: () => void
}

export default function Navbar({ openCalendly }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { name: t("nav.whatWeDo"), href: "#what-we-do" },
    { name: t("nav.howWeDoIt"), href: "#how-we-do-it" },
    { name: t("nav.successCases"), href: "#clients" },
    { name: t("nav.aboutUs"), href: "#about-us" },
    { name: t("nav.yourCareer"), href: "#your-career" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)

    if (sectionId === "#contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      return
    }
    
    const element = document.getElementById(sectionId.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-white font-medium text-xl">COSMIND</span>
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-4">
          <LanguageSwitcher />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-white hover:text-navy-300 transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSwitcher />
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-navy-600 hover:bg-navy-700 text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
          >
            {t("nav.contactUs")}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/80" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Rocket className="h-8 w-8 text-white" />
              <span className="text-white font-medium text-xl">Cosmind</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-navy-700">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-navy-800 w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <Button
                  onClick={openCalendly}
                  className="w-full bg-navy-600 hover:bg-navy-700 text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  {t("nav.contactUs")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
