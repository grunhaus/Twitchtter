import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
	isSignedIn: null,
	userId: null,
};

const authReducer = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signIn(state, action) {
			return { ...state, isSignedIn: true, userId: action.payload };
		},
		signOut(state) {
			return { ...state, isSignedIn: false, userId: null };
		},
	},
});

export const { signIn, signOut } = authReducer.actions;

export default authReducer.reducer;
