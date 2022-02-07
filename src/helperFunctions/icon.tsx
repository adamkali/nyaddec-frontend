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
} from "react-icons/gi";
/**
 * A helper function used to display the monster's type.
 * @param meta A string describing what type of monster that could be added to the encounter.
 * @returns Returns only an icon if we know what type of monster it is.
 */
export default function icon(meta: string): JSX.Element | undefined {
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
}
