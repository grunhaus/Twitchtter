/** @jsxImportSource @emotion/react */
import * as React from "react";
import Header from "./Header";
import { css, Global } from "@emotion/react";

type ChildrenProps = {
	children: React.ReactNode;
};

const globalStyling = css`
	* {
		box-sizing: border-box;
		font-size: 15px;
		font-family: Helvetica, Sans-Serif;
		color: white;
	}
`;

const rootStyling = css({
	backgroundColor: "black",
});

const layoutStyling = css({
	margin: "0 auto",
	width: "95%",
	maxWidth: "48rem",
});

const childrenStyling = css({
	height: "auto",
});
const Layout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<>
			<Global styles={globalStyling} />
			<div css={rootStyling}>
				<div css={layoutStyling}>
					<Header />
					<div css={childrenStyling}>{children}</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
