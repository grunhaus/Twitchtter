import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import channels from "../../apis/channels";

export const fetchChannel = createAsyncThunk(
	"channel/fetchChannel",
	async (id: string) => {
		const response = await channels.get(`/channels/${id}`);
		return response.data;
	}
);

const initialState = {
	channel: {
		description: "",
		userId: "",
		id: "",
	},
	status: "idle",
	error: null,
};

const fetchChannelReducer = createSlice({
	name: "channel",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchChannel.fulfilled, (state: any, action) => {
			state.channel = action.payload;
		});
	},
});

export default fetchChannelReducer.reducer;
