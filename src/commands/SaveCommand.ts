import { Command } from "./Command";
import { Controller } from "../Controller";


export class SaveCommand extends Command {
	
	constructor() {
		super();
		this._name = "save";
		this._description = "Saves the current data.";
		this._category = "files";
	}

	// execute
	// saves the storage data to a save file
	public execute(ctrl : Controller, args : string[]) : void {
		if( args.length > 1 )
			return console.log("Save accepts at most one command, the path of where to save the file");

		if ( args.length == 1 )
			ctrl.storage.data_path = args[0];

		ctrl.storage.save()
	}
}