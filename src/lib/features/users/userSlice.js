import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    id: "",
    name: "",
    email: "",
    password: ""
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        createUser: (state, actions) => {

        },
        updateUser: (state, action) => {

        },
        deleteUser: (state, action) => {

        },
        getUser: (state, action) => {
            
        }
    }
})

export const {} = userSlice.actions

export default userSlice;