"use client"

import { motion } from "framer-motion"
import { venueInfo } from "@/lib/data"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { MapPin, Plane, Train, Bus, Car } from "lucide-react"

export default function Venue() {
  return (
    <section id="venue" className="w-full py-12 md:py-20 bg-background">
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
              <MapPin className="mr-2 h-4 w-4" />
              Location
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Venue Information</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">How to reach the conference venue</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border shadow-md overflow-hidden">
              <div className="bg-primary text-white p-5">
                <CardTitle>Conference Venue</CardTitle>
              </div>
              <CardContent className="p-5">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{venueInfo.name}</h3>
                    <p className="text-muted-foreground">{venueInfo.address}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">How to Reach</h3>
                    <div className="space-y-4">
                      {venueInfo.transportation.map((item) => {
                        let Icon
                        switch (item.mode) {
                          case "By Air":
                            Icon = Plane
                            break
                          case "By Train":
                            Icon = Train
                            break
                          case "By Bus":
                            Icon = Bus
                            break
                          case "By Car":
                            Icon = Car
                            break
                          default:
                            Icon = MapPin
                        }

                        return (
                          <motion.div
                            key={item.id}
                            className="flex"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: item.id * 0.1 }}
                          >
                            <Icon className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">{item.mode}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="h-[450px] rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src={venueInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Conference Venue Map"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

