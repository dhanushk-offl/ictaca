"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { contactInfo, quickLinks, SocialLinks, conferenceData } from "@/lib/data"
import { GraduationCap, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="w-full pt-12 pb-6 md:pt-24 md:pb-8 bg-corporate-gradient text-white">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-2xl">{conferenceData.shortName}</span>
            </div>
            <p className="text-white/90 max-w-xs">
              {conferenceData.name}
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/90">{contactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:underline text-white/90">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm hover:underline text-white/90">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-bold text-xl mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href={SocialLinks.linkedin}
                aria-label="LinkedIn"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={SocialLinks.instagram}
                aria-label="Instagram"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} {conferenceData.shortName}. All rights reserved.<br /> Designed & Developed by IT'26, Dept. of IT, CAHCET</p>
        </div>
      </div>
    </footer>
  )
}

