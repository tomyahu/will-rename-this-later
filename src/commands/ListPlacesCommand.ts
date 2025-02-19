import { Controller } from "../Controller";
import { Command } from "./Command";


export class ListPlacesCommand extends Command {

	constructor() {
		super()
		this._name = "l-list";
		this._description = "Shows a list of all places";
		this._category = "locations";
	}


	// execute
	// lists all the places in the storage
	public execute(ctrl: Controller, args : string[]): void {
		let storage = ctrl.storage;
		let places = storage.places;
		
		Object.values(places).forEach( place => {
			console.log( place.name );
		});
	}

}