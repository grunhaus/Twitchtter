import React from "react";
import ChannelForm from "./ChannelForm";
import { createChannel } from "../redux/channels.slices";
import { useAppDispatch } from "../redux/store";

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
