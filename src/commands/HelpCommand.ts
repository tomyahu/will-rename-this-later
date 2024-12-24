import {Controller} from "../Controller"
import {Command} from "./Command";

export class HelpCommand extends Command {

	constructor() {
		super();
		this._name = "help";
		this._description = "Lists all available commands";
	}

	public execute(ctrl : Controller, args : string[]) : void {
		let commands = ctrl.getCommands();
		for( const [key, command] of Object.entries(commands) ) {
			console.log( command.name + " - " + command.description );
		}
	}
}