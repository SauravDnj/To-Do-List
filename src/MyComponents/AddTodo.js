// rafc
import React, { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    
    const submit = (e) =>{
        e.preventDefault();        
        if(! title || !desc){
            alert("Title And Description CanNot Be Blank")
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className="container">
      <h1 className="text-center">Add Todo</h1>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) =>{
                setTitle(e.target.value)
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Todo Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) =>{
                setDesc(e.target.value)
            }}
            className="form-control"
            id="desc"
            placeholder="Todo Description"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
