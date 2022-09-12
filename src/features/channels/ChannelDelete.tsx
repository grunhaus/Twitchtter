import Modal from "../../components/Modal";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteChannel } from "./channels.slices";
import { fetchChannel } from "./channel.slice";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/store";

const ChannelDelete: React.FC = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (typeof id === "string") {
			dispatch(fetchChannel(id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderActions = () => {
		const handleDelete = () => {
			if (id) {
				dispatch(deleteChannel(id));
				navigate("/");
			} else {
				console.log("no item bra");
			}
		};

		return (
			<>
				<button
					data-cy="main-delete-buttom"
					onClick={handleDelete}
					className="ui primary button"
				>
					Delete
				</button>
				<Link to="/" data-cy="main-cancel-buttom" className="ui button">
					Cancel
				</Link>
			</>
		);
	};

	const renderContent = () => {
		return `Are you sure you want to delete the channel?`;
	};

	return (
		<Modal
			title="Delete channel"
			content={renderContent()}
			actions={renderActions()}
			onDismiss={() => navigate("/")}
		/>
	);
};

export default ChannelDelete;
