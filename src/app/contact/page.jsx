import Contactus from '@/common/module/Contact'
import React from 'react'

export const metadata = {
  title: 'Contact Us - CoreStride Labs',
  description: 'Get in touch with CoreStride Labs for software development services',
  
}

const Contact = () => {
  return (
    <div className='flex justify-center  w-full'>
      <Contactus />
    </div>
  )
}

export default Contact
