import {RootState} from "@/store/store";

export const selectCurrentComponent = (state: RootState) => state.main.currentComponent
export const selectIsAddNewUser = (state: RootState) => state.main.isAddNewUser
export const selectNewUsers = (state: RootState) => state.main.newUsers
export const selectLoader = (state: RootState) => state.main.loading
export const selectIsEditOpen = (state: RootState) => state.main.isEditOpen
export const selectCurrentUser = (state: RootState) => state.main.currentUser