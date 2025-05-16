"use client"

import React from 'react'
import Image from 'next/image'
import Stack from '@/components/Stack'

const Hero = () => { 
  // Dữ liệu hình ảnh cho Stack
  const images = [
    { id: 1, img: "/assets/stacks/stack1.JPG" },
    { id: 2, img: "/assets/stacks/stack2.JPG" },
    { id: 3, img: "/assets/stacks/stack3.jpg" },
    { id: 4, img: "/assets/stacks/stack4.jpg" },
    { id: 5, img: "/assets/stacks/stack5.jpg" }
  ];

  return (
    <div className="relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4">
      <div className="flex justify-between mb-10 select-none gap-6" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
        <div className="flex flex-1 flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tight">
            Hi, I&apos;m Sang 👋
          </h1>
          <p className="md:text-xl font-normal max-w-md leading-normal">
            Mobile Application Developer. Slightly addicted to coffee, and not a fan of
            <span className="relative">CS
              <span className="absolute top-0 transform translate-y-[8px] rotate-45">S.</span>
            </span>
          </p>
        </div>

        {/* Ảnh profile (ẩn trên desktop) */}
        <div className="block lg:hidden">
          <Image
            src="/assets/profile.png"
            alt="Profile"
            width={128}
            height={128}
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full"
            unoptimized
          />
        </div>

        {/* Stack hiển thị trên desktop */}
        <div className="hidden lg:block z-20" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
          <div className="relative" style={{ width: "190px", height: "190px", perspective: 600 }}>
            <Stack
              animationConfig={{ stiffness: 260, damping: 20 }}
              randomRotation={false}
              sensitivity={100}
              sendToBackOnClick={true}
              cardDimensions={{ width: 200, height: 200 }}
              cardsData={images}
            />
          </div>
        </div>
      </div>
      
      {/* Section About */}
      <div className="mb-10">
        <p className="font-bold text-xl leading-normal">About</p>
        <p className="text-sm font-medium text-gray-500">
          By the end of 2024, I earned an Engineering degree in Information Technology from Tra Vinh University. I am a passionate and self-motivated mobile application developer with a strong interest in technology and a commitment to continuous learning. I have hands-on experience building cross-platform applications using Flutter and React Native.
        </p>
      </div>

      {/* Section Work Experience */}
      <div className="mb-10">
        <p className="font-bold text-xl leading-normal mb-3">Work Experience</p>
        <div className="flex flex-col gap-4">
          {[
            {
              logo: "/assets/cds-logo.png",
              company: "CÔNG TY CP TIÊN PHONG CDS",
              date: "Mar 2025 - Present",
              title: "Mobile Developer"
            },
            {
              logo: "/assets/mevivu-logo.png",
              company: "Mevivu Technology",
              date: "Nov 2024 - Feb 2025",
              title: "Mobile Developer Intern"
            },
          ].map((experience, index) => (
            <div key={index}>
              <div className="flex select-none">
                <div className="flex-none">
                  <Image
                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                    src={experience.logo}
                    alt={`${experience.company} Logo`}
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <div className="flex-grow ml-4 items-center flex-col group cursor-pointer">
                  <div className="flex flex-col">
                    <div className="w-full flex justify-between">
                      <p className="font-semibold text-xs sm:text-sm text-black">
                        {experience.company}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium sm:whitespace-nowrap">
                        {experience.date}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{experience.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
