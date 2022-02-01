import difficultyJson from "../data/difficulty";

export type Difficulty = {
	easy: number;
	medium: number;
	hard: number;
	deadly: number;
};

export default function DifficultyCalculator(): Difficulty {
	const party = [
		{
			level: 5,
		},
		{
			level: 6,
		},
		{
			level: 5,
		},
		{
			level: 4,
		},
	];

	const addToDifficulty = (diffA: Difficulty, diffB: Difficulty): void => {
		diffB.easy += diffA.easy;
		diffB.medium += diffA.medium;
		diffB.hard += diffA.hard;
		diffB.deadly += diffA.deadly;
	};

	const calculateDifficulty = (): Difficulty => {
		const tempTotalDifficulty: Difficulty = {
			easy: 0,
			medium: 0,
			hard: 0,
			deadly: 0,
		};
		party.forEach((pc) =>
			difficultyJson.forEach((diff) => {
				pc.level === diff.level
					? addToDifficulty(diff.exp, tempTotalDifficulty)
					: void 0;
			}),
		);
		return tempTotalDifficulty;
	};

	return calculateDifficulty();
}
