import React from "react";
import ChannelForm from "./ChannelForm";
import { createChannel } from "../features/channels/channels.slices";
import { useAppDispatch } from "../app/store";

const ChannelCreate: React.FC = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = (channel: { description: string }) => {
		const { description } = channel;
		dispatch(createChannel(description));
	};
	return (
		<div>
			<ChannelForm onHandleSubmit={handleSubmit} initialValue={""} />
		</div>
	);
};

export default ChannelCreate;
