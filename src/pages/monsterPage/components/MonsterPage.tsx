import Monster from "../../../data/monsters.json";

export default function MonsterPage(): JSX.Element {
    return (
        <div className="card">
            <div className="card-header">
				<div style={{ padding: "5px" }}>
					<label
						className="display-4"
						style={{ padding: "10px 10px 10px 0" }}
					>
						<span>Monster manual</span>
					</label>
                </div>
            </div>
        </div>
    );
}