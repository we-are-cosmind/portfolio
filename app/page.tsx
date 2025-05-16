"use client"

import { Monitor, Palette, Smartphone, Users } from "lucide-react"
import { useEffect, useState } from "react"

import BrainIcon from "@/components/brain-icon"
import { Button } from "@/components/ui/button"
import CalendlyModal from "@/components/calendly-modal"
import ContactForm from "@/components/contact-form"
import FadeIn from "@/components/fade-in"
import FloatingElements from "@/components/floating-elements"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Typewriter from "@/components/typewriter"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const [_scrolled, setScrolled] = useState(false)
  const [_mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const logos = [
    "/assets/marca1.png",
    "/assets/marca2.jpg",
    "/assets/marca3.png",
    "/assets/marca4.jpeg",
    "/assets/marca5.png",
    "/assets/marca6.png",
    "/assets/marca8.jpg",
    "/assets/marca9.jpg",
    "/assets/marca10.png",
    "/assets/marca11.jpg",
    "/assets/marca12.jpg",
    "/assets/marca13.png",
  ];
  
  const openCalendly = () => {
    setIsCalendlyOpen(true)
  }

  const closeCalendly = () => {
    setIsCalendlyOpen(false)
  }

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
    <main className="min-h-screen flex flex-col">
      <Navbar openCalendly={openCalendly} />
      <FloatingElements />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto w-full pt-20 pb-32">
          <FadeIn delay={300}>
            <div className="flex items-center justify-start gap-4 mb-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white">{t('hero.banner')}</h1>
              <div className="">
              <BrainIcon />
              </div>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-white to-navy-300 mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4 h-[3rem]">
              <Typewriter textKey="hero.title" speed={100} delay={1000} />
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-8">{t("hero.description")}</p>
          </FadeIn>
          <div className="mt-12">
            <Button
              onClick={openCalendly}
              className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
            >
              {t("hero.cta")}
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-navy-900 mb-4">{t("whatWeDo.title")}</h2>
              <div className="h-1 w-24 bg-navy-500 mx-auto mb-6"></div>
              <p className="text-xl text-navy-700">{t("whatWeDo.subtitle")}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={100} direction="up">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div className="bg-navy-100 p-3 rounded-full w-fit mb-6">
                  <Monitor className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{t("whatWeDo.webDev")}</h3>
                <p className="text-navy-700 flex-grow">{t("whatWeDo.webDev.desc")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div className="bg-navy-100 p-3 rounded-full w-fit mb-6">
                  <Smartphone className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{t("whatWeDo.mobileDev")}</h3>
                <p className="text-navy-700 flex-grow">{t("whatWeDo.mobileDev.desc")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div className="bg-navy-100 p-3 rounded-full w-fit mb-6">
                  <Palette className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{t("whatWeDo.uiUx")}</h3>
                <p className="text-navy-700 flex-grow">{t("whatWeDo.uiUx.desc")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={400} direction="up">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div className="bg-navy-100 p-3 rounded-full w-fit mb-6">
                  <Users className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{t("whatWeDo.staffAug")}</h3>
                <p className="text-navy-700 flex-grow">{t("whatWeDo.staffAug.desc")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section id="how-we-do-it" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-navy-900 mb-4">{t("howWeDoIt.title")}</h2>
              <div className="h-1 w-24 bg-navy-500 mx-auto mb-6"></div>
              <p className="text-xl text-navy-700">{t("howWeDoIt.subtitle")}</p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-navy-400 to-navy-600"></div>

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <FadeIn direction="right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-navy-700 mb-2">{t("howWeDoIt.step1")}</h3>
                    <p className="text-navy-600">{t("howWeDoIt.step1.desc")}</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </FadeIn>

              {/* Step 2 */}
              <FadeIn direction="left">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-2xl font-bold text-navy-700 mb-2">{t("howWeDoIt.step2")}</h3>
                    <p className="text-navy-600">{t("howWeDoIt.step2.desc")}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Step 3 */}
              <FadeIn direction="right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-navy-700 mb-2">{t("howWeDoIt.step3")}</h3>
                    <p className="text-navy-600">{t("howWeDoIt.step3.desc")}</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </FadeIn>

              {/* Step 4 */}
              <FadeIn direction="left">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-2xl font-bold text-navy-700 mb-2">{t("howWeDoIt.step4")}</h3>
                    <p className="text-navy-600">{t("howWeDoIt.step4.desc")}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Step 5 */}
              <FadeIn direction="right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-navy-700 mb-2">{t("howWeDoIt.step5")}</h3>
                    <p className="text-navy-600">{t("howWeDoIt.step5.desc")}</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
{/* Trusted By Section */}
<section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <FadeIn>
      <h2 className="text-4xl font-bold text-navy-900 mb-4">{t("successCases.title")}</h2>
      <div className="h-1 w-24 bg-navy-500 mx-auto mb-6"></div>
      <p className="text-xl text-navy-700">{t("successCases.subtitle")}</p>
    </FadeIn>

    <div className="mt-12 overflow-hidden relative">
  <div className="flex w-max animate-scroll-x space-x-12">
    {logos.map((logo, idx) => (
      <img
        key={`logo-${idx}`}
        src={logo}
        alt={`Client ${idx + 1}`}
        className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
      />
    ))}
    {logos.map((logo, idx) => (
      <img
        key={`logo-duplicate-${idx}`}
        src={logo}
        alt={`Client Duplicate ${idx + 1}`}
        className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
      />
    ))}
  </div>
</div>
  </div>
</section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-navy-900 mb-4">{t("aboutUs.title")}</h2>
              <div className="h-1 w-24 bg-navy-500 mx-auto mb-6"></div>
              <p className="text-xl text-navy-700">{t("aboutUs.subtitle")}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="right">
              <div>
                <p className="text-navy-700 text-lg mb-6">{t("aboutUs.story")}</p>
                <p className="text-navy-700 text-lg">{t("aboutUs.mission")}</p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">{t("aboutUs.values")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-xl font-semibold text-navy-700 mb-2">{t("aboutUs.value1")}</h4>
                    <p className="text-navy-600">{t("aboutUs.desc1")}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-xl font-semibold text-navy-700 mb-2">{t("aboutUs.value2")}</h4>
                    <p className="text-navy-600">{t("aboutUs.desc2")}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-xl font-semibold text-navy-700 mb-2">{t("aboutUs.value3")}</h4>
                    <p className="text-navy-600">{t("aboutUs.desc3")}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-xl font-semibold text-navy-700 mb-2">{t("aboutUs.value4")}</h4>
                    <p className="text-navy-600">{t("aboutUs.desc3")}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Your Career Section */}
      <section id="your-career" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-navy-900 mb-4">{t("career.title")}</h2>
              <div className="h-1 w-24 bg-navy-500 mx-auto mb-6"></div>
              <p className="text-xl text-navy-700">{t("career.subtitle")}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="right">
              <div>
                <p className="text-navy-700 text-lg mb-8">{t("career.description")}</p>
                <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                >
                  {t("career.applyBtn")}
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">{t("career.openings")}</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <h4 className="text-xl font-semibold text-navy-900 mb-2">{t("career.position1")}</h4>
                    <p className="text-navy-700 mb-4">React, Next.js, TypeScript</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <h4 className="text-xl font-semibold text-navy-900 mb-2">{t("career.position2")}</h4>
                    <p className="text-navy-700 mb-4">Figma, Adobe XD, User Research</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <h4 className="text-xl font-semibold text-navy-900 mb-2">{t("career.position3")}</h4>
                    <p className="text-navy-700 mb-4">React Native, Flutter, Swift</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{t("contact.title")}</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-navy-300 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300">{t("contact.subtitle")}</p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn direction="up">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-white font-medium text-xl">WE ARE COSMIND</span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white">{t("footer.followUs")}:</span>
              <a
                href="https://www.instagram.com/cosmind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-navy-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/cosmind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-navy-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Cosmind. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
