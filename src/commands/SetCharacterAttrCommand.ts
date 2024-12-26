import * as readline from 'readline-sync';
import { Controller } from "../Controller";
import { Command } from "./Command";


export class SetCharacterAttrCommand extends Command {

	constructor() {
		super();
		this._name = "set_character_attr";
		this._description = "Sets a character's attribute directly";
	}

	
	// execute
	// sets an attribute for a character directly
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length < 1 )
			return console.log("This command requires a character name");

		let character_name = args.join(" ");
		let character = ctrl.storage.getCharacter( character_name );

		if( character === undefined )
			return console.log(`Character ${character_name} doesn't exists`);

		let splitted_answer = readline.question("Attribute and value: ").split(" ");
		if( splitted_answer.length != 2 )
			return console.log("Both an attribute and a value are required");

		let attribute = splitted_answer[0];
		let value = splitted_answer[1];

		if( ! ( attribute in character ) )
			console.log("Attribute not found.")

		character[attribute] = Number.parseInt(value);
	}
}