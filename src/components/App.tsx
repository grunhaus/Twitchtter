import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChannelDelete from "../screens/ChannelDelete";
import ChannelEdit from "../screens/ChannelEdit";
import ChannelList from "../screens/ChannelList";
import ChannelShow from "../screens/ChannelShow";
import { routes } from "../shared/routes";
import Layout from "./Layout";

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
