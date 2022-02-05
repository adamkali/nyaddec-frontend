import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import levelOptions from "../../../data/levelOptions";
import PlayerCharacter from "../../../classes/PlayerCharacter";
import { useEffect, useState } from "react";

export default function PlayerCharacterForm({
	playerCharacter,
	updatePlayers,
}: {
	playerCharacter: PlayerCharacter;
	updatePlayers: (playerCharacter: PlayerCharacter) => void;
}): JSX.Element {
	const [player, setPlayer] = useState(
		playerCharacter ?? ({} as PlayerCharacter),
	);

	// Effects
	useEffect(() => {
		updatePlayers(player);
	}, [player]);

	// Form changes
	const changeName = (name: string): void => {
		const update = player;
		update.playerName = name;
		setPlayer(update);
	};

	const changeHitPoints = (hp: string): void => {
		const update = player;
		update.playerHitPoints = +hp;
		setPlayer(update);
	};

	const changeLevel = (lvl: string): void => {
		const update = player;
		update.playerLevel = +lvl;
		setPlayer(update);
	};

	return (
		<div>
			<Form>
				<Form.Group>
					<Form.Label>Player Character Name</Form.Label>
					<Form.Control
						type="Name"
						placeholder={player.playerName}
						onChange={(event) => changeName(event.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Player Character HP</Form.Label>
					<Form.Control
						type="HP"
						placeholder={String(player?.playerHitPoints)}
						onChange={(event) => event.currentTarget.value}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Player Character Level</Form.Label>
					<Form.Select onChange={(event) => changeLevel(event.target.value)}>
						{levelOptions.map((lvl) => {
							return <option value={lvl.value}>{lvl.label}</option>;
						})}
					</Form.Select>
				</Form.Group>
			</Form>
		</div>
	);
}
