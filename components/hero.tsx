"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { conferenceData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={conferenceData.heroBackground || "/placeholder.svg"}
          alt="Conference background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-corporate-gradient opacity-80"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-md">
              {conferenceData.name}
            </h1>
            <p className="text-2xl font-medium text-white mt-2">
              {conferenceData.shortName}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 text-white"
            >
              <div className="flex items-center bg-white/15 backdrop-blur-md px-5 py-3 rounded-full shadow-lg">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span className="font-medium">{conferenceData.date}</span>
              </div>
              <a href={conferenceData.locationLink} target="_blank">
              <div className="flex items-center bg-white/15 backdrop-blur-md px-5 py-3 rounded-full shadow-lg">
                <MapPin className="h-7 w-7 mr-2" />
                <span className="font-medium">
                  {conferenceData.venue}, {conferenceData.location}
                </span>
              </div>
              </a>
            </motion.div>

            {/* Organizing Departments */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-white/95 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg inline-block"
            >
              <p className="font-medium">Organized by Departments of CSE, IT, AI&DS and MCA</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto max-w-[800px] w-full"
          >
            <div className="relative p-6 md:p-8 rounded-xl overflow-hidden shadow-xl">
              {/* Glass effect background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl"></div>
              
              {/* Content */}
              <p className="relative text-white text-base md:text-lg leading-relaxed z-10">
                {conferenceData.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg rounded-full font-bold px-8"
            >
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 rounded-full font-bold px-8"
            >
              <Link href="#call-for-papers">Submit Paper</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Simple divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <div className="h-12 bg-background rounded-t-3xl"></div>
      </div>
    </section>
  )
}