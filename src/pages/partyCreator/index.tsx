import Party from "./components/party";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// TO DO: Add functionality for passing in party
export default function PartySelect() {
	return (
		<div>
			<Party />
			<Link to={"/EncounterBuilder"}>
				<Button>Start Building!</Button>
			</Link>
		</div>
	);
}
