import { Controller } from "../Controller";
import { Command } from "./Command";

export class ListConditionsCommand extends Command {

	constructor() {
		super();
		this._name = "conditions";
		this._description =  "list_conditions";
		this._category = "conditions";
	}

	// execute
	// creates a character and adds it to the storage
	public execute(ctrl: Controller, args : string[]): void {
		let storage = ctrl.storage;
		let conditions = storage.conditions;

		Object.values(conditions).forEach( condition => {
			console.log(`${condition.name} - ${condition.description}`);
		})
	}
}