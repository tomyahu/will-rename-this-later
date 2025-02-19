import { Controller } from "../Controller";
import { Command } from "./Command";


export class ListCharactersCommand extends Command {

	constructor() {
		super()
		this._name = "c-list";
		this._description = "Shows a list of all created characters";
		this._category = "characters";
	}


	// execute
	// lists all the current characters in the storage
	public execute(ctrl: Controller, args : string[]): void {
		let storage = ctrl.storage;
		let characters = storage.characters;
		
		Object.values(characters).forEach( character => {
			console.log( character.name );
		});
	}

}
