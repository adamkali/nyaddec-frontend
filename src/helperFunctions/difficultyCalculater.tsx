import difficultyJson from "../data/difficulty"

export type Difficulty = {
    easy: number;
    medium: number;
    hard: number;
    deadly: number;
};

export default function DifficultyCalculator(): Difficulty {

    const party = [
        {
            level: 5
        },
        {
            level: 6
        },
        {
            level: 5
        },
        {
            level: 4
        }
    ]

    const calculateDifficulty = (): Difficulty => {
        const tempTotalDifficulty: Difficulty = {
            easy: 0,
            medium: 0,
            hard: 0,
            deadly: 0
        };
        party.forEach((pc) => 
            difficultyJson.forEach((diff) =>
                if (pc.level === diff.level) {
                    tempTotalDifficulty.easy += diff.easy;
                    tempTotalDifficulty.medium += diff.medium;
                    tempTotalDifficulty.hard += diff.hard;
                    tempTotalDifficulty.deadly += diff.deadly;
                }
            );
        );
        return tempTotalDifficulty;
    }

    return calculateDifficulty();
};