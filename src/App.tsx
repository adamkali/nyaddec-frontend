import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import MonsterCard from "./components/MonsterManual";

export type Monster = {
	id: number;
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

	const addToEncounter = (monster: Monster): void => {
		setUpdatedEncounter([...updatedEncounter, monster]);
	};

	const funcProps = {
		addToEncounter: addToEncounter,
	};

	useEffect(() => {
		console.log(updatedEncounter);
	}, [updatedEncounter]);

	return (
		<div className="App">
			<MonsterCard {...funcProps} />
		</div>
	);
}

export default App;
