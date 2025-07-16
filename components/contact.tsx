"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "./button";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Voer je naam in",
    })
    .min(1, "Voer je naam in"),
  email: z
    .string({
      required_error: "Voer je emailadres in",
    })
    .email("Voer een geldig emailadres in")
    .min(1, "Voer je emailadres in"),
  company: z
    .string({
      required_error: "Voer je bedrijfsnaam in",
    })
    .min(1, "Voer je bedrijfsnaam in"),
  message: z
    .string({
      required_error: "Voer je bericht in",
    })
    .min(1, "Voer je bericht in"),
});

export type ContactUser = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const submitContactForm = useMutation(api.contact.submitContactForm);

  const form = useForm<ContactUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactUser) {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      if (submitContactForm) {
        await submitContactForm({
          name: values.name,
          email: values.email,
          company: values.company,
          message: values.message,
        });

        setSubmitMessage("Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.");
        form.reset();
      } else {
        // Fallback when Convex is not available
        console.log("Contact form submission:", values);
        setSubmitMessage("Bedankt voor je bericht! Neem contact op via info@co-creatie.ai voor snelle respons.");
        form.reset();
      }
    } catch (error) {
      setSubmitMessage("Er is iets misgegaan. Probeer het opnieuw of neem direct contact met ons op.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative z-20">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-light mb-4 text-neutral-900 dark:text-neutral-100">
          Start jouw AI-partnership
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Klaar om jouw eerste AI-partner te ontdekken? Laten we beginnen bij de kern van wat jouw business werkelijk nodig heeft.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                >
                  Naam
                </label>
                <FormControl>
                  <div className="mt-2">
                    <input
                      id="name"
                      type="text"
                      placeholder="Je volledige naam"
                      className="block w-full bg-white dark:bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                >
                  Emailadres
                </label>
                <FormControl>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      placeholder="je@bedrijf.nl"
                      className="block w-full bg-white dark:bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                >
                  Bedrijf
                </label>
                <FormControl>
                  <div className="mt-2">
                    <input
                      id="company"
                      type="text"
                      placeholder="Jouw bedrijfsnaam"
                      className="block w-full bg-white dark:bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300"
                >
                  Bericht
                </label>
                <FormControl>
                  <div className="mt-2">
                    <textarea
                      rows={5}
                      id="message"
                      placeholder="Vertel ons over jouw uitdagingen en wat je hoopt te bereiken met een AI-partner..."
                      className="block w-full bg-white dark:bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Button 
              type="submit" 
              className="w-full py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Versturen..." : "Verstuur bericht"}
            </Button>
          </div>

          {submitMessage && (
            <div className={`mt-4 p-4 rounded-lg ${
              submitMessage.includes("Bedankt") 
                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300" 
                : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
            }`}>
              <p className="text-sm">{submitMessage}</p>
            </div>
          )}
        </form>
      </Form>

      <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Of neem direct contact op: <br />
          <a href="mailto:info@co-creatie.ai" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            info@co-creatie.ai
          </a>
        </p>
      </div>
    </div>
  );
}
