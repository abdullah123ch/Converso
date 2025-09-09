import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>
        Start Your Journey
      </div>
      <h2 className='text-3xl font-bold'>
        Build your knowledge with our AI companions
      </h2>
      <p className='text-lg'>
        Discover personalized learning experiences tailored to your interests and goals. Our AI companions are here to guide you every step of the way.
      </p>
      <Image src="/images/cta.svg" alt="cta" width={300} height={300} />
      <Button className='btn-primary'>
        <Image src="/icons/plus.svg" alt="arrow" width={12.5} height={12.5} />
        <Link href="/companions/new">
          New Companion
        </Link>
      </Button>
    </section>
  )
}

export default CTA