import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

import HeroPortfolio from './../assets/HeroImagePortfolio1.jpg';

const HeroImageStyled = styled.div`
width: 100%;
height: 100vh;
margin: 0;
padding: 0;
background-image: url('${HeroPortfolio}');
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
font-size: 30px;
`;

const Parag = styled.p`
    color: #FFFFFF;
    font-size: 14px;
    z-index: 2;
    `;

const StyledLink = styled(Link)`
    z-index: 2;
    color: #FFFFFF;
    letter-spacing: 4px;
    font-size: 15px;
    
`

const HeroImage = () => {

    return (
        <HeroImageStyled>
            <SubjectStyle>Portfolio</SubjectStyle>
            <StyledLink to="/">click to back home</StyledLink>
                <i className="gg-mouse"></i>
            <Parag className="gg-mouse__desc">for more <br/> scroll down</Parag>
        </HeroImageStyled>
    )
}

export default HeroImage;