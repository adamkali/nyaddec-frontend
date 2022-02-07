import PlayerCharacter from "../classes/PlayerCharacter";
import difficultyJson from "../data/difficulty";

export type Difficulty = {
	easy: number;
	medium: number;
	hard: number;
	deadly: number;
};

/**
 *
 * @param party : Inputs an array of party members to calculate difficulty for the encounter
 *
 * @returns Difficulty: This is a helper class to return to the EncounterList.tsx
 * 		to populate the encounter list difficulty table at line 44 called const span.
 */
export default function DifficultyCalculator(
	party: PlayerCharacter[],
): Difficulty {
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
				pc.playerLevel === diff.level
					? addToDifficulty(diff.exp, tempTotalDifficulty)
					: void 0;
			}),
		);
		return tempTotalDifficulty;
	};

	return calculateDifficulty();
}
