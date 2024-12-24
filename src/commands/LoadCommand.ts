import { Command } from "./Command";
import { Controller } from "../Controller";


export class LoadCommand extends Command {
	
	constructor() {
		super();
		this._name = "load";
		this._description = "Loads a save data.";
	}


	// execute
	// loads data from a save file
	public execute(ctrl : Controller, args : string[]) : void {
		if( args.length > 1 )
			return console.log("Load accepts at most one command, the path from where to load the file");

		if ( args.length == 1 )
			ctrl.storage.data_path = args[0];
		
		ctrl.storage.load()
	}
}