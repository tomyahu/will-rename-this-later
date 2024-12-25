import { Controller } from "../Controller";
import { Command } from "./Command";

export class AddLogCommand extends Command {

	constructor() {
		super();
		this._name = "log";
		this._description =  "Adds a new log";
		this._category = "logs";
	}

	// execute
	// adds a new log
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length < 1 )
			return console.log("This command needs the string to log")

		let storage = ctrl.storage;
		storage.logs.push( args.join(" ") )
	}
}