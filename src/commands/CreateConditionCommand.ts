import { Controller } from "../Controller";
import { Condition } from "../entities/Condition";
import { Command } from "./Command";

export class CreateConditionCommand extends Command {

	constructor() {
		super();
		this._name = "create_condition";
		this._description =  "Creates a new condition";
		this._category = "conditions";
	}

	// execute
	// creates a character and adds it to the storage
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length  < 2 )
			return console.log("This command requires a name and a description");

		let condition_name = args[0];
		args.shift();
		let condition_description = args.join(" ");

		let storage = ctrl.storage;
		storage.addCondition( new Condition( condition_name, condition_description ) );
		console.log(`New condition ${condition_name} created`)
	}
}