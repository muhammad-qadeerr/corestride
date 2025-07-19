import {  Plus_Jakarta_Sans } from 'next/font/google'
import '../common/style/globals.css'
import { Providers } from '@/common/component/element/Providers'
import { LoadingProvider } from '@/common/context/LoadingContext'
import AppWrapper from '@/common/component/AppWrapper'


const plus_Jakarta_Sans = Plus_Jakarta_Sans({subsets: ['latin']});

export const metadata = {
  title: 'CoreStride Labs - Innovative Software Solutions',
  description: 'CoreStride Labs delivers cutting-edge software development services including custom applications, web development, mobile apps, cloud solutions, and AI/ML services.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plus_Jakarta_Sans.className} dark:bg-black`}>
        <Providers>
          <LoadingProvider>
            <AppWrapper>
              {children}
            </AppWrapper>
          </LoadingProvider>
        </Providers>
        </body>
    </html>
  )
}
