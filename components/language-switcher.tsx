"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-4">

      {
        language === "es" ? (
          <Button
          variant={language === "es" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`w-10 px-0 ${
            language === "es"
              ? "bg-navy-600 hover:bg-navy-700 text-white"
              : "text-white border-white hover:bg-navy-800 hover:text-white"
          }`}
        >
          ES
        </Button>
        ) : (
          <Button
          variant={language === "en" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("es")}
          className={`w-10 px-0 ${
            language === "en"
              ? "bg-navy-600 hover:bg-navy-700 text-white"
              : "text-white border-white hover:bg-navy-800 hover:text-white"
          }`}
        >
          EN
        </Button>
        )
      }
   
      <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/we.are.cosmind"
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
                href="https://www.linkedin.com/in/cosmind-it-partner/"
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
    </div>
  )
}
