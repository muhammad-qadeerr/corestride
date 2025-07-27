import CaseStudyDetail from '@/common/module/CaseStudies/component/CaseStudyDetail'
import React from 'react'

export const metadata = {
  title: 'Case Study Detail - CoreStride Labs',
  description: 'Detailed case study showcasing our project work and success stories',
}

const page = ({ params }) => {
  return (
    <div className='mt-20 flex justify-center bg-white min-h-screen'>
      <CaseStudyDetail slug={params.slug} />
    </div>
  )
}

export default page 