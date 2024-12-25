import { SAVE_VERSION } from "./consts";
import { Character } from "./entities/Character"
import * as fs from "fs"
import { CharacterFactory } from "./factories/CharacterFactory";
import { Place } from "./entities/Place";

export class Storage {
	private _characters : { [id : string]: Character };
	private _places : { [id : string]: Place };
	private _data_path : string = "data.json";
	private _logs : string[];
	private version : string = SAVE_VERSION;

	constructor() {
		this._characters = {};
		this._places = {};
		this._logs = [];
	}


	// addCharacter
	// adds a character to the storage
	public addCharacter( character : Character ) : void {
		this._characters[character.name] = character;
	}
	
	
	// addPlace
	// adds a character to the storage
	public addPlace( place : Place ) : void {
		this._places[place.name] = place;
	}


	// getCharacter
	// gets a character in the storage using its name
	public getCharacter( name : string ) : Character {
		return this._characters[name];
	}


	// getPlace
	// gets a place in the storage using its name
	public getPlace( name : string ) : Place {
		return this._places[name];
	}


	// save
	// saves data to a save file
	public save() : void {
		fs.writeFileSync( this._data_path, JSON.stringify( this.asDictionary() ) )
	}


	// load
	// loads data from a save file
	public load() : void {
		let data : any = JSON.parse( fs.readFileSync( this._data_path ).toString() )
		if( SAVE_VERSION.localeCompare( data.version ) != 0 )
			return console.log("Failed to load incompatible version");

		this.fromDictionary(data);
	}


	// fromDictionary
	// ovewrites the current storage data with that given by the dictionary
	private fromDictionary( dictionary ) {
		this._characters = {}
		Object.values(dictionary.characters).forEach( (character_dict : any) => {
			this.characters[character_dict._name] = CharacterFactory.fromDictionary(character_dict);
		})

		this._logs = dictionary.logs;
	}


	// asDictionary
	// returns the current storage as a dictionary
	private asDictionary() {
		return {
			"version" : this.version,
			"characters" : this._characters,
			"logs": this._logs,
			"places": this._places,
		}
	}


	// getters
	get characters() : { [id : string] : Character } { return this._characters; }
	get places() : { [id : string] : Place } { return this._places; }
	get logs() : string[] { return this._logs; }


	// setters
	set data_path( new_data_path : string) { this._data_path = new_data_path; }

}