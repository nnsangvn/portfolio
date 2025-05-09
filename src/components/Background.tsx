"use client"

import React from 'react'

const Background = () => {
      return (
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
                  <div className="lanyard-wrapper">
                        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'auto' }}>
                              <div style={{ width: '100%', height: '100%' }}>
                                    {/* Hiệu ứng gradient với animation */}
                                    <div className="w-full h-full bg-gradient-to-b from-white via-slate-50 to-white opacity-60 bg-animation"></div>

                                    {/* Các phần tử trang trí cho hiệu ứng nền */}
                                    <div className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-gray-100 opacity-30 animate-float"></div>
                                    <div className="absolute top-40 right-[15%] w-32 h-32 rounded-full bg-gray-100 opacity-20 animate-float-slow"></div>
                                    <div className="absolute bottom-40 left-[20%] w-24 h-24 rounded-full bg-gray-100 opacity-25 animate-float-reverse"></div>
                                    <div className="absolute top-[30%] right-[25%] w-16 h-16 rounded-full bg-gray-100 opacity-15 animate-float-slow-reverse"></div>

                                    {/* Thêm các phần tử mới */}
                                    <div className="absolute top-[60%] left-[30%] w-28 h-28 rounded-full bg-gray-100 opacity-20 animate-float"></div>
                                    <div className="absolute bottom-[20%] right-[35%] w-36 h-36 rounded-full bg-gray-100 opacity-15 animate-float-slow"></div>

                                    {/* Hiệu ứng blob tối giản */}
                                    <div className="absolute top-[15%] left-[40%] w-64 h-64 bg-blue-50 opacity-10 animate-blob rounded-blob"></div>
                                    <div className="absolute bottom-[25%] right-[5%] w-80 h-80 bg-purple-50 opacity-10 animate-blob-slow rounded-blob"></div>
                                    <div className="absolute top-[45%] right-[20%] w-72 h-72 bg-green-50 opacity-10 animate-blob-pulse rounded-blob"></div>

                                    {/* Lưới trang trí */}
                                    <div className="absolute inset-0 bg-grid opacity-[0.03] bg-center"></div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Background 