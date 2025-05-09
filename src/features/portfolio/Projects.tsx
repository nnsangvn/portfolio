"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
      const [activeTab, setActiveTab] = useState('development')

      const projects = [
            {
                  image: "/assets/VisionLand.png",
                  title: "VisionLand",
                  date: "2024",
                  description: "Implemented application features based on pre-designed UI using REST API, applying the MVC pattern, and managing state efficiently using GetX.",
                  technologies: ["Flutter", "Getx", "MVC"],
                  websiteUrl: "#",
                  sourceUrl: "#",
                  type: "development"
            },
            {
                  image: "/assets/AddRealEstate.png",
                  title: "Kho Xuong Duc Hoa",
                  date: "2025",
                  description: "Developed the entire UI of the Real Estate Info application. Used REST API to implement various features of the application. Applied Clean Architecture and managed state using GetX.",
                  technologies: ["Flutter", "Getx", "Clean Architecture"],
                  websiteUrl: "#",
                  sourceUrl: "#",
                  type: "development"
            },
            {
                  image: "/assets/music-app.png",
                  title: "Music App",
                  date: "2025",
                  description: "Developed a music streaming app inspired by Spotify using Flutter, Bloc for state management, and Firebase for backend services, following clean architecture principles for maintainable code.",
                  technologies: ["Flutter", "Firebase", "Cubit"],
                  websiteUrl: "#",
                  sourceUrl: "https://github.com/nnsangvn/spotify",
                  type: "development"
            },
            {
                  image: "/assets/Food-Hub.png",
                  title: "Food Hub",
                  date: "2025",
                  description: "Developed a food delivery app using Flutter, implementing clean architecture and BloC for state management, with a focus on responsive design and user experience.",
                  technologies: ["Flutter","BloC", "Clean Architecture"],
                  websiteUrl: "#",
                  sourceUrl: "https://github.com/nnsangvn/flutter_food_hub",
                  type: "development"
            },
            // {
            //       image: "/assets/tvu-logo.png",
            //       title: "Project 4",
            //       date: "2025",
            //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
            //       technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
            //       websiteUrl: "#",
            //       sourceUrl: "#",
            //       type: "design"
            // }
      ]

      const filteredProjects = activeTab === 'all'
            ? projects
            : projects.filter(project => project.type === activeTab)

      return (
            <div className="mb-20 flex flex-col items-center justify-center text-center" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                  <div className="space-y-2 mb-10">
                        <div className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-sm py-1 px-2.5">
                              My Projects
                        </div>
                        <h2 className="font-bold text-3xl sm:text-5xl tracking-tight" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              Check out my latest works
                        </h2>
                        <p className="text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed text-gray-500" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                        I developed mobile applications, ranging from simple apps to complex solutions. Here are a few of my favorites.
                        </p>
                  </div>

                  <div className="w-full max-w-3xl mx-auto">
                        <div className="flex rounded-lg bg-gray-100 p-1">
                              <button
                                    className={`flex-1 py-2 px-4 text-center text-sm font-medium rounded-md transition-colors ${activeTab === 'development' ? 'text-black bg-white shadow-sm' : 'text-black bg-transparent'}`}
                                    onClick={() => setActiveTab('development')}
                                    tabIndex={0}
                              >
                                    Development
                              </button>
                              <button
                                    className={`flex-1 py-2 px-4 text-center text-sm font-medium rounded-md transition-colors ${activeTab === 'design' ? 'text-black bg-white shadow-sm' : 'text-black bg-transparent'}`}
                                    onClick={() => setActiveTab('design')}
                                    tabIndex={0}
                              >
                                    Design
                              </button>
                        </div>

                        <div className="py-4">
                              <div style={{ opacity: 1 }}>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" style={{ opacity: 1, transform: 'none' }}>
                                          {filteredProjects.map((project, index) => (
                                                <div key={index} style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                                                      <div className="rounded-lg bg-card flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                                                            <div className="relative w-full h-40">
                                                                  <Image
                                                                        src={project.image}
                                                                        alt={project.title}
                                                                        className="w-full h-full object-cover"
                                                                        width={400}
                                                                        height={160}
                                                                  />
                                                            </div>
                                                            <div className="text-left flex flex-col h-full px-2 py-2">
                                                                  <div className="space-y-1 mb-2">
                                                                        <h3 className="text-md font-semibold text-black">{project.title}</h3>
                                                                        <p className="text-xs font-medium text-black">{project.date}</p>
                                                                        <p className="mt-2 text-xs text-gray-500 leading-relaxed">{project.description}</p>
                                                                  </div>
                                                                  <div className="mt-auto flex flex-wrap gap-2">
                                                                        {project.technologies.map((tech, i) => (
                                                                              <span key={i} className="text-[10px] px-2 py-1 bg-gray-100 rounded-md font-semibold">
                                                                                    {tech}
                                                                              </span>
                                                                        ))}
                                                                  </div>
                                                                  <div className="mt-2 flex gap-1">
                                                                        <Link href={project.websiteUrl} className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-[10px] cursor-pointer inline-flex gap-1 py-1 px-2.5">
                                                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                                                                              </svg>
                                                                              Website
                                                                        </Link>
                                                                        <Link href={project.sourceUrl} className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-[10px] cursor-pointer inline-flex gap-1 py-1 px-2.5">
                                                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                                                              </svg>
                                                                              Source
                                                                        </Link>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Projects 