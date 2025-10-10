"use client";

import { personalData } from "../../lib/resume-data";
import { useState, useRef } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name, // Match {{name}} in template
          email: formData.email, // Match {{email}} in template
          subject: formData.subject, // Add to template
          message: formData.message, // Match {{message}} in template
          time: new Date().toLocaleString(), // Match {{time}} in template
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.status, result.text);

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("FAILED...", error);
      setIsSubmitting(false);
      alert(
        "Failed to send message. Please try again or email me directly at " +
          personalData.email
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-950/30 via-slate-950 to-slate-950" />

      {/* Subtle animated background - matching theme */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Contact Information
            </h3>

            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="p-5 sm:p-6 flex items-start gap-4 border-none shadow-lg bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all overflow-hidden relative">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tl from-indigo-600/10 to-purple-600/10" />

                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>

                <div className="relative z-10 flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg mb-1 text-white">
                    Email
                  </h4>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm sm:text-base text-white/70 hover:text-indigo-400 transition-colors break-all"
                  >
                    {personalData.email}
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="p-5 sm:p-6 flex items-start gap-4 border-none shadow-lg bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all overflow-hidden relative">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tl from-indigo-600/10 to-purple-600/10" />

                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>

                <div className="relative z-10 flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg mb-1 text-white">
                    Phone
                  </h4>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-sm sm:text-base text-white/70 hover:text-blue-400 transition-colors"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="p-5 sm:p-6 flex items-start gap-4 border-none shadow-lg bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all overflow-hidden relative">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tl from-indigo-600/10 to-purple-600/10" />

                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>

                <div className="relative z-10 flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg mb-1 text-white">
                    Location
                  </h4>
                  <p className="text-sm sm:text-base text-white/70">
                    {personalData.location}
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-8 border-none shadow-xl bg-white/5 backdrop-blur-md overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-br-full" />
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-tl from-indigo-600/10 to-purple-600/10" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-indigo-600/10 border border-indigo-500/20 text-indigo-300 p-8 rounded-lg text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-indigo-600/20 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-indigo-400" />
                      </div>
                      <h4 className="text-xl font-bold">Message Sent!</h4>
                      <p className="text-white/70">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-white font-medium"
                        >
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/10 focus:border-indigo-500 text-white placeholder:text-white/30"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-white font-medium"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/10 focus:border-indigo-500 text-white placeholder:text-white/30"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-white font-medium"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 focus:border-indigo-500 text-white placeholder:text-white/30"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-white font-medium"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 focus:border-indigo-500 text-white placeholder:text-white/30 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-white font-semibold py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
