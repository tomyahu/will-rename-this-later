import { Command } from "./commands/Command";
import { CreateCharacterCommand } from "./commands/CreateCharacterCommand";
import { HelpCommand } from "./commands/HelpCommand";
import { ListCharactersCommand } from "./commands/ListCharactersCommand";
import { LoadCommand } from "./commands/LoadCommand";
import { AddLogCommand } from "./commands/AddLogCommand";
import { SaveCommand } from "./commands/SaveCommand";
import { Storage } from "./Storage";
import { LogsCommand } from "./commands/LogsCommand";
import { RemoveLogCommand } from "./commands/RemoveLogCommand";
import { CreatePlaceCommand } from "./commands/CreatePlaceCommand";
import { ListPlacesCommand } from "./commands/ListPlacesCommand";
import { OracleCommand } from "./commands/OracleCommand";
import { NewTurnCommand } from "./commands/NewTurnCommand";
import { GoToCommand } from "./commands/GoToCommand";
import { MigrateCommand } from "./commands/MigrateCommand";
import { StatusCommand } from "./commands/StatusCommand";
import { AddToPartyCommand } from "./commands/AddToPartyCommand";
import { RemoveFromPartyCommand } from "./commands/RemoveFromPartyCommand";
import { WordTableCommand } from "./commands/WordTableCommand";
import { FullHealCommand } from "./commands/FullHealCommand";
import { SetCharacterAttrCommand } from "./commands/SetCharacterAttrCommand";
import { CreateMysteryCommand } from "./commands/CreateMysteryCommand";
import { ListAllMysteriesCommand } from "./commands/ListAllMysteriesCommand";
import { ListMysteriesCommand } from "./commands/ListMysteriesCommand";
import { MysteryClueCommand } from "./commands/MysteryClueCommand";
import { MysteryDetailsCommand } from "./commands/MysteryDetailsCommand";
import { CharacterCommand } from "./commands/CharacterCommand";
import { RollCommand } from "./commands/RollCommand";
import { DamageCommand } from "./commands/DamageCommand";
import { AddItemCommand } from "./commands/AddItemCommand";
import { RemoveItemCommand } from "./commands/RemoveItemCommand";
import { SetTaskProgressCommand } from "./commands/SetTaskProgressCommand";
import { ListTasksCommand } from "./commands/ListTasksCommand";
import { ListAllTasksCommand } from "./commands/ListAllTasksCommand";
import { CreateTaskCommand } from "./commands/CreateTaskCommand";
import { AddProgressToTask } from "./commands/AddProgressToTask";
import { SetDifficultyCommand } from "./commands/SetDifficultyCommand";
import { CreateRandomCharacterCommand } from "./commands/CreateRandomCharacterCommand";
import { CreateRandom2CharacterCommand } from "./commands/CreateRandom2CharacterCommand";

export class Controller {
	private commands : { [id : string] : Command ;} = {};
	private _storage : Storage;

	constructor() {
		this.makeCommands([
			new HelpCommand(),
			new StatusCommand(),
			new OracleCommand(),
			new WordTableCommand(),
			new RollCommand(),
			new NewTurnCommand(),
			new CreateCharacterCommand(),
			new ListCharactersCommand(),
			new CharacterCommand(),
			new AddToPartyCommand(),
			new RemoveFromPartyCommand(),
			new FullHealCommand(),
			new DamageCommand(),
			new SetCharacterAttrCommand(),
			new CreatePlaceCommand(),
			new ListPlacesCommand(),
			new GoToCommand(),
			new CreateMysteryCommand(),
			new ListAllMysteriesCommand(),
			new ListMysteriesCommand(),
			new MysteryClueCommand(),
			new MysteryDetailsCommand(),
			new SaveCommand(),
			new LoadCommand(),
			new MigrateCommand(),
			new AddLogCommand(),
			new LogsCommand(),
			new RemoveLogCommand(),
			new AddItemCommand(),
			new RemoveItemCommand(),
			new SetTaskProgressCommand(),
			new ListTasksCommand(),
			new ListAllTasksCommand(),
			new CreateTaskCommand(),
			new AddProgressToTask(),
			new SetDifficultyCommand(),
			new CreateRandomCharacterCommand(),
			new CreateRandom2CharacterCommand(),
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


	// makeCommands
	// fills the commands given a command array
	private makeCommands( new_commands : Command[] ) : void {
		this.commands = {}
		new_commands.forEach( command => {
			this.commands[command.name] = command
		})
	}


	// getters
	get storage() : Storage { return this._storage; }

}
