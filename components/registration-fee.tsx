"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { registrationFees } from "@/lib/data"
import { paymentMethods } from "@/lib/payment-data"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CreditCard } from "lucide-react"
import { conferenceData } from "@/lib/data"
import Image from "next/image"

export default function RegistrationFee() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1)

  return (
    <section id="registration" className="w-full py-12 md:py-20 bg-section-pattern">
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
              <CreditCard className="mr-2 h-4 w-4" />
              Registration
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Registration Fees</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Register early to avail the early bird discount
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="bg-primary text-white py-3 px-6">
              <h3 className="font-bold text-lg">Fee Structure</h3>
            </div>
            <div className="rounded-b-lg border border-t-0 bg-card">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold">Category</TableHead>
                    <TableHead className="font-bold">Fee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrationFees.map((item, index) => (
                    <TableRow key={item.id} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <TableCell className="font-medium">{item.category}</TableCell>
                      <TableCell>{item.fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-center">Payment Methods</h3>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                    className={`payment-method ${selectedPaymentMethod === method.id ? "payment-method-active" : ""}`}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <Icon
                        className={`h-6 w-6 mb-2 ${selectedPaymentMethod === method.id ? "text-primary" : "text-gray-500"}`}
                      />
                      <span className="font-medium">{method.name}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Payment Method Details */}
            <Card className="border-t-4 border-primary shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">
                  {paymentMethods.find((m) => m.id === selectedPaymentMethod)?.name} Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {paymentMethods.map(
                  (method) =>
                    selectedPaymentMethod === method.id && (
                      <div key={method.id} className="space-y-4">
                        <p>{method.instructions}</p>

                        {method.id === 2 && method.details.qrCode && (
                          <div className="flex justify-center my-4">
                            <Image
                              src={method.details.qrCode || "/placeholder.svg"}
                              alt="Payment QR Code"
                              width={150}
                              height={150}
                              className="border rounded-md"
                            />
                          </div>
                        )}

                        <div className="bg-muted/30 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Details:</h4>
                          <ul className="space-y-2">
                            {Object.entries(method.details).map(
                              ([key, value]) =>
                                key !== "qrCode" && (
                                  <li key={key} className="flex flex-col md:flex-row md:items-center">
                                    <span className="font-medium md:w-1/3 capitalize">
                                      {key.replace(/([A-Z])/g, " $1").trim()}:
                                    </span>
                                    <span className="md:w-2/3">{value as string}</span>
                                  </li>
                                ),
                            )}
                          </ul>
                        </div>
                      </div>
                    ),
                )}
              </CardContent>
            </Card>
          </div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all shadow-md">
              <Link href={conferenceData.registrationLink}>Register Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

