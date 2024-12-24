import { Character } from "../entities/Character";


export class CharacterFactory {

	public static fromDictionary( dictionary ) : Character {
		let character = new Character( dictionary._name )
		return character;
	}
}