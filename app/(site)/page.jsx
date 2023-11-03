import Image from 'next/image'
import Hero from '../../components/hero';

import Specs from '../../components/specs';
import Intro from '../../components/Intro';



export default function Home() {
  return (
    <main>
        <Hero />
        {/* <Info /> */}
        <Intro />
        <Specs />





    </main>
  )
}
