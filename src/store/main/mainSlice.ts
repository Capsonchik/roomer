import {createSlice} from "@reduxjs/toolkit";
import {User, Users} from "@/types/User";
import {fetchGetNewUsers} from "@/store/main/user.actions";

type InitialStateTypes = {
  currentComponent: string
  isAddNewUser: boolean
  currentUser: User | null,
  newUsers: Users | null,
  loading: boolean
}

const initialState: InitialStateTypes = {
  currentComponent: 'home',
  isAddNewUser: false,
  currentUser: null,
  newUsers: [],
  loading: false
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetNewUsers.fulfilled, (state, action) => {
        state.newUsers = action.payload
        state.loading = false
      })
      .addCase(fetchGetNewUsers.pending, (state) => {
        state.loading = true
      })
  }
})

export const {
  setCurrentComponent,
  setIsNewUser,
} = mainSlice.actions

export default mainSlice.reducer;