import React, { useEffect, useState } from 'react'
import Task from '../components/Task'

function Home() {
  const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  function submitHandler(e){
    e.preventDefault();
    setTasks([...tasks, {title, description}]);
    setTitle("");
    setDescription("");
  }
  
  function deleteTask(index){
    const filterArray = tasks.filter((val,i)=>{
      return i!==index;
    });
    console.log(filterArray);
    setTasks(filterArray);
  }
  
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  

  return (
    <>
        <div className='container home p-5'>
            <div className="">
                <form onSubmit={submitHandler}>
                    <input className='full-space' type="text" placeholder='Title' value={title} required = "true" onChange={(e)=>(setTitle(e.target.value))} /><br />
                    <textarea className='full-space' placeholder='Description' value={description} required = "true" onChange={(e)=>(setDescription(e.target.value))}></textarea><br />
                    <button className='full-space btn btn-primary' type="submit">ADD</button>
                </form>
                { tasks.map((item, index)=>(
                  <Task key={index} index = {index} deleteTask={deleteTask} title={item.title} description={item.description}/>
                ))}
                {/* <Task /> */}
            </div>

        </div>
    </>
  )
}

export default Home