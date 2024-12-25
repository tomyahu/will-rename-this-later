import { Controller } from "../Controller";
import { Character } from "../entities/Character";
import { Command } from "./Command";

export class CreateCharacterCommand extends Command {

	constructor() {
		super();
		this._name = "create_character";
		this._description =  "Creates a new character given a name";
		this._category = "characters";
	}

	// execute
	// creates a character and adds it to the storage
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length < 1 )
			return console.log("This command takes exactly 1 argument, the character's name.")

		let name = args.join(" ");
		let storage = ctrl.storage;
		storage.addCharacter(
			new Character(name)
		);
		console.log(`Added character ${name}`);
	}
}