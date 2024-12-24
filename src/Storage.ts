import { VERSION } from "./consts";
import { Character } from "./entities/Character"
import * as fs from "fs"
import { CharacterFactory } from "./factories/CharacterFactory";

export class Storage {
	private _characters : { [id : string]: Character };
	private _data_path : string = "data.json";
	private version : string = VERSION;

	constructor() {
		this._characters = {};
	}


	public addCharacter( character : Character ) : void {
		this._characters[character.name] = character;
	}


	public getCharacter( name : string ) : Character {
		return this._characters[name];
	}


	public save() : void {
		fs.writeFileSync( this._data_path, JSON.stringify( this.asDictionary() ) )
	}


	public load() : void {
		let data : any = JSON.parse( fs.readFileSync( this._data_path ).toString() )
		if( VERSION.localeCompare( data.version ) != 0 )
			return console.log("Failed to load incompatible version");

		this.fromDictionary(data);
	}


	private fromDictionary( dictionary ) {
		this._characters = {}
		Object.values(dictionary.characters).forEach( (character_dict : any) => {
			this.characters[character_dict._name] = CharacterFactory.fromDictionary(character_dict);
		})
	}


	// asDictionary
	// returns the current storage as a dictionary
	private asDictionary() {
		return {
			"version" : this.version,
			"characters" : this._characters
		}
	}


	get characters() : { [id : string] : Character } {
		return this._characters;
	}


	set data_path( new_data_path : string) {
		this._data_path = new_data_path;
	}

}