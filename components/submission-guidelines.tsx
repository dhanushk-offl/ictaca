"use client"

import { motion } from "framer-motion"
import { submissionGuidelines } from "@/lib/data"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { FileCheck, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { conferenceData } from "@/lib/data"

export default function SubmissionGuidelines() {
  return (
    <section id="guidelines" className="w-full py-12 md:py-20 bg-section-pattern">
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
              <FileCheck className="mr-2 h-4 w-4" />
              Guidelines
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
              Manuscript Submission Guidelines
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Follow these guidelines for your paper submission
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border shadow-md overflow-hidden">
            <div className="bg-primary text-white p-5">
              <CardTitle className="text-xl">Submission Requirements</CardTitle>
            </div>
            <CardContent className="p-5 pt-6">
              <ul className="space-y-4">
                {submissionGuidelines.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shrink-0">
                      <span className="text-xs font-bold">{item.id}</span>
                    </div>
                    <p>{item.guideline}</p>
                  </motion.li>
                ))}
              </ul>

              {/* <div className="mt-8 flex justify-center">
                <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90" size="lg" asChild>
                  <a href={conferenceData.guidelinesPdf} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Download Guidelines PDF
                  </a>
                </Button>
              </div> */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

