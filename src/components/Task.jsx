import React from 'react'

function Task({title = "Title", description = "Description", deleteTask, index}) {
  return (
    <div className='container bg-white rounded p-0 mb-2'>
        <div className="cell p-1">
            <div className="cell-text">
                <p>{title}</p>
                <span>{description}</span>
            </div>
            <div className='cc'>
                <button onClick={()=>deleteTask(index)} className='btn btn-danger del-btn'>-</button>
            </div>
        </div>
    </div>
  )
}

export default Task