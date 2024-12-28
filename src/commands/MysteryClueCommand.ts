import { Controller } from "../Controller";
import { Command } from "./Command";


export class MysteryClueCommand extends Command {

	constructor() {
		super();
		this._name = "mystery_clue";
		this._description = "Discovers a clue for a mystery";
		this._category = "misteries";
	}


	// execute
	// discovers a new clue for a mystery
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length != 1 )
			return console.log("This command requires the id of the mystery to discover the clue")

		let storage = ctrl.storage;
		let mysteries = storage.getMysteries();
		let mystery_id = Number.parseInt( args[0] );
		if( mystery_id < 0 || mystery_id >= mysteries.length )
			return console.log("No mystery with that id found.");

		let mystery = mysteries[mystery_id];

		if( mystery.is_solved )
			return console.log("This mystery is already solved.");

		console.log( mystery.discoverClue() );
	}
}