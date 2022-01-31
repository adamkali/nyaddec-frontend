import { json } from "stream/consumers";
import DetailedLog from "../classes/DetailedLog";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Monster } from "../App";
import { useState, useEffect } from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
export default function MonsterCard({
	monsterManual,
	addToEncounter,
	icon,
	updateEncounter,
}: {
	monsterManual: Monster[];
	addToEncounter: (monster: Monster) => void;
	icon: (meta: string) => JSX.Element | undefined;
	updateEncounter: (monsters: Monster[]) => void;
}): JSX.Element {
	const [updatedMonsters, setUpatedMonsters] = useState(monsterManual);
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
