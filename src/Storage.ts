import { Character } from "./entities/Character"


export class Storage {
	private _characters : { [id : string]: Character };

	constructor() {
		this._characters = {};
	}


	public addCharacter( character : Character ) : void {
		this._characters[character.name] = character;
	}


	public getCharacter( name : string ) : Character {
		return this._characters[name];
	}


	get characters() : { [id : string] : Character } {
		return this._characters;
	}

}