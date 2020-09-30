import React from 'react';
import styled from "styled-components";

import Hero from './../assets/HeroImage.jpg';

const HeroImageStyled = styled.div`
width: 100%;
height: 100vh;
margin: 0;
padding: 0;
background-image: url('${Hero}');
background-size: cover;
background-position: 50% 50%;
overflow: hidden;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  &::after {
    content: '';
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
`;

const SubjectStyle = styled.h1`
z-index: 2;
color: #FFFFFF;
letter-spacing: 4px;
font-size: 20px;
`;

const Parag = styled.p`
    color: #FFFFFF;
    font-size: 14px;
    z-index: 2;
    `;

const HeroImage = () => {

    return (
        <HeroImageStyled>
            <SubjectStyle>Symetria Promienista</SubjectStyle>
            <i className="gg-mouse"></i>
            <Parag className="gg-mouse__desc">for more <br/> scroll down</Parag>
        </HeroImageStyled>
    )
}

export default HeroImage;