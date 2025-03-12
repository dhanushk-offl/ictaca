"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { departmentContacts } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, ChevronDown } from "lucide-react"

export default function ContactSection() {
  const [expandedDept, setExpandedDept] = useState<string | null>(null)

  const toggleDepartment = (deptId: string) => {
    setExpandedDept(expandedDept === deptId ? null : deptId)
  }

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm font-medium mb-2">
              <Mail className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              Point of Contact
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-primary">
              Department Contacts
            </h2>
            <p className="max-w-[700px] text-sm md:text-base lg:text-xl text-muted-foreground">
              Have questions about our conference? Reach out to the appropriate department.
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Department Contacts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="border border-border/40 shadow-sm overflow-hidden">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Department Points of Contact</h3>
                
                <div className="space-y-2 md:space-y-3">
                  {departmentContacts.map((dept) => (
                    <div key={dept.id} className="border border-border/40 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleDepartment(dept.id)}
                        className="w-full p-2 md:p-3 flex items-center justify-between hover:bg-muted/40 transition-colors text-left"
                      >
                        <div className="text-sm md:text-base font-medium">{dept.name}</div>
                        <ChevronDown 
                          className={`h-4 w-4 md:h-5 md:w-5 transition-transform ${
                            expandedDept === dept.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedDept === dept.id && (
                        <div className="p-2 md:p-3 pt-0 border-t border-border/40 space-y-2 md:space-y-3">
                          {dept.contacts.map((contact, idx) => (
                            <div 
                              key={idx} 
                              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 px-2 rounded hover:bg-muted/30 transition-colors"
                            >
                              <div className="mb-1 sm:mb-0">
                                <p className="text-sm md:text-base font-medium">{contact.name}</p>
                                <p className="text-xs md:text-sm text-muted-foreground">{contact.role}</p>
                                <p className="text-xs md:text-sm text-muted-foreground break-all">{contact.email}</p>
                              </div>
                              <a
                                href={`tel:${contact.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-1 sm:mt-0"
                              >
                                <Phone className="mr-1 h-3 w-3" />
                                {contact.phone}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}