"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navbar
    "nav.whatWeDo": "What We Do",
    "nav.howWeDoIt": "How We Do It",
    "nav.successCases": "Success Cases",
    "nav.aboutUs": "About Us",
    "nav.yourCareer": "Your Career",
    "nav.contactUs": "Contact Us",

    // Hero
    "hero.banner": "Welcome to Cosmind",
    "hero.title": "Fueling your growth with top talent & tech",
    "hero.description":
      "Where ideas are transformed into scalable solutions through skilled people, custom development, and marketing services.",
    "hero.cta": "Let's talk",

    // What We Do
    "whatWeDo.title": "Our Services",
    "whatWeDo.subtitle": "We boost your team, your brand, and your product",
    "whatWeDo.webDev": "Custom Development",
    "whatWeDo.webDev.desc": "We build end-to-end digital solutions tailored to your business — from discovery and prototyping to launch and maintenance.",
    "whatWeDo.mobileDev": "Digital Marketing",
    "whatWeDo.mobileDev.desc": "We craft and execute full-funnel strategies focused on performance, growth, and long-term impact.",
    "whatWeDo.uiUx": "UI/UX & Product Design",
    "whatWeDo.uiUx.desc": "We design user-centered, intuitive, and visually engaging digital experiences that align with your product vision and business objectives.",
    "whatWeDo.staffAug": "Staff Augmentation",
    "whatWeDo.staffAug.desc":
      "Seamlessly scale your team with top-tier professionals in development, marketing, UI/UX design, data, QA, DevOps, and more. We align with your culture and business goals from day one.",
    "whatWeDo.consulting": "Tech Consulting",
    "whatWeDo.consulting.desc": "Strategic guidance to help you make the right technology decisions.",

    // How We Do It
    "howWeDoIt.title": "How We Work",
    "howWeDoIt.subtitle": "Clear processes. Real results.",
    "howWeDoIt.step1": "Discovery",
    "howWeDoIt.step1.desc": "We dig deep into your needs, company culture, and objectives to craft the right staffing strategy and match the right talent.",
    "howWeDoIt.step2": "Strategy",
    "howWeDoIt.step2.desc": "We tap into our global network to handpick candidates that are not only technically sharp but also a cultural fit for your team.",
    "howWeDoIt.step3": "Onboarding & Support",
    "howWeDoIt.step3.desc": "We ensure a smooth and frictionless onboarding process, with ongoing support to help the new talent thrive.",
    "howWeDoIt.step4": "Execution & Delivery",
    "howWeDoIt.step4.desc": "Hands on work — developing, bringing, iterating, and optimizing your product using agile methodologies and best practices.",
    "howWeDoIt.step5": "Continuous Improvement",
    "howWeDoIt.step5.desc": "We gather feedback, track performance, and make strategic adjustments to keep driving real value to your business.",

    // Success Cases
    "successCases.title": "They Trust Us",
    "successCases.subtitle": "Companies that choose our strategic collaboration model",
    "successCases.project1": "Qira Global",
    "successCases.project1.desc": "A complete online shopping solution with integrated payment processing.",
    "successCases.project2": "Join Ready",
    "successCases.project2.desc": "A platform designed to successfully connect professionals with top-tier companies.",
    "successCases.project3": "Open Labs Latam",
    "successCases.project3.desc": "An intranet specialized in comprehensive personnel management and AI-based intelligent decision-making.",

    // About Us
    "aboutUs.title": "About Us",
    "aboutUs.subtitle": "Our Story and Mission",
    "aboutUs.story":
      "Founded in 2020, Cosmind has grown into a team of passionate digital creators. We believe in using technology to solve real-world problems and create meaningful experiences.",
    "aboutUs.mission":
      "Our mission is to help businesses thrive in the digital age by providing innovative, high-quality technology solutions.",
    "aboutUs.values": "Our Values",
    "aboutUs.value1": "Innovation",
    "aboutUs.value2": "Quality",
    "aboutUs.value3": "Collaboration",
    "aboutUs.value4": "Integrity",
    "aboutUs.desc1": "We embrace new ideas and technologies to stay ahead.",
    "aboutUs.desc2": "We deliver excellence in everything we do.",
    "aboutUs.desc3": "We work together to achieve common goals.",
    "aboutUs.desc4": "We act with honesty and transparency.",


    // Your Career
    "career.title": "Your Career",
    "career.subtitle": "Join Our Team of Innovators",
    "career.description":
      "We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.",
    "career.openings": "Current Openings",
    "career.position1": "Frontend Developer",
    "career.position2": "UX/UI Designer",
    "career.position3": "Mobile Developer",
    "career.applyBtn": "Apply Now",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's Start a Conversation",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Footer
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",

    // Email
    "email.sent": "Message Sent",
    "email.thanks": "Thank you for contacting us. We will get back to you soon.",
    "email.sendAgain": "Send Another Message",
    "email.error": "Error Sending Message",
  },
  es: {
    // Navbar
    "nav.whatWeDo": "Qué Hacemos",
    "nav.howWeDoIt": "Cómo lo Hacemos",
    "nav.successCases": "Casos de Éxito",
    "nav.aboutUs": "Sobre Nosotros",
    "nav.yourCareer": "Tu Carrera",
    "nav.contactUs": "Contáctanos",

    // Hero
    "hero.banner": "Bienvenido a Cosmind",
    "hero.title": "Donde la tecnología acelera el éxito.",
    "hero.description":
      "Transformamos ideas en soluciones escalables a través de talento especializado, desarrollos a medida y servicios de marketing.",
    "hero.cta": "Hablemos",

    // What We Do
    "whatWeDo.title": "Servicios",
    "whatWeDo.subtitle": "Potenciamos tu equipo, tu marca y tu producto",
    "whatWeDo.webDev": "Desarrollo Web",
    "whatWeDo.webDev.desc":
      "Creamos soluciones tecnológicas end-to-end adaptadas a tu negocio: desde el descubrimiento hasta el mantenimiento post-lanzamiento.",
    "whatWeDo.mobileDev": "Marketing Digital",
    "whatWeDo.mobileDev.desc": "Diseñamos e implementamos estrategias de marketing integrales con foco en resultados y crecimiento sostenible.",
    "whatWeDo.uiUx": "UI/UX y Producto",
    "whatWeDo.uiUx.desc": "Creamos experiencias digitales funcionales, intuitivas y atractivas, centradas en el usuario y alineadas a tus objetivos de negocio.",
    "whatWeDo.staffAug": "Aumento de Personal",
    "whatWeDo.staffAug.desc":
      "Incorpora profesionales altamente calificados en programación, marketing, diseño UI/UX, data, QA, DevOps y más. Nos alineamos con tu cultura y objetivos.",
    "whatWeDo.consulting": "Consultoría Tecnológica",
    "whatWeDo.consulting.desc": "Orientación estratégica para ayudarte a tomar las decisiones tecnológicas correctas.",

    // How We Do It
    "howWeDoIt.title": "Nuestro Método",
    "howWeDoIt.subtitle": "Procesos claros. Resultados reales.",
    "howWeDoIt.step1": "Descubrimiento",
    "howWeDoIt.step1.desc": "Analizamos necesidades, cultura y objetivos para encontrar la solución adecuada y el talento ideal.",
    "howWeDoIt.step2": "Selección estratégica",
    "howWeDoIt.step2.desc": "Activamos la red global y seleccionamos perfiles que encajan técnica y culturalmente con tu equipo.",
    "howWeDoIt.step3": "Onboarding y Acompañamiento",
    "howWeDoIt.step3.desc": "Aseguramos una integración rápida, sin fricciones y con seguimiento constante.",
    "howWeDoIt.step4": "Ejecución y Soporte",
    "howWeDoIt.step4.desc": "Desarrollamos, optimizamos e iteramos en soluciones con metodologías ágiles y acompañamiento continuo.",
    "howWeDoIt.step5": "Retroalimentación",
    "howWeDoIt.step5.desc": "Recogemos feedback, medimos resultados y ajustamos para seguir aportando valor real al negocio.",

    // Success Cases
    "successCases.title": "Confían en nosotros",
    "successCases.subtitle": "Empresas que eligen nuestro modelo de colaboración estratégica",
    "successCases.project1": "Qira Global",
    "successCases.project1.desc": "Una solución completa de compras en línea con procesamiento de pagos integrado.",
    "successCases.project2": "Join Ready",
    "successCases.project2.desc": "Plataforma diseñada para vincular exitosamente a profesionales con compañías de alto nivel.",
    "successCases.project3": "Open Labs Latam",
    "successCases.project3.desc": "Intranet especializada en la gestión integral de personal y en la toma de decisiones inteligentes basadas en IA.",

  
    // About Us
    "aboutUs.title": "Sobre Cosmind",
    "aboutUs.subtitle": "Talento, tecnologia y equipos comprometidos.",
    "aboutUs.story":
      `Cosmind nació en 2020 con la visión de ser un socio estratégico para las empresas que buscan crecer con flexibilidad y calidad. Reunimos expertos en programación, marketing y tecnología para construir equipos y soluciones que realmente funcionan.
      Combinamos la agilidad de una startup con la calidad de una gran consultora, ofreciendo tanto profesionales expertos como soluciones integrales.
      Creemos en las personas, no solo en los recursos. Por eso combinamos talento de primer nivel, agilidad operativa y un acompañamiento cercano para impulsar resultados sostenibles.`,
    "aboutUs.mission":
      "Nuestra misión es innovar con excelencia, siempre para los clientes.",
    "aboutUs.values": "Nuestros Valores",
    "aboutUs.value1": "Respeto",
    "aboutUs.value2": "Confianza",
    "aboutUs.value3": "Responsabilidad",
    "aboutUs.value4": "Empatia",
    "aboutUs.desc1": "Repetamos nuevas ideas y tecnologías para mantenernos a la vanguardia.",
    "aboutUs.desc2": "Tomamos los proyectos de nuestros clientes como propios.",
    "aboutUs.desc3": "Trabajamos juntos para lograr objetivos comunes.",
    "aboutUs.desc4": "Actuamos con honestidad y transparencia.",
  
    // Your Career
    "career.title": "Forma parte de Cosmind",
    "career.subtitle": "Sumate si te mueve la innovación y el trabajo en equipo",
    "career.description":
      "Buscamos personas con actitud, iniciativa y pasión por la tecnología. Si te interesa formar parte de un entorno flexible, multicultural y orientado a crear impacto real, estamos deseando conocerte.",
    "career.openings": "Vacantes disponibles",
    "career.position1": "Frontend Developer",
    "career.position2": "UX/UI Designer",
    "career.position3": "Mobile Developer",
    "career.applyBtn": "Aplica ahora",
  
    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle": "Permítenos ser tu próximo socio digital y llevar tu proyecto al siguiente nivel.",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar",

    // Footer
    "footer.followUs": "Síguenos",
    "footer.rights": "Cosmind Group @2025 - Todos los derechos reservados.",

    // Email
    "email.sent": "Mensaje Enviado",
    "email.thanks": "Gracias por contactarnos. Te responderemos pronto.",
    "email.sendAgain": "Enviar Otro Mensaje",
    "email.error": "Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.",

  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
