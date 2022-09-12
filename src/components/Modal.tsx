/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import ReactDOM from "react-dom";

interface MyProps {
	title: string;
	content: string;
	actions: JSX.Element;
	onDismiss: () => void;
}

const contentStyling = css`
	margin: 20px;
	color: black;
`;

const Modal: React.FC<MyProps> = ({ onDismiss, title, content, actions }) => {
	return ReactDOM.createPortal(
		<div onClick={onDismiss} className="ui dimmer modals visible active">
			<div
				onClick={(e) => e.stopPropagation()}
				className="ui standar modal visible active"
			>
				<div className="header">{title}</div>
				<div css={contentStyling}>{content}</div>
				<div className="actions">{actions}</div>
			</div>
		</div>,
		document.querySelector("#modal") as HTMLElement
	);
};

export default Modal;
