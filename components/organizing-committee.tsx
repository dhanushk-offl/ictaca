"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { committeeMembers } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function OrganizingCommittee() {
  const [activeTab, setActiveTab] = useState("patrons")
  const tabs = [
    { id: "patrons", label: "Patrons" },
    { id: "conveners", label: "Conveners" },
    { id: "advisory", label: "Advisory Panel" },
    { id: "technical", label: "Technical Team" },
  ]

  return (
    <section id="committee" className="w-full py-12 md:py-20 bg-background">
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
              <Users className="mr-2 h-4 w-4" />
              Committee
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">Organizing Committee</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">Meet the team behind ICTACA-2025</p>
          </div>
        </motion.div>

        <div className="mt-10">
          {/* Improved Responsive Tabs - Full Text Visible */}
          <div className="committee-tabs mx-auto max-w-2xl mb-8 flex flex-wrap md:flex-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`committee-tab relative px-2 py-3 text-xs md:text-sm lg:text-base transition-all duration-200 font-medium rounded-t-lg
                  ${activeTab === tab.id 
                    ? "bg-primary text-primary-foreground font-semibold" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                style={{ 
                  flex: "1 1 auto", 
                  minWidth: "80px",
                  margin: "0 1px"
                }}
              >
                <span className="block text-center">
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-primary-foreground" 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {activeTab === "patrons" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <CommitteeSection title="Honorary Patron" members={committeeMembers.honoraryPatron} />
                  <CommitteeSection title="Chief Patron" members={committeeMembers.chiefPatron} />
                  <CommitteeSection title="Patron" members={committeeMembers.patron} />
                </div>
              )}

              {activeTab === "conveners" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CommitteeSection title="Convener" members={committeeMembers.convener} />
                  <div className="space-y-6">
                    <CommitteeSection title="Co-Convener" members={committeeMembers.coConvener} />
                    <CommitteeSection title="Coordinator" members={committeeMembers.coordinator} />
                  </div>
                </div>
              )}

              {activeTab === "advisory" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-6 md:mb-0">
                    <AdvisoryList title="International Advisory Panel" members={committeeMembers.internationalAdvisory} />
                  </div>
                  <div>
                    <AdvisoryList title="National Advisory Panel" members={committeeMembers.nationalAdvisory} />
                  </div>
                </div>
              )}

              {activeTab === "technical" && (
                <div className="grid grid-cols-1 gap-6">
                  <CommitteeSection
                    title="Organizing Chairs"
                    members={committeeMembers.organizingChairs}
                    showImages={true}
                  />
                  <AdvisoryList
                    title="Technical Program Coordinators"
                    members={committeeMembers.technicalProgramCoordinators}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function CommitteeSection({
  title,
  members,
  showImages = true,
}: { title: string; members: any[]; showImages?: boolean }) {
  return (
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center text-primary">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 committee-card-grid">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-full"
          >
            <Card className="committee-card hoverable-card overflow-hidden h-full border shadow-sm">
              <CardContent className="p-3 md:p-4 flex flex-col items-center">
                {showImages && (
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2 md:mb-3 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm">
                    <Image 
                      src={member.image || "/placeholder.svg"} 
                      alt={member.name} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  </div>
                )}
                <h4 className="font-bold text-center text-sm md:text-base">{member.name}</h4>
                <p className="text-xs md:text-sm text-muted-foreground text-center mt-1">{member.position}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function AdvisoryList({ title, members }: { title: string; members: any[] }) {
  return (
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary">{title}</h3>
      <Card className="hoverable-card h-full border shadow-sm">
        <CardContent className="p-3 md:p-5">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3">
            {members.map((member, index) => (
              <motion.li
                key={member.id}
                className="flex flex-col"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <span className="font-medium text-sm md:text-base">{member.name}</span>
                {member.affiliation && (
                  <span className="text-xs md:text-sm text-muted-foreground">{member.affiliation}</span>
                )}
                {member.position && !member.affiliation && (
                  <span className="text-xs md:text-sm text-muted-foreground">{member.position}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}