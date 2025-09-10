"use client"

import CompaionCard from '@/components/CompaionCard'
import { Button } from '@/components/ui/button'
import { useCompanions } from '@/context/CompanoinContext'
import { getSubjectColor } from '@/lib/utils'
import Link from 'next/link'

const Companions = () => {
  const { companions } = useCompanions()

  if (companions.length === 0) {
    return (
      <main>
        <section className='flex gap-4 justify-between max-sm:flex-col'>
          <h1>
            Companions Library
          </h1>
        </section>
        <p className='text-center text-lg'>
          No companions found
        </p>
        {/* <Button>
          <Link href="/companions/new">
            Add New Companion
          </Link>
        </Button> */}
      </main>
    )
  }

  return (
    <main>
        <section className='flex gap-4 justify-between max-sm:flex-col'>
          <h1>
            Companions Library
          </h1>
        </section>
        <section className='companions-grid'>
          {companions.map((companion, index) => (
            <CompaionCard
              key={index}
              id={companion.id}
              name={companion.name}
              topic={companion.topic}
              subject={companion.subject}
              duration={companion.duration.toString()}
              color={getSubjectColor(companion.subject)}
            />
          ))}
        </section>
    </main>
  )
}

export default Companions