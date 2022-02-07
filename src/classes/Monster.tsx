/**
 * This is the main Monster class that gets used throughout the application.
 *
 * It will get substatiated when it is initialized throught the monsters.json
 */

export default class Monster {
	id: number = 0;
	name: string = "Monster";
	meta: string = "Aberation";
	armor_class: string = "0";
	hit_points: string = "0";
	speed: string = "30 ft.";
	strength: string = "10";
	str_mod: string = "0";
	dexterity: string = "10";
	dex_mod: string = "0";
	constitution: string = "10";
	con_mod: string = "0";
	intellegence: string = "10";
	int_mod: string = "0";
	wisdom: string = "10";
	wis_mod: string = "0";
	charisma: string = "10";
	cha_mod: string = "0";
	saving_throw: string = "None";
	skills: string = "None";
	immune: string = "None";
	senses: string = "None";
	languages: string = "None";
	challenge: string = "None";
	traits: string = "None";
	actions: string = "None";
	legendary: string = "None";
	img_url: string = "None";
}
