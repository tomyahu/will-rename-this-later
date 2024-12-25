import { Command } from "./Command";
import { Controller } from "../Controller";


export class MigrateCommand extends Command {

	constructor() {
		super();
		this._name = "migrate";
		this._description = "Migrates the contents of a save file to the current version";
		this._category = "files";
	}


	// execute
	// migrates data from an old save file to the current version
	public execute(ctrl : Controller, args : string[]) : void {
		if( args.length > 1 )
			return console.log("Migrate accepts at most one command, the path from where to load the file");

		if ( args.length == 1 )
			ctrl.storage.data_path = args[0];
		
		ctrl.storage.migrate();
	}

}