/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import ChannelCreate from "../../components/ChannelCreate";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { Link } from "react-router-dom";
import { Avatar, Button } from "antd";
import { UserOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { fetchChannels } from "./channels.slices";
import { shallowEqual } from "react-redux";

const channelsListContainer = css({
	display: "flex",
	marginTop: "20px",
	justifyContent: "center",
});

const titleStyle = css({
	fontSize: "1.8rem",
	display: "flex",
	color: "white",
	fontWeight: "bold",
});

const itemContainer = css({
	display: "flex",
	gap: "10px",
	padding: "15px 15px",
	borderTop: "1px solid rgb(211, 211, 211, 0.2)",
	transition: "0.25s",
	":hover": {
		backgroundColor: "rgb(62, 65, 68, 0.2)",
	},
});

const renderListStyling = css({
	display: "flex",
	flexDirection: "column-reverse",
});

const renderAdminContainer = css`
	display: flex;
	gap: 10px;
	margin-top: auto;
	margin-left: auto;
`;
const editButtonStyling = css`
	background-color: transparent !important;
	border: none;
	border-radius: 20px;
	&:hover {
		background-color: rgb(254, 217, 1, 0.1) !important;
	}
`;
const deleteButtonStyling = css`
	background-color: transparent !important;
	border: none;
	border-radius: 20px;
	&:hover {
		background-color: rgb(220, 28, 19, 0.1) !important;
	}
`;

const itemContentContainer = css`
	display: flex;
	flex-direction: column;
	width: 90%;
`;

type Channel = {
	userId: string;
	description: string;
	id: string;
};

const ChannelList: React.FC = () => {
	const userId = useAppSelector((state) => state.auth.userId);
	const isSignedIn = useAppSelector((state) => state.auth.isSignedIn);
	const channels = useAppSelector(
		(state) => state.channels.channels,
		shallowEqual
	);
	const channelsStatus = useAppSelector(
		(state) => state.channels.status,
		shallowEqual
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (channelsStatus === "idle") {
			dispatch(fetchChannels());
		}
	}, [dispatch, channelsStatus]);

	const renderAdmin = (channel: Channel): JSX.Element | undefined => {
		if (channel.userId === userId) {
			return (
				<div css={renderAdminContainer}>
					<Link to={`/channels/edit/${channel.id}`}>
						<Button
							data-cy="main-item-edit"
							css={editButtonStyling}
							icon={<EditOutlined />}
						/>
					</Link>
					<Link to={`/channels/delete/${channel.id}`}>
						<Button
							data-cy="main-item-delete"
							css={deleteButtonStyling}
							icon={<DeleteOutlined />}
						/>
					</Link>
				</div>
			);
		}
	};

	const renderList = () => {
		return channels.map((channel: Channel) => {
			return (
				<Link
					data-cy="main-list-element"
					to={`/channels/show/${channel.id}`}
					key={channel.id}
					css={itemContainer}
				>
					<div>
						<Avatar
							src="https://joeschmoe.io/api/v1/random"
							icon={<UserOutlined />}
							size={60}
						/>
					</div>
					<div css={itemContentContainer}>
						{channel.description}
						{renderAdmin(channel)}
					</div>
				</Link>
			);
		});
	};

	const renderCreate = (): JSX.Element | undefined => {
		if (isSignedIn) {
			return <ChannelCreate />;
		}
	};

	return (
		<div>
			<h1 css={titleStyle}>Channels</h1>
			<span>{renderCreate()}</span>
			<div css={channelsListContainer}>
				<div css={renderListStyling}>{renderList()}</div>
			</div>
		</div>
	);
};

export default ChannelList;
