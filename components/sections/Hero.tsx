"use client"

import React from 'react'
import Image from 'next/image'
import Stack from '../Stack'

const Hero = () => {
      // Dữ liệu cho Stack component 
      const images = [
            // { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
            // { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
            // { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
            // { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
            { id: 1, img: "/assets/stacks/stack1.JPG" },
            { id: 2, img: "/assets/stacks/stack2.JPG" },
            { id: 3, img: "/assets/stacks/stack3.JPG" },
            { id: 4, img: "/assets/stacks/stack4.JPG" }
          ];

      return (
                  <div className="relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4">
                        <div className="flex justify-between mb-10 select-none gap-6" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              <div className="flex flex-1 flex-col gap-3">
                                    <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tight" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                                          Hi, I&apos;m Sang 👋
                                    </h1>
                                    <p className="md:text-xl font-normal max-w-md leading-normal" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                                          Mobile Application Developer. Slightly addicted to coffee, and not a fan of
                                          <span className="relative">CS
                                                <span className="absolute top-0 transform translate-y-[8px] rotate-45">S.</span>
                                          </span>
                                    </p>
                              </div>
                              <div className="block lg:hidden" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                                    <Image
                                          src="assets/profile.png"
                                          alt="Profile"
                                          width={128}
                                          height={128}
                                          className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full"
                                          unoptimized
                                    />
                              </div>
                              <div className="hidden lg:block z-20" style={{ opacity: 1, filter: 'blur(0px)', transform: 'rotate(10deg)'}}>
                                    <div className="relative" style={{ width: 190, height: 190 }}>
                                          <Stack
                                                animationConfig={{ stiffness: 260, damping: 20 }}
                                                randomRotation={true}
                                                sensitivity={200}
                                                sendToBackOnClick={true}
                                                cardDimensions={{ width: 190, height: 190 }}
                                                cardsData={images}
                                          />
                                    </div>
                              </div>
                        </div>
                        <div className="mb-10" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              <p className="font-bold text-xl leading-normal" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>About</p>
                              <p className="text-sm font-medium text-gray-500" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              By the end of 2024, I earned an Engineering degree in Information Technology from Tra Vinh University. I am a passionate and self-motivated mobile application developer with a strong interest in technology and a commitment to continuous learning. I have hands-on experience building cross-platform applications using Flutter and React Native.
                              </p>
                        </div>

                        <div className="mb-10" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              <p className="font-bold text-xl leading-normal mb-3" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>Work Experience</p>
                              <div className="flex flex-col gap-4" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
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
                                          }
                                    ].map((experience, index) => (
                                          <div key={index} style={{ opacity: 1, transform: 'none' }}>
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
                                                                        <p className="flex flex-grow-0 font-semibold text-xs sm:text-sm text-black">
                                                                              {experience.company}
                                                                              <span className="inline-flex gap-x-1"></span>
                                                                        </p>
                                                                        <p className="text-xs sm:text-sm text-gray-500 font-medium sm:whitespace-nowrap">{experience.date}</p>
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