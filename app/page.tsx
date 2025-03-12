"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import ImportantDates from "@/components/important-dates"
import AboutInstitution from "@/components/about-institution"
import Countdown from "@/components/countdown"
import CallForPapers from "@/components/call-for-papers"
import RegistrationFee from "@/components/registration-fee"
import OrganizingCommittee from "@/components/organizing-committee"
import SubmissionGuidelines from "@/components/submission-guidelines"
import Venue from "@/components/venue"
import Partners from "@/components/partners"
import Footer from "@/components/footer"
import Announcements from "@/components/announcements"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Announcements />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      
      <FadeInSection delay={0.2}>
        <Countdown />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <ImportantDates />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <AboutInstitution />
      </FadeInSection>

      
      <FadeInSection delay={0.1}>
        <Stats />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <CallForPapers />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <RegistrationFee />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <OrganizingCommittee />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <SubmissionGuidelines />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <Venue />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <Contact />
      </FadeInSection>


      <FadeInSection delay={0.2}>
        <Gallery />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <Partners />
      </FadeInSection>

      <Footer />
    </main>
  )
}

