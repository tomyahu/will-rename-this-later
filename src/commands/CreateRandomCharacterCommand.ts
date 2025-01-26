import { Controller } from "../Controller";
import { Character } from "../entities/Character";
import { Util } from "../lib/Util";
import { Command } from "./Command";

export class CreateRandomCharacterCommand extends Command {
	protected stats_array = [-1,0,0,1,2,3];

	constructor() {
		super();
		this._name = "c-create1";
		this._description =  "Creates a new character with random stats given a name";
		this._category = "characters";
	}

	// execute
	// creates a character and adds it to the storage
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length < 1 )
			return console.log("This command takes exactly 1 argument, the character's name.")

		let name = args.join(" ");
		let storage = ctrl.storage;
		let character = new Character( name );
		storage.addCharacter( character );

		let s_array = Util.shuffle_array( this.stats_array );

		character.str = s_array[0]
		character.dex = s_array[1]
		character.con = s_array[2]
		character.int = s_array[3]
		character.wis = s_array[4]
		character.cha = s_array[5]
		
		console.log(`Added character ${name}`);
	}
}
