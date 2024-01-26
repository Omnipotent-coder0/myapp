import React, { useState } from 'react'

function Register() {
    function handleRegister(event){
        event.preventDefault();  // used event.preventDefault(); to not let page reload after clicking the button
        console.log("hello world");
    }

    const [mail, setMail] = useState("");

    // function handleChange(event){
    //   // console.log(event.target.value);
    //   setMail(event.target.value); // set the mail to be equal to event.target.value
    // }
    console.log(mail);
    let age = 18;
  return (
    <>
        { age >= 18? (
        <form className='bg-info-subtle p-4' action="./">
            <h5>this is register screen</h5>
            <p>{mail}</p>
            <label className='me-5' htmlFor="sample-name">Name : </label>
            <input type="text" id='sample-name' placeholder='Nilesh Gautam' /><br />
            <label className='me-5' htmlFor="mail">Email :</label>
            <input type="email" id="mail" placeholder='nilesh@gmail.com' onChange={(event)=>setMail(event.target.value)}/><br />
            <button onClick={handleRegister}>---Submit---</button>

        </form>

        ) : <h1 className='text-danger'>you are not allowed on this website !! </h1> }
    </>
  )
}

export default Register