"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { conferenceData } from '@/lib/data'

export default function RegisterPage() {
  const router = useRouter()
  const GOOGLE_FORM_URL = conferenceData.registrationLink; // Replace with your actual Google Form URL
  
  useEffect(() => {
    // Set a short timeout to allow the message to be displayed briefly
    const redirectTimer = setTimeout(() => {
      // Redirect to the Google Form
      window.location.href = GOOGLE_FORM_URL
    }, 2000) // 2 second delay
    
    // Cleanup the timer if the component unmounts
    return () => clearTimeout(redirectTimer)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background/80 to-background">
      <div className="text-center p-8 max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Redirecting to Registration G-Forms!</h1>
        <p className="text-muted-foreground mb-6">Thank you for your patience...</p>
        
        {/* Loading spinner */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
        
        {/* Manual link in case automatic redirect fails */}
        <p className="mt-8 text-sm">
          If you are not redirected automatically,{" "}
          <a 
            href={GOOGLE_FORM_URL} 
            className="text-primary hover:underline font-medium"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  )
}