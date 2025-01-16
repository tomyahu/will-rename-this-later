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

		character.damage(1)
		console.log( `${character_name} took 1 dmg (${character.max_hp})` );
	}

}
