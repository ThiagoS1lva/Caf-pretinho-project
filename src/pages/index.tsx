import ParallaxImage from '@/components/ParallaxImage'
import ReadMore from '@/components/ReadMore'
import Images from '@/components/Images'
import Head from 'next/head'
import About from '@/components/About'


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
      <p style={{minHeight:'100vh'}}>.</p>
    </>
  )
}
