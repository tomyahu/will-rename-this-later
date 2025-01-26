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
		if( rand < 0.5 )
			console.log("No");
		else
			console.log("Yes");

		storage.called_oracle = true
	}
}
