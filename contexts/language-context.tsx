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
    "hero.title": "Exploring the Digital Universe",
    "hero.description":
      "We transform ideas into reality, using technology as a tool and innovation as a driving force.",
    "hero.cta": "Start your project",

    // What We Do
    "whatWeDo.title": "What We Do",
    "whatWeDo.subtitle": "Turning Ideas into Digital Solutions",
    "whatWeDo.webDev": "Web Development",
    "whatWeDo.webDev.desc": "We create responsive, modern websites and web applications using the latest technologies.",
    "whatWeDo.mobileDev": "Mobile Development",
    "whatWeDo.mobileDev.desc": "Native and cross-platform mobile applications for iOS and Android.",
    "whatWeDo.uiUx": "UI/UX Design",
    "whatWeDo.uiUx.desc": "User-centered design that creates intuitive and engaging digital experiences.",
    "whatWeDo.staffAug": "Staff Augmentation",
    "whatWeDo.staffAug.desc":
      "Extend your team with our skilled professionals to accelerate your projects and reduce time-to-market.",
    "whatWeDo.consulting": "Tech Consulting",
    "whatWeDo.consulting.desc": "Strategic guidance to help you make the right technology decisions.",

    // How We Do It
    "howWeDoIt.title": "How We Do It",
    "howWeDoIt.subtitle": "Our Approach to Digital Excellence",
    "howWeDoIt.step1": "Discovery",
    "howWeDoIt.step1.desc": "We start by understanding your business, goals, and challenges.",
    "howWeDoIt.step2": "Strategy",
    "howWeDoIt.step2.desc": "We develop a tailored strategy and roadmap for your digital solution.",
    "howWeDoIt.step3": "Design",
    "howWeDoIt.step3.desc": "We create intuitive, engaging designs that align with your brand.",
    "howWeDoIt.step4": "Development",
    "howWeDoIt.step4.desc": "We build your solution using modern technologies and best practices.",
    "howWeDoIt.step5": "Launch & Support",
    "howWeDoIt.step5.desc": "We deploy your solution and provide ongoing support and improvements.",

    // Success Cases
    "successCases.title": "Success Cases",
    "successCases.subtitle": "Our Work Speaks for Itself",
    "successCases.project1": "E-commerce Platform",
    "successCases.project1.desc": "A complete online shopping solution with integrated payment processing.",
    "successCases.project2": "Healthcare App",
    "successCases.project2.desc": "Mobile application for patient management and telemedicine.",
    "successCases.project3": "Financial Dashboard",
    "successCases.project3.desc": "Real-time analytics dashboard for financial data visualization.",

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
    "hero.title": "Explorando el Universo Digital",
    "hero.description":
      "Transformamos ideas en realidad, utilizando tecnología como herramienta e innovación como fuerza impulsora.",
    "hero.cta": "Comienza tu proyecto",

    // What We Do
    "whatWeDo.title": "Qué Hacemos",
    "whatWeDo.subtitle": "Convertimos Ideas en Soluciones Digitales",
    "whatWeDo.webDev": "Desarrollo Web",
    "whatWeDo.webDev.desc":
      "Creamos sitios web y aplicaciones web modernas y responsivas utilizando las últimas tecnologías.",
    "whatWeDo.mobileDev": "Desarrollo Móvil",
    "whatWeDo.mobileDev.desc": "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
    "whatWeDo.uiUx": "Diseño UI/UX",
    "whatWeDo.uiUx.desc": "Diseño centrado en el usuario que crea experiencias digitales intuitivas y atractivas.",
    "whatWeDo.staffAug": "Aumento de Personal",
    "whatWeDo.staffAug.desc":
      "Amplía tu equipo con nuestros profesionales calificados para acelerar tus proyectos y reducir el tiempo de salida al mercado.",
    "whatWeDo.consulting": "Consultoría Tecnológica",
    "whatWeDo.consulting.desc": "Orientación estratégica para ayudarte a tomar las decisiones tecnológicas correctas.",

    // How We Do It
    "howWeDoIt.title": "Cómo lo Hacemos",
    "howWeDoIt.subtitle": "Nuestro Enfoque hacia la Excelencia Digital",
    "howWeDoIt.step1": "Descubrimiento",
    "howWeDoIt.step1.desc": "Comenzamos por entender tu negocio, objetivos y desafíos.",
    "howWeDoIt.step2": "Estrategia",
    "howWeDoIt.step2.desc": "Desarrollamos una estrategia y hoja de ruta personalizada para tu solución digital.",
    "howWeDoIt.step3": "Diseño",
    "howWeDoIt.step3.desc": "Creamos diseños intuitivos y atractivos que se alinean con tu marca.",
    "howWeDoIt.step4": "Desarrollo",
    "howWeDoIt.step4.desc": "Construimos tu solución utilizando tecnologías modernas y mejores prácticas.",
    "howWeDoIt.step5": "Lanzamiento y Soporte",
    "howWeDoIt.step5.desc": "Implementamos tu solución y proporcionamos soporte y mejoras continuas.",

    // Success Cases
    "successCases.title": "Casos de Éxito",
    "successCases.subtitle": "Nuestro Trabajo Habla por Sí Mismo",
    "successCases.project1": "Plataforma de E-commerce",
    "successCases.project1.desc": "Una solución completa de compras en línea con procesamiento de pagos integrado.",
    "successCases.project2": "App de Salud",
    "successCases.project2.desc": "Aplicación móvil para gestión de pacientes y telemedicina.",
    "successCases.project3": "Dashboard Financiero",
    "successCases.project3.desc": "Panel de análisis en tiempo real para visualización de datos financieros.",

    // About Us
    "aboutUs.title": "Sobre Nosotros",
    "aboutUs.subtitle": "Nuestra Historia y Misión",
    "aboutUs.story":
      "Fundada en 2020, Cosmind ha crecido hasta convertirse en un equipo de apasionados creadores digitales. Creemos en usar la tecnología para resolver problemas del mundo real y crear experiencias significativas.",
    "aboutUs.mission":
      "Nuestra misión es ayudar a las empresas a prosperar en la era digital proporcionando soluciones tecnológicas innovadoras y de alta calidad.",
    "aboutUs.values": "Nuestros Valores",
    "aboutUs.value1": "Innovación",
    "aboutUs.value2": "Calidad",
    "aboutUs.value3": "Colaboración",
    "aboutUs.value4": "Integridad",

    // Your Career
    "career.title": "Tu Carrera",
    "career.subtitle": "Únete a Nuestro Equipo de Innovadores",
    "career.description":
      "Siempre estamos buscando personas talentosas para unirse a nuestro equipo. Si te apasiona la tecnología y la innovación, nos encantaría saber de ti.",
    "career.openings": "Vacantes Actuales",
    "career.position1": "Desarrollador Frontend",
    "career.position2": "Diseñador UX/UI",
    "career.position3": "Desarrollador Móvil",
    "career.applyBtn": "Aplicar Ahora",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "Iniciemos una Conversación",
    "contact.name": "Nombre",
    "contact.email": "Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    // Footer
    "footer.followUs": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",
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
