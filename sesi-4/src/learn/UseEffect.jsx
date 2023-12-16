/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Todos from "../components/todos";

const UseEffect = () => {
    const [todos, setTodos] =  useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => setTodos(json));
    });
  return <div>
    {todos.map((todo) => {
        return <Todos todo={todo}/>;
    })};
  </div>;
};

export default UseEffect;
