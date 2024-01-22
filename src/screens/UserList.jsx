import React from 'react'
import data from "../utils/data";
import UserCard from '../components/UserCard';

function UserList() {
  return (
    <div>
        {data.map(({name, title, rollNo})=>(    // if you are using curly brackets {} then you have to use return ()
                <UserCard name = {name} title = {title} rollNo={rollNo}/>
            )
        )}
    </div>
  )
}

export default UserList