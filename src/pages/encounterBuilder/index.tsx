import React, { useCallback, useEffect, useState } from "react";
import monsters from "../../data/monsters.json";
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

export default function EncounterBuilder() {
	const [updatedEncounter, setUpdatedEncounter] = useState([] as Monster[]);
	const monsterManual: Monster[] = monsters;

	const icon = (meta: string): JSX.Element | undefined => {
		if (meta.includes("aberration")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiSlime />
				</div>
			);
		} else if (meta.includes("humanoid") || meta.includes("giant")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiBodyBalance />
				</div>
			);
		} else if (meta.includes("dragon")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiDragonHead />
				</div>
			);
		} else if (meta.includes("beast")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiBeastEye />
				</div>
			);
		} else if (meta.includes("elemental")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiFire />
				</div>
			);
		} else if (meta.includes("monstrosity")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiMonsterGrasp />
				</div>
			);
		} else if (meta.includes("construct")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiBigGear />
				</div>
			);
		} else if (meta.includes("plant")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiCarnivorousPlant />
				</div>
			);
		} else if (meta.includes("fiend")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiDevilMask />
				</div>
			);
		} else if (meta.includes("undead")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiHalfDead />
				</div>
			);
		} else if (meta.includes("ooze")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiTransparentSlime />
				</div>
			);
		} else if (meta.includes("fey")) {
			return (
				<div style={{ fontSize: "13" }}>
					<GiFairyWings />
				</div>
			);
		} else if (meta.includes("celestial")) {
			return (
				<div style={{ fontSize: "13" }}>
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
		tempEncounter.splice(index, 0);
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
		<div style={{ display: "flex" }}>
			<MonsterCard {...funcProps} />
			<EncounterList {...encounterListProps} />
		</div>
	);
}
