import React, { Component, useState } from "react";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from "native-base";

const SearchBarExample = ({Data}) => {
  const [data , setData] =useState(Data)
  const [fullData , setFullData] =useState([])
  const [query, setQuery]  = useState('')
  
  const handleSearch = (text) => {
    setQuery({query: text})
  }
  return (
    <Item>
      <Icon name="ios-search" />
      <Input placeholder="Search" onChangeText={handleSearch} />
      <Icon name="ios-people"  />
    </Item>
  );
};

export default SearchBarExample;
