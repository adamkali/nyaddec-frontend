import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import monsters from "./monsters.json";
import MonsterCard from "./components/MonsterManual";
import EncounterList from "./components/EncounterList";
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
import { IconBase } from "react-icons";
export type Monster = {
	id: number;
	name: string;
	meta: string;
	armor_class: string;
	hit_points: string;
	speed: string;
	strength: string;
	str_mod: string;
	dexterity: string;
	dex_mod: string;
	constitution: string;
	con_mod: string;
	intellegence: string;
	int_mod: string;
	wisdom: string;
	wis_mod: string;
	charisma: string;
	cha_mod: string;
	saving_throw: string;
	skills: string;
	immune: string;
	senses: string;
	languages: string;
	challenge: string;
	traits: string;
	actions: string;
	legendary: string;
	img_url: string;
};

export interface FuncProp {
	addToEncounter: (monster: Monster) => void;
}

function App() {
	const [updatedEncounter, setUpdatedEncounter] = useState([] as Monster[]);
	const monsterManual: Monster[] = monsters;

	const icon = (meta: string): JSX.Element | undefined => {
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

	const addToEncounter = (monster: Monster): void => {
		setUpdatedEncounter([...updatedEncounter, monster]);
	};

	const removeEncounter = (monster: Monster): void => {
		const tempEncounter = [...updatedEncounter];
		const index = tempEncounter.findIndex((m) => m.id === monster.id);
		tempEncounter.splice(index, 1);
		setUpdatedEncounter([...tempEncounter]);
	};

	const updateEncounter = (mons: Monster[]): void => {
		setUpdatedEncounter(mons);
	};

	const funcProps = {
		monsterManual: monsterManual,
		addToEncounter: addToEncounter,
		icon: icon,
		updateEncounter: updateEncounter,
	};

	const encounterListProps = {
		updatedEncounter: updatedEncounter,
		removeEncounter: removeEncounter,
		icon: icon,
		updateEncounter: updateEncounter,
	};

	return (
		<div className="App" style={{ display: "flex" }}>
			<MonsterCard {...funcProps} />
			<EncounterList {...encounterListProps} />
		</div>
	);
}

export default App;
