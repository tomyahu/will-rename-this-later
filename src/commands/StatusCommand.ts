import { Controller } from "../Controller";
import { Place } from "../entities/Place";
import { Command } from "./Command";


export class StatusCommand extends Command {

	constructor() {
		super();
		this._name = "status";
		this._description = "Shows the current status of the game"
	}


	// execute
	// shows the current status of the game
	public execute(ctrl: Controller, args: string[]): void {
		let storage = ctrl.storage;

		let current_place = storage.current_place;
		console.log("-- Place --")
		console.log(`${current_place.name} <${current_place.difficulty}>`);
		console.log("")

		let party = Array.from(storage.party);
		console.log("-- Party --")
		for( let character_name of party ) {
			console.log(character_name)
		}
	}
}