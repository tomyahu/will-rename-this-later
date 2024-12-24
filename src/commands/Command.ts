import {Controller} from "../Controller"


export abstract class Command {
	protected _name : string;
	protected _description: string;

	constructor() {}

	// execute
	// the action of the command to execute
	public execute(ctrl : Controller, args : string[]) : void {}


	// getters
	get name() : string { return this._name; }
	get description() : string { return this._description; }
}