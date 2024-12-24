import {Controller} from "../Controller"


export abstract class Command {
	protected _name : string;
	protected _description: string;

	constructor() {}

	public execute(ctrl : Controller, args : string[]) : void {}

	get name() : string {
		return this._name;
	}

	get description() : string {
		return this._description;
	}
}