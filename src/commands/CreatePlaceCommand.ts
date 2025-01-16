import { Controller } from "../Controller";
import { Place } from "../entities/Place";
import { Command } from "./Command";


export class CreatePlaceCommand extends Command {

	constructor() {
		super();
		this._name = "l-create";
		this._description = "Creates a new place";
		this._category = "locations";
	}


	public execute(ctrl: Controller, args: string[]): void {
		if( args.length < 1 )
			return console.log("This command requires a name for the place to create")

		let storage = ctrl.storage;
		storage.addPlace(
			new Place(args.join(" "))
		);
	}
}