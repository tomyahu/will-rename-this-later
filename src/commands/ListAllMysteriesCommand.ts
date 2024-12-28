import { Controller } from "../Controller";
import { Command } from "./Command";


export class ListAllMysteriesCommand extends Command {
	
	constructor() {
		super();
		this._name = "all_mysteries";
		this._description = "Lists all mysteries.";
		this._category = "misteries";
	}


	// execute
	// lists all mysteries
	public execute(ctrl: Controller, args: string[]): void {
		let storage = ctrl.storage;
		let mysteries = storage.getMysteries();

		for( let i = 0; i < mysteries.length; i++ ) {
			let mystery = mysteries[i];
			let solved_string = mystery.is_solved ? "*solved*" : "";
			console.log(`${i} "${mystery.name}" ${solved_string}`);
		}
	}
}