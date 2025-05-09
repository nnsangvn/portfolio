"use client"

import React from 'react'
import Image from 'next/image'

const Education = () => {
      const educations = [
            {
                  logo: "/assets/tvu-logo.png",
                  school: "Tra Vinh University",
                  date: "Oct 2020 - Dec 2024",
                  degree: "Engineer's Degree in Information Technology"
            }
            
      ]

      return (
            <div className="relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4">
            <div className="mb-10" id="education" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                  <p className="font-bold text-xl leading-normal mb-3" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>Education</p>
                  <div className="flex flex-col gap-4" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                        {educations.map((education, index) => (
                              <div key={index} style={{ opacity: 1, transform: 'none' }}>
                                    <div className="flex select-none">
                                          <div className="flex-none">
                                                <Image
                                                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                                                      src={education.logo}
                                                      alt={`${education.logo} Logo`}
                                                      width={48}
                                                      height={48}
                                                />
                                          </div>
                                          <div className="flex-grow ml-4 items-center flex-col group cursor-pointer">
                                                <div className="flex flex-col">
                                                      <div className="w-full flex justify-between">
                                                            <p className="flex flex-grow-0 font-semibold text-xs sm:text-sm text-black">
                                                                  {education.school}
                                                                  <span className="inline-flex gap-x-1"></span>
                                                            </p>
                                                            <p className="text-xs sm:text-sm text-gray-500 font-medium sm:whitespace-nowrap">{education.date}</p>
                                                      </div>
                                                      <p className="text-xs text-gray-500 font-medium">{education.degree}</p>
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

export default Education 