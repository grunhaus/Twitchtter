import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slices";
import channelsReducer from "../features/channels/channels.slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import fetchChannelReducer from "../features/channels/channel.slice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		channels: channelsReducer,
		channel: fetchChannelReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
