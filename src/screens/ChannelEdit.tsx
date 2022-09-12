/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import ChannelForm from "../components/ChannelForm";
import { editChannel } from "../redux/channels.slices";
import { fetchChannel } from "../redux/channel.slice";
import { useParams, useNavigate } from "react-router-dom";

const channelFormContainer = css`
	height: 100vh;
`;

const ChannelEdit: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const { description } = useAppSelector((state) => state.channel.channel);
	const channelStatus = useAppSelector((state) => state.channel.status);

	useEffect(() => {
		if (channelStatus === "idle" && typeof id === "string") {
			dispatch(fetchChannel(id));
		}
	}, [dispatch, channelStatus, id]);

	const handleSubmit = (channel: { description: string }) => {
		const { description } = channel;
		const values = {
			id: id as string,
			description: description,
		};
		dispatch(editChannel(values));

		navigate("/");
	};
	return (
		<div css={channelFormContainer}>
			<ChannelForm onHandleSubmit={handleSubmit} initialValue={description} />
		</div>
	);
};
export default ChannelEdit;
