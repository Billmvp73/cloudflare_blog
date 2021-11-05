import React, { useState } from "react";
// import { useInput } from './hooks/input-hook';



const Create = () => {
  const [inputs, setInputs] = useState({});
  
  const submitPost = async () => {
        const url = `http://127.0.0.1:8787/api/create`
        const options = {
            // Send a POST request
            method: "POST",
            // With a JSON-stringified body containing the query from our input
            body: JSON.stringify({ inputs }),
            // Set the `Content-type` header so our API knows that the request
            // is sending JSON
            headers: { 'Content-Type': 'text/plain' }
            // credentials: 'include'
        }
        console.log(options["body"])
        const resp = await fetch(url, options)
        return resp.json();
    };
    const handleSubmit  = async (event) => {
        event.preventDefault();
        console.log("handle Submit.")
        const results = await submitPost();
        console.log(results)
    }
    const handleInputChange = (event) =>{
        event.persist();
        setInputs(inputs=>({
            ...inputs,
            [event.target.name]:event.target.value
        }));
    }

    return (
        <div>
        <h1>Create Post</h1>
        <form className = "comment-form" onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="title" onChange={handleInputChange} value={inputs.title} required />
            </div>
            <div>
                <label>Email Address</label>
                <input type="email" name="username" onChange={handleInputChange} value={inputs.email} required />
            </div>
            <div>
                <label>Content</label>
                <input type="content" name="content" onChange={handleInputChange} value={inputs.content}/>
            </div>
            <button type="submit">Create this post.</button>
        </form>
        </div>
    );
};

export default Create;