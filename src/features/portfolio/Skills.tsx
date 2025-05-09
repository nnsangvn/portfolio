"use client"

import React from 'react'

const Skills = () => {
      const skills = [
            "Flutter", "React Native", "React",
            "Firebase", "Docker",
      ]

      return (
            <div className="relative z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-lg p-6 xs:p-4">
            <div className="mb-20" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                  <p className="font-bold text-xl leading-normal mb-3" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>Skills</p>
                  <div className="flex flex-wrap gap-y-1 gap-x-2" style={{ opacity: 1 }}>
                        {skills.map((skill, index) => (
                              <div key={index} style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                                    <div className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-xs leading-normal py-0.5 px-2.5">
                                          {skill}
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
            </div>
      )
}

export default Skills 