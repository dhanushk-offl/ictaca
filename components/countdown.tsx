"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the conference date - April 25, 2025
    const conferenceDate = new Date("April 16, 2026 09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = conferenceDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-12 md:py-20 bg-section-pattern relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Event Countdown</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">Join us for the conference in:</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6 mt-8 max-w-4xl mx-auto">
          <CountdownItem value={timeLeft.days} label="Days" delay={0} />
          <CountdownItem value={timeLeft.hours} label="Hours" delay={0.1} />
          <CountdownItem value={timeLeft.minutes} label="Minutes" delay={0.2} />
          <CountdownItem value={timeLeft.seconds} label="Seconds" delay={0.3} />
        </div>
      </div>
    </section>
  )
}

function CountdownItem({ value, label, delay }: { value: number; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="overflow-hidden border border-gray-200 shadow-md">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <motion.span
            className="text-4xl md:text-5xl font-bold text-primary"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          >
            {value}
          </motion.span>
          <span className="text-muted-foreground font-medium mt-1">{label}</span>
        </CardContent>
      </Card>
    </motion.div>
  )
}

