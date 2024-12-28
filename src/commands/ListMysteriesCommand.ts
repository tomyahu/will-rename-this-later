import { Controller } from "../Controller";
import { Command } from "./Command";


export class ListMysteriesCommand extends Command {
	
	constructor() {
		super();
		this._name = "list_mysteries";
		this._description = "Lists all unsolved mysteries.";
		this._category = "misteries";
	}


	// execute
	// lists all unsolved mysteries
	public execute(ctrl: Controller, args: string[]): void {
		let storage = ctrl.storage;
		let mysteries = storage.getMysteries();

		for( let i = 0; i < mysteries.length; i++ ) {
			let mystery = mysteries[i];
			if( ! mystery.is_solved )
				console.log(`${i} "${mystery.name}"`);
		}
	}
}