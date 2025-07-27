import CaseStudiesPage from '@/common/module/CaseStudies/component/CaseStudiesPage'
import React from 'react'

export const metadata = {
  title: 'Case Studies - CoreStride Labs',
  description: 'Real-world case studies and success stories from CoreStride Labs projects',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <CaseStudiesPage />
    </div>
  )
}

export default page 