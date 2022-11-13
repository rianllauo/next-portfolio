import Head from 'next/head'

// components
import Header from '../components/Header'
import HeroSection from '../components/HeroSection';
import Specialities from '../components/Specialities';
import AboutSection from '../components/AboutSection';
import Skills from '../components/Skills';
import StepWork from '../components/StepWork';
import Portfolio from '../components/Portfolio';
import BackTopButton from '../components/BackTopButton';
import MyTools from '../components/MyTools';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <Head>
        <title>Rianlauo</title>
        <meta name="description" content="Rianlauo portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* <BackTopButton /> */}
      {/* <div className='background -z-10'></div> */}

      <div className='w-full h-full bg:white dark:bg-slate-900 transition duration-300'>

        <main className='w-full md:max-w-screen-md lg:max-w-screen-lg mx-auto px-6 py-4'>
          <HeroSection />
          <Specialities />
          <AboutSection />
          <Skills />
        </main>
        <Portfolio />
        
        <div className='w-full md:max-w-screen-md lg:max-w-screen-lg mx-auto px-6 py-4'>
          <StepWork />
          <MyTools />
          <ContactMe />
        </div>

        <Footer />

      </div>
      
      
    
    </>
  )
}
