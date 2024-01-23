import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [aCount, setACount] = useState(0);
    // var temp = 0;
    function handleClick(){
        setCount(count + 1);
    }
    function handleACount(){
        setACount(aCount + 1)
    }
    useEffect(()=>{     // this will run after every re-render
        document.title = `count : ${count}`; 
    })
    useEffect(()=>{     // this will run only after the mounting of the componnent in the DOM
        setCount(5);
        setTimeout(() => {
            document.title = "hello ;-)"; 
            console.log('hello this page is mounted on DOM');
        }, 2000);
    },[])
    useEffect(()=>{     // this will run one time on the mount and then every time aCount updates
        console.log('hello this is another count useEffect');
    },[aCount])

  return (
    <div>
        <p> count : {count} </p>
        <button onClick={handleClick}>add</button><br /><br />
        <p>another count : {aCount}</p>
        <button onClick={handleACount}>add another count</button>
    </div>
  )
}

export default UseEffect