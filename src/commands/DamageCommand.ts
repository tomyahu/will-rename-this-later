import * as readline from 'readline-sync';
import { Controller } from "../Controller";
import { Command } from "./Command";


export class DamageCommand extends Command {

	constructor() {
		super();
		this._name = "c-dmg";
		this._description = "Damages one character";
		this._category = "battle";
	}


	// execute
	// damages a character
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length < 1 )
			return console.log("This command requires a character to heal");

		let storage = ctrl.storage;
		let character_name = args.join(" ");
		let character = storage.getCharacter( character_name );

		if( character === undefined )
			return console.log(`Character ${character_name} doesn't exists`)

		let splitted_answer = readline.question("Attribute and value: ").split(" ");
		if( splitted_answer.length != 1 )
			return console.log("the amount of damage is required");

		let damage = Number.parseInt( splitted_answer[0] );

		character.damage(damage)
		console.log( `${character_name} took ${damage} dmg (${character.hp})` );
	}

}
