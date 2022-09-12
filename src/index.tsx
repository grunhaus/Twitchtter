import "antd/dist/antd.min.css";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
