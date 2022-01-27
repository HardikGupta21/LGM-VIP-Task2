import React from 'react'

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img src="https://i.gifer.com/PVtR.gif" alt="Loading.." className="loader" />
    </div>
  ) :
    (
      <div id="main">

        {users.map(user =>
          <div className="project column3">
            {
              console.log(user)
            }
            <div className="profile">
              <img src={user.avatar} alt={user.avatar} className="avatar"></img>
              <h1 className="name"> Name: {user.first_name} {user.last_name}</h1>
              <p className="email"> Email id: {user.email}</p>
              <p> ID: {user.id}</p>
            </div>
          </div>
        )
        }
      </div>
    )
}

export default Users;