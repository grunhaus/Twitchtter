/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "antd";
import React, { SyntheticEvent, useEffect, useState } from "react";

const formLayout = css({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	paddingTop: "20px;",
});

const textAreaStyle = css({
	display: "flex",
	alignSelf: "center",
	width: "100%",
	backgroundColor: "transparent",
	resize: "none",
	border: "none",
	borderBottom: "1px solid rgb(211, 211, 211)",
	borderRadius: "none",
	color: "white",
	outline: "none",
});

const buttonContainer = css({
	display: "flex",
	alignSelf: "right",
});
const bottonStyling = css({
	marginLeft: "auto",
	marginTop: "1rem",
	borderRadius: "20px",
});

interface FormTypes {
	initialValue: string;
	onHandleSubmit: (e: { description: string }) => void;
}

type onChangeEvent = {
	target: { name: string; value: string };
};

const ChannelForm: React.FC<FormTypes> = (props) => {
	const [channel, setChannel] = useState({
		description: "",
	});

	useEffect(() => {
		setChannel({ description: props.initialValue });
	}, [props.initialValue, setChannel]);

	const handleOnChange = (e: onChangeEvent) => {
		setChannel({
			...channel,
			[e.target.name]: e.target.value,
		});
	};

	const onFormSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		props.onHandleSubmit(channel);
		setChannel({ description: "" });
	};

	return (
		<div>
			<form css={formLayout} onSubmit={onFormSubmit}>
				<textarea
					data-cy="main-post-textarea"
					autoComplete="off"
					placeholder="What do you want to stream?"
					maxLength={240}
					rows={4}
					name="description"
					css={textAreaStyle}
					onChange={handleOnChange}
					value={channel.description}
				/>
				<div css={buttonContainer}>
					<Button
						data-cy="main-submit-buttom"
						type="primary"
						size="large"
						htmlType="submit"
						css={bottonStyling}
					>
						Tweet a channel
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ChannelForm;
