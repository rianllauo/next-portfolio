import Head from 'next/head'

// components
import Header from '../components/Header'
import HeroSection from '../components/HeroSection';
import Specialities from '../components/Specialities';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rianlauo</title>
        <meta name="description" content="Rianlauo portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <div className='background'></div> */}
      <main className='w-full md:max-w-screen-md lg:max-w-screen-lg mx-auto px-6 py-4'>
        <HeroSection />
        <Specialities />
        <AboutSection />
      </main>

    </>
  )
}
