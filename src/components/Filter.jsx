import React from 'react'
import styled from 'styled-components'

const Filter = ({exercises, filters, setFilters, setSort}) => {

    const allbodyparts = exercises.map((item) => item.bodyPart)
    const uniquebodyparts = Array.from(new Set(allbodyparts));

    const allEquipments = exercises.map((item) => item.equipment)
    const uniqueEquipments = Array.from(new Set(allEquipments))

    const allNames = exercises.map((item) => item.name)
    const uniqueNames = Array.from(new Set(allNames))

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
          ...filters,
          [e.target.name]: value,
        });
      };


  return (
    <Container>
        <Select name='bodyPart' onChange={handleFilters}>
            <Option disabled selected>All Bodyparts</Option>
            {uniquebodyparts.map((item) => <Option key={item} value={item}>{item}</Option>)}
        </Select>
        <Select name='equipment' onChange={handleFilters}>
            <Option disabled selected>All Equipments</Option>
            {uniqueEquipments.map((item) => <Option key={item} value={item}>{item}</Option>)}
        </Select>
        <Select name='name' onChange={handleFilters}>
            <Option disabled selected>All Names</Option>
            {uniqueNames.map((item) => <Option key={item} value={item}>{item}</Option>)}
        </Select>
        <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled selected>Sort</Option>
            <Option value="newest">newest</Option>
            <Option value="asc">asc</Option>
            <Option value="desc">desc</Option>
            
        </Select>
    </Container>
  )
}

export default Filter

const Container = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
const Select = styled.select`
    margin-right: 20px;
    height: 100%;
    border: none;
`
const Option = styled.option`
    margin-bottom: 10px;
    border: none;
`
