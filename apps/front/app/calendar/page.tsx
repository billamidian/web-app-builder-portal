"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Script from "next/script"

export default function CalendarPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a timeout to consider the calendar as loaded after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8 flex items-center justify-center">
        <div className="flex items-center">
          <Image src="/plogo.jpg" alt="PushButtonBuild Logo" width={40} height={40} className="mr-2" />
          <h1 className="text-2xl font-bold">PushButtonBuild Calendar</h1>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center my-12">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-lg">Loading calendar...</p>
          </div>
        </div>
      )}

      <div id="ycbm-container" className="min-h-[800px] w-full" style={{ overflow: "hidden" }}>
        {/* YouCanBookMe embed div */}
        <div id="ycbm-embed" className="w-full h-full"></div>
      </div>

      {/* Script properly implemented with correct attributes */}
      <Script
        id="ycbm-script"
        src="https://embed.ycb.me"
        strategy="afterInteractive"
        onLoad={() => {
          setIsLoading(false)
          console.log("YouCanBookMe script loaded")
        }}
        data-domain="pushbuttonbuild"
        data-displaymode="auto"
      />
    </div>
  )
}
