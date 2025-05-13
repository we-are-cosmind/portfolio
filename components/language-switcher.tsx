"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("es")}
        className={`w-10 px-0 ${
          language === "es"
            ? "bg-navy-600 hover:bg-navy-700 text-white"
            : "text-white border-white hover:bg-navy-800 hover:text-white"
        }`}
      >
        ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`w-10 px-0 ${
          language === "en"
            ? "bg-navy-600 hover:bg-navy-700 text-white"
            : "text-white border-white hover:bg-navy-800 hover:text-white"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
