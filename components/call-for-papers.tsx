"use client"

import { motion } from "framer-motion"
import { callForPapers } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="w-full py-12 md:py-20 bg-background">
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
              <FileText className="mr-2 h-4 w-4" />
              Call for Papers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Submit Your Research</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              We invite submissions in the following domains
            </p>
          </div>
        </motion.div>

        {/* Modified grid with 2 columns on mobile, keeping existing layout for larger screens */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-10">
          {callForPapers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-l-4 border-l-primary hover:shadow-md transition-all duration-300">
                <CardContent className="p-3 sm:p-4 md:p-5 h-full flex items-center">
                  <p className="font-medium text-sm sm:text-base">{item.domain}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}