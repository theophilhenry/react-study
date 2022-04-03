import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user", // This name is the name of the state
    initialState: { 
        name: "", 
        age: 0, 
        email: "", 
    },
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.email = action.payload.email
        },
        logout: (state) => {
            state.name = ""
            state.age = 0
            state.email = ""
        }
    }
})


// Still have no use
export { userSlice }

// Exporting the Action
export const { login, logout } = userSlice.actions

// We need to pass this in the store
export default userSlice.reducer