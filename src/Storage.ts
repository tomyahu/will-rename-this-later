import { SAVE_VERSION } from "./consts";
import { Character } from "./entities/Character"
import * as fs from "fs"
import { CharacterFactory } from "./factories/CharacterFactory";
import { Place } from "./entities/Place";
import { PlaceFactory } from "./factories/PlaceFactory";
import { SaveMigrationManager } from "./SaveMigrationManager";
import { Mystery } from "./entities/Mystery";
import { MysteryFactory } from "./factories/MysteryFactory";
import { Condition } from "./entities/Condition";

export class Storage {
	private _characters : { [id : string]: Character };
	private _places : { [id : string]: Place };
	private _mysteries : Mystery[];
	private _data_path : string = "data.json";
	private _logs : string[];
	private version : string = SAVE_VERSION;
	private _called_oracle = false;
	private _current_place : Place;
	private _party : Set<string>;
	private _conditions : { [id : string]: Condition };

	constructor() {
		this._characters = {};
		this._places = {};
		this._mysteries = [];
		this._logs = [];
		this._current_place = new Place("null");
		this._party = new Set<string>();
		this._conditions = {};
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


	// addMystery
	// adds a mystery to the storage
	public addMystery( mystery : Mystery ) : void {
		this._mysteries.push( mystery );
	}


	// addCondition
	// adds a new condition to the storage
	public addCondition( condition : Condition ) : void {
		this._conditions[ condition.name ] = condition;
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


	// getMysteries
	// gets all mysteries in the storage
	public getMysteries() : Mystery[] {
		return this._mysteries;
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


	// migrate
	// migrates the contents of a savefile to the current version and loads it
	public migrate() : void {
		let data : any = JSON.parse( fs.readFileSync( this._data_path ).toString() )

		data = SaveMigrationManager.migrate(data);
		this.fromDictionary(data);
	}


	// fromDictionary
	// ovewrites the current storage data with that given by the dictionary
	private fromDictionary( dictionary ) {
		this._characters = {}
		Object.values(dictionary.characters).forEach( (character_dict : any) => {
			this.characters[character_dict._name] = CharacterFactory.fromDictionary(character_dict);
		})

		this._places = {}
		Object.values(dictionary.places).forEach( (place_dict : any) => {
			this.places[place_dict._name] = PlaceFactory.fromDictionary(place_dict);
		})

		this._current_place = this._places[dictionary.current_place];
		if( this._current_place == undefined )
			this._current_place = new Place("null");

		this._mysteries = [];
		dictionary.mysteries.forEach( mystery => { this._mysteries.push( MysteryFactory.fromDictionary( mystery ) ) } )

		this._conditions = {};
		Object.values(dictionary.conditions).forEach( (condition : any) => { this._conditions[ condition._name ] = new Condition( condition._name, condition._description ) } );
		
		this._party = new Set<string>(dictionary.party);
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
			"current_place": this._current_place.name,
			"party": Array.from( this._party.values() ),
			"mysteries": this._mysteries.map( mystery => { return mystery.toDictionary(); } ),
			"conditions": this._conditions,
		}
	}


	// getters
	get characters() : { [id : string] : Character } { return this._characters; }
	get places() : { [id : string] : Place } { return this._places; }
	get logs() : string[] { return this._logs; }
	get called_oracle() : boolean { return this._called_oracle; }
	get current_place() : Place { return this._current_place; }
	get party() : Set<string> { return this._party; }
	get conditions() : { [id : string] : Condition } { return this._conditions }


	// setters
	set data_path( new_data_path : string ) { this._data_path = new_data_path; }
	set called_oracle( new_oracle : boolean ) { this._called_oracle = new_oracle }
	set current_place( new_place : Place ) { this._current_place = new_place }

}