import { Controller } from "../Controller";
import { Character } from "../entities/Character";
import { Command } from "./Command";

export class CreateCharacterCommand extends Command {

	constructor() {
		super();
		this._name = "create_character";
		this._description =  "Creates a new character given a name"
	}

	public execute(ctrl: Controller, args : string[]): void {
		if( args.length != 1 )
			return console.log("This command takes exactly 1 argument, the character's name.")

		let storage = ctrl.storage;
		storage.addCharacter(
			new Character(args[0])
		);
		console.log(`Added character ${args[0]}`);
	}
}