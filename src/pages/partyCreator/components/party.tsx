import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoAdd, IoEnter } from "react-icons/io5";
import PlayerCharacter from "../../../classes/PlayerCharacter";
import PlayerCharacterForm from "./playerCharacter";

/**
 * This will be the main entry point after the user logs in or signs up.
 * @returns JSX.Eelement
 */
export default function Party(): JSX.Element {
	// String states
	const [partyName, setPartyName] = useState("");
	const [partyNameStage, setPartyNameStage] = useState("");

	const [players, setPlayers] = useState(0);

	const [party, setParty] = useState([] as PlayerCharacter[]);

	const addPlayer = (): void => {
		const player: PlayerCharacter = new PlayerCharacter();
		player.playerID = players;
		let tempNum: number = players;
		setPlayers(++tempNum);
		const update = [...party];
		update.push(player);
		setParty(update);
	};

	/**
	 * @param playerCharacter an injection function that is used to pass in a player. When the player is updated
	 * 		it will change the party state and when the EncouterList is updated it will then show the difficulty
	 * 		This will be handled by the backend server which needs to be built.
	 */
	const updatePlayers = (playerCharacter: PlayerCharacter): void => {
		const update = [...party];

		update.forEach((pc) => {
			update.splice(
				update.findIndex((p) => p.playerID === pc.playerID),
				1,
				playerCharacter,
			);
		});

		setParty(update);
	};

	// Type for injecting playerCharacter
	const injectPlayerCharacter = {
		playerCharacter: new PlayerCharacter(),
		updatePlayers: updatePlayers,
	};

	return (
		<div>
			<div className="card">
				<Form>
					<div className="card-header">
						<Form.Group>
							{partyName === "" ? (
								<div>
									<Form.Label>Set Party Name</Form.Label>
									<Form.Control
										type="PartyName"
										placeholder="Party Name"
										onChange={(event) =>
											setPartyNameStage(event.currentTarget.value)
										}
									/>
									<Button
										variant="primary"
										onClick={(e) => setPartyName(partyNameStage)}
									>
										<IoEnter /> Set
									</Button>
								</div>
							) : (
								<div>
									<Form.Label>{partyName}</Form.Label>
									<Button onClick={() => addPlayer()}>
										<IoAdd /> Add Party Memeber
									</Button>
								</div>
							)}
						</Form.Group>
					</div>
					{party.length !== 0 && (
						<div className="card-body">
							{party.map((pc) => {
								injectPlayerCharacter.playerCharacter = pc;
								<PlayerCharacterForm {...injectPlayerCharacter} />;
							})}
							{party.length >= 1 && (
								<Link to={"/Encounter"}>
									<Button>Build Encounter!</Button>
								</Link>
							)}
						</div>
					)}
				</Form>
			</div>
		</div>
	);
}
