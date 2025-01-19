import * as readline from 'readline-sync';
import { Controller } from "../Controller";
import { Command } from "./Command";
import { Task } from '../entities/Task';

export class CreateTaskCommand extends Command {

	constructor() {
		super();
		this._name = "t-create";
		this._description =  "Creates a new task";
		this._category = "tasks";
	}

	// execute
	// creates a character and adds it to the storage
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length == 0 )
			return console.log("This command requires the name of the task.")

		let storage = ctrl.storage;
		let task_name = args.join(" ");

		let splitted_answer = readline.question("Hearts: ").split(" ");
		if( splitted_answer.length != 1 )
			return console.log("the amount of hearts fot the goal is required");

		let task_goal = Number.parseInt( splitted_answer[0] );

		let task = new Task( task_name, task_goal );

		storage.addTask( task );
		console.log(`Task ${task_name} succesfully added to the storage`);
	}
}