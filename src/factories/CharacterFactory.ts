import { Character } from "../entities/Character";


export class CharacterFactory {

	// fromDictionary
	// makes a new character from a dictionary
	public static fromDictionary( dictionary ) : Character {
		let character = new Character( dictionary._name )
		return character;
	}
}