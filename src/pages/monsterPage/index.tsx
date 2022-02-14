import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	useLocation,
	useParams,
} from "react-router-dom";
import monsterManual from "../../data/monsters.json";
import Monster from "../../classes/Monster";
import MonsterPage from "./components/MonsterPage";

export default function MonsterDisplay(): JSX.Element {
	const params = useParams();
	const [monster, setMonster] = useState({} as Monster);
	const [monsters, setMonsters] = useState(monsterManual as Monster[]);

	useEffect(() => {
		let id = params.id ?? "";
		monsters.forEach((mon) => {
			if (mon.id === +id) {
				setMonster(mon);
			}
		});
	}, [params]);

	return (
		<div>
			<MonsterPage monster={monster} />
		</div>
	);
}
