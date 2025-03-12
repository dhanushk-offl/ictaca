"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { aboutInstitution } from "@/lib/data"

export default function AboutInstitution() {
  return (
    <section id="about" className="w-full py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary mb-2">
              About the Institution
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">{aboutInstitution.name}</h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">{aboutInstitution.description}</p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={aboutInstitution.image || "/placeholder.svg"}
                alt={aboutInstitution.name}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

