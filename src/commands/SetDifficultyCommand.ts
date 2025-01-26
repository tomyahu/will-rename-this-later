import * as readline from 'readline-sync';
import { Controller } from "../Controller";
import { Command } from "./Command";

export class SetDifficultyCommand extends Command {

	constructor() {
		super();
		this._name = "l-dif";
		this._description =  "Sets the difficulty of a location ";
		this._category = "locations";
	}

	// execute
	// sets the difficulty of a location
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length < 1 )
			return console.log("This command requires a valid location");

		let storage = ctrl.storage;
		let location_name = args.join(" ");
		let location = storage.getPlace( location_name );

		if( ! location )
			return console.log(`Location ${location_name} doesn't exists`);

		let splitted_answer = readline.question("Difficulty: ").split(" ");
		if( splitted_answer.length != 1 )
			return console.log("the new difficuylty is required");

		let new_difficulty = Number.parseInt( splitted_answer[0] );
		location.difficulty = new_difficulty;
		console.log(`${location.name}'s new difficulty is ${location.difficulty}`);

	}
}