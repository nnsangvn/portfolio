"use client"

import React from 'react'
import Link from 'next/link'

const Contact = () => {
      return (
            <div className="mb-12 sm:mb-8 flex flex-col items-center justify-center text-center" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                  <div className="space-y-2">
                        <div className="inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition text-sm py-1 px-2.5">
                              Contact
                        </div>
                        <h2 className="font-bold text-3xl sm:text-5xl tracking-tight" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              Get in Touch
                        </h2>
                        <p className="text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed text-gray-500 w-100 sm:w-[520px]" style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
                              Want to chat? Just shoot me a DM <Link href="https://www.instagram.com/nnsangvn/" target="_blank" className="text-blue-500">with a direct question on Instagram</Link> or <Link href="mailto:nguyennhatsang2002@gmail.com" target="_blank" className="text-blue-500">drop me an email</Link>, and I&apos;ll reply as soon as I can.
                        </p>
                  </div>
            </div>
      )
}

export default Contact 