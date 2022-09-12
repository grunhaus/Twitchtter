/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import flv from "flv.js";
import { fetchChannel } from "../redux/channel.slice";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";

const descriptionStyling = css({
	marginTop: "15px",
	color: "white !important",
});

const channelShowContainer = css({
	height: "100vh",
	marginTop: "15px",
});

const ChannelShow = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const channel = useAppSelector((state) => state.channel.channel);
	const videoRef = useRef() as React.MutableRefObject<HTMLVideoElement>;

	const { description } = channel;

	useEffect(() => {
		if (typeof id === "string") {
			dispatch(fetchChannel(id));
			const player = flv.createPlayer({
				type: "flv",
				url: `http://localhost:8000/live/${id}.flv`,
			});
			player.attachMediaElement(videoRef.current);
			player.load();
		}
	}, [dispatch, id]);

	if (!channel) {
		return <div>Loading...</div>;
	}

	return (
		<div css={channelShowContainer}>
			<video
				data-cy="stream-video-player"
				ref={videoRef}
				style={{ width: "100%" }}
				controls={true}
			/>

			<h4 data-cy="stream-video-description" css={descriptionStyling}>
				{description}
			</h4>
		</div>
	);
};

export default ChannelShow;
