import * as readline from 'readline-sync';
import { Controller } from "../Controller";
import { Command } from "./Command";

export class AddItemCommand extends Command {

	constructor() {
		super();
		this._name = "c-item";
		this._description =  "Sets an item of a character";
		this._category = "characters";
	}

	// execute
	// adds an item to a character
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length < 1 )
			return console.log("This command requires a character name");

		let character_name = args.join(" ");
		let character = ctrl.storage.getCharacter( character_name );

		if( character === undefined )
			return console.log(`Character ${character_name} doesn't exists`);

		let item_name = readline.question("Item Name: ");
		let item_description = readline.question("Item Description: ");

		character.addItem( item_name, item_description );
		
		let log_string = `Added ${item_name} to ${character_name}'s inventory`;
		console.log(log_string);
		ctrl.storage.logs.push(log_string);
	}
}