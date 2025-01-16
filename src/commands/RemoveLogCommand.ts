import { Controller } from "../Controller";
import { Command } from "./Command";

export class RemoveLogCommand extends Command {

	constructor() {
		super();
		this._name = "log-rm";
		this._description =  "Removes a log given an id"
		this._category = "logs";
	}

	// execute
	// removes a log given an id
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length != 1 )
			return console.log("This command needs the id to delete the log")

		let storage = ctrl.storage;
		let logs = storage.logs
		logs.splice( Number.parseInt( args[0] ), 1 )
	}
}