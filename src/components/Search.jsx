import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = ({setSearch}) => {
    
  return (
    <Container>
        <SearchBox>
            <Input type='text' placeholder='Search Exercises...' onChange={(e) => setSearch(e.target.value)} />
            <AiOutlineSearch/>
        </SearchBox>
    </Container>
  )
}

export default Search

const Container = styled.div`
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SearchBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    border: 1px solid gray;
    padding: 5px;
`
const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
`