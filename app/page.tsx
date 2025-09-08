import React from 'react'
import { Button } from '@/components/ui/button'
import CompaionCard from '@/components/CompaionCard'
import CTA from '@/components/CTA'
import CompanionList from '@/components/CompanionList'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
       <section className='home-section'>
        <CompaionCard 
        id="123"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="science"
        duration="45"
        color="#E5D0FF"
        />
        <CompaionCard 
        id="456"
        name="Countsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="maths"
        duration="30"
        color="#FFDA6E"
        />
        <CompaionCard 
        id="789"
        name="Verba the Vocabulary Builder"
        topic="English Literature"
        subject="language"
        duration="30"
        color="#BDE7FF"
        />
       </section>
       <section className='home-section'>
         <CompanionList />
         <CTA />
       </section>
    </main>
  )
}

export default Page