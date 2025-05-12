import React from 'react'

const UserProfile = ({params}: any) => {
  return (
    <div>
        <p>Profile {params.id}</p>
    </div>
  )
}

export default UserProfile
