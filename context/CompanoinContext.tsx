"use client"

import { createContext, useContext, useState, ReactNode } from "react"

// Define the shape of a companion
type Companion = {
  id: string
  name: string
  subject: string
  topic: string
  voice: string
  style: string
  color: string
  duration: number
}

// Define the context type
type CompanionContextType = {
  companions: Companion[]
  addCompanion: (companion: Companion) => void
}

// Create the context
const CompanionContext = createContext<CompanionContextType | undefined>(undefined)

// Provider component
export function CompanionProvider({ children }: { children: ReactNode }) {
  const [companions, setCompanions] = useState<Companion[]>([])

  const addCompanion = (companion: Companion) => {
    setCompanions((prev) => [...prev, companion])
  }

  return (
    <CompanionContext.Provider value={{ companions, addCompanion }}>
      {children}
    </CompanionContext.Provider>
  )
}

// Hook for easy usage
export function useCompanions() {
  const context = useContext(CompanionContext)
  if (!context) {
    throw new Error("useCompanions must be used within a CompanionProvider")
  }
  return context
}
