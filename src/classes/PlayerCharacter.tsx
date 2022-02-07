/**
 * This is the default Player Class that deals with the encounterDifficulties in the
 * 	encounter building system. Without it we do not know how to assign what kind of
 * 	difficulty the encounter will be.
 */
export default class PlayerCharacter {
	playerID: number = 0;
	playerName: string = "";
	playerHitPoints: number = 0;
	playerLevel: number = 1;
}
