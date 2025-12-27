"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Scan } from "lucide-react"

// Dynamic import agar tidak dirender di server
const Scanner = dynamic(
  () => import("@yudiel/react-qr-scanner").then((mod) => mod.Scanner),
  { 
    ssr: false,
    loading: () => (
      <div className="h-64 w-full bg-black rounded-2xl flex items-center justify-center">
        <p className="text-white text-sm">Memuat Kamera...</p>
      </div>
    )
  }
)

interface QRScannerProps {
  onScan: (result: string) => void
  onError?: (error: any) => void
}

export function QRScanner({ onScan, onError }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(true)

  const handleScan = (detectedCodes: any[]) => {
    if (detectedCodes && detectedCodes.length > 0) {
      const value = detectedCodes[0].rawValue
      if (value) {
        setIsScanning(false) // Stop scanning after success
        onScan(value)
      }
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-black aspect-square max-w-sm mx-auto shadow-lg">
      {isScanning ? (
        <Scanner
          onScan={handleScan}
          onError={(error) => {
            console.error(error)
            if (onError) onError(error)
          }}
          components={{
            onOff: false,
            torch: true,
            zoom: true,
            finder: true,
          }}    
          styles={{
            container: { width: "100%", height: "100%" },
            video: { width: "100%", height: "100%", objectFit: "cover" }
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-black/90">
          <p className="text-white font-medium">Memproses...</p>
        </div>
      )}

      {/* Overlay Dekoratif (Scanning Line) */}
      {isScanning && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.8)] animate-scan" />
          <div className="absolute inset-0 border-2 border-white/20 rounded-2xl" />
          
          {/* Pojok-pojok bingkai */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-green-500 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-green-500 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-green-500 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-green-500 rounded-br-lg" />
        </div>
      )}

      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
          <Scan className="w-4 h-4 animate-pulse" />
          <span>Arahkan kamera ke QR Code</span>
        </div>
      </div>
    </div>
  )
}