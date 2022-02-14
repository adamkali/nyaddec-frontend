import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	EncounterBuilder,
	MonsterPage,
	PartySelect,
	Layout,
	Home,
} from "./elements";


/**
 * Main renderer for the website. This also includes all the routes for the
 *  webpages.
 */
let app = (
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}/>
					<Route path="/EncounterBuilder" element={<EncounterBuilder />}/>
					<Route path="/PartySelect" element={<PartySelect />}/>
					<Route path="/Monster/{id}" element={<MonsterPage />}/>
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
)

ReactDOM.render(
	app,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
