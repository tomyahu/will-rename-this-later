import { Controller } from "../Controller";
import { Command } from "./Command";


export class FullHealCommand extends Command {

	constructor() {
		super();
		this._name = "fullheal";
		this._description = "Fully heals one character";
		this._category = "battle";
	}


	// execute
	// fully heals a character
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length < 1 )
			return console.log("This command requires a character to heal");

		let storage = ctrl.storage;
		let character_name = args.join(" ");
		let character = storage.getCharacter( character_name );

		if( character === undefined )
			return console.log(`Character ${character_name} doesn't exists`)

		character.fullHeal()
		console.log( `${character_name} has been healed back to full hp (${character.max_hp})` );
	}

}