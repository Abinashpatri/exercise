import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Exercise from './Exercise';
import Pagination from './Pagination';

const ExerciseList = ({exercises, filters, sort, search}) => {


    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)

    const [filteredProducts, setFilteredProducts] = useState([]);
    
  //Pagination
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex)

  // Filtering
    useEffect(() => {
      setFilteredProducts(
          exercises.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key]?.includes(value)
            )
          )
        );
    }, [exercises, filters]);
    
  // Searching
    useEffect(() => {
      setFilteredProducts(exercises.filter((item) => item.name.toLocaleLowerCase().includes(search)))
    }, [search, exercises])

  //Sorting  
    useEffect(() => {
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.name.localeCompare(b.name))
        );
      } else if (sort === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.id - b.id)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.id - a.id)
        );
      }
    }, [sort]);
    
  return (
    <>
      <Pagination totalPosts={exercises.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      <Container>
        {
          currentPosts.map(item => (
            <Exercise 
            key={item.id} 
            name={item.name} 
            bodyPart={item.bodyPart} 
            gif={item.gifUrl} 
            equipment={item.equipment}
            target={item.target}
            />
          ))
        }
    </Container> 
    
    </>
  )
}

export default ExerciseList

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
`