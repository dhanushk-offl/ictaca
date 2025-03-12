"use client"

import { useEffect, useRef } from "react"
import { announcements } from "@/lib/data"
import { BellRing } from "lucide-react"

export default function Announcements() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    const animateMarquee = () => {
      if (marqueeElement.scrollLeft >= marqueeElement.scrollWidth / 2) {
        marqueeElement.scrollLeft = 0
      } else {
        marqueeElement.scrollLeft += 1
      }
      requestAnimationFrame(animateMarquee)
    }

    const animation = requestAnimationFrame(animateMarquee)
    return () => cancelAnimationFrame(animation)
  }, [])

  const combinedAnnouncements = [...announcements, ...announcements] // Duplicate for seamless loop

  return (
    <div className="announcement-bar text-white py-3 overflow-hidden shadow-md relative">
      <div className="container flex items-center">
        <div className="flex-shrink-0 hidden md:flex items-center mr-4 pl-4">
          <BellRing className="h-5 w-5 mr-2" />
          <span className="font-medium">Announcements:</span>
        </div>
        <div ref={marqueeRef} className="whitespace-nowrap overflow-hidden flex-1">
          <div className="inline-block">
            {combinedAnnouncements.map((announcement, index) => (
              <span key={index} className="mx-6 inline-flex items-center">
                <span className="inline-block h-2 w-2 rounded-full bg-white mr-2"></span>
                {announcement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

