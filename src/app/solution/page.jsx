import SolutionPage from '@/common/module/Solution/component/SolutionPage'
import React from 'react'

export const metadata = {
  title: 'Solutions - CoreStride Labs',
  description: 'Custom software solutions and digital transformation services by CoreStride Labs',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <SolutionPage />
    </div>
  )
}

export default page
