import { Controller } from "../Controller";
import { Command } from "./Command";


export class GoToCommand extends Command {
	
	constructor() {
		super();
		this._name = "l-go";
		this._description = "Goes to a new location";
		this._category = "locations";
	}

	// execute
	// goes to a new location
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length < 0 )
			return console.log("This command requires the name of the place to go to;")

		let storage = ctrl.storage;
		let place_name = args.join(" ");
		let place = storage.getPlace( place_name );
		if( place === undefined )
			return console.log(`${place_name} is not a valid place`)
		
		storage.current_place = storage.getPlace( place_name );
		
		let party = storage.party;
		let log_msg = `The group goes to ${place_name}`;
		if( party.size == 1 ) {
			let party_member = Array.from( party )[0];
			log_msg = `${party_member} goes to ${place_name}`;
		}

		console.log(log_msg)
		storage.logs.push(log_msg);
	}

}