import React from 'react'

function Register() {
    function handleRegister(event){
        event.preventDefault();  // used event.preventDefault(); to not let page reload after clicking the button
        console.log("hello world");
    }
  return (
    <>
        <form action="./">
            <label htmlFor="sample-input">sample input</label><br />
            <input type="text" id='sample-input' placeholder='hello world' />
            <button onClick={handleRegister}>---Submit---</button>
        </form>
    </>
  )
}

export default Register