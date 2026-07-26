"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/motion/Reveal";
import {
  staggerContainer,
  fadeUp,
  reducedMotionFade,
  hoverLift,
  tapScale,
} from "@/lib/motion";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const emailSubject =
      formData.subject.trim() ||
      "Portfolio Contact Message";

    const emailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    const mailtoLink = `mailto:raselahmediu22@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  const updateField = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16"
    >
      <Reveal>
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <FiMail aria-hidden="true" className="h-8 w-8 text-primary" />

            <h2 className="heading-font text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              Contact Me
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
            Have a project idea, collaboration opportunity,
            or job opening? Feel free to contact me directly.
            I am always open to discussing new opportunities
            and interesting web development projects.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={prefersReducedMotion ? reducedMotionFade : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          <ContactCard
            Icon={FiMail}
            label="Email Address"
            value="raselahmediu22@gmail.com"
            href="mailto:raselahmediu22@gmail.com"
            reducedMotion={prefersReducedMotion ?? false}
          />

          <ContactCard
            Icon={FiPhone}
            label="Phone Number"
            value="+8801763590999"
            href="tel:+8801763590999"
            reducedMotion={prefersReducedMotion ?? false}
          />

          <ContactCard
            Icon={FiMessageCircle}
            label="WhatsApp"
            value="+8801763590999"
            href="https://wa.me/8801763590999"
            external
            reducedMotion={prefersReducedMotion ?? false}
          />

          <motion.div
            variants={prefersReducedMotion ? reducedMotionFade : fadeUp}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-6 dark:border-slate-800 dark:from-primary/10 dark:via-slate-900 dark:to-secondary/10"
          >
            <FiMapPin aria-hidden="true" className="mb-4 h-8 w-8 text-primary" />

            <h3 className="heading-font mb-2 text-lg font-bold">
              Location
            </h3>

            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Bangladesh
            </p>

            <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Available for remote frontend and full-stack
              development opportunities.
            </p>
          </motion.div>
        </motion.div>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-7"
          >
            <div className="mb-6">
              <h3 className="heading-font mb-2 text-2xl font-bold">
                Send a Message
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Fill in the form and your email application
                will open with the message prepared.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id="contact-name"
                label="Your Name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(value) =>
                  updateField("name", value)
                }
                required
              />

              <FormField
                id="contact-email"
                label="Your Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(value) =>
                  updateField("email", value)
                }
                required
              />
            </div>

            <div className="mt-5">
              <FormField
                id="contact-subject"
                label="Subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={(value) =>
                  updateField("subject", value)
                }
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                rows={6}
                value={formData.message}
                onChange={(event) =>
                  updateField(
                    "message",
                    event.target.value
                  )
                }
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : tapScale}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              <FiSend aria-hidden="true" className="h-4 w-4 shrink-0" />

              Send Message
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

interface ContactCardProps {
  Icon: IconType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  reducedMotion: boolean;
}

const ContactCard = ({
  Icon,
  label,
  value,
  href,
  external = false,
  reducedMotion,
}: ContactCardProps) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external ? "noopener noreferrer" : undefined
      }
      variants={reducedMotion ? reducedMotionFade : fadeUp}
      whileHover={reducedMotion ? undefined : hoverLift}
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
          {value}
        </p>
      </div>

      <FiArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-primary" />
    </motion.a>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  type: "text" | "email";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const FormField = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}: FormFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
      />
    </div>
  );
};

export default ContactSection;
