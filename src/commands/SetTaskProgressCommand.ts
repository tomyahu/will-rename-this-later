import * as readline from 'readline-sync';
import { Controller } from "../Controller";
import { Command } from "./Command";

export class SetTaskProgressCommand extends Command {

	constructor() {
		super();
		this._name = "t-set";
		this._description =  "Sets the progress of an existing task";
		this._category = "tasks";
	}

	// execute
	// adds progress to a task
	public execute(ctrl: Controller, args : string[]): void {
		if( args.length != 1 )
			return console.log("This command requires the id of the task")

		let storage = ctrl.storage;
		let task_id = Number.parseInt( args[0] );
		let tasks = storage.getTasks();
		if( task_id < 0 || task_id >= tasks.length )
			return console.log("No task with that id found.");

		let task = tasks[task_id];

		let splitted_answer = readline.question("Progress: ").split(" ");
		if( splitted_answer.length != 1 )
			return console.log("the amount of progress done is required");

		let task_progress = Number.parseInt( splitted_answer[0] );
		task.setProgress( task_progress );
	}
}