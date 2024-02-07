/**
 * Represents the species of a character in the Rick and Morty universe.
 */
export type species =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Unknown"
  | "Mythological Creature"
  | "Poopybutthole"
  | "Animal"
  | "Robot"
  | "Cronenberg"
  | "Disease"
  | "";

/**
 * Represents the gender of a character.
 * Possible values are 'Male', 'Female', 'Genderless', 'Unknown', or an empty string.
 */
export type gender = "Male" | "Female" | "Genderless" | "Unknown" | "";
/**
 * Represents the status of a character.
 * Possible values are 'Alive', 'Dead', 'Unknown', or an empty string.
 */
export type status = "Alive" | "Dead" | "Unknown" | "";

/**
 * Represents a character in the Rick and Morty universe.
 */
export interface Character {
  name: string;
  status: status;
  species: species;
  gender: gender;
  type: string;
}
