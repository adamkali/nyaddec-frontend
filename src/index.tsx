import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EncounterBuilder, PartySelect } from "./elements";

/**
 * Main renderer for the website. This also includes all the routes for the
 *  webpages.
 */
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={PartySelect} />
				<Route path="/EncounterBuilder" element={EncounterBuilder} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
