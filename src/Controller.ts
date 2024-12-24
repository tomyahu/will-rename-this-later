import { Command } from "./commands/Command";
import { CreateCharacterCommand } from "./commands/CreateCharacterCommand";
import { HelpCommand } from "./commands/HelpCommand";
import { ListCharactersCommand } from "./commands/ListCharactersCommand";
import { LoadCommand } from "./commands/LoadCommand";
import { PingCommand } from "./commands/PingCommand";
import { SaveCommand } from "./commands/SaveCommand";
import { Storage } from "./Storage";

export class Controller {
	private commands : { [id : string] : Command ;} = {};
	private _storage : Storage;

	constructor() {
		this.makeCommands([
			new HelpCommand(),
			new PingCommand(),
			new CreateCharacterCommand(),
			new ListCharactersCommand(),
			new SaveCommand(),
			new LoadCommand()
		])

		this._storage = new Storage();
	}


	// executeCommand
	// executes the command given
	public executeCommand( command_txt : string, args : string[] ) : void {
		if( command_txt in this.commands )
			this.commands[command_txt].execute(this, args);
		else
			console.log("Command not found")
	}


	// getCommands
	// gets the currently available commands
	public getCommands() : { [id : string] : Command ;} {
		return this.commands
	}


	private makeCommands( new_commands : Command[] ) : void {
		this.commands = {}
		new_commands.forEach( command => {
			this.commands[command.name] = command
		})
	}


	get storage() : Storage {
		return this._storage;
	}

}