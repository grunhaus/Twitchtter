/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useCallback } from "react";
import { css } from "@emotion/react";
import { GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch, shallowEqual } from "react-redux";
import { signIn, signOut } from "./auth.slices";
import { useAppSelector } from "../../app/store";

declare global {
	interface Window {
		gapi: any;
	}
}

const buttonClass = css({
	display: "flex",
	alignItems: "center",
	fontWeight: "bold",
	backgroundColor: "transparent !important",
	border: "none",
	borderRadius: "20px",
	outline: "none",
});

const GoogleAuth: React.FC = () => {
	const isSignedIn = useAppSelector(
		(state) => state.auth.isSignedIn,
		shallowEqual
	);
	const auth: any = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"1000026353257-3he6qpjui6j466uj7h3eulpue1l3n4cp.apps.googleusercontent.com",
					scope: "email",
					plugin_name: "twitchtter",
				})
				.then(() => {
					auth.current = window.gapi.auth2.getAuthInstance();
					onAuthChange(auth.current.isSignedIn.get());
					auth.current.isSignedIn.listen(onAuthChange);
				});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onAuthChange = useCallback(
		(isSignedIn: boolean) => {
			if (isSignedIn) {
				dispatch(signIn(auth.current.currentUser.get().getId()));
			} else {
				dispatch(signOut());
			}
		},
		[dispatch]
	);

	const onSignInClick = () => {
		auth.current.signIn();
	};

	const onSignOutClick = () => {
		auth.current.signOut();
	};

	const renderAuthButton = () => {
		if (isSignedIn === null) {
			return <div>404</div>;
		} else if (isSignedIn) {
			return (
				<Button css={buttonClass} onClick={onSignOutClick}>
					<GoogleOutlined />
					Sign Out
				</Button>
			);
		} else {
			return (
				<Button css={buttonClass} onClick={onSignInClick}>
					<GoogleOutlined />
					Sign In
				</Button>
			);
		}
	};

	return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
