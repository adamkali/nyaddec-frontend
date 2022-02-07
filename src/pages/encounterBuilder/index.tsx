import React, { useState } from "react";
import monsters from "../../data/monsters.json";
import MonsterCard from "./components/MonsterManual";
import EncounterList from "./components/EncounterList";
import icon from "../../helperFunctions/icon";
import Monster from "../../classes/Monster";

export default function EncounterBuilder(): JSX.Element {
	const [updatedEncounter, setUpdatedEncounter] = useState([] as Monster[]);
	const monsterManual: Monster[] = monsters;

	const addToEncounter = (monster: Monster): void => {
		setUpdatedEncounter([...updatedEncounter, monster]);
	};

	const removeEncounter = (monster: Monster): void => {
		const tempEncounter = [...updatedEncounter];
		const index = tempEncounter.findIndex((m) => m.id === monster.id);
		tempEncounter.splice(index, 0);
		setUpdatedEncounter([...tempEncounter]);
	};

	const injectMonsterCard = {
		monsterManual: monsterManual,
		addToEncounter: addToEncounter,
		icon: icon,
	};

	const injectEncounterListProps = {
		updatedEncounter: updatedEncounter,
		removeEncounter: removeEncounter,
		icon: icon,
	};

	return (
		<div style={{ display: "flex" }}>
			<MonsterCard {...injectMonsterCard} />
			<EncounterList {...injectEncounterListProps} />
		</div>
	);
}
