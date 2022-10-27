import React from 'react'
import styled from 'styled-components'

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {
  let pages = []
  for( let i=1; i<= Math.ceil(totalPosts/postPerPage); i++){
    pages.push(i)
  }


  return (
    <Container>
        {/* {
          pages.map((page, index) => (
            <Button key={index} onClick={() => setCurrentPage(10)}>{page}</Button>
          ))
        } */}
        <Button onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
        <Page>{currentPage} / {pages.length}</Page>
        <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
    </Container>
  )
}

export default Pagination

const Container = styled.div`
display: flex;

justify-content: center;
align-items: center;
    
`
const Button = styled.button`
width: 50px;
height: 30px;
margin: 5px;
`

const Page = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 60px;
height: 30px;
`