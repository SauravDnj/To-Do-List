//  rafc 
import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight : "100vh",
    margin : "50px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h1 className='text-center my-5'>Todos List</h1>
      {props.todos.length === 0 ? "No Todos To Display":
        props.todos.map((todo) => {
          return(
            <>
             <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete} /> <hr/>
            </>
          )
        })
      }
      
      
    </div>
  )
}

export default Todos
