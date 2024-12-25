import { Controller } from "../Controller";
import { Command } from "./Command";


export class NewTurnCommand extends Command {

	constructor() {
		super();
		this._name = "nt";
		this._description = "Ends the current turn and starts a new turn";
	}


	// execute
	// ends the current turn and starts the next turn
	public execute(ctrl: Controller, args: string[]): void {
		let storage = ctrl.storage;
		storage.called_oracle = false;

		console.log(`New turn`);
	}
}