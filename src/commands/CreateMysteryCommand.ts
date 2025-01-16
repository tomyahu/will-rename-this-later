import { Controller } from "../Controller";
import { Mystery } from "../entities/Mystery";
import { Command } from "./Command";


export class CreateMysteryCommand extends Command{

	constructor() {
		super();
		this._name = "m-create";
		this._description = "Creates a new mystery";
		this._category = "misteries";
	}


	// execute
	// creates a new mystery
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length == 0 )
			return console.log("This command requires what the mystery is about.")

		let storage = ctrl.storage;
		let mystery_name = args.join(" ");
		storage.addMystery( new Mystery( mystery_name ) );
		console.log(`Added Mystery: ${mystery_name}`);
	}
}