import monster from "../../../data/monsters.json";
import Monster from "../../../classes/Monster";

export default function MonsterPage({
	monster
}:{
	monster: Monster
}): JSX.Element {
	return (
		<div className="card">
			<div className="card-header">
				<div style={{ padding: "5px" }}>
					<label className="display-4" style={{ padding: "10px 10px 10px 0" }}>
						<span>Monster manual</span>
					</label>
				</div>
			</div>
		</div>
	);
}
