import React from 'react';
import styled from "styled-components";

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

const SubjectStyle = styled.p`
color: #777777;
letter-spacing: 4px;
font-weight: light;
font-size: 30px;
margin: 30px
`;

const ButtonStyle = styled.button`

width: 50px;
height: 50px;
cursor: pointer;
border: none;
background: none;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const igUrl = 'https://www.instagram.com/symetriapromienista/?hl=pl'

const handleSubmit = (e) => {
    e.preventDefault();

    window.open(igUrl, '_blank')
}

const Contact = () => {

    return (
        <SectionStyled>
            <SubjectStyle>
                If you are interested in
                write me DM
                on Instagram
            </SubjectStyle>
            <ButtonStyle onClick={handleSubmit}>
                <i className="gg-instagram"></i>
            </ButtonStyle>
            <SubjectStyle>
                Every project is individual
                prepare with passion
                special for you
            </SubjectStyle>
        </SectionStyled>
    )
}

export default Contact;