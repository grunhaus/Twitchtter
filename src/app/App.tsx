import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChannelDelete from "../features/channels/ChannelDelete";
import ChannelEdit from "../features/channels/ChannelEdit";
import ChannelList from "../features/channels/ChannelList";
import ChannelShow from "../features/channels/ChannelShow";
import { routes } from "../shared/routes";
import Layout from "../components/Layout";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path={routes.CHANNEL_LIST} element={<ChannelList />} />
					<Route path={routes.CHANNEL_SHOW} element={<ChannelShow />} />
					<Route path={routes.CHANNEL_EDIT} element={<ChannelEdit />} />
					<Route path={routes.CHANNEL_DELETE} element={<ChannelDelete />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
