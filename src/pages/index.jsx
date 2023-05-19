import ParallaxImage from '../components/home/ParallaxImage'
import ReadMore from '../components/home/ReadMore'
import Images from '../components/home/Images'
import About from '../components/home/About'
import { Analytics } from '@vercel/analytics/react'
import AboutCoffee from '../components/home/AboutCoffee'
import CoffeeStyle from '../components/home/CoffeeStyle'
import Contador from '../components/home/Contador'

export default function Home() {
  return (
    <>
      <ParallaxImage/>
      <ReadMore/>
      <Images/>
      <About/>
      <AboutCoffee/>
      <CoffeeStyle/>
      <Contador/>
      <Analytics/>
    </>
  )
}
