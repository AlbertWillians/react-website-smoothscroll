import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'
import {
   ArrowForward,
   ArrowRight,
   HeroBg,
   HeroBtnWrapper,
   HeroContainer,
   HeroContent,
   HeroH1,
   HeroP,
   VideoBg
} from './HeroElements'

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }

   return (
      <HeroContainer>
         <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
         </HeroBg>
         <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
               Sign up for a new account today and receive $250 in
               credits towards your next payment.
            </HeroP>
            <HeroBtnWrapper>
               <Button primary dark to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                  Get started {hover ? <ArrowForward /> : <ArrowRight />}
               </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection