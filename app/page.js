import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import QuienesSomos from '@/components/QuienesSomos'
import Services from '@/components/Services'
import Tours from '@/components/Tours'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-screen'>
      <Hero />
      <Services />
      <Cards />
      <Tours />
      <QuienesSomos />
      <Footer />
    </main>
  )
}
