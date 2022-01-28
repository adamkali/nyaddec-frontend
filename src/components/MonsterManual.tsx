import { json } from "stream/consumers";
import DetailedLog from "../classes/DetailedLog";
import monsters from "../monsters.json";
import {
	GiBeastEye,
	GiDragonHead,
	GiSlime,
	GiBodyBalance,
	GiFire,
	GiMonsterGrasp,
	GiBigGear,
	GiCarnivorousPlant,
	GiHalfDead,
	GiDevilMask,
	GiTransparentSlime,
	GiFairyWings,
	GiAngelWings,
	GiGears,
} from "react-icons/gi";
import Table from "react-bootstrap/Table";
import { Monster } from "../App";
import { useState } from "react";

export default function MonsterCard({
	addToEncounter,
}: {
	addToEncounter: (monster: Monster) => void;
}): JSX.Element {
	const icon = (meta: string) => {
		if (meta.includes("aberration")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiSlime />
				</div>
			);
		} else if (meta.includes("humanoid") || meta.includes("giant")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiBodyBalance />
				</div>
			);
		} else if (meta.includes("dragon")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiDragonHead />
				</div>
			);
		} else if (meta.includes("beast")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiBeastEye />
				</div>
			);
		} else if (meta.includes("elemental")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiFire />
				</div>
			);
		} else if (meta.includes("monstrosity")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiMonsterGrasp />
				</div>
			);
		} else if (meta.includes("construct")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiBigGear />
				</div>
			);
		} else if (meta.includes("plant")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiCarnivorousPlant />
				</div>
			);
		} else if (meta.includes("fiend")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiDevilMask />
				</div>
			);
		} else if (meta.includes("undead")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiHalfDead />
				</div>
			);
		} else if (meta.includes("ooze")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiTransparentSlime />
				</div>
			);
		} else if (meta.includes("fey")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiFairyWings />
				</div>
			);
		} else if (meta.includes("celestial")) {
			return (
				<div style={{ fontSize: "14" }}>
					<GiAngelWings />
				</div>
			);
		}
	};

	return (
		<div style={{ margin: "50px" }}>
			<div className="card" style={{ width: "50%", height: "1000px" }}>
				<div className="card-header">Monster Manual</div>
				<div className="card-body overflow-auto">
					<input defaultValue={"S"} />
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
							</tr>
						</thead>
						{monsters.map((mon) => {
							return (
								<tbody style={{ overflowY: "auto" }}>
									<tr onClick={() => addToEncounter(mon)}>
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
