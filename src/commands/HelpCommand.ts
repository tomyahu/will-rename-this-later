import {Controller} from "../Controller"
import {Command} from "./Command";

export class HelpCommand extends Command {

	constructor() {
		super();
		this._name = "help";
		this._description = "Lists all available commands";
	}

	// execute
	// lists all commands currently usable
	public execute(ctrl : Controller, args : string[]) : void {
		let commands = ctrl.getCommands();
		let commands_by_category : {[id : string]: Command[] } = {};
		for( const [key, command] of Object.entries(commands) ) {
			if( ! ( command.category in commands_by_category ) )
				commands_by_category[command.category] = [];

			commands_by_category[command.category].push(command);
		}

		console.log("");
		for( const [category, commands] of Object.entries(commands_by_category) ) {
			console.log(`-- ${category} --`)
			commands.forEach( (command) => {
				console.log( command.name + " - " + command.description );
			})
			console.log("");
		}
	}
}