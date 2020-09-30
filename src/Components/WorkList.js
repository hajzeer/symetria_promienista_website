import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WorkListStyled = styled.div`
    
    overflow: hidden;
    z-index: 1;
    width: 100%;
    height: auto;
    margin-top: 50px;
    top: 0;
    left: 0;
    padding: 0;
    margin: 15px;
    background: #FFFFFF ;
    border: none;
    
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   
    }
`;

const WorkImageStyled = styled.img`
    width: 300px;
    height: 300px;
    margin: 30px;
    
    @media (min-width: 768px) {
    width: 500px;
    height: 500px;
    margin: 40px;
    
}
    `;

const WorkList = ({items}) => (

    items.map(({image, id}) => {
        return (
            <WorkListStyled key={id}>
                <WorkImageStyled src={image}/>
            </WorkListStyled>
        )
    })
)

WorkList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string
    })).isRequired
};

WorkList.defaultProps = {
    items: []
}



export default WorkList;