import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const SectionStyled = styled.section`
width: 100%;
height: 100vh;
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TextStyle = styled.p`
color: #777777;
letter-spacing: 4px;
font-weight: light;
font-size: 30px;
margin: 30px
`;

const StyledLink = styled(Link)`
    color: #777777;
    letter-spacing: 4px;
    font-size: 35px;
    
`


const MainInfo = () => {

    return (
        <SectionStyled>
            <TextStyle>
                Hi, <br/>
                Add some color to your life
                I'm Zuzanna
                young artist
                and clothes painter
                with crazy vision
                <br/>
                I would like to present you
                my previous works
                to give you
                an opportunity to
                paint you closet
            </TextStyle>
            <StyledLink to="/portfolio">Click to see my work</StyledLink>
        </SectionStyled>
    )
}

export default MainInfo;