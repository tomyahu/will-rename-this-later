import {Controller} from "../Controller"
import {Command} from "./Command";

export class PingCommand extends Command {

	constructor() {
		super();
		this._name = "ping";
		this._description = "Responds with pong";
	}


	// execute
	// prints pong in the console, just for testing
	public execute(ctrl : Controller, args : string[]) : void {
		console.log("pong");
	}
}