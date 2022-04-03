import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { name, email, age } = useSelector((state) => state.user)
    // You could do down here, and access it using user.name, etc..
    // const user = useSelector((state) => state.user)
    return (
        <div>
            <h1>Profile</h1>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Email : {email}</p>
        </div>
    )
}

export default Profile