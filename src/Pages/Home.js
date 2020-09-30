import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import gsap from 'gsap';
import {ScrollTrigger} from  'gsap/ScrollTrigger';


import HeroImage from "./../Components/HeroImage";
import MainInfo from "./../Components/MainInfo";
import Contact from "./../Components/Contact";


const Home = () => {
    const WrapperStyled = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

    const ContainerStyled = styled.div`
 overflow: hidden;
  background-color: #FDEBEB;
  width: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  box-shadow: 0 0 50rem #E3E3E3;
`;
    let wrapper = useRef(null)
    useEffect(() => {

        const sections = document.querySelectorAll('section')

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(wrapper,
            {scale: 1.8},
            {scale:1, duration: .7, overflow: 'hidden',
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top top',
                    end: 'bottom 30%',
                    scrub: 1,
                }

            })
        gsap.to(wrapper, {css: ['display: none']})


        sections.forEach(section => {
            gsap.fromTo(section.children,
                {opacity: 0},
                {opacity: 1, stagger: 0.4, duration: 2, ease: 'easeInOut',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        once: true,
                    }})});
    })

    return (
        <div className="Home">
            <WrapperStyled ref={el => (wrapper = el)} className="wrapper">
                <HeroImage/>
            </WrapperStyled>
            <ContainerStyled className="container">
                <MainInfo/>
                <Contact/>
            </ContainerStyled>
        </div>
    );
}

export default Home;