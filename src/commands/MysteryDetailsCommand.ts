import { Controller } from "../Controller";
import { Command } from "./Command";


export class MysteryDetailsCommand extends Command {

	constructor() {
		super();
		this._name = "m";
		this._description = "Gets the discovered clues for a mystery given its id";
		this._category = "misteries";
	}


	// execute
	// gets the details for a mystery
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length != 1 )
			return console.log("This command requires the id of the mystery to get details")

		let storage = ctrl.storage;
		let mysteries = storage.getMysteries();
		let mystery_id = Number.parseInt( args[0] );
		if( mystery_id < 0 || mystery_id >= mysteries.length )
			return console.log("No mystery with that id found.");

		let mystery = mysteries[mystery_id];
		console.log(`-- ${mystery.name} --`)
		console.log("")
		console.log("-- Clues --")
		mystery.getDiscoveredClues().forEach( clue => {
			console.log(clue);
		} )

	}
}