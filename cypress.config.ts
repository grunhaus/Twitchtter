import { defineConfig } from "cypress";

require("dotenv").config();

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000",
	},
	env: {
		googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
		googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
		googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
	},
});
