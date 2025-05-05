import React from 'react'
import Background from '@/components/Background'
import Hero from '@/components/sections/Hero'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
// import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-white relative">
      <Background />
      <div className="mx-auto max-w-[700px] py-10 sm:py-24 text-black">
        <div className="relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4">
          <Hero />
          <Education />
          <Skills />
          <Projects />
          {/* <Certificates /> */}
          <Contact />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 h-16 w-full bg-white to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none"></div>
      <Footer />
    </div>
  )
}
