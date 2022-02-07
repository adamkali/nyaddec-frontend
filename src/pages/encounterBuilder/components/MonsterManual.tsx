import DetailedLog from "../../../classes/DetailedLog";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Monster from "../../../classes/Monster";
import { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";

/**
 *
 * @param injectMonsterCard An injection json for the MonsterCard that passes in needed parameters
 * @param monsterManual {child} The MonsterManual is loaded in from index.tsx from monsters.json
 * 		to be used here as a way for the user to add a new Monster to the encounter in
 * 		encounterList.tsx
 * @param addToEncounter {child} A callback function from index.tsx that will add a monster to the
 * 		EncouneterList.tsx.
 * @returns
 */
export default function MonsterCard({
	monsterManual,
	addToEncounter,
	icon,
}: {
	monsterManual: Monster[];
	addToEncounter: (monster: Monster) => void;
	icon: (meta: string) => JSX.Element | undefined;
}): JSX.Element {
	const [updatedMonsters, setUpatedMonsters] = useState(monsterManual);
	const [fontColor, setFontColor] = useState("black");
	const bank: Monster[] = monsterManual;

	const search = (value: string): void => {
		if (updatedMonsters.length !== bank.length) {
			setUpatedMonsters([...bank]);
		}
		const tempMonsters = [] as Monster[];
		updatedMonsters.forEach((mon) => {
			mon.name.includes(value) && tempMonsters.push(mon);
		});
		setUpatedMonsters(tempMonsters);
	};

	const searchMeta = (value: string): void => {
		if (updatedMonsters.length !== bank.length) {
			setUpatedMonsters([...bank]);
		}
		const tempMonsters = [] as Monster[];
		updatedMonsters.forEach((mon) => {
			mon.meta.includes(value) && tempMonsters.push(mon);
		});
		setUpatedMonsters(tempMonsters);
	};

	const enterRow = (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
	): void => {
		event.currentTarget.style.backgroundColor = styles.after.backgroundColor;
		setFontColor(styles.after.fontColor);
	};

	const leaveRow = (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
	): void => {
		event.currentTarget.style.backgroundColor = styles.before.backgroundColor;
		setFontColor(styles.before.fontColor);
	};

	const reset = () => setUpatedMonsters(bank);

	return (
		<div style={{ margin: "25px", width: "45%" }}>
			<div className="card" style={{ height: "1000px" }}>
				<div className="card-header">
					<div style={{ padding: "5px" }}>
						<label
							className="display-4"
							style={{ padding: "10px 10px 10px 0" }}
						>
							<span>Monster manual</span>
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
					<form style={{ display: "flex" }}>
						<div style={{ width: "50%" }}>
							<span>
								<FloatingLabel
									controlId="floatingInput"
									label="Search Monster Name"
									className="mb-xl-10"
								>
									<Form.Control
										type="search"
										onChange={(e) => search(e.currentTarget.value)}
									/>
								</FloatingLabel>
							</span>
						</div>
						<div style={{ width: "50%" }}>
							<span>
								<FloatingLabel
									controlId="floatingInput"
									label="Search Monster Name"
									className="mb-xl-10"
								>
									<Form.Control
										type="search"
										onChange={(e) => searchMeta(e.currentTarget.value)}
									/>
								</FloatingLabel>
							</span>
						</div>
					</form>
				</div>
				<div className="card-body overflow-auto">
					<Table striped hover>
						<thead>
							<tr>
								<th></th>
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
						{updatedMonsters.map((mon) => {
							return (
								<tbody style={{ overflowY: "auto" }}>
									<tr
										onMouseOver={(event) => enterRow(event)}
										onMouseOut={(event) => leaveRow(event)}
									>
										<td style={{ fontSize: 22, color: fontColor }}>
											{icon(mon?.meta)}
										</td>
										<td style={{ color: fontColor }}>{mon?.hit_points}</td>
										<th style={{ color: fontColor }}>{mon?.name}</th>
										<td style={{ color: fontColor }}>
											{mon?.strength + mon.str_mod}
										</td>
										<td style={{ color: fontColor }}>
											{mon?.dexterity + mon.dex_mod}
										</td>
										<td style={{ color: fontColor }}>
											{mon?.constitution + mon.con_mod}
										</td>
										<td style={{ color: fontColor }}>
											{mon?.intellegence + mon.int_mod}
										</td>
										<td style={{ color: fontColor }}>
											{mon?.wisdom + mon.wis_mod}
										</td>
										<td style={{ color: fontColor }}>
											{mon?.charisma + mon.cha_mod}
										</td>
										<td style={{ color: fontColor }}>{mon?.challenge}</td>
										<td>
											<Button
												className={"btn-success"}
												onClick={() => addToEncounter(mon)}
											>
												<IoAdd />
											</Button>
										</td>
									</tr>
								</tbody>
							);
						})}
					</Table>
				</div>
			</div>
		</div>
	);
}

import "./App.css";
const styles = {
	after: {
		backgroundColor: "#2f2940",
		fontColor: "#aeabb8",
	},
	before: {
		backgroundColor: "white",
		fontColor: "black",
	},
};
