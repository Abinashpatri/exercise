import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ExerciseList from "./components/ExerciseList";
import Filter from "./components/Filter";
import Search from "./components/Search";



function App() {

  const [exercises, setExercises] = useState([])

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("")


  useEffect(() => {
    getallExercises()
}, [])

const getallExercises = async() =>{
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': 'e75aab7b78mshb6770d3b16a119bp14f0d0jsn1fa0e9ecf17d',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          setExercises(response.data);
      })
}



  return (
    <Container>
      <Search setSearch={setSearch}/>
      <Filter exercises={exercises} filters={filters} setFilters={setFilters} setSort={setSort} />
      <ExerciseList exercises={exercises}  filters={filters} sort={sort} search={search}/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
`
