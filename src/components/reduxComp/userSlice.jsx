import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userActivities',
    initialState: {
        users: [],
        currentUser: []
    },
    reducers: {
        addUser: (state, user) => {
            state.users.push(user.payload)
            state.currentUser = user.payload
        },
        setCurrent: (state, user) => {
            state.currentUser = user.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {addUser, setCurrent} = userSlice.actions

export default userSlice.reducer