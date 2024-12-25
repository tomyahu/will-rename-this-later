import { Controller } from "../Controller";
import { Command } from "./Command";


export class AddToPartyCommand extends Command {

	constructor() {
		super();
		this._name = "party_add";
		this._description = "Adds a new member to the party";
	}


	// execute
	// adds a new character to the party
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length == 0 )
			return console.log("This command requires the name of the character to add to the party")

		let character_name = args.join(" ");

		let storage = ctrl.storage;
		let character = storage.getCharacter( character_name );
		let party = storage.party;

		if( character === undefined )
			return console.log(`${character_name} doesn't exists`)

		if( party.has(character_name) )
			return console.log(`${character_name} is already in the party`)

		let log_string = `${character_name} joined the party!`;
		party.add(character_name);
		console.log(log_string);
		storage.logs.push(log_string);
	}

}