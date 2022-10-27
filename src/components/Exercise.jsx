import React from 'react'
import styled from 'styled-components'

const Exercise = ({gif, name, bodyPart, equipment, target}) => {
  return (
    <Container>
       <Img src={gif} alt={name} />
       <span>name : {name}</span>
    </Container>
  )
}

export default Exercise

const Container = styled.div`
    width: 250px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 10px;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Img = styled.img`
 height: 200px;
`