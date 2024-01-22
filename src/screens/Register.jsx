import React from 'react'

function Register() {
    function handleRegister(event){
        event.preventDefault();  // used event.preventDefault(); to not let page reload after clicking the button
        console.log("hello world");
    }
    let age = 18;
  return (
    <>
        { age >= 18? (
        <form action="./">
            <label htmlFor="sample-input">sample input</label><br />
            <input type="text" id='sample-input' placeholder='hello world' />
            <button onClick={handleRegister}>---Submit---</button>
        </form>

        ) : <h1 style={{color : "red"}}>you are not allowed on this website !! </h1> }
    </>
  )
}

export default Register