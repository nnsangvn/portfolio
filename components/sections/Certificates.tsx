"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Certificates = () => {
      const certificates = [
            {
                  image: "/assets/udemy-1.png",
                  title: "Build Responsive Real-World Websites with HTML and CSS",
                  issuer: "Udemy",
                  date: "Issued 02/08/2024",
                  url: "https://www.udemy.com/certificate/UC-771e56cb-9d5b-4f3e-8d0e-97fb25b6aab9/"
            },
            {
                  image: "/assets/network-security.png",
                  title: "IT Specialist - Network Security",
                  issuer: "Certiport",
                  date: "Issued 07/03/2022",
                  url: "https://www.credly.com/badges/a84dee30-056f-4d68-be17-8ca254d70b82/public_url"
            },
            {
                  image: "/assets/cybersecurity.png",
                  title: "IT Specialist - Cybersecurity",
                  issuer: "Certiport",
                  date: "Issued 06/20/2023",
                  url: "https://www.credly.com/badges/551bd305-8828-411f-b1f8-08a0413342c3/public_url"
            },
            {
                  image: "/assets/word.png",
                  title: "Microsoft Office Specialist: Word Associate (Microsoft 365 Apps)",
                  issuer: "Microsoft",
                  date: "Issued 05/19/2024",
                  url: "https://www.credly.com/badges/4ff8dfe7-7c0c-4a90-92ea-9194de8da014/public_url"
            },
            {
                  image: "/assets/powerpoint.png",
                  title: "Microsoft Office Specialist: PowerPoint Associate (Microsoft 365 Apps)",
                  issuer: "Microsoft",
                  date: "Issued 05/20/2024",
                  url: "https://www.credly.com/badges/ea93a209-cd98-4544-a53d-648ff194cd32/public_url"
            },
            {
                  image: "/assets/excel.png",
                  title: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
                  issuer: "Microsoft",
                  date: "Issued 05/21/2024",
                  url: "https://www.credly.com/badges/6ddc1d92-3bf6-401c-99fd-8003418ea0f3/public_url"
            }
      ]

      return (
            <div className="mb-20 sm:mb-28 flex flex-col items-center justify-center text-center" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                  <div className="space-y-2 mb-10">
                        <div className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-sm py-1 px-2.5">
                              Certificates
                        </div>
                        <h2 className="font-bold text-3xl sm:text-5xl tracking-tight" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              Browse my achievements
                        </h2>
                        <p className="text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed text-gray-500" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              Certifications and awards that showcase my journey of continuous learning and expertise in the field.
                        </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {certificates.map((certificate, index) => (
                              <div key={index} style={{ opacity: 1, transform: 'none' }}>
                                    <Link
                                          href={certificate.url}
                                          target="_blank"
                                          className="flex flex-col items-center p-4 group cursor-pointer"
                                    >
                                          <div className="relative w-32 h-32 mb-3">
                                                <Image
                                                      src={certificate.image}
                                                      alt={certificate.title}
                                                      width={128}
                                                      height={128}
                                                      className="w-full h-full object-cover"
                                                />
                                          </div>
                                          <div className="text-center flex flex-col flex-grow space-y-1 w-full">
                                                <h3
                                                      className="font-semibold text-sm text-black group-hover:text-[#0066cc] transition-colors duration-300 truncate max-w-[230px]"
                                                      title={certificate.title}
                                                >
                                                      {certificate.title}
                                                </h3>
                                                <p className="text-xs font-medium text-gray-500 mt-auto">{certificate.issuer}</p>
                                                <p className="text-xs text-gray-500">{certificate.date}</p>
                                          </div>
                                    </Link>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Certificates 