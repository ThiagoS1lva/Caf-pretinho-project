import ParallaxImage from '@/components/home/ParallaxImage'
import ReadMore from '@/components/home/ReadMore'
import Images from '@/components/home/Images'
import Head from 'next/head'
import About from '@/components/home/About'

import { Analytics } from '@vercel/analytics/react'
import AboutCoffee from '@/components/home/AboutCoffee'
import CoffeeStyle from '@/components/home/CoffeeStyle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Little black coffee</title>
        <meta name="description" content="Criando um site com typescript e next.js 13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ParallaxImage/>
      <ReadMore/>
      <Images/>
      <About/>
      <AboutCoffee/>
      <CoffeeStyle/>
      <Analytics/>
    </>
  )
}
