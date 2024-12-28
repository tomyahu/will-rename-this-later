import { Controller } from "../Controller";
import { Command } from "./Command";


export class CharacterCommand extends Command {

	constructor() {
		super();
		this._name = "character";
		this._description = "Shows a character's data"
		this._category = "characters";
	}


	// execute
	// shows a character's data
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length == 0 )
			return console.log("This command requires the name of a character")

		let character_name = args.join(" ");
		let storage = ctrl.storage;
		let character = storage.getCharacter( character_name );

		if( character === undefined )
			return console.log(`${character_name} is not a valid character`);

		console.log(`-- ${character.name} --`)
		console.log(`HP: ${character.hp} / ${character.max_hp}`)
		console.log(`Str: ${character.str} \t\tInt: ${character.int}`)
		console.log(`Dex: ${character.dex} \t\tWis: ${character.wis}`)
		console.log(`Con: ${character.con} \t\tCha: ${character.cha}`)
	}
}