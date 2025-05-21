"use client";

import * as z from "zod";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/contexts/language-context";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  user_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  user_email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          "cosmind-service-id",
          "template_o6pjtyq",
          formRef.current,
          "Ve5VysX-xCeqLO0_f"
        );

        console.log("SUCCESS!", result.text);
        setFormStatus("success");
        reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("FAILED...", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {formStatus === "success" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-navy-900/95 rounded-lg z-10">
          <div className="text-center p-6">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-navy-700 dark:text-gray-300 mb-4">
              Gracias por contactarnos. Te responderemos pronto.
            </p>
            <Button
              onClick={() => setFormStatus("idle")}
              className="bg-navy-600 hover:bg-navy-700 text-white"
            >
              Enviar Otro Mensaje
            </Button>
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            <p>
              Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.
            </p>
          </div>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t("contact.name")}
          </label>
          <input
            type="text"
            id="user_name"
            {...register("user_name")}
            className={`w-full px-4 py-3 bg-white dark:bg-navy-800 border ${
              errors.user_name
                ? "border-red-500"
                : "border-gray-300 dark:border-navy-600"
            } rounded-md text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500`}
          />
          {errors.user_name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.user_name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t("contact.email")}
          </label>
          <input
            type="email"
            id="user_email"
            {...register("user_email")}
            className={`w-full px-4 py-3 bg-white dark:bg-navy-800 border ${
              errors.user_email
                ? "border-red-500"
                : "border-gray-300 dark:border-navy-600"
            } rounded-md text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500`}
          />
          {errors.user_email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.user_email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className={`w-full px-4 py-3 bg-white dark:bg-navy-800 border ${
              errors.message
                ? "border-red-500"
                : "border-gray-300 dark:border-navy-600"
            } rounded-md text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy-600 hover:bg-navy-700 text-white py-3 transition-all duration-300 transform hover:translate-y-[-2px]"
          >
            {isSubmitting ? "Enviando..." : t("contact.send")}
          </Button>
        </div>
      </form>
    </div>
  );
}
