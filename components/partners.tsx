"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { partners } from "@/lib/data"
import { Handshake } from "lucide-react"

export default function Partners() {
  return (
    <section id="partners" className="w-full py-12 md:py-20 bg-section-pattern">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm text-white mb-2">
              <Handshake className="mr-2 h-4 w-4" />
              Partners
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Our Partners</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Supported by leading organizations in technology and academia
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Modified this div to center the 3 partners on desktop */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center max-w-3xl">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hoverable-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain h-14"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}