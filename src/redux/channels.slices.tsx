import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import channels from "../apis/channels";

export const fetchChannels = createAsyncThunk(
	"Channels/fetchChannels",
	async () => {
		const response = await channels.get("/channels");

		return response.data;
	}
);

export const createChannel = createAsyncThunk(
	"Channels/createChannel",
	async (description: string, thunkAPI: any) => {
		const { userId } = thunkAPI.getState().auth;
		const response = await channels.post("/channels", {
			description: description,
			userId: userId,
		});

		return response.data;
	}
);

export const editChannel = createAsyncThunk(
	"Channels/editChannel",
	async ({ id, description }: { id: string; description: string }) => {
		const response = await channels.patch(`/channels/${id}`, {
			description: description,
		});

		return response.data;
	}
);

export const deleteChannel = createAsyncThunk(
	"Channels/deleteChannel",
	async (id: string) => {
		const response = await channels.delete(`/channels/${id}`);

		return response.data;
	}
);

const initialState = {
	channels: [],
	status: "idle",
	error: null,
};

const channelsReducer = createSlice({
	name: "channels",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchChannels.fulfilled, (state, action) => {
			state.channels = action.payload;
		});
		builder.addCase(createChannel.fulfilled, (state: any, action) => {
			state.channels.push(action.payload);
		});
		builder.addCase(editChannel.fulfilled, (state: any, action) => {
			state.channels.push(action.payload);
		});
		builder.addCase(deleteChannel.fulfilled, (state: any, action) => {
			state.channels.push(action.payload);
		});
	},
});

export default channelsReducer.reducer;
