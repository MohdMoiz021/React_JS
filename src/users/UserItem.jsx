import React from 'react'

const UserItem=({user})=> {
  return (
    <div>
        <h4 className="ml-5 font-bold">{user.login}</h4>
        <img className="ml-5 py-4 rounded-full" src={user.avatar_url} height={100} width={100}></img>
        <a href={user.url}>
        <h5 className="ml-5">{user.url}</h5>
        </a>
        <hr/>
        </div>
  )
}

export default UserItem
