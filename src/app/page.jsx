import Homepage from '@/common/module/Home'

export const metadata = {
  title: 'CoreStride Labs - Building Tomorrow\'s Software Solutions',
  description: 'CoreStride Labs is a leading software development company specializing in custom software solutions, web applications, mobile apps, cloud infrastructure, and AI/ML services.',
}

export default function Home() {
  return (
    <div className='flex justify-center'>
    <Homepage />
    </div>
  )
}
