import { Character } from "../entities/Character";


export class CharacterFactory {

	// fromDictionary
	// makes a new character from a dictionary
	public static fromDictionary( dictionary ) : Character {
		let character = new Character( dictionary._name )
		if( "_max_hp" in dictionary ) character.max_hp = dictionary._max_hp;
		if( "_hp" in dictionary ) character.hp = dictionary._hp;
		
		return character;
	}
}