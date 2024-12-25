import { Controller } from "../Controller";
import { Command } from "./Command";


export class RemoveFromPartyCommand extends Command {

	constructor() {
		super();
		this._name = "party_rm";
		this._description = "Removes a member to the party";
	}


	// execute
	// removes a character from the party
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length == 0 )
			return console.log("This command requires the name of the character to remove from the party")

		let character_name = args.join(" ");

		let storage = ctrl.storage;
		let character = storage.getCharacter( character_name );
		let party = storage.party;

		if( character === undefined )
			return console.log(`${character_name} doesn't exists`)

		if( ! party.has(character_name) )
			return console.log(`${character_name} isn't in the party`)

		let log_string = `${character_name} left the party.`;
		party.delete(character_name);
		console.log(log_string);
		storage.logs.push(log_string);
	}

}