import { Character } from "../entities/Character";


export class CharacterFactory {

	// fromDictionary
	// makes a new character from a dictionary
	public static fromDictionary( dictionary ) : Character {
		let character = new Character( dictionary._name )
		if( "_max_hp" in dictionary ) character.max_hp = dictionary._max_hp;
		if( "_hp" in dictionary ) character.hp = dictionary._hp;
		if( "_str" in dictionary ) character.str = dictionary._str;
		if( "_dex" in dictionary ) character.dex = dictionary._dex;
		if( "_con" in dictionary ) character.con = dictionary._con;
		if( "_int" in dictionary ) character.int = dictionary._int;
		if( "_wis" in dictionary ) character.wis = dictionary._wis;
		if( "_cha" in dictionary ) character.cha = dictionary._cha;
		if( "_items" in dictionary ) {
			Object.values( dictionary._items ).forEach( ( item : any ) => {
				character.addItem( item._name, item._description );
			} )
		}

		
		return character;
	}
}