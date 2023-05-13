import ParallaxImage from '@/components/ParallaxImage'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Café Pretinho</title>
        <meta name="description" content="Criando um site com typescript e next.js 13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ParallaxImage/>
      <p style={{minHeight:'100vh'}}>Conteudo</p>
    </>
  )
}
