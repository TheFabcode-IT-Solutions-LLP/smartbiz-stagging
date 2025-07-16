'use client'
import React from 'react'
import Image from 'next/image'

const serviceData = [
  {
    title: 'LangChain Agent Development',
    icon: '/assets/images/setting.png',
  },
  {
    title: 'RAG System Setup',
    icon: '/assets/images/Img1.png',
  },
   {
    title: 'LangGraph for Workflow Orchestration',
    icon: '/assets/images/Img2.png',
  },
   {
    title: 'N8N Automation',
    icon: '/assets/images/Img3.png',
  },
   {
    title: 'Custom AI Agent Deployment',
    icon: '/assets/images/Img4.png',
  },
 
]

const Services = () => {
  return (
    <div className='py-[50px] max-mob-lg:py-6 flex flex-row gap-[70px] items-center'>
      <div className='max-w-[52.0833333%] w-full'>
        <Image
          className='w-full object-cover rounded-r-[20px]'
          src='/assets/images/humanAI.jpg'
          alt='AI Illustration'
          width={1000}
          height={800}
        />
      </div>

      <div className=''>
        <h2 className='mt-[10px] text-[40px] font-bold leading-[1.2] text-black'>
          Our Services
        </h2>

        <div className='mt-[30px] flex flex-col gap-[20px] '>
          {serviceData.map((service, index) => (
            <div
              key={index}
              className='rounded-[20px] flex flex-row bg-[#222222] items-center w-[739px]'
            >
              <div className='py-[30px] px-[38px]'>
                <Image src={service.icon} alt='' width={60} height={60} />
              </div>

              <span className='w-[1px] bg-white h-[60px]'></span>

              <div className='ml-[20px]'>
                <h3 className='text-[24px] font-medium leading-[100%] text-[#FFFFFF]'>
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
