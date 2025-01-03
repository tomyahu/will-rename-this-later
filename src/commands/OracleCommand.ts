import { Controller } from "../Controller";
import { WordGenerator } from "../lib/WordGenerator";
import { Command } from "./Command";


export class OracleCommand extends Command {

	constructor() {
		super();
		this._name = "oracle";
		this._description = "Asks the oracle a question";
	}


	public execute(ctrl: Controller, args: string[]): void {
		let storage = ctrl.storage;
		if( storage.called_oracle )
			return console.log("Oracle already called this turn")

		let rand = Math.random()
		if( rand < 0.25 )
			console.log("No");
		else if( rand < 0.25 )
			console.log(`No but ${WordGenerator.randomWord()}`);
		else if( rand < 0.25 )
			console.log(`Yes but ${WordGenerator.randomWord()}`);
		else
			console.log("Yes");

		storage.called_oracle = true
	}
}