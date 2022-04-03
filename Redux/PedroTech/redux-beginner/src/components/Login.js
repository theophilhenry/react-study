import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

const Login = () => {
    const dispatch = useDispatch()

    const loginUser = () => {
        dispatch(login({
            name: "Theo",
            age: 21,
            email: "theophil@gmail.com",
        }))
    }

    return (
        <div>
            <button onClick={loginUser}>Login</button>
            <button onClick={() => { dispatch(logout()) }}>Logout</button>
        </div>
    )
}

export default Login