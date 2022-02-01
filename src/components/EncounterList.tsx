import { useEffect, useState } from "react";
import { Monster } from "../App";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BsArrowCounterclockwise } from "react-icons/bs";
import DifficultyCalculatordifficulty, {
	Difficulty,
} from "../helperFunctions/difficultyCalculater";

export default function EncounterList({
	updatedEncounter,
	removeEncounter,
	icon,
	updateEncounter,
}: {
	updatedEncounter: Monster[];
	removeEncounter: (monster: Monster) => void;
	icon: (meta: string) => JSX.Element | undefined;
	updateEncounter: (monster: Monster[]) => void;
}): JSX.Element {
	const [encounterList, setEncounterList] = useState([] as Monster[]);
	const [encounterDifficulties, setEncounterDifficulties] = useState(
		{} as Difficulty,
	);

	useEffect(() => {
		setEncounterList([...updatedEncounter]);
		// TO DO: Set up a party class for this
		setEncounterDifficulties(
			DifficultyCalculatordifficulty(),
			// party in TO DO will go here.
		);
	}, [updatedEncounter]);

	const encounterLevel = (): JSX.Element => {
		let exp: number = 0;

		encounterList.forEach((mon) => {
			const tempChallenge = mon.challenge.replace("(", "").replace(",", "");
			const challenge = tempChallenge.split(" ");
			exp += +challenge[1];
		});

		const span = (experience: number): JSX.Element => {
			if (experience >= encounterDifficulties.deadly) {
				return (
					<Table>
						<tr>
							<td>Easy</td>
							<td>Medium</td>
							<td>Hard</td>
							<td>Deadly</td>
						</tr>
						<tr>
							<td colSpan={4} style={{ backgroundColor: "purple" }} />
						</tr>
					</Table>
				);
			} else if (
				experience < encounterDifficulties.deadly &&
				experience >= encounterDifficulties.hard
			) {
				return (
					<Table>
						<tr>
							<td>Easy</td>
							<td>Medium</td>
							<td>Hard</td>
							<td>Deadly</td>
						</tr>
						<tr>
							<td colSpan={3} style={{ backgroundColor: "red" }} />
							<td />
						</tr>
					</Table>
				);
			} else if (
				experience < encounterDifficulties.hard &&
				experience >= encounterDifficulties.medium
			) {
				return (
					<Table>
						<tr>
							<td>Easy</td>
							<td>Medium</td>
							<td>Hard</td>
							<td>Deadly</td>
						</tr>
						<tr>
							<td colSpan={2} style={{ backgroundColor: "green" }} />
							<td />
							<td />
						</tr>
					</Table>
				);
			} else if (
				experience < encounterDifficulties.medium &&
				experience >= encounterDifficulties.easy
			) {
				return (
					<Table>
						<tr>
							<td>Easy</td>
							<td>Medium</td>
							<td>Hard</td>
							<td>Deadly</td>
						</tr>
						<tr>
							<td style={{ backgroundColor: "green" }} />
							<td />
							<td />
							<td />
						</tr>
					</Table>
				);
			} else {
				return (
					<Table>
						<tr>
							<td>Easy</td>
							<td>Medium</td>
							<td>Hard</td>
							<td>Deadly</td>
						</tr>
						<tr>
							<td colSpan={4} style={{ backgroundColor: "pink" }}>
								TO EASY
							</td>
						</tr>
					</Table>
				);
			}
		};

		return <div>{span(exp)}</div>;
	};

	const reset = () => {
		setEncounterList([] as Monster[]);
	};

	const tempMonster = {
		id: "Please Choose a monster from the Monster Manual.",
		name: null,
		meta: null,
		armor_class: null,
		hit_points: null,
		speed: null,
		strength: null,
		str_mod: null,
		dexterity: null,
		dex_mod: null,
		constitution: null,
		con_mod: null,
		intellegence: null,
		int_mod: null,
		wisdom: null,
		wis_mod: null,
		charisma: null,
		cha_mod: null,
		saving_throw: null,
		skills: null,
		immune: null,
		senses: null,
		languages: null,
		challenge: null,
		traits: null,
		actions: null,
		legendary: null,
		img_url: null,
	};

	return (
		<div style={{ width: "45%", margin: "25px" }}>
			<div className="card">
				<div className="card-header">
					<div style={{ padding: "5px" }}>
						<label
							className="display-4"
							style={{ padding: "10px 10px 10px 0" }}
						>
							<span>Encounter</span>
						</label>
						<Button
							className="btn btn-warning"
							onClick={reset}
							style={{ float: "right", verticalAlign: "middle" }}
						>
							<div>
								<BsArrowCounterclockwise />
							</div>
						</Button>
					</div>
					<span>{encounterLevel}</span>
				</div>
				<div className="card-body overflow-auto">
					<Table striped hover>
						<thead>
							<tr>
								<th>Meta</th>
								<th>Monster Name</th>
								<th>Hit Points</th>
								<th>Strength</th>
								<th>Dexerity</th>
								<th>Constitution</th>
								<th>Intellegence</th>
								<th>Wisdom</th>
								<th>Charisma</th>
								<th>Challenge</th>
								<th></th>
							</tr>
						</thead>
						{updatedEncounter.length === 0 ? (
							<tbody style={{ overflowY: "auto" }}>
								<tr>
									<td colSpan={10} style={{ textAlign: "center" }}>
										{tempMonster.id}
									</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						) : (
							updatedEncounter.map((mon) => {
								return (
									<tbody style={{ overflowY: "auto" }}>
										<tr>
											<td style={{ fontSize: 22 }}>{icon(mon?.meta)}</td>
											<td>{mon?.hit_points}</td>
											<th>{mon?.name}</th>
											<td>{mon?.strength + mon.str_mod}</td>
											<td>{mon?.dexterity + mon.dex_mod}</td>
											<td>{mon?.constitution + mon.con_mod}</td>
											<td>{mon?.intellegence + mon.int_mod}</td>
											<td>{mon?.wisdom + mon.wis_mod}</td>
											<td>{mon?.charisma + mon.cha_mod}</td>
											<td>{mon?.challenge}</td>
											<td>
												<Button
													className="btn btn-danger"
													onClick={() => removeEncounter(mon)}
												>
													Remove
												</Button>
											</td>
										</tr>
									</tbody>
								);
							})
						)}
					</Table>
				</div>
			</div>
		</div>
	);
}
