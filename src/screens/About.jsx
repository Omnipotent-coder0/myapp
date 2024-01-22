import React from 'react'
import Header from '../components/Header'

function About({title}) {
  return (
    <div>
        <Header title = {title}/>
        <h1>hello this is about section !!</h1>
    </div>
  )
}

export default About