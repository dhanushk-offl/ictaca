"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/data"

export default function Stats() {
  return (
    <section className="w-full py-16 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center space-y-3 hoverable-card p-6 rounded-lg border border-gray-100 shadow-sm"
              >
                <motion.div
                  className="bg-primary/10 p-3 rounded-full text-primary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

