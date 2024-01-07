export type species =
	| 'Human'
	| 'Alien'
	| 'Humanoid'
	| 'Unknown'
	| 'Mythological Creature'
	| 'Poopybutthole'
	| 'Animal'
	| 'Robot'
	| 'Cronenberg'
	| 'Disease'
	| '';
export type gender = 'Male' | 'Female' | 'Genderless' | 'Unknown' | '';
export type status = 'Alive' | 'Dead' | 'Unknown' | '';

export interface Character {
	name: string;
	status: status;
	species: species;
	gender: gender;
	type: string;
}
