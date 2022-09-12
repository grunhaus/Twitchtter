/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
import logoMain from "../assets/logo.png";
import GoogleAuth from "../features/auth/GoogleAuth";

const logoStyling = css({
	width: "35px",
});

const headerStyle = css({
	paddingTop: "10px",
	display: "flex",
	justifyContent: "space-between",
});

const Header: React.FC = () => {
	return (
		<div css={headerStyle}>
			<div>
				<Link to="/" className="item" data-cy="main-logo">
					<img alt="Twitchtter" src={logoMain} css={logoStyling} />
				</Link>
			</div>
			<div>
				<GoogleAuth />
			</div>
		</div>
	);
};

export default Header;
