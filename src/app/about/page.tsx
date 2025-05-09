import React from 'react'
import Background from '@/components/Background'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="bg-white relative">
      <Background />
      <div className="mx-auto max-w-[700px] py-10 sm:py-24 text-black">
        <div className="relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="mb-4">
            I am a passionate Mobile Application Developer with experience in building cross-platform
            and native mobile applications. My journey in software development has equipped me with
            a strong foundation in modern development practices and technologies.
          </p>
          <p className="mb-4">
            With a focus on user-centric design and performance optimization, I strive to create
            seamless mobile experiences that solve real-world problems.
          </p>
          <p className="mb-4">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open
            source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 h-16 w-full bg-white to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none"></div>
      <Footer />
    </div>
  )
} 