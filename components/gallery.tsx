"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { galleryImages } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Image, ChevronLeft, ChevronRight } from "lucide-react"

export default function ConferenceGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showControls, setShowControls] = useState(false)

  // Check viewport size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  // Handle controlled scrolling for mobile
  const scrollTo = (direction: 'next' | 'prev') => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const cardWidth = container.querySelector('div')?.offsetWidth || 300
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth
    
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    
    // Update current index for indicators
    if (direction === 'next') {
      setCurrentIndex(prev => (prev + 1) % galleryImages.length)
    } else {
      setCurrentIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  // Handle scroll indicator updates
  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const cardWidth = container.querySelector('div')?.offsetWidth || 300
    const newIndex = Math.round(container.scrollLeft / cardWidth)
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < galleryImages.length) {
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [currentIndex])

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-md bg-primary/10 text-primary px-3 py-1.5 text-sm font-medium mb-2">
              <Image className="mr-2 h-4 w-4" />
              Conference Highlights
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
              Event Gallery
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Memorable moments from our previous conferences
            </p>
          </div>
        </motion.div>

        {/* Desktop Gallery (Grid Layout) */}
        <div className="hidden md:grid mx-auto max-w-6xl grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/3]"
            >
              <Card className="h-full overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-0 h-full">
                  <div className="relative w-full h-full group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                        <p className="text-white/80 text-sm mt-1">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Gallery (Carousel) */}
        <div className="md:hidden relative mt-10" onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
            style={{ 
              WebkitOverflowScrolling: 'touch', 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[85vw] first:pl-4 last:pr-4 aspect-[4/3]"
              >
                <Card className="h-full overflow-hidden border border-border/40 shadow-sm">
                  <CardContent className="p-0 h-full">
                    <div className="relative w-full h-full">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                          <p className="text-white/80 text-sm mt-1">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Controls */}
          <button 
            onClick={() => scrollTo('prev')} 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={() => scrollTo('next')} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile Indicators */}
          <div className="flex justify-center mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.querySelector('div')?.offsetWidth || 300;
                    container.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                    setCurrentIndex(index);
                  }
                }}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-primary w-4' 
                    : 'bg-primary/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}