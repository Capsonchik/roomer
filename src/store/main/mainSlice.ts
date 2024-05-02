import {createSlice} from "@reduxjs/toolkit";
import {User, Users} from "@/types/User";

type InitialStateTypes = {
  currentComponent: string
  isAddNewUser: boolean
  users: Users
  currentUser: User | null
}

const initialState: InitialStateTypes = {
  currentComponent: 'anketa',
  isAddNewUser: false,
  users: [],
  currentUser: null
}

export const mainSlice = createSlice({
  name: 'Main',
  initialState,
  reducers: {
    setCurrentComponent: (state, action) => {
      state.currentComponent = action.payload
    },
    setIsNewUser: (state, action) => {
      state.isAddNewUser = action.payload
    },
    setUsers: (state, action) => {
      state.users.push(action.payload)
    }
  }
})

export const {
  setCurrentComponent,
  setIsNewUser,
  setUsers
} = mainSlice.actions

export default mainSlice.reducer;