"use client"

import { motion } from "framer-motion"
import { importantDates } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function ImportantDates() {
  return (
    <section id="important-dates" className="w-full py-12 md:py-20 bg-section-pattern">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm text-white mb-2">
              <CalendarDays className="mr-2 h-4 w-4" />
              Mark Your Calendar
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Important Dates</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Keep track of these key deadlines for your participation
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {importantDates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="hoverable-card border-t-4 border-t-primary h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.event}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-primary">{item.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

