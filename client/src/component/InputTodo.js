import React, { useState } from 'react';

export function InputTodo(){
    const [description, setDescription] = useState("");

    async function onSubmitForm(e){
       
        
        try{
            const body = { description };
            const response = await fetch("http://localhost:5000/todo", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response);
            e.preventDefault();
        } catch(err){
            console.error(err.message);
        }
    };
    return (
        <>
            {/* <h1 className='text-center mt-5'>Todo</h1> */}
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type="text" className='form-control' value={description} onChange={e=>setDescription(e.target.value)}/>
                <button className='btn btn-success'>Add</button>
            </form>
            
        </>
    );
}

