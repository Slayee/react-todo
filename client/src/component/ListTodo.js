import React, { useState, useEffect } from 'react';

export function ListTodo(){
    const [todos, setTodos] = useState([]);

    //delete todo function
    async function deleteTodo(id){
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`,{
                method: "DELETE"
        });
        console.log(deleteTodo);

        setTodos(todos.filter(todo => todo.link_id !==id))
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getTodos(){
        try {
            const response = await fetch("http://localhost:5000/todo")
            const jsonData = await response.json();

            setTodos(jsonData)
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getTodos();
    }, []);
  

    return (
        <>
        {/* <h1 className='text-center'>List Todo</h1>        */}
        <table className="table table-hover">
            <thead>
            <tr>
                {/* <th>Id</th> */}
                <th>Description</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}
            {todos.map(todo => (
                <tr key={todo.list_id}>
                    <td>{todo.description}</td>
                    <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.link_id)}>X</button></td>
                </tr>
            ))}
            </tbody>
        </table>

        </>
    );
}