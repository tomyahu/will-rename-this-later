import { Controller } from "../Controller";
import { Command } from "./Command";

export class LogsCommand extends Command {
	private default_logs : number = 10;

	constructor() {
		super();
		this._name = "log";
		this._description =  "Displays the last logs, default value is " + this.default_logs.toString()
	}

	// execute
	// adds a new log
	public execute(ctrl: Controller, args : string[]): void {
		let logs_to_display = this.default_logs;
		
		if( args.length == 1 )
			logs_to_display = Number.parseInt(args[0]);

		let storage = ctrl.storage;
		let logs = storage.logs;
		for( let i = Math.max(0, logs.length - logs_to_display); i < logs.length; i++ )
			console.log(i.toString() + " " + logs[i]);
	}
}