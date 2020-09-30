import React, {useEffect, useRef} from "react";
import styled from 'styled-components'
import gsap from 'gsap'
import {ScrollTrigger} from  'gsap/ScrollTrigger';

import Contact from "../Components/Contact";
import HeroImagePortfolio from './../Components/HeroImagePortfolio'
import WorkList from "../Components/WorkList";

import photo0 from './../assets/Images/1.jpg'
import photo1 from './../assets/Images/2.jpg'
import photo2 from './../assets/Images/3.jpg'
import photo3 from './../assets/Images/4.jpg'
import photo4 from './../assets/Images/5.jpg'
import photo5 from './../assets/Images/6.jpg'
import photo6 from './../assets/Images/7.jpg'
import photo7 from './../assets/Images/8.jpg'
import photo8 from './../assets/Images/9.jpg'
import photo9 from './../assets/Images/10.jpg'
import photo10 from './../assets/Images/11.jpg'
import photo11 from './../assets/Images/12.jpg'
import photo12 from './../assets/Images/13.jpg'
import photo13 from './../assets/Images/14.jpg'
import photo14 from './../assets/Images/15.jpg'
import photo15 from './../assets/Images/16.jpg'
import photo16 from './../assets/Images/17.jpg'
import photo17 from './../assets/Images/18.jpg'
import photo18 from './../assets/Images/19.jpg'
import photo19 from './../assets/Images/20.jpg'

const WorkImg = [
    {
        id: 0,
        image: photo0

    },
    {
        id: 1,
        image: photo1

    },
    {
        id: 2,
        image: photo2

    },
    {
        id: 3,
        image: photo3

    },
    {
        id: 4,
        image: photo4

    },
    {
        id: 5,
        image: photo5

    },
    {
        id: 6,
        image: photo6

    },
    {
        id: 7,
        image: photo7

    },
    {
        id: 8,
        image: photo8

    },
    {
        id: 9,
        image: photo9

    },
    {
        id: 10,
        image: photo10

    },
    {
        id: 11,
        image: photo11

    },
    {
        id: 12,
        image: photo12

    },
    {
        id: 13,
        image: photo13

    },
    {
        id: 14,
        image: photo14

    },
    {
        id: 15,
        image: photo15

    },
    {
        id: 16,
        image: photo16

    },
    {
        id: 17,
        image: photo17

    },
    {
        id: 18,
        image: photo18

    },
    {
        id: 19,
        image: photo19

    },

]

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

const WorkInnerStyled = styled.div`
width: 100%;
                margin-top: 1rem;
      justify-items: center;
      margin-bottom: 20px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      
      @media (min-width: 1024px) {
                margin-top: 5rem;
      justify-items: center;
      margin-bottom: 20px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      }
    `;



const Portfolio = () => {

    let wrapper = useRef(null)

    useEffect(() => {

        const sections = document.querySelectorAll('section')

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(wrapper,
            {scale: 1.4},
            {scale:1, duration: .7, overflow: 'hidden',
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top top',
                    end: 'bottom 30%',
                    scrub: 1,
                }

            })
        gsap.to(wrapper, {css: ['display: block']})

        gsap.registerPlugin(ScrollTrigger);

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

    return(
        <div className="Portfolio">
        <WrapperStyled ref={el => (wrapper = el)} className="wrapper">
            <HeroImagePortfolio/>
        </WrapperStyled>
        <ContainerStyled>
            <WorkInnerStyled>
            <WorkList items={WorkImg} key={WorkImg.id}/>
            </WorkInnerStyled>
            <Contact/>
        </ContainerStyled>
        </div>
    )
}

export default Portfolio;